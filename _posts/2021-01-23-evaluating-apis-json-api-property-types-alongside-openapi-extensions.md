---
published: true
layout: post
title: Evaluating APIs.json API Property Types Alongside OpenAPI Extensions
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/birth-of-a-nation-chess-in-the-park-with-pigeons.jpg
author:
  name: kinlane
tags:
  - APIs.json
  - OpenAPI
  - Extensions
---
I am giving some much needed love to my [APIs.yaml](http://apisyaml.org/) and [API.json](http://apisjson.org/) API discovery format while using the work to also just think about the wider API landscape. This is the original intent behind APIs.json…to help me make sense of the API landscape.  Most folks are thinking about APIs as a producer, or as a consumer—hopefully both. However, there are fewer people who also pay attention to the entire API landscape, and APIs.json emerged out of this need for me in 2014. In 2020 I find myself totally immersed in the API landscape as part of my API Specification Toolbox project which grew out of Postman becoming a member of the OpenAPI Initiative, and I wanted toht spend why Saturday afternoon (I know I have a problem) thinking about the API landscape at the 250K. 

### APIs.json API Property Types

Using APIs.json or APIs.yaml you can define the properties of one or many APIs for a variety of purposes. Each API you describe can have an array of properties which can be common human readable elements like documentation or sign up, as well as machine readable properties like OpenAPI, AsyncAPI, or JSON Schema. APIs.json property types are intentionally human or machine readable with the intent on evolving every human readable element to have a machine readable element—think the relationship between documentation (Human) and OpenAPI (Machine) when understand the objective.

I have several thousand API Providers and API service providers in my API Evangelist database. I track on the properties of all of these companies, organizations, institutions, and government agencies that I come across. When I group the property types across the thousands of APIs I have indexed, I end up with this default set of building blocks for API providers, grouped by different areas of the API lifecycle.

### Onboarding

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/birth-of-a-nation-escalator-close-in.jpg)

These are the properties of any API operation that help consumers, or any other party onboard with the concept of an API, begin using the API, as well as allowing them to return on a regular basis to get what what they need for integration. 

*   **About** - The overview of what an API or provider offers to consumers.
*   **Getting Started** - How you get started with actually consuming an API.
*   **Authentication** - What is involved with authenticating with an API.
*   **Documentations** - The human readable documentation for APIs.
*   **Plans** - What the pricing, access, and rate limits are for each API.
*   **Signup** - Where you sign up to actually begin using an API.
*   **Login** - How you login back into the platform for each API.
*   **Dashboard** - The landing page for consumer after logging in.

These API property types are essential to helping API consumers understand what is possible and assisting them in getting up and running with each API. As the number of APIs each of us depends on increases, friction at any of these areas might be the deciding factor for whether a consumer successfully onboards with an API or not.

### Definitions

These are the common machine readable API specifications in use by API Providers, offering a suite of ways for API providers to define and communicate what their APIs actually deliver. Providing a common vocabulary for describing the surface area of our APIs in a way that can be used across every stop along the API life cycle. Here are the leading specifications that are defining each individual public, partner, or private API being delivered. 

*   **OpenAPI** - The leading specification for describing HTTP 1.1 request and response, or REST APIs.
*   **AsyncAPI** - The leading specification for describing event and message driven multi protocol APIs.
*   **JSON Schema** \- The default standard for how you define and validate each schema being used.
*   **Postman Collections** - A dominate format for executing and realizing what is possible with each individual API.

As an industry we are doing well at providing machine readable definitions for each individual API instance, describing the surface area of each API, the payloads, and the technical details of integration and consumption. However, as I’ll explore later, we are don’t such a good job at ensuring all the building blocks of our API operations are machine as well as human readable—something APIs.json is looking to change.

### Developers

When it comes to the more developer centered, and more technical aspects of APIs operations I see API providers offering, there are a handful of ways they are incentivizing developers to put their API resources to work. These are the most common technical building blocks of API operations I have captured over the last ten years of mapping out the API landscape.

