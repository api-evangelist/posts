---
published: true
layout: post
title: 'I Am Anti-AI and I Run My Business On It'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/i-am-anti-ai-and-i-run-my-business-on-it.png
date: 2026-09-10
author: Kin Lane
tags:
  - AI
  - Kin Score
  - APIs.io
  - Agent Skills
  - Determinism
  - Strategy
---
I sat for a fireside chat this week on the architecture and strategy behind the [Kin Score](https://apis.io) — what it is, how the agent orchestration that produces it works, what the early findings look like, and how any of it becomes a business. We ran out of time before we ran out of thread, which is how these usually go. But the answer I keep turning over afterward is the one I gave near the end, when I was asked whether I use AI to explain my industry to me or just to hand me results.

Here is what I said, more or less verbatim: I am pretty anti-AI. I think AI is a bad idea, honestly. Copyright, labor, environmental — it is a no-go for me. I am totally anti-AI, and I use it every day, and I have an entire business built on it, and I have a five-thousand-dollar-a-month Claude bill. I am a walking contradiction that way.

I said it out loud in a room full of practitioners because I would rather be the contradiction in public than pretend I have resolved it. I have not resolved it. I do not expect to.

## What makes it work is the fifteen years, not the model

The reason I get value out of this — and the reason I do not think most people are getting value out of it — is that I have fifteen years of context to use as guardrails. That is not a figure of speech. It is a corpus with edges I can point at.

API Evangelist is six thousand blog posts now. The vocabulary behind the catalog is sixteen or seventeen thousand words, each one its own YAML file, not a glossary in a markdown document. APIs.json has been accumulating the properties of a healthy API since 2014 — a portal, docs, self-service signup, SDKs, interactive docs, terms of service, a privacy policy, a rate limits page — and the profiling skill that goes through a provider's front door now looks for about a hundred and eighty of them. Behind that first skill are fifty-five or sixty more that take what it found and turn human-readable pages into machine-readable artifacts. Where is your plans and pricing page, and where is that same thing as something a machine can read.

That is the guardrail. The model is not supplying the judgment about what a good API looks like. I supplied that over fifteen years, and the model applies it across twenty-eight thousand providers and a hundred and thirty-five thousand APIs, which is the part I could never do by hand. I did it by hand for years. That is exactly why I know what it costs.

So when I am asked whether I let the AI do it now — no. That is the only way I would use this. I tell it what to do on a daily basis. I do not automate and let Claude run the show.

## The mirror talks back

There is a genuinely funny consequence of feeding a model your own corpus, which is that it develops your attitude.

Claude has read the six thousand posts, the FAQs, the guidance, and all the opinions. It has picked up the opinions. It will tell me an API sucks. It will note that a provider says it is built for agents and it plainly is not. It will observe that somebody has an MCP server and agent skills but no governance underneath and does not even publish their API docs. And then it started proposing rubric changes on its own — I have seen this pattern five times now, we should take away points.

I have had to tell it to tone it down a little. It is a funny mirror to be handed. It is also a real warning: a system trained on my opinions will confidently reproduce my blind spots at scale, and it will sound like me while doing it. The critique lands harder when it comes back in your own voice, which is not the same thing as the critique being right.

## Everything leans toward determinism

The other half of the answer is the part nobody asks about, and it is where the actual engineering is.

Everything I build leans toward determinism. I have Claude write scripts to do things wherever a script can do the thing, and the skills call those scripts. Non-determinism gets reserved for what genuinely needs it — scraping a docs page or a terms of service, where a React-framework portal has buried the content and there is no clean parse. And every output is a machine-readable artifact, a YAML or a JSON, dumped into GitHub where it can be validated.

That posture has two payoffs and I only advertised one of them at the time. It lowers the bill, and the bill is the constraint that shapes everything — I run five to ten thousand a month and I could easily spend ten times that. Profiling is budget-bounded: a first light pass, then a decision about how deep to go and which skills to apply based on what I can afford. Aging is its own problem, because my skills have gotten better and the earliest profiles now need redoing.

The second payoff is the one that matters more. An artifact in git can be checked. When the score moves, there is a file that moved with it, and you can read the file. A non-deterministic pipeline that produces a number is an oracle. A deterministic pipeline that produces an artifact is an argument you can have with me.

## Where I stop

Claude reads a portal only as well as the portal is written, and a lot of docs are not good. So the profiles are not all correct. I have made my peace with that, and the reason is a boundary I set deliberately: I produce discovery-grade artifacts. I am not putting myself between you and a provider, and I am not becoming the next integration middleman. I want you to find an API, and then I want to rate it and govern it. I do not want to run your integration. A consumer should have a relationship with a provider, end of story.

The honest version of the pitch is that I built the Kin Score to shame API providers into building something better. That is what the points were for the first time around too, when I stood up API governance at a large financial data company in New York and needed teams who did not care about quality to care about it. Look, that team has more points than you. It works better than a policy document.

## The framing I want

Where I landed with my host at the end was that I am trying to push us toward the boring stage, where AI is one more technology in the toolkit. AI has been around for seventy years. This particular wave of modeling will shrink back down and go into the ML toolbox, the same way everything else did.

That is exactly how I talk about APIs. REST is not going away, and we have GraphQL, and event-driven, and gRPC, and you should have them all, because none of them is going to win. A diverse toolbox is the policy. It works for protocols and it will work for models.

None of which resolves the contradiction. The copyright problem is still a problem, the labor problem is still a problem, and the environmental cost is still real and still mine. I am not going to argue myself out of that with a good architecture. What I can do is be specific in public about what I actually run, what it actually costs, and where I actually stopped — and let you decide what that is worth.

Go look yourself up at [APIs.io](https://apis.io). If what I have about you is wrong, tell me, and I will rescore you. Corrections are free, and a machine got some of this wrong on my behalf.
