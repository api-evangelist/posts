---
published: true
layout: post
title: What Is APIs.json? And What Is Next For the API Discovery Format?
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-discovery.png
author:
  name: kinlane
tags:
  - Discovery
  - Discover
  - APIs.json
  - APIs
  - APIs.jso
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-discovery.png)](http://apisjson.org/)

As part of a renewed focus on the [API discovery definition format APIs.json](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-discovery.png), I wanted to revisit the propsed machine readable API discovery specification, and see what is going on. First, what is APIs.json? It is a machine readable JSON specification, that anyone can use to define their API operations. APIs.json does not describe your APIs like [OpenAPI Spec](https://github.com/OAI/OpenAPI-Specification) and [API Blueprint](https://apiblueprint.org/) do, it describes your surrounding API operations, with entries that can reference your Open API Spec, API Blueprint, or any other format that you desire.

**APIs.json Is An Index For API Operations**  
APIs.json provides a machine readable approach that API providers can put work in describing their API operations, similar to how web site providers describe their websites using [sitemap.xml](https://www.xml-sitemaps.com/). Here are the APIs, who are describing their APIs using APIs.json:

[**APIStrat Austin API**](http://austin2015.apistrat.com/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](http://austin2015.apistrat.com/apis.json "Website")

[**API Evangelist**](http://developer.apievangelist.com/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](http://developer.apievangelist.com/apis.json "Website")

[**Acuity Scheduling**](https://acuityscheduling.com/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](https://acuityscheduling.com/apis.json "Website")

[**BreezoMeter**](http://breezometer.com/static/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](http://breezometer.com/static/apis.json "Website")

[**CheckMarket**](https://api.checkmarket.com/3/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](https://api.checkmarket.com/3/apis.json "Website")

[**Clarify**](http://clarify.io/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](http://clarify.io/apis.json "Website")

[**Data Validation**](https://developer.datavalidation.com/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](https://developer.datavalidation.com/apis.json "Website")

[**DNS Check**](https://www.dnscheck.co/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](https://www.dnscheck.co/apis.json "Website")

[**Email Hunter**](https://emailhunter.co/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](https://emailhunter.co/apis.json "Website")

[**FeedbackHub**](https://feedbackhub.co.uk/api/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](https://feedbackhub.co.uk/api/apis.json "Website")

[**Fitbit**](https://www.fitbit.com/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](https://www.fitbit.com/apis.json "Website")

[**Gavagai**](http://gavagai.se/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](http://gavagai.se/apis.json "Website")

[**Kin Lane**](http://developer.kinlane.com/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](http://developer.kinlane.com/apis.json "Website")

[**Link Creation Studio**](https://www.linkcreationstudio.com/developer/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](https://www.linkcreationstudio.com/developer/apis.json "Website")

[**OneMusicAPI**](http://www.onemusicapi.com/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](http://www.onemusicapi.com/apis.json "Website")

[**Pandorabots API**](https://s3.amazonaws.com/enterprise-multitenant.3scale.net.3scale.net/pandorabots/2014/11/24/apis-35a2e2943bc0ef78.json?AWSAccessKeyId=AKIAIRYLTWBQ37ZNGBZA&Expires=1455947523&Signature=0RKNkK%2BnlCbkILpfwno6wh2neZo%3D)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](https://s3.amazonaws.com/enterprise-multitenant.3scale.net.3scale.net/pandorabots/2014/11/24/apis-35a2e2943bc0ef78.json?AWSAccessKeyId=AKIAIRYLTWBQ37ZNGBZA&Expires=1455947523&Signature=0RKNkK%2BnlCbkILpfwno6wh2neZo%3D "Website")

[**Qalendra**](https://qalendra.com/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](https://qalendra.com/apis.json "Website")

[**RiteTag**](https://ritetag.com/assets/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](https://ritetag.com/assets/apis.json "Website")

[**Singlewire**](https://www.singlewire.com/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](https://www.singlewire.com/apis.json "Website")

[**SiteCapt**](https://sitecapt.com/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](https://sitecapt.com/apis.json "Website")

[**Social Searcher API**](http://www.social-searcher.com/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](http://www.social-searcher.com/apis.json "Website")

[**Super Monitoring**](http://www.supermonitoring.com/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](http://www.supermonitoring.com/apis.json "Website")

[**Timekit**](http://api.timekit.io/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](http://api.timekit.io/apis.json "Website")

[**Trade.gov**](https://developer.trade.gov/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](https://developer.trade.gov/apis.json "Website")

[**Twitch Bot Directory**](https://twitchbots.info/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](https://twitchbots.info/apis.json "Website")

[**EnClout**](http://enclout.com/api/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](http://enclout.com/api/apis.json "Website")

[**frAPI**](http://api.meerkat.com.br/frapi/docs/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](http://api.meerkat.com.br/frapi/docs/apis.json "Website")

[**Section.io**](https://aperture.section.io/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](https://aperture.section.io/apis.json "Website")

[**Spoonacular**](https://spoonacular.com/apis.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](https://spoonacular.com/apis.json "Website")

**APIs.json Indexes Can Be Created By 3rd Parties**  
One important thing to add, is that these APIs.json files can also be crafted, and published by external parties. An example of this is with the Trade.gov APIs. [I originally created that APIs.json file](http://developer.trade.gov.apievangelist.com/apis.json), and coordinated with them to eventually it get published under their own domain, making it an authoritative APIs.json file. Many APIs.json files will be born outside of the API operations they describe, something you can see in my API stack project:

*   [The API Stack](http://theapistack.com/companies.html) - Provides almost 1000 APIs.json files, that describe the API operations of many leading public API platforms. There is also around 300 OpenAPI specifications, for some of the platforms described

**APIs.json Can Be Used To Describe API Collections**  
Beyond describing a single API, within a single domain, APIs.json can also be used to describe entire collections of APIs, providing a machine readable way to organize, and share valuable collections of API resources. Here are a few examples of projects that are producing APIs.json driven collections.

*   [Defining APIs that you depend on for organizational operation.](http://stack.apievangelist.com/apis.json)
*   [Defining a specific category of API operations, using the format.](http://monitoring.apievangelist.com/apis.json)
*   SMS - [http://sms.stack.network/](http://sms.stack.network/)
*   MMS - [http://mms.stack.network/](http://mms.stack.network/)
*   Email - [http://email.stack.network/](http://email.stack.network/)
*   News - [http://news.stack.network/](http://news.stack.network/)

**APIs.json Can Be Used To Describe Collections of Collections**  
Then taking things up another rung up the chain, APIs.json can also provide a collection of collections, something I do with my own APIs. Each Github organization on my network has a master APIs.json, providing include links to all other APIs.json within the organization. In this scenario I have over 30 other APIs.json indexed, which can all operate independently of each other, but can also be considered a collection of API collections.

*   [Master](https://kin-lane.github.io/master/apis.json) - A master collection of API collections I maintain as part of the API Evangelist network operations.

**The First Open Source Tooling For APIs.json**  
Up until now, this post is all about APIs.json, where in reality the format is useless without their being any tooling built on top of the specification, bringing value to the table. This is why the 3Scale team got to work building an open source APIs.json driven search engine:

*   [APIs.io](http://apis.io/) as an open source tool dedicated to APIs.json
*   [APIs.io](http://apis.io/) as a public API search engine, with APIs.json as index.
*   [APIs.io](http://apis.io/) as a private API search engine, with APIs.json as index.

**APIs.json Driving Other Open Tooling**  
APIs.io is just the beginning. It won't be enough to convince all API providers that they should be producing APIs.json index of their site operations, just for the API discovery boost. We are going to need APIs.json driven tooling that will service every other stop along the life cycle, including:

*   **HTTP Client / Hub / Workbenches**
*   **Documentation**
*   **Testing**
*   **Monitoring**
*   **Virtualization**
*   **Visualization**

**APIs.json Integrated Into Existing Platforms**  
What areas would you like to see served? Personally, I would like to have the ability to load / unload my APIs.json collections into any service that I use. Allowing me to organize my internal, public, and 3rd party APIs I depend within any platform out there that is servicing the API space. Here are a handful of those types of integrations that are already happening:

*   **[WarewolfESB](http://warewolf.io/ESB-blog/swagger-apisjson-support/)** \- ESB integration and API discovery.
*   **[SwaggerHub](http://swagger.io/integrating-with-the-swaggerhub-api/)** \- Public and private API hub discovery.
*   **API Management** - In Progress w/ [3Scale](https://3scale.net)...
*   **API Monitoring** - In Progress with [API Science](http://apiscience.com)...
*   **API Change Log** \-  In Progress with [API ChangeLog](http://apichangelog.com)...
*   **[SmartBear](https://smartbear.com/plugins/apis-io-import-export/) -** API discovery for monitoring, testing, virtualization, and security.
*   **[API Evangelist](http://developer.apievangelist.com/)** - API analyst operations.
*   **[Kin Lane](http://developer.kinlane.com/)** \- API factory operations (not organic)
*   **[Adopta.Agency](http://adopta.agency)** - Government open data publishing.

**APIs.json Linking To The Human Aspects Of API Operations**  
APIs.json is just the scaffolding to hang links to essential aspects of your operations, it doesn't care what you link to. You can start by referencing essential links for your API operations like:

*   **Signup** - How to signup for a service.
*   **Support** - Where to get support. 
*   **Terms of Service** \- Where are the terms of service.
*   **Pricing** - Where to find the pricing for a service.

**APIs.json Linking to Machine Readable Aspects of API Operations**  
These do not have to be machine readable links, they can reference important things the humans will need first. However, ultimately the goal is to make as much of the APIs.json index as machine readable as possible, using a variety of existing API definition formats, available for a variety of purposes.

*   [OpenApI Spec](https://github.com/OAI/OpenAPI-Specification), for API description.
*   [API Blueprint](https://apiblueprint.org/), for API description.
*   [API Common](http://apicommons.org/), for API licensing.
*   [Postman](https://www.postman.com/docs/collections), for run-time.

**Defining New, Machine Readable Property Elements For APIs.json**  
While the APIs.json spec will evolve, something I talk about below, its real strength lies in its ability to incentivize the development of entirely new, machine readable API definitions, bringing even more value to the API discovery process. Here are a few of the additional specs being crafted independent of, but inspired by APIs.json:

*   [API Plans](http://apievangelist.com/2016/02/13/my-tooling-and-api-for-gathering-and-organizing-the-details-of-the-plans-and-pricing-for-apis/), for pricing, plans & rate limits.
*   API Monitoring, for monitoring & testing.
*   API Changelog, for operational monitoring.
*   API SDK, for SDK reference.
*   API Conversations - for the stream around API operations

**Roadmap for Version 0.16 of APIs.json**  
That is the 100K view of what is APIs.json now, and the short term plan for the future. Most of the change within the universe APIs.json is mapping will occur add the individual API, and within the machine readable specs that describe them like OpenAPI Spec, API Blueprint, and Postman. Secondarily, there will be additional, machine readable, API types being defined and added into the spec.

Even with this reality, we do have a handful of changes planned for the 0.16 version of APIs.json:

*   **commons** - Establish a top level collection of common property elements that apply to ALL APIs being referenced in an APIs.json
*   **country** - Adding a top level country reference using [ISO 3166](http://www.iso.org/iso/country_codes).
*   New Proper Elements - Suggesting a handful of new property elements to reference common API operation building blocks
    *   Registration
    *   Blog
    *   Github
    *   Twitter

I doubt we will see many new additions like commons and country. In the future most of the structural changes to APis.json will be derived from first class property elements (ie. adding documentation or Github), making this the proving ground for defining what are truly the most important aspects of API operations, and what should be machine readable vs human readable.

**The Hard Work That Lies Ahead for APIs.json**  
That concludes defining what is APIs.json, and what is next for APIs.json. Now we really have to get to work, doing the heavy lifting around:

*   Getting more API providers to describe their API operations using APIs.json, and publish in the root of the domain for their API ecosystem.
*   Encourage more API evangelists, brokers & analysts using to describe their collections, using APIs.json, building more meaningful indexes and directories of high value APIs.
*   Encourage platforms to build APIs.json into their operations, as a storage and organization schema, but also as import / export format.
*   Incentivize the development of more meaningful tooling that employs APIs.json, and uses it to better serve the API life cycle.
*   Continue to add new API property elements, making sure as many of them as possible evolve to be machine readable, as well as first class citizens in the APIs.json specification.

You can stay involved with what we are up to via [the APIs.json website](http://apisjson.org/), and [the APIs.json Github repository](https://github.com/apis-json/api-json). You can also stay in tune with what is going on with [APis.io via the website](http://apis.io/), and its Github repository. If you are doing something with APIs.json, ranging from using it as an index for your API operations, to platform integrations, please let me know. Also, if you envision some interesting tooling you'd like to see happen, [make sure and submit a Github issue letting us know](https://github.com/apis-json/api-json/issues/new). 

While we still have huge amounts of work to do, when it comes to delivering meaningful API discovery solutions that the industry can put to work, I am pretty stoked with what we have managed to do over the last two years of work on the APIs.json specification, and supporting tooling--momentum that I feel picking up in 2016.