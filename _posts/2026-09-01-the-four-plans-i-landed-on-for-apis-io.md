---
published: false
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

You can search the whole catalog and look up anything in it. Find a company, read its profile, see what APIs it has, what it publishes, and how you would get started with it. See its quality score and how ready it is for agents. Browse by industry, region, or topic. There is a playground of real APIs that need no key at all, each with an example call that works, so you can get a feel for calling an API before you commit to one.

Explore covers looking any *one* thing up. One company, one API, one tag, as many times as you like.

## Learn

Free, with a GitHub sign-in.

The same surface, with your own key and four times the room. That is genuinely all it is. Learn exists to turn an anonymous caller into a known one — it is not a second free tier with more in it. Identifying yourself buys you a meter of your own before it buys you volume.

## Understanding

This is where the catalog stops being a lookup and starts being a subject.

You can rank and compare the whole thing rather than one company at a time. You can see what a market looks like — who leads an industry, how a sector's scores have moved over months, what it is collectively bad at. You can search every API in the catalog by *the endpoints it actually exposes*, which is the one thing tags could never tell you. A tag is what a company says about itself. A path is what its API accepts.

You can see which providers are retiring parts of their API before you build on them. You can read what the market is investing in and which companies are behind. You can follow the money through venture portfolios and see how the companies a fund backed actually score. You can design a stack for a project and export it. And you can save a question and ask what is *new* since you last looked, which is the part I use most.

The line is simple: free lets you look up any one thing, Understanding lets you ask questions across all of it.

## Influence

This one is not for people researching the catalog. It is for a company that is *in* it.

If you have a listing on APIs.io, you did not ask for it. We profiled you because your APIs are public, and we published a score. Influence is the plan that lets you do something about that.

You can see exactly which quality checks you fail, what each one is worth, and what to fix first. You can find out which quality tiers are closed to you no matter how many points you collect, which saves people from optimizing toward a number they cannot reach. You can test what a set of fixes would do to your score before spending engineering time on them. You can pipe all of that into your own build so it fails when your API quality slips, rather than finding out in a quarterly review.

You can ask us to build the files you are missing — an APIs.json descriptor, an agent card, an MCP server manifest, a scope catalog. We generate them from what you already publish. And then we send them to you, because *we do not publish anything on your behalf*. Your score moves when you commit the file.

You can claim your listing, correct what we say about you, tell us we got something wrong and show us the evidence, and ask to be shown less or removed entirely.

## Two things I want to be clear about

**Every request on Influence is worked by a person.** Not because we could not automate more of it, but because the honest version of "re-check my listing" is a human re-profiling you and re-running the pipeline against your live surface. A claim means someone confirming that a record you published is really yours. A generated artifact is one we looked at before sending. None of those happen in the time it takes to answer an API call, so the API says so — it returns *received*, not *done*, with a status you can poll and an email if you leave an address. I would rather be slow and honest than fast and wrong.

**Reporting an error is free forever, on any plan.** If we have something wrong about you, telling us costs nothing and always will. There is a tool for it, and there is a public issue queue on your own repo in our GitHub org. What you pay for is the *work* — someone re-profiling you, someone building the artifact — never the right to tell us we are wrong. Charging for that would make the catalog worse, and it would make me the kind of vendor I have spent sixteen years writing about.

## Why this shape

I have watched a lot of API companies price by volume because volume is easy to meter. It also tells your customer nothing about what they are buying, and it makes every tier feel like the same product with a bigger bucket.

Naming the plans for the job means I have to keep being able to answer "what is this for?" for each one. When I moved the check queue up to Influence and then found myself explaining why a company had to pay to tell us we had their data wrong, the name is what made the problem obvious. Reporting stayed free. The work is what costs.

It also means I have to keep the boundary honest as the thing grows. Twice in the last month I moved something to the wrong plan and only noticed because the names stopped making sense — an endpoint for learning to call an API ended up behind a paywall, and market research ended up on the plan meant for managing your own listing. Both got moved back. A tier named for a job argues with you when you get it wrong. A tier named for a volume never does.
