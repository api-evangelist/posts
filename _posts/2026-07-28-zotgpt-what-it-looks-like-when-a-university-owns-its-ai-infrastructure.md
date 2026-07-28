---
published: true
layout: post
title: 'ZotGPT: What It Looks Like When a University Owns Its AI Infrastructure'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/zotgpt-what-it-looks-like-when-a-university-owns-its-ai-infrastructure.png
date: 2026-07-28
author: Kin Lane
tags:
  - Artificial Intelligence
  - Higher Education
  - API Gateway
  - Multi-Cloud
  - Multi-Model
  - API Deprecation
  - Agent Readiness
  - ZotGPT
---
I spend most of my time profiling companies that sell APIs, so it is a genuinely useful change of scenery to profile an organization that built one because it had no interest in buying what everyone else was selling. [ZotGPT](https://zotgpt.uci.edu/) is the University of California, Irvine's own generative AI platform — not a campus license to somebody else's chatbot, not an enterprise agreement with a seat count, but a platform UCI's [Office of Information Technology](https://oit.uci.edu) designed, built, and operates itself. I have just [profiled it into the API Evangelist network](https://github.com/api-evangelist/zotgpt) and run the full enrichment pipeline against it, and what came back is one of the more instructive infrastructure stories I have looked at this year — not because it is flawless, but because almost every decision in it is legible, and most of them are the right ones.

The short version: UCI decided in late 2023 that the interesting question was not *which* AI vendor to standardize on, but whether standardizing on a vendor was the right shape of decision at all. They concluded it was not. What they built instead is a campus-owned control plane that sits between fifty thousand people and an ever-churning market of model vendors, and holds the position that matters — identity, data policy, budget, and routing — while letting the models underneath it change as often as the market changes them. That is a strategy I have been arguing for on this blog for years in the API context, and it is somewhat startling to find the cleanest live implementation of it inside a public university rather than inside a Fortune 500.

## Build was the point, not the fallback

The founding constraint was data, and they were explicit about it from the beginning. Chris Price, the AI Architect who leads the platform's development, puts it as plainly as it can be put: *"From the beginning, we ensured that no data entered into ZotGPT leaves the university."* You cannot retrofit that. Once you have signed a vendor agreement and pointed your campus at a consumer product, the shape of your data exposure is whatever the vendor's terms say it is, and your leverage to change it is roughly zero.

Tom Andriola, UCI's Vice Chancellor for Data and Information Technology, framed the strategic half of it in a way I want to underline, because it is the part most organizations get backwards: *"managing the proliferation by having your own tools and your own interfaces allows you to get to value more quickly."* Notice what that is *not* saying. It is not "we built it to save money," and it is not "we built it because the vendors were not good enough." It is a statement about **proliferation** — the recognition that AI tools were going to spread through the institution whether or not anyone approved them, that shadow adoption was the default outcome, and that the only way to actually govern it was to offer something people would choose on the merits. Xanat Hernandez in OIT Communications says the same thing from the other side: *"We wanted to provide not just an alternative, but one that was better."*

That is a much harder bar than "compliant." Plenty of institutions have stood up a sanctioned AI tool that nobody uses, and then congratulated themselves on their governance while the actual work happened in unsanctioned tabs. UCI cleared the bar. Student users went from 4,000 to 11,000 during the trust-building phase, average logins per student went from four to seven, one quarter alone recorded over 100,000 messages, and the platform is now past 20,000 unique users with more than 145,000 logins. Those are the numbers of a thing people actually reach for, not a thing they are told to use.

Launched to faculty and staff in January 2024 and to students that April, it has since grown into four end-user products, a training arm, a prompt library, a marketplace, and two generations of developer API. And the economics are not subtle. Thousands of UCI students were already paying roughly $20 a month for commercial AI subscriptions, with premium tiers running as high as $200 a month; OIT estimates the value ZotGPT delivers to a student at about $100 a month, delivered free. On the staff side, UCI employees have built **over 1,000 custom bots** on the Creator product, replacing third-party chatbot solutions that ran *"upwards of $10,000 each"* — the OIT help desk's own ZotDesk, a Financial Services bot answering student billing questions, a BANA Bot at the Merage School that reportedly cut email volume. A thousand bots at even a fraction of ten thousand dollars each is a procurement line item that simply stopped existing.

## The multi-cloud claim is real, and you can verify it from outside

Every vendor says "multi-cloud." Almost none of them mean it in a way you can check. UCI's is externally verifiable, which is why I like it as a teaching example. When I probed the estate, this is what DNS and TLS handed back:

| Host | Cloud | Terminates on |
|---|---|---|
| `zotgpt.uci.edu`, `chat.zotgpt.uci.edu` | AWS us-west-2 | `zotgpt-lb.zot-gpt-prod.aws.uci.edu` |
| `classchat.zotgpt.uci.edu` | AWS us-west-2 | `oit-instrbt-lb.oit-instructorbot-prod.aws.uci.edu` |
| `creator.zotgpt.uci.edu` | AWS us-west-2 | `oit-creator-lb.oit-zotgptcreator-prod.aws.uci.edu` |
| `portal.azureapi.zotgpt.uci.edu` | Azure West US 2 | `oit-apim-usw2.azure-api.net` |

Every interactive product terminates on a UC Irvine-owned Application Load Balancer inside a UCI AWS account, under a `*.aws.uci.edu` naming convention, with an Amazon-issued certificate whose subject leaks the account environment name. The developer API's control plane runs on Azure API Management in West US 2, fronted by Azure Traffic Manager, and the gateway root still answers with APIM's own JSON error envelope. Two clouds, one campus namespace, both of them UCI's.

There is a second thing hiding in that table that I think is more interesting than the multi-cloud headline. **Chat, ClassChat, and Creator each run in their own named production environment behind their own load balancer.** That is not an accident of deployment convenience — it is the architecture UCI describes, made visible. ClassChat is the product where faculty *can* see student questions, by design, because that is what a classroom activity requires. Chat is the product where they explicitly cannot; as Hernandez puts it, *"It is more secure, and that includes your chats not being monitored by faculty and staff."* Those are contradictory privacy policies, and rather than trying to express both inside one application with a permissions flag, UCI ran them as separate isolated environments with separate policies. Policy isolation enforced by infrastructure isolation is a much stronger guarantee than policy isolation enforced by an `if` statement, and I would like to see far more organizations reach for it.

## Multi-model, and the routing convention that makes it work

The model catalog is genuinely broad and genuinely fast-moving. Over the last year UCI has added Claude Opus 4.1, then GPT-5, Gemini 2.5 Pro, and DeepSeek-R1; by the Spring 2026 release it was GPT-5.4 with visible reasoning traces, the Claude 4.6 series, and Moonshot Kimi K2.5. The Gateway documentation currently names GPT-5.5 and Claude Opus 4.7. Creator lets a bot builder pick between GPT-4.1, Claude Sonnet 4.6, and open-source Mistral 3 Large. That is OpenAI, Anthropic, Google, and open weights, sourced across Azure, AWS Bedrock, and Google — and UCI says so in the most unlikely place, on its [sustainability page](https://zotgpt.uci.edu/sustainability/): *"ZotGPT provides access to many models spread across three different cloud vendors to provide best-in-class features to the campus. This flexibility allows you to choose a model or cloud vendor that has the strongest sustainability commitment."*

I want to sit on that sentence for a second, because it is doing something clever. Model portability is usually justified on price or capability. UCI is also justifying it on *environmental posture* — treating "which cloud am I burning" as a user-facing choice rather than a procurement detail. Whether or not you find that persuasive, it is a use of optionality that only exists because they refused to marry a vendor.

The mechanism that makes any of it real is the [ZotGPT Gateway](https://zotgpt.uci.edu/services/gateway/), and this is where the API design gets good. The Gateway is a unified AI API gateway built on the [Portkey](https://portkey.ai/docs/introduction/what-is-portkey) specification, offering *"a growing catalog of AI models from a single endpoint."* You sign in with your UCInetID, you mint a **virtual API key** scoped to your workspace, and you route by naming a **campus provider alias** — `@zotgpt-api-bedrock`, `@openai-prod` — either in an `x-portkey-provider` header or as a prefix on the model slug. A fully documented slug looks like `@zotgpt-api-bedrock/us.anthropic.claude-opus-4-7`.

That indirection is the whole ballgame. **A UCI developer never holds a vendor credential and never names a vendor account in application code.** They name a campus alias. UCI holds the contracts, the keys, and the spend behind it. Which means the university can renegotiate with a model vendor, move a workload from one cloud to another, or add an entirely new provider, and not a single line of campus application code changes. UCI states it directly: models are added *"continuously without code changes."* This is the abstraction that most enterprises talk about wanting and then fail to build, because they let the first integration reach through the gateway to the vendor SDK and never claw it back.

They did not write a client library either, and I think that was right. The Gateway adopts an existing specification, so UCI inherits an entire client ecosystem instead of maintaining one — the upstream SDKs in Python, JavaScript, and .Net today with Java, PHP, Ruby, and Go announced, plus any OpenAI- or Anthropic-shaped client repointed at the base URL. Their documented setup is three steps for every client: point the base URL at the Gateway, swap the vendor key for your virtual key, pick a model slug and restart. There are concrete configuration guides for Claude Desktop, VS Code, and opencode. A campus researcher can put a real coding agent on campus-governed models in an afternoon.

## Metering in dollars instead of requests

Here is the detail I did not expect, and the one I have thought about most since. **UCI publishes no rate limit.** No requests per minute, no tokens per minute, no burst ceiling, anywhere, for either API generation.

What it publishes instead is a *spend* ceiling. Access is tiered by affiliation and metered in dollar-denominated credits: a Free tier with $50 in credits for faculty, staff, and graduate students (undergraduates need a sponsoring PI); a Standard tier with higher budgets unlocked by validating a Kuali Financial System account; and an Advanced Research tier with high limits for validated use cases. Per-key spend limits and workspace budget enforcement do the throttling. The deprecated API did the same thing with $200 in starter credits.

The first time I wrote that down I filed it as a gap. It is not. For an internal AI utility, the scarce resource genuinely is budget, not concurrency — and metering in dollars is the only unit that spans models whose per-token costs differ by an order of magnitude. A requests-per-minute limit would be *actively misleading* on a multi-model gateway, because a thousand cheap requests and a thousand expensive ones are not remotely the same event. And routing the higher tiers through KFS account validation means consumption lands on a real departmental or grant fund. That is chargeback plumbing wired into the API's access model, which is a level of FinOps maturity I do not often find in commercial API providers, let alone university IT.

The honest cost of that choice is that a caller cannot forecast spend before running a workload, because there is no published per-model rate card, and cannot see how close they are to their ceiling without visiting the portal, because there is no budget-remaining response header. Those are both fixable, and both worth fixing.

## They deprecated an API correctly, which almost nobody does

The first-generation ZotGPT API was an OpenAI-compatible chat completions endpoint at `https://api.zotgpt.uci.edu/v1/chat/completions`, bearer-authenticated, fronted by Azure API Management, serving gpt-4o, with $200 in starter credits and access granted through a ServiceNow ticket. It is being retired in favor of the Gateway — and the retirement is published, phased, and specific:

- **Days 1–30:** new signups frozen, existing users notified.
- **Months 1–3:** self-migration window, with support.
- **End of month three:** *"All remaining Azure API keys disabled."*

There is a migration guide showing the actual before and after — the same `OpenAI(...)` constructor with a different `base_url` and a different key — and a plain statement that model names and request structures do not change, so the break is the host and the credential, not the contract. In exchange for migrating, you go from a single gpt-4o deployment to *"Gemini, Claude, and more."*

I have written a lot of unkind things on this blog about how API providers handle deprecation. This is how you do it: name the replacement, show the code diff, publish the dates, state clearly that the old keys stop working, and make the migration a net upgrade so people want to do it. A university IT department just modeled deprecation practice better than most companies whose entire revenue depends on their API.

There is one small wrinkle worth flagging, and I recorded it in the profile without cleaning it up: the client setup page documents `https://api.portkey.ai/v1` as the OpenAI-compatible base URL while the migration page shows `https://app.portkey.ai/v1`. Both appear in UCI's own documentation. It is exactly the kind of drift that a machine-readable spec would have caught — which brings me to the part of this story that is unfinished.

## Where it stops: there is no machine-readable layer at all

For a platform this deliberate about its human-facing documentation, the agent-facing surface is empty. Not thin — empty. I probed the whole estate, and here is the complete inventory of what a machine can discover about ZotGPT without credentials:

- **No OpenAPI.** Nothing at `/openapi.json`, `/openapi.yaml`, `/swagger.json`, `/api-docs`, or `/docs` on any host. The Azure API Management developer portal at `portal.azureapi.zotgpt.uci.edu` is live and returns HTTP 200, but it gates its API definitions behind sign-in — and APIM will export OpenAPI for you, so this is a toggle, not a build.
- **No `/.well-known/` surface whatsoever.** No `security.txt`. No `api-catalog`. No OIDC discovery document. No OAuth authorization-server metadata. No `robots.txt`, no `sitemap.xml`.
- **No `llms.txt`**, on the marketing host or the docs.
- **No A2A agent card**, at either the canonical `/.well-known/agent-card.json` or the legacy `/.well-known/agent.json`, on any host.
- **No MCP server.** They are shipping *client* configuration for Claude Desktop and VS Code and opencode — the campus is very deliberately putting agents in people's hands — but there is no MCP server exposing ZotGPT's own capabilities back to those agents.
- **No status page, no SLA, no error catalog, no idempotency contract, and no machine-readable model catalog** — the model catalog, the single most volatile thing on the platform, is a portal page a human reads.

The one anonymously retrievable machine-readable descriptor in the entire estate is the campus Shibboleth IdP's SAML metadata. It describes identity, not AI.

I want to be careful about how I say this, because it would be easy to read as a knock and it is not one. Everything above is a *late* problem, and it is only a problem at all because UCI got the hard part right first. Owning your data plane, owning your identity plane, owning your routing layer, and owning your budget — those are the expensive, irreversible decisions, and UCI made all four correctly and early. Publishing an OpenAPI is an afternoon. Turning on the APIM export is a checkbox. An `llms.txt` is a text file. A `security.txt` is four lines.

But the gap matters more here than it would elsewhere, for a reason specific to this platform. UCI is actively teaching its campus to use coding agents against campus infrastructure — that is what those Claude Desktop and VS Code and opencode guides *are*. Every one of those agents is going to try to discover what the Gateway can do, and every one of them is going to come back with nothing, because there is nothing published to find. The model catalog changes every few months and lives in prose. A campus that has done this much work to make AI safely available is currently making its own AI platform the least legible system on campus to the agents it is handing out.

The fix is small and the leverage is large: export the OpenAPI that APIM already holds, publish a machine-readable model catalog so agents can see what they can route to, add an `llms.txt` and a `security.txt`, and stand up an MCP server in front of the Gateway so that the agents UCI is teaching people to use can actually reach campus-governed models as a first-class tool. That last one would make ZotGPT one of the more interesting agent platforms in higher education, and it is closer than it looks, because the hard prerequisites — identity, policy isolation, budget enforcement, provider abstraction — are already built and running.

## What I would take from this if I ran an enterprise

Strip out the university and this is a template. UCI's move was to refuse the framing that you either buy a vendor's AI or you build your own models. They did neither. They built the **thin, durable layer** — identity, policy, routing, budget — and rented everything volatile. The models churn every quarter; the control plane has not changed shape in two years. They kept a `partners` page listing Zoom, Microsoft Copilot, and Google Gemini right alongside all of it, because "own your infrastructure" was never an argument against buying software, it was an argument about which *position* you refuse to give up.

That position is the API. It always was. The gateway is where you keep your leverage over a market moving faster than your procurement cycle, and a public university with a fraction of a Fortune 500's budget currently defends that position better than most of the enterprises I profile.

The full profile, both generated OpenAPIs, and fourteen enrichment artifacts — authentication, conventions, plans, rate limits, FinOps, lifecycle, changelog, packages, examples, conformance, domain security, the well-known probe, an agent skill, and the `llms.txt` UCI has not published for itself — are in the [api-evangelist/zotgpt repository](https://github.com/api-evangelist/zotgpt). Neither OpenAPI was retrievable from UCI; both are marked `generated` and built strictly from base URLs, headers, provider aliases, model slugs, and operations UCI names verbatim in its own documentation. No endpoint was invented, and nothing in the profile claims a live call I did not make.
