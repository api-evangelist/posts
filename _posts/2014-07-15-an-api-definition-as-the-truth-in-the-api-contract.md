---
layout: post
title: An API Definition As The Truth In The API Contract
url: >-
  http://apievangelist.com/2014/07/15/an-api-definition-as-the-truth-in-the-api-contract/
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-contract.png
author:
  name: kinlane
tags:
  - Definition
  - Contract
---
**Swagger is now Open API Definition Format (OADF) -- [**READ MORE**](http://apievangelist.com/2015/11/05/the-swagger-spec-is-reborn-as-open-api-definition-format-oadf-after-being-put-into-open-api-initiative-oai/)**

/kinlane-productions2/

![](https://s3.amazonaws.com/kinlane-productions/bw-icons/bw-contract.png)

One conversation I had at #Gluecon this year, was around the role an API plays in being a contract between providers and consumers, with Tony Tam ([@fehguy](https://twitter.com/fehguy)) from [Reverb](https://helloreverb.com/). API contract, is a common phrase to describe how API services are consumed, and depending on the on-boarding process, an API provider and consumer can enter into a contract for services around a set of resources, in a self-service way.

In the last couple years, with the increased use of API definition formats like API Blueprint, Swagger, and RAML, we often reference this API definition as a tangible representation of the contract API providers and consumers enter into. In my mind, I see the API definition as one building block, in a larger set of building blocks, that are working together to form a contract, with the API definition acting as the truth.

If you step back and look across multiple API providers, you start to see a variety of building blocks that contribute to the overall "API Contract", that is negotiated between API provider and consumer, starting with the API definition.

**Definition**  
A machine readable definition of an API interface, using a common format like API Blueprint, Swagger or RAML, providing a definition of the surface area of the resources that are available via API. API definitions are proving to be very useful in establishing a common way to describe, communicate and collaborate around APIs, which are often extremely abstract.

**Terms of Service**  
Terms of service are the legal portion of the API contract, determining how the service can be used, keeping the company’s interest in mind, but should also be liberal enough to allow developers and 3rd party integrators to be successful. Plain english version of terms of service go a long way in seamlessly fitting into the API contract, allowing API consumers to quickly understand where they stand.

**Privacy**  
The privacy of a platform, is definitely a very critical element of the API contract, and sets the tone for a platform operations, contract with developers, and their promise to the end-users. An awareness, and respect of privacy issues is part of every success API platform, and feeds into the overall health of the contractrual relationship.

**Service Level Agreement**  
A service level agreement (SLA), sets the quality of service expectations within the API contract. All API consumers should have some sort of SLA that provides a definition of the services being offered, and the level of service, and the reliability end-users can expect as part of API consumption.

**Service Accord**  
As an API provider, if you can’t offer a formal SLA, you should at least provide a service accord with users, setting expectations around what level of service will be offered around an API, and while a service accord isn’t legally binding, it can at least help set expectations, and the tone of API operations for consumers.

**Interface License**  
The Oracle v Google legal battle has brought API licensing front and center, making them part of the overall contract of API operations. Whether you apply copyright, or some other license, an API license will be part of the contract entered into between API provider and consumer.

**Data License**  
Like an API interface, the licensing of underlying data stored, and returned by an API needs to have a license defined, providing guidance for developers, and businesses that are consuming an APIs data, and how they can store, remix, and put data to use.

**Code License**  
Providing code in the form of samples, libraries, and SDKs is common practice for API providers, and the how the code is licensed will determine how API consumers integrate an API into their, providing another layer of licensing within the API contract. This doesn't end with client side code, many APIs will also offer server side API implementations, which should also be appropriately licensed.

**Deprecation Policy**  
How long can API consumers depend on an API? What sort of notification will I get before an API is deprecated? The deprecation policies of an API, play a significant role in the trust established as part of the API contract that API providers and consumers agree to.

**Roadmap**  
Contracts are know for targeting a specific period of time, but API contracts are considered to be open ended, and part of that obligation is communication and openness around an APIs roadmap, providing critical details on what is next for an API, allowing API consumers to trust that a contract will not change to quickly.

**Changelog**  
Providing a place where API consumers can see a recent history of changes to an API platform offers a reference, for how often an API changes, and how its evolved over time, balancing out marketing and potential rhetoric around API operations.

**Rate Limits**  
As an API consumer, if we are entering into a contract, I need to know how my contract will scale, and where I exist in the API supply chain. Rate limits provide a unit of measurement that can be used as part of the API contract, quantifying expectations and deliverables.

**Uptime / Availability**  
You can offer a low cost, high value API service, but if your availability and uptime sucks, you are not delivering on the contract entered into with API consumers, making this aspect of operations a very important piece of the API contract.

**Pricing**  
Stipulating the price paid for a service is fundamental to any contract, and the pricing of a particular API represents the value that is exchanged between API provider and consumer, as part of the API contract.

**Service Tiers**  
Most modern APIs have multiple access levels, providing contract negotiation opportunities between API provider and consumer, a feature that allows API contracts to be negotiated, or re-negotiated in real-time, based upon known service tiers.

**Support**  
A contract is a relationship between two businesses, and any relationship requires support to be successful. Direct, and indirect API support provides assurances to API consumers that once they enter into a contract, the API provider will be there to help in all phases of contract execution.

An API definition provides a tangible, machine readable lens to look at the API contract through, providing a quantifiable truth that describes how an API will be delivered, but the actual API contract requires a suite of other supporting elements, starting with terms of service, and continuing through to how a company supports an API, before the API contract is fully realized.

I'm very optimistic about the evolution of API [design](http://design.apievangelist.com), [deployment](http://deployment.apievangelist.com), and [management](http://management.apievangelist.com) in 2014, now that we have the ability to define an API, and quantify the resources interface in a machine readable format. Next we need the same for the other portions of the "API contract", so that we can negotiate contracts for online resources in an automated, frictionless, real-time way.

_**Photo Credit:** [Michela Tannoia](http://thenounproject.com/michela.tannoia/)_

**Updated November 27, 2015:** Links were updated as part of switch from Swagger to OADF ([**READ MORE**](http://apievangelist.com/2015/11/05/the-swagger-spec-is-reborn-as-open-api-definition-format-oadf-after-being-put-into-open-api-initiative-oai/))