---
published: true
layout: post
title: A Lifecycle for the API Factory Floor
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/america-immigration_dumping-ground-factory-road.jpg
author:
  name: kinlane
tags:
  - Lifecycle
---
I am pushing forward a handful of conversations with enterprise organizations about how to better formalize their API lifecycle workflow. To help me load up my talking points in my head I wanted to publish a post here on the blog. Using Postman I am finally able to actually execute on my API lifecycle visions in the most tangible way since I started doing all of this in 2010. Postman is a Swiss Army Knife that allows me to approach the API lifecycle in a variety of ways depending on the situation I find myself in. While there are a lot of unknowns when it comes to doing APIs, there are also a lot of common patterns to use, and this is an exploration of these standardized approaches, allowing me to articulate them tomorrow during some discussions.

### Workspace

It may seem obvious, but I am finding that having a well defined workspace to define, design, and manage APIs is essential to doing APIs well. Having a single place where you can find the contract and supporting artifacts that define each of the stops along the API lifecycle is needed to do all of this at scale, and consistently collaborate and move APIs forward. There are a handful of elements needed to define an API workspace when you are using Postman.

*   **Name** - You'd be surprised at how important the name of an API can be when it comes to making it discoverable and usable by consumers--how you name your API will define a lot about it.
*   **Description** - A well written description for an API is your first impression when it comes to onboarding consumers. They shouldn't be a novel, but it should provide enough information for a consumer to understand what it does.
*   **Administrative Team Members** \- Have your leadership team identified, make sure they are plugged in and know what needs to be done, giving them the control and observability they need.
*   **Collaborator Team Members -** Define all the other stakeholders who should have direct access to the workspace, and be able to provide feedback, and iterate upon each of the APIs being delivered.

Do not underestimate the importance of a dedicated workspace that is designed for iterating upon your APIs. You should be able to access your OpenAPI, and the collections driving docs, mocks, tests, as well as all of the orchestration applied using runners and monitors via a single shareable URL. You'd be surprised at how much a workspace can anchor the evolution of your APIs, providing the cornerstone needed to move things forward in a logical, coherent, and collaborative manner.

### Machine Readable Contracts

![](https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/america-under-socialism-factory-road.jpg)

The centerpiece of any workspace should be one or many OpenAPI contracts defining what is possible with an API. Providing the details of each request and response as a single human and machine readable contract, that can be versioned, evolved, and used across the API lifecycle. Postman allows you to place the contract for your APIs at the center of your workspace, providing a dashboard where you can manage and collaborate around the evolution of the two dimensions of your API contracts.

*   **OpenAPI** - OpenAPI 3.0 is the default specification in use across the API sector. While its last version, known as Swagger, is still the dominant in usage, OpenAPI 3.0 is being adopted by all of the top API providers--making it the natural choice for defining APIs.
*   **JSON Schema** - OpenAPI 3.0 uses the latest draft of JSON Schema, providing the ability to define the underlying objects used as part of API requests and responses, helping stabilize how data, content, and algorithms are made available via the web.

Don't underestimate the power of fully fleshed out OpenAPI definition. An incomplete one will cause all kinds of friction downstream, and a robust, well defined OpenAPI will enrich your documentation, provide robust mock servers, and deliver robust contract, integration, performance, security, and other types of testing. Invest in your OpenAPI definitions, and your JSON Schema, making them discoverable via the one or more workspaces where teams are doing what they do best.

### API Contract Management

Even once you publish the first draft of your API contracts, you will then need to iterate upon them, and put them to work driving the different stops along the API lifecycle. Postman provides a variety of features that make the management of APIs more collaborative, and automated, helping reduce the load when it comes to the mundane work of delivering APIs. Here are some of the contract management capabilities available when it comes to moving APIs forward as a team, within one or many known API workspaces.

*   **Naming** - How you name your APIs can play a role in how you manage it, helping make it discoverable, groupable, and more manageable. 
*   **Filtering** - It is easy to filter APIs based upon their name, allowing you to type a couple of characters and have exactly the aPIs you need available for managing.
*   **Version(s)** - Managing change is the only way you will be able to get a handle on the rapid iteration of API contracts across teams, providing a framework for moving forward without breaking the past.
*   **Autocomplete** - Being able to autocomplete your API contracts helps speed up the evolution of API contracts, putting all of the OpenAPI objects at your fingertips when it comes to moving them forward.
*   **Validation** - Knowing in real time whether or not your contract follows the OpenAPI specification to the letter, making sure each of your API contracts will work in other tools and services across the API lifecycle.
*   **Watching** - When you are managing many different APIs it helps to be able to follow only the APIs you need to stay in tune with, providing a steady stream of relevant details about what is happening with each contract.
*   **Change Log** \- You have to be able to stay in tune with what has happened with each API being defined, leveraging the change lot to understand the movement made by each API team without asking each of them for an update.
*   **Comments** - The ability to communicate around each API is essential, but being able to comment on the API, as well as the moving parts of the API, will help keep the feedback loop self contained.
*   **Reports** - You will need reporting on top of the evolution of your APIs, to help- you stay in tune with how they are being used throughout the design, development, and deployment of your APIs.
*   **Share** - API contracts need to be shared. They should be shareable via other workspaces so that they can be worked upon and applied in a variety of different contexts.
*   **Sync** - API contracts might also be needed in other services, tooling, and as part of an organizational source control, making GitHub two-way sync a pretty critical link in the chain.

