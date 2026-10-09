---
published: true
layout: post
title: 'Seventy-Nine Industries Ranked By Programmability, And The Opportunity Is At The Bottom'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/seventy-nine-industries-ranked-by-programmability-and-the-opportunity-is-at-the-bottom.png
date: 2026-10-09
author: Kin Lane
tags:
  - Kin Score
  - Industries
  - Investment
  - Agent Readiness
  - Insights
  - APIs.io
  - APIs
---
Someone asked me this week which types of companies are the most programmable. I have an answer now, because APIs.io scores every one of the 28,834 providers in the catalog and rolls them up into 79 industry cohorts. The ranking is not what surprised me. What surprised me is how cleanly the bottom of the table lines up with where the money should go.

## Who is most programmable

The catalog-wide mean Kin Score is 22.9. Here is the top of the industry table, with how many providers were scored, the share that land in the Strong or Exemplar bands, and the share shipping a first-party MCP server.

| Industry | Mean Kin | Scored | Strong + Exemplar | First-party MCP |
|---|---|---|---|---|
| [CPaaS](https://apis.io/industries/communications-platform-as-a-service-cpaas/) | 45.3 | 214 | 35% | 28% |
| [Content Management](https://apis.io/industries/content-management/) | 38.2 | 192 | 23% | 34% |
| [CRM](https://apis.io/industries/customer-relationship-management-crm/) | 37.2 | 355 | 25% | 30% |
| [Marketing & Advertising](https://apis.io/industries/marketing-advertising/) | 34.9 | 1,504 | 22% | 29% |
| [Developer Tools](https://apis.io/industries/developer-tools/) | 34.4 | 2,779 | 14% | 23% |
| [Data & Analytics](https://apis.io/industries/data-analytics/) | 32.9 | 2,315 | 16% | 24% |
| [Telecommunications](https://apis.io/industries/telecommunications/) | 32.6 | 1,194 | 16% | 18% |
| [Cybersecurity](https://apis.io/industries/cybersecurity/) | 31.9 | 2,154 | 13% | 17% |
| [Payments](https://apis.io/industries/payments/) | 29.7 | 1,636 | 9% | 14% |

The pattern is simple. The most programmable companies are the ones whose product is itself an integration surface. A CPaaS provider has nothing to sell except programmable access to messaging and voice, so one in three of them scores Strong or Exemplar, and the sector leads by seven full points. The same logic holds in the tag view, where Marketing Automation, Webhook, SMS and Email all post means between 43 and 53.

The second pattern is that go-to-market software beats back-office software. CRM, marketing, support and content management all sit in the high thirties. Accounting, HR, legal and tax sit in the mid twenties. Both are SaaS. The customer-facing stack has simply had integration partners demanding APIs for a decade longer.

The third is that money sits in the middle, not the top. Payments scores 29.7, but [banking](https://apis.io/industries/banking/), [fintech](https://apis.io/industries/financial-technology/) and [insurance](https://apis.io/industries/insurance/) land at 25.6, 23.3 and 18.9. Regulation and bank-grade onboarding pull the medians well under the means. These are sectors with a few exemplars over a long thin tail.

Here is the other end of the table.

| Industry | Mean Kin | Scored | Strong + Exemplar | First-party MCP |
|---|---|---|---|---|
| [Healthcare](https://apis.io/industries/healthcare/) | 15.8 | 1,978 | 3% | 3% |
| [Industrial](https://apis.io/industries/industrial/) | 13.9 | 1,001 | 2% | 3% |
| [Biotechnology](https://apis.io/industries/biotechnology/) | 11.1 | 1,221 | 1% | 2% |
| [Pharmaceutical](https://apis.io/industries/pharmaceutical/) | 10.6 | 599 | 1% | 1% |
| [Chemicals](https://apis.io/industries/chemicals/) | 10.2 | 94 | 0% | 1% |

One caveat before anyone quotes these. Every cohort brief on APIs.io carries its own thin-coverage figure, the share of members where our enrichment satisfied less than half the points it could have. That figure is 63% for CPaaS and 98% for chemicals. Part of the gap at the bottom is a measurement of how far our probes reached, not only of how these companies publish. The order is robust. The absolute spread is overstated.

## Where the opportunity is

The industry cohorts tell you who sells APIs. The [Insights](https://apis.io/insights/) layer tells you who is buying, because it profiles the companies investing in API capability internally, quarter by quarter. Put the two side by side and the opportunity falls out.

| Sector | Profiled buyers | Scored providers | Mean Kin | Exemplars | Sector ceiling |
|---|---|---|---|---|---|
| Industrial | 127 | 1,001 | 13.9 | 4 | [Losant](https://apis.io/providers/losant/) 83.1 |
| Financial Services | 112 | 1,152 | 21.0 | 8 | [Stripe](https://apis.io/providers/stripe/) 81.6 |
| Healthcare | 86 | 1,978 | 15.8 | 15 | [Medplum](https://apis.io/providers/medplum/) 79.1 |
| Retail | 79 | 990 | 17.8 | 12 | [Shopify](https://apis.io/providers/shopify/) 83.9 |
| Energy | 69 | 672 | 17.8 | 0 | [Enphase](https://apis.io/providers/enphase/) 63.8 |
| Insurance | 64 | 650 | 18.9 | 1 | [Guidewire](https://apis.io/providers/guidewire/) 65.2 |

The industries that score worst for programmability are the same ones where the most companies are hiring and building for APIs on the inside. That is a market with many buyers and almost no sellers. Three bets fall out of it.

**The sector translator.** Look at who tops the leaderboard in every weak sector. [Medplum](https://apis.io/providers/medplum/) and [Stedi](https://apis.io/providers/stedi/) in healthcare. [Agave](https://apis.io/providers/agave/) in construction. [Token.io](https://apis.io/providers/token-io/) in financial services. [Losant](https://apis.io/providers/losant/) in industrial. [Eliq](https://apis.io/providers/eliq/) and [Xoserve](https://apis.io/providers/xoserve/) in energy. Each one's entire product is making an unprogrammable industry programmable. The ceiling in these sectors runs from 64 to 84 while the median sits near ten, so the model is proven and the field is nearly empty. Energy and insurance are the most open of all, with zero and one exemplars respectively against a combined 133 profiled buyers.

**The agent layer on top of sectors that already have APIs.** Payments, cybersecurity, [legal and compliance](https://apis.io/industries/legal-compliance/) and telecom all score in the high twenties to low thirties on the composite, but ship first-party MCP servers at only 14% to 18%, and Arazzo workflows at under 5% everywhere. Legal and compliance slips seven places between its Kin rank and its agent-readiness rank. The [Agent-Native](https://apis.io/tags/agent-native/) tag cohort shows what the prize looks like when a company leans in: a mean of 56.2, 70% first-party MCP, and over half its 392 members in the Strong or Exemplar bands. Nobody in the physical-world industries clears an agent-readiness mean of ten.

**Governance tooling, horizontally.** Weighted across every scored provider in the catalog, [discoverability](https://apis.io/rating/facets/discoverability/) averages 59. [Contract governance](https://apis.io/rating/facets/contract-governance/) averages 6.6 and [operational transparency](https://apis.io/rating/facets/operational-transparency/) averages 13.6. Providers can be found and cannot be trusted over time. Changelogs, versioning, deprecation policies, SLAs and status pages are the facets nobody is serving, in every sector at once. That is a tooling opportunity that does not care which vertical it lands in.

## Where not to look

The top of the programmability table. CPaaS, CRM and marketing automation are crowded, well served, and already a third Strong or Exemplar. The returns there are consolidation, not creation.

And read biotech carefully. It shows the widest buyer-to-seller gap in the whole catalog, 126 profiled buyers against a sector mean of 11.1 and a single exemplar. But 98% of its providers are thinly covered, so part of that gap is unmeasured rather than unbuilt. I would want to enrich that cohort properly before anyone wrote a cheque on it.

## How to read this yourself

Every number in this post comes from the live APIs.io cohort endpoints, read on October 8 against the October 3 build. The industry pages carry the same brief the API serves, with the thin-coverage figure, the band distribution, the facet averages and the MCP adoption share for each cohort. The [industries index](https://apis.io/industries/) is the place to start, and the rating rubric behind every score is at [apis.io/rating](https://apis.io/rating/).

I have spent sixteen years arguing that every company becomes an API company eventually. The table says the ones who already have are the ones who never had a choice. The ones who still have a choice are where the money is.
