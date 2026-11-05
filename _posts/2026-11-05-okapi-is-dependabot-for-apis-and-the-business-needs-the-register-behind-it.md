---
published: true
layout: post
title: 'Okapi Is Dependabot For APIs, And The Business Needs The Register Behind It'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/okapi-is-dependabot-for-apis-and-the-business-needs-the-register-behind-it.png
date: 2026-11-05
author: Kin Lane
tags:
  - Breaking Changes
  - Consumption
  - Agents
  - Business
  - Industries
  - Capabilities
  - Regulations
  - Kin Score
---
Earlier today I wrote about [the client stack going dark](https://apievangelist.com/2026/11/05/the-client-stack-did-not-collapse-it-went-dark/), prompted by a call with Bruno Perez about what he and Sébastien Conejo have built with [Okapi](https://www.okapi.bot/). At the end of that call I told Bruno that what he has is strong engineering positioning, and that the people who control the budget for agentic and AI work right now are not engineers. I said I would put some thought into what the product looks like when it is presented to them. This is that thinking, done in public, because that is what this blog is for and because Bruno asked for feedback. I am going to describe what Okapi is, point at the one number on its site that tells the business story, and then walk the same breaking change through every dimension we map on APIs.io to show what a budget holder would see.

## What Okapi is right now

Okapi calls itself Dependabot for APIs, and that is accurate. It is a GitHub app. You connect a repository, a static extractor reads the code and finds the third-party API calls it makes, and Okapi checks those calls every day against what the providers themselves publish. When a call is deprecated, about to break, or already broken, it opens a pull request with the fix written and the context attached: which API, what changed, when it takes effect, and which files it touches. It never commits to your branches. If you don't merge, nothing changes. The example on the front page is a Stripe change to how `customer.address` handles null values, with two files updated and one line changed.

Around the app sits a public catalog that is more interesting than the app. Okapi is watching [1,173 providers](https://www.okapi.bot/providers/) sorted into sixteen kinds, and tracking [841 dated breaking changes](https://www.okapi.bot/breaking-changes/) in four types: model retirements, endpoint removals, version retirements, and behaviour changes. Every change has a page, every page has a Markdown copy for agents, each provider has a JSON file, and the whole feed is available as RSS, Atom, JSON Feed, and an ICS calendar. For each provider it records which sources it watches: an OpenAPI, a changelog, a deprecations page, a lifecycle page. There is a page inviting [API providers](https://www.okapi.bot/api-providers/) to register an API, MCP server, or A2A agent and be certified, meaning their changes come from them directly. Automated use goes through a check API you get by email. It is free in early access, and their own [market map](https://www.okapi.bot/blog/ai-agent-api-reliability-stack/) places it at the run end of the agent reliability stack, in change and drift detection.

Everything about this presentation assumes the reader knows what a pull request is. The unit of work is a repository. The unit of change is an endpoint path or a model identifier. The person it reports to is whoever reads PRs. That is the right shape for the first product, and it is exactly the shape that stalls at the budget line, because the people approving agentic spend in most organizations right now have never opened a pull request and never will.

## The number that tells the business story

Of the 841 breaking changes Okapi tracks, 645 are AI model retirements. Endpoint removals are 139, version retirements are 52, and behaviour changes are 5. Three quarters of the feed is some version of the same sentence: the model you built on stops working on a date. Together AI retires DeepSeek R1 tomorrow. Amazon Bedrock retires a Claude 3.5 Sonnet identifier in every region on November 13. Azure AI Foundry retires a Claude 4.5 model on the 15th and another on the 24th. OpenAI retires GPT-5 on December 11. Each one is a line in a feed to an engineer. To the person who approved the AI budget, each one is a re-evaluation, a re-prompt, a regression test, and a quiet failure in every agent routed to that model until someone notices.

That is a line item, not a bug. It is the single clearest thing I would put in front of a business stakeholder, and Okapi's site buries it inside an alphabetical list.

## Why engineering positioning stops at the budget line

I spent a decade selling into enterprises from the provider side, and the lesson that stuck is that nobody cares about any of this until something breaks. API governance, lifecycle, deprecation policy, the whole discipline: it is electricity and plumbing. Nobody cares what voltage the building runs on. They care whether the lights are on and what the bill is. Engineering tools sell to the people who care about the voltage, and that group is getting smaller every year while the number of people consuming APIs, mostly without knowing it, grows.

Business people will not know what Dependabot is. What they know is that they signed off on agents that call APIs they did not choose, written by models that remember those APIs as they were at a training cutoff, and that they have been asked who is accountable when one of those agents does something wrong. Breakages, trust, economics, control over infrastructure they do not understand. Those are the problems they have budget for. The job is to show Okapi's data in the shape of those problems, and that is what the dimensions we map on APIs.io are for.

## One change, eight views

Take the Stripe example from Okapi's own front page: `customer.address` changes how it handles null values, effective October 15, two files touched, pull request opened. Here is the same change through each dimension we organize the catalog by.

![One breaking change, eight views. The Stripe customer.address change as Okapi shows it to an engineer, then as industry, capability, application, workflow, market, regulation, estate and vendor score would show it to the person who signs the budget.](https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/one-change-eight-views.png)

**[Industry](https://apis.io/industries/).** We map 82 verticals, each with provider and API counts. Okapi's sixteen kinds sit cleanly inside them. The head of a business unit does not see a Stripe endpoint. They see that one of the providers in the finance stack changes behaviour this quarter, and that it is not the only one: Okapi's payments feed also holds PayPal deprecating ten of its v1 payments endpoints and Stripe's MCP server requiring an agent key or OAuth from December 1. On APIs.io that is all one vertical, [Payments & Money Movement](https://apis.io/industries/payments/), with its providers scored and ranked, which is the list the business unit actually recognizes.

**[Capability](https://apis.io/capabilities/).** We model 333 business capabilities across 28 industries, with the providers that reach each one. A product owner sees that the capability called collect payments has a dated change touching checkout, and that verify identity is untouched. The capability is the language the business already uses to describe what it does. Nobody in a planning meeting says "the Stripe customers endpoint."

**[Application](https://apis.io/applications/).** Application blueprints list which providers each category of application integrates with: CRM, billing, support, commerce, and so on. An application owner sees that billing carries a dated breakage this quarter and CRM does not. The repository stops being the unit, and the application becomes the unit, which is what the person responsible for the application needs.

**[Workflow](https://apis.io/arazzos/).** We hold 4,636 Arazzo workflows naming the operations a multi-step flow depends on. This is the view that matters most for agents. Quote-to-cash fails at step four on the effective date, and the agent running that flow will not know why. An agent with a perfect map and a stale step does not degrade, it fails confidently. A dated change placed inside the workflow is the first thing an agent's owner should see.

**[Market](https://apis.io/markets/).** We track 253 market cohorts with provisional leaders and integration depth. The AI program office sees the model routing market with 645 retirements tracked this year, which turns three quarters of Okapi's feed into a single budget conversation about what it costs to keep agents on supported models.

**[Regulation](https://apis.io/regulations/).** We join 125 regulations to the countries, industries, and scored cohorts they govern. Third-party risk and compliance see that a behaviour change inside a Strong Customer Authentication flow is a loggable incident, and that DORA expects an ICT third-party dependency register to exist in the first place. In a regulated industry Okapi's output is not a convenience. It is an artifact the regulator can ask for.

**[Estate](https://apis.io/estates/).** Estates roll up subsidiaries, and [portfolios](https://apis.io/vcs/) roll up holdings. A group CIO sees the breakage calendar across every subsidiary. A fund sees it across forty portfolio companies. Okapi today is one GitHub organization at a time, and the people with the largest budgets own many.

**[Vendor score](https://apis.io/rating/).** The Kin Score's operational transparency facet already scores whether a provider publishes lifecycle and deprecation signals. Okapi already records, for each of its 1,173 providers, which of those sources it watches. Put the two together and vendor management sees, at renewal, that this provider gave thirty days notice, publishes a lifecycle page, and scores exemplar, and that one gave three days and scores thin. Nobody has sold that scorecard yet, and it is a procurement input, which is a budget conversation by definition.

Speak to the shapes that matter to business.

## The register

I would stop leading with Dependabot for APIs when the audience is not engineering. What the AI program office, the head of platform, the third-party risk team, and the finance owner of AI spend are being asked to sign off on is agents calling APIs that will move underneath them. What they need is an agentic dependency register: a dated, owned, rolled-up view of every external thing the organization's software and agents reach for, and when each one changes. Okapi has the hard part, the dated events and the fix. The register is three screens on top of it.

- **Exposure.** By business unit, application, and capability. Count of dated changes, days to impact, files and agents touched, and a named owner. The agents column is the one that will get the meeting, because a retired model is a silent failure in every agent routed to it.
- **Calendar.** The next ninety days of breakage, laid out the way a treasury team looks at debt maturities. Okapi already ships the ICS file. It belongs in front of the steering committee, not the developer.
- **Vendor scorecard.** For each provider, notice given, changes per year, whether they publish a lifecycle page, their Kin Score, and the renewal date. This is the screen vendor management and compliance will pay for, and it is the one that makes providers behave better, which is the outcome I care about most.

The packaging follows from the screens. Engineering installs it and the four people above approve it. Pricing is per watched provider per business unit, with an estate tier that rolls up subsidiaries, and the single-repository install stays free. The fix stays free too. The register is what gets sold. The verticals, in order: banking and fintech, where the register is a regulatory artifact; e-commerce, where Shopify, the marketplaces, and the shipping APIs churn constantly and Bruno has already named it as a target; AI-native companies, where model retirement is the whole exposure. After that, a white label for consultancies, managed service providers, and cyber insurers who want to hand the register to a client with their own name on it.

## Where the two catalogs meet

In September I wrote to Bruno that the piece I most wanted to talk about was the data, because an investigation agent needs to know when an API changed and what replaced it, and that is a lot of what we track on APIs.io. That is more concrete now. APIs.io supplies the dimensions and the vendor scores. Okapi supplies the dated events and the fix. Four things are buildable without either side rewriting anything.

1. **A stack sweep.** Someone exports their [APIs.io stack](https://apis.io/stack/) as an apis.yml, Okapi's check API returns every dated change against it. One call, one register.
2. **Watched sources into the Kin Score.** Okapi's per-provider list of lifecycle, changelog, and deprecation pages feeds the operational transparency facet. Both catalogs get better and the vendor scorecard gets a shared number.
3. **Certification alignment.** Okapi's provider certification and the Kin Score say overlapping things. Agreeing on what each claims means a provider is not asked for two different proofs of the same behavior.
4. **A deprecation sweep by industry.** A recurring piece, on either blog: what breaks in banking this quarter, what breaks in commerce, using their events and our cohorts.

## What I would work on first

Three things, offered in the spirit Bruno asked for. The model retirement weighting makes Okapi look like an LLM operations tool to anyone skimming the feed, and the industry regroup fixes that without changing a line of data. The GitHub-only install leaves out GitLab and Azure DevOps, which is where most regulated enterprises keep their code, and a proxy or egress gateway integration would also catch the calls the static extractor cannot see, which are exactly the ones agents write at runtime. And a free product in early access with the data terms routed through an emailed check API will not clear enterprise procurement, which is the buyer this whole post is about. None of that is a criticism of what has been built. It is the list of what stands between a very good engineering tool and the register the business is going to need.

I told Bruno I would test drive it and think about the verticals. This is the thinking. The test drive is next.
