---
layout: post
title: >-
  Providing Specialized Views Of An API Surface Area Dynamically With OpenAPI
  Spec And Liquid
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - OpenAPI
  - Open
---
[I just published the OpenAPI Spec I just created for the Human Services Data Specification (HSDS) into one of my default portals](http://adopta-agency.github.io/open-referral-api/), which once the OpenAPI Spec is indexed via the portals API.json, I get a ready to go landing page, documentation, and other tooling for supporting the API. I have been pushing forward my API documentation, beyond the (now) standard issue Swagger UI, keeping the OpenAPI Spec core, but evolving the UI portion using Jekyll and Liquid. 

[I have a default API docs implementation, which loops through all OpenAPI Spec included within a project, and renders HTML documentation for each path, verb, etc.](http://adopta-agency.github.io/open-referral-api/documentation/) I'm still working on how I recreate the dynamic functionality brought to the table by Swagger UI, but so far I'm really, really enjoying the flexiblity with the user interface, and overall experience I get using this approach--I know the interactive portion will come.

One of the things I'm enjoying being able to do, is apply additional, external elements to the OpenAPI Spec, by augmenting them with independent, APIs.json defined schema. [One example of this I am calling API filters, a simple filter collection defined in both YAML and JSON, that is indexed along with the OpenAPI Spec, within the APIs.json index](http://adopta-agency.github.io/open-referral-api/apis.json). For the Open Referral API I wanted to provide the complete documentation, but also play around with other different, filtered views of the API -- designed for specific audiences.

The first entry I made into API filters, I called "learn the basics", only showing the core resources that were available via the Open Referral API, eliminating all of the noise.

Open Referral API - Learn the Basics

[OpenAPI Spec](http://adopta-agency.github.io/open-referral-api/api-commons/openapi-spec.json "View OpenAPI Spec")

**Categories**

Get all categories

/categories

GET

**Contacts**

Get Contacts

/contacts

GET

Create New Contact

/contacts

POST

**Locations**

Get Locations

/locations

GET

Add Location

/locations

POST

**Metadata**

Get Metadata

/metadata

GET

Add New Metadata

/metadata

POST

**Organizations**

Get Locations

/organizations

GET

Create a new organization

/organizations

POST

**Search**

Get locations that match certain criteria.

/search

GET

**Services**

Get Services

/services

GET

Create New Service

/services

POST

This API docs view, gives me just the handful of core endpoints, filtering out the other 60+ APIs that someone who is just learning about the Open Referral API do not need to be bothered with when they are learning. Next, I wanted to focus in on a specific area of the API, like services, and only show the summary elements, that most people will care about when it comes to these services. I'm calling this one "services summary":

Open Referral API - Services Summary

[OpenAPI Spec](http://adopta-agency.github.io/open-referral-api/api-commons/openapi-spec.json "View OpenAPI Spec")

**Services**

Get Services

/services

GET

Create New Service

/services

POST

**Service - Categories**

Update a service’s categories

/services/:service\_id/categories

PUT

**Service - Contacts**

Get Contacts

/services/:service\_id/contacts

GET

Add Contact

/services/:service\_id/contacts

POST

**Service - Eligibility**

Get Eligibility

/services/:service\_id/eligibility/

GET

Add Eligibility

/services/:service\_id/eligibility/

POST

**Service - Fees**

Get Fees

/services/:service\_id/fees/

GET

Add Fees

/services/:service\_id/fees/

POST

**Service - Funding**

Get Funding

/services/:service\_id/funding/

GET

Add Funding

/services/:service\_id/funding/

POST

**Service - Holiday Schedule**

Get Holiday Schedule

/services/:service\_id/holiday\_schedule/

GET

Add Holiday Schedule

/services/:service\_id/holiday\_schedule/

POST

**Service - Interpretation Services**

Get Interpretation Services

/services/:service\_id/intepretation\_services/

GET

Add Interpretation Services

/services/:service\_id/intepretation\_services/

POST

**Service - Languages**

Get Languages

/services/:service\_id/languages/

GET

Add Languages

/services/:service\_id/languages/

POST

**Service - Payment Accepted**

Get Payment Accepted

/services/:service\_id/payment\_accepted/

GET

Add Payment Accepted

/services/:service\_id/payment\_accepted/

POST

**Service - Phones**

Get Phones

/services/:service\_id/phones

GET

Add Phone

/services/:service\_id/phones

POST

**Service - Regular Schedule**

Get Regular Schedule

/services/:service\_id/regular\_schedule

GET

Add Regular Schedule

/services/:service\_id/regular\_schedule

POST

**Service - Required Document**

Get Required Document

/services/:service\_id/required\_document/

GET

Add Required Document

/services/:service\_id/required\_document/

POST

**Service - Areas**

Get Service Area

/services/:service\_id/service\_area/

GET

Add Service Area

/services/:service\_id/service\_area/

POST

The Liquid driven HTML API docs are the same for the [full documentation](https://github.com/adopta-agency/open-referral-api/edit/gh-pages/documentation/index.html), for [learn the basics](https://github.com/adopta-agency/open-referral-api/blob/gh-pages/documentation/services-summary/index.html), or for the [services summary](https://github.com/adopta-agency/open-referral-api/blob/gh-pages/documentation/learn-the-basics/index.html). All three documentation elements are also all [driven from the same OpenAPI Spec](http://adopta-agency.github.io/open-referral-api/api-commons/openapi-spec.json). The only thing I did, was specify one of the API Filters by name, in the top of each specialized docs page -- the Liquid template handles the rest. Its still pretty crude, and I'm sure it will need a lot of polishing, but it provides me with a simple, machine readable way to filter out the endpoints I do not need, accomplishing what I set out to do.

I am using schema approaches like this more lately. An approach that when indexed along with the OpenAPI Spec, in an API.json file gives me other layers, and dimension that I can apply for not just documentation, but almost any other stop along the life cycle. To me, and important part of this is that these elements do not live embedded within the OpenAPI Spec, living independent of the the machine readable definition of the API. Each one lives its own schema file, and when indexed alongside each API definition, within the APIs.json, interesting things happen--all without cluttering up the OpenAPI Spec, keeping it purely about the API.

My goal in this work, is to provide me with a way that I can equip the other less technical advocates for the Open Referral format, with a toolbox of documentation, visualizations, and other snippets that will help them articulate what the API can do. Since all of these API documentation snippets are APIs.json, and OpenAPI Spec driven, using Liquid, and Jekyll to render, they are something that anyone could put to use, for any API.