If you have managed an OpenAPI contract for an API you know how much detail work is involved. Having a workspace, with a variety of digital capabilities to help you manage your OpenAPI is essential. It will take you 10X the effort to do it all by hand. Postman helps to put the automation and workflow in the management of OpenAPIs in a way that can be wielded in a variety of different ways depending on how you are looking to deliver your APIs, allowing for teams to do things differently to suit their specific needs.

### API Lifecycle Collection

![](https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-factory-road.jpg)

In Postman, from each OpenAPI you can generate one or many collections that help you deliver on a variety of stops along the API lifecycle. The OpenAPI is the truth of each API, but collections are how you realize that APIs potential across the API lifecycle. For each collection, there are a number of ways in which they can be leveraged within Postman to help move forward the conversation around each API, providing a standardized approach to delivering APIs across teams.

*   **Naming** - Like your APIs, the naming of your collections will help define the value they deliver and make them discoverable and usable by team members.
*   **Filtering** - The name will feed into the filtering of collections as well, allowing you to only see the collections you need, depending on how you have planned the naming of your APIs.
*   **Versioning** - You will need to be linking each collection with each version of your APIs, keeping them in lock step when iit comes to managing change across each layer of your API infrastructure.
*   **Validation** - With the ability to generate one or many collections, you will need to automate the validation of each collection, ensuring they are always in alignment with the central API contract it serves.
*   **Documentation** - Collections in Postman natively have documentation built in, but then you can also use it to publish documentation that can be shared via a URL with any consumer or other stakeholder.
*   **Mock Server** - Collections can also be used to generate mock servers, leverage the examples included within each OpenAPI to mock the functionality of each API being delivered so it can be used to test and iterate upon each API.
*   **Contract Testing** - The prerequisite and test scripts for each individual collection, folder, or request can be used to actually test the contract for each API, ensuring each API stays in alignment with the contract.
*   **Contract Visualization / Exploration** \- The Postman visualizer available for each individual API request can be used to make the overall API more visual, explorable, and interactive for consumers trying to put it to work.
*   **Forking / Pull Requests / Merging** \- The ability for team collaborators to be able to fork, submit pull requests, and merge changes with collections, allows for each aPI to be evolved in a more collaborative way.
*   **Comments** - Like the feedback loop around APIs, the moving parts of each collection should allow for commenting, and team engagement, providing a feedback loop for each stop along the API lifecycle.
*   **Share** - Collections can be shared between workspaces like APIs, but they can also be shared via URLs and Run in Postman buttons, making each stop along the API lifecycle shareable and reusable.

Each collection reflects the OpenAPI it was generated from, but provides the ability to execute upon a variety of stops along the API lifecycle. The collection provides the details you need to inform the road map of the API, but also publish documentation, power mock servers, and more importantly be able to test all aspects of how an API operates. Each collection represents a portion of the enterprise API factory floor that is in use across teams, driving the delivery of API infrastructure.

### Operational Collection(s)

Beyond the lifecycle collection that moves each API forward, there is another operational level collection that helps define an API throughout its lifespan. Providing a blueprint for the overall design and maturity of an API, that can be used to see how well, or how badly an API is progressing--allowing them to move forward in an orderly fashion.

*   **Governance** - This collection actually tests the surface area of an API, and ensures the design of the API actually matches what is expected of each API across an organization. Helping test the structure rather than the instance of each API, and just it's request and response.
    

An API governance collection is just one example of what operational level collections can do. Demonstrating how collections can be used to mature and harden APIs, impacting not just a single API and it's consumers, but also impact overall API operations, and affecting how a platform works, or doesn't work.

### API Environments

![](https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/copper-circuit-factory-road.jpg)

Environments are used as a governor against each collection used across the API lifecycle. Allowing the base URL, keys, tokens, and other essentials to be abstracted away from each collection, then applied using variables as part of the execution process. Environments help define each stage of an APIs life, using them to design, develop, operate, and manage the maturation of each API.

*   **Mock** - Providing a mocked representation of an API as it is being designed, developed, and for use to test an API in production.
*   **Staging** - Allowing for an API to be staged and moved from development into production, and verified as it becomes available for use.
*   **Production** - Providing the details of an API as it is available in a production environment and available for integration with applications.
*   **Govern** - Managing the stage of governance for each API, providing a blueprint of the maturity of each API that is running in production.

