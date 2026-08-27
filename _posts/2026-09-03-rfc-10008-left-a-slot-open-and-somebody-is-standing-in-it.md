---
published: true
layout: post
title: RFC 10008 Left A Slot Open And Somebody Is Standing In It
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/rfc-10008-left-a-slot-open-and-somebody-is-standing-in-it.png
date: 2026-09-03
author: Kin Lane
tags:
  - Specifications
  - Standards
  - HTTP
  - Discovery
  - Agents
  - APIs
  - API Evangelist
---
Every API I have ever catalogued eventually grows a search endpoint, and every one of them has had to lie to get it. You cannot put a real filter in a URL — you hit length limits, you leak your parameters into access logs and referrer headers, and you cannot express nesting at all. So you do what everyone does and reach for `POST /resource/search`. And in that moment you have told every cache, every proxy, every retry policy and every code generator between you and your caller that this operation is unsafe and non-idempotent. It is a read. You just described it as a write, because the protocol gave you nothing better.

That has been the state of things for about twenty years. In June, it quietly stopped being true. **RFC 10008 standardized the HTTP QUERY method** — safe and idempotent like `GET`, carrying a request body like `POST`. It came out of `draft-ietf-httpbis-safe-method-w-body` after six years of on-and-off work in the HTTP Working Group — the first individual draft landed in September 2020 — written by Julian Reschke, James Snell and Mike Bishop. QUERY is now registered with IANA as safe: yes, idempotent: yes. A search can finally say what it is.

I want to be careful about how much I claim for that, because "new HTTP method" has a poor track record and I have watched several arrive to no applause. But the practical consequence here is not abstract. Because QUERY is safe, its responses are cacheable and its requests are retryable. Every conditional request, every automatic retry, every cached response that a read should have been getting, search endpoints have been giving up as the price of the workaround. That is a real bill that has been quietly accruing across the whole industry, and it is now optional.

The RFC also registers a header I think is the more interesting half: **`Accept-Query`**. A resource uses it to advertise that it accepts QUERY *and* which query media types it understands. Think about what that is for a second. Nearly every machine-readable declaration I track in my catalog is a document sitting somewhere else — a spec file, a well-known linkset, an MCP manifest, an `apis.json`. `Accept-Query` is served by the resource, at the resource, at request time. An agent that wants to know whether your search endpoint speaks a structured query language, and which one, asks the endpoint. No documentation site, no catalog, nothing out of band.

## The hole in the middle of it

Here is the part that sent me down this road. RFC 10008 **deliberately defines no query language**. It specifies the envelope and leaves the contents entirely to a media type. The RFC's own example of the header reads:

```
Accept-Query: "application/jsonpath", application/sql;charset="UTF-8"
```

That is the IETF politely declining to pick a winner, which is the correct call for a method specification and also leaves an enormous unclaimed slot sitting directly above it. There is now a standardized way to say "this is a read with a body," and no standardized answer to "so what goes in the body."

