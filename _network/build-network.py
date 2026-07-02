#!/usr/bin/env python3
"""Build the API Evangelist areas network registry + related-area graph.

Reads every info-area repo under api-evangelist/info/, extracts identity + tags
from _data/area.yml (falling back to _config.yml for the 4 bespoke sites), computes
related areas by tag/name overlap, and writes:
  - posts/_network/network-areas.yml  (source of truth: all areas)
  - <each conforming repo>/_data/network.yml  (full list + this area's related)
Only the 74 template-conforming repos receive _data/network.yml; the 4 bespoke
sites (discovery, network, partners, search) are still listed in the registry so
they are linked TO, but are not templated.
"""
import os, re, sys, yaml

INFO = "/Users/kinlane/GitHub/api-evangelist/info"
OUT  = "/Users/kinlane/GitHub/api-evangelist/posts/_network/network-areas.yml"
BESPOKE = {"discovery", "network", "partners", "search"}

STOP = set("api apis the a an and or of for to in on with your you index topic "
           "collection covering services tooling open source solutions curated".split())

def clean_desc(d, n=180):
    d = re.sub(r"\s+", " ", (d or "")).strip()
    return d if len(d) <= n else d[:n].rsplit(" ", 1)[0] + "…"

def load_area(slug):
    repo = os.path.join(INFO, slug)
    cname = os.path.join(repo, "CNAME")
    url = None
    if os.path.exists(cname):
        url = "https://" + open(cname).read().strip()
    ay = os.path.join(repo, "_data", "area.yml")
    name = desc = None; tags = []
    if os.path.exists(ay):
        data = yaml.safe_load(open(ay)) or {}
        meta = data.get("meta", {}) or {}
        name = meta.get("name"); desc = meta.get("description")
        tags = meta.get("tags") or []
    # fallback to _config.yml (bespoke sites)
    cfg = os.path.join(repo, "_config.yml")
    if (not name or not desc) and os.path.exists(cfg):
        c = yaml.safe_load(open(cfg)) or {}
        name = name or c.get("title")
        desc = desc or c.get("description")
        url = url or c.get("url")
    if not url:
        url = f"https://{slug}.apievangelist.com"
    return {
        "slug": slug,
        "name": name or slug.replace("-", " ").title(),
        "url": url.rstrip("/"),
        "icon": url.rstrip("/") + "/icon.png",
        "description": clean_desc(desc),
        "tags": [str(t) for t in tags],
        "conforming": slug not in BESPOKE and os.path.exists(ay),
    }

def tokens(a):
    t = set(w.lower() for tag in a["tags"] for w in re.split(r"[^a-z0-9]+", tag.lower()) if w)
    t |= set(w for w in re.split(r"[^a-z0-9]+", a["name"].lower()) if w and w not in STOP)
    return t - STOP

def main():
    slugs = sorted(d for d in os.listdir(INFO)
                   if os.path.isdir(os.path.join(INFO, d)) and not d.startswith("."))
    areas = [load_area(s) for s in slugs]
    tok = {a["slug"]: tokens(a) for a in areas}

    # related: rank by shared-token overlap (Jaccard), top 6
    for a in areas:
        ta = tok[a["slug"]]
        scored = []
        for b in areas:
            if b["slug"] == a["slug"]:
                continue
            tb = tok[b["slug"]]
            inter = ta & tb
            if not inter:
                continue
            j = len(inter) / len(ta | tb)
            scored.append((j, len(inter), b["slug"]))
        scored.sort(reverse=True)
        a["related"] = [s for _, _, s in scored[:6]]

    with open(OUT, "w") as f:
        yaml.safe_dump({"areas": areas}, f, sort_keys=False, allow_unicode=True, width=100)
    conf = sum(1 for a in areas if a["conforming"])
    norel = [a["slug"] for a in areas if not a["related"]]
    print(f"registry: {len(areas)} areas ({conf} conforming, {len(areas)-conf} bespoke)")
    print(f"areas with NO related match: {norel or 'none'}")
    # show a few related samples
    for s in ("agents", "gateway", "security", "testing", "monetization"):
        a = next((x for x in areas if x["slug"] == s), None)
        if a: print(f"  {s:14s} -> {', '.join(a['related'])}")

if __name__ == "__main__":
    main()
