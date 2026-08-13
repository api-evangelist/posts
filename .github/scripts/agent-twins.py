#!/usr/bin/env python3
"""
Agent twins — emit a markdown twin of every editorial page, at its own URL.

Phase 0 of the agent-ad rollout (research/agent-ad-serving/ROLLOUT-laneworks.md).
Agents do not execute JavaScript, so every Laneworks slot on the network currently
serves them nothing. This gives agents a document to fetch, and gives us an impression
to count.

The one rule that matters: THE TWIN IS SERVED TO EVERYONE, AT ITS OWN URL, IDENTICAL
BYTES. We never vary a response by user-agent. Varying content by client is cloaking,
it is what Time does, and doing it would compromise the audit tool we publish. The twin
is linked from the HTML with <link rel="alternate" type="text/markdown"> so it is
discoverable without impersonating anything.

    python3 agent-twins.py --property ae-posts --dry-run
    python3 agent-twins.py --property ae-posts
    python3 agent-twins.py --all
    python3 agent-twins.py --property ae-papers --with-ads    # phase 1

Phase 0 emits NO advertising. --with-ads turns on the house-inventory block and is
gated behind the 30-day fetch measurement; the renderer, the 15% cap and the chunk
disclosure test are all built and tested so phase 1 is a flag flip, not a rewrite.
"""

import argparse
import hashlib
import json
import os
import re
import sys
from datetime import date

GITHUB = os.environ.get("GITHUB_ROOT", os.path.expanduser("~/GitHub"))
HERE = os.path.dirname(os.path.abspath(__file__))

# Inventory: the ad network repo locally, or a vendored copy in CI where only the
# property repo is checked out. Phase 0 needs neither — it emits no ads.
INVENTORY = os.environ.get("LANEWORKS_INVENTORY") or os.path.join(
    HERE, "..", "config", "inventory.json")

# Blueprint rule 3: advertiser copy may not exceed this share of document bytes.
# A cap that is not enforced in code is a press release.
AD_BYTE_CAP = 0.15
# Blueprint rule 2: every chunk carrying advertiser copy must carry the disclosure.
CHUNK_TOKENS = 500
CHARS_PER_TOKEN = 4  # rough, deliberately conservative

# Published beside the twins. Maps document -> the ad this build put in it, so an
# agent fetch (which only ever reports a path) can be attributed to an ad offline.
MANIFEST_NAME = "agent-twins-manifest.json"

# ---------------------------------------------------------------------------
# Properties. Editorial and profile surfaces only — decided 2026-08-12.
# Machine-artifact trees (schemas/, examples/, json-structure/, the 93k apis pages)
# are deliberately excluded: already machine-readable, no prose, nowhere sensible
# to put an ad, and twinning them would roughly double build output for 30G+ of
# content nobody would cite.
# ---------------------------------------------------------------------------
PROPERTIES = {
    "ae-posts": {
        "src": f"{GITHUB}/api-evangelist/posts/_posts",
        "site": f"{GITHUB}/api-evangelist/posts/_site",
        "base": "https://apievangelist.com",
        "permalink": "/:year/:month/:day/:title/",
        "collection": "_posts/",
        "kind": "post",
        # head.html stamps a raw.githubusercontent alternate on every page, so we can
        # invert it and let Jekyll tell us which source made which URL. Only this
        # property has that convention.
        "discover": "build",
    },
    "ae-papers": {
        "src": f"{GITHUB}/api-evangelist/papers/_papers",
        "site": f"{GITHUB}/api-evangelist/papers/_site",
        "base": "https://papers.apievangelist.com",
        "permalink": "/:slug/",
        "collection": "_papers/",
        "kind": "paper",
        # No markdown-alternate convention in this site's layouts, so there is nothing
        # to invert — discovery has to come off the source collection.
        "discover": "source",
        # Papers are a PAID product. _papers/*.md holds the teaser only (~1.5KB bodies);
        # the full text lives elsewhere and must never reach a twin. Belt and braces:
        # refuse to emit a paper twin whose body exceeds this.
        "max_body_bytes": 8000,
    },
    # apis.io. Different shape entirely: provider pages carry no prose body — the
    # value is 47 structured frontmatter fields (Stripe's source file is 137KB of
    # them). So the twin is RENDERED from the data rather than passed through, which
    # is also the document an agent actually wants when asked about a provider.
    # No Cloudflare Worker here (S3/CloudFront), so there is no Accept negotiation —
    # the twin's own URL plus the alternate link is the whole surface.
    "apisio-providers": {
        "src": f"{GITHUB}/api-search/providers/_providers",
        "site": f"{GITHUB}/api-search/providers/_site",
        "base": "https://apis.io",
        "permalink": "/providers/:name/",
        "collection": "_providers/",
        "kind": "provider",
        "discover": "source",   # no markdown-alternate convention to invert yet
    },
    "ae-guidance": {
        "src": f"{GITHUB}/api-evangelist/guidance",
        "site": f"{GITHUB}/api-evangelist/guidance/_site",
        "base": "https://guidance.apievangelist.com",
        "permalink": "/:path/",
        "collection": "",
        "kind": "guidance",
        "discover": "source",
    },
}


