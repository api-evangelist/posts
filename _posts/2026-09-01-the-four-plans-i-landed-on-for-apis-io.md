---
published: true
layout: post
title: 'The Four Plans I Landed On For APIs.io'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-four-plans-i-landed-on-for-apis-io.png
date: 2026-09-01
author: Kin Lane
tags:
  - APIs.io
  - Plans
  - Pricing
  - Discovery
  - Business of APIs
  - API Catalog
  - Agents
---
I have been going back and forth for months on how to charge for [APIs.io](https://apis.io). Not the number — the shape. What is the thing someone is actually buying when they pay for access to a catalog of 27,500 API providers? I kept writing tiers that were really just volume, and volume is a boring answer to that question.

What I landed on is four plans named for what you are doing, not for how much of it you are doing. They go in order, and each one is a different job.

## Explore

Free. No signup.

Explore covers looking any *one* thing up. One company, one API, one tag, as many times as you like.

**Find things**

- Search everything at once — APIs, companies, tags and published files in one query
- Filter 27,500 companies by industry, region, topic, quality band, or by what they publish
- Look up any single API, or every API one company offers
- Find companies similar to one you already like, and APIs similar to one you are using

**Read any one company in full**

- Its profile, its APIs, and everything it publishes
- A getting-started view: how you would actually begin with it
- Every endpoint it exposes, and every MCP tool it ships
- Every data schema it publishes
- Its quality score, its agent-readiness score, and the evidence behind both — what we checked, and how we know

**Browse the shelves**

- Eighteen collections of published files across the whole catalog: API descriptions, event channels, GraphQL schemas, Postman collections, MCP servers, agent skills, governance rulesets, pricing plans, rate limits, code examples, data schemas and more
- Industries, regions, topics and tag groups, each with its ranked members
- A playground of real APIs that need no key at all, each with an example call that works, so you can get a feel for calling an API before you commit to one

## Learn

Free, with a GitHub sign-in.

The same surface, with your own key and four times the room. That is genuinely all it is. Learn exists to turn an anonymous caller into a known one — it is not a second free tier with more in it. Identifying yourself buys you a meter of your own before it buys you volume.

## Understanding

This is where the catalog stops being a lookup and starts being a subject. Free lets you look up any one thing. Understanding lets you ask questions across all of it.

**Judge quality across everyone**

- Rank the whole catalog, and see who is rising and falling
- Read any company's score broken into the six parts it is made of
- Follow one company's score over time, and ask what moved since any date
- Read the scoring rubric itself, so you can interpret or argue with any number
- See the best providers in any industry, region, or topic area

**Understand a market, not a company**

- Every scored population in the catalog — by topic, industry, region, area, or venture portfolio
- A market's distribution: how good is banking, really, and how spread out
- Its leaderboard, its facet-level scores, and what its members actually publish
- How a whole market's scores have moved over months
- What that market most commonly gets wrong, ranked by what fixing it would move
- Two markets side by side on one rubric

**Find out what the APIs actually do**

- Search every API in the catalog by the endpoints it exposes — "who has a `POST /refunds`". This is the one thing tags could never tell you. A tag is what a company says about itself. A path is what its API accepts
- The business-capability model: what these APIs let a business *do*
- The evidence behind any capability claim, quoted from the company's own contract
- What one vendor is for, read from its contracts rather than its marketing
- Which companies are retiring parts of their API, before you build on them

**Read demand and money**

- What the market is investing in, by technology and by industry
- Any profiled company's readiness, its weakest areas, and which vendors are already in its stack
- Venture firms, their portfolios, and how the companies they backed actually score
- Which firms back any given company

**Assess before you integrate**

- OAuth scopes and authentication schemes, compared across the catalog
- Resolve any domain, URL or GitHub org to the company behind it
- Pull a full profile in one call instead of chaining four

**Decide, and keep track**

- Design an API stack for a set of capabilities, and export it as a working APIs.json
- Save a search and re-run it against the live catalog
- Ask what is *new* since you last looked, which is the part I use most
- Keep named shortlists whose scores stay current
- See what changed across the whole catalog since any date

## Influence

This one is not for people researching the catalog. It is for a company that is *in* it.

If you have a listing on APIs.io, you did not ask for it. We profiled you because your APIs are public, and we published a score. Influence is the plan that lets you do something about that.

**Know exactly what to fix**

- Every quality check you fail, what each one is worth, and the order to fix them in
- Which quality tiers are closed to you no matter how many points you collect, which saves people from optimizing toward a number they cannot reach
- What a specific set of fixes would do to your score, before you spend engineering time on them
- The same list as SARIF or JUnit, so your own build fails when your API quality slips, rather than you finding out in a quarterly review

**Ask us to build what you are missing**

- An APIs.json descriptor, an agent card, an MCP server manifest, an Arazzo workflow, a governance ruleset scoped to your own failing checks, an OAuth scope catalog, a security summary
- Built from what you already publish — and sent to you, because *we do not publish anything on your behalf*. Your score moves when you commit the file

**Change your listing**

- Claim it, proving it is yours with a DNS record or a file on your own site
- Correct your name, description, website, industries or tags
- Point us at an artifact you publish, instead of waiting for us to find it
- Dispute a finding, and show us the evidence
- Ask to be shown less, or removed entirely
- Ask for a re-check — of your listing, or of a whole industry, tag or area that has gone wrong

**Keep watch**

- Be told when your score or band moves, or when a request of yours closes
- Track every request you have filed

## Two things I want to be clear about

**Every request on Influence is worked by a person.** Not because we could not automate more of it, but because the honest version of "re-check my listing" is a human re-profiling you and re-running the pipeline against your live surface. A claim means someone confirming that a record you published is really yours. A generated artifact is one we looked at before sending. None of those happen in the time it takes to answer an API call, so the API says so — it returns *received*, not *done*, with a status you can poll and an email if you leave an address. I would rather be slow and honest than fast and wrong.

**Reporting an error is free forever, on any plan.** If we have something wrong about you, telling us costs nothing and always will. There is a tool for it, and there is a public issue queue on your own repo in our GitHub org. What you pay for is the *work* — someone re-profiling you, someone building the artifact — never the right to tell us we are wrong. Charging for that would make the catalog worse, and it would make me the kind of vendor I have spent sixteen years writing about.

## Why this shape

I have watched a lot of API companies price by volume because volume is easy to meter. It also tells your customer nothing about what they are buying, and it makes every tier feel like the same product with a bigger bucket.

Naming the plans for the job means I have to keep being able to answer "what is this for?" for each one. When I moved the check queue up to Influence and then found myself explaining why a company had to pay to tell us we had their data wrong, the name is what made the problem obvious. Reporting stayed free. The work is what costs.

It also means I have to keep the boundary honest as the thing grows. Twice in the last month I moved something to the wrong plan and only noticed because the names stopped making sense — an endpoint for learning to call an API ended up behind a paywall, and market research ended up on the plan meant for managing your own listing. Both got moved back. A tier named for a job argues with you when you get it wrong. A tier named for a volume never does.

*Explore and Learn are live now. Understanding and Influence are built and rolling out over the next few days — the plan boundary is already enforced, and the last pieces of the Influence surface land with the next deploy.*
