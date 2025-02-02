---
layout: post
title: My Developer Portal Checklist For A Human Services API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_01_at_9.03.53_pm.png
atomdate: 2017-03-02T17:00:00.000Z
tags:
  - My
  - Human Services
  - Portal
  - Services
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_01_at_9.03.53_pm.png)](http://miami.open.211.adopta.agency/)

I was handed the URL for a human services API implementation for Miami. It was my job to now deploy a portal, documentation, and other supporting resources for the API implementation. This project is part of the work I'm doing with [Open Referral](https://openreferral.org/) to help push forward the API conversation around the human services data specification (HSDS).

[I got to work forking my minimum viable API portal definition](http://portal.minimum.apievangelist.com/), to provide a doorway for the [Miami Open211 API](http://miami.open.211.adopta.agency/).  Next, I got to work on setting up a basic presence for the human services API. I started with giving the portal a title, and a basic description of what the service does, then I got to work on each of the portal elements that will help people put the data to work.

**Getting Started**  
It can be hard to cut through what you need to get going with an API and cut through all the information available. The portal has a [getting started page](http://miami.open.211.adopta.agency/getting-started/) providing a basic introduction, a handful of links to the documentation, code, and where to get help--[the page is driven from a YAML data store available in the \_data folder for the repository](https://github.com/miami-open-211/developer-portal/blob/master/_data/api-commons/api-getting-started.yaml).

**Authentication**  
I included an [authentication page](http://miami.open.211.adopta.agency/authentication/) to make it clear that the API is publicly available, but also provide a placeholder to explain that we will be opening up write access to the organizations, locations, and services that are being made available--[the page is driven from a YAML data store available in the \_data folder for the repository](https://github.com/miami-open-211/developer-portal/blob/master/_data/api-commons/api-authentication.yaml).

**Frequently Asked Questions**  
Next, I wanted to always have the most [frequently asked questions](http://miami.open.211.adopta.agency/frequently-asked-questions/) front and center where anyone can find it. I am using this page as a default place to publish any questions asked via Github, Twitter, or email. [The page is driven from a YAML data store available in the \_data folder for the repository](https://github.com/miami-open-211/developer-portal/blob/master/_data/api-commons/api-frequently-asked-questions.yaml).

**Documentation**  
[Now for the documentation](http://miami.open.211.adopta.agency/documentation/), the most important piece of the puzzle. I published a [Liquid](https://help.shopify.com/themes/liquid/basics) documentation driven by [the OpenAPI for the API](https://raw.githubusercontent.com/miami-open-211/developer-portal/master/_data/api-commons/openapi.yaml). With a little bit of JavaScript voodoo, I was able to make the documentation interactive so that you can actually try out each path, and see the JSON response--the documentation is driven by the [APIs.json](https://github.com/miami-open-211/developer-portal/blob/master/_data/apis.yaml) and the [OpenAPI](https://github.com/miami-open-211/developer-portal/blob/master/_data/api-commons/openapi.yaml) for the API.

**Code Samples**  
After completing the OpenAPI definition for the API documentation, I used the machine-readable definition to generate code samples using [swagger code-gen](https://github.com/swagger-api/swagger-codegen). I [published C#, Go, Java, JavaScript, PHP, Python, and Ruby code samples](http://miami.open.211.adopta.agency/code/) to help developers get started with their projects. [All the language samples are published to a separate Github](https://github.com/miami-open-211/client-sdks) [repository](https://github.com/miami-open-211/client-sdks) and [the page is driven from a YAML data store available in the \_data folder for the repository](https://github.com/miami-open-211/developer-portal/blob/master/_data/api-commons/api-code.yaml).

**Postman Collection**  
To help jumpstart integration, [I also generated and published a Postman Collection](http://miami.open.211.adopta.agency/postman_collection.json), so that anyone can quickly import it into their client, and get to work playing with the API in their environment. You can do this with OpenAPI also, but Postman helps extend the possibilities--[the Postman Collection is editable via its Github page](https://github.com/miami-open-211/developer-portal/blob/master/postman_collection.json). 

**Road Map**  
Next, I published a [road map](http://miami.open.211.adopta.agency/road-map/) so we could share what is next for the project, providing a list where developers can stay in tune with what is going to happen. [The road map entries are pulled from the Github issues for any entry with the road map label](https://github.com/miami-open-211/developer-portal/issues?q=is%3Aissue+is%3Aopen+label%3A%22road+map%22). There is a script that can be run regularly to keep the issues in sync with the roadmap, and the [page is driven from a YAML data store available in the \_data folder for the repository](https://github.com/miami-open-211/developer-portal/blob/master/_data/api-commons/api-road-map.yaml).

**Issues**  
Similar to the road map, [I created a page for sharing any open Github issues](http://miami.open.211.adopta.agency/issues/), that are [labeled 'issues'](https://github.com/miami-open-211/developer-portal/issues?q=is%3Aissue+is%3Aopen+label%3Aissues), to help communicate outstanding and known issues with the platform. It stays in sync using the same script, and the [page is driven from a YAML data store available in the \_data folder for the repository](https://github.com/miami-open-211/developer-portal/blob/master/_data/api-commons/api-issues.yaml). 

**Change Log**  
In addition to a road map and known issues, when these items get accomplished or fixed [they get moved to the change log](http://miami.open.211.adopta.agency/change-log/), keeping a complete history of everything that has changed with the platform. It stays in sync using the same script, and the [page is driven from a YAML data store available in the \_data folder for the repository](https://github.com/miami-open-211/developer-portal/blob/master/_data/api-commons/api-change-log.yaml). 

**Status Page**  
Beyond the resources to get up and running with documentation, code samples, and a road map, issues, and change log to stay in tune with the platform, [I wanted a status page keeping an eye on things](http://miami.open.211.adopta.agency/status/). I signed up for a monitoring service called [API Science](http://apiscience.com/) (which I highly recommend), and imported the OpenAPI definition, and had monitors to keep an eye on things and make sure the API stays up. The page is generated from an embeddable JavaScript widget and is updated using the API Science API.

**Terms of Service**  
[For the terms of service](http://miami.open.211.adopta.agency/terms-of-service/), I just grabbed an open source copy from Wikidot, providing a baseline place to start when it comes to the TOS for the API-[the terms of service is editable via its Github page](https://github.com/miami-open-211/developer-portal/blob/master/terms-of-service/index.html). 

**Privacy Policy**  
Similar to the terms of service I just grabbed an [open source privacy policy from Wikidot](http://miami.open.211.adopta.agency/privacy-policy/), providing a baseline place to start when it comes to a [privacy policy for the API](http://miami.open.211.adopta.agency/privacy-policy/)\-[the privacy policy is editable via its Github page](https://github.com/miami-open-211/developer-portal/blob/master/privacy-policy/index.html).  

**Developer Blog**  
[The blog for the project](http://miami.open.211.adopta.agency/blog/) is driven by the [Jekyll framework](https://jekyllrb.com/) for [the developer portal hosted on Github Pages](https://pages.github.com/). [To manage the blog entries, you just add or update pages in the \_posts folder for the website](https://github.com/miami-open-211/developer-portal/tree/master/_posts). All entries in the \_post folder are listed in chronological order on the blog page for the developer portal.

**Github**  
This developer portal runs 100% on Github and leverages the potential of Jekyll when running on Github. The API is hosted on Heroku and run by someone else, but the developer portal is a static website, completely editable via Github through the web interface, API, or locally with the desktop client. Github also provides much of the support framework for the project, driving the roadmap, issues, change log, and 1/3 of the support options for developers--the entire site is driven from the \_data store, with the website just being a Liquid-driven Jekyll template.

**OpenAPI**  
[This developer portal is defined by its OpenAPI definition](https://github.com/miami-open-211/developer-portal/blob/master/_data/api-commons/openapi.yaml). It drives the documentation, generated the code samples, fired up the API Science monitors, and is the central contract defining the APIs operation. I will be keeping the OpenAPI up to date, and using it as the central truth for the API and its operations. 

**APIs.json**  
[The portal is entirely indexed using APIs.json](https://github.com/miami-open-211/developer-portal/blob/master/_data/apis.yaml), providing a single machine-readable definition of the API and its operations. All the supporting pages of the API are linked to in the index, and their contents and data are all machine-readable YAML and JSON. The APIs.json provides access to the OpenAPI which describes the surface area of the API, as well as providing links to all it's supporting operations.

**What Is Next?**  
I'm going to put things down for a couple days. We still need some FAQs entered, and the content needs fluffing up and editing. Then we'll invite other folks to take a look at. Then I will get to work on the POST, PUT, PATCH, and DELETE paths, and once those are certified I will push as part of the OpenAPI, regenerate the code samples, and turn on the ability for people to get involved not just reading data, but also potentially adding and updating data in the database--making things a group effort.

I'm going to take what I have here, and fork it into a new project, making it a baseline demo portal for [Open Referral](http://openreferral.org). My goal is to have a downloadable, forkable API portal that is well documented, and anyone providing an HSDS compliant API can put to use for their project. I just wanted to take a moment and gather my thoughts on what I did and share the approach I took with you.