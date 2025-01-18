---
layout: post
title: APIs.json API Property Types
image: https://s3.amazonaws.com/kinlane-productions2/legos.png
author:
  name: kinlane
tags:
  - APIs.json
  - APIs
  - APIs.jso
---
I’m working the great feedback we've had on [APIs.json](http://apisjson.org), an adding everything to the [Github issues for consideration in the next version](https://github.com/api-commons/api-json/issues). Today I’m spending a little time thinking through the big picture of APIs.json, and some of the building blocks I'd like to see reflected when API providers generate their APIs.json.

Each API listed in an APIs.json has what we are calling: _"Properties Elements”._ The properties element is a collection, with two values: _type and url._ While we provide you with a base set of property element types you can reference:

*   Swagger
*   RAML
*   Blueprint
*   WADL
*   WSDL
*   TermsOfService
*   InterfaceLicense
*   StatusPage
*   Pricing
*   Forums
*   AlertsTwitterHandle

Our goal is to continue providing, “reserved” types that we recognize, while also leaving properties elements, being as organic as possible—meaning you can define your own references, and tell the story of why these are important building blocks in your own API strategy. We will continue adding the best properties we see being used, to the APIs.json spec.

To prepare for the next version of APIs.json, I want to have the next list of reserved property types. Working from my list of [API management building blocks](http://management.apievangelist.com/building-blocks.html) I’ve identified X I’d like to see in the next version:

*   GettingStarted
*   FrequentlyAskedQuestions
*   Signup
*   BestPractices
*   ServiceAccord
*   Documentation
*   Explorer
*   ErrorCodes
*   AuthenticationOverview
*   AuthenticationTester
*   CodeLibraries
*   ApplicationGallery
*   SoftwareDevelopmentKits
*   StackExchange
*   Calendar
*   OfficeHours
*   Blog
*   BlogRSS
*   LinkedIn
*   Twitter
*   Github
*   Facebook
*   GooglePlus
*   Roadmap
*   ChangeLog
*   RateLimits
*   Affiliate
*   Advertising
*   CaseStudies
*   WhitePapers
*   HowToGuides
*   Webinars
*   Ideas
*   Labs
*   Opportunities
*   Branding
*   PrivacyPolicy
*   ServiceLevelAgreement
*   DataLicense
*   CodeLicense
*   DeprecationPolicy
*   Widgets
*   Buttons
*   Badges

These are the building blocks I think are important to API operations. Currently all of these will be links to human readable pages, within an APIs developer portal, but eventually I envision all of these potentially being machine readable.

I know, this is a big vision, but I intend to make it a reality. The first machine readable element on this list is the InterfaceLicense, which will reference the [machine readable JSON manifest](http://apicommons.org/add-apis.html) for [API Commons](http://apicommons.org "API Commons").

Next on the list is TermsOfService, which I will be using [Terms of Service Didn’t Read’s](http://tosdr.org/) machine readable format, and applying it to the world of APIs. If there are any types you’d like to see in the next version of APIs.json, head over to the [Github issue I created for this discussion](https://github.com/api-commons/api-json/issues/44), and make sure it is on the list.