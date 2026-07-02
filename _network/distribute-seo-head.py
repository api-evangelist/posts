#!/usr/bin/env python3
"""Distribute the SEO/social head upgrade across conforming info-area repos.

Upgrades the <head> block in each area's _layouts/default.html:
  - og:title / twitter:title carry the page title (title_suffix), not just the site name
  - meta/og/twitter descriptions honor a page-level `description` front matter override
  - share image switches from the ~1.4MB square /icon.png to a generated 600x600
    /icon-social.png, with explicit og:image dimensions + alt text
  - twitter:card becomes `summary` (the icons are square — large_image crops them)
  - adds a JSON-LD WebSite block

Idempotent: only rewrites files that still contain the OLD head block verbatim;
already-upgraded or drifted/bespoke sites are skipped (reported), never corrupted.
Re-run safe. Commits + pushes each changed repo.
"""
import os, subprocess, sys, time, yaml

NET  = os.path.dirname(os.path.abspath(__file__))
INFO = "/Users/kinlane/GitHub/api-evangelist/info"

OLD = '''  <meta name="description" content="{{ site.description | strip_html | truncate: 300 }}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="canonical" href="{{ site.url }}{{ page.url }}">

  <!-- Open Graph -->
  <meta property="og:url" content="{{ site.url }}{{ page.url }}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="{{ site.title }}">
  <meta property="og:site_name" content="API Evangelist">
  <meta property="og:description" content="{{ site.description | strip_html | truncate: 300 }}">
  <meta property="og:image" content="{{ site.url }}/icon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{{ site.title }}">
  <meta name="twitter:description" content="{{ site.description | strip_html | truncate: 300 }}">
  <meta name="twitter:image" content="{{ site.url }}/icon.png">
'''

NEW = '''  <meta name="description" content="{{ page.description | default: site.description | strip_html | truncate: 300 }}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="canonical" href="{{ site.url }}{{ page.url }}">

  <!-- Open Graph -->
  <meta property="og:url" content="{{ site.url }}{{ page.url }}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="{% if page.title_suffix %}{{ page.title_suffix }} · {% endif %}{{ site.title }}">
  <meta property="og:site_name" content="API Evangelist">
  <meta property="og:description" content="{{ page.description | default: site.description | strip_html | truncate: 300 }}">
  <meta property="og:image" content="{{ site.url }}/icon-social.png">
  <meta property="og:image:width" content="600">
  <meta property="og:image:height" content="600">
  <meta property="og:image:alt" content="{{ site.title }} — API Evangelist">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="{% if page.title_suffix %}{{ page.title_suffix }} · {% endif %}{{ site.title }}">
  <meta name="twitter:description" content="{{ page.description | default: site.description | strip_html | truncate: 300 }}">
  <meta name="twitter:image" content="{{ site.url }}/icon-social.png">
  <meta name="twitter:image:alt" content="{{ site.title }} — API Evangelist">

  <!-- JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": {{ site.title | jsonify }},
    "description": {{ site.description | strip_html | jsonify }},
    "url": "{{ site.url }}",
    "publisher": { "@type": "Organization", "name": "API Evangelist", "url": "https://apievangelist.com" }
  }
  </script>
'''


def sh(cmd, cwd):
    return subprocess.run(cmd, cwd=cwd, capture_output=True, text=True)


def main():
    push = "--no-push" not in sys.argv
    areas = yaml.safe_load(open(os.path.join(NET, "network-areas.yml")))["areas"]
    done, skipped, failed = [], [], []
    for a in areas:
        slug = a["slug"]
        repo = os.path.join(INFO, slug)
        lay = os.path.join(repo, "_layouts", "default.html")
        if not a.get("conforming") or not os.path.exists(lay):
            skipped.append((slug, "bespoke/missing"))
            continue
        src = open(lay, encoding="utf-8").read()
        changed = False
        if OLD in src:
            open(lay, "w", encoding="utf-8").write(src.replace(OLD, NEW, 1))
            changed = True
        elif "icon-social.png" not in src:
            skipped.append((slug, "head drifted — not touched"))
            continue
        icon = os.path.join(repo, "icon.png")
        social = os.path.join(repo, "icon-social.png")
        if os.path.exists(icon) and not os.path.exists(social):
            r = sh(["sips", "-Z", "600", icon, "--out", social], repo)
            if r.returncode == 0:
                changed = True
            else:
                print(f"  ! {slug}: sips failed: {r.stderr.strip()}")
        if not changed:
            skipped.append((slug, "already upgraded"))
            continue
        sh(["git", "add", "_layouts/default.html", "icon-social.png"], repo)
        r = sh(["git", "-c", "commit.gpgsign=false", "commit", "-m",
                "SEO/social: page-level og/twitter meta, right-sized square share image, JSON-LD"], repo)
        if r.returncode != 0:
            skipped.append((slug, "nothing to commit"))
            continue
        if push:
            r = sh(["git", "push"], repo)
            if r.returncode != 0:
                failed.append((slug, r.stderr.strip().splitlines()[-1] if r.stderr else "push failed"))
                continue
            time.sleep(2)
        done.append(slug)
        print(f"  ok  {slug}")
    print(f"\nupgraded {len(done)}, skipped {len(skipped)}, failed {len(failed)}")
    for s, why in skipped:
        print(f"  skip {s}: {why}")
    for s, why in failed:
        print(f"  FAIL {s}: {why}")


if __name__ == "__main__":
    main()
