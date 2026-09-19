---
published: true
layout: post
title: 'Big City Storytelling: OpenLint'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/big-city-storytelling-openlint.png
date: 2026-09-19
author: Kin Lane
tags:
  - Storytelling
  - Narratives
  - OpenLint
  - Spectral
  - API Governance
  - Rulesets
  - Enterprise
  - Government
  - Regulation
  - Kin Score
  - Agent Readiness
  - Open Source
  - APIs
---
This is the second half of the big city storytelling breakdown I started with [Arazzo](https://apievangelist.com/2026/09/19/big-city-storytelling-arazzo/) — the storytelling that works on large, regulated, established organizations rather than on the [frontier](https://apievangelist.com/2026/09/19/frontier-storytelling/). Same audience: insurance, financial data, automotive, and a couple of European governments. Same rule about not naming anybody. Different worked example.

The example this time is the Spectral fork, which as of this week has a name. It is called **OpenLint**.

That naming is itself the first lesson, so let me start there and work outward.

**The name is the first compliance artifact you ship.** On the frontier a name is a flex. Here it is a thing that has to survive legal review, an architecture board, and a security team that has never heard of you. When we ran the naming vote in August it came down to two finalists — one of them exciting, one of them boring. The exciting one had trademark problems. And the European contingent, which is most of the working group, asked flatly for something literal and boring. I am a storyteller, I wanted the exciting one, and I was wrong. *OpenLint.* It sounds open, every technical person already knows what lint means, two syllables, and it sounds like it could have been around for ten years. That last quality is worth more in a regulated enterprise than any amount of novelty. Full trademark search is done, the domain, the npm namespace, and the repository are held.

**Lead with the dependency, not the vision.** The story that actually moves a procurement conversation is not "governance is the next layer." It is this: two European national governments have written their mandatory API design rules as rulesets for a tool that has effectively stopped being maintained, that has had supply-chain security incidents, whose open pull requests sit untouched, and whose owner's one substantive change in the last stretch was call-home telemetry that is on by default. That is not a pitch. That is a risk register entry, and it is already on somebody's register. The moment I understood that, this stopped being a theatrical fork and became a real project.

**Say "rules," not "governance."** Governance is a word that costs money and headcount, arrives attached to a fifty-page document from a parent company, and makes the person across the table start calculating what it will do to their roadmap. Rules are files in a repository. The organizations I talk to say it themselves: *our rules are all over Git and Confluence, there is no organized approach to them.* That sentence — rules scattered across two systems with no owner — is the actual problem. Lead with the sentence they already say.

**Name the risk that is already on their register.** Unmaintained upstream. Single maintainer. Supply chain. Private-equity owner with no incentive to invest. Telemetry egress to a third party from inside the build pipeline. You do not have to dramatize any of that, and you should not — this audience discounts drama automatically. Just list it, flatly, and let them recognize their own inventory.

**Put the license in the first sentence.** MIT. Two things are true at once in a large enterprise and the order matters: developers need something they can pull down and hack on this afternoon without a purchase order, and the organization will eventually need a vendor with a throat to choke. Open and MIT-licensed gets you in the door; it does not close the second requirement, and pretending otherwise insults the person who has to sign. My own position after living inside one of these organizations is that this layer should not be a startup at all — it needs to be open, standardized, and governed first, and the companies come afterward.

**Federation is the word, not standardization.** Standardization means one team telling every other team what to do, and it fails in every large organization I have watched try it. Federation is what actually works, and one European government has the cleanest model of it I have seen: centralized guidance at the top, then every province and agency maintaining their own local version underneath, centralizing and decentralizing deliberately. The rules version of that is tagging and grouping in the ruleset itself — documentation rules, security rules, mocking and virtualization rules, runtime rules, conformance rules — so different stages run for different teams, severity varies by how mature a team actually is, everyone has to pass security, and it all still rolls up centrally. Which brings the next one.

**Roll-up is the feature, not the linting.** The linting is table stakes. What a large organization is buying is the dashboard: by team, by domain, by line of business, dumped into whatever they already run — OpenTelemetry, Datadog, New Relic, Splunk — because different teams inside the same company are already on different observability stacks and you are not going to change that.

**The document nobody reads is the failure mode of every governance program.** Fifty pages of standards arrive, you are asked to kindly comply, and nobody has the time to ever read it. I ran 260 design reviews and roughly fifteen teams showed up having read the guidelines. What finally worked was inline guidance: for every rule, a short video, a documentation block, and schema hinting in the editor, so the developer hits the rule where they are working and the explanation comes to them. Governance you have to go somewhere and read has already failed. The frustration that remains is distribution — not every team uses the same editor, which makes the pipeline the only surface you can rely on reaching everybody.

**Do not say AI. Say the gate.** The demand I am hearing from enterprises is remarkably specific and completely unglamorous: we are OpenAPI and JSON Schema, everyone is suddenly doing MCP and it is sprawl, we are still figuring out what skills even are, and our rules are scattered. Nobody asked for an agent platform. What they want is for the gate they already have — the conformance scan that runs when you push to the repo, the one developers have complained about for four years and which is still in there — to also cover the new AI surface area, as definable rules and policies that make the security team feel better. That is the whole ask. A vendor who responds to that ask by pitching an agent runtime instead is going to lose a deal they already had.

**Sovereignty is a product feature now, not a political statement.** Where the project lives matters to this audience in a way it did not three years ago. Because the governments involved are European and most of the contributors are too, OpenLint is heading for a European open-source foundation rather than the obvious American home. And a detail that sounds trivial and is not: the JavaScript runtime has to survive the fork, because some of the government tooling built on top of it is browser-based, and a faster implementation in another language does not help them at all. The fast alternative that already exists claims full ruleset compatibility and does not have it — which, for an organization whose national design rules are written in that ruleset, is a blocker, not a nuance.

**Do not promise a roadmap. Hold the call.** The most persuasive fact about this project is not any feature. It is that about fifteen people show up every week — two governments, people who originally built the thing, engineers from two of the largest enterprise software vendors, a consulting group — and have kept showing up through a slow summer of nothing but conversation. In frontier storytelling you get maybe one or two swings before you have to deliver. In big city storytelling you do not get a swing at all; you get evaluated on whether you are still there in six months.

## What Is Actually In The Catalog

The honest numbers again, because they cut both ways.

[apis.io](https://apis.io) currently holds [5,694 rulesets across 3,565 providers](https://apis.io/rules/). That looks like widespread governance adoption. It is not — the overwhelming majority of those rulesets were derived by my own tooling from each provider's observed conventions, stamped as generated, and published on their behalf. Published, provider-authored governance is rare. And the [Contract Governance](https://apis.io/rating/facets/contract-governance/) facet in my own rubric reads what a ruleset *declares*, never the outcome of executing it against the provider's own spec. I wrote that limitation into the rubric text after it was reported as a defect, and I keep it there on purpose.

There is a second use of linting in all of this that I think is underrated, and it is how I actually use it at scale. Across the catalog I do not run rules to govern anything — I run them as a boolean pattern detector. Does this provider have plans? Rate limits? FinOps mapping? OAuth scopes? An agent card? That is how I know there are 9,831 plans, 10,098 rate-limit artifacts, 7,260 FinOps mappings, 2,981 scope artifacts, 2,689 MCP servers, and 1,566 agent skills in the catalog. Once you know which patterns are actually in use across a lifecycle, you can lock them in — and push the same rules downstream into a policy engine at runtime, into a gateway flavor, into a Kubernetes flavor. These are the happy patterns and these are the unhappy ones. That is where a linting project stops being a pipeline tool, and it is the single most common question I get from the runtime side of these organizations.

## Which Kin Score Facets Move

For a rules project aimed at regulated enterprises, the composite weight sits here:

- **[Contract Governance](https://apis.io/rating/facets/contract-governance/) at 12%** — the direct facet. Has the provider written down what good means for their own surface, instead of leaving it to reviewer taste.
- **[Contract Quality](https://apis.io/rating/facets/contract-quality/) at 25%** — the heaviest facet, and the thing rules are pointed at.
- **[Discoverability](https://apis.io/rating/facets/discoverability/) at 10%** — can any of this be found from machine-readable metadata alone.
- **[Operational Transparency](https://apis.io/rating/facets/operational-transparency/) at 13%** — the operational signals rules most often check for and most often fail to find.
- **[Regulatory Posture](https://apis.io/rating/facets/regulatory/) at 15%, conditional** — applied only to regulated industries, which is why industry standards on top of the rules layer keep coming up: health data, open banking, the consumer financial data rule. Every one of those is a ruleset waiting to be written, and none of them should be written twice by every company in the sector.

## And The Agent Readiness Dimensions

Here is the part that makes this urgent rather than merely overdue. Rules were written for a world of OpenAPI documents. The surface a large organization now has to govern is much wider, and every dimension below is a machine-readable artifact that nobody is currently linting:

- **[MCP Server](https://apis.io/rating/dimensions/mcp-server/), 12 points** — the sprawl everyone named to me by name.
- **[Machine-Readable Auth](https://apis.io/rating/dimensions/auth-clarity/), 10 points** and **[Protected Resource Metadata](https://apis.io/rating/dimensions/protected-resource-metadata/)** — how an agent gets in, and whether it can discover that without a human.
- **[A2A Agent Card](https://apis.io/rating/dimensions/agent-card/), 8 points** — a document with real security implications that almost nobody validates.
- **[Stable Error Semantics](https://apis.io/rating/dimensions/error-semantics/), 8 points** and **[Rate-Limit Signaling](https://apis.io/rating/dimensions/rate-limit-signal/), 7 points** — the operational contract an agent needs in order to back off instead of hammering.
- **[Agent Skills](https://apis.io/rating/dimensions/agent-skills/), 5 points** — half YAML and half Markdown, which is exactly the problem: the tool never had Markdown linting, and adding it is near the top of the roadmap.
- **[Well-Known Catalog](https://apis.io/rating/dimensions/well-known-catalog/), 4 points** and **[Registration Without a Human](https://apis.io/rating/dimensions/dynamic-client-registration/)** — discovery and onboarding with no person in the loop.

MCP, agent skills, and A2A are the first three things going into OpenLint after a clean build, ahead of OpenAPI, AsyncAPI, Arazzo and Overlays — not because the older formats matter less, but because they are the three surfaces that large organizations are shipping into production right now with no gate in front of them at all.

Then the second, more interesting move: linting the pipeline itself, not just what flows through it. GitHub Actions, YAML configuration, graded pipeline tiers by team and line of business. I did a version of that across 7,500 pipelines once. It is meta in a way that sounds cute and is actually the thing that scales — you execute the rules in the pipeline, and you lint the pipeline with the same rules.

The fork happens this week. Rules and tools split into two repositories, because the specification has to be able to outlive any single implementation of it — that separation is the whole reason this is worth doing rather than just picking a different tool. If you have real-world needs at the editor level or the pipeline level, that is the feedback I want most right now, and the weekly call is where it gets decided.
