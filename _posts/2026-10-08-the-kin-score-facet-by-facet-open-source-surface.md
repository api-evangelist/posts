---
published: true
layout: post
title: 'The Kin Score, Facet By Facet: Open Source Surface'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-kin-score-facet-by-facet-open-source-surface.png
date: 2026-10-08
author: Kin Lane
tags:
  - Kin Score
  - Open Source
  - Security
  - Maintainership
  - Rubric
  - APIs.io
  - APIs
---
This is part eight of nine in a series walking through the [Kin Score](https://apis.io/rating/) one facet a business day. Yesterday I covered [Create-or-Update Ergonomics](https://apievangelist.com/2026/10/07/the-kin-score-facet-by-facet-create-or-update-ergonomics/), the first of the conditional facets. Today is the second one, [Open Source Surface](https://apis.io/rating/facets/open-source/), and it asks one question: if your product is itself open source, does its repository publish what someone needs before they depend on it?

## Why this facet exists at all

It came in with 0.11.0 in August. Open-source providers were being measured against a surface they do not have: no pricing page, no SLA. The obvious fix was to exempt them. I measured that and rejected it. Exemption shrinks the denominator and strips a provider of points it does earn, and it cost WSO2 a band. Exemption treats a difference as an absence.

So nothing was removed. A facet was added, scoring what an open-source project actually publishes, on the same standard as everyone else. It is worth 10% of the composite, but only where it applies. Everywhere else it is not scored at all, and nobody is penalized for it. A company with no CONTRIBUTING.md is not deficient. It is differently shaped.

## What it measures

Four checks, 40 points, all read live from the provider's own product repository:

- **A published vulnerability-disclosure path, 14 points.** A SECURITY policy. This is where an integrator reports a vulnerability in the thing they just put into production. It was the rarest of the four when the facet shipped, at 35.0%, and it most directly affects a consumer, so it carries the most points.
- **A documented contribution route, 10 points.** A CONTRIBUTING guide. Is the project actually open to participation, or just published?
- **A published release history, 10 points.** Versioned, dated releases. The commonest of the four, but it tells you far more about whether a project is maintained than anything else here.
- **A stated code of conduct, 6 points.** Priced lowest because it is the most template-prone signal in the set. It gets dropped in wholesale, so it says the least about the project that holds it.

Two design choices matter more than the points. First, this facet reads the live GitHub harvest, never the pointers we wire into a provider's record. A pointer records that *we* did something. The harvest records that the *provider* published something. When I checked, 647 of the first 1,151 evidence records had been reconstructed from pointers, and they disagreed with a live read systematically, so all 647 were re-harvested before the facet shipped. Second, unreadable is not missing. If I could not read the repository, the provider drops out of the facet rather than scoring zero. An open-source zero means I looked and it was not there.

## I had to tighten who it applies to

In 0.18.2, at the start of September, I found the facet applying to companies it was never meant for. The gate only required a live read of *some* repository, so Apigee scored 85.0 on a CLI for a closed Google Cloud platform, and Azure API Management scored 100.0 on a gateway component of a closed SaaS. Now the facet applies only where the provider's published delivery model says `open_source: true`. Roughly 446 providers went N/A, not zero, and the facet left their composite entirely. Apigee's current 0.23.0 record carries no open-source block at all, which is correct.

## Where the catalog stands

On the 0.23.0 provider pages, 739 providers are scored on this facet, 2.7% of the catalog. The mean sub-score is 57.8 and the median 60.0. 60 providers, 8.1%, score exactly zero, and 250 score 75 or better. Nothing in 0.23 changed the four checks or their points.

That puts it at the top of the rubric alongside discoverability, well clear of every other facet, and I want to be honest about why. The population is self-selecting. These are projects that live on GitHub, and GitHub nudges every one of them toward the same four files. A high mean here does not say open source is better run than commercial APIs. It says the maintainership surface is cheap to publish and well understood.

[Svix](https://apis.io/providers/svix/) scores 100.0 on the facet with a 76.7 composite, and [Gitea](https://apis.io/providers/gitea/) 100.0 with 72.5. Both are exemplar, and neither got there on this facet alone.

What the numbers cannot tell you: whether a security policy is answered, or whether releases are signed. Presence is what I can measure today. It is a floor.

## The bigger picture

The security policy is the check I care most about, and 0.23 gave it more company. The [London release](https://apievangelist.com/2026/09/28/kin-score-0-23-the-london-release/) added a horizontal regulatory regime that applies wherever no sector matches, and the Cyber Resilience Act is on its list. The way I read that law, someone has to be accountable for the software that ships, dependencies included. When your product is open source, the people depending on it need to know where a vulnerability goes. A SECURITY file is the smallest answer to that, and when this facet shipped, only 35.0% of the repositories I read had one.

For agents, this facet does not feed agent readiness directly. But an agent choosing a dependency has the same questions a developer does, and a release history and a disclosure path are machine-readable answers to them.

There is also an open question on the [roadmap](https://github.com/api-evangelist/kin-score/blob/main/ROADMAP.md): whether a declared `GitHubRepository` pointer should feed this facet, rather than being ignored while the facet harvests the same fact independently. For now it stays unread by design, because reading it would score my wiring.

## What to do

If your product is open source:

1. **Publish a SECURITY.md** on the product repository, with a real reporting route. It is 14 of the 40 points and the one a consumer needs most.
2. **Cut real releases**, versioned and dated, not just tags nobody can find.
3. **Write a CONTRIBUTING guide** that describes how you actually accept changes.
4. **Make sure your delivery model says open source**, and that the repository we read is the product, not a CLI or an SDK beside it.
5. **Add a code of conduct last.** It is worth the least, and a template is fine.

Every check, and who is scoring what, is on the [Open Source Surface page](https://apis.io/rating/facets/open-source/).

Tomorrow: Regulatory Posture, the last facet in the series.
