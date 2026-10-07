---
published: true
layout: post
title: 'What I Learned Running The Profiling Pipeline On gpt-oss-120b'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-i-learned-running-the-profiling-pipeline-on-gpt-oss-120b.png
date: 2026-10-07
author: Kin Lane
tags:
  - Open Models
  - gpt-oss
  - Profiling
  - Pipelines
  - Determinism
  - On-Premise
  - APIs.io
  - APIs
---
Two weeks ago I wrote about [splitting the profiling pipeline into an open model, a commercial model and deterministic scripts](https://apievangelist.com/2026/09/22/an-open-model-a-commercial-model-and-a-pile-of-scripts/), and last week I said that work is why I am confident enough to [take APIs.io on-premise](https://apievangelist.com/2026/09/29/apis-io-on-premise-looking-for-design-partners/). What I have not done is write up the measurements themselves. This is that post: which local models I tried, what gpt-oss-120b actually did on real providers, how it compares with Claude on the same inputs, and the lesson underneath all of it, which is not about models.

## The setup

Everything below ran on one machine: an Apple M4 Max with 128 GB of memory, llama.cpp 0.4.1, `llama-server` with the OpenAI-compatible endpoint, and `--reasoning-effort low`. The pipeline is the same one that profiles every provider in the catalog: read the company's site and docs, find and verify the contracts it publishes, write the artifacts the Kin Score reads. The only change was swapping the engine behind the agent loop, and pricing it at $0.

## Four models, one afternoon

I tried four models that fit on the machine. The table is the whole story.

| Model | Prompt tok/s | Generation tok/s | Tool calls | Verdict |
|---|--:|--:|---|---|
| DeepSeek-R1-0528-Qwen3-8B (Q4) | 629 | 76 | after long reasoning | runs, profiles nothing; leaks `</think>` |
| DeepSeek-R1-Distill-Llama-70B (Q4) | 47 | 3.6 | fails | unusable |
| Qwen3-30B-A3B-Instruct (Q4) | 922 | 119 | instant | full pipeline in 4.1 min; fabricates |
| gpt-oss-120b (MXFP4, 59 GB) | 800 | 84 | clean | full pipeline in 2.8 min; honest, conservative |

The DeepSeek distills are out: the small one reasons at length and produces nothing, and the 70B one cannot make a tool call. What fits this workload is a mixture-of-experts model with clean tool calling, not raw size.

The real finding is in the last two rows, and it is about honesty rather than speed. On one provider's identity module, Qwen wrote fifteen pointers. Eight of them were pattern-built URLs that did not exist, `/api/roadmap`, `/api/sandbox`, `/terms-of-service`, and it reported "verified all live pointers." gpt-oss-120b probed the same kinds of pages, reported that none existed, and found the real ones, `/legal-notice` and `/privacy`. Qwen scored higher that run. It was also wrong. For a catalog that other people and other machines read, a model that says "I found nothing" is worth more than one that invents something plausible, and that single comparison decided which model I kept.

## What it got wrong, and whose fault it was

The first real-spec comparison was humbling. On Gr4vy, from the same bare stub, gpt-oss-120b scored 32.8 against Claude's 65.0: about half. On Payrix it scored 9.4 against Claude's 58.4. It saw JavaScript-rendered documentation and stopped inside a minute. Claude kept digging and found 851 operations behind an APIMatic portal.

So the gap was real. But when I diffed the two trees check by check, almost none of the gap was the model being wrong. It was the model stopping early where a script could have kept going. Every time I moved a step out of the prompt and into deterministic code, the local score moved and the model did not have to get smarter:

- Reading a provider's homepage, hub pages and sitemap for typed links, and verifying each one before recording it. gpt-oss had been handed seven verified links and recorded none; Qwen ignored them and invented eight. Now no model is in that path at all.
- Sniffing spec URLs from docs pages, `llms.txt` and the config scripts behind documentation sites. From a bare stub that step finds Gr4vy's two contracts in ten seconds.
- A fetcher that escalates from a plain GET to a rendered browser session. On Payrix, that step alone lands a 491-operation OpenAPI the model never would have reached. The local score went from 9.4 to 24.6 with no model change.
- A schema-constrained extractor for the artifacts that have to be read out of documentation, rate limits, plans, sandboxes, changelogs, where every quoted value is gated verbatim against the page text. It pulled "1,000 requests in 10 seconds, 429" out of a 25,000-character guide: the same fact Claude had found. Payrix went to 31.0, then 36.5.
- Deriving authentication, OAuth scopes, webhooks, conformance and agentic access directly from the contract. On Gr4vy that lifted the local result from 32.8 to 38.9 with no model work.

By the end of that series, Payrix on gpt-oss-120b was within reach of the Claude keeper rather than a sixth of it, and the pipeline was better for Claude too, because every one of those scripts is engine-blind.

## Head to head on the hardest providers

Then I ran both engines over six of the best-documented providers in the catalog, same stub, same scripts, nothing committed until the comparison was done.

| Provider | Baseline | Claude | gpt-oss-120b | Margin | Claude cost |
|---|--:|--:|--:|--:|--:|
| Plaid | 71.6 | 91.3 | 81.2 | 10.1 | $6.71 |
| Datadog | 66.5 | 76.5 | 72.4 | 4.1 | $10.54 |
| Anthropic | 77.8 | 78.9 | 77.2 | 1.7 | $6.19 |
| OpenAI | 82.9 | 82.2 | 80.9 | 1.3 | $10.69 |
| Algolia | 71.5 | 79.8 | 78.8 | 1.0 | $8.69 |
| HubSpot | 87.5 | 88.3 | 88.3 | tie | $12.43 |

Claude's six runs cost $55.25 at list price. The local runs cost nothing and took about half the wall-clock time. On four of six the margin was under two points.

The interesting part is the one big gap. Plaid and Algolia started a tenth of a point apart and produced margins of 10.1 and 1.0. The Plaid gap traced to a probe of mine that could not see a 3.16 MB OpenAPI file sitting at the root of Plaid's GitHub repository, named after its API version. The local model reported, truthfully, that no machine-readable contract could be found. Claude went and searched GitHub itself. Both behaviors are defensible; one of them is a bug in my script, and it is fixed. The rule I took from this: spend the expensive model where a probe is failing, not where the score is low.

## The thin ones, and the natural experiment

Most of the catalog is not Plaid. I ran the local pipeline through the secondary-market backlog one provider at a time, fixing what each one taught: an EquityZen listing that answers 403 to every visitor, a Shopify storefront whose `security.txt` is Shopify's and not the company's, a venue stub where the model, given no hosts, resolved a company "from memory" into a different chip maker in the same city. That last one is the most important defect of the whole exercise, and it is a pipeline defect: a model asked to profile a company with an empty dossier will reach for something plausible. The fix was a rule, not a model: never resolve identity from memory, and re-run the pre-flight the moment a real domain is found.

Then came a natural experiment. On one day, two populations went through the identical pipeline on gpt-oss-120b: about 200 backlog rows, and twelve APIs people had submitted through the apis.io add form. The backlog averaged between 4 and 8. The submissions averaged 37.6, with two scoring strong, and every one was enriched and published. Same model, same scripts, same afternoon. A score of 4 is the company, not the engine.

## What it means

I will say the caveats plainly. Run-to-run variance on the local model is real: one run saves an MCP manifest and the next says "nothing," which is why anything that can be saved by a script now is. The local model does not dig; when a page is rendered client-side or a spec is hidden behind an export, it stops, and Claude keeps going. The dollar figures are API list prices, so on a subscription they are an equivalent rather than a bill. And none of this would hold without the sandbox: the local runner executes model-written shell, so it runs under `sandbox-exec` with writes confined to the provider's folder, every credential unreadable, and git disabled. I tested every forbidden action and all of them were blocked.

But the conclusion stands. Most of what makes a profile good is not judgement. It is work: fetch this, verify that, parse this, derive that. The more of it I moved into scripts, the less the choice of model mattered, and the closer a free, local, honest model got to a frontier one. That is the whole reason I can put this on a Mac mini inside someone else's network and expect it to produce the same catalog I produce in public.

If you want to reproduce any of this, the launch line is one command: `llama-server -m gpt-oss-120b-MXFP4.gguf --jinja --reasoning-effort low -c 65536 -ngl 99`. The scripts are the part that took two weeks.