*   **SDKs** - Providing a complete list of SDKs available in every available programming language or popular platform.
*   **CLI** - Offering up command line interface tooling for developers to use as part of integration and the CI/CD process.
*   **Open Source** - Having a dedicated page to showcasing the open source solutions that are available for developers.
*   **Github** - Embracing the social coding platform Github when it comes to managing code and the relationship with developers.
*   **Applications** - Providing a directory or showcase of applications that are built on top of an API, highlight what has been built.
*   **Integrations** - Offering up a ready to go suite of integrations with other APIs for consumers to put to use in a simple way.
*   **Webhooks** - Allowing web hooks to be triggered upon relevant events that occur across a platform, making APIs a two-way street.

These are the meat on the bones of successful API integrations. This is what developers and end uses depend on to successful put a platform to work. Currently APIs.json is just linking to each of these pages, providing a URL for a human to follow. You can describe web hooks using OpenAPI or AsyncAPI, but there will need to be a lot more evolution from human to machine readable in coming years if we are going to keeping scaling this Frankenstein of an API ecosystem we’ve built.

### Change

Change is inevitable in the API universe, and those who are better at communicating around change are almost always the ones who are better at managing it, while reducing the negative impact of change on API consumers. There are the handful of ways in which I see API Providers actively communicating about the change that is happening across their API-driven platforms.

*   **Versioning** - Providing all the information needed to understand the semantic, or other versioning applied to an API.
*   **Road Map** - Being more organized and communicative about defining where an API is headed, as far into the future as possible.
*   **Change Log** - Ensuring that everything that has changed with an API is documented, leaving a trail of everything that changes.

This is one area that will also have to get more machine readable if we are going to scale APIs to meet the demands of the global economy. We will have to learn to to programmatically navigate change if we are going to further automate integration. Applications will need to be equipped to make their own decision about which versions of an API they use. Ideally, there would be hypermedia baked into our API design to help mitigate against change, but alas that isn’t always present. ;-)

### Communications

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/birth-of-a-nation-satellite-dishes-pointing-up.jpg)

Being able to communicate with consumers is one of the most vital characteristics of an API provider. If you aren’t able to provide a regular stream of communication around of the value offered by an API, and able to keep consumers informed, you probably won’t be very successful in operating an API. While these channels may shift when it comes to partner or internal APIs, the need for communication remains the same—here are the most common public API communication property types.

*   **Newsletter** - Providing a regular email newsletter about what is happening with an API.
*   **Blog** - Having an active blog with a feed for consumers to tune into around an API.
*   **Twitter** - Providing an active presence on Twitter, being social with the API.
*   **LinkedIn** - Having a professional presence for an API using LinkedIn.
*   **Youtube** - Publishing or aggregating videos around an API on Youtube.
*   **Press** - Providing an inventory of press regarding the business value of an API.

What I like about this section is that every one of these API property types have APIs, except usually press. Blog have RSS and Atom, and Twitter, LInkedIn, and Youtube all have APIs. I have a wealth of other communication property types that I track on, but these reflect the most dominant channels that API Providers are using to deliver one side of the API feedback loop that is essential to an APIs success.

### Support

The other half of the API feedback loop is about ensuring you are adequately supporting your community and API consumers. There are a wealth of common as well as creative ways API Providers support their communities, but these are the top ways I am tracking on when I profile and index each API I track on.

*   **FAQ** - A well defined and organize list of common questions and their appropriate answers.
*   **Email** - Simply providing an email address for consumers to use when looking to get support.
*   **Contact Form** - A URL to the contact form to use for submitting support requests for an API.
*   **Tickets** - Allowing consumers to submit a support ticket and get help with API integration.
*   **Issues** - Using Github or other issue format to allow the public or private submission of issues.
*   **Stack Overflow** \- Leveraging the popular Stack Overflow platform, outsourcing your support.
*   **Forums** - Operating your own forum to support the community around an API. 
*   **Status** - Maintaining a 24/7 status of the uptime and availability of all APIs over time.

These support centered property types complete the feedback loop for API Providers, processing everything “heard” from support and including it as part of the API road map, while then using it to informing the communication side of the feedback loop, establishing a virtuous cycle between provider and consumer. 

### Resources

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/birth-of-a-nation-docks-ships-cranes.jpg)

You can always tell when an API provider has invested in their platform and community because there are always a wealth of resources available to support the community. These are the leading resources you will find in a modern API provider’s community, further adding to the information available to put a platform to work.  

