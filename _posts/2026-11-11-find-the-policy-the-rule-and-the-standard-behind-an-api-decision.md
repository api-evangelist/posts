---
published: true
layout: post
title: 'Find The Policy, The Rule And The Standard Behind An API Decision'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/find-the-policy-the-rule-and-the-standard-behind-an-api-decision.png
date: 2026-11-11
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - API Governance
  - Pagination
  - Policies
  - Rules
---

Most API governance conversations start with a decision somebody has to defend. "Every list endpoint must paginate." Fine, but where is that written down, what rule checks it, and what standard does it lean on? On most teams those three answers live in three different places, if they live anywhere at all. I wanted one call that would go and look, so the tool for today is `find_building_blocks` on the API Evangelist MCP server, which sits on top of `GET /guidance` and its sibling collections in the API Evangelist API.

The building blocks are the parts I have been collecting for governance for years, broken out by type: guidance (177), rules (617), policies (283), standards (432), strategies (75), schema (11), properties (790), experiences (46) and lifecycle (29). You pick a type, give it free text or tags, and it hands back the matching records with a link to each one.

## What I gave it

I took one ordinary decision, pagination, and asked for it across four types. The arguments were the same each time, only `type` changed:

```json
{"type": "policies", "q": "pagination", "limit": 5,
 "fields": ["slug", "title", "summary", "url"]}
```

I ran it for `policies`, `rules`, `standards` and `guidance`. Then, because of what came back for rules, I ran rules again with `q: "limit"` and once with no query at all to confirm the collection was really there.

## What came back

The policy is there, and it says what I would say:

```json
{"meta": {"total": 1, "query": {"q": "pagination"}},
 "data": [{
   "slug": "operations-pagination",
   "title": "Pagination (Operations)",
   "summary": "Require that every endpoint returning a collection
     paginates its results using a single, consistent strategy ...
     an unbounded list is a loaded gun pointed at both your database
     and your consumers ... Cap the maximum page size, default it
     sensibly, and enforce the pattern at the gateway so it holds
     everywhere.",
   "url": "https://policies.apievangelist.com/store/operations-pagination/"
 }]}
```

Standards came back with three: [JSON:API](https://standards.apievangelist.com/store/json-api/), Software Design Patterns and Design Standards. Guidance came back with one, the JSON API entry. So there is a policy and there is something to point at for the "how."

Then rules:

```json
{"meta": {"total": 0, "page": 1, "limit": 5, "pages": 0,
  "query": {"q": "pagination"}}, "data": []}
```

Zero. Out of 617 rules, not one mentions pagination. The browse call with no query confirmed the collection was fine (`"total": 617`), and `q: "limit"` returned 22 rules, led by the OWASP API4:2023 set: rate limit headers, `Retry-After`, string `maxLength`, array `maxItems`, integer limits. Those are close cousins of pagination, since they all fight unbounded resource use, but none of them checks that a collection response carries a cursor, a page size or a next link.

That is the honest finding, and it is about my own catalog. I have a firmly worded policy that says pagination should be enforced everywhere, and no linting rule that enforces it. The policy says "enforce the pattern at the gateway," and the rules collection quietly says nobody wrote the check. I would not have seen that gap by browsing the sites. I saw it because the same query against four types gave me a 1 / 0 / 3 / 1 pattern, and the zero stood out.

One other thing worth saying plainly: search is free text, so the results depend on words. Guidance only matched "pagination" through JSON:API, not through any guidance written about paging itself. If you get a thin answer, try the neighboring word (`limit`, `cursor`, `page`) before you conclude something is missing. I did that here, and the gap held.

## What that makes possible

- **Trace a decision end to end.** Take any rule of thumb your team argues about, run it across policies, rules and standards, and you get the written reason, the automated check, and the outside standard in three short calls, each with a link you can put in a design review.
- **Find the policies nobody enforces.** A policy with no matching rule is a promise without a test. Running each of your policies' topics against `type: "rules"` is a cheap way to list them. Pagination is now on my own list.
- **Ground an agent's design advice.** An agent asked "should this endpoint paginate?" can pull the policy text and the standards it cites instead of improvising, and it can say "there is no lint rule for this yet" rather than pretending there is.
- **Start a ruleset from what exists.** The `q: "limit"` results are real Spectral-style rules you can lift today while the pagination rule gets written.

The next step after finding a rule is usually `describe_rule`, which tells you what a single rule actually checks. That is its own story.

## Try it

`find_building_blocks` is free. On the MCP server at `https://mcp.apievangelist.com/mcp` (or the lighter governance toolset at `https://mcp.apievangelist.com/mcp/governance`), call it with a `type` and a `q`. Over REST, each type has its own collection; guidance looks like this:

```sh
curl "https://api.apievangelist.com/v1/guidance?q=pagination&limit=5"
```

The [API reference](https://developer.apievangelist.com/api) lists every collection, and the [MCP server docs](https://developer.apievangelist.com/mcp-server) show how to connect. Reading the building blocks costs nothing. The [plans page](https://developer.apievangelist.com/plans/) covers the Pro tools you might reach for afterward.