I wrote a while back that [every specification is a land grab](https://apievangelist.com/2026/09/02/every-specification-is-a-land-grab/) — that the real estate between systems gets claimed by whoever writes the document and convinces people to use it, and that unclaimed valuable real estate does not stay unclaimed. This is a textbook parcel. It is small, it is load-bearing, and it is unfenced.

The incumbents do not obviously fit it, which is what makes it interesting rather than settled. JSONPath and JMESPath are the reflexive answers and they are both the wrong shape: those are *selection* languages, for reaching into a document you already hold and pulling pieces out. A search filter is a *predicate* — it never selects anything, it only decides whether a record matches, and it has to travel over the wire rather than run on data in hand. OData has real filtering, but `$filter` is still an opaque string, which is the exact problem this is supposed to solve, and adopting it means adopting OData. GraphQL is a genuine answer and the price is your entire HTTP surface. SQL in a request body is a security conversation I do not want to have on a Tuesday.

## The newcomer

Which brings me to the thing that actually prompted this post. Somebody is standing in the slot.

**[JSON Query Language](https://github.com/christosgkoros/json-query-language)** is a JSON-encoded, SQL-flavored predicate language described by exactly one JSON Schema file. You `$ref` it from an OpenAPI document, or you bundle it inline as an MCP tool's `inputSchema`. It is v0.2.0, MIT licensed, written by one person — Christos Gkoros — and as I write this it has zero stars and eight commits.

I went in expecting to bounce off it and did not. The design decisions are the ones I would argue for. It covers the **predicate and nothing else** — no projection, no ordering, no pagination — on the reasoning that those parts differ per API and the filter does not, which is precisely what makes one grammar reusable across every search endpoint you own. Operators are grouped into **conformance profiles** so that a backend which cannot execute `$regex` rejects the clause instead of silently ignoring it, which is the worst possible failure for a filter because it *widens* the result set. Evaluation is **three-valued, like SQL**, and rather than hiding that, the README leads with the traps: `$ne` and `$not` exclude nulls, and `$in` is value equality rather than array membership. Rejected filters come back as RFC 9457 Problem Details with a JSON Pointer at the offending clause.

The part that made me pay attention is the MCP path. Right now the near-universal pattern for exposing search to a model is a `query: string` parameter with prose in the description telling it how to assemble a search string that nothing can ever validate. Bundling a real grammar into `inputSchema` moves that contract from prose into something a validator enforces, with the operator descriptions riding along as the instructions. And the spec is unusually honest about the ceiling on that: syntax becomes checkable, but a filter that is *valid and wrong* still fails as an empty result set, which an agent cannot distinguish from "no such records" — so it reports a confident false negative. Its answer is to push value domains out into a separate capability document rather than pretend the grammar can carry them. That is someone who has operated a search endpoint, not someone who has theorized about one.

Now the honest part, because I am not going to sell you something I checked and found broken. The schema's own `$id` — `https://christosgkoros.com/json/query-language/v0.2.0/query-language-schema.json`, the URL the README instructs you to `$ref` from OpenAPI — **returns a 404**. Neither documented npm package name resolves on the public registry. The raw GitHub URL is currently the only fetchable copy of the artifact, which is what I had to point my catalog at. It is pre-1.0, single-author, and I could not identify a single adopter. The README also still describes QUERY as "an IETF draft," which stopped being true three months ago.

I catalogued it anyway, [in the standards catalog next to the method itself](https://standards.apievangelist.com/store/json-query-language/), with every one of those caveats written into the entry. Not because I think it wins. Because the design is right and I would rather have the good version of this argument on the record while the slot is still open.

## The number I actually care about

Then I went and checked what my own catalog knows, which is the part of this I can measure rather than opine about.

**Zero of 26,641 providers declare `Accept-Query`.** Not a handful. None.

That is not a criticism of anybody. The method is three months old, and until very recently you could not even describe it: OpenAPI 3.1's Path Item Object has a fixed set of method fields with no room for QUERY, and it took 3.2 adding `additionalOperations` to make the method expressible in a contract at all. The tooling gate only just lifted.

But I decided the zero was worth capturing rather than discovering later, so I added `Accept-Query` and QUERY-in-the-contract to my agent-readiness rubric as **tracked signals worth zero points**. That last part matters and it is a distinction I had not needed until now. A scoring dimension that nobody on earth can earn is not a measurement, it is a rescale — it divides every provider in the catalog by a bigger number and shuffles a couple thousand of them across a band boundary without anyone having gotten worse at anything. I have made that mistake before and had to re-cut the bands to undo it. So these get detected on every scoring pass, get their count printed in the run summary, and get no points until twenty-five providers actually ship one. Then they graduate into real dimensions.

Which means what I have now is a baseline at t=0 for a standard that is three months old, and `Accept-Query` adoption is the cleanest single measure I can think of for whether QUERY is landing in production or living in specification documents. I would like to be able to answer that in a year with a curve instead of a guess.

I do not know who ends up owning the grammar slot. My honest expectation is that a vendor takes it — someone with a search product who needs the filter to work a particular way, ships it with an SDK, and is three years ahead of any committee. That is how this normally goes and I am not naive about a zero-star MIT repo's odds against it. But the slot is genuinely open right now, in public, for probably the last time, and the design in that repo is better than what will likely win. Somebody should say so before the fences go up.

I will be watching the number.
