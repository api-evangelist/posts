#!/usr/bin/env python3
"""#3 API Evangelist network integrity crawler.

Sweeps every info-area subdomain (from the registry) plus the other network
properties, checking DNS resolution and key URLs. Writes a dated markdown report
and exits non-zero if anything is broken (so it can gate a scheduled job).

Usage: python3 network-health.py [--quiet]
"""
import socket, sys, concurrent.futures as cf, urllib.request, urllib.error, yaml, os

REG = os.path.join(os.path.dirname(__file__), "network-areas.yml")
REPORT = os.path.join(os.path.dirname(__file__), "health-report.md")

# non-area network properties to include in the sweep
EXTRA = [
    "https://apievangelist.com", "https://apis.io", "https://providers.apis.io",
    "https://conversations.apievangelist.com", "https://rules.apievangelist.com",
    "https://guidance.apievangelist.com", "https://policies.apievangelist.com",
    "https://standards.apievangelist.com", "https://strategies.apievangelist.com",
    "https://vocabularies.apievangelist.com", "https://schema.apievangelist.com",
    "https://properties.apievangelist.com", "https://experiences.apievangelist.com",
    "https://lifecycle.apievangelist.com", "https://video.apievangelist.com",
    "https://papers.apievangelist.com",
]

def http(url, timeout=15):
    req = urllib.request.Request(url, method="GET", headers={"User-Agent": "ae-network-health/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.status, r.headers.get("Last-Modified", "")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception as e:
        return f"ERR:{type(e).__name__}", ""

def dns_ok(host):
    try:
        socket.getaddrinfo(host, 443)
        return True
    except Exception:
        return False

def check(base, is_area):
    host = base.split("://", 1)[1].rstrip("/")
    row = {"base": base, "host": host, "dns": dns_ok(host), "checks": {}, "issues": []}
    if not row["dns"]:
        row["issues"].append("DNS does not resolve (NXDOMAIN)")
        return row
    paths = ["/", "/llms.txt", "/sitemap.xml", "/robots.txt"] + (["/icon.png"] if is_area else [])
    for p in paths:
        code, _ = http(base.rstrip("/") + p)
        row["checks"][p] = code
        if code != 200:
            # llms/sitemap/robots may legitimately 404 on non-area props; only flag core + area surfaces
            core = p == "/"
            area_surface = is_area and p in ("/llms.txt", "/sitemap.xml", "/icon.png")
            if core or area_surface:
                row["issues"].append(f"{p} -> {code}")
    return row

def main():
    quiet = "--quiet" in sys.argv
    reg = yaml.safe_load(open(REG))["areas"]
    targets = [(a["url"], True) for a in reg] + [(u, False) for u in EXTRA]

    rows = []
    with cf.ThreadPoolExecutor(max_workers=16) as ex:
        futs = {ex.submit(check, base, is_area): base for base, is_area in targets}
        for f in cf.as_completed(futs):
            rows.append(f.result())
    rows.sort(key=lambda r: r["host"])

    broken = [r for r in rows if r["issues"]]
    lines = [f"# API Evangelist Network Health", "",
             f"- Targets checked: **{len(rows)}**",
             f"- Healthy: **{len(rows)-len(broken)}**",
             f"- With issues: **{len(broken)}**", ""]
    if broken:
        lines.append("## Issues\n")
        lines.append("| Host | DNS | Problems |")
        lines.append("|------|-----|----------|")
        for r in broken:
            lines.append(f"| {r['host']} | {'ok' if r['dns'] else 'DEAD'} | {'; '.join(r['issues'])} |")
        lines.append("")
    lines.append("## All results\n")
    lines.append("| Host | / | llms | sitemap | robots | icon |")
    lines.append("|------|---|------|---------|--------|------|")
    for r in rows:
        c = r["checks"]
        g = lambda p: str(c.get(p, "—"))
        lines.append(f"| {r['host']} | {g('/')} | {g('/llms.txt')} | {g('/sitemap.xml')} | {g('/robots.txt')} | {g('/icon.png')} |")
    open(REPORT, "w").write("\n".join(lines) + "\n")

    if not quiet:
        print(f"checked {len(rows)} targets — {len(broken)} with issues")
        for r in broken:
            print(f"  ✗ {r['host']}: {'; '.join(r['issues'])}")
        print(f"report: {REPORT}")
    sys.exit(1 if broken else 0)

if __name__ == "__main__":
    main()
