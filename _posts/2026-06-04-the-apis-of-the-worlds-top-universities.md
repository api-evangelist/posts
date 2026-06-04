---
published: false
layout: post
title: "The APIs of the World's Top Universities — 634 of Them, and Most Are Library Plumbing"
date: 2026-06-04
author: "Kin Lane"
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/john-wayne-the-searchers-aov6mV1n7VGeQ.jpg
category: "Blog"
tags:
 - Universities
 - Higher Education
 - APIs
 - OAI-PMH
 - Open Access
 - Research Data
 - Institutional Repository
 - Developer Portals
 - API Discovery
 - Education
excerpt: "I profiled the API surface of 219 of the world's top-ranked universities — the QS 2025 set — and found 634 APIs across 40 countries. The headline isn't the count. It is that 84% of these schools expose an API only because their library runs an institutional repository that speaks OAI-PMH, and just 16% run anything resembling a real developer program. The world's best universities have an enormous amount of structured data and almost no front door to it."
---

I pulled the API surface for 219 of the world's top-ranked universities — the QS World University Rankings 2025 set that I built into the API Evangelist network — and went looking for the interesting stuff. Which schools publish the most? Which countries show up? And what kind of APIs do universities actually have?

The answer to that last question reframes the whole exercise. Across those 219 schools I cataloged **634 APIs spanning 40 countries**, and the overwhelming majority of them exist for one reason: the university library runs an institutional repository, and that repository speaks OAI-PMH. **84% of these universities (185 of 219) expose a repository or OAI-PMH style API. Only 16% (35 of 219) run anything that looks like a modern developer program** — a portal, OAuth, a gateway, an open-data API. The world's best universities are sitting on an enormous amount of structured data and have almost no front door to it.

## Where the universities are

Europe dominates the profiled set, which tracks with how QS weights its rankings:

| Region | Universities |
| --- | --- |
| Europe | 88 |
| North America | 51 |
| Asia | 40 |
| Oceania | 21 |
| Middle East | 7 |
| South America | 2 |
| Africa | 1 |

By country, the United States leads with 39, then the United Kingdom (27), Australia (16), Germany (12), Canada and the Netherlands (11 each), China and Japan (9 each), and Switzerland (7). Australia massively over-indexes for its size — sixteen schools — and the Netherlands punching at eleven is a reminder that the Dutch have treated research data as public infrastructure for a long time.

## What a "university API" actually is

Here are the most common API tags across all 634 APIs. Read this list top to bottom and the story tells itself:

- **Repository (205), OAI-PMH (205)** — the Open Archives Initiative Protocol for Metadata Harvesting. This is the plumbing search engines and aggregators use to harvest a library's catalog.
- **Research (185), Metadata (170), Open Access (148), Open Data (142)**
- **Library (135), Research Data (98)**
- **REST (84)** — only now do we get to the thing most people mean when they say "API."
- **DSpace (76), Institutional Repository (60), EPrints (28), Dataverse (24), Pure (21), Figshare (19)** — the repository platforms themselves.
- **Identity (68), Authentication (66), SSO (47), Shibboleth (30), SAML (30)** — campus single sign-on, mostly federated through the academic identity systems.
- **Education (51), Courses (33)** — course catalogs and timetables.

So the typical "API" at a top university is not a developer product. It is a metadata harvesting endpoint that a librarian stood up — or more likely that came bundled with DSpace, EPrints, Figshare, Dataverse, or Pure — exposing the institution's research output to the world. That is genuinely valuable, machine-readable, and open. It is also almost never documented, versioned, or framed as something a developer should build on.

## The schools doing the most

Counting raw API surface, here are the leaders:

| APIs | University | Country |
| --- | --- | --- |
| 8 | UCL (University College London) | United Kingdom |
| 8 | University of California, Santa Barbara | United States |
| 6 | ETH Zurich | Switzerland |
| 6 | University of Pennsylvania | United States |
| 6 | UCLA | United States |
| 6 | KU Leuven | Belgium |
| 6 | Shanghai Jiao Tong University | China |
| 6 | University of Padua | Italy |

What separates the top of this list is that a few of these schools went past the repository and built a real developer surface.

**UCL** is the clearest example of a university that operates like an API provider. Its [UCL API](https://uclapi.com) program publishes Room Bookings, Timetable, Search, Workspaces, and Resources endpoints behind a proper OAuth flow — built largely by and for students, but a legitimate developer portal. That is what a university developer program looks like, and almost nobody else has one.

**University of Pennsylvania** is the other standout: a Penn OpenData API, official Penn SDKs in Python and Node, a Penn Courses (PCX) API, and a Penn Course Review API. Again, much of this grew out of student developer culture, but the result is a usable, SDK-backed surface.

**UC Berkeley** is the institutional version of the same idea — "API Central," an actual developer portal, sitting in front of a UC Berkeley API Gateway, plus the eScholarship repository and Alma/Primo library integrations underneath.

## The interesting corners

The fun is in the outliers — the APIs that aren't just another repository harvest endpoint:

- **Caltech** exposes the **IRSA Virtual Observatory APIs** through IPAC — astronomy data infrastructure, which is exactly the kind of thing you hope a place like Caltech puts on the open web.
- **ETH Zurich** has the most interesting *library* surface of the bunch: a Geo Information API, a Persons API, a Vector API, and ETHorama alongside the expected Research Collection — the Swiss treating the library as a data platform.
- **Shanghai Jiao Tong University** publishes a **Data Resources GraphQL API** — the only GraphQL surface I saw in the entire set, and notable for coming out of mainland China.
- **EPFL** runs a **Memento Events API** — campus events as a feed.
- **Columbia** exposes a **CU Directory of Classes**, and **NUS** has the community-built **NUSMods API** (unofficial, but the most-used student API in Singapore).

And the repository platforms read like a who's-who of scholarly infrastructure: DSpace at NUS (ScholarBank), EPrints at Southampton (which is fitting — EPrints was born at Southampton), Figshare at the University of Hong Kong, Dataverse at NTU, Pure at Edinburgh, and Alma/Primo at Berkeley.

## What this tells me

Universities are not behind on APIs in the way most enterprises are. They are behind in a *different* way. A Fortune 1000 company usually has the developer program and is missing the open data. The top universities have the open data — enormous, structured, machine-readable research output — and are missing the developer program. The data is already there, already public, already speaking a standard protocol. What is almost entirely absent is the front door: documentation, a portal, OAuth where it is needed, and the basic acknowledgment that the OAI-PMH endpoint a librarian configured a decade ago is, in fact, an API that someone could build on.

The schools at the top of my count — UCL, Penn, Berkeley — figured this out, and in every case it was the institution choosing to treat its data like a product. The other 184 are one developer portal away from being genuinely useful to the outside world. The plumbing is already in the walls.

*Profiled from the QS World University Rankings 2025 set in the API Evangelist network. Counts reflect what I have cataloged, not necessarily every API each school operates; a handful of entries (like NUSMods) are community-built rather than official, and are flagged as such in the profiles.*
