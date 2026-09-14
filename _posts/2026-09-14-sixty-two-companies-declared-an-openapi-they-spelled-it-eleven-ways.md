---
published: true
layout: post
title: "Agent Resource Discovery (ARD): Sixty-Two Companies Declared An OpenAPI. They Spelled It Eleven Ways."
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/sixty-two-companies-declared-an-openapi-they-spelled-it-eleven-ways.png
date: 2026-09-14
author: Kin Lane
tags:
  - API Discovery
  - Agents
  - AI
  - Agent Readiness
  - OpenAPI
  - MCP
  - Standards
  - APIs.io
  - Specifications
  - Governance
---

There is a new file companies are starting to put on their domain, and almost nobody has noticed it yet. It is called an AI Catalog manifest, it lives at a well-known URL, and it does one job: it tells an agent what a domain offers. Not the API. The list. Here are my MCP servers, here is my agent card, here are my skills, here is my OpenAPI, go fetch whichever one you need.

It is the discovery layer sitting in front of everything else, which is the layer I have been arguing we were missing for about fifteen years now. So I went looking for it. I probed **89,228 hosts** across the APIs.io catalog — every absolute host we have on file plus each one's registrable apex — and **81,109 of them answered**. A hundred and seventy-five served a manifest. Those resolve to **119 distinct publishers**, and 102 of them map to a company we already profile, so they now have a page at [apis.io/ard](https://apis.io/ard/) with the fetched body and the grade sitting next to it.

That is the good news, and it is genuinely good news. A year ago this file did not exist. Today a hundred companies are serving one without anyone asking them to. The bad news is what is inside them.

## Eleven Ways To Say OpenAPI

Sixty-two of those 102 publishers declare an OpenAPI in their manifest. It is the most common thing in the corpus after MCP server cards, which tells you something on its own — the API contract is still the center of gravity even in a file built for agents.

They spell it eleven different ways across sixty-nine entries. Forty use some form of `application/vnd.oai.openapi` — and eight of those forty hang a version parameter off the end, like `;version=3.1`, which a consumer doing a plain string comparison will miss entirely. Sixteen use `application/openapi+json` or `+yaml`. And twelve entries, from ten different companies, gave up and wrote a generic `application/json` or `application/yaml`.

That last group is the one that actually costs something. A generically typed entry tells a consumer nothing. A client cannot tell your API contract from any other JSON document on your server without fetching it and guessing. You did the work of publishing a manifest, you pointed at your OpenAPI, and the pointer arrives unlabeled.

Nobody here did anything wrong. The specification's list of recognized types does not include OpenAPI at all, so sixty-two companies each made a reasonable guess and landed in four different places. Somebody had already opened [an issue asking why](https://github.com/Agent-Card/ai-catalog/issues/82), back in July, and it sat there. So [I answered it with the numbers](https://github.com/Agent-Card/ai-catalog/issues/82#issuecomment-5654192423).

While I was in there I checked the thing everyone assumes. The list says its values "are designed to align with official IANA media type registration standards." I went and read the IANA registry. **None of the types currently on that list are registered.** Not the AI Catalog's own media type, not the A2A agent card, not the MCP server card, not any of the agent skill types. Neither candidate spelling for OpenAPI is registered either — one is a vendor tree nobody filed, the other is an IETF draft in working group last call.

That is not a gotcha. It is a young specification doing what young specifications do. But it means "wait for IANA" cannot be the reason OpenAPI is excluded, because nothing else on the list waited.

## Thirty-Six Companies Declared An Identity. One Published It.

This is the finding I did not expect and cannot stop thinking about.

The manifest has an optional field where you declare who you are, and the recommended form is a `did:web` identifier — `did:web:example.com`, which resolves to a document at `example.com/.well-known/did.json` holding your public key. It is the anchor the entire trust layer is built on. Signatures, attestations, provenance — all of it hangs off that identity.

Thirty-six publishers declare one. **One of them resolves.** The other thirty-five return a 404, a 403, or a 500 at the exact URL their own identifier points at. And the one that does resolve carries no verification method, so there is no key in the entire corpus to check a signature against.

Airtable, Cloudflare's developer docs, Cal.com, SurrealDB, Roboflow, Padlet, Hookdeck, Fundraise Up. Good companies, all of them, all of them doing the same thing: writing a string that looks like an identity and never serving the document behind it.