# ---------------------------------------------------------------------------
# Frontmatter
# ---------------------------------------------------------------------------
# Jekyll's own frontmatter boundary: the first line that is exactly `---`.
# Splitting on the first `---` ANYWHERE is wrong — apis.io provider files carry a
# `source_yaml:` value with a whole embedded YAML document inside it, dashes and all,
# and a naive split truncates mid-scalar. (Same family as the known source_yaml trap:
# never treat that field as data.)
FRONTMATTER = re.compile(r"\A---[ \t]*\r?\n(.*?)\r?\n---[ \t]*\r?\n?", re.S)


def parse_frontmatter(text):
    """Return (frontmatter dict, body). Tolerates the loose YAML in these repos."""
    m = FRONTMATTER.match(text)
    if not m:
        return {}, text
    raw, body = m.group(1), text[m.end():]
    try:
        import yaml
        fm = yaml.safe_load(raw) or {}
        if not isinstance(fm, dict):
            fm = {}
    except Exception:
        fm = {}
        for line in raw.splitlines():
            m = re.match(r"^([a-zA-Z_][\w-]*):\s*(.*)$", line)
            if m:
                fm[m.group(1)] = m.group(2).strip().strip("'\"")
    return fm, body.strip()


def slugify(s):
    return re.sub(r"[^a-z0-9]+", "-", str(s).lower()).strip("-")


def permalink_for(prop, path, fm):
    """Resolve the built URL path for a source file, from frontmatter + pattern."""
    name = os.path.basename(path)
    pattern = prop["permalink"]
    if pattern == "/providers/:name/":
        return f"/providers/{os.path.splitext(name)[0]}/"
    if pattern == "/:slug/":
        slug = fm.get("slug") or os.path.splitext(name)[0]
        return f"/{slug}/"
    if pattern == "/:year/:month/:day/:title/":
        m = re.match(r"(\d{4})-(\d{2})-(\d{2})-(.+)\.md$", name)
        if not m:
            return None
        y, mo, d, title = m.groups()
        return f"/{y}/{mo}/{d}/{title}/"
    if pattern == "/:path/":
        rel = os.path.relpath(path, prop["src"])
        rel = re.sub(r"\.md$", "", rel)
        rel = re.sub(r"/index$", "", rel)
        return f"/{rel}/"
    return None


# ---------------------------------------------------------------------------
# House ad rendering (phase 1)
# ---------------------------------------------------------------------------
def load_house_inventory():
    """
    HOUSE TIER ONLY.

    The inventory also carries 66 `leader` and 5 `partner` ads naming third parties
    (Stripe, Plaid, NHS England...), and leader copy embeds a live Kin Score. Those
    are earned placements, not sold — but putting a third party's name and score
    inside a document an agent ingests pushes it into the citation corpus, which is
    the score-laundering failure the blueprint prohibits. Agent twins carry only
    API Evangelist's own products.
    """
    with open(os.path.abspath(INVENTORY)) as f:
        data = json.load(f)
    ads = data if isinstance(data, list) else data.get("ads", data)
    return [a for a in ads if a.get("tier") == "house"]


