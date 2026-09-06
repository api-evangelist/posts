---
published: true
layout: post
title: 'Wistia Built The Best Agent Vocabulary Nobody Knows About'
date: 2026-09-16
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - Wistia
  - MCP
  - Agents
  - APIs.io
  - APIs
---
For the last two weeks I have been writing about the SDK generators and documentation platforms whose OpenAPI extensions have spread into other companies' contracts. Today I start the second half of the series, which is about something happening right now, much faster, and almost entirely undocumented: companies inventing vocabulary to describe their APIs to agents.

I am starting with Wistia, because Wistia has built the most thoughtful agent vocabulary I found anywhere in the [APIs.io](https://apis.io/extensions/) catalog, and as far as I can tell nobody outside Wistia knows it exists.

Nine keys. `x-wistia-mcp-tool-name`, `x-wistia-mcp-description`, `x-wistia-mcp-annotations`, `x-wistia-mcp-toolsets`, `x-wistia-mcp-ignore`, `x-wistia-mcp-type`, `x-wistia-mcp-account-gate`, `x-wistia-mcp-properties`, and `x-wistia-mcp-ignore-agent-chat`. One provider — Wistia is the only company in twenty-one thousand documents using any of them.

Here is what stopped me. This is from a Wistia operation:

```
x-wistia-mcp-annotations:
  idempotent_hint: true
  idempotent_hint_justification: Re-sending the same update with identical
    attributes leaves the resource in the same state, so repeating the
    request has no additional effect.
```

There is a justification field. Somebody at Wistia decided that asserting an operation is idempotent was not enough, and that the assertion should carry its reasoning in prose, in the contract, next to the claim.

I have been looking at API descriptions for sixteen years and I do not think I have seen that before. It is a small thing and it is a genuinely sophisticated instinct. An idempotency hint is a promise that something can be safely retried. That promise is exactly the kind of thing that gets copy-pasted onto an operation where it is not true, by someone moving quickly, and then something automated retries a payment. Forcing the author to write down *why* it is idempotent is a review mechanism disguised as a metadata field. It makes the wrong answer harder to write.

And look at the deletion case, which they also cover: "Deleting a resource that is already deleted has no additional effect, so the request can be safely repeated." That is correct, it is precise, and it is the sort of reasoning that normally lives in an engineer's head and dies there.

The rest of the vocabulary is equally considered. `x-wistia-mcp-tool-name` gives the operation a name shaped for an agent rather than for a REST client — `get-media-custom-metadata-field-values`, readable, verb-first, unambiguous. `x-wistia-mcp-description` carries a description written explicitly for a model, and it is written *as instruction*: "Use this when someone wants to see the custom metadata attached to a specific media." That is not API reference prose. That is a usage condition, which is the thing a model actually needs and almost never gets. `x-wistia-mcp-toolsets` groups tools so a client can expose a coherent subset instead of three hundred operations. `x-wistia-mcp-ignore` and `x-wistia-mcp-ignore-agent-chat` are two different kinds of exclusion — not exposed at all, versus exposed but not in the conversational surface — which is a distinction most people have not got to yet. `x-wistia-mcp-account-gate` ties tool availability to the account's entitlements.

That is a complete, coherent design for the problem of "my REST API has a hundred and fifty operations and an agent should not see all of them, should not call them by their operation IDs, and needs to know which ones are safe to retry."

Every company shipping an MCP server on top of an existing API has that problem. Wistia solved it in the contract. One company, in one namespace, invisible.

That is the thing I want people to take from this post, and it is why the second half of this series exists. The agent vocabulary is being invented right now, in parallel, by companies who cannot see each other's work. Wistia has an idempotency-hint design with a justification field. Somebody else is about to build the same thing worse, because they have no way to know this exists. The registry is the only place that would have shown it to them, and there is nothing in it.

The asks, and for Wistia the first one is different from every other post in this series.

**Register these keys, and understand that this is not paperwork — it is publication.** Wistia is not registering to document a proprietary tool. Wistia would be putting a working design for agent-facing API description in front of an industry that is currently improvising one. I would register all nine, which is the first time in this series I have said that. They form a system, and the system is the contribution. The `x-wistia-mcp-annotations` entry in particular, with the justification field described, is the sort of thing that changes how other people build.

**Sponsor the OpenAPI Initiative.** Wistia is not a specification company and has no obvious commercial reason to fund one. I am asking anyway, and specifically because of what is above: a company that thinks this carefully about machine-readable contracts has a stake in that format staying healthy, and the Initiative is where that gets decided.

**Get involved in the agent conversation.** OpenAPI, MCP and the various agent-tooling efforts are all circling the same unresolved question, which is how an API tells a non-human consumer what it is safe to do and when to do it. Wistia has shipped an answer. The people who wrote that idempotency justification field should be in the room where the general version gets designed, because they have already thought about it harder than the average participant.

I would rather this vocabulary become everyone's than stay Wistia's. Right now it is neither — it is one company's, in public, unread.

Tomorrow, Windmill, and the first collision.