I want to be careful about how I say this, because it is not sloppiness. `did:web:yourcompany.com` is trivially easy to *write* and requires a completely separate deliberate act to *serve*. Nothing about the format tells you there is a second step. You can reasonably believe you have declared an identity when what you have declared is a string. I filed [an issue about it](https://github.com/Agent-Card/ai-catalog/issues/114) suggesting the spec say plainly that the thing has to resolve.

## The Path Moved And Most Publishers Are Still On The Old One

Here is the part that will bite people quietly. There are two specifications in play. The [AI Catalog working repo](https://github.com/Agent-Card/ai-catalog) is hosted at the Linux Foundation and names `/.well-known/ai-catalog.json`. The [ARD specification](https://github.com/ards-project/ard-spec) renamed that path to `/.well-known/ard.json`, changed the link relation from `rel="ai-catalog"` to `rel="ard"`, calls the old names its predecessor, and tells publishers they should move.

So I probed both, in the order the newer spec says to. **Twenty-four publishers answer at the new path. Seventy-eight answer only at the old one.** A consumer that implements only the current specification finds twenty-four of them. A consumer that implements only the older one misses whoever has moved. Nobody is doing anything wrong and everybody is half-visible.

The fix is embarrassingly cheap, which is why I did it on our own domain before writing any of this. The same bytes satisfy both documents, so [apis.io](https://apis.io/.well-known/ard.json) serves the identical manifest at both paths and emits both link relations. One extra file. [I filed that one too.](https://github.com/Agent-Card/ai-catalog/issues/115)

## We Got Our Own Grader Wrong Four Times

I am not going to write a post measuring other people's manifests without telling you how badly the measuring went, because the errors were all the same error and it is a useful one.

Our grader rewarded **the presence or the spelling of a field instead of the truth of it.** Four times:

**It penalized the correct content type.** We flagged publishers for serving `application/ai-catalog+json`, which is precisely what the specification says to serve. The rule wanted plain `application/json`. It was rewarding the wrong answer.

**It treated a missing description as a hard failure.** The spec explicitly says to *omit* the description when the artifact already carries its own — an MCP server card describes itself. We were failing companies for following the instructions.

**It graded `did:web` on string shape.** This is how I found the identity problem, and I found it by being wrong: we checked that the identifier started with `did:web:` and never fetched the document. Two companies were published on our site as fully conformant for a few hours on the strength of DIDs that 404. Fetching them dropped our conformant count back to zero, which is the honest number.

**It measured CORS without sending an `Origin` header.** A correctly configured server only sends the CORS header when a request actually asks for one. We were not asking. So every publisher with a proper conditional policy read as having none — including, delightfully, us, about an hour after we turned ours on.

Every one of those made somebody look worse than they are. The pattern is worth naming, because I suspect it is in a lot of scoring systems including ones I have not written: **when you add a check, ask what it would take to pass it while being wrong.** If the answer is "type eleven characters," you are not measuring anything.

## What To Actually Do

If you are one of the 119, or you want to be:

**Serve it at both paths.** `/.well-known/ard.json` and `/.well-known/ai-catalog.json`, identical bytes, both link relations. Until the two specifications converge this is the only posture that is findable by everyone, and it costs you one file.

**Fetch your own `did:web`.** Right now, in a terminal, with curl. If it 404s you have declared an identity you do not have, and you are one of thirty-five.

**Send CORS.** A browser-resident agent cannot read your manifest cross-origin without it. Eighty-six publishers get this right. Sixteen do not, and we were one of them until this week.

**Type your OpenAPI entry like an OpenAPI.** Even with the spec silent, `application/vnd.oai.openapi+json` or `application/openapi+json` says more than `application/json` does.

The whole survey is at [apis.io/ard](https://apis.io/ard/) — one page per publisher, showing the body we fetched, which path answered, and both conformance verdicts, because the structural grade and the ARD project's own tool disagree in both directions and averaging them into one number would hide the most interesting thing on the page.

None of this is a complaint about the specification, and I want to end there. A hundred and nineteen companies published a file for a standard that is still in draft, before anybody required it, because they think the agent discovery layer matters. They are right. The gaps I found are what early looks like, and early is the only time filing an issue still changes the outcome.