def pick_ad(canonical, inventory):
    """
    Deterministic assignment by slug hash.

    A static file cannot rotate per request, so rotation spreads across the corpus
    instead of over time, and reshuffles whenever inventory changes. Every weight is
    1 — including papers, which are ~59% of serves and deliberately left that way.
    """
    if not inventory:
        return None
    h = hashlib.sha256(canonical.encode()).hexdigest()
    return inventory[int(h[:8], 16) % len(inventory)]


def render_ad(ad):
    """
    Blueprint rule 2: disclosure per chunk, not per document.

    Every line of ad copy opens with `Sponsored by <brand>:` inside a blockquote, so a
    chunker splitting on paragraphs cannot produce a chunk of advertiser copy stripped
    of its disclosure. Heading is H4 — never H2 — so an ad can never become a document
    section in an outline-aware chunker. No FAQPage JSON-LD: that format is for
    publisher facts, and using it for brand claims is the most-copied mistake in Time's
    design.
    """
    brand = ad.get("advertiser", "API Evangelist")
    d = f"Sponsored by {brand}:"
    lines = [
        "",
        "---",
        "",
        f"#### Sponsored — {brand}",
        "",
        f"> {d} {ad.get('kicker', '').strip()}",
        f"> {d} {ad.get('message', '').strip()}",
    ]
    if ad.get("blurb"):
        lines.append(f"> {d} {ad['blurb'].strip()}")
    lines += [
        f"> {d} [{ad.get('cta', 'Read more')}]({ad.get('url', '')})",
        f"> {d} This is a sponsored placement from {brand}. Last updated {date.today()}.",
        "",
    ]
    return "\n".join(lines)


