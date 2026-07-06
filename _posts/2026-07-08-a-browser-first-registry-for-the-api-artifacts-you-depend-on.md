---
published: true
layout: post
title: A Browser-First Registry for the API Artifacts You Depend On
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-browser-first-registry-for-the-api-artifacts-you-depend-on.png
date: 2026-07-08
author: Kin Lane
tags:
  - API Governance
  - API Commons
  - Discovery
  - APIs.json
  - OpenAPI
  - Registry
  - Tools
---
Yesterday I kicked off this run through the [API Commons tools](https://apicommons.org/tools/) with a validator you keep open in a tab, and today I want to keep the daily thread going with the tool I reach for one step earlier — before you are governing a document, you have to find the documents in the first place. That is [API Discovery](https://discovery.apicommons.org), a browser-first registry for the API artifacts you depend on. It runs entirely in the page, your keys stay in `localStorage`, and nothing gets uploaded to somebody else's server to make it work.

The idea underneath it is one I have argued for years and finally have a tool to match: API catalogs are relative to domains, teams, categories, and purposes, and they are ephemeral and ever-changing, not static central registries somebody blesses once and forgets. So API Discovery lets you build [APIs.json indexes](https://apis.io) and capability artifacts for any purpose — a team, a domain, a project, an agent — out of one shared pool of discovered artifacts. Regenerate them from their recipes, let them go stale, throw them away, make new ones. You federate catalogs with a catalog-of-catalogs instead of pretending you can centralize the whole mess.

The flow is straightforward once you see it. You discover into the pool by searching or scanning APIs.io, GitHub, GitLab, Bitbucket, SwaggerHub, and Postman — sources light up as you add keys, across eleven artifact types including OpenAPI, AsyncAPI, Arazzo, MCP, and agent skills. You can also drop in HAR traffic captures, which get synthesized into evidence-based OpenAPI, or import a bundle from the enterprise helper CLI that pulls from Backstage, Apigee, Azure APIM, MuleSoft, AWS, Kong, Tyk, Kubernetes, and Kafka. Then you compose named, purpose-scoped views over that pool — type an intent like "everything payments" and a small embedding model running right in your browser semantic-matches the pool for you. The same artifact can live in many catalogs, and deleting a catalog deletes nothing from the pool.

What makes it feel honest to me is that every composed catalog carries its recipe as `x-recipe` in the export and can be rebuilt against live sources anytime, with freshness badges treated as a first-class thing — a catalog is a build artifact, not a database you have to keep hand-tending. Inside any catalog you can cluster members into named business capabilities, pick canonicals, and ship the capability map as `x-capabilities`. When you are ready you download any catalog as APIs.json, commit or PR it straight to a repo, and export a catalog of catalogs that links every purpose-built index together.

API Discovery stops right there, at cataloging — governance and deep linting stay over in the [validator](https://validator.apicommons.org) from yesterday, and judging how reusable your APIs actually are lives in [API Reusability](https://reusability.apicommons.org). That separation is deliberate; each tool does one job you can pick up on its own. This is the second of the API Commons tools I am writing up this week. Go [try it](https://discovery.apicommons.org), load the demo org or one of the fifty-plus real provider sets, and watch the same artifacts show up in more than one catalog at once — that is the whole point.
