---
published: true
layout: post
title: 'Ripio Wrote enabled false And Tools Will Read It As True'
date: 2026-10-01
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - Ripio
  - MCP
  - Agents
  - Standards
  - APIs
---
This is the last post in a series about OpenAPI vendor extensions, and I saved it for the end because it is the one that turns an argument about tidiness into an argument about a bug.

Ripio, a Latin American cryptocurrency exchange, uses `x-mcp` on their operations:

```
x-mcp:
  enabled: false
```

An object, with a single field, set to false. Ripio is marking this operation as **not** exposed to agents.

Now recall the other two implementations from this week. Demodesk writes `x-mcp: {enabled: true, toolName: users_get_me, title: Get current user}` — an object, where `enabled` carries the decision. Eon writes `x-mcp: true` — a bare boolean, where the value itself is the decision.

Three companies. One key. Three shapes. And here is what happens when a tool tries to read all three.

The obvious implementation, the one almost everybody writes first, is a truthiness check:

```
if (operation['x-mcp']) { exposeAsTool(operation) }
```

That is correct for Eon. `true` is truthy, the operation is exposed, everyone is happy. It is correct for Demodesk by accident — the object is truthy and `enabled` happens to be true, so the right thing happens for the wrong reason, which is the most dangerous kind of correct.

And it is **wrong for Ripio**. `{enabled: false}` is a non-empty object. Non-empty objects are truthy in every language anybody is going to write this in. So the check passes, and an operation that Ripio explicitly marked as *not for agents* gets exposed as a tool.

The failure is silent. Nothing errors. Nothing logs. The tool list simply contains something the publisher deliberately excluded, and the only way anyone finds out is if it gets called.

I want to be careful and precise about what I am claiming, because this is a serious thing to assert about a real company. I am not saying this has happened to Ripio. I have not tested any specific MCP implementation against their documents, and I have no evidence that any tool has actually mishandled their contract. What I am saying is that the failure mode is available, that the code path that produces it is the one a competent engineer would write by default, and that nothing in the ecosystem currently prevents it. That is a latent bug in the shared vocabulary, not an incident.

It is also worth noting that Ripio is the company with the most to lose from it. This is an exchange. The operations you mark as not-agent-exposed on a crypto exchange are not going to be the harmless ones.

None of the three companies did anything wrong. Ripio's object-with-`enabled` is arguably the most explicit and self-documenting of the three shapes — it says what it means rather than relying on the key name to carry the meaning. Eon's boolean is the most obvious. Demodesk's richer object is the most capable. Every one of those is a defensible engineering decision made by someone solving a real problem with no reference material available.

The reference material is the missing piece. That is the whole series, compressed into one key.

Over the last month I have written about twenty-one companies. Redocly, Speakeasy, Microsoft, AWS, ReadMe, Stoplight, Stainless, Mintlify and Fern, who each independently invented vocabulary for things OpenAPI does not describe — pagination, lifecycle, visibility, retries, field mutability, long-running operations. Then Wistia, Windmill, Zoho, Algolia, Constant Contact, Zuplo, Secureframe, MoEngage, Pipedrive, Demodesk, Eon and Ripio, doing the same thing again, right now, for agents, at much greater speed.

The [OpenAPI Extension Registry](https://spec.openapis.org/registry/index.html) has thirty-six entries, and twenty-nine of those are the OpenAPI Initiative's own backport shims. Seven real community registrations. Against that, I count 2,443 distinct extensions across 21,329 OpenAPI documents from 7,380 providers in the [APIs.io](https://apis.io/extensions/) catalog. It is the largest undocumented vocabulary in this industry and it is growing fastest in the newest corner of it.

Registering an extension is a markdown file and a pull request. That is the entire process. It is lighter than the internal design review that produced the key in the first place.

So the asks, for the last time, and to everyone rather than to one company.

**Register your extensions** — the ones that carry meaning past your own tooling. Not your internal flags. The keys that tell a stranger something true about your API.

**Sponsor the OpenAPI Initiative.** Every company in this series is downstream of a specification maintained by a small Linux Foundation project. Several of them exist entirely because of it. The proportion of value extracted to value returned is not close to right.

**Get involved.** The specification has gaps, and this series is a catalogue of them written in twenty-one companies' own handwriting. Pagination. Lifecycle beyond a deprecation boolean. Field mutability. Audience. Cost. Workflow sequencing. Agent exposure. Every one of those was invented independently more than once, by people who could not see each other. Bring what you built to the Special Interest Groups and some of these extensions get to stop existing, which is the best outcome an extension can have.

And if you only do one thing from all of this: go and look at what is in your own OpenAPI documents. Most of the companies I wrote about this month are shipping vocabulary they did not choose, from tools they forgot were in the pipeline, in a file the whole world can fetch.
