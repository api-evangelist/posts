---
published: true
layout: post
title: "MCP for Spectral Governance: Make Your API Rules Conversational"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/making-api-governance-conversational.png
date: 2026-07-01T12:00:00.000Z
tags:
  - Governance
  - Spectral
  - MCP
  - Agents
  - Copilots
  - API Design
  - Linting
---
If you have done the work of API governance, you have a Spectral ruleset. It lints your OpenAPI, it catches the naming drift, it blocks the request body on a `GET`, it flags the operation nobody bothered to describe. You wired it into your IDE so a violation gets underlined as it is typed, and into your CI/CD pipeline so a blocking finding fails the build. That was the right work, and most of the industry still has not done it. If you have, you are ahead.

But I want to point at a gap that has opened up underneath all of that, quietly, in about eighteen months. **Your governance can reach the editor and the pipeline. It cannot reach the conversation.** And the conversation is now where your APIs get designed.

## Where the design actually happens now

Watch how an engineer drafts an API today. They do not open an empty editor and start typing OpenAPI by hand. They open a chat with Claude, or Cursor, or ChatGPT, or Gemini, and they ask for a spec. They iterate on it in natural language—add pagination, change the error shape, rename that field—and then they paste the result into the repo. By the time your IDE extension or your pipeline sees the file, the design decisions are already made. They were made in a window your governance never entered.

For a decade I have been telling people to *shift left*—move the governance check as early in the lifecycle as it will go, because the cost of fixing a design problem rises the further right you catch it. Govern the decision, govern the keystroke, govern the change, govern the merge. Every one of those checks assumes a human is driving and a file already exists. Then the work moved one step further left than the editor—into the conversation—and left our rules behind. Shift-left has one more step to take, and almost nobody has taken it.

And there is a second consumer showing up who is worse at muddling through than any human: the agent. An autonomous agent that generates an API, wires up a client, or stands up an integration and ships it—with no human in the loop at all. If your governance is not reachable as something the agent can *call*, the agent cannot check its own work, and you inherit a wave of machine-generated APIs that no rule ever touched. That is the failure mode I am most worried about over the next couple of years, and it is entirely preventable.

## You already built the hard part

Here is the good news, and it is most of the reason I am writing this: you do not need a new governance system. You already have one. Spectral is the engine; your `.spectral.yaml` is the artifact. Making that governance conversational is not a rewrite—it is a thin projection of the engine you already run onto one more surface.

The mechanism is the [Model Context Protocol](https://modelcontextprotocol.io). Wrap your Spectral engine in a small MCP server—four tools is enough: lint an artifact, list your rulesets, list the formats you support, validate a ruleset—and your governance becomes reachable inside the chat. The copilot can read your rules *before* it drafts, so it writes to your standards instead of tripping them after the fact. It can lint the spec it just produced and walk the findings. It can follow the documentation link on each rule and explain the *why* in plain language, right there in the flow of the work. And the same server an engineer's copilot uses is the server an autonomous agent calls to lint itself before it ships. Same ruleset, same severities, same documentation links—one more surface.

## The one way it goes wrong

There is a version of "AI-assisted governance" that I want you to *avoid*. You can inject your rules into a model so it quietly steers the developer into compliance, and it will work—precisely because the developer is no longer arguing with a person. Compliance goes up. It feels like a win. It is not. You have engineered away the feedback loop that tells you a rule is wrong, resented, or out of date. That argument the developer would have had with a human is the signal that keeps your ruleset alive. Conversational governance done right is the opposite of that: the rules are *exposed*, not hidden—queryable, transparent, cited back to their policy—so the human and the machine both reason about them in the open. Expose your governance as legible structure the way you would to any consumer. Do not weaponize a copilot to trick people into obeying rules they were never allowed to interrogate.

## The full playbook

I have written the whole thing up—the argument, the four tools and how to shape each one, transport and hosting choices, distribution, the two audiences and the different payoff each one gets, the anti-patterns I am watching for, and a self-assessment you can run against your own setup—as a new API Evangelist paper: **[Making API Governance Conversational](https://papers.apievangelist.com/conversational-api-governance/)**. It is the concrete build behind the argument in this post. If your standards already live in a Spectral ruleset, you are most of the way there—this is how you let the machines now writing your APIs reach it.

Get the ruleset right, then let the conversation reach it. That is where your next APIs are being designed.
