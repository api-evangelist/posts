---
published: true
layout: post
title: 'MoEngage Decides Who Is Allowed To See A Tool'
date: 2026-09-25
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - MoEngage
  - MCP
  - Agents
  - APIs.io
  - APIs
---
MoEngage uses `x-moe-mcp`, in their own namespace, and it packs two quite different concerns into one object:

```
x-moe-mcp:
  expose:
    external: true
    internal: true
  tool_description: |
    List all offer campaigns in the workspace. Use this as the first step to
    discover existing offerings and their IDs before calling update_offering...

    Typical agent flow:
      1. Call list_offerings (optionally filter by status_in=active or name_contains)
      2. Pick the offering ID from the results
      3. Call update_offering with that ID to modify the offering

    Pagination: pass next_cursor from the pagination object on the next call.
    Keep paginating until has_more is false.
```

Two things are happening. `expose` is an access decision — is this tool visible externally, internally, or both. `tool_description` is the agent-facing instruction, and like Secureframe's it teaches a sequence rather than describing an endpoint.

The `expose` block is the part I have not seen elsewhere in this shape, and it is more significant than it looks.

Everyone else in this series has treated agent exposure as binary. Windmill's `x-mcp-tool: true`. Constant Contact's `x-ctctmcp-allow: true`. Wistia's `x-wistia-mcp-ignore`. In or out. MoEngage split it into two audiences, which means their internal assistant and their customers' agents can see different tool sets from one contract.

That is obviously correct once you have run into it, and almost nobody has built it yet. An internal support agent should be able to look up a customer's campaign configuration to answer a ticket. A customer's own agent should not be able to reach across accounts. Those are different tool sets over the same API, and if exposure is a boolean you either maintain two contracts that drift or you expose the union and rely on authorization to catch the difference. Neither is good. Two flags in one field is a much cheaper answer than either.

It also rhymes with Fern's `x-fern-audiences`, which I wrote about earlier in this series — one contract, multiple views for different consumers. Two companies, in completely different problem spaces, independently concluded that a single document needs to describe several audiences. That is the second time in three weeks I have found the same idea invented twice, and it is starting to look less like coincidence and more like a hole in the specification.

The `tool_description` half is doing what Secureframe's did, and I will not repeat that argument at length — the discovery-then-act sequence, the ID that has to come from the previous call, the explicit pagination termination condition. All of it is knowledge that exists in the contract nowhere else and is required to use the API correctly.

But there is a detail in there I want to pull out, because it is the sharpest thing in the post: "Use the fields parameter to request only the fields you need (reduces token usage)."

That is an API telling its caller how to be cheap.

I have not seen that anywhere else. The `fields` parameter is presumably an ordinary sparse-fieldset feature that has existed in this API for years, aimed at reducing payload size and latency. MoEngage noticed that the same parameter now has a completely different value proposition for a different kind of consumer — it reduces context consumption, which is the actual scarce resource for a model — and wrote the new rationale into the contract for the new audience.

That is a small sentence and it is a genuinely new category of API documentation. Efficiency guidance addressed to a caller whose constraint is context rather than bandwidth. I expect to see a lot more of it, and MoEngage got there early.

The asks.

**Register `x-moe-mcp`, and consider splitting it first.** This is the only post in the series where I would suggest changing the design before registering it. `expose` and `tool_description` are unrelated concerns — one is an access-control fact, the other is documentation — and bundling them in a single object means anything that wants one has to understand both. Two keys would be cleaner, would register more clearly, and would let the `expose` idea travel on its own. It is the better idea of the two and it deserves not to be carried around inside a description field.

**Sponsor the OpenAPI Initiative.** MoEngage is a large engagement platform with a substantial API surface, and it already uses vendor extensions from elsewhere in this series — `x-mint` shows up in their documents too. The company depends on this format from several directions at once. Membership is the ordinary ask.

**Get involved — bring the multi-audience problem.** Between MoEngage's `expose` and Fern's `x-fern-audiences`, there is now demonstrated demand from unrelated corners for one contract that describes different views for different consumers. That is a specification-level question, not a vendor question, and it will only get more urgent as internal agents and external agents both start reading the same documents. Two companies who have already built it should say so in the same room.

Monday, Pipedrive, where the tool descriptions come with a price.