def chunk_disclosure_ok(doc, ad_text, brand):
    """
    Cut the document into fixed chunks with no overlap; every chunk containing any
    advertiser assertion must name the brand and say 'sponsored'. Mechanical, and it
    belongs in the build rather than in a style guide.
    """
    if not ad_text.strip():
        return True, []
    size = CHUNK_TOKENS * CHARS_PER_TOKEN
    ad_lines = [l.strip("> ").strip() for l in ad_text.splitlines()
                if l.strip().startswith(">") and l.strip("> ").strip()]
    failures = []
    for i in range(0, len(doc), size):
        chunk = doc[i:i + size]
        carries_ad = any(line and line in chunk for line in ad_lines)
        if not carries_ad:
            continue
        low = chunk.lower()
        if brand.lower() not in low or "sponsored" not in low:
            failures.append(i // size)
    return not failures, failures


# ---------------------------------------------------------------------------
# Twin
# ---------------------------------------------------------------------------
# Title-casing turns mcp_server into "Mcp Server" and openapi_examples into
# "Openapi Examples". This is text an agent ingests and may quote back, so spell the
# acronyms the way the industry does.
_ACRONYMS = {"Mcp": "MCP", "Openapi": "OpenAPI", "Api": "API", "Apis": "APIs",
             "Sdk": "SDK", "Url": "URL", "Json": "JSON", "Ld": "LD", "A2a": "A2A",
             "Finops": "FinOps", "Graphql": "GraphQL", "Asyncapi": "AsyncAPI"}


def _label(key):
    words = key.replace("_", " ").title().split()
    return " ".join(_ACRONYMS.get(w, w) for w in words)


def _fmt_dim(v):
    if v is True:
        return "yes"
    if v is False:
        return "no"
    return str(v)


def _listing(items, heading, cap=40):
    """
    Render a capped list. Silent truncation reads as complete coverage; say so.

    Entries are provider-supplied artifact data, so the shape drifts — some lists hold
    dicts, some hold bare strings. Type-guard rather than trust the contract; the
    network's own build has been taken down twice by exactly this
    (see network/CLAUDE.md, "a full rebuild can silently DROP providers").
    """
    if not items:
        return []
    out = [f"## {heading} ({len(items)})", ""]
    for it in items[:cap]:
        if not isinstance(it, dict):
            out.append(f"- **{str(it)}**")
            continue
        name = it.get("name") or it.get("label") or it.get("slug") or "—"
        desc = str(it.get("description") or it.get("summary_line") or "").strip()
        desc = re.sub(r"\s+", " ", desc)
        if len(desc) > 180:
            desc = desc[:177] + "..."
        out.append(f"- **{name}**" + (f" — {desc}" if desc else ""))
    if len(items) > cap:
        out.append(f"- …and {len(items) - cap} more, listed in full on the page.")
    out.append("")
    return out


def render_provider(fm, canonical):
    """
    Render an apis.io provider profile from its structured data.

    Provider source files carry no prose — the value is 47 frontmatter fields. This
    is the document an agent actually wants when asked about a provider, and it is
    the same data the HTML page renders, so the two cannot disagree.
    """
    name = fm.get("name") or fm.get("slug") or "Provider"
    out = [f"# {name}", ""]

    meta = [f"**Canonical:** {canonical}"]
    if fm.get("website"):
        meta.append(f"**Website:** {fm['website']}")
    if fm.get("api_count") is not None:
        meta.append(f"**APIs profiled:** {fm['api_count']}")
    out += ["  \n".join(meta), ""]

    if fm.get("description"):
        out += [re.sub(r"\s+", " ", str(fm["description"]).strip()), ""]

    score = fm.get("score") or {}
    if score.get("composite") is not None:
        out += [f"## Kin Score — {score['composite']} / 100 "
                f"({score.get('band', 'unbanded')})", ""]
        line = (f"Scored {score.get('scored_at', 'n/a')} under rubric "
                f"{score.get('schema_version', 'n/a')}.")
        if score.get("trend"):
            line += (f" Trend: {score['trend']}"
                     + (f" ({score['delta']:+} from {score.get('previous_composite')})"
                        if score.get("delta") is not None else "") + ".")
        out += [line, ""]
        facets = score.get("facets") or {}
        if facets:
            out += ["| Facet | Score |", "|---|---|"]
            out += [f"| {_label(k)} | {v} |" for k, v in facets.items()]
            out.append("")
        reg = score.get("regulatory") or {}
        if reg.get("applies"):
            out += [f"Regulatory layer — **{reg.get('regime', 'n/a')}**: "
                    f"{reg.get('score', 'n/a')} (matched via {reg.get('matched_via', 'n/a')}).", ""]

    ar = fm.get("agent_readiness") or {}
    if ar.get("score") is not None:
        out += [f"## Agent readiness — {ar['score']} ({ar.get('band', 'unbanded')})", ""]
        dims = ar.get("dimensions") or {}
        if dims:
            out += ["| Dimension | Value |", "|---|---|"]
            out += [f"| {_label(k)} | {_fmt_dim(v)} |" for k, v in dims.items()]
            out.append("")

    am = fm.get("access_model") or {}
    if am.get("label"):
        out += ["## Access", "",
                f"{am['label']} — onboarding: {am.get('onboarding', 'n/a')}, "
                f"pricing: {am.get('pricing', 'n/a')}, "
                f"trial: {'yes' if am.get('trial') else 'no'} "
                f"(confidence: {am.get('confidence', 'n/a')}).", ""]

    for key, heading in (("apis", "APIs"), ("mcp_servers", "MCP servers"),
                         ("agentic_access", "Agentic access"), ("security", "Security"),
                         ("plans", "Plans"), ("use_cases", "Use cases")):
        v = fm.get(key)
        if isinstance(v, list):
            out += _listing(v, heading)

    if fm.get("tags"):
        out += ["## Tags", "", ", ".join(str(t) for t in fm["tags"]), ""]

    out += ["---", "",
            "Profiled by [API Evangelist](https://apievangelist.com) and published on "
            f"[APIs.io]({canonical}). Scores are computed from the provider's own "
            "public artifacts under a published rubric.", ""]
    return "\n".join(out)


def render_twin(fm, body, canonical, prop, ad=None):
    if prop["kind"] == "provider":
        doc = render_provider(fm, canonical)
        ad_text = ""
        if ad:
            ad_text = render_ad(ad)
            doc += ad_text
        return doc, ad_text

    title = str(fm.get("title", "")).strip().strip("'\"")
    head = [f"# {title}" if title else "", ""]
    meta = []
    if fm.get("date"):
        meta.append(f"**Published:** {str(fm['date'])[:10]}")
    author = fm.get("author")
    if isinstance(author, dict):
        author = author.get("name") or author.get("display_name")
    if author:
        meta.append(f"**Author:** {author}")
    if fm.get("updated"):
        meta.append(f"**Updated:** {fm['updated']}")
    meta.append(f"**Canonical:** {canonical}")
    head += ["  \n".join(meta), ""]

    if prop["kind"] == "paper":
        # Teaser surface only. Never the paid text.
        if fm.get("tagline"):
            head += [f"*{fm['tagline']}*", ""]
        head += [body, ""]
        if fm.get("outline"):
            head += ["## Contents", ""]
            head += [f"- {o}" for o in fm["outline"]]
            head += ["", f"**This is a paid report.** Full text at {canonical}", ""]
    else:
        head += [body, ""]

    doc = "\n".join(head).strip() + "\n"
    ad_text = ""
    if ad:
        ad_text = render_ad(ad)
        doc = doc + ad_text
    return doc, ad_text


ALT_LINK = ('<link rel="alternate" type="text/markdown" title="Markdown source" '
            'href="{href}">')

# The apievangelist.com Cloudflare Worker (api-evangelist/cloudflare-worker) already
# does Accept: text/markdown negotiation by reading the FIRST
# <link rel="alternate" type="text/markdown"> out of the HTML and serving that href.
# So appending a second link is a silent no-op — the pre-existing raw.githubusercontent
# link keeps winning. We must REPLACE the first one, not add to it.
FIRST_MD_ALT = re.compile(
    r'<link\b[^>]*rel=["\']?alternate["\']?[^>]*type=["\']?text/markdown["\']?[^>]*>'
    r'|<link\b[^>]*type=["\']?text/markdown["\']?[^>]*rel=["\']?alternate["\']?[^>]*>',
    re.I)


def inject_alternate(html_path, href):
    """
    Point the page's markdown alternate at our on-domain twin. Idempotent.

    Replaces an existing markdown alternate if there is one (there is, on AE), else
    inserts before </head>.
    """
    if not os.path.exists(html_path):
        return "no-html"
    with open(html_path, encoding="utf-8", errors="replace") as f:
        html = f.read()
    tag = ALT_LINK.format(href=href)
    m = FIRST_MD_ALT.search(html)
    if m:
        if f'href="{href}"' in m.group(0):
            return "already"
        html = html[:m.start()] + tag + html[m.end():]
        result = "replaced"
    else:
        if "</head>" not in html:
            return "no-head"
        html = html.replace("</head>", f"  {tag}\n</head>", 1)
        result = "injected"
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html)
    return result


