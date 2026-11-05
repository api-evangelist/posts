---
published: true
layout: post
title: 'The Dutch Government Now Runs On OpenLint'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-dutch-government-now-runs-on-openlint.png
date: 2026-11-05
author: Kin Lane
tags:
  - OpenLint
  - Spectral
  - Governance
  - Linting
  - Rules
  - Government
  - Netherlands
  - Open Source
---
When I [forked Spectral](https://apievangelist.com/2026/07/29/i-am-forking-spectral/) back in July, the first downstream user I pointed at was the Dutch government. The Netherlands' [REST API Design Rules](https://gitdocumentatie.logius.nl/publicatie/api/adr/) are a mandatory standard, and they are written as Spectral rulesets. The linter is right there in the normative text. An unanswered supply chain issue in that repository was not an abstract problem. It was sitting under a national standard.

Yesterday [developer.overheid.nl published "Het is zover: OpenLint vervangt Spectral"](https://developer.overheid.nl/blog/2026/11/04/openlint-vervangt-spectral), "It's happening: OpenLint replaces Spectral," by Dimitri van Hees and Joost Farla. As of this week, all of the tooling at developer.overheid.nl runs on [OpenLint](https://openlint.org/), including the DON Checker that Dutch agencies use to check their APIs against the design rules. Their existing rulesets for the API Design Rules, OpenAPI, publiccode.yml and JSON-FG work without changes.

## What this means to me

I want to be clear about whose work this is. I started a fork under API Commons, but OpenLint is what the community did with it. Others cloned it and cleaned it up, worked through open issues and pull requests, updated dependencies and removed the telemetry. And the team at developer.overheid.nl did the part I said from day one I wasn't flexible on. They rewrote the ruleset format into [its own specification](https://openlint.org/spec), published with ReSpec, with a JSON Schema and requirements stated as MUST and SHOULD. The specification is now separate from the tool, so any linter can implement it and OpenLint is just one of them.

That separation is the whole point. I said in August that I wanted [vacuum](https://quobix.com/vacuum/) and others to be engines we can use rather than competing forks. The Dutch team says the same thing in their post: ideally vacuum becomes a Go implementation of the same specification, so a ruleset gives the same result whichever linter you run. They'd rather have the tooling follow the standards than write JavaScript-specific behavior into the specification.

The other part that matters is the home. A fork is not a standard, and they said in July they'd help find a place for it to land. OpenLint is going to [Open Source Europe](https://opensourceeurope.com), with interest from Italy and Germany, among others. The format the Dutch API Design Rules are written in is now headed into European public hands, not tied to one person or one commercial vendor. The plan is to officially launch it on December 3rd in the [Europe API](https://europeapi.com) track at apidays Paris, but version 1.0 is already on npm.

This is the outcome I was hoping for when I forked it, and honestly a better one than I could have produced on my own. Thank you, Dimitri, Joost and everyone who did the work. Below is my English translation of their post, so more people can read it. Any mistakes in the translation are mine, and the original is the authoritative version.

---

## It's happening: OpenLint replaces Spectral

*Translated from the Dutch original by Dimitri van Hees and Joost Farla, [developer.overheid.nl](https://developer.overheid.nl/blog/2026/11/04/openlint-vervangt-spectral), November 4, 2026.*

As of this week, all of developer.overheid.nl's tooling runs on [OpenLint](https://openlint.org/), the successor to Spectral. We have been actively involved since July, both in specifying the ruleset format and in the discussions about the direction of the project. When version 1.0 was recently released, we switched our tooling over right away, including the DON Checker. The rulesets we wrote for the [API Design Rules (ADR)](https://developer.overheid.nl/kennisbank/api-ontwikkeling/standaarden/api-design-rules) and for validating OAS, publiccode.yml and JSON-FG work without any changes.

### TL;DR

OpenLint is the final name of Spectral's successor, which was still being tested as a fork under API Commons in July. The project is built by a community that developer.overheid.nl actively takes part in, and we captured the ruleset format in its own specification without changing the format itself. Version 1.0 is now on npm.

The project gets a permanent home at [Open Source Europe](https://opensourceeurope.com). The Dutch government is on board through developer.overheid.nl, and there is also interest from Italy and Germany, among others.

Existing rulesets, including the ADR's, work without changes. If you use Spectral directly, replace the package with OpenLint, or better still, use the [DON Checker](https://github.com/developer-overheid-nl/don-checker).

This post follows up on [Spectral under fire: where we stand](https://developer.overheid.nl/blog/2026/07/31/spectral-onder-vuur) from July. There we discussed the supply chain incident of July 14, when two malicious versions of `@asyncapi/specs`, a dependency of Spectral, appeared on npm. Anyone who did a fresh install in that window pulled in code that could exfiltrate SSH keys, tokens and credentials, among other things. The incident itself was resolved quickly, but the issue about it on the Spectral repository stayed quiet. For many users that was the last straw, because hundreds of issues were already open and bugs in the VS Code plugin had gone unaddressed for a long time.

At the time we deliberately chose not to rip Spectral out in a hurry. We pinned Spectral to a version we chose ourselves, and we did not switch to [vacuum](https://quobix.com/vacuum/), because it does not fully support the ruleset format, is in practice maintained by one person, and is written in Go, while our tooling also has to run in the browser. Instead, we helped build the fork that [Kin Lane](https://apievangelist.com), better known as The API Evangelist, had started under API Commons. For everyone who lay awake all summer over "Spectralgate" wondering what the logical next steps were, OpenLint is now the answer.

### What is OpenLint?

OpenLint is an open specification and toolbox for linting API descriptions, managed in the open by a community. It started with the fork of Spectral that Kin Lane was testing under API Commons. Others in the community made a clone of it and cleaned it up thoroughly, removing what was specific to Spectral, picking up open issues and pull requests and updating the dependencies. Spectral's "telemetry" was also stripped out in the process.

Alongside that cleanup, work was done on the specification, and that is where an important part of developer.overheid.nl's contribution lies. With Spectral, the ruleset format was nothing more than whatever the linter accepted in practice. We completely rewrote the format, starting from the existing Spectral code, into its own [specification](https://openlint.org/spec), published with ReSpec, including a JSON Schema and stating the requirements in terms of MUST and SHOULD. That separates the specification from the toolbox, so any linter can implement the format, and OpenLint is one of them.

The ambition also goes further than Spectral's. OpenLint should eventually be able to lint more standards and formats than just OpenAPI, AsyncAPI and Arazzo, and we want to add Dutch government standards such as NL-SBB and [DCAT-AP-NL](https://docs.geostandaarden.nl/dcat/dcat-ap-nl30/), among others. OpenLint also doesn't depend on one person or a commercial vendor. Contributors include people from the communities around OpenAPI, AsyncAPI and Arazzo, people who previously worked on Spectral itself, and colleagues from other governments.

In July we also said we would help look for a place for it to land, because a fork is not yet a standard. We found that place at [Open Source Europe](https://opensourceeurope.com), which OpenLint will fall under. That puts the format the ADR ruleset is written in into European public hands.

We aim to officially launch OpenLint on December 3 during the [Europe API](https://europeapi.com) track at apidays Paris. You don't have to wait for that, because version 1.0 is already out and you can start using it now.

### Getting started

If you use Spectral, switch to OpenLint right away. You don't need to convert your rulesets, and the CLI still picks up your existing `.spectral.yaml`, although in new projects you can also use `.openlint.yaml`. For the CLI, replace the package and the command as shown below.

```diff
- npm install --save-dev @stoplight/spectral-cli
+ npm install --save-dev openlint
- npx spectral lint openapi.yaml
+ npx openlint lint openapi.yaml
```

If you call the linter from your own code, the import and the class name change, while the `RulesetDefinition` and your ruleset itself stay the same.

```diff
- import { Spectral, type RulesetDefinition } from "@stoplight/spectral-core";
+ import { OpenLint, type RulesetDefinition } from "@openlint/openlint-core";
```

Even better is to use the [DON Checker](https://github.com/developer-overheid-nl/don-checker). That is the overarching software that both the ADR Checker and the publiccode.yml checker fall under, and in July we already advised using the ADR Checker instead of Spectral directly. That way you are not directly dependent on a linter, because we maintain the linter and the rulesets for you. It also gives us room to offer more functionality than just linting.

The DON Checker is an implementation of the [standards-checker](https://github.com/Geonovum/standards-checker), which now runs on OpenLint. The ADR rulesets live in their own package, generated from the ruleset Logius publishes with each version of the [ADR](https://gitdocumentatie.logius.nl/publicatie/api/adr/). The ruleset for publiccode.yml lives in the DON Checker itself.

The DON Checker runs with a single `npx` command, which means it runs in any pipeline where Node.js is available.

```bash
npx @developer-overheid-nl/don-checker@latest \
  validate --standard adr --input ./openapi.json
```

With `--standard publiccode` you check a publiccode.yml the same way. Ready-made examples for GitLab CI and GitHub Actions are on the ADR Checker page in our knowledge base.

### The next steps for OpenLint

We are not done with OpenLint 1.0, and in the coming period we will be working on the following topics, among others.

The VS Code plugin has not worked well for quite a while. A structural solution is LSP functionality for OpenLint, which lets you use the linter in any IDE without having to maintain a separate plugin for each editor. We are going to help with that.

We are also mapping the differences with vacuum. There is nothing wrong with vacuum, and by its own description it is fully compatible with Spectral rulesets, but in practice there are differences. Those largely come from Spectral legacy, because the ruleset format is closely intertwined with JavaScript, for example in how regular expressions and JSONPath work. Vacuum has its own implementations of those, and on some points vacuum even follows the underlying standards better than Spectral. We are deliberately building on Spectral's ruleset format because it is widely used around the world, but we want to keep the specification separate from the software. We would rather have the tooling follow the standards than lock JavaScript-specific things into the specification. Ideally, vacuum simply becomes a Go implementation of that specification, so a ruleset gives the same result everywhere, no matter which linter you use.

What we learn along the way goes into a new version of the specification. It has to stay backwards compatible with existing rulesets, but be written so a ruleset works the same way in both the OpenLint toolbox and vacuum. In that version we also want to make room for formats other than OpenAPI, AsyncAPI and Arazzo, so that, for example, the Dutch government standards we mentioned earlier can be linted with it.

We also want to contribute to the educational side, making it easier to write good rulesets. Think of tutorials and reusable aliases for common rules, such as `given` paths that come back in many rulesets, or regular expressions you would otherwise write over and over again.

Finally, we bring our own practice. Because Spectral is part of the ADR itself, we have many use cases and backwards compatibility matters a great deal to us. With every further development of the specification and the toolbox, we test whether existing rulesets, including the ADR's, keep working.

### Get involved

We are going to put a lot of work into OpenLint in the coming period, both on the specification and the topics above and in the discussions about the direction of the project, and we hope you will join in. Try OpenLint and let us know what you run into. You can send ideas, test results and questions to [developer.overheid@geonovum.nl](mailto:developer.overheid@geonovum.nl) or in [#developer-overheid.nl](https://codefornl.slack.com/archives/CFV4B3XE2) on the Code for NL Slack. You can also contribute directly on GitHub to the [linter](https://github.com/openlint/openlint) or the specification, or join the Office Hours announced through the [community repository](https://github.com/openlint/community). The more parties take part, the stronger the foundation we all build on becomes.

If something is missing in the DON Checker or you run into a problem, report it in the [DON Checker issues](https://github.com/developer-overheid-nl/don-checker/issues). If it is about the API Design Rules themselves, report it to Logius, which maintains the ADR, in the [API Design Rules issues](https://github.com/Logius-standaarden/API-Design-Rules/issues).
