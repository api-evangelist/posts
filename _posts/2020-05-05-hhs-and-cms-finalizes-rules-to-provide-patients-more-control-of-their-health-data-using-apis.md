---
published: true
layout: post
title: >-
  HHS and CMS Finalizes Rules to Provide Patients More Control of Their Health
  Data Using APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/cms_finalrule_square_1_e1584028841105.png
author:
  name: kinlane
tags:
  - Healthcare
  - Regulations
  - Federal Government
  - Standards
---
I have had a pretty massive API story in my notebook for a couple of weeks now that I just didn’t have the emotional bandwidth to process, but eventually I’m finding the energy to think about APIs at this scope. The TL;DR is that [the US Health & Human Services (HHS) finalized a historic rule to provide patients more control of their health care using APIs](https://www.hhs.gov/about/news/2020/03/09/hhs-finalizes-historic-rules-to-provide-patients-more-control-of-their-health-data.html)\--from the HHS announcement:

_“ONC’s final rule establishes secure, standards-based application programming interface (API) requirements to support a patient’s access and control of their electronic health information. APIs are the foundation of smartphone applications (apps). As a result of this rule, patients will be able to securely and easily obtain and use their electronic health information from their provider’s medical record for free, using the smartphone app of their choice.”_

I wanted to understand what this means for healthcare APIs. I’ve gone down the Blue Button API rabbit hole several times before, and I have an intimate awareness of how much time is involved with just loading all the moving parts into your head. However, this is why I write on API Evangelist, to help me process big ideas like this through ongoing API storytelling, and whittle away at projects I may not have time for in waves. I finally made time to do a first dive into this monumental precedent in the US federal government directing healthcare providers to deploy APIs, loading it all up in my head so I can chew on for a bit.

### The CMS Interoperability and Patient Access Final Rule

The technical meat of this can be found within [the CMS interoperability and patient access final rule](https://www.cms.gov/Regulations-and-Guidance/Guidance/Interoperability/index). Helping me better understand what is being asked of healthcare providers, and who the providers even are. At this point the rule sounds promising because of its scope, but really the devil is in the details--the CMS interoperability and patient access final rule document(s) provide:

*    Information and tools to help implement the Patient Access API and Provider Directory API
*    Best Practices for payers and developers sharing and receiving patient data via FHIR-based APIs
*    Information to support payers as they produce patient education resources tailored to their patient population 

After realizing the CMS rule had all the technical details I needed, it also answered my next question about who was required to deploy APIs that would allow application developers to access patient data. dThis final rule requires most CMS-regulated payers – specifically:

*   Medicare Advantage (MA) organizations
*   Medicaid Fee-For-Service (FFS) programs
*   CHIP FFS programs
*   Medicaid managed care plans
*   CHIP managed care entities
*   Qualified Health Plan (QHP) issuers on the Federally-facilitated Exchanges (FFEs)

To provide APIs, excluding these groups:

*   issuers offering only Standalone dental plans (SADPs)
*   QHP issuers offering coverage in the Federally-facilitated Small Business Health Options Program (FF-SHOP)

I am doing more research into the scope of each of these groups, and hopefully pull some data for different states. I’m looking to better understand who the actors are in this healthcare API conversation which will help me understand the maturity of these entities regarding how they put technology to work, and where they are in their overall API journey.

To help be a little more precise about what is being asked of these groups, CMS provides a little more clarification about what is expected of these healthcare organizations that are spread across the United States.

_“To implement and maintain a secure, standards-based Patient Access Application Programming Interface (API) (using Health Level 7® (HL7) Fast Healthcare Interoperability Resources® (FHIR) Release 4.0.1) that allows patients to easily access their claims and encounter information, including cost (specifically provider remittances and enrollee cost-sharing), as well as a defined sub-set of their clinical information through third-party applications of their choice.”_

FHIR has been around for a while, used for the [Blue Button](https://bluebutton.cms.gov/) and other APIs, but this is a federal rule saying that if healthcare providers who receive federal funds have to provide APIs for trusted 3rd party developers to build applications on. It is a pretty significant precedent of API regulation similar to PSD2 for banking the UK and EU, establishing expectations that businesses need to provide APIs. It is a big deal. Additionally the rule builds upon existing API standards, dictating that all APIs reuse these existing patterns:

*   **[FHIR](https://www.hl7.org/fhir/overview.html)** - Fast Healthcare Interoperability Resources is a standard describing data formats and elements and an application programming interface for exchanging electronic health records. 
*   **[OAuth 2.0](https://oauth.net/2/)** - OAuth is an open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords.
*   **[OpenID Connect](https://openid.net/connect/)** - OpenID Connect 1.0 is a simple identity layer on top of the OAuth 2.0 protocol. It allows Clients to verify the identity of the End-User based on the authentication performed by an Authorization Server, as well as to obtain basic profile information about the End-User in an interoperable and REST-like manner.
*   **[USCDI](https://www.healthit.gov/isa/united-states-core-data-interoperability-uscdi\))** - The United States Core Data for Interoperability (USCDI) is a standardized set of health data classes and constituent data elements for nationwide, interoperable health information exchange 

This is a pretty solid foundation for such a rule. It also provides a model that could be considered for other industries. The rule focuses on providing API access to the following healthcare resources:

*   **Claims & Encounter Data** \- Payers are required to make a patient’s claims and encounter data available via the Patient Access API. 
*   **Clinical Data -** Payers are also required to make a patient’s clinical data, defined as those data the payer maintains that are included in the USCDI version 1, available via the Patient Access API. 
*   **Plan Coverage and Formularies** \- Part D Medicare Advantage plans must also make formulary information available via the Patient Access API. And, Medicaid and CHIP FFS and managed care must make preferred drug lists available. 
*   **Provider Directory -** Under this rule, MA organizations, Medicaid FFS programs, CHIP FFS programs, Medicaid managed care plans, and CHIP managed care entities are required to make provider directory information available via the Provider Directory API. This API must be accessible via a public-facing digital endpoint on the payer’s website.

CMS provides all the technical information need including reference implementations. They have the model for doing this with Blue Button, and all the healthcare provides need to do is replicate the Blue Button model for their own operations. To help me refresh what the Blue Button team has accomplished I wanted to take a moment to look at Blue Button again in the context of this rule.

### The Blue Button Profile

[Blue Button 2.0](https://bluebutton.cms.gov/) is a _“developer-friendly, standards-based API that enables Medicare beneficiaries to connect their claims data to the applications, services and research programs they trust.”_ CMS has invested a lot of resources in rolling out this API that  contains four years of Medicare Part A, B and D data for 53 million Medicare beneficiaries. To help me how much of this work is reusable as part of the wider HHS & CMS rule(s) I wanted to break down the relevant building blocks present with the Blue Button API, that might be applied to other providers.

*   **Portal** - There is an easy to discovery portal for access the Blue Button 2.0 API.
*   **Subdomain** - Having a dedicated subdomain for an API demonstrates investment.
*   **Overview** - There is a simple overview of what is happening with the API.
*   **Getting Started** \- A simple list of what it takes to get going is available for consumers.
*   **HL7 FHIR Specification** \- The FHIR specification is the cornerstone of the Blue Button API.
*   **OAuth 2.0 Standard** - OAuth 2.0 is used to manage authorization and access.
*   **Authorization** - An overview of authorization is available for consumers to put to use.
*   **Documentation** - They provide complete documentation for the APIs that are available.
*   **Data Model** \- The underlying data model for the Blue Button API is published.
*   **Sample Data** \- Blue Button provides sample data for developers to put to use.
*   **Sandbox** - There is a sandbox so that everyone can play with the Blue Button API.
*   **Developer Signup** - Developers can sign up for access to the sandbox API environment.
*   **Developer Login** - There is a login for developers to come back and use to engage.
*   **Developer Guidelines** \- There are clear guidelines for how developers can use the API.
*   **Implementation Guide** \- Instructions are available for guiding developers to production.
*   **Forum** - There is a forum for supporting the Blue Button API developer community.
*   **Blog** - The platform uses a blog to communicate with API consumers on a regular basis.

I have a lot more reading and documentation to go through to fully understand what is expected of healthcare providers when it comes to this new rule. I am working with my friend Mark Boyd ([@mgboydcom](https://twitter.com/mgboydcom)) over at [Platformable](https://platformable.com/) to think through a model for thinking through not just the Blue Button 2.0 model but also how it can be replicated across hundreds or thousands of health care providers while also striking a balance between API providers, consumers, and the end-user healthcare patient who all of this is supposed to serve. Each of these building blocks from the Blue Button 2.0 API will help contribute to the vision Platformable is proposing for healthcare.

### Data at the Point of Care

As I was doing this research I happened to connect with my old friend Shelby Switzer ([@switzerly)](https://twitter.com/switzerly) who happens to be working at HHS behind the scenes on some of these efforts and she helped be better understand the landscape. She brought a few interesting areas to my attention but one of the most relevant things she shared with me was [Data at the Point of Care](https://dpc.cms.gov), which according to the site helps provide a 360 degree view of your patients history:

_“As patients move throughout the healthcare system, providers often struggle to gain and maintain a complete picture of their medical history. Data at the Point of Care fills in the gaps with claims data to inform providers with secure, structured patient history, past procedures, medication adherence, and more.”_

Data at the Point of Care also employs the FHIR specification, but provides bulk data access to patient data, which also builds upon the Blue Button data model. It introduces an interesting question about the best way to actually provide end-users with access to their data. Giving us two separate models for defining how healthcare data can been mad available to end-users, and another dimension I want to consider as part of my Blue Button model profiling. I am not sure which model the rule will be mandating healthcare providers follow, but I’ll be considering both as I make my way through what is going on.

### What is Next?

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/ob_5_wins_model.png)](https://platformable.com/)

This little sprint plus blog post has given me a better understanding about what this rule is all about. Based upon my experience, what I know is likely just the tip of the iceberg. I do these pieces to help me distill down what I am reading into essential details I can load up in my brain and consider as part of the bigger picture. I am looking to simmer on this for a while, and think of it context of what I have learned from PSD2. Sadly, PSD2, and now FHIR are the only two precedents we have for API regulations at the industry level. To help me keep learning there are a handful of other areas I will be thinking about next as I work to expand my view of this landscape—here are just a few of what is on my list.

*   **Reference Implementation** \- I am a reverse engineer so I need a reference implementation to work with to grasp what is going on.
*   **Management Layer** \- I am working with my partner in crime Tyk to help flesh out what API management for a FHIR implementation looks like.
*   **Provider Profiling** \- I am looking to pull data on Medicare Advantage (MA) organizations and Medicaid Fee-For-Service (FFS), CHIP FFS and other programs. 
*   **Landscape Map -** Try to come up with some way of quantifying what the landscape might look like including other actors influencing what is happening.
*   **Postman Collections -** Working to understand how I can create Postman collections to help drive the conversation around healthcare APIs. 

I am sure other things will emerge as I keep digging. Ultimately I’m looking to expand my understanding of what is going on and look for opportunities of how I can help reduce friction for providers when it comes to using Postman. I am also really keen on working with my friend Mark Boyd at [Platformable](https://platformable.com/) to apply his vision for banking and government to the healthcare sector. Much of the equity and balance he calls for in these sectors apply to the world of healthcare APIs. Mark is asking some of the hard questions and tracking on some of the meaningful data behind how APIs working, but more importantly are not working--helping us be more honest about what is going on and make sure APIs are living up to expectations.