# ---------------------------------------------------------------------------
# ---------------------------------------------------------------------------
# Build-driven discovery
#
# Computing a permalink ourselves is a losing game: Jekyll resolves it from the
# frontmatter `date` with the site timezone applied (a 2012-11-09 04:27+00:00 post
# builds to /2012/11/08/), and from `category`, which is in the permalink pattern.
# Reimplementing that math produced 53 wrong paths out of 5,194.
#
# So invert it. head.html already stamps every built page with
#   href=".../raw.githubusercontent.com/<owner>/<repo>/main/{{ page.path }}"
# which is Jekyll telling us, authoritatively, which source file produced this page.
# Walk the build, read that, and the mapping is exact by construction.
# ---------------------------------------------------------------------------
RAW_SRC = re.compile(
    r"https://raw\.githubusercontent\.com/[^/]+/[^/]+/[^/]+/(.+)$")


def discover_from_build(prop):
    """Yield (source_path, built_html_path, url_path) triples from the built site."""
    site = prop["site"]
    if not os.path.isdir(site):
        return
    root = os.path.dirname(site.rstrip("/")) or "."
    for dirpath, _dirs, files in os.walk(site):
        if "index.html" not in files:
            continue
        html_path = os.path.join(dirpath, "index.html")
        try:
            with open(html_path, encoding="utf-8", errors="replace") as f:
                head = f.read(16384)
        except OSError:
            continue
        m = FIRST_MD_ALT.search(head)
        if not m:
            continue
        href = re.search(r'href=["\']([^"\']+)["\']', m.group(0))
        if not href:
            continue
        raw = RAW_SRC.match(href.group(1))
        if not raw:
            continue
        rel = raw.group(1)
        # Only generate from the property's real content collection. A
        # `markdown_source:` override points at a hand-curated file that also lives
        # on raw.githubusercontent — the homepage's llms-home.md is exactly this —
        # and an earlier version happily overwrote it. Curated beats generated:
        # if it is not in the collection, it is a deliberate authoring choice.
        if not rel.startswith(prop["collection"]):
            continue
        src = os.path.join(root, rel)
        if not os.path.exists(src):
            continue
        url_path = "/" + os.path.relpath(dirpath, site).replace(os.sep, "/").strip("/")
        url_path = "/" if url_path == "/." else url_path.rstrip("/") + "/"
        yield src, html_path, url_path


