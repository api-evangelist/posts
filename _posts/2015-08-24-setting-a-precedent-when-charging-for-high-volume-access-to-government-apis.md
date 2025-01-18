---
layout: post
title: Setting a Precedent When Charging for High Volume Access to Government APIs
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-government-costs.png
author:
  name: kinlane
tags:
  - Government
  - Access
  - APIs
---
I'm neck deep in discussions around [API monetization](http://monetization.apievangelist.com/) lately, from [building a business model in the fast growing podcast space with AudioSear.ch](http://apievangelist.com/2015/07/30/is-your-monetization-rooted-in-the-resource-or-experience-side-of-your-api-operations/), [funding scientific research through API driven revenue](http://apievangelist.com/2015/08/15/can-we-keep-important-scientific-research-projects-alive-through-revenue-generated-from-api-access/), and the latest being a continuing conversation around how to monetize high volume usage around the [Recreational Information Database (RIDB)](http://usda.github.io/RIDB/). 

I have been pulled into the conversation around the API for our National Park system information several times now. In October of 2014 [I asked for Help To Make Sure The Dept. of Agriculture Leads With APIs In Their Parks and Recreation RFP](http://apievangelist.com/2014/10/16/i-need-help-to-make-sure-the-dept-of-agriculture-leads-with-apis-in-their-parks-and-recreation-rfp/), something [I saw some Next Steps For The The Recreation Information Database (RIDB) API](http://apievangelist.com/2015/01/21/the-next-steps-for-the-the-recreation-information-database-ridb-api/) this January. This time I was pulled in to comment on a change in language, which allows the vendor who is operating the API to charge for some levels of API access.

I received this National Forest Service Briefing, regarding the pricing change last week:

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/forest-service-icon.png)

**U.S. Forest Service  
National Forest System Briefing Paper**

Date: August 17, 2015

**Topic:**  Addendum to Recreation One Stop Support Services Contract RFP for a Recreation Information Database API download cost recovery mechanism for high frequency, high-volume requests

**Issue:**  Questions and comments from prospective contractors for the R1S support services contract included significant concern about the costs associated with supporting a completely open API.  There is an incremental cost for each instance that a third party ‘calls’ the API.  In private industry, the volume of calls is often managed by provisioning access to the API by requiring registration and agreeing to the volume of calls in advance.  For third parties wishing to create an interface that will call the API frequently, private industry typically implements a tiered pricing approach where costs rise as volume increases.

In response to these concerns and to provide a mechanism for cost recovery for high frequency, high-volume requests, the R1S Program Management Team offered this solution by posting this statement to questions on FedBizOpps (FBO.gov).

_Additionally, automated access to recreation data shall be free of charge for users making nominal data requests. The contractor may propose a fee structure applicable only to high volume data consumers. Such a fee structure shall be enforced through an agreement directly between the Contractor and the data consumer and shall be consistent with industry best practices and established market pricing. Should the contractor opt to propose such a fee structure, their proposal shall clearly state the applicable rates and details of the proposed fee structure._

A member of the open-data community quickly reacted to this provision indicating that it no longer meets the intent of the President’s Open Government executive order.  It is possible that media coverage will daylight dissatisfaction over this provision.

It is important to note that it shall be the R1S contractor’s responsibility to manage and control access to the API so that excessive calls from outside entities do not put unreasonable stress on the system that may be cause performance issues or be malicious in nature.  To accomplish this, the R1S contractor will need to provide sufficient server capability and staff to manage and support the API and the consumers using it.  The costs for the basic service are contained in the fee-per-transaction model, which will support free access to the API for all users, with a cost-recovery mechanism in place for high-use consumers.

To clarify the intent of the government, the RFP will be amended to state:

_The Government recognizes that high frequency, high-volume data requests may have a detrimental effect on the performance and security of R1S Reservation Services system and that the management and mitigation of such negative consequences drives costs to the contractor.  Accordingly, automated access to recreation data shall be free of charge for users making nominal data requests, however, the contractor may propose a fee structure, or establish access limitations, applicable only to higher volume data consumers.  Any proposed fee structure shall comply with OMB Circular A-130; Section 8 – Policy, which states, “Agencies will … Set user charges for information dissemination products at a level sufficient to recover the cost of dissemination but no higher.”_

**Summary/Key Points:**

*   The RIDB API is now open and available to anyone to download free of charge.
*   Federal recreation data is and shall continue to be available in machine-readable formats and shall safeguard privacy, confidentiality, and security in compliance with the Open Data Executive Order.
*   The follow-on contract for R1S requires that in addition to more static recreation and inventory data, real-time availability data shall also be made available through an API.
*   The audiences we anticipate using the API is widely varied and includes those who may want to incorporate federal recreation data into tourism portals and travel planning applications.  Others however include those who wish to produce new interfaces to the real-time availability data that could generate a very high volume of calls to the API.
*   We will continue to offer completely free access to the RIDB API for routine and reasonable requests in support of the President’s Open Government Executive Order.
*   R1S is allowing offerors for the follow-on contract to propose a cost-recovery fee structure for high-volume data customers that exceed reasonable access in accordance with OMB Circular A-130; Section 8.  These proposals will be considered as a provision within the new contract expected to be awarded in 2017.
*   The Recreation.gov API(s) will be funded entirely by recreation fee revenue generated through reservation transactions made by the general public.  By following private industry standards, R1S will be able to continue to provide free and open access to nominal users of the API without passing on higher costs associated with high volume use to the general reservation making public.  

