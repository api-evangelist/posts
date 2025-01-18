---
published: true
layout: post
title: Peeling the OpenAPI-Driven API Life Cycle Collaboration Onion
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/stalin-time-working-on-railroad-2.jpg
author:
  name: kinlane
tags:
  - Collaboration
  - Lifecycle
  - OpenAPI
---
I am trying to better understand how we all work together to deliver and consume APIs. Fleshing out more meaning behind some of the common words we use in the space such as collaboration, platform, hubs, workspaces, feedback looks, comments, sharing, notifications, and other communication channels. I want push my thoughts forward on what the gears of API collaboration are, and how we can better work together to move many different APIs forward as provider and consumer.

API collaboration isn’t very straightforward, and in my mind there are several layers to how things actually are playing out across the API landscape. This is my best attempt at breaking things out into different buckets for helping us make sense of how we are working together to move API infrastructure forward at the organizational and industry level.

### Layer One - Single OpenAPI Management

In 2020, OpenAPI has won the great API specification wars of the previous decade. OpenAPI is helping individual developers and architects more efficiently define and design OpenAPI definitions, using the core objects of the API specification as our guide. Providing us with a box of gears we can assemble to define the floor of our digital factories putting out the digital products and services we provide to our customers each day.

*   **Info** - Helping manage the name and description for OpenAPI definitions
*   **Contact** - Helping integrate and manage contact info as part of wider team management.
*   **License** - Helping manage the4 licensing for the APIs being defined.
*   **Server** - More management for available servers (ie. mock, development, production, etc)
*   **Server Variables** \- Helping manage server variables as part of environment management.
*   **Paths** - Help managing the design and definition of API paths.
*   **Operation** - Better operation management (verbs, summary, description, operationIds, etc.)
*   **Parameter** - Help more consistently name and define query and path parameters.
*   **Headers** - Be more deliberate and aware about how headed are defined and used.
*   **Request Body** \- More tools for managing the schema that is used as part of the API body.
*   **Media Type** - Make it easier to define and manage multiple media types, encoring negotiation.
*   **Responses** - More tools for helping define and manage the responses for each API method.
*   **Examples** - Better tools for creation, management, and organizing of examples for each method.
*   **Callback** - Defining callbacks that are in use across APIs, making APIs outbound as well.
*   **Links** - More hypermedia controls with better link management for each method response.
*   **Tags** - Better management of tags that are applied to each API and individual API methods.
*   **Overlays (new)** - Management of additions, augmentations, and overlays beyond the spec.
*   **Schema** - More tools for helping manage, create, and validate schema for responses, and from examples.
*   **Documentation** - Automatically linkage of external Postman generated documentation
*   **Security** - More management of security scheme in use across OpenAPI definitions.

These are the moving parts of each individual API, but also collectively the APIs we are putting to work across our digital factory floors.  Whether we are hand-crafting our OpenAPI definitions, or generating from code, they represent the moving parts of what we are looking to move forward and orchestrate throughout the numerous API life cycles. Now, we just have to further expand our OpenAPI management gears to ensure we can consistently deliver and orchestrate across many different API resources.

### Layer Two - Multiple API Management

This layer is all about acknowledging that organizations aren’t just defining a single API in isolation and they will be delivering multiple APIs across teams and organizations, and a consistent approach is being defined by OpenAPI. Teams are increasingly using OpenAPI to define each API, but there is a significant amount of work ahead of us when it comes to how we wield OpenAPI consistently across multiple APIs, across multiple teams, organizations, and industries. Here is how I’m looking at the gears for consistently applying across many different APIs.

**Components** - Again, we should be building on core of the OpenAPI specification. The components object was central to the evolution from 2.0 to 3.0 of the specification, acknowledging that reusable components is not just important to API governance, but to the API design process. The OpenAPI 3.0 components spec centralizes the following components:

*   **Schemas** - Centralization, recuse, and evolution of schema across all APIs in motion.
*   **Responses** - Standardizing the responses across resources, standardizing how APIs respond.
*   **Parameters** - Centralizing the management of parameters used across the API request surface.
*   **Examples** - Standardizing how examples are created, stored, managed, and refreshed.
*   **RequestBodies** - Having a common strategy for managing how request bodies work for APIs.
*   **Headers** - Providing a platform wide header management approach, fully leveraging the web.
*   **SecuritySchema** - Centralizing how APIs are secured, and resting the same authentication patterns.
*   **Links** - API wide management of links between APIs, and the different resources and capabilities they enable.
*   **Callbacks** - Defining the callback and event structure that exists across the request / response API network.

