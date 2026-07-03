---
published: true
layout: post
title: Start by Mapping Your API Landscape
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/start-by-mapping-your-api-landscape.png
date: 2026-06-24
author: Kin Lane
tags:
  - API Governance
  - OpenAPI
  - API Discovery
  - APIs
---
When I walked into the most serious governance job I've ever held, the first thing I did was not write a single rule. I went and reviewed every published OpenAPI across the entire portfolio. Before you can govern anything, you have to see what you actually have, and almost nobody does this first. They show up with a style guide they got from a conference talk or a vendor, declare it the standard, and then discover that eighty percent of the existing APIs violate it on day one. Now the governance function is the person who walks in and tells everyone they're wrong. That is a terrible place to start, and it is entirely self-inflicted.

Landscape mapping is the unglamorous first fundamental of API governance, and it is the one that earns you the right to do everything else. You cannot write rules for patterns you have never looked at. So you go survey the patterns. Every spec, every protocol, every gateway, every place a contract lives. You count things — how many APIs, how many operations, how many calls a day. You look at the actual conventions in use. How is casing handled across the portfolio? How many different ways do these APIs paginate? How many auth patterns are in play? What do the error shapes look like? You write all of it down, and what you end up with is a map of reality.

That map changes the entire character of your governance, because it lets you derive your rules from evidence instead of opinion. There is a world of difference between walking up to a team and saying "our style guide says you should paginate this way," and walking up and saying "nine of your eleven sibling APIs already paginate this way, and yours is the odd one out." The first is a preference you are imposing. The second is a fact you are reporting. Teams argue with preferences all day long. They have a much harder time arguing with the dominant pattern already present in their own house. When you govern from the evidence in your own portfolio, you stop being the outsider with opinions and start being the person who can see the whole board.

This is also where you start to confront the moving-target problem that quietly kills most governance work. As you map the landscape, you will find APIs whose canonical spec you can't locate, whose current version nobody can confirm, and whose stakeholders have all moved on to other teams. Those are not edge cases, that is the actual condition of most enterprise API estates, and every one of them is a contract you cannot reliably govern until you pin it down. The map surfaces all of it. It tells you not just what your conventions are, but where governance is going to be impossible until somebody does the unglamorous work of establishing ownership and a source of truth.

I know mapping the landscape feels like overhead when leadership wants to see rules and dashboards. Resist that pressure. The teams that skip the survey end up writing aspirational rulesets against a portfolio they've never actually looked at, and those rulesets either get ignored or get routed around. The teams that map first write rules that fit, that hold up in a review because they're backed by evidence, and that teams can actually adopt. Survey before you govern. It is the cheapest, highest-leverage thing you will do in the entire program, and it is the foundation everything else in [this series](https://apievangelist.com/2026/06/23/the-fundamentals-of-api-governance/) sits on.
