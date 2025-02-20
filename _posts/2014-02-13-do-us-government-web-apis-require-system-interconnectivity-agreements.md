---
layout: post
title: Do US Government Web APIs Require System Interconnectivity Agreements?
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-handshake.jpg
author:
  name: kinlane
tags:
  - Web
  - Government
  - APIs
---
I'm been so busy with work lately, I haven't been able to maintain my usual rhythm of blog posts on API Evangelist. The good news is I'm doing some interesting work that I'm able to pull stories from. This post is from a forum post I made on the [US Government API forum](https://groups.google.com/forum/#!forum/us-government-apis) i frequent, which has some very interesting conversations about APIs in the federal government.

In a recent post from Brian over at [DC3 (Defense Cyber Crime Center)](http://dc3.mil/), an interesting question was asked: [Do US Government Web APIs Require System Interconnectivity Agreements?](https://groups.google.com/forum/#!topic/us-government-apis/lsvsBHpPNlQ) I will let you visit the conversation and see more detail around his question, as well as some of the other responses, but here were some of my thoughts:

Web / http APIs do not fit earlier definitions of “system interconnectivity agreements”, which represents the technical and fundamental shift between network connections, SOAP APIs and this new world of web APIs.  
   
Web APIs were successful in part because of the loosely coupled nature of HTTP, leveraging a client / server and request / response. There is interconnectivity, but not the tight coupling and governance of previous network protocols and APIs. 

 APIs are the contract! Each API endpoint provides access to a resource, then with accompanying management building blocks, you dial in that contract.  
   
At the **API provider level**, you can enforce / encourage interoperability using common web api approaches:

*   **API Definitions** \- Machine readable API definitions like [Swagger](https://helloreverb.com/developers/swagger), [API Blueprint](http://apiblueprint.org/) and [RAML](http://raml.org/) can provide templates that enforce / encourage common blueprints that providers can follow when publishing APIs to centralized or decentralized API management platforms, establishing base contracts for interoperability, as well as underlying data models.
*   **Terms of Use** - Common terms of use can be established for management, allowing provides to contract their own TOS that is tailored for specific resources, but derived from common patterns. You see this emerging in private sector with [Swedish API License](http://apivoice.com/2013/12/16/api-terms-of-service-wizard-from-swedish-api-license/).
*   **Licensing** - Much like TOS, common licensing blueprints can be provided, allowing data and resource licensing to be tailored for resources, but pulled from existing licensing pools. Many API providers are providing a [base stack of licensing arrangements](http://apivoice.com/2014/01/16/what-is-your-api-content-licensing-default/) that meet their needs as well as consumers.
*   **Service Level Agreements (SLA)** - Same as TOS, service level agreements can be forged allowing API providers to meet expectations of consumers. Some SLAs are loose and some are tight, depending on goals.
*   **Security** - Common tooling and practices around the security of APIs need to be established, using common approaches like API Keys, oAuth, SSO and other common standards already in use. As with API interface patterns, data models, etc, each API provider should not be allowed to bring their home brew security to the table.
*   **Service Composition** - A practice referred to as “service composition” is a common part of all API management platforms currently available. Service composition allows API providers to build service tiers and compose products from API resources, establishing different levels of access and usage that can be designed for internal, partner or public access to resources. Ie. Service tier A allows read only access to APIs with specific rate limits, while service tier B allows read / write access with unlimited. Service composition reflects and extends the contract that an API is. 
*   **Analytics** - Real-time metrics give API providers with living views into API registration and usage, allowing an organic view into how resources are truly being used, allowing for real-time adjustments, enforcements, and service level composition adjustments to be made. This will allow providers to respond to adverse conditions by tightening control and stimulate innovation by loosening control as needed.

All of these provider level building blocks work in concert to standardize design, deployment and management of common API resources. They provide a common backbone that make APIs a living contract, that is flexible enough to work with many different resources and agencies, without being too rigid—providing the ability to innovate, while still establishing desired levels of governance, which will vary from agency to agency and resource to resource.  
  
At the **API consumer level**, you can enforce / encourage interoperability using common web api approaches:

*   **Portal** - Each API will have one or many portals where you access the APIs and supporting documentation. The availability of a portal, whether its public or private can reflect access and interoperability goals for API providers. Portal availability is the gateway to interoperability enforcement / encouragement.
*   **Registration** - Even if you have access to an API resource, and it is publicly available, most APIs require registration to obtain required application keys or obtain necessary oAuth credentials. Registration can be self-service, invite only or require approval, providing all levels of enforcement / encouragement of agreements.
*   **Security** - Each API provider has designated appropriate API security levels derived from a common pool of tools and standards. Consumers are guided by API provider security standards, operate within API key restrictions, oAuth identity and access restrictions, and designated service composition frameworks that are linked to security access levels. Security is not just technology, it transcends business and politics of API interoperability.
*   **Terms of Service** - Every API consumer is bound by the API TOS at the point of registration, and will be legally required to agree / adhere to future changes. 
*   **Best Practices -** Best practices provide a plain english explanation of legal TOS for all API consumers, ensuring that all API consumers truly execute on TOS that are set forth, cause you know, nobody reads TOS.
*   **Service Level Agreements (SLA)** -  - Service Level Agreements can be extended to all API consumers as part of their service level composition, registration and TOS. SLAs provide necessary real-time expectations of system performance.
*   **Analytics** - Real-time metrics are provided to API consumers letting them know the reality of their  API consumption, where they exist within service level agreements, service composition, and other aspects of API interoperability and agreements.

All the building blocks listed above provide the two-sides of the web API coin. Modern API initiatives from Amazon, Google, Twitter and thousands of other companies are proving that loosely coupled, modular approaches to API design, deployment and management provide a flexible, agile approach to interoperability that isn't as rigid as classic API approaches or networking protocols.  
  
All of these building blocks work in concert to orchestrate interoperability that protects the interest of API providers and consumers, and even 3rd party intermediaries. You even seen this approach to interoperability move from the technical, to meaningful reciprocity across providers, as we've seen with newer generation of automation providers like If This Then That and Zapier—building on legacy ETL concepts, but bringing into a new global, Internet era.  
  
We have to establish case studies that will shift decision makers away from more rigid approaches. Without them we won't be able to achieve the flexibility that web APIs bring, and are left with a heavy handed Tech + Legal governance.  
  
So to directly answer your questions:  
  
**1) Do US Gov Web APIs \*require\* system interconnectivity agreements?  Which policies and conditions?** 

NO!  
  
**2) Can system interconnectivity agreements be mitigated to a common agreement instead of agency-specific? (i.e.  single information sharing agreement, and/or Acceptable Use Policies, common Terms of Service per API provider )**

  

YES!  
  
**3) Which policies/guidance can be leveraged prevent the specific use of "system interconnectivity agreements" into the rest of the US Gov Web API space?** 

The patterns exist in private sector and are slowly emerging in government. We just need to work to identify, standardardized and establish the case studies we need to steer away from the  specific use of "system interconnectivity agreements".