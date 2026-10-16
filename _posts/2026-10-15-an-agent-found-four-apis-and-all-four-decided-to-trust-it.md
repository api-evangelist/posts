---
published: true
layout: post
title: 'An Agent Found Four APIs And All Four Decided To Trust It'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/an-agent-found-four-apis-and-all-four-decided-to-trust-it.png
date: 2026-10-15
author: Kin Lane
tags:
  - Agents
  - Trust
  - KYA
  - Onboarding
  - APIs.io
---
I built four small sites this fall so I would have something real to point agents at. [Yawplet](https://yawplet.com) takes short messages. [Yarnhen](https://yarnhen.com) takes stories. [Hagglebee](https://hagglebee.com) takes classified ads. [Eventwren](https://eventwren.com) takes events. Each one is an API first and a website second, and every post is moderated before it goes up. I didn't build them to compete with anybody. I built them because I needed four providers I control end to end, so I could find out what happens when an agent tries to use them without me in the room.

On October 15 I found out. I ran our own agent, API Evangelist, as a consumer against all four. It searched APIs.io, read each site's onboarding descriptor, asked APIs.io to vouch for it, and handed that to each site. Each site decided on its own whether to trust it. All four said yes. Each site took between five and seven seconds from first search to trust decision, and 35 of the 36 steps passed.

## What actually happened

![The flow: the API Evangelist agent searches APIs.io, reads Yawplet's agent card and onboarding descriptor, gets a KYA attestation from APIs.io, presents it signed to Yawplet, which verifies it and decides to trust the agent; a dry-run post would cost two cents, and only the account owner's first card and top-up need a person.](https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/an-agent-found-four-apis-and-all-four-decided-to-trust-it-flow.png)

*Walk through every step of this diagram, with what was actually sent and returned: [How an agent discovers, proves itself and onboards](/agent-onboarding/).*

The agent starts out knowing a need, not a brand. It searched APIs.io for "post short messages" and Yawplet came back as the top provider. Then it fetched two files from the site: the A2A agent card, which lists 19 things the agent can ask for, and the API Onboarding Descriptor at `/.well-known/api-onboarding`, which says how to get in, what the site checks about an agent, and what still needs a person.

Next it asked APIs.io two things. First, whether it meets what this provider asks for. Yes. Then for an attestation addressed to yawplet.com. APIs.io knows API Evangelist controls apievangelist.com, because every request the agent sends is signed with a key published on that domain (Web Bot Auth). So the attestation it returns says, in effect: this is the agent that holds that key, it is anchored to that domain, and this is good for the next ten minutes, for this one site.

The agent sent that attestation to Yawplet on a request signed with the same key. Yawplet checked APIs.io's signature, checked that the attestation was addressed to Yawplet and still fresh, fetched the agent's public key from apievangelist.com, and checked that the request really came from the key the attestation is bound to. Then it applied its own rule, which is simple for now: anchored to a domain with a verified binding means trusted. It recorded the decision and its reasons on the account.

Then the agent did a dry run of a post. Would it go through, and what would it cost? Yes, two cents.

## Why it is built this way

APIs.io doesn't tell a site whom to trust. That matters more to me than anything else here. We're a directory, and a directory that hands out trust becomes a gatekeeper nobody asked for. What APIs.io does is vouch for facts it can check, such as domain control and the signing key, and leave the decision to the provider, who applies its own weights. A provider that wants more can ask for more. A provider that wants less can ignore the whole thing. On these four sites the KYA check is optional, and the descriptor says so.

Binding the attestation to a key is what keeps this from being a reputation you can steal. A copied attestation is useless without the private key that signs the request around it. It is addressed to one site and lasts ten minutes, and each one is accepted once.

## What trust buys

Very little, on purpose. A trusted agent gets 500 free searches a day instead of 100. It doesn't get lower prices, it doesn't skip moderation, and it can't post without an owner who has verified an email and put a card on file. I want to see trust do a small, honest thing first, before I let it touch money or moderation.

## What did not work, and what I fixed the same day

The run turned up seven problems, and I filed each one as a roadmap issue before writing this. Several were fixed by the end of the day.

- **Discovery by need.** Searching "publish short stories" doesn't return Yarnhen, and none of the four sites' APIs reached the top five API results for any need. Two causes: the API descriptions in our own catalog were boilerplate ("The Posts API from Yarnhen — 4 operations"), and the word "short" was prefix-matching "shortcut". The descriptions now say what each API does. The search fix is being measured against real queries before it ships.
- **The attestation only worked over plain REST.** An agent connected over MCP or A2A couldn't present it, because the key binding needs the agent to sign the HTTP request itself. Now the sites verify the binding against the signed MCP or A2A request, and all four trust API Evangelist over all three.
- **Trust only flowed one way.** The sites decided to trust the agent but never told APIs.io how it behaved. They now report back, signed as their own domain: a strike when a post is penalized for abuse, and a good-standing report at most once a month otherwise.
- **Our own record was thin.** API Evangelist had disclosed 3 of 11 things a provider might want to know about its operator. It's 9 of 11 now. The two I left empty, signed releases and attestation evidence, aren't true yet, so they stay empty.
- **The registry mixed up roles.** Any agent can call APIs, front one, or both. The APIs.io agent registry now says which, and here API Evangelist is the consumer and the four sites are providers.

Two are still open. A person still has to fund the account, and I haven't yet timed how long that takes with a real card. I've built a way for an agent with a wallet to top up its own balance over x402, and it stays switched off until I decide where that money should land. That's the next post.

If you run an agent or an API and want to try this flow, the pieces are public. The KYA page on APIs.io explains the attestation, and each of the four sites publishes the descriptor that says exactly what it checks. I'd rather you copy this than take my word for it.
