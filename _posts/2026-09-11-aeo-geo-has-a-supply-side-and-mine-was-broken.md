---
published: true
layout: post
title: 'AEO/GEO Has a Supply Side, and Mine Was Broken'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/aeo-geo-has-a-supply-side-and-mine-was-broken.png
date: 2026-09-11
author: Kin Lane
tags:
  - AI
  - Agents
  - Discovery
  - LLM SEO
  - Machine Readability
  - Measurement
  - Strategy
  - JSON-LD
---
Pronovix published a [field note this week](https://www.linkedin.com/pulse/what-aeogeo-practitioners-measuring-while-playbook-still-being-0eije/) on what AEO/GEO practitioners are actually measuring while the playbook is still being written — answer engine and generative engine optimization, drawn from two practitioner panels at Visible Amsterdam. The part I have not been able to put down is one sentence about what does not transfer from brand work when the product is an API: the analysis has to start from the strategically important API capabilities and the competitors they are evaluated against.

I have been running a citation probe against my own network since August. Fetches are what an engine takes; citations are what it gives back, and the second one is invisible to every analytics tool I own. So I have a fixed list of twelve questions I put to Google and Gemini, and I check whether apievangelist.com, apis.io, apisjson.org or apicommons.org get named in the answer.

Reading that sentence, I went and looked at my twelve questions. What is APIs.json. What is API governance. Difference between OpenAPI and Swagger. What are the stages of the API lifecycle. Who is API Evangelist Kin Lane.

Every one of those measures API Evangelist as a *publisher*. Not one of them asks a question that the 133,358 API pages and 28,329 provider pages in the catalog exist to answer. I had built an instrument that measures whether people cite my opinions, and pointed it at a business whose product is a description of somebody else's software. Pronovix is right, and it took an outside frame to see it.

So I added eleven questions in three classes. **Capability**: which API providers offer an MCP server, which payment APIs support idempotency keys, where can I find OpenAPI definitions for public APIs. **Vendor**: compare Stripe and Adyen APIs, best SMS API provider for developers, which banking APIs support FDX. **Authority**: how do you score the quality of an API, what is API agent readiness, how do you evaluate an API provider.

Then I ran it. Twenty-three questions, Google AI Overview and Gemini, September 8th.

| Class | Cited in AI Overview |
|---|---|
| subject (the original 12) | 2 of 12 — 16.7% |
| capability | 1 of 4 — 25% |
| vendor | **0 of 3** |
| authority | **0 of 3** |

Gemini was worse and simpler: two citations across the twenty questions it answered, both of them in the subject class. Three of its calls failed outright on network errors, which is its own small lesson about building a series on somebody else's endpoint.

The authority row is the one I have been sitting with. I publish a scoring rubric. I score thousands of providers against it, band them, and put an agent-readiness rating on every profile. And when somebody asks an answer engine *how do you score the quality of an API*, or *what is API agent readiness*, or *how do you evaluate an API provider* — I am not in the answer. Not once. I am not competing badly on those questions. I am absent from them.

The vendor row is the same story with money attached. The catalog holds Stripe and Adyen, both scored, both with their artifacts enumerated. Ask an engine to compare them and I am nowhere.

Then there is the half of this that is more useful than my own score: who *is* cited. Across those questions the most-cited source in the AI Overviews was **youtube.com**, sixteen times. Then linkedin.com and github.com at seven each, medium.com at six, postman.com at five. Postman, Zuplo, Nordic APIs and Swagger are the API-industry sources showing up, and they deserve to. But the honest read is that on questions about APIs, answer engines are reaching for video and social platforms more than for anybody's reference material, mine very much included.

## The part I got wrong in my own numbers

Something happened when I added those eleven questions that is worth more than any of the above, because it is a mistake anyone doing this work will make.

My rolled-up citation rate went from 27.3% on August 18th to 13.6% on September 8th. That looks like my visibility fell by half in three weeks.

It did not. I added eleven deliberately harder questions to a twelve-question set and then divided by the new total. The drop is my own instrument moving, not the world moving. Comparing only the original twelve — the only comparison that means anything — it went 27.3% to 16.7%, and even that is three citations against two, on a sample of twelve, in a surface that Google personalises and does not always show. That is noise, and I would be lying if I called it a trend.

I only avoided publishing my own change as a finding because I went looking for the trap before I ran the probe. The fix was to record a class on every question and report per class, so the original set keeps a clean series and a harder class can never drag it down. If you are standing up AEO/GEO measurement right now, build that in on day one. A prompt set that grows is a prompt set whose pooled rate is not a series, and the failure is silent and self-flattering in one direction and self-flagellating in the other.

## Measurement is downstream of representation

Here is where this meets the other half of my week. Before any of this, I had been going through what my own pages actually hand a machine. Not what they show a human — what is in the structured data.

I found that 36 of 4,000 sampled provider pages — call it 250 across the catalog — were emitting JSON-LD with a trailing comma, which means it was invalid, which means every parser silently discarded the whole block. I found five properties sitting outside their schema.org domain, one of which — `privacyPolicy` — is not a schema.org property at all. I found that 4.5% of the server URLs declared in the OpenAPI specs I hold point at `localhost`, `127.0.0.1`, or an RFC 2606 example domain. I found that on roughly 8% of APIs, joining the recorded base URL to an operation path produces a doubled segment and an address that 404s.

None of that is visible from a prompt-monitoring dashboard. All of it determines what an engine is able to say about a provider. You cannot optimize a representation that does not parse, and you cannot be cited as the source of a fact you never actually published in a form anything could read.

That is the supply side, and I think it is where API programs should start. The prompt monitoring tells you that you are absent. It does not tell you that you are absent because the business meaning of your API lives in four teams' heads and three unlinked documents, or because your structured data has a comma in the wrong place. Pronovix is running a webinar on September 15th on exactly that first problem — who owns the business meaning of your APIs — and it is the right question.

What I would add from my own numbers is that the answer has a machine-readable floor underneath it. Somebody has to own the business meaning, and then somebody has to make sure it survives the trip into a form a model can read without inferring. I have been doing the second job on my own catalog for a week and I am not finished.

I will run this probe again after the changes are deployed. That is the only honest way to find out whether any of it matters, and it is the number I would rather publish than an opinion.
