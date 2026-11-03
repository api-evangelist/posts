---
published: true
layout: post
title: 'Who Is Accountable For The Agent?'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/who-is-accountable-for-the-agent.png
date: 2026-11-23
author: Kin Lane
tags:
  - Accountability
  - Governance
  - Agents
  - Artificial Intelligence
  - Security
  - Ownership
---
Security still matters, and nothing here argues otherwise. But the question I keep hearing in rooms where people are trying to put AI agents to work isn't whether the agent is secure. It's who is responsible when the agent does something nobody wanted it to do. More and more, that is the question that decides whether an agent ever touches money, customers or production data. Most organizations can't answer it yet.

## Accuracy isn't the gate, ownership is

We spend a lot of energy measuring whether a model is accurate, and whether an agent does what we think it should. Those things matter. But the industries furthest along with agents didn't get there by being braver or more accurate than everyone else. They got there because they already had the habit of naming an owner. If you have ever deployed a model to detect fraud or decide credit, you know the rule: if this doesn't work, this person is responsible. You don't let it near money or customers until that name exists.

That habit is now the springboard. Regulated industries are oddly ahead on agents for exactly this reason. Not because they love risk, but because they already know how to attach a human to it.

## Everyone owns a piece, nobody owns the whole

Here is where it gets hard. Ask around and you'll find people happy to own a piece of an agentic workflow. Very few will own the whole thing.

Take an ordinary sequence. Someone changes their address, then applies for a credit card. That touches whoever issues cards, whoever manages accounts, and whoever watches for fraud, since an address change followed by a credit application is a classic sign of a stolen identity. Each of those teams can own its step, and we got good at that with APIs. Put an agent in the middle, acting on someone's behalf across all three, and you need a person who owns the entire process. That person usually doesn't exist on the org chart.

Deterministic software made this easy to dodge. When it broke, you went back to product and engineering and said fix it. When the thing is probabilistic, and its behavior was never written down by anyone, the product and engineering people are fairly reasonable in saying they won't take the heat for whatever it decides to do.

## New roles are showing up to fill the gap

This is why you're seeing new titles: AI product owner, agent steward, forward-deployed engineer. They're the organization trying to manufacture an owner where there wasn't one. The most practical starting point I've seen is simple: whoever owns the KPI or the ROI that justified going agentic should be the person who understands it and answers for it. If you can't name that person, you probably shouldn't ship it.

Ownership shouldn't turn into blame. The point isn't finding someone to fire. It's making the whole chain of APIs, models, tools and data visible enough that someone can actually stand behind it. Agents turned the simple request-and-response into a supply chain with many more places to fail. Accountability is the thing that holds that supply chain together.

## The cost of nobody saying no

There's a quieter version of this problem, and I think it's the more dangerous one. It isn't the agent nobody owns. It's the organization where nobody is accountable enough to say no.

Everyone has a credit card. A few years ago they used it to buy SaaS, and now they buy AI. A lot of the people buying, or in charge of these projects, don't have the background to judge what they're buying. Knowledge has been outsourced, in-sourced and outsourced again until there is often nobody left inside who knows how things actually work. And you need enough knowledge on the inside to buy good things, or you will get burned.

In that kind of environment, a vibe-coded container pulled from somewhere on the internet ends up holding customer data. Not because anyone decided it was a good idea. Because nobody was accountable enough to pick up the ball and say we're not doing this. Security controls don't help much when nobody owns the decision to apply them. That's the sense in which accountability has risen to sit alongside security, and maybe in front of it. Security tells you what is safe. Accountability is what makes sure someone acts on it.

## What I'd do about it

Very little of this is new, and that's the good news. It's the governance work we've been preaching for APIs for over a decade, with higher stakes:

- **Inventory what you have.** Every model, every agent, every API it calls, and every MCP server it's wired to. You can't own what you can't see, and discovery is still page one of the governance book.
- **Name an owner for the whole process, not just the steps.** Write it down next to the agent, just like you'd put an owner in an API's contract.
- **Watch inputs and outputs, and keep a kill switch.** You can't inspect the weights, but you can track whether what goes in and what comes out stays consistent, and turn the agent off when it drifts.
- **Know where the data came from.** Provenance is half of accountability. If an agent acts on data nobody can trace, nobody can stand behind the result.
- **Make the governed path the easy path.** If governance is hard to follow, people will tell you by going around it. That's how shadow AI and shadow MCP happen. And shadow anything is, by definition, something nobody is accountable for.

I'll keep measuring the security of the APIs agents depend on, because it matters. But when I look at whether an organization is ready to put agents in front of its customers, the first thing I want to know is simpler: who is accountable for the agent? If the answer is a shrug, the rest doesn't matter much yet.