*   **Case Studies -** Simple overviews of how a platform has been put to work by another consumer.
*   **Tutorials** - Easy tutorials that walk consumers through different aspects of how an API works.
*   **Webinars** - Live session educating consumers about what an APIs, with videos posted afterward.
*   **Streams** - Providing unscripted problem solving live streams that help demonstrate the value of an API.
*   **Videos** - Offering up videos on a variety of relevant aspects of what an API will do for consumers.
*   **Podcasts** - Publishing or participating in audio podcasts that help relay what an API does for consumers.

Take a look at Twilio if you want to see how to do API resources. All of these resources help educate consumers about what is possible, and help not just reduce friction when integrating with an API, but also helps when it comes to expanding the consumption of API resources by existing applications.

### Legal

Now for the boring, but essential legal layer of API operations. These API property types have a profound effect on what is possible with an API, and while we have the beginnings of investment in the legal side of API operations, we have a lot of work to help make all of these API properties something a machine can understand. 

*   **Terms of Service -** The legal terms of use / service that guide all usage of a platform.
*   **Privacy Policy** \- How the privacy of developers and consumers are defining for a platform.
*   **Licensing** - The licensing that exists for data, backend code, the API definition, and client code.
*   **Service Level Agreement -** What the agreed upon SLA that exists between provider and consumer.
*   **Security Policy** \- Being upfront regarding what the security practices and policies for an API are.

This is the area that is furthest out of view for most developers, and it is something that will continue to define the relationship between end-user, developers, and the provider. We are seeing significant contributions to the machine readability of licensing, SLA, and security side of API operations, but we need a lot more work when it comes to making sure the terms of service and privacy policies are something that can be processed programmatically.

I track on a couple hundred property types for API providers, but this reflects the cream off the top of the essential API operational characteristics. One of the most misunderstood aspects of APIs.json is that most people think it is for describing APIs, but it is really about describing API operations, providing a snapshot of the technology, business, and the politics of APIs. This list is defined by ten years of crawling, harvesting, and profiling APIs, studying what the healthy and not so healthy aspects of their API operations are. APIs.json has always been about mapping out this aspect of individual API operations, but more importantly entire business sectors, and the overall global API landscape—something I will be kicking into high gear by doing even more research on how the landscape is currently being mapped out using OpenAPI, AsyncAPI, and JSON Schema, while being realized at throughout the API lifecycle with Postman collections.

### Types of API Extensions

The list of API property types for APIs.json has always been defined by how API providers are doing what they do to support their communities. Overlapping with this work, but emerging from a variety of OpenAPI focused projects I am working on, and stemming from me assuming my role as co-chair of the business governance board (BGB) for the OpenAPI Initiative (OAI), I find myself further studying the ways in which the OpenAPI specification is currently being extended. [After looking through the OpenAPI extensions from 14 different providers](https://github.com/api-specification-toolbox/toolbox/issues?q=is%3Aissue+is%3Aopen+label%3Anew-extensions) I was able to break down a short (ha!) list of the ways in which API Providers are extending the specification to meet their needs for each API, but also their needs across the entire API lifecycle. Here is the breakdown of OpenAPI extensions I found while doing the work to add them to the API Specification Toolbox.

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/birth-of-a-nation-gears-pipes-plumbing.jpg)

