---
published: true
layout: post
title: The Six Quality Bands of the API Evangelist Rating System
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-six-quality-bands-of-the-api-evangelist-rating-system.png
date: 2026-08-18
author: Kin Lane
tags:
  - Ratings
  - API Discovery
  - Machine Readability
  - Quality
  - APIs
---

Every provider in the [API Evangelist Rating System](https://apis.io/rating/) carries a composite quality score from zero to one hundred, but the number by itself is not the useful part. A 61 and a 68 are both "pretty good," and nobody makes a decision on the third significant digit of somebody else's API. What people actually reason about are the bands--the six labeled tiers the score falls into--because a band is a sentence, not a number. It tells you what kind of API you are looking at, what you can expect to already be there, and roughly how far the provider has left to go. So I want to walk through the six bands, what each one means, and the single most important thing about how they were drawn: they are calibrated against the real distribution of the catalog, not picked to make anyone feel good.

At the top is **Exemplar**, seventy and above, and it is deliberately hard to reach--only about six-tenths of one percent of providers are there. An exemplar is reference-quality across every facet at once: a rich contract, published governance, transparent operations, and machine-readable commercial terms, with no single facet dragging. This is not the band you land in by having a great OpenAPI file; it is the band you land in when you have done the boring, complete work everywhere, and it is the one no provider reaches by accident. Below it, **Strong** runs sixty to sixty-nine, about six percent of the catalog. Strong is what excellent-but-human looks like: solid contracts, transparent operations, an easy start, and usually one clear soft spot--most often absent governance or a missing commercial artifact. If you are a well-run API company, this is very likely where you actually sit, and the gap to exemplar is a short list of nameable things.

The middle of the catalog is **Developing**, forty-five to fifty-nine, around twenty-two percent. This is the honest majority of "real" APIs: genuine signal across most facets with visible, nameable gaps. The contract exists but is thin on descriptions or examples, or the portal is good while governance and commercial terms are simply not published. Developing is not a failing grade--it is a provider that has clearly done the work to be usable and has a concrete, un-mysterious set of things left to publish. Below it, **Thin**, thirty to forty-four and the single largest band at thirty percent, is where the machine-readability story starts to break down. A thin provider usually has documentation a human can read but little a machine or an agent can consume without scraping. The API is real; the *artifacts* around it are not yet.

<!-- Kin Score · API Evangelist -->
<p align="center">
  <a href="https://apis.io/providers/stripe/"
     title="Stripe on APIs.io — API discovery and ratings">
    <img src="https://apis.io/badge/stripe/card.svg"
         alt="Stripe Kin Score — API readiness rating by API Evangelist"
         width="340" height="120" loading="lazy">
  </a>
</p>

<p align="center"><em>Stripe sits in the exemplar band. The card is rendered from the live score every time it loads, so if Stripe moves, so does this.</em></p>

The bottom two bands are about presence, not polish. **Emerging**, fifteen to twenty-nine, about twenty-five percent, is more than an index entry but still mostly links rather than artifacts--a portal, a few common links, maybe a spec. I pay special attention to this band because it is the cohort most likely to move a full tier from modest, well-targeted work; these are providers who have started and just need a push in the right direction. And at the floor, **Minimal**, zero to fourteen, about sixteen percent, is an index entry and little else--a description and a link, nothing machine-readable enough for an agent to act on without a human first reading the site.

The thing I want to defend is that uncomfortable shape. It would be trivial to redraw the lines so that most providers land in "strong" and everyone feels validated, and that is exactly what a rating built to sell certificates would do. I drew them the other way, against the actual population, which is why exemplar is a fraction of a percent and why the two largest bands are thin and emerging rather than strong. The bands are a mirror held up to the whole public API realm, and the realm is earlier than the marketing suggests. That honesty is the entire point: a band you can inflate is a band nobody can trust, and the whole reason to put a provider in a tier is so that the tier means something when they climb out of it. You can read the exact ranges, shares, and definitions on the [rating page at APIs.io](https://apis.io/rating/), and see which band any of the roughly nine thousand providers currently sits in.
