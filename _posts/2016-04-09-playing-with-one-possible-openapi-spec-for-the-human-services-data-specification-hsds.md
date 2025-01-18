---
layout: post
title: >-
  Playing With One Possible OpenAPI Spec For The Human Services Data
  Specification (HSDS)
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - OpenAPI
  - HSDS
  - Human Services
  - Data
  - Open
  - Services
---
As I was preparing for my talk with Dan from Open Referral, [I published some of my thoughts on the organization, and the Human Services Data Specification (HSDS)](http://apievangelist.com/2016/03/31/gathering-my-thoughts-about-open-referral-and-the-human-services-api/). One of the things I did as part of that work was generating of a first draft of an OpenAPI Spec for the Open Referral API. To create that draft, I used the existing Ohana API as the base, exposing the same endpoints as they did in the Code For America project. 

Over the last couple days, I spent some more time getting to know the data model set forth by HSDS, and got to work evolving my draft OpenAPI Spec to be closer in alignment with the data schema. To do this I took the JSON Schema for HSDS that was available on the Github, and generated used it as a framework to add any missing elements to the API definition, resulting in almost 70 API paths, in support of almost 20 separate entities dictated in the HSDS.

Open Referral API

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

Get Contact

/contacts/:contact\_id

GET

Update Contact

/contacts/:contact\_id

PUT

Delete Contact

/contacts/:contact\_id

DELETE

**Contact - Phones**

Get Phones

/contacts/:contact\_id/phones

GET

Add Phone

/contacts/:contact\_id/phones

POST

Get Phone

/contacts/:contact\_id/phones/:phone\_id

GET

Update Phone

/contacts/:contact\_id/phones/:phone\_id

PUT

Delete Phone

/contacts/:contact\_id/phones/:phone\_id

DELETE

**Locations**

Get Locations

/locations

GET

Add Location

/locations

POST

Get Location

/locations/:location\_id

GET

Update Location

/locations/:location\_id

UPDATE

Delete Location

/locations/:location\_id

DELETE

**Location - Holiday Schedule**

Get Holiday Schedule

/locations/:location\_id/holiday\_schedule/

GET

Add Holiday Schedule

/locations/:location\_id/holiday\_schedule/

POST

Get Holiday Schedule

/locations/:location\_id/holiday\_schedule/:holiday\_schedule\_id/

GET

Update Holiday Schedule

/locations/:location\_id/holiday\_schedule/:holiday\_schedule\_id/

PUT

Delete Holiday Schedule

/locations/:location\_id/holiday\_schedule/:holiday\_schedule\_id/

DELETE

**Location - Language**

Get Languages

/locations/:location\_id/languages/

GET

Add Languages

/locations/:location\_id/languages/

POST

Get Languages

/locations/:location\_id/languages/:language\_id/

GET

Update Languages

/locations/:location\_id/languages/:language\_id/

PUT

Delete Languages

/locations/:location\_id/languages/:language\_id/

DELETE

**Location - Postal Address**

Get Postal Address

/locations/:location\_id/postal\_address

GET

Add New Postal Adress

/locations/:location\_id/postal\_address

POST

Get Postal Address

/locations/:location\_id/postal\_address/:postal\_address\_id

GET

Update Postal Address

/locations/:location\_id/postal\_address/:postal\_address\_id

PUT

Delete Postal Address

/locations/:location\_id/postal\_address/:postal\_address\_id

DELETE

**Location - Physical Address**

Get Physical Address

/locations/:location\_id/physical\_address

GET

Add New Physical Adress

/locations/:location\_id/physical\_address

POST

Get Physical Address

/locations/:location\_id/physical\_address/:postal\_address\_id

GET

Update Physical Address

/locations/:location\_id/physical\_address/:postal\_address\_id

PUT

Delete Physical Address

/locations/:location\_id/physical\_address/:postal\_address\_id

DELETE

**Location - Phones**

Get Phones

/locations/:location\_id/phones

GET

Add Phone

/locations/:location\_id/phones

POST

Get Phone

/locations/:location\_id/phones/:phone\_id

GET

Update Phone

/locations/:location\_id/phones/:phone\_id

PUT

Delete Phone

/locations/:location\_id/phones/:phone\_id

DELETE

**Location - Regular Schedule**

Get Regular Schedule

/locations/:location\_id/regular\_schedule

GET

Add Regular Schedule

/locations/:location\_id/regular\_schedule

POST

Get Regular Schedule

/locations/:location\_id/regular\_schedule/:regular\_schedule\_id/

GET

Update Regular Schedule

/locations/:location\_id/regular\_schedule/:regular\_schedule\_id/

PUT

Delete Regular Schedule

/locations/:location\_id/regular\_schedule/:regular\_schedule\_id/

DELETE

**Location - Services**

Get Service

/locations/:location\_id/services/

GET

Add Service

/locations/:location\_id/services/

POST

Get Service

/locations/:location\_id/services/:service\_id/

GET

Update Service

/locations/:location\_id/services/:service\_id/

PUT

Delete Service

/locations/:location\_id/services/:service\_id/

DELETE

**Location - Accessibility For Disabilities**

Get Accessibility For Disabilities

/locations/:location\_id/accessibility\_for\_disabilities/

GET

Add Accessibility For Disabilities

/locations/:location\_id/accessibility\_for\_disabilities/

POST

Get Accessibility For Disabilities

/locations/:location\_id/accessibility\_for\_disabilities/:accessibility\_for\_disabilities\_id/

GET

Update Accessibility For Disabilities

/locations/:location\_id/accessibility\_for\_disabilities/:accessibility\_for\_disabilities\_id/

PUT

Delete Accessibility For Disabilities

/locations/:location\_id/accessibility\_for\_disabilities/:accessibility\_for\_disabilities\_id/

DELETE

**Metadata**

Get Metadata

/metadata

GET

Add New Metadata

/metadata

POST

Get Service

/metadata/:metadata\_id

GET

Delete Metadata

/metadata/:metadata\_id

DELETE

**Organizations**

Get Locations

/organizations

GET

Create a new organization

/organizations

POST

Get Organization

/organizations/:organization\_id

GET

Update Existing Organization

/organizations/:organization\_id

PUT

Delete Organization

/organizations/:organization\_id

DELETE

**Organization - Contacts**

Get Contacts

/organizations/:organization\_id/contacts

GET

Add Contact

/organizations/:organization\_id/contacts

POST

Get Contact

/organizations/:organization\_id/contacts/:contact\_id/

GET

Update Contact

/organizations/:organization\_id/contacts/:contact\_id/

PUT

Delete Contact

/organizations/:organization\_id/contacts/:contact\_id/

DELETE

**Organization - Funding**

Get Funding

/organizations/:organization\_id/funding/

GET

Add Funding

/organizations/:organization\_id/funding/

POST

Get Funding

/organizations/:organization\_id/funding/:funding\_id/

GET

Update Funding

/organizations/:organization\_id/funding/:funding\_id/

PUT

Delete Funding

/organizations/:organization\_id/funding/:funding\_id/

DELETE

**Organization - Locations**

Get Location

/organizations/:organization\_id/locations

GET

Create a new location

/organizations/:organization\_id/locations

POST

Update Existing Location

/organizations/:organization\_id/locations/:location\_id/

GET

Create a new location

/organizations/:organization\_id/locations/:location\_id/

PUT

Delete Location

/organizations/:organization\_id/locations/:location\_id/

DELETE

**Organization - Phones**

Get Phones

/organizations/:organization\_id/phones

GET

Add Phone

/organizations/:organization\_id/phones

POST

Get Phone

/organizations/:organization\_id/phones/:phone\_id

GET

Update Phone

/organizations/:organization\_id/phones/:phone\_id

PUT

Delete Phone

/organizations/:organization\_id/phones/:phone\_id

DELETE

**Organization - Programs**

Get Programs

/organizations/:organization\_id/programs

GET

Add Program

/organizations/:organization\_id/programs

POST

Get Program

/organizations/:organization\_id/programs/:program\_id/

GET

Update Program

/organizations/:organization\_id/programs/:program\_id/

PUT

Delete Program

/organizations/:organization\_id/programs/:program\_id/

DELETE

**Organization - Program Services**

Get Service

/organizations/:organization\_id/programs/:program\_id/services/

GET

Add Service

/organizations/:organization\_id/programs/:program\_id/services/

POST

Get Service

/organizations/:organization\_id/programs/:program\_id/services/:service\_id

GET

Update Service

/organizations/:organization\_id/programs/:program\_id/services/:service\_id

PUT

Delete Service

/organizations/:organization\_id/programs/:program\_id/services/:service\_id

DELETE

**Organization - Services**

Get Services

/organizations/:organization\_id/services

GET

Add Service

/organizations/:organization\_id/services

POST

Get Service

/organizations/:organization\_id/services/:service\_id/

GET

Update Service

/organizations/:organization\_id/services/:service\_id/

PUT

Delete Service

/organizations/:organization\_id/services/:service\_id/

DELETE

**Search**

Get locations that match certain criteria.

/search

GET

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

Get Contact

/services/:service\_id/contacts/:contact\_id/

GET

Update Contact

/services/:service\_id/contacts/:contact\_id/

PUT

Delete Contact

/services/:service\_id/contacts/:contact\_id/

DELETE

**Service - Eligibility**

Get Eligibility

/services/:service\_id/eligibility/

GET

Add Eligibility

/services/:service\_id/eligibility/

POST

Get Eligibility

/services/:service\_id/eligibility/:eligibility\_id/

GET

Update Eligibility

/services/:service\_id/eligibility/:eligibility\_id/

PUT

Eligibility Contact

/services/:service\_id/eligibility/:eligibility\_id/

DELETE

**Service - Fees**

Get Fees

/services/:service\_id/fees/

GET

Add Fees

/services/:service\_id/fees/

POST

Get Fees

/services/:service\_id/fees/:feed\_id/

GET

Update Fees

/services/:service\_id/fees/:feed\_id/

PUT

Eligibility Fees

/services/:service\_id/fees/:feed\_id/

DELETE

**Service - Funding**

Get Funding

/services/:service\_id/funding/

GET

Add Funding

/services/:service\_id/funding/

POST

Get Funding

/services/:service\_id/funding/:funding\_id/

GET

Update Funding

/services/:service\_id/funding/:funding\_id/

PUT

Delete Funding

/services/:service\_id/funding/:funding\_id/

DELETE

**Service - Holiday Schedule**

Get Holiday Schedule

/services/:service\_id/holiday\_schedule/

GET

Add Holiday Schedule

/services/:service\_id/holiday\_schedule/

POST

Get Holiday Schedule

/services/:service\_id/holiday\_schedule/:holiday\_schedule\_id/

GET

Update Holiday Schedule

/services/:service\_id/holiday\_schedule/:holiday\_schedule\_id/

PUT

Delete Holiday Schedule

/services/:service\_id/holiday\_schedule/:holiday\_schedule\_id/

DELETE

**Service - Interpretation Services**

Get Interpretation Services

/services/:service\_id/intepretation\_services/

GET

Add Interpretation Services

/services/:service\_id/intepretation\_services/

POST

Get Interpretation Services

/services/:service\_id/intepretation\_services/:intepretation\_services\_id/

GET

Update Interpretation Services

/services/:service\_id/intepretation\_services/:intepretation\_services\_id/

PUT

Delete Interpretation Services

/services/:service\_id/intepretation\_services/:intepretation\_services\_id/

DELETE

**Service - Languages**

Get Languages

/services/:service\_id/languages/

GET

Add Languages

/services/:service\_id/languages/

POST

Get Languages

/services/:service\_id/languages/:language\_id/

GET

Update Languages

/services/:service\_id/languages/:language\_id/

PUT

Delete Languages

/services/:service\_id/languages/:language\_id/

DELETE

**Service - Payment Accepted**

Get Payment Accepted

/services/:service\_id/payment\_accepted/

GET

Add Payment Accepted

/services/:service\_id/payment\_accepted/

POST

Get Payment Accepted

/services/:service\_id/payment\_accepted/:payment\_accepted\_id/

GET

Update Payment Accepted

/services/:service\_id/payment\_accepted/:payment\_accepted\_id/

PUT

Delete Payment Accepted

/services/:service\_id/payment\_accepted/:payment\_accepted\_id/

DELETE

**Service - Phones**

Get Phones

/services/:service\_id/phones

GET

Add Phone

/services/:service\_id/phones

POST

Get Phone

/services/:service\_id/phones/:phone\_id

GET

Update Phone

/services/:service\_id/phones/:phone\_id

PUT

Delete Phone

/services/:service\_id/phones/:phone\_id

DELETE

**Service - Regular Schedule**

Get Regular Schedule

/services/:service\_id/regular\_schedule

GET

Add Regular Schedule

/services/:service\_id/regular\_schedule

POST

Get Regular Schedule

/services/:service\_id/regular\_schedule/:required\_document\_id/

GET

Update Regular Schedule

/services/:service\_id/regular\_schedule/:required\_document\_id/

PUT

Delete Regular Schedule

/services/:service\_id/regular\_schedule/:required\_document\_id/

DELETE

**Service - Required Document**

Get Required Document

/services/:service\_id/required\_document/

GET

Add Required Document

/services/:service\_id/required\_document/

POST

Get Required Document

/services/:service\_id/required\_document/:required\_document\_id/

GET

Update Required Document

/services/:service\_id/required\_document/:required\_document\_id/

PUT

Delete Required Document

/services/:service\_id/required\_document/:required\_document\_id/

DELETE

**Service - Areas**

Get Service Area

/services/:service\_id/service\_area/

GET

Add Service Area

/services/:service\_id/service\_area/

POST

Get Service Area

/services/:service\_id/service\_area/:service\_area\_id

GET

Update Service Area

/services/:service\_id/service\_area/:service\_area\_id

PUT

Delete Service Area

/services/:service\_id/service\_area/:service\_area\_id

DELETE

 

Entities

[JSON Schema](http://adopta-agency.github.io/open-referral-api/api-commons/schema.json "View JSON Schema")

**accessibility\_for\_disabilities**

*   id
*   location\_id
*   accessibility

**contact**

*   id
*   organization\_id
*   service\_id
*   name
*   title
*   department
*   email

**eligibility**

*   id
*   service\_id
*   eligibility

**fee**

*   id
*   service\_id
*   fee

**funding**

*   id
*   organization\_id
*   service\_id
*   source

**holiday\_schedule**

*   id
*   service\_id
*   location\_id
*   closed
*   opens\_at
*   closes\_at
*   start\_date
*   end\_date

**intepretation\_services**

*   id
*   service\_id
*   language

**language**

*   id
*   service\_id
*   location\_id
*   language

**location**

*   id
*   organization\_id
*   name
*   alternate\_name
*   transportation
*   latitude
*   longitude

**metadata**

*   id
*   resource\_id
*   last\_action\_date
*   last\_action\_type
*   field\_name
*   previous\_value
*   replacement\_value
*   updated\_by

**organization**

*   id
*   name
*   alternate\_name
*   description
*   email
*   url
*   tax\_status
*   tax\_id
*   year\_incorporated
*   legal\_status

**payment\_accepted**

*   id
*   service\_id
*   payment

**phone**

*   id
*   location\_id
*   service\_id
*   organization\_id
*   contact\_id
*   number
*   extension
*   type
*   department

**physical\_address**

*   id
*   location\_id
*   attention
*   address\_1
*   address\_2
*   address\_3
*   address\_4
*   city
*   state\_province
*   postal\_code
*   country

**postal\_address**

*   id
*   location\_id
*   attention
*   address\_1
*   address\_2
*   address\_3
*   address\_4
*   city
*   state\_province
*   postal\_code
*   country

**program**

*   id
*   organization\_id
*   name
*   alternate\_name

**regular\_schedule**

*   id
*   service\_id
*   location\_id
*   weekday
*   opens\_at
*   closes\_at

**required\_document**

*   id
*   service\_id
*   document

**service**

*   id
*   organization\_id
*   program\_id
*   location\_id
*   name
*   alternate\_name
*   url
*   email
*   status
*   application\_process
*   wait\_time

**service\_area**

*   id
*   service\_id
*   service\_area

This is a very formulaic, generated, representation of what the Open Referral API could look like. While I have lots of ideas on how to improve on the design, I want to be cautious to not project too much of my own views on the API design--something the community should do together. I can tell a lot of work went into the current specification, and the same amount of energy should go into evolving the API design.

I accomplished what I wanted. Learn more about HSDS, get more familiar with the entities at play, while also producing a fairly robust representation of what an API could look like for Open Referral. It has way more details than the average implementation will need, but I wanted to cover all the bases, providing full control over every entity, and relationship represented in HSDS. Most importantly I was able to get more intimate with the specification, while also producing an OpenAPI Spec that will playing a central role throughout this project.

Next I'm going to play with some minimum viable representations, and other ways to tell stories and talk about the HSDS. I'd like to eventually have a whole toolbox of YAML / JSON driven UI elements, like the one I pasted in this post, allowing me to describe all the moving parts of the Open Referral work. More posts to come, as I work through my thoughts, and play possible designs for the Human Services Data Specification (HSDS).