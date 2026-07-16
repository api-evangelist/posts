# OWASP API Security Review — API Evangelist Posts API

**Generated:** 2026-07-15 08:38 EDT  
**Total findings:** 26

## Provenance

- **Ruleset:** [`@api-common/spectral-owasp-ruleset`](https://github.com/api-commons/spectral-owasp-ruleset) v0.2.0 — OWASP API Security Top 10 (2023)
- **Engine:** Stoplight Spectral (`@stoplight/spectral-cli`)
- **Reporter:** [`@api-common/spectral-reporter`](https://reporter.apicommons.org)
- **Source spec:** `openapi.yml`
- **Command:** `spectral lint -r owasp-api-top10.yaml -f json <spec>`

## Severity

| Severity | Count |
|---|---|
| Warning | 4 |
| Info | 22 |

## By OWASP category

| Category | Findings |
|---|---|
| API1 Broken Object Level Authorization | 1 |
| API4 Unrestricted Resource Consumption | 23 |
| API5 Broken Function Level Authorization | 1 |
| API8 Security Misconfiguration | 1 |

## Top rules

| Count | Rule |
|---|---|
| 18 | `owasp-api4-resource-string-maxlength` |
| 4 | `owasp-api4-resource-integer-bounds` |
| 1 | `owasp-api5-bfla-global-security-defined` |
| 1 | `owasp-api8-misconfig-servers-defined` |
| 1 | `owasp-api1-bola-operation-security-defined` |
| 1 | `owasp-api4-resource-array-maxitems` |

## Files

- `report.html` — standalone HTML governance report (open in a browser)
- `spectral.json` — raw Spectral findings
- `results.sarif` — SARIF 2.1.0 for GitHub code scanning
