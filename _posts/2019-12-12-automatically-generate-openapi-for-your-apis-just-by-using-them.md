---
published: true
layout: post
title: Automatically Generate OpenAPI For Your APIs Just By Using Them
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/optic_openapi_generation_diff.png
author:
  name: kinlane
tags:
  - OpenAPI
---
I am a big fan of tools that just augment our normal existence then make our lives easier without having to do much additional work. One of the tools that fits into this category is [Optic](https://www.useoptic.com/), an open source tool that will generate OpenAPI definitions from your proxied traffic. [A while back I developed my own script for doing this by processing Charles Proxy files synced with Dropbox](https://apievangelist.com/2015/06/21/parsing-charles-proxy-exports-to-generate-swagger-definitions-while-also-linking-them-to-each-path/), but I never evolved it beyond Swagger when OpenAPI 3.0 was released. So I was pleased to talk with the Optic team at API World in San Jose a while back. Like many notes in my notebook, my thoughts on Optic got buried by the constant flow of conversations and ideas coming in on a daily basis, but a Tweet from them the other day reminded me that I wanted to showcase and talk a little more about what they are up to and why Optic is important to the API sector.

Optic will take your browser, CLI, and Postman API traffic and automatically generate an OpenAPI based upon your API calls that are routed through the Optic proxy. Helping us automate the generation of machine readable API contracts which can then be used across our API operations.  The generation of OpenAPI from the exhaust of our existing work is valuable, but what also grabs my attention is that Optic helps handle the diffs between each OpenAPI generating, which can be used to help you detect changes in APIs that are already in use. As I said, I have had this capability for a while now, and it is something you can do within Postman—turning on a proxy and generating a Postman collection. But, having as a standalone open source open source component that produces OpenAPI contracts as a standalone service is pretty critical for helping us make sense of our API exhaust at scale.

Optic’s core feature is generating OpenAPIs and managing the diff between each OpenAPI that comes in. Optic is also quickly sending signals about moving into other stops along the API life cycle like documentation and testing, which makes sense, but I recommend staying extremely focused on managing API definitions at scale across a large enterprise, and invest in these areas as next steps.

*   **History** - As an enterprise, I want to be able to pay for historic logging of all activity across groups who are delivering API infrastructure.
*   Playback - Allow for the playback of the evolution of a single version, or multiple version of each API definition being identified.
*   **Notifications** - I want robust premium notifications across teams helping ensure each stakeholder gets alerted when changes are detected.
*   **Conversations** - I would like to see a feedback loop baked into the evolution of API definitions, and the discovery of new APIs and changes to existing. 
*   **Schema** - Extraction of schema files from the OpenAPI, and allow for publishing of separate JSON Schema as well as the OpenAPI definition.
*   **Versioning** - Helping manage the versioning of APIs across operations, documenting which versions are still in use, or fading in overall usage.
*   **Git Sync** - Going beyond just the local .api folder of OpenAPIs, publishing to GitHub, GitLab or Bitbucket, and maintaining a catalog of APIs.
*   **Cloud** - I want to be able to proxy all of my cloud logs for AWS, Azure, and Google, and have OpenAPIs generated from across all traffic.
*   **Logs** - I want native NGINX / Apache log file connector for parsing my API traffic and publishing OpenAPI definitions in use across operations.

I think there is probably a significant opportunity for Optic to move into documentation, testing, and other stops along the life cycle, but I think there is bigger opportunity for staying specialized on the auto-generation, diff, merge, fork, versioning, syncing, and evolution of machine readable artifacts (OpenAPI, JSON Schema, and Postman Collections. Staying focused on managing artifacts generated from the API exhaust we generate daily basis will help Optic remain competitive and highly useful to API providers. With OpenAPI as the heartbeat of Optic, every other API service provider can step up to deliver in their respective areas, and Optic can stay hyper focused on solving the growing API contract problem.

We will not convince every API provider of the value in creating OpenAPI definitions for all APIs being developed. Optic recognizes that the average developer is busy doing what they do each day, and if you can just proxy the exhaust from their world, you can automate the generation of API contracts that are already in use. Your organization may not fully see the benefits of going API design first, but you can’t ignore the value of having machine readable contracts, and what they enable when it comes to deployment, management, testing, monitoring, performance, documentation, CLI, iPaaS, security, and many other stops along the API life cycle. Optic is a smart, simple, and straightforward solution to a real world problem every company faces, and I predict that if given a little more investment and resources Optic could be turned into an industrial grade API discovery and awareness tool that helps us automate the mapping of the fast growing API and micro service landscape that exists across every enterprise organization today.