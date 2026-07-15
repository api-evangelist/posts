---
published: true
layout: post
title: 'When AI Agents Start Acting, APIs Become Execution Contracts'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/when-ai-agents-act-apis-become-execution-contracts.png
date: 2026-09-10
author: Kin Lane
tags:
  - Governance
  - OpenAPI
  - Overlays
  - Spectral
  - Security
  - Agents
  - AI
---

A friend of mine, Mike from [Curity](https://curity.io), gave a talk at apidays Munich this year with a title I have not been able to put down: *When AI Agents Start Acting, APIs Become Execution Contracts*. His argument is simple and, I think, correct. As long as an AI agent is only reading, we are in familiar territory. The moment an agent begins to *act* — orders inventory, changes a production run, dispatches a technician, stops a machine — the API it calls stops being a convenience and becomes a contract for what that agent is allowed to do to the world. His proof point was pleasantly boring: IfGPT answers insurance questions for 200,000 customers in Denmark by calling the same OAuth-protected self-service APIs the mobile app uses. The AI is just another API client. Identity is handled by IAM and tokens. Nothing exotic.

Industry 4.0 is where it stops being boring. Mike walks a ladder from *connected* (machines report state and accept commands) to *delegated* (an agent chooses the next step) to *acting* (the step changes production, inventory, energy, or safety). At the top of that ladder the question is no longer "who logged in" but "who controls the action, at runtime, right now?" Static, user-centric IAM was built for humans, browsers, and predictable flows. Agents are non-deterministic, there is no login moment for every action, the identity is dual — the agent acts while a human or system is represented — and standing privilege is far too broad to be the thing that authorizes a physical outcome. Authentication is a moment. Authorization, for agents, has to become a continuous process: request, observe, evaluate, then allow, deny, constrain, or escalate. Curity calls the runtime layer that does this Access Intelligence.

I sat with the deck for a while because it lands directly on the thing I have spent this year building: [governance you can carry in the API contract itself](https://apievangelist.com/2026/07/14/the-open-api-governance-toolchain/). If the API *is* the execution contract, then the contract is where the intelligence should live — and that is a job for [OpenAPI](https://apievangelist.com/2026/06/24/consumer-api-governance-in-an-agentic-world/), OpenAPI Overlays, and Spectral. So I built the groundwork. I defined a vendor extension, `x-agentic-access`, that makes every operation an explicit contract for what an agent may attempt:

```yaml
x-agentic-access:
  action-class: acting            # connected | delegated | acting
  consequence: physical           # read | write | physical | safety-critical
  subject: required               # dual identity / on-behalf-of
  scope: [refill:execute]
  audience: "erp://plant-7/inventory"
  token:
    max-ttl: 300                  # short-lived, just-in-time
    exchange: true                # scoped delegation
    purpose-required: true
  constraints:
    - "volume <= customer_order.limit"
    - "operating_conditions == normal"
  escalation:
    human-in-the-loop: conditional
    triggers: [abnormal, high-value]
    approver: "role:plant-operator"
  audit: required
```

That is Mike's slide, expressed as something a machine can check. It declares the token context (who is acting, on whose behalf, for which audience, with which scope, for how long) and the policy context (what must be true for the action to be allowed) that Access Intelligence needs to make a decision. It does not make the decision — that stays in the runtime, where it belongs. It makes the decision *governable*.

The realistic part is the overlay. Almost no producer ships an OpenAPI with any of this in it, and they should not have to rewrite their specs to participate. So I layer `x-agentic-access` onto the existing, unmodified contract with an [OpenAPI Overlay](https://apievangelist.com/2026/08/02/openapi-overlays-for-governance-as-an-artifact/) — the same pattern I have been using all year to add governance without touching the source. The base API stays exactly as the producer published it. The agentic-security intelligence rides on top as a separate, reviewable artifact.

Then I govern it with [Spectral](https://apievangelist.com/2026/06/28/spectral-rules-machine-readable-enforcement/), because a contract nobody checks is a suggestion. The ruleset turns Mike's "what architects should implement now" list into enforcement: every operation must declare its contract; higher-consequence actions must bind an audience, require a subject, carry a short-lived token, and be audited; a safety-critical action must require human-in-the-loop approval; an acting operation must actually be OAuth-protected. I wired it against a small industrial example — the oil-flow case from Mike's own deck, where an agent observes low flow, proposes a refill or a technician dispatch, and a human approves the risky one. The clean contract passes. A broken variant — a physical action with a token that lives too long, a safety-critical action with the human quietly removed — lights up with exactly the findings you would want to see before that API is ever handed to an agent.

None of this replaces Curity, and it is not meant to. Access Intelligence is the runtime decision layer; what I am describing is the contract that feeds it and the governance that proves the contract is complete before anything is exposed. Centralized decision, distributed enforcement, and now a machine-readable execution contract in between. My bet for the next couple of years is that "is this API agent-ready?" becomes a governance question with a real answer, sitting right next to "is this API OWASP-clean?" — and that the answer is carried, like everything else, in the OpenAPI. Thanks to Mike and the Curity crew for the framing. The groundwork — the extension vocabulary, the overlay, and the Spectral ruleset — is written up and open; I will be publishing it as a named ruleset next.
