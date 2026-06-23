---
published: true
layout: post
title: Git Is Your Governance Source of Truth
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/git-is-your-governance-source-of-truth.png
date: 2026-06-30
author: Kin Lane
tags:
  - API Governance
  - Git
  - GitOps
  - OpenAPI
  - APIs
---
Here is a hill I will happily die on: treat your governance artifacts as code, and put all of them in Git. Your OpenAPI specs, your JSON Schemas, your policies, your Spectral rules — every one of those is a versioned artifact that belongs in a repository, managed exactly the way you manage code. When I ran a serious governance program, the entire policy library lived as YAML in GitHub, published out with a static site generator, with issues as the inbox for candidate policies. This genuinely confounded some of my colleagues who came from a database paradigm and expected governance to live in an application with a UI and a backend. It was, without question, the right call, and I'd make it again every time.

The reason this works so well is that Git solves the first leg of the moving-target problem outright. I keep coming back to the idea that an API is a moving target across three dimensions — location, version, and stakeholders — and that governance fails when you can't pin those down. Git nails location dead to rights. Where is the canonical copy of this spec? It is the one in the repository on the default branch. Full stop, no ambiguity, no "well, Dave has a newer version in a Slack thread somewhere." The single most common reason governance feels futile is that people are linting a spec they can't even reliably locate, and source control makes that problem disappear by definition.

But location is just the start of what you get for free. Git hands you versioning, full history, blame, branching, pull requests, and review — and every single one of those is a governance primitive you would otherwise have to go build from scratch in some bespoke tool. Pull requests become your design reviews, with the diff right there showing exactly what changed in the contract. Issues become your policy backlog, the place candidate policies go to wait their turn. Branch protection becomes your enforcement gate, the thing that won't let an ungoverned change merge. The commit history becomes your change-management record, an auditable trail of how a contract evolved and who touched it. You inherit an enormous amount of governance machinery simply by deciding that contracts and the rules that govern them are versioned artifacts that live where your code already lives.

This is what people mean, or should mean, when they say GitOps for APIs. The platform repository becomes the source of truth, and it syncs outward to your design tools and your gateway and back. The flow of authority runs through the repo. Whether you're on GitHub or GitLab genuinely does not matter — the vendor is interchangeable, the discipline is not. What matters is the decision that there is one canonical place where the governed artifacts live, that changes to them go through review, and that the history is preserved. That decision is worth more than any specific feature of any specific platform.

I'll be honest that this approach asks something of the people who aren't used to it. The folks who come from databases and admin UIs sometimes find it genuinely alien to manage governance as a pile of YAML in a repo, and you'll spend real effort bringing them along. Do it anyway. The alternative — governance artifacts scattered across wikis, spreadsheets, a vendor tool, and a few people's laptops — is exactly the unlocatable, unversioned chaos that makes governance impossible in the first place. Put it in Git. Make the repo the source of truth. Let pull requests and issues and branch protection do the work they're already good at. You'll have solved a third of the moving-target problem before you've written a single new rule.
