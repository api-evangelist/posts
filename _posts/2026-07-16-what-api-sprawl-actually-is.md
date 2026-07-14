---
published: true
layout: post
title: What API Sprawl Actually Is
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-api-sprawl-actually-is.png
date: 2026-07-16
author: Kin Lane
tags:
  - API Sprawl
  - API Discovery
  - API Governance
  - API Management
  - APIs
---
API sprawl is the uncontrolled, fragmented proliferation of APIs across an organization's IT environment. That is the clean definition, but the reality is messier, and it is the mess I have spent [sixteen years](https://apievangelist.com/) walking into. APIs are the sets of rules and protocols that let software applications talk to each other and exchange data, services, and functionality. They are how modern systems connect, and increasingly they are how enterprises make money. When you have a lot of them, and no coherent way to see, name, and account for them, you have sprawl. This is the first in a series of posts I am publishing across July to work through what sprawl is, where it comes from, why it hurts, and what you can actually do about it.

The numbers make it clear this is not a fringe problem. Gartner's 2024 "Hype Cycle for APIs" found that 82% of organizations use APIs internally and 71% use third-party APIs. Multiple traffic studies put the majority of all dynamic internet traffic on APIs. APIs are no longer a technical detail buried in the plumbing--they are the plumbing, and they are also the storefront, the supply chain, and the loading dock. When something becomes that central to how a business runs, the failure to manage it stops being a technical inconvenience and becomes a business risk.

Here is the part that should get an executive's attention: most organizations do not know how many APIs they have. An Axway survey of technology executives found that 78% of organizations do not know exactly how many APIs they currently operate. A 2025 Imperva report found that, on average, organizations have 10% to 20% more active APIs than they are aware of. Sit with that for a second. One in five of your APIs, on average, is running in production right now and is not on anyone's list. You cannot secure it, you cannot document it, you cannot bill for it, and you cannot retire it, because as far as your organization is concerned it does not exist.

I want to be careful here, because it is easy to turn this into a fear pitch, and the fear pitch usually leads people to the wrong fix. Having a lot of APIs is not the problem. A large, healthy API landscape is a sign of a company that has learned to move fast and reuse its own capabilities. More APIs expand your attack surface, yes, but the attack surface is not really the thing. The thing is the APIs you do not know about. It is the existence of unregistered, undocumented, and unowned APIs that carries the real risk--not the raw count. Ten thousand APIs you can see, name, and account for is a strength. Two hundred you cannot is a liability, and it is the two hundred that will hurt you.

The security data backs this up. SALT's 2025 Global State of API Security survey found that 57% of organizations suffered an API-related data breach in the past two years, and of those, 73% suffered three or more. These are not one-time accidents; they are recurring symptoms of an environment nobody has a full map of. The average cost of a data breach now sits around USD 4.4 million, but I would argue the breach headline undersells the damage. Sprawl bleeds you slowly, every day, in ways that never make the news: redundant APIs that duplicate work already done, developers rebuilding functions that already exist somewhere they could not find, gateway and infrastructure costs for endpoints no one can account for, and the steady erosion of trust from internal and external consumers who cannot get a straight answer about what your APIs do.

Sprawl is usually the byproduct of insufficient [API management](https://apievangelist.com/) and a missing or unenforced [API governance](https://apievangelist.com/) strategy. It shows up most in large organizations with many divisions, exactly the places where APIs matter most and where the cost of getting it wrong is highest. And it tends to be the result of good intentions, not negligence--teams empowered to move quickly, ship independently, and embrace agile development, without anyone holding the map of the whole. That is worth emphasizing, because the instinct when you discover sprawl is to blame a team or clamp down on autonomy. The better instinct is to recognize that sprawl is a systems problem, and systems problems are solved with visibility, standards, and shared infrastructure, not blame.

So this is where I want to start the series: not with a product, not with a scanner, not with a governance framework, but with an honest accounting of what you actually have. Before any of the fixes I will write about over the coming weeks--discovery, inventory, gateways, policy standards, ownership, API-first design, automated gates--matter at all, you have to accept the premise that you probably do not know your own API landscape as well as you think you do. Almost no one does. The organizations that get sprawl under control are the ones that start by admitting the map is incomplete and then do the unglamorous work of completing it.

In the next post I will dig into where sprawl actually comes from, starting with the organizational causes--the way teams are structured, how mergers and acquisitions scramble everything, and what happens when there are no shared standards for people to build against. Sprawl is not an accident of technology alone. It is mostly an accident of how we organize ourselves around the technology, and if you want to fix it, that is where you have to look first.
