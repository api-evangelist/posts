---
published: true
layout: post
title: API Discovery Will Need To Be Contextual and Ephemeral
date: 2025-11-13T09:00:00.000Z
tags:
 - Discovery
 - Search
 - Registries
 - Catalogs
 - Workspaces
 - Sandboxes
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/leaflets-of-the-russian-revolution-cell-tower-close.jpeg
---
I’ve learned over my career that there is no single source of truth for APIs. I’ve been looking for it for 15 years. It’s a mirage—“free beer tomorrow.” I’ve spent a long time studying why ProgrammableWeb and other API catalogs eventually shuttered. [Bruno Pedro is right](https://apichangelog.substack.com/p/the-openapi-registry) that the Postman Network is one of the more successful representations of API discovery, but even it leaves significant gaps. The workspace model for partner, private, and public views works well, but the uneven quality of APIs, the limitations of search, and other issues leave a lot on the table.

I believe a central API catalog—curated, semantically rich, and well-maintained—is essential for API discovery, both before teams build new APIs and as new applications are developed. This catalog can be public or private, and scoped to the domains where APIs operate. It should document internal, first-party, and third-party APIs. And it requires dedicated people and consistent investment, while also distributing responsibility across API owners and other stakeholders.

I’ve also come to believe that we need complementary, more ephemeral API discovery spaces—workspaces, repos, catalogs—where evidence of API activity from gateways, logs, pipelines, clients, SDKs, and other operational exhaust can accumulate. These catalogs will rarely be complete and will require constant enrichment. They will be messy, dynamic, and reflect APIs at different maturity levels. Our catalogs will need maturity ratings, federation, and flexibility. Microcks’ vision points in this direction.

<a href="https://microcks.io/documentation/explanations/deployment-topologies/"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/microcks/microcks-organization.png"></a>

[I like Microcks’ scopes—local, domain, use case, and company](https://microcks.io/documentation/explanations/deployment-topologies/)—but I think reality will be even messier, and that’s fine. Testing and mocking should sit at the frontline of these catalogs, anchoring how we evaluate API quality and how we assess the readiness of our discovery repositories, catalogs, and workspaces. There is no perfect state and no single source of truth. API state is contextual, relative, ephemeral, and always evolving. Our catalogs should be regularly torn down and rebuilt, with testing and mocking as the default mode, shifting API discovery “right” and ensuring value and maturity accrue over time.

My views on API discovery have evolved through my work with ProgrammableWeb, APIs.io, the Postman Network, mapping the internal API landscape at Bloomberg, and slow-rolling an understanding across thousands of public and private repos in the API Evangelist GitHub organization. I feel closer now to my actual vision for what API discovery should be. API discovery must maintain an ongoing tension between domain and context—this is the balance; this is the way. We all want to architect, standardize, and vendor-solution our way to a single source of truth that solves API discovery, but the world is richer and more varied than that. We should embrace that variety. “Sprawl” is an accurate term for what we have, but with just a bit of domain organization, spec standardization, GitOps, testing, and mocking, we can get to a much better place very quickly.