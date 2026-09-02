---
published: true
layout: post
title: I Graded Everyone Else's Onboarding. Here Is Mine.
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/i-graded-everyone-elses-onboarding-here-is-mine.png
date: 2026-09-02
author: Kin Lane
tags:
  - Onboarding
  - APIs.io
  - AAuth
  - OAuth
  - Authentication
  - Agents
  - Discovery
  - AI
---

For a few months now I have been walking through the front doors of the companies that call themselves the infrastructure of the modern internet, and writing down what I found. [Stripe makes you click a button](https://apievangelist.com/2026/08/13/even-stripe-makes-you-click-for-api-key/). [Notion still makes you click "New integration"](https://apievangelist.com/2026/08/23/notion-still-makes-you-click-new-integration/). [Discord is dashboard-only](https://apievangelist.com/2026/08/27/discord-dashboard-only-app-registration/). [Atlassian runs a three-legged OAuth dance but you make the app in a console first](https://apievangelist.com/2026/08/29/atlassian-three-legged-oauth-console-first/). Out of the [thirty-six providers I scripted](https://apievangelist.com/2026/07/02/what-36-providers-taught-me-about-programmatic-api-onboarding/), one had a door an agent could walk through unaided. Then I [stopped writing their onboarding scripts and started keeping score](https://apievangelist.com/2026/07/27/i-stopped-building-the-onboarding-fix-now-i-keep-score/) instead.

Which puts me in an obvious position. If I am going to hang a number around other people's necks in public, I had better be willing to stand in the same room and be measured with the same ruler. So [APIs.io](https://apis.io) now publishes its own [API Onboarding Descriptor](https://apicommons.org/onboarding/) at [`/.well-known/api-onboarding`](https://apis.io/.well-known/api-onboarding), and a human twin of that file at [apis.io/onboarding](https://apis.io/onboarding/). Same facts, same gaps, one in JSON and one in prose. If the two ever disagree, the machine-readable one is the one a machine reads, and the disagreement is a bug I want reported.

## The Piece Nothing Else Covers

Here is why the descriptor exists at all, and why I keep pushing it on API Commons rather than letting it die as a personal tool. OpenAPI tells you what my API does once you are already calling it. OAuth metadata and dynamic client registration tell you the shape of the credential handshake once you have a client. Neither one says a word about the part that actually stops people: whether you need an account, whether there is a plan gate in front of the resource you want, what the terms are, whether there is a verification queue with a human at the end of it, and whether there is a console somebody still has to click through. That is the gap between "I found your API" and "I made an authorized call," and it is unwritten almost everywhere. It lives in a getting-started page, in a support thread, in tribal knowledge — everywhere except a file a machine can read before it commits.

So the descriptor writes it down. And writing it down forces a kind of honesty that a marketing page never will, because the schema has fields you have to either fill in or admit you cannot.

## The Five Doors

The descriptor declares five registration mechanisms for APIs.io. They are not a ladder you climb in order. They are five different callers, and I want them named plainly:

| mechanism | who it is for | what you walk away with |
|---|---|---|
| `open` | anyone, including an agent, right now | nothing to hold — keyless access to the catalog |
| `browser-oauth` | a human with a browser | an API key, on a GitHub, Google or LinkedIn sign-in |
| `dcr` | a client that wants an OAuth registration | an OAuth client for the MCP surface, via RFC 7591 |
| `cimd` | a client whose `client_id` is a URL | an OAuth client with no registration call at all |
| `aauth` | an agent, with no human at any step | an agent principal with its own key and quota |

The first one is the one I care most about, because it is the one that costs a caller nothing to try. Discovery on APIs.io is keyless. No account, no key, no form. You can prove it in one call right now:

```sh
curl "https://apis.io/api/v1/search?q=sms"
```

That reaches search, providers, APIs, tags, industries and the artifact collections. It is not the whole API — ratings, capabilities, cohorts, insights, resolve, enrich and the service root are paid and answer `402`. Which produces one trap I put in the descriptor and on the page in bold, because I watched it bite people: do not probe `GET /api/v1/` to test whether the door is open. The service root is itself gated, so probing it proves the exact opposite of what you were asking. Probe a resource, not the root. That is the sort of thing you only learn by watching real callers fail, and it is exactly the sort of thing that belongs in a machine-readable file instead of in my head.

The `aauth` door is the one I am proudest of and most cautious about. An agent signs its request with its own Ed25519 key per RFC 9421 and presents an `aa-agent+jwt` in which its agent provider vouches for its `aauth:local@domain` identifier. We verify both, and we recognize a caller we have never seen before. Signing alone earns *attribution* — the caller is recognized and audited under its identifier — but not a meter of its own; until it takes a principal it is limited per IP like any other anonymous caller. To hold an actual account it POSTs `grant_type=client_credentials` to the token endpoint with that same signature, and mints an agent principal with its own API key and quota, a scope ceiling of `apis:read`, no refresh token, and no way to self-grant paid data. Reversible in one request with `DELETE /api/v1/auth/me`.

Anonymous callers are refused, and that refusal is the design. The identifier costs you an allowlisted agent provider willing to vouch for you. An account that costs nothing to mint makes any reputation built on top of it worthless, and I would rather have a door with a real threshold than a turnstile that spins for anybody.

## Tiers Gate Resources, Not Scopes

The plans are the four I [wrote about last month](https://apievangelist.com/2026/09/01/the-four-plans-i-landed-on-for-apis-io/) — Explore, Learn, Understanding, Influence — but the API still identifies them by their original short names on the wire, and it will keep doing so: `free`, `starter`, `pro`, `business`. That mapping is in the descriptor and on the page, because if you are reading a response header rather than a pricing page, the wire name is the only name you will ever see. It shows up in `X-RateLimit-Tier`, in every `402` body, and in the `x-tier` extension on every operation in the reference.

The other thing the descriptor is explicit about is that two failures which look adjacent are not the same failure at all. A `402 Payment Required` means the resource sits above your tier — more requests will never help, and the body names the tier that returns it. A `429` means you exceeded a rate or a daily quota at your own tier, so slow down and retry. It is never a `403` for either one. Every response carries its own budget so a caller reads it rather than guessing:

```
ratelimit-policy: "quota";q=500;w=86400, "burst";q=5;w=1
x-ratelimit-tier: free
x-ratelimit-limit: 500
x-ratelimit-window: 86400
```

A keyless caller gets Explore access but no usage plan — it is limited per IP at the edge at 3,000 requests per five minutes, because a usage plan meters a key and every anonymous caller would otherwise have to share one. Your limit does not move because somebody else got busy. And the [MCP server](https://apis.io/mcp) shares exactly the same tiering as the REST API, because a second set of rules for the agent surface is how you end up with two products that disagree about who you are.

## The Part I Would Rather Not Publish

The schema has a `gaps` array. It is the field that makes the descriptor worth anything, and it is the field that would be easiest to leave empty. Mine has four things in it, and I put all four on the human page too:

**Only a paid tier still requires a human.** An agent can now go from cold discovery to an authorized call with nobody in the loop — sign with AAuth, take a principal, hold a key and a quota. What it cannot do is *buy* anything. The scope ceiling for an agent principal is `apis:read`, and paid data answers `402`. Machine payment is a separate problem and I have deliberately not solved it here.

**The AAuth allowlist has exactly one agent provider in it, and we run it.** A probe of 1,486 hosts on August 30th found no other AAuth resource document anywhere in the catalog. I am not going to dress that up. Read it as a worked example, not as an interoperating ecosystem.

**`maturity` reads `self-serve` because that is the highest rung the AOD 0.1 enum has.** The enum cannot distinguish a stranger with a browser from a stranger with no human at all, and on APIs.io those are now two genuinely different doors. That is a bug in my own specification, filed against my own roadmap.

**There is no machine-readable way for a consumer to present who it is in place of that browser sign-in.** The `verification[]` block is empty for exactly that reason. I could have declared an attestation format, but declaring one that callers cannot actually produce would be worse than declaring nothing. That is the work described under [KYA](https://apis.io/kya/), and it is unbuilt.

There is a fifth entry in the file that is not a gap so much as a receipt: this descriptor once advertised console-only issuance and an `info@` address for weeks after self-serve sign-in had already shipped. It was wrong, it was wrong in my favor in one direction and against me in the other, and I corrected it on August 31st and left the correction in the file. A descriptor that only ever describes the good version of you is a brochure with a `.json` extension.

## Publish Your Own

I am not going to write your onboarding script anymore — that turn is made and I am sticking to it. But this one is small, and it is the piece nothing else in your stack covers. The spec and the JSON Schema are at [apicommons.org/onboarding](https://apicommons.org/onboarding/). Serve yours at `/.well-known/api-onboarding` and APIs.io will read it — when you [add your API](https://apis.io/add/), the probe already looks for your APIs.json, your onboarding descriptor, your OpenAPI, your `llms.txt` and your MCP endpoint before it asks you to fill anything in by hand.

Mine is at [apis.io/.well-known/api-onboarding](https://apis.io/.well-known/api-onboarding), and the prose version is at [apis.io/onboarding](https://apis.io/onboarding/). Copy it, argue with it, or tell me where it is wrong at [github.com/api-search/apis-io](https://github.com/api-search/apis-io). The whole point of writing the gaps down is that somebody can hold me to them, and I would rather that somebody be you than an agent that quietly gives up on my front door and goes next door.
