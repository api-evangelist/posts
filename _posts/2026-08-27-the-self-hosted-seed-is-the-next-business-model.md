---
published: true
layout: post
title: 'The Self-Hosted Seed Is The Next Business Model'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-self-hosted-seed-is-the-next-business-model.png
date: 2026-08-27
author: Kin Lane
tags:
  - Strategy
  - Kin Score
  - APIs.io
  - Agents
  - Open Source
  - Conversations
  - Nutrition
  - Health
  - APIs
---
This one is not my idea. It came out of [my conversation with Sebastian Loch](https://conversations.apievangelist.com/store/2026-08-18-sebastian-loch/), who runs business development at [fatsecret](https://www.fatsecret.com/). I asked him what part of the vibe-coding shift he thought was understated, expecting to hear something about app stores. Instead he said this:

> "It is not just people vibe coding an app and putting it on the App Store or Google Play. People can now build and host their own application."

And then he named one:

> "There is a project on GitHub called Sparky Fitness where anyone can host their own nutrition app by downloading the repository and running it locally, and there are tens of thousands of people doing it."

I went and looked. [SparkyFitness](https://github.com/CodeWithCJ/SparkyFitness) is a self-hosted nutrition, exercise, sleep, hydration, and body-measurement tracker — the thing you run yourself instead of renting MyFitnessPal. 5,653 stars, 5,400 commits, Docker Compose, native mobile apps, OIDC and passkeys, an MCP server, bring-your-own-LLM. Source-available and non-commercial rather than open source, which is a distinction worth keeping straight.

Sebastian's point was not that this is cute. It is that it is a market:

> "You do not rely on a mobile app provider, you do not rely on the App Store or Google Play, and you can enhance it — track whatever you want and tap into verified sources such as us... It is mind-blowing to see, and it is the part of the whole vibe-coding shift that hardly anyone talks about."

He is describing a business model, and fatsecret is already inside it. Their Platform API signups went "almost 100x." They built "a self-serve checkout where people come to the API, use a Stripe subscription, get their own keys, and get started — no email, no contacting anyone, fully self-managed." The app got commoditized and the verified data underneath it got more valuable. That is the whole thesis in one company.

So I did the work. I profiled the eight companies in SparkyFitness's integration list that were missing from the catalog, re-profiled one that was in it badly, and scored all nine.

## The seed is not the code, it is the integration surface

Subtract the CRUD from SparkyFitness and what is left is pipes into Apple Health, Google Health Connect, Fitbit, Garmin, Withings, Polar, Oura, Hevy, Strava, Yazio, OpenFoodFacts, USDA, FatSecret, Nutritionix, Wger, Mealie, and Tandoor. That list is the hard-won part. An LLM will write you the tracker. It will not tell you which of those twenty providers has a real contract, which lets a user delegate consent, and which will be there in two years.

Nine of them had never been scored. Here is what came back after running the full enrichment pipeline — 185 artifacts, nine for nine, no failures — and scoring them today against rubric 0.15.0.

| Provider | Kin Score | Band | Agent Readiness | Health Regime |
|---|---|---|---|---|
| Tandoor Recipes | 62.0 | Strong | 27.6 agent-aware | 57.4 |
| wger | 57.7 | Strong | 36.2 agent-ready | 55.0 |
| Hevy | 51.6 | Developing | 30.4 agent-ready | 31.3 |
| Swiss Food Composition Database | 47.4 | Developing | 25.0 agent-aware | 57.4 |
| SparkyFitness | 42.7 | Developing | 33.7 agent-ready | 26.3 |
| Mealie | 42.5 | Developing | 35.1 agent-ready | — |
| Norish | 26.9 | Thin | 15.3 agent-aware | — |
| Free Exercise DB | 26.4 | Thin | 9.7 agent-aware | 18.8 |
| YAZIO | 13.3 | Emerging | 6.0 agent-aware | 17.5 |

Put together with the sixteen commercial health, device, and nutrition providers already in the catalog, the full stack is twenty-five providers, mean composite **44.6**, median **43.5** — the middle of the Developing band. One Exemplar in twenty-five, and that is Fitbit at 67.6.

## wger was wrong by fifty-two points

The single most useful thing this pass produced was a correction. wger — the FLOSS workout and nutrition tracker, 6,779 stars — was sitting in the catalog at **5.7, Minimal**. It is now **57.7, Strong**.

Nothing about wger changed. What changed is that the pipeline found their OpenAPI. It is a real, complete, 129-path OpenAPI 3.0.3 document declaring five security schemes including OIDC, and it is served at `/api/v2/schema?format=json`. Every earlier attempt looked for it at `/api/v2/schema/` — with the trailing slash — which returns a 404. Fifty-two points of a real project's score hinged on a slash.

I write a lot about how a Minimal score is a statement about what a provider publishes. This one was a statement about my own reader, and it is exactly the failure mode I keep telling other people to look for.

## Hevy's API documentation points at the Swagger petstore

Hevy publishes their developer docs at `api.hevyapp.com/docs/`. That page is a stock, unconfigured Swagger UI whose initializer still carries the default:

```
url: "https://petstore.swagger.io/v2/swagger.json"
```

Every path under `/docs/` returns a 200 — including paths that do not exist — so `openapi.json` and `swagger.json` both look like they resolve and both serve the same HTML shell. A presence check finds a documentation endpoint. A developer finds the Swagger petstore.

Their real spec does exist. It is embedded inside `swagger-ui-init.js`, fourteen paths, titled "Hevy API Docs," with a description that reads *"we make no guarantees that we won't completely change the structure or abandon the project entirely so use it at your own risk."* It declares **no security schemes at all**, despite the API requiring an `api-key` header. And there is a second, separate OpenAPI that Hevy publishes in a README in their own GitHub org — four paths, written as the action schema for a [ChatGPT Custom GPT](https://github.com/hevyapp/hevy-gpt).

So Hevy has authored two agent-facing contracts and put neither one anywhere an agent would look.

## The two providers shipping real MCP servers are the self-hosted ones

Across all twenty-five providers, exactly two ship a first-party Model Context Protocol server that a person can actually run:

- **SparkyFitness** — in-process inside the main API server, StreamableHTTP at `POST /mcp`, built on `@modelcontextprotocol/sdk` (confirmed in their server's own `package.json`). Every deployment serves its own endpoint on the operator's host.
- **wger** — a separate first-party server in the `wger-project` org, published to PyPI as `wger-mcp` 0.2.0 and shipped as a container image.

Both are self-hosted open-source projects. Fitbit, Garmin, Withings, Polar, Oura, Whoop, Strava, and Nutritionix ship none between them. The seed is more agent-ready than the platforms it consumes, and that is not a fluke — it is what happens when the person building the thing is also the person who wants to point an agent at it.

## Two scoring defects this cohort exposed

I have to disclose two, because both inflate the numbers in the table above and I found them while writing this.

**The scorer credits an MCP artifact that says there is no MCP server.** Eight of the nine artifacts my pipeline wrote state plainly that the provider ships nothing — *"Mealie ships NO Model Context Protocol server,"* *"nobody at Hevy ships a server, remote or stdio"* — and all eight scored `documented` and took the twelve points. The artifact is honest. The reader is crediting the file's existence instead of reading `deployment.mode: none`.

**Apple scores an MCP server on a pointer to an ML research repo.** The `MCPServer` pointer on Apple's record resolves to `apple/ml-mcp-repo-level-coding`, a repository about repo-level coding assistants. It is not an MCP server for Apple Health or anything else in this stack. The check reads the pointer's type and never looks at what is on the other end.

Both are now filed as [#144 and #145 in the Kin Score roadmap](https://github.com/api-evangelist/kin-score), not yet applied. Corrected, the MCP count across these twenty-five drops from ten to two — which is the number I used in the section above.

It took this particular cohort to find them. Across commercial device makers the MCP artifact is simply absent, and absent scores zero correctly. It took a set of small open-source projects, where the pipeline could read an actual repository and conclude *no server here*, for the gap between **absent** and **recorded as absent** to become visible.

## What is left when you take the code away

The rest of the agent surface across all twenty-five is thin in a way that matters more than the composites. Seven of twenty-five offer delegated user identity — the rest hand you a static bearer token, for health data. Zero publish an A2A agent card, a `/.well-known/api-catalog`, protected-resource metadata, or dynamic client registration. Not one company in this stack can be onboarded by an agent without a human filling in a portal form.

Which brings it back to where Sebastian started. The application layer is being commoditized by the models — he watched it happen to his own category and his company got *more* valuable, not less, because what people needed from fatsecret was never the app. It was the verified data and a way to get at it without talking to a salesperson. Their Access Clarity score is 84.2, tied for the highest in this stack, and the catalog independently reads their access model as freemium, self-serve, try-it-now at high confidence. The self-serve checkout he described in conversation is legible in the artifacts.

That is the business model. Ship a domain-shaped seed people run themselves. Do not sell the code — the code is free now. Sell the thing the code has to connect to, the knowledge of which connections are worth making, and the work of keeping them alive when a provider deprecates, re-tiers, or quietly starts serving the Swagger petstore.

Pick a sector, decompose it into capabilities, score the candidates, publish the stack as the seed's bill of materials, and re-score on a cadence. Health is just where this example happened to land because a nutrition-data guy told me where to look.

Give the whole conversation a listen — [API Evangelist Conversation with Sebastian Loch](https://conversations.apievangelist.com/store/2026-08-18-sebastian-loch/), also [on YouTube](https://www.youtube.com/watch?v=-ym0WKjZwZ8).
