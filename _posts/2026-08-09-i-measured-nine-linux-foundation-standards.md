---
# HELD — do NOT schedule this. Kin asked for it off the site until he has edited
# it (2026-08-06), and a date-based schedule does not honour that: a future date
# only hides a post until that date arrives, then publishes it unattended. This
# stays `published: false` so it cannot go live on its own. Kin flips this one
# line when the edit is done; the date and filename can be moved then.
published: false
layout: post
title: I Measured Nine Linux Foundation Standards, and Alignment Is Now a Number
date: 2026-08-09 12:00:00 +0000
author: Kin Lane
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/i-measured-nine-linux-foundation-standards.png
tags:
  - Linux Foundation
  - Standards
  - API Specifications
  - OpenAPI
  - AsyncAPI
  - JSON Schema
  - MCP
  - A2A
  - Governance
  - Interoperability
  - Conformance
  - Agents
---
Back at the end of June I [walked the entire Linux Foundation umbrella](https://apievangelist.com/2026/06/30/the-linux-foundation-is-the-home-of-our-api-specifications/) and wrote up what I found: the Linux Foundation has quietly become the neutral home of almost every open API specification standard we have. OpenAPI, Arazzo and Overlay under the OpenAPI Initiative. AsyncAPI. GraphQL. JSON Schema at OpenJS. gRPC and CloudEvents and OTLP and xDS through CNCF. SPIFFE, SPDX, OCI, in-toto, OSV, SLSA, TUF, Notary, Sigstore alongside them. And now A2A. One foundation governs the contract layer for REST, event-driven, RPC and GraphQL APIs, plus the telemetry, identity and supply-chain formats around them.

The argument I made in that post was that these specifications are neighbors who do not talk to each other, and that the connective work between them is the biggest unclaimed opportunity in the space. I believed it, but I made it as an argument. Since then I have spent six weeks measuring nine of these standards one at a time — reading what each body publishes, what has actually graduated, who does the work, and above all the distance between the organizations that claim a standard and the organizations that ship something you can call. Nine reports later, I no longer have to make the case rhetorically. **The cost of non-alignment is a number, and in some places it is a large one.**

So let me make the argument again, with the evidence this time. And one piece of housekeeping first, because it changes how you can read the rest: **every one of these Standard Reports is now free.** No signup, no checkout, no email. I will come back to why at the end.

## The finding that made me write this again

Start with the one I did not expect, because it is the cleanest possible illustration of two neighbors not talking.

AsyncAPI is the Linux Foundation's specification for event-driven and message-driven APIs. It is at 3.1.0, it has a healthier contributor community than the OpenAPI Initiative by most measures, and it publishes its governance as machine-readable YAML, which almost nobody does. It is, by any reasonable standard of craft, a good specification.

Across 25,574 providers in the APIs.io catalog, the number who publish an AsyncAPI document that we harvested verbatim from them is **zero**. Not a small number. The archive that would hold them is empty. For OpenAPI, the same pipeline holds 6,776 as-published archives.

Here is the part that matters for alignment. When I went looking for whether those providers describe their event surfaces at all, I found that **125 of them do — inside the OpenAPI documents they already publish**, using the `webhooks` and `callbacks` objects. That is 2,392 described events. In AsyncAPI's own strongest segment, the score is **87 to nothing** in favor of OpenAPI.

Read that as a competitive result and you get the wrong lesson. It is not that the industry rejected AsyncAPI. It is that when a team sits down to describe an event, they reach for the document they are already maintaining, in the tool they already have, in the pipeline that already runs. OpenAPI absorbed the job because OpenAPI is where people already were. Nothing about that is a failure of the AsyncAPI project, and nothing in either body's roadmap acknowledges that it happened. **Two specifications under one foundation are splitting one job between them, and the split is being decided by which file a developer already has open.** That is exactly the kind of thing coordination would surface, and no venue exists in which it gets surfaced.

## JSON Schema is the shared substrate, and its vocabulary is frozen

In June I said JSON Schema was the connective tissue. It is, and I can now put a size on it.

Measured inside 14,195 as-published OpenAPI documents — because JSON Schema essentially never ships standalone — there are **9,439,146 schema objects**, 2,364,735 of them carrying a `$ref`. It is the largest single measurement in this whole body of work, and it is the substrate under OpenAPI, Arazzo, Overlay, AsyncAPI, CloudEvents, OSV and SPDX alike.

Now the uncomfortable part. **The eight keywords used by a majority of those schemas are all pre-2013** — `type` at 96.2%, `properties` 91.6%, `$ref` 87.0%, `items`, `description`, `format`, `enum`, `required`. Everything JSON Schema has added since is statistically absent. `if`/`then` appears **134 times** across nine and a half million objects. `unevaluatedProperties` 230 times. `prefixItems` 664.

And `nullable` shows up in 20.6% of documents purely because OpenAPI 3.0 used a *subset* of JSON Schema that could not express nullability. That is a fossil left by a version mismatch between two specifications in the same house. The entire OAS 3.0-versus-3.1 split, which the OpenAPI report shows sitting at a dead-even 45.5% each, **is fundamentally a JSON Schema compatibility story.** Neither body treats it as a shared problem, because there is no mechanism by which it could be one.

Here is the thing I keep turning over: a decade of careful vocabulary design is going unused, while the format's most-adopted keyword after `type` is `format` — which is an *annotation*, not an assertion, appearing 887,362 times in 74.2% of documents. It looks like validation. It does not validate. Agents are already reading it as though it does.

## Everybody has a version-adoption problem, and nobody can see anybody else's

Once you measure several of these standards with the same instrument, a pattern shows up that is invisible from inside any one of them.

**OpenAPI 3.2.0** shipped in September 2025. Ten months later it appears in **four documents out of 14,195** — 0.03%. The October 2024 patches reach 0.9% between them. Swagger 2.0, superseded in July 2017, is still **9.0%** of everything published. The 3.1 headline feature, `webhooks`, reached 2.0% of the 3.1 corpus in five years.

**A2A** is the newest arrival and has the same disease already, in a more acute form. Of 65 published Agent Cards, **40 declare no `protocolVersion` at all**, and of the 25 that do, the strings cannot be compared without normalizing — eight say `0.3.0` and eight say `0.3`; four say `1.0` and two say `1.0.0`. A client doing the obvious string comparison against `"1.0.0"` matches two cards in the world. Worse, the well-known path moved at A2A 0.3, and **fifteen of the 65 are still only at the old path**, where a compliant client will never look. They did the work and published a document that, as far as the current protocol is concerned, does not exist.

Meanwhile SPDX is at 3.0.1 with an ISO number behind it, and the OCI specs are at 1.1.0/1.3.0 and pinned by digest everywhere they are used. Some of these projects have solved version propagation. Others are relearning it from scratch. **They are two GitHub organizations apart and there is no route by which the lesson travels.**

## Conformance is where one foundation could act once for everyone

This is the place where alignment would pay off fastest, and it is the clearest gap in the whole inventory.

- **The OpenAPI Initiative operates no conformance programme at all.** No test suite, no badge, no registry. In the corpus, 0.4% of documents do not parse, and seven declare a version that has never existed.
- **AsyncAPI has no equivalent either.**
- **JSON Schema has one** — the language-agnostic `JSON-Schema-Test-Suite` that implementations across dozens of languages run against. It is the reason a schema behaves the same in Python, Java, Go and JavaScript. And it comes from the one specification in the set that has **never been formally ratified**; JSON Schema is, on paper, a lineage of expired IETF drafts. The one with no standing has the real interoperability machinery.
- **A2A ships a Technology Compatibility Kit.** It has 45 stars, and its inspector has not been touched since February. Sixty-three percent of published cards fail a structural check a validator in CI would have caught on day one.
- **OpenID Connect has the only genuinely working certification programme** I encountered — and OIDC itself is declared in **102 of 14,195 contracts, 0.72%.** The most agent-friendly authorization declaration available in OpenAPI, effectively unused.
- **CAMARA defines a lifecycle with a Graduated stage and has zero specifications in it.** Fifty-seven Sandbox, fifteen Incubating, none graduated, four years in.

Look at that list as one list rather than six. A conformance test-suite pattern, a badge format, a machine-readable conformance record, and a validator anybody can drop into CI are **the same four artifacts for every specification on it.** They were built once at JSON Schema and once at OpenID, and every other project either went without or started over. If the Linux Foundation shipped a shared conformance harness and a common way to express "this document is conformant, and here is the evidence," it would be doing work that seven or eight of its own projects currently cannot afford individually.

## The agent specifications are repeating the entire cycle, faster

If you want to know why this matters now rather than eventually, watch the agentic layer replay twenty years of API history in about twenty months.

**MCP** was adopted faster than any specification in the history of APIs — 42 repositories, 183,460 stars, ten official SDKs in twenty months. In the catalog, 3,060 providers carry an MCP artifact and **672 record a server you can actually reach**. And the median server exposes 11 tools while the largest exposes **588**, because tools are being generated one-per-endpoint straight out of OpenAPI. That is not a discovery layer. That is the API's discovery problem relocated into the context window and billed by the token.

**A2A** publishes the Agent Card, the closest thing we have to an agent-facing OpenAPI. Sixty-five providers serve one out of 22,341 hosts probed — 0.29% — and ten publish one a conformant client can read.

**ARD** is a third attempt at the same discovery problem, with nine publishers.

Three specifications, three well-known paths, three registries, three answers to "where do I look first," and the numbers are 672, 65 and 9. The most interesting signal in the A2A data is that **the conformant cards keep resolving to MCP endpoints** — providers want the manifest and treat the protocol as incidental. The specifications are converging in practice while diverging on paper, which is precisely the moment coordination is cheap and precisely the moment nobody does it.

There is one more finding from the A2A work I cannot stop thinking about, because it inverts what you would assume. The ten publishers with structurally correct cards average **25.3** on the Kin Score. The forty-one with broken cards average **31.3**, and the near-conformant ones **42.0**. The best API practitioners in the catalog — Cloudflare, Pinecone, Apideck, Speakeasy — are the ones with malformed cards, and the most conformant card in the world belongs to a live-audio archive for a jam band. Being early got punished. The mature teams shipped against a 0.2-era spec and **nothing has told them since**, because publishing a card is a one-way action with no response. That is not a provider failure. That is a missing feedback loop, and a feedback loop is infrastructure a foundation can build.

## Four things, now with evidence behind them

In June I listed four things these projects could share. I stand by all four, and I can now say what each one is worth.

**A shared vocabulary for the properties they all express.** Schemas, references, servers, security, parameters, tags, versions — the same nouns in every specification under slightly different names. The `nullable` fossil and the OAS 3.0/3.1 split are what it costs when two of them disagree quietly. Start with the overlap map; it is a document, not a merger.

**A shared conformance harness.** Six specifications, four artifacts, built twice. This is the highest-leverage item on the list and the most obviously duplicated work in the entire inventory.

**Cross-specification references that resolve.** OpenAPI absorbing 2,392 event descriptions while AsyncAPI's archive sits empty is not a tooling gap, it is a modeling gap that nobody owns. Arazzo already points across OpenAPI documents; that pattern should be first-class and consistent rather than reinvented per project.

**A shared discovery surface, and a way to tell publishers they are broken.** 672, 65 and 9 across three competing agent-discovery mechanisms is the strongest argument available for coordinating this before the agentic layer sets. And the fifteen providers stranded on A2A's old well-known path need an email — which no process in any of these projects is currently able to send.

None of this requires merging anything. I do not want one specification to rule them all and I do not think anybody serious does. The strength of this ecosystem is that OpenAPI, AsyncAPI, GraphQL and the rest each do their own job well. What I want is for neighbors under one roof to share what they know.

## Why the reports are free now

Which brings me to the housekeeping. Every one of these nine Standard Reports — OpenAPI, AsyncAPI, JSON Schema, CAMARA, MCP, OAuth 2.0, OpenID Connect, ARD, and A2A as of today — is now free to download at [papers.apievangelist.com](https://papers.apievangelist.com). PDF, Word, and the machine-readable data bundle underneath. No signup and no checkout.

They were $500 each. I changed my mind, and the reasoning is short. A specification is a public good; everybody in a market is asked to adopt it. Putting an honest measurement of how far adoption actually got behind a paywall does the same thing the paywall-free version of this problem already does — it keeps the gap invisible. The bodies I am writing about should be able to read what I found about them without a purchase order, and so should the provider who is one field away from a conformant Agent Card. The research still costs what it cost. The Market, Portfolio and Insights reports carry that, and these nine go out to recruit.

Every number in this post comes from a fetched artifact with a status code, and I have been wrong before and corrected it in public — the AsyncAPI report is on version 1.1 precisely because its first edition drew the wrong conclusion from the right measurement. If you steward one of these standards and I have graded you unfairly, or missed an artifact, or read your governance record wrong, point me at the artifact. That is the fastest way to change the next version, and I would rather be corrected than cited.

The specifications are already in the same house. I have now measured nine of them with one instrument, and the measurements say the same thing the inventory did in June, only louder: **the pieces for something far more coordinated are sitting on the same shelf.** I will keep pulling on this. If you are thinking about it too — especially if you work inside one of these projects — reach out at kinlane@apievangelist.com.
