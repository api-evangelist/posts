---
published: true
layout: post
title: Expanding the Vocabulary for Run in Postman Buttons
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_12_05_at_4.20.41_pm.png
author:
  name: kinlane
tags:
  - Embeddables
  - Buttons
---
I have long been fascinated by the [Run in Postman Button](https://learning.postman.com/docs/publishing-your-api/run-in-postman/creating-run-button/). A Run in Postman button can be published from any Postman collection, organizing a single, or a series of API calls into collection of API requests, and then letting them be imported and ran locally by any consumer, as a cloud monitor, or via a pipeline. Run in Postman buttons are a common way for API providers to onboard new developers with their APIs, and stay engaged with active developers through collections they’ve download via Run in Postman buttons. These embeddable goodies attached to Postman collections and potentially environments are very powerful unit of API execution, but I am finding that the label “run” isn’t sufficient in articulating what is possible with each collection, and I a looking to get a little more precise when it comes to my vocabulary attached to each Postman button I publish.

### The Run in Postman Button Fundamentals

A [Postman collection](https://learning.postman.com/docs/getting-started/creating-the-first-collection/) is basically a portable folder of API requests. Using Postman, developers can define the parts of one of many API requests, including the URL, parameters, headers, body, and authentication, then roll them all up as a collection that can be shared with other developers, and published as documentation, as well as using a Run in Postman button. This embeddable HTML or markdown button can be published alongside documentation, or more dynamically as individual buttons on any HTML or markdown page, attaching each button to the following elements: 

*   **Collections** - Each button can execute a single collection of one or many API requests, complete with pre-request and post-request scripts.
*   **Environments** - Each button can possess a single environment that can contain a variety of key / value pairs for authentication, and other purposes.

You can [find Run in Postman buttons sprinkled across Twitter API documentation](https://developer.twitter.com/en/docs/tools-and-libraries/using-postman), providing one click import of collections into each developers own workspace, where they can manually run, or automate using a monitors, or trigger via a pipeline using the command line runner. This powerful combination allows for an almost unlimited number of possibilities when it comes to crafting a collection, environment, and then publishing using a “Run in Postman” button—something “run In” just does not adequately represent when articulating what is really possible. 

### Exposing the Semantics of Each Collection

The label “run in” provides a powerful, yet generic wrapper for each collection. I’d like to see a semantic layer emerge for Run in Postman Buttons, allowing me to better define and articulate what is happening within each collection. Yes, each collection is being “ran”, but I want to be able to get more precise about what is happening within each collection, moving beyond the notion of a “reference collection”, or just a buffet menu of what is possible with an API, to very precise capabilities that are enabled by an API. Here are a few labels I would use for some of the collections I currently use across my work.

*   **Deploy Using Postman** \- I have a variety of collections that will take a fresh OpenAPI and publish it to AWS API Gateway, Lambda, RDS and / or DynamoDB. 
*   **Clean Up Using Postman** - If an API I have deployed is ephemeral I will have a second collection that I can use to tear down and clean up an API deployment.
*   **Harvest Using Postman -** I have collections that will harvest data for me from Twitter, GitHub, and a myriad of other APIs I am regularly pulling data from.
*   **Sync using Postman -** I have collections that I use to sync data between two platforms using APIs, running one time or on a schedule to migrate data.
*   **Publish Using Postman -** I have many static sites that run on GitHub using GitHub Ages, and I schedule the publishing of JSON or YAML data via a collection.
*   **Scan Using Postman -** There are a collection I use to scan the surface area of APIs looking for vulnerabilities and other security issues across my APIs.
*   **Test Using Postman -** I have many different types of tests that live as Postman collections, allowing myself, or others to run tests manually or on schedule. 

This is just the tip of the iceberg when it comes to Postman collection defined API capabilities I need to run, share, and publish with other people. I am regularly answering questions around how to do something with APIs, OpenAPIs, JSON Schema, and other API lifecycle challenges, helping provide a solution as a single collection. I have diverse vocabulary when it comes to how I run my collections and it would be nice to be able to expose the semantics of my APIOps as simple buttons that I could publish in documentation or as part of the storytelling here on my blog.

![](https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/america-immigration_dumping-ground-cloks-many-of-them.jpg)

### The Automation of API Capabilities Using Collections

While the semantic of each collection and its underlying requests ands scripts would be better exposed via a semantic label on a button, each API capability could be executed in a variety of ways using existing Postman platform functionality. Starting with the ability to discover and learn about a specific API capability via documentation or wherever buttons are published, but then quickly move beyond manual actions, helping automate all of these capabilities via these methods: 

*   **Single Run -** Allowing a user to run a collection combined with an environment a single time upon clicking the button.
*   **Scheduled** - Enable a user to schedule by the minute, hour, day, week, or other dimension, baking schedule into button.
*   **Pipeline** - Embedding the capability into an existing pipeline, ensure that the capability is run in the moment it is needed.
*   **Events** - Triggering the run of a capability when a specific event occurs, leveraging a web hook to execute the collection.

I would have to explore how the vocabulary of a button label could be expanded beyond just the semantics of what the collection can do, and consider how the variety of approaches to executing an API capability via a collection might be expressed. Schedules would need to be defined, pipelines indexed and made extensible, and events registered for triggering of web hooks that set each collection + environment into motion. Ultimately I am looking for an embeddable link or button that has a label that describes the entirety of what is possible with each collection, and the method of execution, helping provide a suite of single click capabilities that developers and non-developers can use to automate the world around them. 

![](https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/america-immigration_dumping-ground-docks-water-front-ships-containers.jpg)

### The Observability of API Automation and Orchestration

Right now I can tell you the number of times a collection was viewed or downloaded for any collection in the Postman network. This provides a reliable way for API Providers to track the onboarding of new users, and since they have API management in place, they can link this onboarding to API activity by each user onboarded. Providing two of the classic metrics for any API platform--new and active users. However, I can’t help API providers confidently implement, measure, and report upon what actually is activating each API consumer. Adding a semantic layer to each collection, exposed via it’s published button, provides me with a more precise dimension to report upon when it comes to quantifying how users move to differnt levels of ctivation, and different levels of activation, based upon the type of collection being employed. Giving me with more tools to help API providers experiment and quantify how to best reach API consumers. 

*   **Capability Collections -** API Providers can develop precise collections that speak to a specific business value their API enables.
*   **Service Composition -** Each collection can contain one or many individual API requests that map to the API management layer.
*   **Collection Reporting -** With a semantic layer added to each collection, my views, download, and execution means much more.
*   **Experience Journeys -** As an API provider I can craft many different collections that enable a variety of journeys for API consumers.
*   **Operational Landscape -** I’ve added another semantic layer to the reporting for my APII operations, that better define my API landscape.

I really haven’t done anything groundbreaking here. All I am doing is adding a semantic layer to each collection that helps them convey more meaning to both API provider and consumer. It helps me move beyond just the buffet menu nature of existing reference collections which show API consumers everything that is possible, and then expects them to just go figure it all out. It helps be get more structured in how I am defining the capabilities of my API platform, and share, publish, and articulate those capabilities to consumers. While also letting me better report upon, develop an awareness, and evolve my API strategy to better meet the needs of my consumers, and of course my platform.

![](https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/america-immigration_dumping-ground-turing-front-view.jpg)

### Expanding My API Vocabulary and Then Putting at My Fingertips

This notion of expanding the Run I Postman button vocabulary has been kicking around in my head for a couple of years now, but it was until we launched our new search recently that I could see the possibilities. How I name my collections matters a lot more now because of the expanded search available in Postman now. Being more thoughtful about how I name collections to ensure maximum discoverability, triggers my desire to help API providers better articulate and communicate the value that is contained within each Postman collection. Increasingly I am generating many derivative collections from an OpenAPI definition, looking to create more tangible and usable executable units of API value that speak to a wide variety of developers, but more importantly non-developers. The label on a button might seem insignificant, but really with each button you have a finite, but powerful surface for articulating the endless possibilities that exist within each Postman collection it is attached to, but also the value generated from the APIs defined as part of that collection.

The release of public workspaces has let in some sunlight on my chaotic and disorganized approach to creating collections for a variety of purposes. Publishing documentation and run in Postman buttons has always been the public layer of this chaotic performance of API Evangelist, but also now the Chief Evangelist at Postman. Exposing my wealth of APIs and collections via workspaces, then trying to use the new Postman search to find what I need, and recall the many different API-driven capabilities I have laying around has really shown me the importance of being able to properly label each collection in a way that is meaningful to me, but also to my audience. Next, I am going to continue working on how I design, develop, and label my collections, while also putting more thought into how I can publish as buttons, but maybe add my own custom layer which exposes the value contained within each collection “run”. Really, you could launch an entire button, as well as execution layer using the Postman API, managing collections and environments there, while doing the execution using monitors. I’ll spend some time tinkering, and see what I can come up with. Who knows maybe I will be able to influence the road map with this work. Or better yet, maybe you’ll build this, tell me about it, and I’ll help you influence the road map. ;-). I have too much work as it is. ;-)