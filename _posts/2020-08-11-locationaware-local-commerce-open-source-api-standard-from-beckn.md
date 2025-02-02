---
published: true
layout: post
title: Location-Aware Local Commerce Open Source API Standard From Beckn
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_08_11_at_9.51.17_pm.png
author:
  name: kinlane
tags:
  - Commerce
  - Standards
---
I am working on profiling open specifications as part my work at Postman to help highlight how we can deploy APIs that use a common API and schema, reduce friction when on-boarding, while also increasing reusability across different industries. One of the open specifications on the table is from [Beckn](https://beckn.org/), who offers a suite of open source API specifications for things like food delivery, healthcare, and transportation--here is the description from the Beckn website describing the value they deliver.

_Beckn is an open protocol that enables location-aware, local commerce across industries to be discovered and engaged by any beckn-enabled application. Beckn, while being a minimal open source protocol specification, acts as a force multiplier for end-beneficiaries - customers, application developers, governments, and businesses by creating an interoperable open playground to unlock value and innovation_

I love to see these kinds of projects. My concern is always heldping ensure they get enough adoption to help sustain them, and contribute by helping evangelize the possibilities, which is why I am writing this post as I am working with the Beckn team to get the word out about their standard. To help push forward the conversation forward around the [Beckn APIs](https://developers.beckn.org/) I need Postman collections for the platform, or even better…OpenAPI definitions so that I can generate Postman collection—luckily Beckn is [developing their API protocol out in the open on GitHub using OpenAPI](https://github.com/beckn/protocol-specifications), making my job easy. 

To help me move things forward I created a workspace in Postman dedicated to Beckn, then I took five of their OpenAPI definitions and published to the workspace, allowing me to use Postman to manage the collections and resulting docs, mocks, and eventually tests for the APIs.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_builder.png)

Right now I am just interested in helping the Beckn team better understand how they can manage their OpenAPI definitions using Postman, then [sync the definition for each API bck to the GitHub repo they have setup](https://github.com/beckn/protocol-specifications). Then they can generate collections from the OpenAPI contract for each API. Right now I am just looking to publish documentation for each API, so I am going to generate a collection to use as the base for docs.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_generate.png)

I repeat this process for each of the five API, producing five separate collections, which I can then publish documentation using Postman, resulting in a robust set of docs that can be used by Beckn, or by API providers and consumers. Going a little further than the current API documentation does, showcasing what is possible with the platform.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_08_11_at_9.51.17_pm.png)

While there are a many more benefits of managing your APIs using the Postman platform, here are a few of the benefits that are exclusive just to API documentation:

*   **Consistent Layout** \- Postman documentation provides a consistent single or double pane layout.
*   **Examples** - Each API method can now have one or more examples, which show in docs, but also mocks.
*   **Code Snippets** \- Each API method now as client snippets a variety of programming languages.
*   **Environments** - Provide environments for each API, abstracting away variables for auth and other purposes.
*   **Run in Postman Button** - Each API now has a button for developers to instantly begin using in their Postman.
*   **Network** - Each collection can also be published into the Postman network making it available for discovery. 

I am publishing this post to help convince the Beckn team to import their OpenAPIs under their Postman team, generate their own collections, then publish each API to the [Postman Network](https://explore.postman.com/). I leave it to Beckn to decide if they use Postman documentation as part of their developer portal, but it will help developers on-board with the API protocol quicker if it is available as a collection that can be shared and imported by any developer. Plus, if the collection are available in the Postman Network, the protocol is discoverable by 12 million developers via the Postman platform.

### Personal Beckn API Sandboxes with Postman Mocks

Having Postman collection in the Postman network for the Beckn protocol will help it become more discoverable. Having Postman generated documentation will add more value with examples, code snippets, and environments. Having a run in Postman button available for each API all help reduce friction for developers when learning about the spec. However, if each collection possesses examples for each method, they can also be mocked using Postman, as easily as publishing documentation was, by clicking on the menu for each collection, and choosing to publish as mock servers.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_mock.png)

Postman will take the collection and generate a static mock server for each method, using each request body example, and response body example as part of the mocked experience. Leaving you with a URL you can then use to actually make calls to the API.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_mock_url.png)