def sources_for(prop):
    src = prop["src"]
    if not os.path.isdir(src):
        return []
    if prop["permalink"] == "/:path/":
        out = []
        for root, dirs, files in os.walk(src):
            dirs[:] = [d for d in dirs if not d.startswith("_") and d != "assets"]
            out += [os.path.join(root, f) for f in files if f.endswith(".md")]
        return sorted(out)
    return sorted(os.path.join(src, f) for f in os.listdir(src) if f.endswith(".md"))


def run(name, args):
    prop = PROPERTIES[name]
    inventory = load_house_inventory() if args.with_ads else []
    # No silent default: a property that lacks the alternate convention would
    # discover ZERO pages under build-mode and report success having written nothing.
    from_build = prop["discover"] == "build" and not args.from_source
    if from_build:
        items = list(discover_from_build(prop))
        # Build-mode keys off the raw.githubusercontent alternate that head.html
        # stamps on a FRESH build. Once we have rewritten those links to our own
        # twins, a re-run against the same _site matches nothing — correct, but it
        # would otherwise report "written=0" as a success and look like the site had
        # no content. CI always builds fresh; a human re-running locally does not.
        built = sum(1 for _dp, _d, fs in os.walk(prop["site"]) if "index.html" in fs)
        if built and len(items) < built * 0.5:
            print(f"  NOTE: only {len(items)} of {built} built pages carry an "
                  f"unprocessed markdown alternate.\n"
                  f"        This _site has probably been processed already — twins are "
                  f"in place and\n        their links point at us, not at raw GitHub. "
                  f"Rebuild the site for a real run,\n        or pass --from-source.")
    else:
        items = [(p, None, None) for p in sources_for(prop)]
    if args.limit:
        items = items[-args.limit:]

    stats = {"written": 0, "skipped": 0, "no_html": 0, "injected": 0,
             "cap_fail": 0, "chunk_fail": 0, "body_guard": 0, "future": 0, "replaced": 0, "render_fail": 0}
    manifest = []
    print(f"\n=== {name} === {len(items)} "
          f"{'built pages' if from_build else 'source files'}"
          f"{' (WITH ADS, house tier: %d)' % len(inventory) if args.with_ads else ' (phase 0, no ads)'}")

    for path, built_html, built_url in items:
        with open(path, encoding="utf-8", errors="replace") as f:
            text = f.read()
        fm, body = parse_frontmatter(text)
        if fm.get("published") is False:
            stats["skipped"] += 1
            continue
        # Build-driven: the page exists, so Jekyll already resolved its URL — including
        # the timezone and category rules we must not second-guess.
        link = built_url if built_url else permalink_for(prop, path, fm)
        # Providers legitimately carry NO body -- their content is the structured
        # frontmatter, which render_provider() turns into the document.
        needs_body = prop["kind"] != "provider"
        if not link or (needs_body and not body.strip()):
            stats["skipped"] += 1
            continue

        # Future-dated guard. Jekyll defaults to future:false, so scheduled posts are
        # NOT built and 404 on the live site — 50 of them the day this was written.
        # Emitting a twin would publish unpublished drafts at a fetchable URL.
        # Build-driven discovery gets this for free (an unbuilt post has no page), but
        # the check stays for --from-source runs.
        if prop["kind"] == "post" and not built_url:
            m = re.match(r"(\d{4}-\d{2}-\d{2})-", os.path.basename(path))
            if m and m.group(1) > str(date.today()):
                stats["future"] += 1
                continue

        cap = prop.get("max_body_bytes")
        if cap and len(body) > cap:
            print(f"  BODY GUARD  {link}  body={len(body)}B > {cap}B — refusing "
                  f"(paid text must never reach a twin)")
            stats["body_guard"] += 1
            continue

        canonical = prop["base"] + link
        ad = pick_ad(canonical, inventory) if inventory else None
        try:
            doc, ad_text = render_twin(fm, body, canonical, prop, ad)
        except Exception as exc:
            # One malformed provider must not kill the run -- but it must not vanish
            # silently either. build.py's silent ERROR-and-continue is a known defect
            # that has deleted live pages; name every casualty.
            print(f"  RENDER FAIL {link}: {type(exc).__name__}: {exc}")
            stats["render_fail"] += 1
            continue

        # A document that cannot carry an ad within the rules still gets published —
        # we drop the PLACEMENT, never the content. (Short paper teasers legitimately
        # trip the cap: a 400B unit is >15% of a 2KB document. That is the cap working,
        # and the honest response is an ad-free twin.)
        if ad_text:
            share = len(ad_text) / len(doc)
            ok, bad = chunk_disclosure_ok(doc, ad_text, ad.get("advertiser", ""))
            if share > AD_BYTE_CAP:
                if args.verbose:
                    print(f"  cap: no ad  {link}  would be {share:.1%} > {AD_BYTE_CAP:.0%}")
                stats["cap_fail"] += 1
                doc, ad_text = render_twin(fm, body, canonical, prop, None)
            elif not ok:
                print(f"  CHUNK FAIL  {link}  chunks missing disclosure: {bad}")
                stats["chunk_fail"] += 1
                doc, ad_text = render_twin(fm, body, canonical, prop, None)

        out_dir = (os.path.dirname(built_html) if built_html
                   else os.path.join(prop["site"], link.strip("/")))
        out_md = os.path.join(out_dir, "index.md")
        # ABSOLUTE href, deliberately. The Cloudflare Worker resolves the alternate with
        # fetch(href), and fetch() in a Worker rejects a relative URL outright — a
        # site-relative href would break negotiation on every page. Same-origin means one
        # nested Worker invocation, which terminates: the subrequest carries the default
        # Accept, does not prefer markdown, and so passes straight through to origin.
        href = prop["base"] + link + "index.md"

        if args.dry_run:
            stats["written"] += 1
            if args.verbose:
                print(f"  would write {out_md} ({len(doc)}B)")
            continue

        os.makedirs(out_dir, exist_ok=True)
        with open(out_md, "w", encoding="utf-8") as f:
            f.write(doc)
        stats["written"] += 1

        # Attribution manifest. Agents fetch a static document, so nothing at request
        # time knows which ad was inside it — but assignment is a pure function of the
        # URL, so the join can happen offline IF we record what this build decided.
        # Inventory changes between builds, so recomputing later would drift; this is
        # the record that makes an agent impression attributable to an ad at all.
        manifest.append({
            "path": link + "index.md",
            "ad": (ad or {}).get("id") if ad_text else None,
            "advertiser": (ad or {}).get("advertiser") if ad_text else None,
            "bytes": len(doc),
        })

        res = inject_alternate(built_html or os.path.join(out_dir, "index.html"), href)
        if res in ("injected", "replaced"):
            stats["injected"] += 1
            stats["replaced"] += (res == "replaced")
        elif res == "no-html":
            stats["no_html"] += 1

    # Published with the site rather than kept locally: the build runs on a CI runner
    # that is thrown away, so a local file would not survive. Public is fine and
    # arguably right — the blueprint says publish the mechanism, and this is the
    # mechanism. It is also what makes an outside auditor able to check our numbers.
    if manifest and not args.dry_run and not args.no_manifest:
        placed = sum(1 for m in manifest if m["ad"])
        doc = {
            "property": name,
            "generated": str(date.today()),
            "base": prop["base"],
            "with_ads": bool(args.with_ads),
            "documents": len(manifest),
            "with_placement": placed,
            "entries": manifest,
        }
        mpath = args.manifest or os.path.join(prop["site"], MANIFEST_NAME)
        os.makedirs(os.path.dirname(mpath) or ".", exist_ok=True)
        with open(mpath, "w", encoding="utf-8") as f:
            json.dump(doc, f, separators=(",", ":"))
        print(f"  manifest {len(manifest)} documents, {placed} carrying a placement "
              f"-> {os.path.basename(mpath)} ({os.path.getsize(mpath)/1e6:.1f} MB)")

    print(f"  twins {'(dry run) ' if args.dry_run else ''}written={stats['written']} "
          f"skipped={stats['skipped']} future-held={stats['future']} "
          f"alt-link set={stats['injected']} (replaced={stats['replaced']}) no-built-html={stats['no_html']}")
    if args.with_ads:
        placed = stats["written"] - stats["cap_fail"] - stats["chunk_fail"]
        print(f"  ads placed={placed}  ad-free by cap={stats['cap_fail']} "
              f"by chunk-disclosure={stats['chunk_fail']}")
    if stats["render_fail"]:
        print(f"  ⚠ RENDER FAILURES: {stats['render_fail']} — these pages have NO twin")
    if stats["body_guard"]:
        print(f"  BODY GUARD held back {stats['body_guard']} document(s)")
    return stats


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--property", choices=sorted(PROPERTIES))
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--with-ads", action="store_true",
                    help="phase 1 — render house inventory into the twins")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--limit", type=int)
    ap.add_argument("--verbose", action="store_true")
    ap.add_argument("--from-source", action="store_true",
                    help="discover from source files instead of the build (fallback; "
                         "recomputes permalinks and cannot see Jekyll's timezone rules)")
    ap.add_argument("--manifest", help=f"where to write {MANIFEST_NAME} "
                                       "(default: alongside the built site)")
    ap.add_argument("--no-manifest", action="store_true")
    ap.add_argument("--root", help="repo root, for CI where only this property is "
                                   "checked out (overrides src/site with paths under it)")
    args = ap.parse_args()

    if not args.property and not args.all:
        ap.error("need --property or --all")
    names = sorted(PROPERTIES) if args.all else [args.property]

    # In CI the property repo IS the working directory, so rebase its paths onto --root.
    if args.root:
        if len(names) != 1:
            ap.error("--root takes a single --property")
        p = PROPERTIES[names[0]]
        p["src"] = os.path.join(args.root, os.path.basename(p["src"]))
        p["site"] = os.path.join(args.root, "_site")

    total = {}
    for n in names:
        s = run(n, args)
        for k, v in s.items():
            total[k] = total.get(k, 0) + v
    if len(names) > 1:
        print(f"\nTOTAL written={total['written']} injected={total['injected']}")


if __name__ == "__main__":
    main()
