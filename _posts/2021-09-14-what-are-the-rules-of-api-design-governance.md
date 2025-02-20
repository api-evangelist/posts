---
published: true
layout: post
title: What Are the Rules of API Design Governance?
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/america-immigration_dumping-ground-old-comuter-wheels-crypto.jpg
tags:
  - Governance
  - Rules
  - Rulesets
  - Linting
---

I am iterating upon some [API design governance collections](https://apievangelist.com/2021/09/13/openapi-governance-using-rule-based-or-script-based-approaches/) and an essential element of two of these collections are the linting rules. Little modular but machine readable rules that describe a specific pattern or characteristic we want to see in the designs of our APIs. A rules-based approach to OpenAPI design governance was pioneered by [Speccy](Speccy), and more recently from [Spectral](https://github.com/stoplightio/spectral), and the rules format I’m working from is an offshoot of the Speccy world using [OAS-Kit](https://github.com/Mermade/oas-kit). The open source linting and validation library has a specific vocabulary for defining rules, which can then be applied at design, develop, or build time. I have begun organizing a handful or rules via Github, and managing and organizing them into rulesets using Github Jekyll. I needed a handful of simple rules to flesh out the capabilities of my API design governance linting APIs, so I pulled [this repo together to help me plant the seeds and now I’d like to invest more into developing more rules](https://github.com/postman-open-technologies/linting-rules), and learning what the more meaningful grouping as rulesets would look like.

There are about [29 API design governance rules in the repo](https://github.com/postman-open-technologies/linting-rules) so far, and I have organized some of them into four separate rulesets that I am using in the workspaces for listing OpenAPI using an API, as well as a localized script-based approach, helping introduce rules-based governance to some folks who are just getting acquainted with how it works.

- [**Starter**&gt;]() - A ruleset to get people started with applying rules to an OpenAPI.
    
- [**Descriptions**&gt;]() - A ruleset just to help make sure descriptions are acceptable.
    
- [**License**&gt;]() - Making sure an OpenAPI has a license, or particular license.
    
- [**Contact**]() - A ruleset to verify there is a contact object, and there are details.

This provides a nice suite of rulesets to kick off the conversation, but I need more if I am going to catch the attention of some of the folks I am talking to. Next, I am going to work my way through each of the objects for OpenAPI then brainstorm and create rules for all of the most obvious patterns we expect of a complete, high quality OpenAPI. [The Github repository for managing these rules](https://github.com/postman-open-technologies/linting-rules) is designed to manage all of the rules individual, so that we can keep things modular and reusable, but then I’ve added the ability to aggregate them into rulesets, so that we can get more efficient, while also remaining modular, as we apply them to a variety of OpenAPIs from across multiple industries.

After I get a robust catalog of rules together I am going to try recreating rules for a handful of API design guides from top API providers. I am curious how many of the guidelines within these guides can actually be represented as rules that can be applied using a linter. I would guess that no more than 50% of the guidelines can be defined as machine readable rules. I am guessing that another 30% will be able to be done via a script-based approach to looking for other patterns and properties. The remainder won’t be able to be automated at all. We’ll see how well I do in my prediction once I actually flesh out a couple popular API design guides. I am really curious how effective a rules-based approach can be, and specifically whether we can create common rulesets, or entire design guides that organizations can adopt and immediately put to work governing their operations.

In my experience most API providers are just looking to emulate the best patterns that they are aware of from across the API providers and tooling they are familiar with. I am pretty confident that if we can establish a large catalog of ready to rules and rulesets for people to choose from, as well as solutions for linting using these rules at design, develop, build, and production time, in a manual and automated way, we are going to see a lot more complete and usable OpenAPIs. This is what we will need to properly enable interoperability in industries like healthcare, finance, transportation, and beyond, as well as across enterprise organizations in order to realize the productivity and reliability that we all envision in our heads. I have to admit, at first I was pretty skeptical of rules-based approaches to API design governance because I didn’t want to have to learn yet another specification and vocabulary. However, I think that when we make sure there is a robust catalog of ready to go rules, rulesets, and design guides for folks to choose from, they become a pretty powerful force for change at scale.