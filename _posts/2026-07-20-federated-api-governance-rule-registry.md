---
published: true
layout: post
title: A Federated API Governance Rule Registry
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/federated-api-governance-rule-registry.png
date: 2026-07-20
author: Kin Lane
tags:
  - API Governance
  - Spectral
  - Governance
  - Standards
  - Digital Government
  - API Commons
  - OAuth
---
While I was in Munich for APIDays recently I got to MC a talk from a group working on improving the standardization, adoption, and sharing of OAuth scopes across German government APIs. They had a whole stack of standards and approaches for driving consistency across many disparate teams, but it was their approach to federating OAuth scopes—technically, but also driving the discussion and the politics around it—that has really left me thinking. Not just about security, authentication, and authorization, but about the wider world of API governance.

The program is called the **Föderale API-Autorisierungsinfrastruktur** (FAAI, the Federal API Authorization Infrastructure), and the thing I keep coming back to is not any single spec they picked. It is *how they decided to split the problem, and who they let decide what.* Their guiding principle is "profile, don't invent"—nothing gets a homegrown extension when an open standard already covers it, and if the administration truly needs something new, you take it to a standards body rather than quietly forking. On scopes specifically, they made a deliberate call: coarse-grained permissions live centrally at the platform level, and fine-grained permissions are decentralized down into the domain federations they call **Fachverbünde**. The center holds a small, stable, accountable baseline. The domains own the detail that only they understand.

That is the part that mapped straight onto my own scar tissue.

## The rule that could not survive contact with a domain

During my time standing up API governance at Bloomberg, one of my biggest challenges was standardizing, applying, communicating, and evolving Spectral rules across domains. I would write a rule for versioning, set the severity to `warn`, and commence doing API reviews across teams. Inevitably a team would come back and say: *we can't comply with that rule, because we've always done it this way, and we have multiple APIs in production with that pattern.* Other teams would be completely fine with it.

After six months it was obvious that every single rule was going to need variations by domain in some situations, was going to need its own communication and storytelling, and was going to need its own versioning and roadmap. A rule is not a line in a config file. A rule is a small negotiated agreement between the center and a domain about why a particular API pattern matters—and that agreement changes as teams, products, and customers change.

A central rules registry in Git and NPM is always a must-have for any enterprise. But depending on the culture of the enterprise—its domains, its lines of business, its teams and tribes—you will also need a *federated* approach to defining Spectral rules, setting severity, establishing guidance and guardrails, and letting domains keep their own catalog of rules. There has to be a flow of rules via commits and pull requests, centrally but also outward, along with the federation and centralization of the conversations, communication, and storytelling around each individual rule and why the pattern it governs actually matters. That last part is what makes the change stick across teams.

## What the German model actually federates

Here is the fingerprint worth stealing. The Germans do not just federate the *runtime*—they federate the *decisions*, and they do it in the open. The whole thing is authored as open-source deliverables on their public-sector Git platform, Open CoDE. Every consequential choice is written up as an ADR (an Architecture Decision Record, in MADR markdown), recording the options they weighed and *why the alternatives lost*. There were twenty-three of them, plus seventeen architecture principles. The requirements catalog itself was collected as Git issues, and there was a public consultation that anyone could comment on before the specs were made binding.

And there is a governance body sitting over all of it. The **IT-Planungsrat**—the council with all sixteen states and the federal government at the table—formally steers and approves it by numbered decision, while **FITKO** does the day-to-day architecture and stewardship. They even separated "approve the specs" from "figure out how to actually mandate them," handing the second job to a dedicated project group with timelines, exemptions, and transition periods. Two tiers of severity, grounded in published attacker models. MUST, SHOULD, and MAY interpreted against a formal keyword standard—which is exactly the `error` / `warn` / `info` ladder any of us set in a Spectral ruleset.

My favorite of their principles is this one: **"trust is based on protocols and processes, not institutions."** Design as if even an authority might misbehave. That is a governance stance, not a security one, and it is the whole ballgame for a federated rule registry. You do not get compliance by decree from the center. You get it from provenance, from a visible paper trail of *why*, and from stewards who show up.

## This is the ongoing work

Git and NPM are the essential underlying transport for all of this. JSON and YAML rules, in centralized and federated repos, are what make it work. Using GitHub issues to drive the conversation, and syndicating out to Slack, Teams, and email for wider education and communication, is not a nice-to-have—it is the substance of the job. Baking a ruleset into your CI/CD pipeline is only the beginning. If you do not have a centralized registry that allows for *federated* evolution, application, and communication, the system will break down and start to work against you. Your domains, lines of business, and teams will change over time, and your API governance has to follow suit.

Teams need the autonomy that matters to their products and their customers. But there also has to be a centralized function that delivers a baseline of governance—the rules and the guidance—with observability across all of it. API governance is not static and fixed. It is codified in rules and pipelines, yes, but it has to reflect what teams and their customers actually need. A single rules registry will not do it. It needs to be centralized *and* federated. It needs to blend with existing processes and developer workflows. It needs communication and storytelling, with named stewards of the rules, the registries, and the guidance.

API governance is much more than just the rules. Make sure it has the people part of the equation, and that it is evolving to match the velocity of your organization and your teams.

## A tool to model it

To make this concrete—and to keep myself honest—I built a small, free tool over at API Commons for it: [**Rule Federation**](https://federation.apicommons.org). You give it a machine-readable model of a central baseline ruleset and the domains that adopt it, and it shows you the federation as a matrix: which domains inherit a rule as-is, which override its severity and *why*, which have waived or deferred it, and which have grown a local rule the center should think about promoting. It flags the contested rules that everybody is fighting (a sign the rule needs a variation, or better storytelling), the rules with no steward, and the ones with no rationale or linked conversation attached. It runs entirely in your browser, and the whole model is a single JSON file you can fork and PR—because a federated rule registry should live in Git like everything else.

It is a model, not a mandate. Which, if the folks in Munich are right, is exactly the point.
