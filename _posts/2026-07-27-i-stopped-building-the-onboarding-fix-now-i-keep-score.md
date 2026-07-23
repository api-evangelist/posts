---
published: true
layout: post
title: I Stopped Building the Onboarding Fix. Now I Keep Score.
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/i-stopped-building-the-onboarding-fix-now-i-keep-score.png
date: 2026-07-27
author: Kin Lane
tags:
  - Onboarding
  - Kin Score
  - Ratings
  - Agent Readiness
  - Strategy
  - Agents
  - AI
---

For the last couple of months I have been trying to fix API onboarding by building the fix myself. It started when [SoundCloud showed me what programmatic onboarding should look like](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) — one file, no dependencies, a browser pops for OAuth, and you walk away with a `client_id` printed to your terminal. I held that bar up against the providers, gateways, and identity platforms I depend on and wrote a single-file onboarding script for each one, [thirty-six of them](https://apievangelist.com/2026/07/02/what-36-providers-taught-me-about-programmatic-api-onboarding/) before I stopped counting. Then I distilled the shape they all shared into the [API Onboarding Descriptor](https://apicommons.org/onboarding/), wrote a generic engine that runs any provider's descriptor, and put the whole thing — schema, descriptors, extraction dataset — on API Commons. I did the work. I did *their* work. And I want to be honest about what it got me.

It got me thirty-six working scripts and one uncomfortable realization: I was doing the homework for the exact people who had no reason to do it themselves. A tool that onboards you *to* a provider does not create any pressure *on* that provider to be better. If anything it removes the pressure, because I have quietly papered over their bad front door with my good script. I can write the cleanest onboarding flow in the world for a company that ships a console-only, human-in-the-loop, ticket-to-get-a-key mess, and at the end of it the company is exactly as broken as it was — now with a nicer wrapper I maintain for free. That is not fixing onboarding. That is subsidizing bad onboarding and calling it evangelism.

So I am done building the fix. I am going all in on the [Kin Score](https://apis.io/rating/) instead — the API Evangelist rating system, the thing I spent years building to read the whole public API field the same way, from published evidence, with the methodology out in the open. Because the descriptor work was never wasted; I just had the delivery mechanism wrong. The right delivery mechanism for onboarding is not a tool I hand you. It is a number I hang around your neck, in public, next to the number I hang around your closest competitor's neck.

## Onboarding Was Never a Tooling Problem

Here is the thing the thirty-six scripts kept telling me that I did not want to hear: every provider *already knew* their onboarding was rough. None of them lacked the engineering to fix it — Apigee, Stripe, Okta, AWS, these are not companies short on talent. What they lacked was a reason. Onboarding is the part of an API that a human quietly powers through: they find the pricing page, they email support about the rate limit, they click around a console to make an app. Nobody on the provider's side ever *feels* that friction, because their own team has admin access and muscle memory. The pain is entirely externalized onto the developer, and now onto the developer's agent, and an externality nobody feels is an externality nobody fixes.

You do not close an externality with a better tool. You close it by making somebody feel it. And the cleanest way I know to make a provider feel their onboarding is to turn it into a horse race — to score it, band it, and publish where they finish against the field. The Kin Score already does this. Onboarding is not a footnote in the rubric; it is scored across developer ergonomics and commercial clarity — the sandbox, the getting-started, the CLI, the machine-readable plans and pricing and terms — and operational transparency is its own facet on top of that. Then, on a completely separate axis, the agent-readiness score asks the harder version of the same question: can an autonomous agent get from nothing to a working credential without a human papering over the gap? One open door out of thirty-six is not an anecdote anymore. It is a band. A public one.

## Grabbing Providers by the Only Thing They Feel

I am going to be plain about the mechanism, because I think naming it makes it more honest, not less. I am no longer appealing to a provider's sense of craft, or to the abstract good of the ecosystem, or to a spec they should adopt because it is correct. Those appeals do not move roadmaps. What moves a roadmap is a VP seeing their company sitting in the human-only band while the competitor they lose deals to sits three bands up in agent-native, on a page a customer can find, calibrated against the real distribution of nine thousand providers so the placement cannot be waved away as an opinion. That lands somewhere a whitepaper never will. It lands in the gut.

That is the emotion I am after: not shame for its own sake, but the specific, productive dread of watching the field pull ahead of you while agents quietly route around your bad front door to the provider next door who made theirs work. That dread is real, and it is *earned*, because the market is actually moving this way — agents will onboard themselves to whoever lets them, and they will not file a support ticket to do it. I am not manufacturing a threat. I am putting a number on one that already exists and pointing at it every week.

## Do the Work Yourself

So this is the turn, and I want it on the record. I am not going to write your onboarding script anymore. I am not going to maintain a descriptor that hides your console-only front door behind my clean engine. The descriptor and the engine still exist, still open, still on API Commons — but now they are the *evidence layer* under the score, the thing that proves the band is earned, not the favor I do you so you never have to change.

If your onboarding is bad, the Kin Score is going to say so, publicly, next to the providers you compete with, and it is going to keep saying so every time I rebuild the catalog until you fix it. The fix was always going to have to be yours. My job was never to build your good front door. It was to make standing in the wrong band cost you something. You can see exactly how every facet, every check, and both scoring axes work on the [rating page at APIs.io](https://apis.io/rating/) — and then you can go do the work, or you can watch the field, and the agents, leave you behind.