*   **Documentation** - Expanding on the spec for publishing documentation.
*   **Examples** - Enriching the examples for each API for use across the API lifecycle.
*   **Parameters** - Providing more details about each of the path, header, or question parameters.
*   **Parameter Groups** - Helping group parameters to help make them more organized.
*   **Defaults** - Offering up a set of default values for different layers of an OpenAPI.
*   **Enumerators** - Adding more information about enumeration for properties and parameters.
*   **Versioning** - Allowing there to be more details about the versioning of each API or schema.
*   **Role Based Access Control (RBAC)** - Adding a layer for RBAC across an API and their surface area.
*   **TLS** - Providing details about the transport level security being applied to each API.
*   **Compression** - Outlining the type of compression that is available as part of each API.
*   **Validation** - Describing the validation that occurs when an API is consumed or tested.
*   **Authentication** - Expanding on the overall authentication and access management.
*   **Basic Auth** \- Providing more detail about Basic Auth that OpenAPI doesn’t provide.
*   **API Key -** Providing more detail about an API key that OpenAPI doesn’t provide.
*   **OAuth** - Providing more detail about oAuth that OpenAPI doesn’t provide.
*   **JWT** - Providing more detail about JWT that OpenAPI doesn’t provide.
*   **Environments** - Adding additional details about development, production or other environment.
*   **Management** - Defining the management layer that is in place for each API.
*   **Policy** - Allowing policies to be applied to each API being defined by OpenAPI
*   **Rate Limit** \- Defining what levels of consumption are available for each API
*   **Throttling Tier** - Further defining the overall access or throttling tiers available.
*   **Configuration** - Providing configuration for how an API should be operating.
*   **Gateway Request** - Additional information regarding the request surface of an API.
*   **Gateway Response** \- Additional information regarding the response surface of an API.
*   **Integrations** - Detailed information about the integration with another API behind an API.
*   **Backend** - Further details about backend integrations and connections behind each API.
*   **Dependencies** - Machine readability details about all of the dependencies an API has.
*   **Languages** - Machine readable information about the language available for an API.
*   **CORS** - Details about how cross origin resource sharing is addressed for an API.
*   **Code Samples -** Providing samples or snippets for all available API paths.
*   **Client Code Generation** \- Information regarding what client side code generation.
*   **Server Code Generation** \- Information regarding what server side code generation.
![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/birth-of-a-nation-grain-ship-docking-grass.jpg)*   **Requests Scripts** \- Defining scripts that are executed with each API request made.
*   **Responses Scripts -** Defining scripts that are executed after each API response.
*   **Translation** - Details about what translation occurs as part of each API request or response. 
*   **Filtering** - Information regarding what filtering is available or applied to each API request or response.
*   **Aliases** - Providing details regarding aliases for different elements of each API.
*   **Pagination** - Offering more structure regarding the pagination of API resources.
*   **Triggers** - Defining what triggers are available or executed as part of API operations.
*   **Notifications** - Outlining available notifications that are made when an API is executed.
*   **URL Encoding -** Providing more details about how a URL is encoded as part of each API resource.
*   **Data Store -** Associating a data store with each API being defined as an OpenAPI.
*   **Caching** - Adding information regarding how each API is being cached as part of operations.
*   **Security** - Further expanding on how security is handled when it comes to each API operations. 
*   **Import** - Providing additional information that needs to be considered or applied upon OpenAPI import.
*   **Export** - Providing additional information that needs to be considered or applied upon OpenAPI export.
*   **Audiences** - Offering more detail about the audience an API is intended for as part of each OpenAPI.
*   **Capabilities** - Having a machine readable defining of what each API is capable of doing.
*   **Traits** - Further outlining the traits of each of the APIs, helping further flesh out what each one does.
*   **Tags** - Adding more rich detail beyond the base tagging provided by OpenAPI.
*   **Tag Groups -** Helping group tags, adding another layer of organization to each API.

I tried to organize all of these OpenAPI extensions into groups and failed, but I did manage to generalize them a bit. Some of the extensions were very specific, while others were very broad. It is definitely like looking at apples and oranges, but it does provides a rich look at how API providers are bending the OpenAPI specification to meet their operational needs. It is something that should definitely inform the OpenAPI road map, but for me, from the operational vantage point of APIs.json, I have a lot of questions about this list regarding where each extension should actually exist. Asking if each extension be part of each individual OpenAPI, or it should it be overlaid, or maybe just exist as part of some other looser coupling. I won’t be able to answer these questions until I think more deeply about how each of these extensions apply to each individual API as well as across the lifecycle of the API. This list of extension is very OpenAPI centric, and I’d like to put some more thought into whether this extension should also be applied in AsyncAPI, JSON Schema, or maybe a Postman collection…or maybe D) all the above, or E) none of the above. 

### An API.json Index

The easiest way to understand why we created the API.json specification is to think of each definition as an index of a publicly available API. A single machine readable index for Twilio, Twitter, or more revealing—Slack. Something that each API provider creates to define their API Operations, or something that is created by someone like me to index a single API, and entire industry or universe of APIs. However, when you when you start looking at all of the API extensions above you see elements that may also be defined by an API consumer, or for the benefit of an API consumer, and not the API provider. Pushing the purpose of an APIs.json and leveraging it as something that benefits both API provider and/or consumer. However, after profiling thousands of API using APIs.json I began to also see that a more robust and mature APIs.json for an API operations can also become a sort of blueprint, and something that can be used as a checklist for delivering and operating an API.

### An APIs.json Blueprint

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/birth-of-a-nation-city-skyline-bright.jpg)

