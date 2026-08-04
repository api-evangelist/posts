#!/usr/bin/env python3
"""
Point the blog at the papers, worst-served-first by real search traffic.

5,244 posts. Eight of them link to the papers storefront — 0.2%. Meanwhile
Search Console shows 69 of 95 papers with ZERO impressions in 90 days, and the
blog pulling thousands of organic clicks into content that is topically next
door to papers we sell. The audience exists and nothing points it at the product.

MATCHING. A bad match is worse than no match, so a post gets a block only when
the evidence is strong. Three signals, and a paper has to clear a floor on the
combined score or the post is skipped:

  tags     — front-matter tags, the most deliberate signal a post carries
  queries  — what the post ACTUALLY ranks for in Search Console, weighted by
             clicks, which beats guessing at topic from the title
  title    — the post title's own tokens

LINKS USE ae_*, NEVER utm_*. apievangelist.com and papers.apievangelist.com share
GA4 property 450550172. A utm_ on this hop would start a new session and
overwrite the organic-search credit that brought the reader in — destroying the
exact attribution that identified this opportunity. GA4 ignores ae_*, so the
original source survives the click.

    python3 scripts/add_paper_links.py --dry            # review the matches
    python3 scripts/add_paper_links.py --limit 50 --apply
"""
import argparse
import collections
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
POSTS = os.path.join(REPO, "_posts")
PAPERS_REPO = os.environ.get("PAPERS_REPO",
                             os.path.expanduser("~/GitHub/api-evangelist/papers"))
GSC = os.path.expanduser("~/GitHub/revenue/data/gsc")
MARKER = "<!-- paper-link -->"
SITE = "https://papers.apievangelist.com"

# Below this the match is a guess, and a guess in public is worse than silence.
# Calibrated against a real dry run: at 3.0 the tail was nonsense — a post about
# publishing a Google Sheet matched the GV portfolio on the word "google", and
# "running a local food business on APIs" hoovered up anything containing
# business, local or data. Everything genuinely right scored 6+.
MIN_SCORE = 6.0

# A token shared by many papers says nothing. Overlap is weighted by inverse
# document frequency so "schema" or "mcp" counts and "api", "state" or "data"
# barely does.
MIN_DISTINCT = 1.4

# ...but IDF alone is not enough, and this is the guard that actually works.
# "google" is statistically RARE across the paper corpus — it appears only in the
# GV (Google Ventures) portfolio — so a post about publishing a Google Sheet
# scored highly against a venture portfolio on that single word. One rare token
# in common is a coincidence. Two is a subject.
MIN_SHARED = 2

STOP = set("""a an the and or of for in on to with your you it is are was were be been
this that these those what how why when which who whom from as at by not no do does
did can could should would will shall may might must api apis using use used get
new more most about into over under out up down off than then them they we our us""".split())


def tokens(text):
    return {t for t in re.findall(r"[a-z0-9]+", (text or "").lower())
            if len(t) > 2 and t not in STOP}


def papers():
    d = os.path.join(PAPERS_REPO, "_papers")
    if not os.path.isdir(d):
        sys.exit(f"papers repo not found at {PAPERS_REPO}")
    out = []
    for fn in sorted(os.listdir(d)):
        if not fn.endswith(".md"):
            continue
        text = open(os.path.join(d, fn), encoding="utf-8", errors="replace").read(4000)

        def field(k):
            m = re.search(rf'^{k}:\s*"?(.+?)"?\s*$', text, re.M)
            return m.group(1).strip() if m else ""

        slug = field("slug") or fn[:-3]
        title = field("title")
        tagline = re.sub(r"\s+", " ", field("tagline"))
        price = field("price").replace(",", "")
        try:
            price = f"{int(round(float(price))):,}"
        except ValueError:
            price = ""
        out.append({
            "slug": slug, "title": title, "tagline": tagline, "price": price,
            # Slug tokens are the sharpest signal a paper carries — they are the
            # subject, stripped of prose.
            "tokens": tokens(slug.replace("-", " ")) | tokens(title),
            "title_tokens": tokens(title),
            "weak": tokens(tagline),
        })

    # Inverse document frequency over the paper corpus itself.
    import math
    df = collections.Counter()
    for p in out:
        for t in p["tokens"]:
            df[t] += 1
    n = len(out)
    idf = {t: math.log(n / (1 + c)) for t, c in df.items()}
    for p in out:
        p["idf"] = idf
    return out


def post_queries():
    """What each post actually ranks for, weighted by clicks then impressions."""
    p = os.path.join(GSC, "sc-domain-apievangelist-com_query_page.json")
    if not os.path.exists(p):
        return {}, {}
    rows = json.load(open(p))
    by_page = collections.defaultdict(collections.Counter)
    clicks = collections.Counter()
    for r in rows:
        page = r.get("page", "")
        by_page[page][r.get("query", "")] += r.get("clicks", 0) * 5 + r.get("impressions", 0) * 0.01
        clicks[page] += r.get("clicks", 0)
    return by_page, clicks


