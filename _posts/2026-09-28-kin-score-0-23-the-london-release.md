---
published: true
layout: post
title: 'Kin Score 0.23: The London Release'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/kin-score-0-23-the-london-release.png
date: 2026-09-28
author: Kin Lane
tags:
  - Kin Score
  - Rubric
  - Provenance
  - Regulation
  - Agent Readiness
  - APIs.io
  - APIs
---
Version 0.23.0 of the [Kin Score](https://apis.io/rating/) is live. I had pinned it to API Days London on September 30th and froze the rubric on September 13th to hit that date. Then I shipped it five days early, on purpose, so that re-scoring twenty-six thousand companies would not be the last thing I did before getting on a plane. The full record is in the [changelog](https://github.com/api-evangelist/kin-score/blob/main/CHANGELOG.md). Here is what changed, and why most scores went down.

## Most of the catalog moved, and mostly down

Against the scores from the day before, with defunct companies excluded, 25,659 of 26,192 composite scores moved: 7,456 up and 18,203 down. The median change is −0.8 and the range runs from −12.7 to +12.5. 2,078 providers changed band, 1,638 of them down. On the agent side, 3,040 agent-readiness scores moved and 515 agent bands changed.

I did not re-cut the bands. No band's share of the catalog moved by more than 1.4 points, and this rubric only re-cuts when a band empties or swells. For what it is worth, apis.io's own score went from 88.8 to 90.9.

## Mark your own work, and it pays

The change that moves the most scores is about provenance: who actually made the thing I am crediting. Until now an artifact with no record of its author got full credit. In 0.23 an unmarked artifact drops to 0.90. If you mark it as yours, with a `method:` of declared, authored, published or self-reported, a `publisher:`, and a `source:` that resolves, it is treated as first-party and keeps full credit. That is worth 10% on every provenance-graded check. I modelled 0.75 and rejected it, because it halved the exemplar band and changed 2,155 bands for the sake of a bookkeeping gap. The remedy is published on the [rating page](https://apis.io/rating/#provenance), and it is mostly a matter of saying out loud that the work is yours.

The rest of the provenance work is me refusing to credit a company for work it did not do:

- **A WordPress plugin is not an MCP product.** A `/wp-json/mcp/...` endpoint is now graded as a site plugin. Across the 112 plugin URLs, MCP server credit fell from 913 points to 348.
- **A website or store platform's built-in endpoints are not the company's API.** Wix's `/_api/mcp`, Shopify's storefront and agentic-commerce endpoints and WordPress `/wp-json` are credited at 0.25 as platform-generated, and I mark them from response-header evidence, never from the path alone.
- **Our derivation is not your documentation.** When API Evangelist derives your error catalog, idempotency notes or rate-limit record from your OpenAPI, that used to count as "documented." Now, if every such artifact is one we derived, it grades as derived, at 0.125, and the agent-native gate does not accept it. 120 providers left agent-native on this change alone.
- **A platform-served agent card** is credited at 0.6. That covers an A2A card fetched from somewhere other than the provider's own domain, as Microsoft Foundry and Mintlify do.

## A worked example, from this week

I can show you the derivation rule on a company I wrote about last week. On Thursday I re-profiled Amazon's commerce APIs for [Amazon Opened Seller Central To Agents, And Kept The Storefront Closed](https://apievangelist.com/2026/09/24/amazon-opened-seller-central-to-agents-and-kept-the-storefront-closed/). After I cleaned up the Amazon Ads and Pay profile, it cleared the agent-native gate, because our pipeline had derived an error catalog from the contracts we hold. In 0.23 that credit is ours, not Amazon's. The profile now sits at 47.3, agent-ready. Amazon's Selling Partner profile, whose MCP server, agent skills and OAuth discovery documents are all Amazon's own, stays agent-native at 64.6. That is the rule doing what it should: crediting what the company actually publishes, not what I did on its behalf.

## The regulatory layer reaches everyone

The regulatory facet used to apply only when a provider matched a regulated sector, so 67% of the catalog was scored as though no law reached it. That was never true. 0.23 adds a horizontal regime that applies wherever no sector matches. It covers GDPR, the EU AI Act, the Cyber Resilience Act, the European Accessibility Act, the DSA, the Online Safety Act, US state privacy law, BIPA, the DOJ bulk-data rule and CASL. 16,589 providers gain a regulatory facet.

I also added fourteen regulatory-posture checks, at four points each, taking the facet from 108 points to 164. Adoption is close to zero: a published subprocessor list shows up on nine repos, and the other thirteen checks on none. I accepted that. A rubric that never asks can never drive adoption, and the empty rows are the work list. Because the facet is re-centered on each regime's average, I re-measured every regime mean so that no regulated provider gets docked for checks nobody can pass yet. Employment and payroll is now its own regime, and "policy" no longer quietly means insurance: 48 policy-as-code companies left the insurance regime.

## Smaller, but they matter

- **Can an agent address your MCP server?** A new four-point check grades the endpoint itself: an addressable URL earns full credit, a documented one half, and a templated URL with a placeholder in it earns nothing.
- **Newsroom and leadership pages** are now recognized pointers, a point each.
- **A pointer has to lead somewhere.** A repo-relative pointer only earns credit if the file actually exists.
- **An acquisition that left nothing behind is unrated.** 220 acquired companies with no website and no APIs no longer carry a score, and a defunct company scores zero.
- **The live probes caught up.** Protected-resource metadata and dynamic client registration were re-probed on 656 MCP hosts. Providers serving protected-resource metadata went from 360 to 891, and dynamic client registration from 340 to 745.

## What is next

The next release is Stockholm, 0.24.0, pinned to October 13th. It picks up a question the provenance work exposed: what to do with an artifact that a script laid down and a person then edited, which is how a lot of real work gets done, including my own. I decided against inventing a new category for it. If you finished it, mark it as authored with the same markers every provider already has. My own Spectral ruleset gets exactly that marking in Stockholm, and when our own score goes up because of it, the release note will say so. The [roadmap](https://github.com/api-evangelist/kin-score/blob/main/ROADMAP.md) has the rest.

If your score went down, start with provenance. Mark what you published as yours, and the 10% comes back honestly. If you think I got something wrong, the rating page shows you how to correct it, and I read every one.
