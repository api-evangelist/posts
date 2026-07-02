#!/usr/bin/env python3
"""#2 Agent-native surfaces across the info-area network.

Per conforming area repo:
  - llms.txt   : shared Liquid template rendering the area's own data (llmstxt.org format)
  - robots.txt : AI-crawler allowlist mirrored from the main site, with this host's sitemap
  - sitemap.xml: static, lists / and /stories/
Also writes posts/_data/network_areas.yml (trimmed registry) for the main llms.txt loop.
Idempotent; only touches the 74 conforming repos.
"""
import os, yaml

INFO = "/Users/kinlane/GitHub/api-evangelist/info"
POSTS = "/Users/kinlane/GitHub/api-evangelist/posts"
REG  = f"{POSTS}/_network/network-areas.yml"

LLMS_TEMPLATE = """---
layout: none
permalink: /llms.txt
---
# {{ site.data.area.meta.name }}

> {{ site.data.area.meta.description | strip_html | truncate: 300 }}

This is the **{{ site.data.area.meta.name }}** topic area of [API Evangelist](https://apievangelist.com) — a network of focused knowledge bases drawn from 16 years of independent API research by Kin Lane. Browse all areas at https://apievangelist.com/areas/.
{% if site.data.area.services_tools.size > 0 %}
## Services & Tools
{% for s in site.data.area.services_tools %}- [{{ s.name }}]({{ s.apisio | default: s.repo | default: 'https://apievangelist.com' }}){% if s.repo %} (repo: {{ s.repo }}){% endif %}
{% endfor %}{% endif %}{% if site.data.area.features.size > 0 %}
## Common Features
{% for f in site.data.area.features %}- **{{ f.name }}**: {{ f.description | strip_html | strip_newlines }}
{% endfor %}{% endif %}{% if site.data.area.use_cases.size > 0 %}
## Use Cases
{% for u in site.data.area.use_cases %}- **{{ u.name }}**: {{ u.description | strip_html | strip_newlines }}
{% endfor %}{% endif %}{% if site.data.network.related.size > 0 %}
## Related Areas
{% for r in site.data.network.related %}- [{{ r.name }}]({{ r.url }}): {{ r.description | strip_html | strip_newlines | truncate: 120 }}
{% endfor %}{% endif %}
## More
- [Latest {{ site.data.area.meta.name }} stories](/stories/)
- [All API Evangelist topic areas](https://apievangelist.com/areas/)
- [API Evangelist network index (llms.txt)](https://apievangelist.com/llms.txt)
"""

ROBOTS = """# robots.txt for {host}
# Content Signals: https://contentsignals.org/  (IETF draft: draft-iab-aipref)
User-agent: *
Allow: /
Content-Signal: ai-train=yes, search=yes, ai-input=yes

# AI crawlers explicitly welcome (see apievangelist.com/robots.txt for the full policy)
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: Claude-Web
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: CCBot
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: meta-externalagent
Allow: /
User-agent: Bytespider
Allow: /

Sitemap: {host}/sitemap.xml
# llms.txt: {host}/llms.txt
"""

SITEMAP = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>{host}/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>{host}/stories/</loc><changefreq>daily</changefreq><priority>0.8</priority></url>
  <url><loc>{host}/llms.txt</loc><changefreq>weekly</changefreq><priority>0.5</priority></url>
</urlset>
"""

def main():
    reg = yaml.safe_load(open(REG))["areas"]
    applied = []
    for a in reg:
        if not a["conforming"]:
            continue
        repo = os.path.join(INFO, a["slug"])
        if not os.path.exists(os.path.join(repo, "_data", "area.yml")):
            continue
        host = a["url"]  # https://<slug>.apievangelist.com
        open(os.path.join(repo, "llms.txt"), "w").write(LLMS_TEMPLATE)
        open(os.path.join(repo, "robots.txt"), "w").write(ROBOTS.format(host=host))
        open(os.path.join(repo, "sitemap.xml"), "w").write(SITEMAP.format(host=host))
        # ensure these aren't excluded by _config
        applied.append(a["slug"])

    # main-site data mirror for the Topic Areas section of llms.txt
    trimmed = [{"name": a["name"], "url": a["url"], "description": a["description"]}
               for a in sorted(reg, key=lambda x: x["name"].lower())]
    os.makedirs(f"{POSTS}/_data", exist_ok=True)
    with open(f"{POSTS}/_data/network_areas.yml", "w") as f:
        yaml.safe_dump({"areas": trimmed}, f, sort_keys=False, allow_unicode=True, width=100)

    print(f"agent-native files written to {len(applied)} area repos")
    print(f"posts/_data/network_areas.yml: {len(trimmed)} areas")

if __name__ == "__main__":
    main()
