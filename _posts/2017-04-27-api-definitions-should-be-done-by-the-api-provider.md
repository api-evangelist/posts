---
layout: post
title: API Definitions Should Be Done By The API Provider
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-puzzle-piece-gear.png
atomdate: 2017-04-27T18:00:00.000Z
tags:
  - Definitions
  - Definition
---
I talk to a lot of API service and tooling providers about API definitions. I've long been an advocate for API service providers supporting OpenAPI, as well as a variety of API definition formats--if you are having trouble doing this, check out [API Transformer](https://apimatic.io/transformer). While service providers are an important link in the API definition chain, support of API specification by API providers themselves, and the availability of definitions for all of their APIs is another very critical link in this API supply chain.

During a discussion with an iPaaS provider this week about the availability of OpenAPI definitions, a comment was made about there not being enough good sources of usable definitions, specifically from API providers themselves. While it is true, and there is not as much adoption by leading API providers as I would like to see, it still is pretty easy to find numerous proactive efforts by APIs providers like [SendGrid](https://github.com/sendgrid/sendgrid-oai), [NY Times](https://github.com/NYTimes/public_api_specs), and [Azure](https://github.com/Azure/azure-rest-api-specs)\-- just to name a few. Of course, I want ALL API providers to maintain an accurate, comprehensive set of API definitions for the operations, but I don't think is the reality we live in, or even where all API definition creation should occur.

It is part of the API DNA for the lion share of the innovation to come from external sources. Sure, I think every API provider would be better off if they maintained their own OpenAPI, generating documentation, code, and other resources. But, I also think it is perfectly acceptable for the community to do some of this heavy lifting. Not all API providers are going to have the skills, time, and other resources to make this happen--often times this is precisely why they are doing APIs, to outsource, and share the innovation load.

I see API [definitions](http://definitions.apievangelist.com) and [discovery](http://discovery.apievangelist.com) as a community thing, something API providers, consumers, as well as API service providers should all be contributing to. No matter where you operate in the space, you should be sharing your API definitions using Github, even if they are for the 3rd party API providers you depend on and might seem duplicative. You never know when your definition might have a piece of the puzzle, another developer is looking for, allowing them to build on top of your existing work, and vice versa. When you define your APIs out in the open like this, we all win, because API definitions benefit the API provider, consumer, services, and tooling developers.