I think standardization, reuse, and modularization of the API design process is something OpenAPI excels at, and something all API service should embrace as part of their adoption of OpenAPI as the central truth for APIs. Providing users with the ability to generate, aggregate, manage, share, and collaborate around healthy API patterns across API operations. Many API developers are beginning to think about API components across a single API thanks to the OpenAPI components object, but few are adequately considering how the components object can be centralized, allowing for API gears to be consistently applied across many different APIs defining the digital factory floor.

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/stalin-time-train-tracks-seattle-waterfront.jpg)

### Layer Three - Multiple API Derivates

Beyond there being many individual APIs defined as OpenAPI, as well as multiple APIs consistently defined using OpenAPI defined components there are going to be multiple collection derivatives of each API. While some derivatives will be in service of specific stops along the API life cycle, something I touch on below, these definitions act as a governor between many different aspects of operations, and specific audiences, acknowledging there could potentially be many different machine readable artifacts present that will be used in different ways, and require keeping in sync with the central truth.

*   **Reference Collections -** Used primarily for delivering API documentation.
*   **Workflow Collections** \- Defining workflows across many different APIs.
*   **On-Boarding Collections** \- Introducing individuals to APIs and concepts.
*   **Mocking Collections -** Providing virtualized environments for developers.
*   **Documentation Collections** - Providing what is needed for humans to use APIs.
*   **Testing Collections** \- Test suite, integration, as well as contract testing.
*   **Monitoring Collections -** Details for monitoring the availability of APIs.
*   **Performance Collection -** Information pertaining to the performance of an API.
*   **Security Collections -** Details for scanning, fuzzing, and poking at APIs.
*   **Governance Collections** - Applying rules the the design defined in OpenAPI.
*   **Life Cycle Collections** \- Scaffolding for moving an API through its life cycles.

Essentially, how do you manage the OpenAPI, but also down to how each request is used across all derivatives. You can have the truth for each API defined as part of the OpenAPI schema, but also have to maintain derivative definitions for one or many stops along the API life cycle, or packaged up to speak to specific audiences. In 2020, your API definitions help you standard your APIs, as well as infrastructure, and overall life cycles behind each API, providing a derivative of the OpenAPI truth designed for a specific need.

### Layer Four - Multiple API Iterations

Across my OpenAPI truth and my collection derivatives I have many iterations to manage, making for one of the biggest headaches API developers face when managing many different APIs over time. Meaning your APIs will change, and you will have to track on what is going on across many APIs, spread across time, and versioning is the primary way for managing change.

*   **Versioning** - How does versioning across my OpenAPI and Postman collections work, and how is translated to each stop along the API life cycle using a well defined collection?

Developers aren’t just needed OpenAPI versioning guidance and assistance through the aPI lifecycle, they need it to work flawlessly across multiple artifacts, managing the truth, but also it’s derivatives and environments.

*   **OpenAPIs** - Versioning of the OpenAPI truth.
*   **Collections** - Versioning of each collection derived.
*   **Environments** - Versioning of the environments used.
*   **Services** - Commercial services applied across the API life cycles.
*   **Tooling** - Open source tools applied across the API life cycles.

All of this has to work in concern across operations. Versioning needs to be authoritative and prescriptive, while also woking across all steps across the API life cycle via collections. You can see the beginning of this when you click “Generate Collection” for an API in Postman—you get a dropdown option for which stop along the API lifecycle this collection will service. We need this for every stop, so that the collection that drives documentation is seamlessly versioned with the OpenAPI, while the collection that drives serverless code generation is also in alignment as well. This won’t be easy, and collections can be the central governor in this reality.

### Layer Five - Multiple API Life Cycle Stops

If the OpenAPI contract cannot properly service multiple stops along the API life cycle then we are in trouble. Right now it is effective servicing documentation, testing, and handful of others, but for the most part nobody has brought it all together into a coherent approach to actually servicing the entire API life cycle. While layer three—derivatives speaks a little to this by acknowledging there are derivatives of the OpenAPI truth, this layer is about being thoughtful about how those definitions, or extensions of definitions will specification service different stops along the API life cycle. 

*   **Documentation** - Defining collections for publishing documentation.
*   **Mocking** - Generating virtualizations of an API and it's data for developers.
*   **Testing** - Defining collections that define a full suite of test scenarios.
*   **Monitoring** - Defining collections that run on schedule to automate.
*   **Server Code** - Defining collections that generate server side implementations.
*   **Client Code** - Defining collection that generate client side code and integrations.
*   **CI / CD** - Further automation and executions of collections within the pipeline.
*   **Discovery** - Ensuring APIs are discoverable at design, develop, and run time.
*   **Security** - Making sure that all APIs are properly locked down and audited. - 
*   **Governance** - Providing guidelines, metrics, and reporting on the deliver of APIs.
*   **Observability** - Opening up the logging, testing, monitoring, and other signals.