I can take this URL and add it to an environment, abstracting away the baseURL so we can generate multiple mock servers, or eventually replace with development, staging, and production environments—helping make the Beckn collections more versatile using Postman environments.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_environment.png)

Beckn can also publish the environment along with documentation, removing any mock URL, and allowing API providers and consumers to replace with their own. This essentially turns each Beckn API collection into a portal sandbox, making learning about the protocol a hands on experience for developers. Allowing API providers and consumers to be able to play with responses and learn how everything works. A mocked representation of the Beckn APIs that can actually be used to begin mocking and developing applications as part of a hackathon, prototyping, or actually kicking off the development process.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_call.png)

### More Work to Be Done

This is just the beginning. There is a lot more we can do, but this will help augment the existing Beckn OpenAPI definitions with Postman collections that can be imported into Postman with one click, and then mocked and making requests to the mock server with a couple more clicks. The collections will be available in the Postman network for developers to discover and put to work. This post is meant to be the catalyst for some more work that would help make Beckn more discoverable and usable as part of the Postman platform.

*   **Beckn Team** - Publish a Beckn Postman team with logo and description.
*   **Beckn Workspace** \- Encourage Beckn to establish a workspace for this effort.
*   **Import OpenAPI -** Publish the Beckn OpenAPIs to the Beckn Postman workspace.
*   **Sync to GitHub -** Sync all the OpenAPIs back to GitHub allowing changes to be made in both places.
*   **Beckn Collections** \- Publish documentation collections from the OpenAPIs.
*   **Publish to Network** - Make sure each of the APIs are published to the Postman Network.
*   **Polish Examples** - Make sure all collections have a robust set of examples.
*   **Walk-Through** \- Produce concise walk through for developers to use collections and generate mocks.

This will lay a pretty good foundation for some storytelling and demonstrating what the possibilities are when it comes to using the Beckn API. Then we can start brainstorming about what else is possible when you start building specific workflow collection that demonstrate the business value of the Beckn API. It will make it easier for developers to on-board and work with the API protocol, and understand what it does. Something we can replicate for any new APIs Beckn launches, and use the OpenAPIs on GitHub, and Postman collections available via the Postman Network to expand the conversation around what is possible with Beckn.

I am going to work with the Beckn team to move things forward a bit more in coming weeks. Postman is really into helping open API specifications like Beckn generate more attention about what they are doing, while also showcasing what is possible with Postman. Open API standards like Beckn are critical to all of this API stuff actually working at scale. We have to stop delivering a bunch of special snowflake APIs and move towards more standardized implementations using open protocols like Beckn. If you’d like to kick the tires on the Beckn API while we are doing this work, you can play with the collections and documentation I’ve published, for five of the Beckn APIs.

*   [Beckn Authentication API](https://documenter.getpostman.com/view/8854915/T1LLG98M?version=latest)
*   [Beckn Core API](https://documenter.getpostman.com/view/8854915/T1LLG98N?version=latest)
*   [Beckn Final Mile Delivery API](https://documenter.getpostman.com/view/8854915/T1LLG98Q?version=latest)
*   [Beckn Mobility API](https://documenter.getpostman.com/view/8854915/T1LLG98P?version=latest)
*   [Beckn Registry API](https://documenter.getpostman.com/view/8854915/T1LLG98R?version=latest)

If you have any questions about the specification feel free to ping me, or go ahead and connect with the Beckn team. I am sure they’d love to talk to you about how you might use the protocol. Also, if you’d like to learn more about this approach to using OpenaAPI via Postman, syncing them to GitHub, and publishing collections to the network that can be easily mocked, feel free to ping me. It is one of the reasons I am publishing this to the blog, so that others can learn from the process and implement it for their own APIs. I am looking to get all of the open API specifications and protocols out there to use this approach to making their APIs more discoverable, accessible, and usable. While leveraging the Postman network to get the word out about the good work they are doing, and help expand the adoption of standardized API specifications across many different types of applications.