---
published: true
layout: post
title: "Tell Me You Haven't Automated Rules With a Single Story"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/tell-me-you-havent-automated-rules-with-a-single-story.png
date: 2026-10-19
author: Kin Lane
tags:
  - API Governance
  - OpenLint
  - Spectral
  - Rules
  - Linting
  - APIs
---
I've had a bee in my bonnet about Bruno Pedro's story "[API Governance Isn't Just Rule Automation](https://apichangelog.substack.com/p/api-governance-isnt-just-rule-automation)" for a couple of weeks now, but I just haven't had the time to gather my thoughts while on the road. First, I love Bruno's competitive responses to my work. They echo the work of many other pundits over the years who have gone away, like Matthew Reinbold of Net API Notes and David Berlind of ProgrammableWeb. Countering my inclusive and generative, albeit theatrical approach to investing in the API ecosystem, some like to take an adversarial stance, as Bruno does when it comes to things I invest in like [APIs.json](https://apisjson.org/) and now [OpenLint](https://openlint.org/).

That's cool. It's fine. We see the world very differently, and I'll continue doing what I do, which includes responding to Bruno's narrative when I have the time and the energy.

Bruno's latest is clearly taking a jab at OpenLint, calling it a power grab. Sure, OK. [I admit that any API specification is about grabbing power](https://apievangelist.com/2026/09/02/every-specification-is-a-land-grab/). I guess the real story will be about what I, or, if you show up to the meetings, you realize it is us, do with this power. And I guess Bruno is more interested in SmartBear retaining this power, rather than the community asserting control over it in a way that will benefit the ecosystem. Again, only time will tell what the outcome of this power grab will be. Ultimately, once the power has shifted to OpenLint, I'm guessing that I will just retain power and control, as I have a long history of doing this. ;-)

> "People like power. The feeling of being the one controlling what others can or can't do is appealing to most of us. And, one of the most powerful positions to be in is the one of the gatekeeper." - Bruno Pedro

Aside from Bruno's post being a jab at a community effort that doesn't have any corporate sponsorship or backing, what rings most true is that the story is clearly written by someone who doesn't understand the specificaton, hasn't applied it as part of API governance at scale, or hasn't read the priority list we are working on. Otherwise you wouldn't feel like this.

> "While being able to enforce the rules for your APIs programmatically is fine, that is not what API Governance is about. At least, that's not all." - Bruno Pedro

This is a sentiment I hear from many, many, many people and pundits who haven't applied Spectral rules. First, the severity of a rule can be error, warning, info, or hint. You don't have to "enforce rules." They can simply be a vehicle for education. When you combine the slug of a rule with the `documentationUrl` property of a ruleset, you can bake education and guidance into the design, build, run, and test time of the API lifecycle. No rules need to be enforced to do this. But if you haven't ever crafted a rule, understood how you can weave that rule across the API lifecycle, written the documentation to support each rule, and talked with teams about each rule as part of design reviews, it is hard to understand how they actualy work.

Another aspect of rules that people like to not understand is that you can lint anything that is YAML or JSON. Meaning it doesn't stop with OpenAPI and AsyncAPI. At Bloomberg I was linting product definitions, which had the business requirements, product manager directives, support information, and what sales would need. You can lint the pipeline, the Terraform for deployment, the gateway configuration, and any artifact that is used to define your API. And again, you don't have to enforce the rules. You can just opt to warn, and provide info and hints along the way. It really depends on how you want to operate, and how wide you want to expand the coverage of your rules. There is no single approach to "rule them all". ;-)

> "As I wrote before, "The main goals of API Governance are related to consistency, standardization, security, compliance, performance, agility, and alignment with business goals." - Bruno Pedro

An OpenLint rule is a piece of YAML that can be used to standardize, communicate, and yes, enforce design, security, compliance, performance, and agility, and align API operations with business and engineering goals. Only a lack of imagination, and being stuck on rules equaling enforcement, limits what you can do with an OpenLint rule. An OpenLint rule can just be a friendly reminder that you accidentally forgot to camelCase something, or used a redundant word like REST in your title or path. It can help you remember that you need plans and pricing, not just rate limiting. It can make sure you have a product, support, sales, and compliance contact, not just the owner of your API from engineering. There is NOTHING limiting OpenLint from doing what you want, except your definition of what governance is or can be.

> "People need empathy. API governance isn't just about rules." - Bruno Pedro

My favorite part of rolling out API governance within large organizations is the recurring meetings and discussions about rules. Rules provide a very precise focal point for discussing versioning, documentation, testing, performance, support, and any other element you need to operate an API. The amount of work potentially represented in a YAML or JSON OpenLint or Spectral rule can be rewarding. The hours spent discussing whether versioning is done in the path or in the header across multiple teams and domains, resulting in separate rules and severities that reflect the outcome of those conversations, are dripping in empathy for what teams need and want. But if you've never sat through these discussions, you don't appreciate how a single piece of YAML can be such an empathy state machine.

> "People love success. And, in the end, that's what API governance is about. It's not about having a bunch of linting rules and automation tools in place. It's not about all the gatekeeping and guard rails you can have. It's not about limiting what developers can do. It's not about controlling who can use your API and what they can do with it. It's about having APIs that are high-quality, aligned with the objectives of your business, and easy to maintain and integrate with. That's what API governance is." - Bruno Pedro

You are correct. It isn't just about having a bunch of rules in place, gatekeeping and guarding. This is why I stepped away from Bloomberg. I had done the work to talk to all the teams and crafted the rules needed to reflect their current state, but also the desired state. I had those rules in the pipeline. I had hundreds of rules. The only ones I had set to a severity of error were that you MUST have a title, description, and version. That was it. And version was defined by domain (line of business), as the quants had a valid argument for it being in the path, and everyone else had it in the header.

That was it. Every other rule had a link to robust documentation and guidance that was injected at design, develop, and build time. I had done the work to align rules with every stage of the API lifecycle, from define to production, and included sign-off in the YAML, with rules for the roles of every person involved from data, engineering, product, sales, and support. There were weekly meetings to continue the discussions. Then leadership wanted to just turn on the rules, enforce all of them, and not see everything else that went into a rule along the way. Very similar to your narrative Bruno. Which is ironic, because we are both saying the same thing, but I am using rules as a focal point for everything you ask for, and that leadership expects. Once you remove that focal point, we have nothing to align around. It's back to the status quo power struggle that exists within most enterprises.

So, I know I'll piss you off with this story Bruno (but I guess you won't read). But you are wrong and right. I am happy to play adversary with you. But sniping at me over OpenLint and APIs.json is dumb and unproductive. Who does it benefit? Get over it. Come join in the OpenAPI, Arazzo, Overlays, OpenLint, and even MCP and A2A discussions that are occurring. Roll up your sleeves, or at least just sit and listen. There is a lot going on. I'm not sure why you'd want to punch down at what we are doing with OpenLint. Everyone is pretty excited about the potential. Running a standards group is the last thing I want. I have no interest in harnessing the power of OpenLint for myself, but I do recognize the power associated with it. I just saw so many interesting projects, mine included, forking it, and as you state about governance, it is much more than just rules. But I guess you don't read my newsletter like I read yours, because that has long been what I champion. It's why my newsletter is called Weekly API Governance (Guidance).

Cheers, my friend. 
