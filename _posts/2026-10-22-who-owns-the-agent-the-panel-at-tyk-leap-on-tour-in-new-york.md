---
published: true
layout: post
title: 'Who Owns The Agent: The Panel At Tyk LEAP ON TOUR In New York'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/who-owns-the-agent-the-panel-at-tyk-leap-on-tour-in-new-york.png
date: 2026-10-22
author: Kin Lane
tags:
  - MCP
  - Governance
  - Agents
  - Banking
  - Speaking
---
After [my keynote](/2026/10/22/discovery-is-the-first-governance-control-my-keynote-at-tyk-leap-on-tour-in-new-york/) at [Tyk](https://apis.io/providers/tyk/)'s [LEAP ON TOUR](https://tyk.io/events/leap-on-tour-future-of-mcp-governance/) in New York yesterday, Buddha put me on a panel with Kelly Rogers, who spent five years building AI infrastructure and running AI enablement for about 17,000 engineers at Capital One and now runs a governance consultancy for regulated industries, and Irene Aldridge, a quant and systems architect who teaches at Cornell, runs a data business and has just launched a startup around statistical monitoring of model outputs. The camera battery died at thirty-seven minutes, mid-sentence, so the video below ends the way my GoPro did. What was captured is the most useful conversation I have had about agent governance in a while, because none of it was about [MCP](https://standards.apievangelist.com/store/model-context-protocol/).

<iframe width="100%" height="420" src="https://www.youtube.com/embed/RZIorgy4JAk" title="AI Agents and APIs — Panel with Kin Lane, Kelly Rogers and Irene Aldridge at Tyk LEAP ON TOUR New York" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What production means

Buddha opened by pointing at my traffic numbers and asking where agents actually are in production, as opposed to pilots. I pushed back on the word. Production is the gold star we all want, the well-honed assembly line we finally got dialed in for software, and agents are not on it. They are everywhere else. While we were talking, Claude was running on my laptop at the back of the room, orchestrating two more machines at home, publishing API profiles to [APIs.io](https://apis.io) in batches overnight. I suppose that is production. It is production because I know what it is doing, because I put guardrails around it. The companies I work with are mostly finding success locally, in personal tasks, in the CI/CD pipeline, in the Google workspace, inside the construct their organization has given them. What counts as production is relative to the group, and a little more control and a little more automation is a healthy enough bar to learn from.

Kelly's definition was sharper and I have been repeating it since. An agent is ready for production when someone who did not build it can tell you what it does, who authorized it, and how to shut it off. If someone else can tell you that, you are good.

## Why banks lead

My industry table shows banking and payments ahead of the AI companies on agent readiness, and Buddha asked Kelly to explain it, given how risk-averse the sector is. Her answer was that banks are not braver than anyone else. The muscles already existed. Back in 2021 they were deploying models for fraud detection and credit worthiness under regulation, and the thing that mattered was never only that the model was accurate. It was that someone was named. If this does not work, this person is responsible. That ownership muscle is the springboard, and it is why nothing touches money or customers until it is in place. It does not diminish what happens in staging or on a laptop. It just sets the standard for the thing that moves money.

That is the same finding my catalog produces from the other direction. The banks that conform to [PSD2](https://standards.apievangelist.com/store/psd2/) and the [Open Banking](https://standards.apievangelist.com/store/open-banking-standard/) standards are more than twice as likely to be agent-native as banking at large, because the standards forced the contracts, the consent flows and the error catalogs a decade before anyone said agent. Regulation built the muscle. The agents inherited it.

## Who takes responsibility

Laura Heritage from Tyk asked the question the whole morning turned on. How do you get a person to say yes to owning an agent, when the pitch is "I configured it for you, trust me, and if it goes wrong it is your fault"? Kelly said people in a bank will happily own pieces of a workflow and almost nobody will own the whole process. Her example was the one everyone recognizes: change your address, then apply for a credit card, and three groups light up at once, the people who issue cards, the people who manage your account, and fraud, because that sequence is a strong signal of a stolen identity. An agent moving that workflow needs a person who owns the entire thing, and the people who stepped up were the ones who had committed to the organization launching an agent in the first place.

Someone in the room pressed harder. Deterministic software goes wrong and you go back to product and engineering. A probabilistic system goes wrong and the engineer says, not mine, I have no idea what it is going to do. Kelly's answer was that this is exactly why the new roles are appearing, the AI product owner, the forward-deployed engineer, the agent steward, and that in practice ownership starts with whoever owns the KPI or the ROI that justified going agentic. Buddha added the part I want to keep: ownership has to mean transparency rather than blame, because there are more pieces in the chain than request and response ever had, and more places for it to break.

## Fighting probabilistic models with statistics

Irene's position is that an agent has a random number generator inside it, which is what gives you the out-of-the-box thinking and also the crazy ideas. You do not fight that with rules. You fight it with statistics. Track the distribution of a model's outputs against its inputs, set the deviation you are willing to tolerate, flag the prompts that went out of range, and automate the kill switch so it fires at three in the morning without waiting for a human. Wrap agents with risk agents. Claude already runs an actor with four critics, she said, and the more critics, the more acceptable the output.

Her example of how chained agents bypass every individual safety check is the one I will remember. Ask one model for an innocuous image of people building a machine in a street. Pass it to a second model, with no context, and ask it to put the people in specific ethnic clothing. Pass that to a third and ask it to add an explosion. Each model checked its own request and passed it. Together they produced something none of them would have made. That is just an image. The same pattern works for fraud. Her conclusion is that you govern each off-the-shelf agent individually against its worst case, and you put a monitor over the chain.

Someone asked who governs the monitor. Irene called it an open research problem, and said that for now statistics suit statistical models, and that the reason contracts still live on blockchains is that nobody has made an agent produce deterministic output from one.

## Contracts are the deterministic part

Buddha asked whether [Arazzo](https://standards.apievangelist.com/store/arazzo/) and [OpenAPI](https://standards.apievangelist.com/store/openapi/), workflows over contracts, give enough control. My answer was that it is never enough in a probabilistic world, but that the contracts are the part you can actually hold. OpenAPI for the surface, [AsyncAPI](https://standards.apievangelist.com/store/asyncapi/) for the events, [JSON Schema](https://standards.apievangelist.com/store/json-schema/) to validate what goes in and what comes out, [JSON-LD](https://standards.apievangelist.com/store/json-ld/) for the semantics, an Arazzo workflow that says make this call, then this one, then this one. I harvest all of those on [APIs.io](https://apis.io) and you can bundle them differently for different industries, [FHIR](https://standards.apievangelist.com/store/fhir/) for healthcare, the [open banking profiles](https://standards.apievangelist.com/store/uk-open-banking-standard/) for finance, and hand the bundle to an agent as its context. What DeepSeek open-sourced the week before, infrastructure that lets you put a JSON Schema on the inputs and outputs of any model, levels that field. The move is to make the model one small, precise, constrained piece of a process, a decision model with contracts on both sides and a named person or role controlling it, rather than a general intelligence you hope behaves.

## Regulation, sovereignty, and three things

A question from the floor about US states passing their own AI laws got three different answers. Kelly: in finance and healthcare, keeping up with regulation was always the job, so build the framework once, get ahead of things like [ISO 42001](https://standards.apievangelist.com/store/iso-42001/) even when nobody requires them yet, and above all make the governed path the easiest path. If following the framework is harder than going around it, people go around it, and that is where shadow MCP comes from. Governance that is hard to follow is how you get ungoverned agents.

Mine was about sovereignty. I had just come back from Stockholm, after London, Amsterdam and Munich, and every conversation in the EU member states is about running the models and the software in their own country. They are afraid of dependence on US frontier models and of what the US government might do with them. The Lovable team told me their biggest challenge is that they do not know what Trump will do with AI models, so they are centering on DeepSeek. Open-source models, open weights and open infrastructure, with contracts around them, are how you survive a landscape that volatile, and which country you operate in is going to matter more, not less.

Irene's was the finance regulator's view. The Fed's model risk guidance says understand your models, which was written for a world where a validation team spent three months on each one. Now a model is obsolete in three months. So, three things: an inventory of every model you have, validation that inputs and outputs stay consistent, and kill switches for when they do not. Everything else is catching up.

## Trust outside finance

The last question before the battery went was from someone working on ocean data who wanted to know how to build trust in raw data and model outputs in an industry that has no validation regime built in. Irene's answer was to stop trying to understand the weights. A model has a billion of them, they can move by a thousand percent between periods, and they do not represent anything a human can audit. Approximate the function from inputs to outputs instead, track whether that mapping holds over time, and kill the model when it drifts. The questioner's follow-up was the governance point: doing that is one thing, being open that you do it is another, because the people depending on your model need to know.

That is where I was when the camera died. My rating system tracks inputs and outputs for APIs the same way, not just for models: which SMS service you send through, which email provider, where the data came from, declared and measured. A trust framework is the measurement plus the declaration, and the piece I am building now is letting providers measure their own and feed it back to me. The recording cuts off as I was explaining what Claude was crunching on the laptop at the back of the room. It was doing several markets at once. That, apparently, is production.

The [keynote](/2026/10/22/discovery-is-the-first-governance-control-my-keynote-at-tyk-leap-on-tour-in-new-york/) and [Buddha's opening](https://youtu.be/OGb9oPPRx7o) are also up, and the deck with every figure is at [talks.apievangelist.com](https://talks.apievangelist.com/2026-tyk-leap-on-tour-nyc-mcp-governance/2026-tyk-leap-on-tour-nyc-mcp-governance.html).