Environments allow for separation of each stage of an APIs evolution, as well as the overall maturity of the API. Providing a snapshot of it during design and development, deployment, and while in production, then also keeping track of each of the details along the way helping ensure that APIs are in alignment with the bigger picture across an organization--moving APIs forward in concert, helping keeping the API factory floor operating at full speed.

### Observability

THe API lifecycle needs to be observable across all APIs if they are to be moved forward in concert. APIs do not do well when designed, developed, and operated in a silo. Observability is all about monitoring APIs using their existing outputs, capturing the exhaust from their evolution and operation using a handful of mechanisms. 

*   **Monitoring** - Being able to monitor each aspect of an APIs operation, from contract testing to security testing, everything should be able to be monitored on a schedule from any region.
*   **History** - History should be default. You shouldn't have to chase it. The exhaust from the usage of APIs across the lifecycle should be available to use to evaluate the overall health of each aPI.
*   **Activity** - The regular activity of the API factory floor should be accessible showing how each API, collections, environments, mock servers, monitors, and other moving parts are being configured.

Platform observability should be default, configurable, and extensible. Allowing for the exhaust and activity from the API factory floor to be used to optimize operations. Helping fine tune the engine of operations by being able to see into what is going on with each API without having to chase things down, ensuring observability isn't an afterthought, and something that is essential to managing the direction you are headed with your API infrastructure at scale.

### Automation

Alongside observability, automation should be a default, and part of each stop along the API lifecycle. Automation is how you make the API factory floor move and produce at scale. With Postman, there are three distinct ways in which the API lifecycle can be automated, allowing you to move each API forward, but also keep them aligned and scheduled to produce what is needed to achieve the optimal workflow.

*   **Runners** - Each component of the API lifecycle that is defined as a collection should be able to be run manually by a developer as part of each API workspaces.
*   **Monitors** - Each component of the API lifecycle that is defined as a collection should be able to be run on a schedule from multiple regions around the world.
*   **Pipelines** - Each component of the API lifecycle that is defined as a collection should be able to be run as part of an existing CI/CD pipeline, weaving the API lifecycle into existing operations.

Each API should leverage automation for defining and delivering itself. Moving it forward while also keeping it observable and governed throughout it's life. Automation is the conveyor belts for the factory that keep APIs evolving forward, but also the digital capabilities they enable. Allowing each stop along the API lifecycle to be defined as a collection, then executed manually, on a schedule, or as part of the existing software development lifecycle.

### OpenAPI Factory Orchestration

![](https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/leaflets-of-the-russian-revolution-factory-road.jpg)

Everything I have covered lays the foundation for the API factory floor, but the teams that operate the factory floor will need to have a certain baseline of knowledge and understanding of the big picture to make it all work. Beginning with having a strong understanding of the OpenAPI specification which specifies the contract for all APIs in motion on the factory floor, but also why quality matters when it comes to positively impacting everything downstream from them across API operations and the applications and integrations that depend on them.

*   **OpenAPI Training** \- Every team member should have a strong grasp of what OpenAPI is all about and be able to understand why the specification matters when it comes to the API lifecycle.
*   **OpenAPI Quality** \- Every team member should be able to understand why quality matters when it comes to making it all work, and your API lifecycle is only as good as it's OpenAPI core.
*   **OpenAPI Downstream** \- Each team member needs to intimately understand what the downstream effects are of a complete OpenAPI, and the friction introduced when you don't deliver a robust OpenAPI for each API.

OpenAPI is essential to the narrative of the factory floor, and the API lifecycle. It is the script you write for the orchestra. If your teams aren't properly trained in the OpenAPI driven details, they will never communicate effectively across your operations. OpenAPI will be the background music for your API operations, and provide the hum of the factory floor dictating how the gears move or do not move when it comes to rolling out new APIs, evolving existing APIs, and ultimately deliver the digital capabilities they enable.

### Defining the Lifecycle for Your API Factory Floor

Your OpenAPIs provide the contracts for your businesses API factory floor, and collections provide the unit of execution that bring these contracts to life. Ensuring the factory floor also has the necessary automation and observability it needs to move APIs forward, keeping them producing and delivering as desired. All of this will dictate the life and presence of each API, setting in motion their evolution forward, while keeping them serving the applications and integrations that are designed to support them. All of the knobs and dials articulated above provide the gears you need to build and operate a factory floor at any scale, allowing you to scale up or down as needed to achieve desired results. 

Next, I will be taking all of this and applying to specific APIs for customers. I will also be fleshing it out and turning it into relevant training material so I can turn it into a workshop. I need to figure out how I can teach it to teams across an organization in a series of internal workshops that help move an organization forward by making sure teams have the training and tools they need. Now that I have the tools to actually deliver the API factory floor that matches the successful practices I've identified over the years, I am looking to roll it out more formally as part of the conversations I am having. I just need to keep hammering on it and refining it down to something that can be shared with others--helping them see the potential of a well defined API lifecycle delivered across a scalable and consistent factory floor.