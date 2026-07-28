---
published: true
layout: post
title: Strip Out the University and This Is a Template
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/strip-out-the-university-and-this-is-a-template.png
date: 2026-08-03
author: Kin Lane
tags:
  - Artificial Intelligence
  - Enterprise Architecture
  - API Gateway
  - Multi-Model
  - FinOps
  - API Strategy
  - Build vs Buy
---
I ended my [profile of UC Irvine's ZotGPT](https://apievangelist.com/2026/07/28/zotgpt-what-it-looks-like-when-a-university-owns-its-ai-infrastructure/) with a line I have not stopped thinking about since I wrote it: *strip out the university and this is a template.* I want to spend a whole post on that sentence, because I buried the most useful part of the story under a lot of admiring detail about a specific campus, and the specific campus is not the point. The point is that a public university with a fraction of a Fortune 500's budget currently holds a better position in the AI market than almost every enterprise I profile, and it got there by making four decisions that have nothing to do with being a university.

## Refuse the binary first

Almost every enterprise AI conversation I hear is framed as a choice between two options, and both of them are bad.

Option one is buy: standardize on a vendor, negotiate seats, roll it out, and accept that your data posture, your model roadmap, your pricing, and your rate of change are now somebody else's product decisions. Option two is build: train or fine-tune your own models, staff a research team, and discover that you have entered a capital-intensive race against companies whose entire existence is that race.

UC Irvine did neither, and that refusal is the whole move. They did not build models. They are running OpenAI, Anthropic, Google, Mistral, and DeepSeek — every one of them somebody else's. And they did not buy a platform; they still keep a partners page listing Zoom, Microsoft Copilot, and Google Gemini right next to their own stack, because "own your infrastructure" was never an argument against purchasing software.

What they built is the **thin layer in between**, and it is thin on purpose. Four things, none of them exotic:

**Identity.** Every surface sits behind campus SSO. The platform knows who you are before it decides anything else.

**Policy.** Data classification, retention, and training exclusions are enforced by the platform, not promised in a vendor's terms.

**Routing.** One endpoint over many models, with the vendor named by an internal alias rather than by application code.

**Budget.** Spend limits, tiered entitlement, and chargeback to real financial accounts, enforced at the point of the call.

That is it. That is the entire durable asset. The models underneath it have churned through Claude Opus 4.1, GPT-5, Gemini 2.5 Pro, DeepSeek-R1, GPT-5.4, Claude 4.6, Kimi K2.5, and now GPT-5.5 and Opus 4.7 — and the control plane has not changed shape in two years. **They rented everything volatile and owned everything durable.** Most enterprises have done precisely the inverse: they own a pile of vendor-specific integrations that will be worthless in eighteen months, and they rent the identity, policy, and spend controls that should have been theirs permanently.

## The proliferation argument is the one that should scare you

Tom Andriola, UCI's Vice Chancellor for Data and IT, gave the strategic rationale in a sentence most enterprises get exactly backwards: *"managing the proliferation by having your own tools and your own interfaces allows you to get to value more quickly."*

Read that as a security argument, because that is what it is. AI tools were going to spread through the institution whether or not anyone approved them. Shadow adoption was not a risk to be mitigated, it was the **default outcome**, already underway, with thousands of people pasting institutional content into consumer products on personal subscriptions. You cannot policy your way out of that. Blocking domains does not work, acceptable-use memos do not work, and mandatory training does not work, because none of them change the fact that the unsanctioned tool is available and useful right now.

The only intervention that actually works is to offer something people choose on the merits. Xanat Hernandez in UCI's OIT put the bar where it belongs: *"We wanted to provide not just an alternative, but one that was better."*

That is a brutally high bar and most enterprise IT organizations do not clear it. They ship a sanctioned tool that is slower, older, more restricted, and worse than what people can get on a credit card, then treat low adoption as a compliance success. It is not. It is a governance fiction. Every unused sanctioned tool is a rounding error next to the shadow usage it failed to displace, and you now have *both* the cost and the exposure.

UCI cleared it. Student users went from 4,000 to 11,000, average logins per student went from four to seven, one quarter recorded over 100,000 messages, and the platform is past 20,000 unique users and 145,000 logins. Those are the numbers of something people reach for, not something they are told to use — and every one of those sessions is a session that did not happen in a consumer product with institutional content in it.

If you want a single metric for whether your AI governance is real, it is not policy coverage. It is **displacement**: what fraction of the AI work happening in your organization is happening on infrastructure you control? For most enterprises the honest answer right now is somewhere near zero, and no amount of policy documentation changes it.

## Capacity is the asset. The platform is just the artifact.

This is the part I most want enterprises to hear, and the part that gets skipped in every build-versus-buy analysis I have ever read, because it does not fit in the spreadsheet.

UC Irvine has a **named AI team**. An AI Architect and lead developer, developers, a UX lead, a product manager, a training and outreach coordinator, and a director who owns AI alongside cloud and client solutions — plus an extended bench and a communications function. That is not incidental to the platform. That *is* the platform. The software is the artifact their capacity produced; the capacity is what actually compounds.

Watch what that capacity lets them do that a purchasing organization cannot. They ship a new model into the catalog within weeks of release, repeatedly. They run three products with three different privacy postures. They wrote a real deprecation plan and executed a migration. They built a training arm so the campus gets better at using the thing. They stood up a prompt library and a marketplace. None of that is procurable. Every bit of it is the output of people who understand the system because they built it.

Now consider the enterprise that outsourced all of this. It has a vendor contract, a rollout, and an internal champion who has read the vendor's docs. When the model landscape shifts — which it does every quarter now — it has no one who can evaluate the shift, no place to put a new model even if it wanted to, and no ability to renegotiate from strength, because switching costs are entirely on its side of the table. It bought a capability and accumulated **zero capacity**. Three years and many millions later it is exactly as dependent as it was on day one, and its people have learned nothing except how to file tickets against somebody else's roadmap.

The cost inversion here is stark. Per-seat AI licensing across a large enterprise, forever, with no accumulated capability, versus a team of six or eight who build the layer once and then compound. UCI's numbers make it concrete from the other direction: over **1,000 custom bots** built by staff on their Creator product, replacing third-party solutions that ran *"upwards of $10,000 each"* — a procurement line item that simply ceased to exist — and an estimated $100/month of value delivered free to each of tens of thousands of students who were otherwise paying $20 a month out of pocket.

If you are an enterprise and you take one thing from this: **fund the team before you fund the platform.** The team will build the right platform. The platform will not conjure the team.

## The one artifact that holds all the leverage

If you want to know whether an organization actually owns its AI position or just says it does, look at one thing: **can a developer name a vendor in application code?**

At UCI they cannot. Routing goes through a campus alias — `@zotgpt-api-bedrock`, `@openai-prod` — carried in a header or as a prefix on the model slug. The university holds the vendor contracts, the vendor credentials, and the spend behind that alias. A developer names a campus concept; UCI decides what it resolves to.

The consequence is the entire ballgame. UCI can renegotiate with a model vendor, shift a workload from one cloud to another, swap in a cheaper model for a workload that does not need the expensive one, or add a provider that did not exist last quarter — and **not one line of application code changes anywhere on campus.** They state it plainly: models are added *"continuously without code changes."*

This is the abstraction every enterprise says it wants and then fails to build, and the failure mode is always the same. The gateway goes in, and then the first team under deadline pressure reaches through it to the vendor SDK because that is faster, and nobody claws it back, and eighteen months later you have a gateway that proxies a third of your traffic while vendor client libraries and vendor-specific model names are welded into hundreds of services. You have the diagram but not the position. When renewal comes and you go to negotiate, the vendor knows exactly how expensive it would be for you to leave, and prices accordingly.

The rule is simple and it has to be enforced from day one, because it cannot be retrofitted cheaply: **no vendor credential and no vendor model name in application code, ever.** Internal aliases only. If that means the gateway has to be good enough that going around it is not tempting, then make the gateway good enough. That is the job.

Two smaller pieces of the same design are worth copying outright.

**Meter in money, not requests.** UCI publishes no requests-per-minute limit anywhere. What it publishes is a spend ceiling — dollar-denominated credits, per-key spend limits, tiered entitlement, and higher budgets gated behind validating a real financial account so consumption lands on the department or grant that incurred it. I initially filed the missing rate limit as a gap and then realized it is correct. On a multi-model gateway, requests-per-minute is an actively misleading unit, because a thousand cheap calls and a thousand expensive ones are not the same event. Dollars are the only unit that spans models whose costs differ by an order of magnitude. That is FinOps wired into the access model rather than bolted on as a monthly surprise, and enterprises need it far more acutely than universities do.

**Enforce contradictory policies with infrastructure, not flags.** UCI runs three products with three isolated production environments, because instructors *can* see student questions in the classroom product and *cannot* see them in the private one. Rather than expressing both policies inside one application behind a permissions check, they separated the deployments. Policy isolation enforced by infrastructure isolation is a far stronger guarantee than policy isolation enforced by an `if` statement — and any enterprise running AI across business units with genuinely different data rules should be reaching for the same pattern instead of hoping a feature flag holds.

## The objections, taken seriously

**"We're not a technology company."** Neither is a public university. And note what UCI did *not* build: they did not write a specification, they adopted an existing one, which means they inherited an entire client ecosystem instead of maintaining SDKs in seven languages. The buildable surface here is a gateway, an identity integration, budget enforcement, and a catalog. It is a quarter of work for a small team, not a moonshot.

**"We don't have the talent."** You have less of it every year you postpone, and the people who could have built this leave for organizations that let them. This objection is self-fulfilling and it gets more expensive annually. Six people is the order of magnitude, and hiring six people who will still be useful in five years is a better use of budget than five years of seat licenses that leave nothing behind.

**"Buying is faster."** Buying is faster to *deploy* and slower to *value*, which is exactly Andriola's point. You will spend the time you saved on integration exceptions, data-handling reviews, and negotiating for capabilities that are on someone else's roadmap. UCI shipped to faculty and staff in January 2024 and to students that April.

**"The vendors will do this better than we can."** For the model, yes, absolutely, which is why you should not build models. For *your* identity, *your* data classification, *your* chargeback, and *your* entitlement rules — no. No vendor will ever know those better than you, and every vendor has a structural interest in your not having a portable version of them.

**"We already have an AI gateway."** Maybe. Check the one question above: can a developer name a vendor in application code? If yes, you have a proxy, not a position.

## Where the enterprise case is genuinely harder

I will not pretend the transfer is clean. Enterprises face things UCI does not, and it is worth naming them so nobody reads this as a promise.

Regulatory surface is heavier — HIPAA, PCI, SOX, GDPR, and sector regimes with auditors attached, where a university's data classification scheme does most of the work. Enterprises hold customer data and third-party data, not just their own community's, which raises the stakes on every routing decision. Procurement is frequently structured to *prevent* this outcome, because it is optimized for buying products and has no category for funding an internal capability. And UCI's users are a captive, aligned community with an institutional relationship, while an enterprise's business units can and will go around central IT with their own budgets.

Every one of those makes the work harder. None of them makes it wrong. If anything the regulatory weight argues *harder* for owning the control plane, because "we enforce it at our gateway" is an auditable claim and "our vendor's terms say they don't do that" is not.

## Do not stop where UC Irvine stopped

One honest caveat, and it is the thing I would fix first if this were my platform. UCI got the expensive, irreversible decisions right — data plane, identity plane, routing layer, budget — and then stopped short of the machine-readable layer entirely. No published OpenAPI, no `.well-known` surface, no `llms.txt`, no MCP server, and, most costly of all, no machine-readable model catalog, even though the model catalog is the fastest-changing thing on the platform. I wrote about [rebuilding their spec out of nine web pages](https://apievangelist.com/2026/07/30/i-rebuilt-their-openapi-from-nine-web-pages-just-publish-it/) last week.

That gap matters more for an enterprise than it did for them, because the agents are already inside your building. If you build the control plane and do not publish a machine-readable contract for it, you will have done all the hard work of establishing a governed position and then made that position invisible to precisely the tooling that most needs to respect it. Every agent, SDK generator, governance scanner, and internal catalog will route around what it cannot read.

So build the four layers — identity, policy, routing, budget — and then publish the contract for them. That is the whole template. A public university built it with a team of six while the rest of us were still running vendor bake-offs, and the only thing standing between most enterprises and the same position is the willingness to fund capacity instead of licenses.
