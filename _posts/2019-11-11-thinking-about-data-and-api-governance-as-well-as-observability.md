---
published: true
layout: post
title: Thinking About Data and API Governance As Well As Observability
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/35201856153_61bc075e4b-nazi-invasion.jpg
author:
  name: kinlane
tags:
  - Governance
  - Observability
---
I just got back to Seattle from Washington DC after spending a day talking about data governance at [the Data Governance Design Conference](https://www.governingdata.org/). I thoroughly enjoyed the on-stage discussions as well as the hallway, and cocktail party conversation around the increasing importance of the governance of data online. I have a notebook full of thoughts from the event, and a head full of ideas after a plane ride home. I’ll be doing some more writing on the subject, but I wanted to lay the foundation of how I see the world of data governance, which is a much more technical view of things, but also overlaps nicely with the policy view of the landscape I just experienced.

The group participating in the #DGDC discussions were much more focused on the important big picture elements, and the human call to action when it comes to data governance. I learned a lot listening to these smart folks share their expertise on the world stage, and I mostly just listened and absorbed what was going on around me, occasionally sharing a bit of perspective from my view of the landscape. I have a much more technical view of the landscape, but I am captivated by the policy level discussions that were going on, which are much more closer to what I consider to be the human side of the discussion, and how laws are made to dictate what happens or doesn’t happens in countries around the globe. Coming out of the discussion I wanted to flesh out the building blocks of my technical view of the landscape, and re-evaluate them in terms of what I have heard at the event.

### Bringing APIs To The Data Governance Discussion

This was a data governance discussion, but of course I’m going to bring the API to the table. You can’t talk data governance without talking APIs. Data is the valuable resource(s) being created, passed around, and put to use—APIs are how it is passed around and put to use. APIs are how Facebook, Twitter, and Google creates, manages, and shares the data they have via applications and 3rd party systems. APIs are how these platforms are accessed and scaled. APIs are the layer that any data governance approach will have to be realized, injecting governance between how several different actors interests are protected and policed. APIs aren’t something new to bring into the discussion, they are already the conduit for how applications are being delivered, making them the layer we need to understand when it comes to applying sensible data governance from within the firewall, or externally from within regulatory bodies.

### Who Are The Actors On This Data Governance Stage

To set the stage I wanted to describe the different actors that need to be involved in these data governance discussions, making sure there are considerations, policy, and tooling in place that governs this production already in motion. When it comes to API access to the valuable data and resources we are trying to govern, a clear set of actors have emerged that we will need to make sure have a seat at the table, and are part of the data governance discussions happening—including, but not limited to this primary buckets of actors.

*   **Provider** - The platform provider, making sure the Twitters, Facebooks, Googles, and other platform providers are active and willing particpants in data governance conversation whether they want to be there or not.
*   **3rd Party** - Ensuring that ALL 3rd party consumers and developers of platform data are accounted for, have a seat at the table, and are held accountable when it comes to putting valuable data to work across the web.
*   **End-User** \- Making sure ALL end-users are represented, ensuring that the human beings most impacted by all of this data are well represented, making sure the full spectrum of people are represented, and not just a select few.
*   **Regulator** - Acknowledging that there is an increasing regulatory role in this discussion, and making sure regulators have the knowledge, skills, and access to do what they need to do from a municipal, state, and federal view.
*   **Law Enforcement** - Going one step beyond the regulatory and looking at the enforcement side of the conversation, making sure law enforcement has the access they need, but are also just as accountable as all other actors.
*   **Researcher** - Ensuring there is trusted researcher and press access to the data governance conversation, allowing for Universities, media, and other entities to participate in the analysis of data, and the API pipes the data is accessed through. 

All of these actors are already using the Twitter, Facebook, and Google APIs to do what they do. I’d say the regulator, law enforcement, and research roles are the least define here, but they are actively using APIs to adapt to the new landscape, whether it is directly via APIs, or via applications built on top of the APIs. Modern API infrastructure is currently serving all of the needs of these actors, but is currently not doing it in a structured approach with data governance in mind. Data governance already exists, but the deck is heavily tiled in favor of the platform, giving them the edge when it comes to governing 3rd parties, driving end-user behavior, and dictating what regulation, law enforcement, and research looks like on their platforms.

### Suite Of Specifications Being Employed For Data Governance

This industry and platform provider governance is being increasingly led by a handful of machine readable specifications that allow platforms to define and realize data governance across their platforms. This is where my view of the landscape shifts from the more policy oriented discussions I had yesterday, and will be seen as more technical, but in reality they aren’t—they perfectly dovetail with the objectives of all of the actors above. There are handful of standards driving the data governance across technology platforms, which are rapidly being evolved to meet the needs of platform providers, but can also be applied to help balance the data governance conversations across all of the actors involved.

*   **JSON Schema** - A schema standard for describing each individual data object, it’s properties, and the validation meta data needed to maintain integrity of each piece of data, providing a machine readable view of the data landscape that exists within enterprise organizations.
*   **OpenAPI** - An API standard for describing the surface area of an HTTP 1.1 request and response API (which most APIs are), defining how data will be accessed and made available internally and externally, leveraging JSON schema to describe the data, but goes further to describe the surface area of what is possible when it comes to access of the data.
*   **Postman Collections -** An API definition for describing the schema and API, but done in a way that allows it to be accessed and executed, providing a portable, machine readable and executable representation of any capability that a platform has, and the data being leverage as part of each capability.
*   **Postman Environments** \- An API definition for describing the authentication, authorization, and variables needed to access APIs in general, or on behalf of a specific user, providing the credentials and meta data needed to actually make one or many API calls and retrieve data in a variety of contexts.
*   **AsyncAPI** - An API standard for describing event-driven, TCP, websocket, HTTP/2 and HTTP/3, and other more real-time APIs, describing the surface area of a fast growing breed of APIs in use in B2B environments, and within the internal enterprise operations of platforms.
*   **OAuth** - An open standard for handling authentication and authorization for APIs, used by Twitter, Facebook, Google, and other APIs providing a way for platform providers, 3rd party developers, and end-users to all have a voice in what data is accessed, within establish scopes by provider and regulatory body.
*   **RBAC** - Role based authentication control for defining who has access to what, used by itself, or in conjunction with OAuth to define who has access to what data, defining roles for every stakeholder involved in data governance.
*   **APIs.json** \- API open standard for indexing API operations, and all the common building blocks like where documentation, signup and terms of service are for an API, while also indexing all of the artifacts listed above as part of a wider governance and discovery pfft.

These specifications are currently being used by platforms to get a handle on data governance across operations. Some organizations are further along in this journey, while most are still just getting a handle on their "big data problem", as well as governance of this explosion in data they find themselves drowning in. All of these machine readable artifacts can be used to negotiate, define, and automate governance across platforms, and within specific business sectors. You can find a variety of these artifacts for leading API platforms, and you can find them baked into the services, tooling, and infrastructure being put to use by companies, organizations, institutions, and government agencies. 

### Leveraging Existing Infrastructure In Service Of Data Governance

Next up is the infrastructure that platform providers are already using to operate their APIs, and make data, content, and other resources available using the web. These common architecture components are already in use across platform providers, helping operate their existing API, application, device, and system integrations. These are just a handful of the common architectural areas of consideration when it comes to data governance across the enterprise.

*   **API Gateway** \- An architectural component used to deploy and manage APIs, connecting them to backend services, storage, and database components.
*   **API Management** - An architectural solution for governing access to APIs, helping organization APIs in logical service tiers, and manage access to resources.
*   **Storage** - Common storage in use across API, application, device, and system integrations, providing varying grades of object and data storage.
*   **Database** - Common or specialized database where data is stored and organized, then made available via well defined API implementations.
*   **Logging** - The gathering of activity logs across all areas of operation providing a record of every engagement with data resources being made available APIs.

These are key architectural components already in use across the enterprise to govern the creation, access, evolution, and use of data on any platform. However there are two additional dimensions to this conversation that should be taken into consideration when thinking about how existing modern API infrastructure can be used to govern data within the enterprise, as well as externally within regulated industries. 

*   **Infrastructure APIs** \- All of these infrastructure components all have APIs, allowing for remote and automated management of the data governance life cycle--yes APIs have APIs.
*   **Logging** - All of these infrastructure components all have logging, allowing the data governance life cycle to tracked, audited, and managed programmatically.

Logging and APIs are essential to properly governing the access to data via APIs. API gateways, management, storage, and databases are essential to properly governing the access to data via APIs. Leading technology platform providers have been developing and using this infrastructure for 20 years, and it is becoming a mainstream practice with all enterprise organization realizing they need to operate their APIs in not just an API-first way, but also to develop mature data and API governance practices along they way. We have the infrastructure needed to properly govern data at scale within the enterprise, and externally across industries--we just need the will to use it for proper data governance.

### Ensuring There Is Always Platform Observability

Behind the key infrastructure elements, and specifications in use, there is one more dimension of existing API operations that contributes significantly to the data governance conversation. There is a philosophy emerging out of historical industrial control practices called observability, which helps more effectively govern their platform operations by providing them with more visibility or observability into what is happening, using the existing outputs of these architectural components listed above. Observability spans several essential aspects of operating platforms at scale.

*   **Monitoring** - The monitoring of infrastructure to understand the overall health and availability of platform resources.
*   **Performance** - The monitoring of infrastructure from multiple to regions to understand the performance of platform resources.
*   **Privacy** - The monitoring of how data is access to ensure there are no breaches of privacy based upon agreed upon policies.
*   **Security** - Allowing the platform to identify and understand threats, address vulnerabilities, and mitigate breaches of access to data.
*   **Service Level Agreements (SLA)** - Providing governance over the SLAs in place between platform providers and their consumers.
*   **Transparency Reports** - Publishing regular information regarding how data is shared with law enforcement and government agencies.

Observability provides platform providers with visibility into everything that is occurring across a platform. If it can do this for providers, it can also be leveraged on behalf of other stakeholders, providing visibility into essential areas for other actors like 3rd party developers, end-users, regulators, and researchers. Defining a set of observability policies in the service of data governance, helping ensure the health of the overall platform across every dimension of concern for each of the actors involved in the governance of data.

### The Technology And Processes For Data Governance Already Exists

Data governance is something enterprise organizations already desire and work towards, using existing proprietary API services and open source tooling, and specifications. Data governance is not equally balanced across all of the data governance stakeholders listed above. This is an approach I have talked about several times before [in service of governing Facebook](https://apievangelist.com/2018/03/26/a-regulatory-framework-for-facebook-and-other-platforms-is-already-in-place/), being [applied to the banking industry](http://open.banking.blueprint.apievangelist.com/), and [API governance models for both the public and private sector](https://apievangelist.com/2018/07/19/api-governance-models-in-the-public-and-private-sector/). The technology and processes already exist to realize data governance across the enterprise, and the industries they operate in. The only thing that is missing is the desire to do so in a balanced way across all data governance stakeholders, and the establishment of well-defined blueprints for how to conduct data governance at this scale well. 

I will use this as my base for some more storytelling on the subject, and keep working through my notes from the Data Governance Design Conference. I have a lot of work to do to keep evolving my blueprints for conducting data governance using API infrastructure, specifications, and processes. I am thinking I need some more real world examples of doing this at scale for multiple industries, not just banking. Maybe apply it to what I know about Facebook, Twitter, and say YouTube—three API platforms I think could use a little more investment in observability and data governance. Then I will look at some more examples of data governance when it comes to health care, entertainment, and some of the other areas where data is making a significant positive or potentially negative effect on a wide audience of people—pushing my own understanding of how data governance might play out in coming years.