After you see more robust APIs.json indexes like from [Twilio](https://github.com/api-evangelist/twilio/blob/master/apis.json) or [Stripe](https://github.com/api-evangelist/stripe/blob/master/apis.json) you begin to see that they can become a blueprint for how to deliver APIs. If you just swap out the OpenAPI and Postman collections for each of the Twilio and Stripe APIs and add your own, you realize that have a blueprint that you can follow when operating your own API. This is all I have done with the APIs.json property types listed out above—I have defined APIs.json for thousands of APIs, then providing a distinct and grouped set of the most common property types applied by API providers. Adding the list of the API extensions to this list helps us further understand how API providers are not just operating their APIs on the ground on their API factory floors, it also reveals how they are trying to standardize how they do what they do, and more effectively communicate it using the OpenAPI specification.

### An APIs.json Orchestration

Beyond defining existing APIs, as well as delivering new APIs that are consistent and possess all the properties needed for success, APIs.json can be used to define a suite of different APIs that are used as part of a larger orchestration or delivering web, mobile, device, and network applications. If I am defining a specific type of integration that utilizes a mix of different APIs, orchestrating across APIs one time or over a longer period of time via a scheduled or CI/CD actions, or delivering a specific type of application, it will benefit me to have everything articulated as a single APIs.json definition. Further pushing how not just APIs.json or APIs.yaml works, but demonstrate how multiple machine readable specifications like OpenAPI, AsyncAPI, JSON Schema, and Postman collections can be used to orchestrate operations. Pushing all of these API specifications to work more like Terraform or Ansible, but for specifically defining the API landscape and API operations.

### Seeing the APIs Landscape Using APIs.json

Assimilating all of the details I outlined above into a single coherent index, blueprint, orchestration, or other APIs.json definition will take a lot of work. However, I would like to take what I’ve learned with this round of assessment of APIs.json property types, and research into current state of OpenAPI extensions and establish a base APIs.json definition that I could use as a lens for me to look at the both the world of APIs, but also the API specifications that are used to define that world. This APIs.json, or more specifically APIs.yaml file isn’t meant to be a real world index, blueprint, orchestration or other type of definition, it is just meant to be a sort of API landscape toolbox for me to use as I make sense of the space today, and where it might be going.

This isn’t meant to describe a single API. It is unlikely any single API would or should possess all of these individual or common properties. This is just meant to be a snapshot what is possible when it comes to operating, consuming, and orchestrating with one or many APIs. It provides me with the scaffolding to process and lay each of the extensions I discovered above, helping me evaluate whether each of the individual extensions should indeed be augmenting the OpenAPI, or maybe the AsyncAPI, JSON Schema, or possibly stand on its own legs as an independent specification or overlay. I am looking to establish a more formal way for me to process extensions that I find across the API sector, as well as better understanding how services and tooling are using API specifications to do what they do. 

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/birth-of-a-nation-seatlle-shipping-mountain.jpg)

I am not pulling all of this out of thin air.It is based upon mapping out the API landscape for over ten years--recording what I see. The OpenAPI extensions, and continued research into how API providers and service providers are extending the specification also reflects the realities on the ground across API operations. Additionally when you take into account that the infrastructure we use to design deploy, and manage APIs across the API lifecycle also have APIs, you begin to see how much of the machine readable meta data we need to fill out this APIs.json already exists, and all we need is a place to hang it. This isn’t an artifact that you will be crafting by hand. It is one that we will have to rely on API service and tooling providers across the spectrum to output and publish for us.  

Ok, I will pause there. Next I will begin to hang all of these extensions on this APIs.json scaffolding I have developed. I will need to add the bones of each of the existing machine readable APIs.json property types like OpenAPI, AsyncAPI, JSON Schema, and Postman collections. Then work my way through the OpenAPI extensions and evaluate whether they indeed should be hung within the OpenAPI, or possibly somewhere else. This is what I mean by being able to see the API landscape using APIs.json. It will help me more coherently be able to apply each individual extension, but instead of being siloed within the context of the OpenAPI namespace, I will be able to consider each of the extensions in a multi-protocol way, while also thinking about each stop along the API lifecycle in a single or multi-protocol way. Helping me better understand the API landscape, but also the current API specification landscape, and make more educated decisions around where I or we invest. Providing me with a more structured and disciplined approach to contributing to the API present and future.