Postman collections, and other definitions or extensions can act as the connector between an APIs central truth, and the realization of each version across the API lifecycle. This relationship has to be easily defined, realized, observes, and reported upon to fully realized as part of maintaining and elevating an OpenaPI as the central truth of an API. Postman collections and OpenAPI extensions augment the truth, providing a completely separate API definition that is derived from the truth but contains additional data that speaks to the individual needs at each stop of the API life cycle.

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/stalin-time-subway-brooklyn-station.jpg)

**Layer Six - Multiple People (aka Collaboration)**

Lastly, after multiple APIs, derivatives, versions, and stops along the API life cycle(s), we have many different people with different incentive structures. This layer is all about the people, and providing a meaningful way to bring all of this together as a hub, core, heart, nerve center, platform, or whatever is defined as the centralized or distributed platform within an organization. Each of these areas will deeply impact the success or failure of OpenAPIs as the central truth of API operations.

*   **Users** - Empowerment of individuals, while also expanding the different roles Postman includes as a stakeholder.
*   **Teams** - Helping define, redefine, and better understand how teams are working, or not working across operations.
*   **Workspaces** - Strategically as well as organically define workspaces for effective delivery and management of APIs.
*   **Organizations** - Dovetail with existing organization directories and structures, while also allowing them to evolve.
*   **Conversations** - The discussions occurring around all the moving parts of each API across the API life cycle.
*   **Sharing** - Understanding sharing of OpenAPI, collections, and life cycle deliverables at every turn by all users.
*   **Forking** - Effectively forking of OpenAPI and collections as part of the overall flow of APIs being defined and delivered.
*   **Merging** - Confidently merging of OpenaPI and collections as part of the overall flow of APIs being defined and delivered. 
*   **Publishing** - Thoughtful publishing of OpenAPI, collections, and other deliverables whenever possible through the flow.
*   **Discovery** - Ensuring that the discovery of APIs is always baked into the workflow, while adhering to privacy and security.
*   **Governance** - Providing an authoritative and leadership layer to operations that allows a small group to drive the overall flow.

These are the primary human initiated actives that need to be incentivized, organized, and realized on a daily basis for all of this to work. These activities are all centered around the OpenAPI truth, and the collection derivatives which drive each stop along the API life cycle. The trick is how do you get people to do them in a thoughtful, educated, and deliberate way, adhering to enterprise orchestration and choreography? One important aspect of this orchestration and choreography involves two key areas, and remembering to focus on what is expected by:

*   **People** - A human being taking a collection derived from an API truth and accomplishing a specific business objective.
*   **Systems** - A computer taking a collection derived from an API truth and accomplishing a specific business objective.

Some of the stops along the API life cycle are meant for humans (ie documentation), while others are purely for other systems (ie. Server code and CI/CD). Some are meant for both. OpenAPI and collection derivatives are what bridge this divide, and should be usable by both human beings and computers. This is a fundamental element of OpenAPI and collaboration in the API space, and something we often forget. This is why companies like Stripe and Twilio have done so well when it comes their operations, because they get, and work hard to strike a balance between people and systems.

### The API Life Cycle Collaboration Onion

All of this is not meant to be a playbook, it is simply meant to help elevate my view of the landscape, while still considering the technical, organizational, and human elements of how all of this works or doesn't work. i am not happy with the differences between layer three and layer five, there is still too much overlap there. However i think the separation between artifact and what it is serving is important, even if I can't 100% nail it all down. Ultimately I'm just trying to get a handle on all the moving parts, and begin to think deeply about the different directions in which the factory floor is moving. I am trying to understand both the human and machine elements of an OpenAPI-driven API life cycle, and be more honest, fair, and balanced about how collaboration works and doesn't work across large enterprise.

I will keep poking at this narrative to see where I can take it. This is really the first time I've elevated beyond what OpenAPI can do across the API lifecycle and begin to think more deeply about the organizations and people who are actually getting the work done. I have spent a lot of time thinking about OpenAPI, the API life cycle, as well as how the two work. However, I have not spent much time outlining or diagramming how organizations and humans actually fit into the equation and how they actually collaborate to get things work. As with the rest of my work it will take many iterations before it all comes together for me, and is something that rolls smoothly off the tongue, which is why I do all of this writing here on the blog--it is something that puts me in the optimal state for talking about APIs across the enterprise groups I'm speaking with on a regular basis.