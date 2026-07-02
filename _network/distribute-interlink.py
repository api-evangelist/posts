#!/usr/bin/env python3
"""Distribute the related-areas interlinking across conforming info-area repos.

Idempotent. Only touches repos whose index.html + default.html match the known
template hashes, so drifted/bespoke sites are skipped (reported), never corrupted.
"""
import os, re, hashlib, yaml, sys

INFO = "/Users/kinlane/GitHub/api-evangelist/info"
REG  = "/Users/kinlane/GitHub/api-evangelist/posts/_network/network-areas.yml"
INDEX_OK   = "33f15bb6f4fe0b624ee9661777d57598"   # md5 of template index.html
LAYOUT_OK  = "507bfd51712c0f3f1007accc7b94022a"   # md5 of template default.html

RELATED_INCLUDE = """<!-- Related Areas (network interlink) -->
{% if site.data.network.related and site.data.network.related.size > 0 %}
<section class="mb-5">
  <h2 class="section-title mb-3"><span class="material-symbols-outlined">hub</span>Related Areas</h2>
  <p class="text-muted small">Adjacent corners of the API Evangelist network worth exploring alongside {{ site.data.area.meta.name | escape }}.</p>
  <div class="row g-3">
    {% for r in site.data.network.related %}
    <div class="col-md-6 col-lg-4">
      <a href="{{ r.url }}" class="card h-100 text-decoration-none">
        <div class="card-body d-flex align-items-start">
          <img src="{{ r.icon | replace: 'icon.png','icon-thumb.png' }}" alt="" loading="lazy" width="40" height="40" class="flex-shrink-0 me-3" style="width:40px;height:40px;object-fit:contain;background:#fff;padding:5px;border-radius:8px;border:1px solid #e9ecef;">
          <span>
            <span class="fw-semibold d-block text-emphasis">{{ r.name | escape }}</span>
            <span class="text-muted small">{{ r.description | escape | truncate: 90 }}</span>
          </span>
        </div>
      </a>
    </div>
    {% endfor %}
  </div>
  <div class="mt-3"><a href="https://apievangelist.com/areas/" class="btn btn-outline-success btn-sm">Explore all API Evangelist areas &rarr;</a></div>
</section>
{% endif %}
"""

NAV_OLD = '<li class="nav-item"><a class="nav-link" href="https://apievangelist.com/2026/">Stories</a></li>'
NAV_NEW = NAV_OLD + '\n          <li class="nav-item"><a class="nav-link" href="https://apievangelist.com/areas/">Areas</a></li>'

FOOT_OLD = '<a href="https://apievangelist.com/about/api-evangelist" class="text-muted text-decoration-none me-3">About</a>'
FOOT_NEW = '<a href="https://apievangelist.com/areas/" class="text-muted text-decoration-none me-3">Areas</a>\n          ' + FOOT_OLD

INDEX_ANCHOR = "  <!-- Latest API Stories -->"

def md5(p): return hashlib.md5(open(p,'rb').read()).hexdigest()

def main():
    reg = yaml.safe_load(open(REG))["areas"]
    by = {a["slug"]: a for a in reg}
    def resolve(slug):
        b = by[slug]
        return {"name": b["name"], "url": b["url"], "icon": b["icon"], "description": b["description"]}

    applied, skipped = [], []
    for a in reg:
        if not a["conforming"]:
            skipped.append((a["slug"], "bespoke")); continue
        repo = os.path.join(INFO, a["slug"])
        idx = os.path.join(repo, "index.html")
        lay = os.path.join(repo, "_layouts", "default.html")
        if not (os.path.exists(idx) and os.path.exists(lay)):
            skipped.append((a["slug"], "missing files")); continue
        # gate on template hashes (allow already-patched files through by checking content)
        idx_src = open(idx).read()
        lay_src = open(lay).read()
        idx_hash_ok = md5(idx) == INDEX_OK or "include related.html" in idx_src
        lay_hash_ok = md5(lay) == LAYOUT_OK or 'href="https://apievangelist.com/areas/"' in lay_src
        if not (idx_hash_ok and lay_hash_ok):
            skipped.append((a["slug"], "drifted")); continue

        # 1) _data/network.yml
        net = {"related": [resolve(s) for s in a["related"]]}
        os.makedirs(os.path.join(repo, "_data"), exist_ok=True)
        with open(os.path.join(repo, "_data", "network.yml"), "w") as f:
            yaml.safe_dump(net, f, sort_keys=False, allow_unicode=True, width=100)

        # 2) _includes/related.html
        with open(os.path.join(repo, "_includes", "related.html"), "w") as f:
            f.write(RELATED_INCLUDE)

        # 3) index.html: inject include before Latest API Stories
        if "include related.html" not in idx_src:
            if INDEX_ANCHOR not in idx_src:
                skipped.append((a["slug"], "no story anchor")); continue
            idx_src = idx_src.replace(INDEX_ANCHOR, "  {% include related.html %}\n\n" + INDEX_ANCHOR, 1)
            open(idx, "w").write(idx_src)

        # 4) default.html: nav + footer Areas links
        if 'href="https://apievangelist.com/areas/"' not in lay_src:
            if NAV_OLD in lay_src:  lay_src = lay_src.replace(NAV_OLD, NAV_NEW, 1)
            if FOOT_OLD in lay_src: lay_src = lay_src.replace(FOOT_OLD, FOOT_NEW, 1)
            open(lay, "w").write(lay_src)

        applied.append(a["slug"])

    print(f"APPLIED: {len(applied)} repos")
    print(f"SKIPPED: {len(skipped)} -> " + ", ".join(f"{s}({why})" for s,why in skipped))

if __name__ == "__main__":
    main()
