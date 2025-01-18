---
layout: post
title: How Do I Provide A List Of Certified Applications To My API Ecosystem Partners
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-trusted-apps-and-users.png
author:
  name: kinlane
tags:
  - My
  - Applications
  - Partners
  - Ecosystem
---
I was emailed by someone working in government, asking some pretty interesting questions around using an application showcase, to make trusted applications available to an ecosystem of partners. I'm not going to talk specifically about the agency, as I have not gotten approval to talk publicly, but I think the question is an interesting mix of several areas I am researching, that I wanted to explore a little further, in an anonymous fashion.  

This is a a heavily edited, summarized version of what was asked, but it essentially went like this:

_There are 400 apps that want to get data from an organization but only some portion of them meet or exceed the governance criteria to be deemed “trustworthy”.  This usually involves certain legal commitments are followed and other privacy requirements are satisfied--these 400 apps that will be evaluated, and if they qualify, they will be put into the an application registry. Another aspect of it is that rather than each of the 400 apps having to go to each of the partners to get authorized and access the partners API that it would be more efficient to rely on the application registry to determine if they can expose their APIs to that apps request(s) as well._

Application showcases, that share approved applications with an ecosystem is common, but what I found interesting about this agencies question is that they want to also use the application approval process, as a sign of trust for other partners, when it comes to accessing their own API resources. As I said, this conversation spans three key areas of what I'm seeing occur modern API ecosystems:

*   3rd Party Applications (ie. approval, showcase, case studies, etc.)
*   Partner Programs (i.e. certification, access tiers, etc.)
*   Service Composition (ie. plans, monetization, rate limiting, etc.)

[Modern approaches to API planning](http://plans.apievangelist.com/building-blocks.html), and well thought-out [API driven partner programs](http://partners.apievangelist.com/building-blocks.html), provide the approaches you need to approve partners (ie. companies), and the applications they build. Then your service composition, [using API management infrastructure 3Scale](http://3scale.net), is how you craft the partner tiers of access, and [provide the API infrastructure APIs to your partners](http://apievangelist.com/2015/12/15/easier-to-offer-ops-apis-to-your-devs-if-your-api-service-provider-has-apis/) for knowing which applications, have which levels of access. [I've written about service composition many times](http://apievangelist.com/2015/12/03/what-is-api-service-composition/), but my [partner research is just getting going](http://partners.apievangelist.com/), so I wanted to take a look at the API pioneers, as potential blueprints in these areas--let's start with Amazon's approach: 

*   **[Amazon Certification](https://aws.amazon.com/certification/)** (individuals)
*   **[Amazon Partner Network](https://aws.amazon.com/partners/)** (groups, software)

As you can see both the individual, and group level offer several layers of certification, depending on individual, as well as the software being sold (ie. government, hardware, AWS marketplace, SaaS, etc).  For some more examples of partner programs, I am taking a look at [Salesforce with their certification program](http://certification.salesforce.com/), the [Ebay’s Solutions Directory](http://cgi6.ebay.com/ws/eBayISAPI.dll?SolutionsDirectory), with [Twitter's official Partner Program](https://dev.twitter.com/overview/general/official-partner-program), over at [Facebook with their Marketing Partners program](https://developers.facebook.com/marketingpartners), and the [Edmunds Certified Developer Network](http://developer.edmunds.com/certified-dev.html), for a start.

I felt this conversation provided me an interesting look on certifying partners (companies, organizations, agencies, individuals), and the software integration(s) they produce (app showcase, directory, etc.), then using that as a trust driver for your API service composition for your own platform, but also extending that identity, trust, and authentication for your partners to use in their own API service composition.

The application showcase portion of this story is interesting, but I think the use of partner program certification, and extending this to your partners, so that they can use in their API service is unique. Something that is totally possible, i[f your API management, planning, and partner layers all have APIs](http://apievangelist.com/2015/10/27/which-api-service-providers-across-the-20-areas-i-track-on-have-apis/). You can then use your infrastructure APIs, provide facades for your partners to access users, applications, partner program details, and other aspects of API operations, in a seamless way using APIs. \*mind blown\*