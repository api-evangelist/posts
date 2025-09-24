---
published: true
layout: post
title: Trust is the Secret Ingredient Missing in API Discovery
date: 2025-09-24T09:00:00.000Z
tags:
  - Discovery
  - Search
  - OpenAPI
  - AsyncAPI
  - Trust
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-docks-ships-cranes.jpg
---
There is lots of renewed energy around API discovery latetly, but this round is in service of Agentic AI automation. There is a lot of speculation surrounding Anthropic’s release of an MCP Registry, and how it can once and for all solve this pesky problem. Bruno Pedro’s newsletter recently has been dedicated to this subject, exploring what an OpenAPI registry can bring to the table, and even the role APIs.json plays or doesn’t play in the conversation. He said something at the top of his latest issue about the importance of an OpenAPI registry that gets at the heart of why we haven’t cracked this one for me.

“It's because I can't trust any of those places enough to accept that their results are the best match for what I need.”

This isn’t a technical thing. This is a business and politics thing. This is an in the eye of the beholder thing. This is a markets working things out thing. I am all for there being an OpenAPI registry, as you could “trust” it more than you can “trust” the Postman Network or other startup owned MCP registry. I agree with Bruno that trust is the issue, although I am less convinced that there is enough trust with the OpenAPI Initiative to move this needle forward. I know how the OAI works, and have deeply experienced how enterprises and startups view the OAI. My skepticism doesn’t mean we shouldn’t try. We should. We must. 

Trust is relative. Trust is in the eye of the beholder. There are very few OpenAPIs produced and maintained by API providers that I trust. There are very few Postman Collections in the Postman network that I trust. Hell, there are very few of the OpenAPIs and Postman Collections I maintain that I trust. I know better. In my opinion, we’ll have to demonstrate completeness, accuracy, and usefulness in each given moment where an API, worklow, or capability is discovered, downloaded, and executed. This will be an ongoing and perpetual exercise that has to be frictionless and something any registry, catalog, or search engine must provide out of the box. This is the only way that you will build trust incrementally with API consumers over time. This trust has to be built over time and in cycles that are longer than any single investment trend.

I trust OpenAPI because I trust Tony Tam, Ron Ratovsky, Darrel Miller, Lorna Mitchell, and others who have contributed. I trust Arazzo because I trust Frank Kilcommons, Nick Denny, Jeremy Fiel, and others who have contributed to the contributed. I trust OpenAPI way more than I trust Arazzo, because I trust I’ve done the work to understand the specification and apply across thousands of APIs. Similarly I trust AsyncAPI because I trust Fran Mendez and Lukasz Gornicki’, and others contributions to the specification. I guess my point is that catalogs, hubs, registries, networks, search engines, and other incarnations of API discovery tooling won’t be enough. Open-source tooling won’t be enough. All those dead catalogs and registries on the open web and within the enterprise are a testament to this. We have to trust each of the specifications (1), as well as any implementation of a specification to describe a specific API or API workflow (2), as well as any place we discover those API or workflow definitions(3) -- three very serparate layers. These are three very easy places to break and lost trust within the enterprise, but also on the open web. How are we going to maintain this trust beyond the immediate investment cycle? The bigger question is--how do we build this trust and maintain it with business stakeholders?