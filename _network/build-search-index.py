#!/usr/bin/env python3
"""#5 Aggregate all network resources (except posts) into posts/_data/search_extra.json.

Posts are emitted at Jekyll build time by the search-index.json template (correct
URLs/subtitles). This script gathers everything else the main site can't see locally:
areas, building-block store items, papers, and the apis.io provider catalog.
Re-runnable; safe to commit the output.
"""
import os, json, glob, yaml

GH = "/Users/kinlane/GitHub"
AE = f"{GH}/api-evangelist"
OUT = f"{AE}/posts/_data/search_extra.json"

def front_matter(path):
    try:
        txt = open(path, encoding="utf-8").read()
    except Exception:
        return None
    if not txt.startswith("---"):
        return None
    end = txt.find("\n---", 3)
    if end == -1:
        return None
    try:
        return yaml.safe_load(txt[3:end]) or {}
    except Exception:
        return None

def trim(s, n=200):
    s = " ".join(str(s or "").split())
    return s if len(s) <= n else s[:n].rsplit(" ", 1)[0] + "…"

def norm_tags(t):
    if not t: return []
    if isinstance(t, str): t = [t]
    return [str(x) for x in t][:8]

docs = []

# 1) Areas
reg = yaml.safe_load(open(f"{AE}/posts/_network/network-areas.yml"))["areas"]
for a in reg:
    docs.append({"t": "area", "n": a["name"], "d": trim(a["description"]),
                 "u": a["url"], "g": norm_tags(a.get("tags"))})

# 2) Building-block store items
BLOCKS = {"guidance":"guidance","rules":"rule","policies":"policy","standards":"standard",
          "strategies":"strategy","schema":"schema","properties":"property",
          "experiences":"experience","lifecycle":"lifecycle"}
for repo, typ in BLOCKS.items():
    base = f"https://{repo}.apievangelist.com/store"
    for md in sorted(glob.glob(f"{AE}/{repo}/_store/*.md")):
        fm = front_matter(md)
        if not fm or fm.get("visibility", "public") != "public":
            if fm is None: continue
        slug = os.path.splitext(os.path.basename(md))[0]
        docs.append({"t": typ, "n": fm.get("title", slug), "d": trim(fm.get("subtitle") or fm.get("description")),
                     "u": f"{base}/{slug}/", "g": norm_tags(fm.get("tags"))})

# 3) Papers
for md in sorted(glob.glob(f"{AE}/papers/_papers/*.md")):
    fm = front_matter(md)
    if not fm: continue
    slug = os.path.splitext(os.path.basename(md))[0]
    docs.append({"t": "paper", "n": fm.get("title", slug),
                 "d": trim(fm.get("description") or fm.get("subtitle") or fm.get("summary")),
                 "u": f"https://papers.apievangelist.com/papers/{slug}/", "g": norm_tags(fm.get("tags"))})

# 4) Providers (apis.io catalog)
prov = json.load(open(f"{AE}/info/network/service-providers/service-providers.json"))
for p in prov:
    slug = p.get("slug")
    if not slug: continue
    docs.append({"t": "provider", "n": p.get("name", slug), "d": trim(p.get("description")),
                 "u": f"https://apis.io/providers/{slug}/", "g": norm_tags(p.get("tags"))})

json.dump(docs, open(OUT, "w"), ensure_ascii=False, separators=(",", ":"))
from collections import Counter
c = Counter(d["t"] for d in docs)
print(f"search_extra.json: {len(docs)} docs -> {OUT}")
print("by type:", dict(c))
print(f"size: {os.path.getsize(OUT)//1024} KB")
