---
published: true
layout: post
title: 'Poppy Arrived Through The Platforms'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/poppy-arrived-through-the-platforms.png
date: 2026-11-25 18:00:00 +0000
author: Kin Lane
tags:
  - Agents
  - Standards
  - Discovery
  - OAuth
  - Shopify
---
The [Personal Agent Protocol](https://standards.apievangelist.com/store/personal-agent-protocol/), "Poppy" for short, is seven weeks old. Sierra and Meta [announced it on October 6](https://sierra.ai/blog/introducing-personal-agent-protocol), it went through four drafts in a month, and version 1.0 was published on November 14. This week I added it to the well-known census on [APIs.io](https://apis.io/standards/measurements/), and the first count came back at 742 provider websites serving a valid `/.well-known/poppy.json`.

That number is too high for a seven-week-old spec to have earned site by site, so I went and looked at all 742 documents. It wasn't earned site by site. Poppy arrived through the platforms.

## What Poppy asks a company to publish

Poppy is about a personal agent, working for one person, dealing with a company on that person's behalf. Today a company has two choices with an agent like that: block it, or let it sign in as the person and do anything the person can. Poppy offers a middle path. The company publishes a document at `/.well-known/poppy.json` that names who it is, which channels an agent can use (the website, its APIs as OpenAPI or MCP, or the company's own agent) and how an agent gets authorized, using OAuth with scopes the person picks.

The census counts a document only if it has the fields the spec requires: a `protocol_version`, an `organization` with a `domain`, and at least one of `agent`, `apis` or `web`.

## Where the 742 came from

I fetched every one of the 742 documents again and grouped them by what they contain:

- **417 are Shopify stores.** They all declare `protocol_version` 0.4, point the agent at the store's [UCP](https://standards.apievangelist.com/store/universal-commerce-protocol/) endpoint, and list `dev.ucp.shopping.checkout` scopes so an agent can prepare a checkout for a signed-in customer. Shopify is one of the companies building Poppy with Sierra and Meta, and it shows.
- **219 are Wix sites.** They declare version 1.0 and list one API, an MCP server at the site's `/_api/mcp` path, for site search, business details, bookings and starting a purchase. Each also points to a 0.4 version of the document for agents that haven't caught up.
- **92 publish their own.** These are spread across versions 0.1 to 1.0, and they are the interesting ones.
- **14 didn't answer** when I checked again.

So 636 of the 742, about six in seven, are two hosting platforms turning Poppy on for their customers. Most of those merchants probably don't know they publish it.

## The ones that did it themselves

The 92 hand-built documents show what companies do when they choose Poppy deliberately, and they don't all do the same thing:

- **AT&T** lists a single MCP server for home internet plans, wireless devices, cart management and store locations.
- **Mercury** declares scopes that read like a banking permission screen. There is one to see accounts and transactions, and one to request payments that "follows your organization's approval policy before it's sent."
- **Clerk** offers a browser-session endpoint, so an agent can get a signed-in browser session under the person's account.
- **Etsy** publishes a document that mostly points to a list of tasks agents are excluded from.
- **Telnyx** and **GoFundMe** publish one with `auth` marked `disabled`. They name their OAuth issuer but switch agent sign-in off for now.

That last pattern is worth noticing. Publishing Poppy doesn't mean letting agents in. It can be a way of saying, in a format an agent can read, exactly how far in they can come.

## What I take from it

Three things.

First, the platforms are the adoption curve. Six in seven Poppy documents came from Shopify and Wix flipping a switch. The same thing happened with UCP, where 473 of the 577 sites the census found serving it are on one of those two platforms. If you want to know whether an agent standard will spread, ask which hosting platforms are building it, not which individual companies have announced support.

Second, platform adoption locks in a version. The Shopify stores are on 0.4, a draft from November 10. The Wix sites are on 1.0 but still offer 0.4 alongside it. Poppy 1.0 promises that later minor versions won't break older agents, but nothing published before 1.0 carried that promise. Agents will have to read 0.4 for as long as 417 stores serve it.

Third, Poppy sits on discovery that already works. 552 of the 742 also serve OAuth [Protected Resource Metadata](https://standards.apievangelist.com/store/protected-resource-metadata/), which this same census found on 2,553 provider sites. That's the pattern from the [spectrum of agent onboarding standards](https://apievangelist.com/2026/11/20/the-spectrum-of-agent-onboarding-standards/). The new agent standards are built on OAuth plumbing that is already in place, and the providers who published that plumbing are the easiest ones to bring along.

The census runs every week, and the providers serving Poppy, Protected Resource Metadata and auth.md are listed together on a new [Agent Auth](https://apis.io/agent-auth/) page on APIs.io. I'll keep watching how many of the 92 grow from here. That number says more about Poppy than the 636.
