#!/usr/bin/env python3
"""Publish the agent-skill bodies at the URLs the skills index actually promises.

The index at /.well-known/agent-skills/index.json (and /skills/index.json)
advertises every skill body as `.../skills/<name>/SKILL.md` with a sha256.
Jekyll's pretty permalinks turn the `SKILL.md` SOURCE into `SKILL/index.html`,
so the advertised `.md` URL 404s -- and on this site a 404 returns the themed
blog page, which is a soft-404: an agent following the index gets 66KB of HTML
with a 404 status, and the sha256 could never match anything we serve.

Verified broken 2026-08-20: every one of the 8 advertised bodies returned 404.

This runs AFTER the Jekyll build and copies each source SKILL.md into _site
byte-for-byte, then rewrites the sha256 in every index to the bytes actually
served. The generated SKILL/index.html pages are left alone -- they are the
human-readable rendering and do not collide with the file.

Idempotent. Safe to re-run.
"""
import hashlib
import json
import pathlib
import re
import shutil
import sys

ROOT = pathlib.Path(__file__).resolve().parents[2]
SRC = ROOT / "skills"
SITE = ROOT / "_site"

# Every index that carries per-skill hashes, keyed by the built path.
INDEXES = [
    SITE / "skills" / "index.json",
    SITE / ".well-known" / "agent-skills" / "index.json",
]


def main() -> int:
    if not SITE.is_dir():
        print(f"publish-skills: no {SITE} -- run after the Jekyll build", file=sys.stderr)
        return 1

    digests = {}
    for skill in sorted(SRC.glob("*/SKILL.md")):
        name = skill.parent.name
        body = skill.read_bytes()
        dest = SITE / "skills" / name / "SKILL.md"
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(skill, dest)
        digests[name] = hashlib.sha256(body).hexdigest()
        print(f"publish-skills: {dest.relative_to(SITE)}  {len(body)}B  {digests[name][:12]}")

    if not digests:
        print("publish-skills: no skill bodies found", file=sys.stderr)
        return 1

    for index in INDEXES:
        if not index.is_file():
            print(f"publish-skills: skipping missing {index}")
            continue
        doc = json.loads(index.read_text(encoding="utf-8"))
        changed = 0
        for entry in doc.get("skills", []):
            # Derive the skill directory from the advertised URL rather than the
            # `name` field -- the URL is what an agent fetches, so it is what the
            # hash has to describe.
            match = re.search(r"/skills/([^/]+)/SKILL\.md$", str(entry.get("url", "")))
            if not match:
                continue
            digest = digests.get(match.group(1))
            if digest and entry.get("sha256") != digest:
                entry["sha256"] = digest
                changed += 1
        index.write_text(json.dumps(doc, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        print(f"publish-skills: {index.relative_to(SITE)} -- {changed} hash(es) corrected")

    missing = [
        e.get("url")
        for i in INDEXES if i.is_file()
        for e in json.loads(i.read_text(encoding="utf-8")).get("skills", [])
        if not (SITE / str(e.get("url", "")).split("apievangelist.com/", 1)[-1]).is_file()
    ]
    if missing:
        print(f"publish-skills: WARNING advertised but not published: {missing}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