def post_url(filename):
    m = re.match(r"^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$", filename)
    if not m:
        return None
    y, mo, d, slug = m.groups()
    return f"https://apievangelist.com/{y}/{mo}/{d}/{slug}/"


def front_matter(text):
    m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    return (m.group(1), m.end()) if m else ("", 0)


def score(post_tok, post_weak, paper, post_title_tok=frozenset()):
    """Weighted overlap, and the weight of the single most distinctive shared token.

    The second number is the guard. A high total built from many common words is
    exactly the failure mode that paired a Google Sheets post with a venture
    portfolio; requiring one genuinely distinctive token in common kills it.
    """
    idf = paper["idf"]
    strong = post_tok & paper["tokens"]

    # A post whose TITLE names the paper should go to that paper, full stop.
    # Without this the query signal wins and a post literally titled "The
    # Fundamentals of API Governance" was matched to the JSON Schema report
    # because it also ranks for schema terms. Subject beats co-occurrence.
    title_hit = paper["title_tokens"] and paper["title_tokens"] <= post_title_tok
    s = 0.0
    s += 3.0 * sum(idf.get(t, 1.0) for t in strong)
    s += 1.0 * sum(idf.get(t, 1.0) for t in (post_weak & paper["tokens"]))
    s += 0.5 * sum(idf.get(t, 1.0) for t in (post_tok & paper["weak"]))
    if title_hit:
        s += 40.0
    best_token = max((idf.get(t, 0.0) for t in strong), default=0.0)
    return s, best_token, len(strong)


def block(paper, post_host="apievangelist.com"):
    from urllib.parse import urlencode
    q = urlencode({"ae_ref": post_host, "ae_pos": "post-footer"})
    url = f"{SITE}/papers/{paper['slug']}/?{q}"
    price = f" — ${paper['price']}" if paper["price"] else ""
    return (f"\n\n{MARKER}\n\n---\n\n"
            f"**Going deeper: [{paper['title']}]({url})**\n\n"
            f"{paper['tagline']}\n\n"
            f"[Read the paper{price}]({url})\n")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=50,
                    help="how many posts, ranked by search clicks")
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--min-score", type=float, default=MIN_SCORE)
    ap.add_argument("--min-clicks", type=int, default=1,
                    help="only touch posts that actually earn search clicks — a "
                         "link on a page nobody reaches is not distribution")
    args = ap.parse_args()

    cat = papers()
    by_page, clicks = post_queries()
    if not by_page:
        print("No Search Console data — run revenue/connectors/gsc_pull.py first.\n"
              "Without it this would be matching on titles alone, which is the "
              "part most likely to produce a bad pairing.", file=sys.stderr)

    files = [f for f in sorted(os.listdir(POSTS)) if f.endswith(".md")]
    ranked = sorted(files, key=lambda f: -clicks.get(post_url(f) or "", 0))

    matched, skipped, done = [], 0, 0
    for fn in ranked:
        if done >= args.limit:
            break
        path = os.path.join(POSTS, fn)
        text = open(path, encoding="utf-8", errors="replace").read()
        if MARKER in text:
            continue
        fm, _ = front_matter(text)
        title = (re.search(r"^title:\s*(.+)$", fm, re.M) or [None, ""])[1]
        tags = re.findall(r"^\s*-\s*(.+)$", fm, re.M)
        url = post_url(fn) or ""
        if clicks.get(url, 0) < args.min_clicks:
            continue
        qs = by_page.get(url, {})

        post_title_tok = tokens(title)
        post_tok = post_title_tok | tokens(" ".join(tags))
        post_weak = tokens(" ".join(qs))

        scored = [(score(post_tok, post_weak, p, post_title_tok), p) for p in cat]
        (sc, distinct, shared), best = max(scored, key=lambda x: x[0][0])
        if sc < args.min_score or distinct < MIN_DISTINCT or shared < MIN_SHARED:
            skipped += 1
            continue
        matched.append((fn, clicks.get(url, 0), sc, best, shared))
        done += 1

    print(f"posts considered : {len(ranked)}")
    print(f"matched          : {len(matched)}")
    print(f"skipped (no confident paper) : {skipped}\n")
    for fn, clk, sc, p, sh in matched:
        print(f"  {clk:>4} clk  score {sc:>5.1f}  {sh} shared  {fn[:48]:<50} -> {p['slug']}")

    if not args.apply:
        print("\nDRY RUN — nothing written. Re-run with --apply.")
        return 0

    for fn, clk, sc, p, sh in matched:
        path = os.path.join(POSTS, fn)
        text = open(path, encoding="utf-8", errors="replace").read()
        open(path, "w", encoding="utf-8").write(text.rstrip() + block(p))
    print(f"\nwrote {len(matched)} posts")
    return 0


if __name__ == "__main__":
    sys.exit(main())