**Background:** Charging fees for access to government APIs is a relatively new concept, however open-data evangelists and private industry all agree that there is a time and place for creating a reasonable tiered pricing structure which supports free open data and provides a framework for managing increased costs associated with higher end use.

Here are a few articles weighing both sides of this debate:

*   TechPresident - [Free the Data: The Debate Over APIs and Open Government, 17 Mar 2014](http://techpresident.com/news/24829/free-data-debate-over-apis-and-open-government)
*   API Evangelist - [A Better Understanding of Government APIs and their Consumers Before Considering Charging For Use, 07 Mar 2014](http://apievangelist.com/2014/03/07/a-better-understanding-of-government-apis-and-their-consumers-before-considering-charging-for-use/)
*   Civic Innovations - [http://civic.io/2014/03/07/apis-to-charge-or-not-to-charge/](http://civic.io/2014/03/07/apis-to-charge-or-not-to-charge/)
*   Mashable - [Should Your API be Free or Pay-to-Play? 21 Apr 2011](http://mashable.com/2011/04/21/free-or-paid-api/)

That concludes the briefing paper, but after I shared my thoughts with them, I received an update of what the language has evolved to, resulting in the following:

_The Government seeks to encourage usage of the Recreation.gov API, especially for third parties that could use the API to initiate additional reservations. At the same time, the Government recognizes that it is difficult to predict the likely query volume on Recreation.gov’s APIs, and that very high-frequency API requests from third parties that do not result in reservations on the system could have a detrimental effect on the performance or cost of the system, without providing associated benefits to the contractor or the Government._  
  
_Accordingly, the contractor may propose an API management plan that protects against extremely high-frequency usage of the API from third-parties that are not driving reservations to the system, while also encouraging widespread usage from third parties that are making a reasonable number and frequency of requests, and provides a mechanism for supporting and encouraging heavy API usage from third parties who demonstrate value and success in driving reservations on the R1S reservation system. Such plans may include establishing guidelines for third party interaction with the API (i.e., recommended best practices for caching API responses, implementing conditional requests, and defining “abusive” API usage that may be restricted), requiring users to register to receive a token or key to access the API and using techniques such as rate-limiting the number of API requests allowed from a given third party over a given period of time (i.e., XXXX requests per hour), or introducing “tiers” of access that limit high-frequency, high-volume API usage to those third parties who are successfully driving reservations on the system or are willing to pay a nominal fee that covers the incremental costs of serving non-reservation-generating high-frequency requests._ 

This is the first precedent I have seen, of a modern API driven monetization strategy in the federal government. There are many examples of private companies charging for access to federal government data, but this is the first example of applying modern API business models on top of government APIs and open data.

To me, this conversation also goes well beyond just charging for high volume access to government APIs, to cover the cost of delivering API driven resources reliably. It also introduces the concept of service composition into government APIs. We've had government APIs keyed up with [API Umbrella](http://apiumbrella.io/) for some time now, an open source approach that is modeled after modern, commercial API management offerings. What the RIDB API approach does, is open up the ability to introduce different levels of access tiers, rate limit, and charge for commercial levels of usage around vital government resources. 

When government follows the business model applied across the API sector, it will allow for the free, lower levels of access, while also charging for higher levels of access, that will keep critical APIs operating at scale, in a dependable way. I'm also hoping it opens up other approaches to service composition, like allowing developers to write and contribute to the evolution of government data. I'm just hoping the possibility of covering the cost of API operations, is enough of an incentive for government agencies, and the vendors that serve them, to explore other approaches to API service composition.

The trick in all of this will be teaching the agencies and vendors, about the transparency required to make all of this work. Agencies, and their vendors, will have to make sure and share the algorithm they use to establish service tiers, rate limits, and pricing levels. They will also have to be transparent about which API consumers / partners exist in which tiers, to eliminate speculation around favoritism. This transparency will be critical to all of this working smoothly, otherwise the whole approach will suffer from similar illnesses that existing government procurement practice suffer from. _APIs != Good by Default_

The RIDB API approach, which allows vendors to add API service levels, rate limits, and a pricing layer, sets a precedent for generating much needed revenue that can cover the costs of API operations. While this may seem like a footnote on a single government RFP,  as I mentioned in earlier posts on this subject, it represents how we will manage commercial usage of our virtual government resources in the future, in the same way we've done for our physical government resources for many years now.