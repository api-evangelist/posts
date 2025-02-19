---
layout: post
title: Building Blocks Of API Deployment
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-deployment-2.jpg
author:
  name: kinlane
tags:
  - Deployment
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-deployment-2.jpg)](http://deployment.apievangelist.com/)

As I continue my research the world of [API deployment](http://deployment.apievangelist.com), I'm trying to distill the services, and tooling I come across, down into what I consider to be a common set of building blocks. My goal with identifying API deployment building blocks is to provide a simple list of what the moving parts are, that enable API providers to successfully deploy their services.

Some of these building blocks overlap with other core areas of my research like [design](http://design.apievangelist.com/), and [management](http://management.apievangelist.com/), but I hope this list captures the basic building blocks of what anyone needs to know, to be able to follow the world of API deployment. While this post is meant for a wider audience, beyond just developers, I think it provides a good reminder for developers as well, and can help things come into focus. (I know it does for me!)

Also there is some overlap between some of these building blocks, like API Gateway and API Proxy, both doing very similiar things, but labeled differently. Identifying building blocks for me, can be very difficult, and I'm constantly shifting definitions around, until I find a comfortable fit--so some of these will evolve, especially with the speed at which things are moving in 2014.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-csv.png)

**CSV to API** - Text files that contain comma separate values or CSVs, is one of the quickest ways to convert existing data to an API. Each row of a CSV can be imported and converted to a record in a database, and easily generate a RESTful interface that represents the data stored in the CSV. CSV to API can be very messy depending on the quality of the data in the CSV, but can be a quick way to breathe new life into old catalogs of data lying around on servers or even desktops. The easiest way to deal with CSV is to import directly into database, than generate API from database, but the process can be done at time of API creation.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-database.png)

**Database to API** - Database to API is definitely the quickest way to generate an API. If you have valuable data, generally in 2013, it will reside in a Microsoft, MySQL, PostgreSQL or other common database platform. Connecting to a database and generate a CRUD, or create, read, updated and delete API on an existing data make sense for a lot of reason. This is the quickest way to open up product catalogs, public directories, blogs, calendars or any other commonly stored data. APIs are rapidly replace database connections, when bundled with common API management techniques, APIs can allow for much more versatile and secure access that can be made public and shared outside the firewall.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-ladder.png)

**Framework** - There is no reason to hand-craft an API from scratch these days. There are numerous frameworks out their that are designed for rapidly deploying web APIs. Deploying APIs using a framework is only an option when you have the necessary technical and developer talent to be able to understand the setup of environment and follow the design patterns of each framework. When it comes to planning the deployment of an API using a framework, it is best to select one of the common frameworks written in the preferred language of the available developer and IT resources. Frameworks can be used to deploy data APIs from CSVs and databases, content from documents or custom code resources that allow access to more complex objects.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-proxy.png)

**API Gateway** - API gateways are enterprise quality solutions that are designed to expose API resources. Gateways are meant to provide a complete solution for exposing internal systems and connecting with external platforms. API gateways are often used to proxy and mediate existing API deployments, but may also provide solutions for connecting to other internal systems like databases, FTP, messaging and other common resources. Many public APIs are exposed using frameworks, most enterprise APIs are deployed via API gateways--supporting much larger ideployments.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-proxy.png)

**API Proxy** - API proxy are common place for taking an existing API interface, running it through an intermediary which allows for translations, transformations and other added services on top of API. An API proxy does not deploy an API, but can take existing resources like SOAP, XML-RPC and transform into more common RESTful APIs with JSON formats. Proxies provide other functions such as service composition, rate limiting, filtering and securing of API endpoints. API gateways are the preffered approach for the enterprise, and the companies that provide services support larger API deployments.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-connector)

**API Connector** - Contrary to an API proxy, there are API solutions that are proxyless, while just allowing an API to connect or plugin to the advanced API resources. While proxies work in many situations, allowing APIs to be mediated and transformed into required interfaces, API connectors may be preferred in situations where data should not be routed through proxy machines. API connector solutions only connect to existing API implementations are easily integrated with existing API frameworks as well as web servers like Nginx.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-hosting)

**Hosting** - Hosting is all about where you are going to park your API. Usual deployments are on-premise within your company or data center, in a public cloud like Amazon Web Services or a hybrid of the two. Most of the existing service providers in the space support all types of hosting, but some companies, who have the required technical talent host their own API platforms. With HTTP being the transport in which modern web APIs put to use, sharing the same infrastructure as web sites, hosting APIs does not take any additional skills or resources, if you already have a web site or application hosting environment.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-alarm-clock.png)

**API Versioning** - There are many different approaches to managing different version of web APIs. When embarking on API deployment you will have to make a decision about how each endpoint will be versioned and maintained. Each API service provider offers versioning solutions, but generally it is handled within the API URI or passed as an HTTP header. Versioning is an inevitable part of the API life-cycle and is better to be integrated by design as opposed to waiting until you are forced to make a evolution in your API interface.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-documents.png)

**Documentation** - API documentation is an essential building block for all API endpoints. Quality, up to date documentation is essential for on-boarding developers and ensuring they successfully integrate with an API. Document needs to be derived from quality API designs, kept up to date and made accessible to developers via a portal. There are several tools available for automatically generting documentation and even what is called interactive documentation, that allows for developers to make live calls against an API while exploring the documentation. API documentation is part of every API deployment.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-code.png)

**Code Samples** - Second to documentation, code samples in a variety of programming languages is essential to a successful API integration. With quality API design, generating samples that can be used across multiple API resources is possible. Many of the emerging API service providers and the same tools that generate API documentation from JSON definitions can also auto generate code samples that can be used by developers. Generation of code samples in a variety of programming languages is a requirement during API deployment.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-scraper.jpg)

**Scraping** - Harvesting or scraping of data from an existing website, content or data source. While we all would like content and data sources to be machine readable, sometimes you have just get your hands dirty and scrape it. While I don't support scraping of content in all scenarios, and business sectors, but in the right situations scraping can provide a perfectly acceptable content or data source for deploying an API.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-shipping-container.png)

**Container** - The new virtualization movement, lead by Docket, and support by Amazon, Google, Red Hat, Microsoft, and many more, is providing new ways to package up APIs, and deploy as small, modular, virtualized containers.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-github.jpg)

**Github** - Github provides a simple, but powerful way to support API deployment, allowing for publsihing of a developer portal, documentation, code libraries, TOS, and all your supporting API business building blocks, that are necessary for API effort. At a minimum Github should be used to manage public code libraries, and engage with API consumers using Github's social features.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-terms-conditions.png)

**Terms of Use / Service** - Terms of Use provide a legal framework for developers to operate within. They set the stage for the business development relationships that will occur within an API ecosystem. TOS should protect the API owners company, assets and brand, but should also provide assurances for developers who are building businesses on top of an API. Make sure an APIs TOS pass insepection with the lawyers, but also strike a healthy balance within the ecosystem and foster innovation.

If there are any features, service or tools you depend on when deploying your APIs, please let me know at [@kinlane](https://twitter.com/kinlane/). I'm not trying to create an exhaustive list, I just want to get idea for what is available across the providers, and where the gaps are potentially. 

I'm feel like I'm finally getting a handle on the building blocks for API design, deployment, and management, and understanding the overlap in the different areas. I will revisit my design and management building blocks, and evolve [my ideas of what my perfect API editor would look like](http://apievangelist.com/2014/06/25/if-i-could-design-my-perfect-api-design-editor/), and how this fits in with [API management infrastructure from 3Scale](http://bit.ly/13esk6Q), and even API integration.

_**Disclosure:** 3Scale is an API Evangelist partner._