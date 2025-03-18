---
published: true
layout: post
title: Domain and Team API Governance Rule Rollout in CI/CD Pipelines
date: 2025-03-18T09:00:00.000Z
tags:
  - Rules
  - Pipelines
  - Governance
  - CI/CD
  - Domains
  - Maturity
  - Severity
  - Security
  - Versioning
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/america-immigration_dumping-ground-ferris-wheel-fair.jpeg
---
[As I continue to evaluate the potential standardization around the governance of HTTP APIs within CI/CD pipelines](https://apievangelist.com/2025/03/05/what-api-tools-should-i-be-running-in-my-pipeline/) I am incorporating in several conversation around the phased rollout of API governance rule enforcement by team or domain. In addition to which tooling should be applied as part of CI/CD pipelines, and whether you will be using Spectral, Vacuum, Redocly, APIMATIC, or some other approach-—you should also be considering the rollout of API governance rules in different ways. Here are some of the considerations that I have come across in my conversations with people who have implemented phased approaches to the rollout and enforcement of API governance rules.

- **Domain** - Using the domain planning to organize governance rules and applied within separate Git organizations for each domain.
- **Team** - Giving teams some autonomy in deciding which rules are applied, allowing for configuration at the individual API pipeline level.
- **Severity** - Allowing the severity of rules to be defined as error, warning, info, or hint, based upon domain, team, or even individual API.
- **Maturity** - Rolling out API governance rules based upon the maturity of the team, API, as well as even the rules, to keep things stable.
- **Security** - Prioritizing rules that address OWASP top 10 and other security aspects of API governance, prioritizing security across APIs.
- **Versioning** - Rules will evolve and change scope over time, and oftentimes the versions of rules will play a role in what gets rolled out.

Right now I am seeing rulesets dynamically generated to accommodate the domain and team rollouts. It helps to be working from a centralized set of API governance rules which are categorized and tagged based upon schema, properties, experience, but also domain, team, maturity, and other higher level concerns. Basically individual rules can be centrally managed, then dynamically publish rulesets for individual APIs, teams, and domains, and usage of these rulesets in API editors, IDE, CLI, and CI/CD pipelines. The real work begins with the creation and management of the central API governance rules, but then shifts to when each team can get involved in defining and enforcing their API governance rules, balancing autonomy and compliance in different ways across the enterprise. 


