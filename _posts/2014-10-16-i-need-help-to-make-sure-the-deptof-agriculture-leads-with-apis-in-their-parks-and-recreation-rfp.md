---
published: true
layout: post
title: >-
  I Need Help To Make Sure The Dept. of Agriculture Leads With APIs In Their
  Parks and Recreation RFP
image: >-
  https://s3.amazonaws.com/kinlane-productions2/federal-government/forest-service/department-of-agriculture-forest-service.png
author:
  name: kinlane
tags:
  - APIs
---
I need your help with something. I’m in the business of helping start-ups, all the way up to our federal government identify valuable assets, and make them more accessible for use in websites, and mobile devices. As part of this work I’m always on the look out for valuable public assets across city, state, and the federal government, and help make sure the conversations around these assets always include APIs, so that we aren’t just building websites, mobile applications in silos, and limiting the potential for public access, by individuals, and small businesses. 

Over the last couple years I have cultivated a small group of API evangelists in various sectors, who help keep me informed of important government projects, and one of my partners in crime Alyssa Ravasio ([@alyraz](https://twitter.com/alyraz)) brought a [pre solicitation for an RFP to my attention from the Department of Agriculture, for a “Recreation On Stop Support Services”](https://www.fbo.gov/index?s=opportunity&mode=form&id=3c740c1e5b809e5ecd99a4cf8a0467b3&tab=core&_cview=0) to my attention—a service you can see in action at [Recreation.gov](http://www.recreation.gov/). In short this is an ongoing contract that our federal government engages in with a private sector contractor on, to provide access to our nations campgrounds and campsites at our federal parks.

I would put our national parks and campgrounds at the top of treasured assets that this country possesses, and something that we need to make sure continue to be as accessible to individuals, and small businesses as possible. I want to take the time to respond to the pre-solicitation from the Department of Agriculture, in hopes of helping them craft a better RFP, before this goes out to bid. I also want to encourage others, who are also passionate about camping and our national parks, to submit their own feedback to the Department of Agricultures’s solicitation number [AG3187S151000--Recreation One Stop Support Services](https://www.fbo.gov/index?s=opportunity&mode=form&id=3c740c1e5b809e5ecd99a4cf8a0467b3&tab=core&_cview=0)

The current incarnation of the one stop service for recreation project has an API...well it has web services as part of the existing [Recreation Information Database (RIDB)](https://ridb.recreation.gov/RIDBWebSvcManual.pdf), but you also find mentions of API in the proposed RFP, under the **5.3.9 Mapping and Geospatial Capability**:

_A segment of the user community will not only be accessing and viewing the mapping data through the web interface at [www.recreation.gov](http://www.recreation.gov), but will also have a need to search, retrieve, and download the geospatial data via the RIDB data sharing interface(s), or APIs.  The Contractor shall demonstrate utilization of programming languages, formats, data types/conventions/sources, etc. which maximize the portability and usability of maps and map related data by third-parties. This minimizes the need for third-party data consumers to procure expensive and/or proprietary software to utilize, edit or manipulate the mapping data. The contractor shall ensure that all available geospatial data within R1S is incorporated into the user interface to provide users with the most complete mapping solutions available._

There is another mention of APIs under **5.3.6 Provide Travel Planning Tools wit**h:

_Non Federal reservable inventory may include state and local reservable and non-reservable recreation inventory which may be incorporated into the system or accessed via various application programming interfaces (APIs)._ 

Then towards the end you see the following needs:

*   **Data Sharing and Data Management -** Information originating from within RIDB and imported shall be presented in a manner such that the external origin of the data is transparent to users and consistent with presentation of information originating from within. 
*   **Information Sharing -** The Contractor shall deliver automated and manual services for the sharing of the consolidated recreation information described herein. The sharing service shall utilize prevailing industry best practices and technologies to make the consolidated recreation information publicly available to data consumers. 
*   **Information Consolidation -** The Contractor shall deliver automated and manual services for collecting of a wide variety of recreation information from a wide range of sources including Federal Government Agencies and Federal Partner organizations such as Historic Hotels of America. 

To me, all of this infers that whoever wins the contract will need to at least maintain what is available via the RIDB, which is nice, but it is just a web service, not a modern web API, and only reflects providing access a small portion of the valuable resource that will need to be made available via Recreation.gov, to partners, and the public at large. We can do better. An API needs to be a first class citizen in this RFP, something that is not just an afterthought, and a connection to the database that just needs to be maintained—an API will be central to deliver the resources needed for a "one stop services for recreation".

**Camping Resources  
**When you look through the requirements for this project you see all the building blocks for allowing individuals to engage with campsites across our nation, inventory, ticketing, lotteries, permitting, day use and group facilities, special events and use, equipment rentals, recreational and pass sales. All of this keeps our national parks accessible to campers.

**Mapping and Geospatial Resources  
**Camping resources are meaningful to us because of where they are located. Mapping and geospatial resources will be vital to enabling users to discover the parks and campsites where they wish to stay on their camping trips. The ability to search, and navigate campsites via modern mapping, providing geospatial resources is central to the one stop service for recreation.

**Financial Resources  
**A third cornerstone of the recreation one stop support services platform are the financial resources. The ability to accept and process credit cards, cancellations, modifications, and refunds will play a role in every engagement on the platform. Access to to all aspects of commerce via the platform will make or break operations at every level for the one stop service for recreation.

**User Resources  
**I’d say the fourth corner of the one stop service for recreation platform is the user. Providing secure, seamless access to user profiles, and history throughout the Recreation.gov experience will be critical to it all working. User resources are central to any modern web or mobile application in 2014, and depends on camping, geo, and financial resources to bring it all together.

**Recreation.gov Website  
**All of these resource need to be made available on at Recreation.gov, in the form of fully functioning web application providing a content management system (CMS) for managing the site, complete with a reservation system that allows users to discovery camping resources, via mapping geospatial resources, and pay for their reservations via financial resources—all via a secure, easy to access user profile.

**Travel Planning Tools  
**Beyond the core public website, and its reservation system the requires call for travel planning tools including point-to-point itinerary planning, field sales and reservations sales, third party sales, and reservable inventory management. While these tools are likely to primarily be web-based, the requirements call for remote sales and management of inventory, which requires a central API solution.

**Robust Reporting Solutions** Reporting is prominent through the requirements requiring web analytics, canned reports, customizable reports, monthly performance reporting, and enterprise reporting systems (ERS). In short, reporting will be essential to all aspects of the one stop service for recreation for both the contract winner and operator, as well as all of the agencies involved. I would add in that end-users will also need some views into their own Recreation.gov usage, adding another layer to the conversation.

**Data Accessibility & Portability  
**Another element that is present throughout the requirements is data access and portability, of the camping, reservation, customer (user) and resulting financial data. Pretty much everything in system should be accessible right? This definitely goes beyond just what is available va the RIDB, and requiring all aspects of the one stop service for recreation to be accessible for use in any other system, or just as download. 

**Minimum Required Applications & Platforms  
**As part of the requirements, there is a minimum requirements for browsers, and mobile platforms that the one stop service for recreation should operate on:

*   Applications:      
*   *   Microsoft Internet Explorer
    *   Mozilla Firefox
    *   Google Chrome
    *   Apple Safari
*   Platforms:    
*   *   Android Mobile Devices
    *   Apple iOS Mobile Devices
    *   Apple Desktop OS
    *   Microsoft Windows Mobile Devices
    *   Microsoft Windows PC

For me this portion of the requirements are extremely vague. I agree that the Recreation.gov and travel planning tools should work in all these browsers, and be responsive on mobile browsing platforms, but these requirements seem to allude to more, without actually going there. In 2014-2016 you can’t tell me that native mobile experiences won’t be something end users of recreation.gov and the overall system will be demanding? Mobile wills be the gateway to the platforms mapping and geospatial resources, and APIs are how you deliver the resources needed for developing mobile applications on all of the platforms listed. 

**A One-Stop Service for Recreation Requires A Multi-Channel Approach  
**The one stop service for recreation requires a multi-channel approach to deliver the camping, mapping & geo, financial and user resources to the main Recreation.gov website, supporting reservation system, travel planning tools, reporting solutions, and potentially any other web or mobile applications, and round it all off with needing to provide the data accessibility and portability that is demanded of a modern federal government platform.

**Transform The RIDB Web Service Into A Modern API And Make The Center  
**The only way you will engage with users Recreation.gov on the web and mobile locations they will demand, as well as deliver the reservation, travel planning, and reporting solutions, while making sure everything is portable, the RIDB database and supporting web services needs to be brought up to date, and transformed into a modern web API.  The RFP\_-\_Attachment\_10\_-\_Notional\_Future\_RIDB\_Data\_Flow\_-\_Sep.\_22\_2014.pptx even reflects this vision, but the actual RFP severely falls short of describing the role an API will play in the platform.

![](https://s3.amazonaws.com/kinlane-productions2/federal-government/forest-service/ridb-api.png)

**Making Security A Priority Across All Aspects Of Operations  
**With a single API layer being the access layer for all web, mobile, reporting, and data accessibility channels, security takes on a whole new meaning. APIs provide single access point for all access to platform resources, allowing security, and auditing to occur in real-time, using modern approaches to API management. APIs use existing web technology, and don’t require any special technology, but do provide a single layer to enable, monitor, and deny access to all resources, across the one stop services for recreation.

**A Centralized Metrics, Analytics, and Reporting Layer  
**Married with security, an API centric approach allows for a platform wide analytics layer, that can drive security, but also provide the data points required for the overall platform reporting system. With an API analytics layer this data can be delivered to platform, government, developer, and end-user reporting solutions. A comprehensive metrics, analytics, and reporting strategy is essential to a modern one stop services for recreation platform.

**APIs Let In the Sunlight Enforcing Transparency & Accountability  
**One critical aspects of a modern, API-centric approach is the transparency and accountability it can provides. All database connections, and web or mobile applications are brokered via an API layer, requiring all applications to rely on the same pipes for reading, writing, modifying, and removing data from the system. This approach provides a secure window into all aspects of platform operations, providing the accountability requirements set forth in the proposed RFP.

**Some Constructive Criticism For Language in the Proposed RFP  
**There are some points in the proposed RFP that in my opinion move the conversation backwards rather than looking to the future, and fulfilling a vision of what the "one stop services for recreation platform" could be. One example is **5.3.6.3 Third Party Sales**:

_The Government anticipates that during the potential 10-year period of performance after go-live there may be an interest by commercial travel and recreation planning companies (such as Travelocity, Expedia, etc.) to utilize R1S inventory and availability data to facilitate R1S transactions. The Government may be open to such Third Party Sales arrangements, provided the business, financial and legal terms of the arrangement are in the Government’s best interests. At the Government’s request, the Contractor shall lead exploratory meetings, including Government and applicable industry representatives, to determine commercial interest in such a service and also explore the technical and fiscal feasibility of such Third Party Sales arrangements. Upon the conclusion of all necessary exploratory meetings, and should the Government decide to implement Third Party Sales, the Government will issue a formal modification to the R1S Support Services contract to incorporate the service. There is no requirement for the contractor to provide Third Party Sales services until a post-award modification is issued requiring them._  

“There may be an interest by commercial travel and recreation planning companies (such as Travelocity, Expedia, etc.)?” In the current online environment I am pretty sure that this shouldn’t be “may”, this should be “will”, and that the pace of business today moves quite a bit faster than this section describes. APIs enable a new approach to business development, that was coined 10 years ago by the co-founder of Flickr, the popular sharing platform. I understand that you will have to certify developers, but this should not get in the way of small business developers experimenting and innovating with the resources available via the platform. Business development via an API has been going on in the private sector for 10 years, and isn't something the Department of Agriculture should be putting off until the next procurement cycle for the platform.

The proposed RFP states:

_The current contract is a Variable Quantity contract with Fixed Price per-transaction pricing such that the Contractor earns a fixed fee for each transaction processed via the [www.recreation.gov](http://www.recreation.gov) website, the telephone customer support line, or in-person at participating Federal recreation locations.  The fixed fees under the current contract vary depending on the type of inventory being reserved, the sales channel, etc.  
_

In an era where we have over 10K API resources to use in applications, where cloud-based utility pricing is successfully being applied, and you pay for what you use across numerous industries, you can’t have a business model like this for a public / private sector partnership, and not put APIs to use, and enabling trusted partners to build a business model around the commerce opportunities available via a platform. Right now this is exclusive to the current contract holder Active Network, d.b.a. ReserveAmerica, and for the next round should not be something that is exclusive to the contract winner--it should be open to the thousands of businesses that serve the parks & recreation space.

Another item I have an issue with is ownership over the source code of the platform:

_The Government owns all of the inventory, transaction and customer data associated with [Recreation.Gov](http://Recreation.Gov); however the reservation system remains the sole proprietary property of the current service provider._

I know this is the current situation, but I strongly urge that for the next relationship, this is not the case. The government should own all of the inventory, transaction, and customer data, and the reservation system should be open source. Period. The chances that there will be innovation via the platform if it remains a proprietary solution is slim, and requiring that the core reservation system, and supporting API platform remain open source will stimulate innovation around Recreation.gov. Any business, including the winner of the contract, can still build proprietary solutions that use the API to deliver specific applications, or end-user solutions, and premium features, but the core software should be open this time.

**Some Praise For What Is In The Proposed RFP  
**I am not one to just criticize, without providing at least some praise, acknowledging where the Department of Agriculture is looking towards the future. One area I have to note is their inclusion of the [U.S. Digital Services Playbook](https://playbook.cio.gov/), where #3 on the checklist for deploying in a flexible hosting environment is "resources are provisioned through an API”, and #2 on the checklist for defaulting to open says that you should provide data sets to the public, in their entirety, through bulk downloads and APIs (application programming interfaces). I think the [U.S. Digital Services Playbook](https://playbook.cio.gov/) should be included with ALL federal government RFPs, and it makes me happy to see it in here.

I also understand the number of agencies involved in the project include the U.S. Department of Agriculture Forest Service, U.S. Army Corps of Engineers, U.S. Department of the Interior (including at least the National Park Service, Bureau of Land Management, and Bureau of Reclamation, Fish and Wildlife Service), the National Archives and Records Administration and other potential Federal partners to be determined at a later date.  Agencies involved in the trip planning component include the agencies named above, as well as the Department of Transportation; Federal Highway Administration (FHA), the Department of Commerce; National Oceanic and Atmospheric Administration (NOAA), the Tennessee Valley Authority (TVA), and the Smithsonian Institution.  This is a huge undertaking, and commend them on the effort, but can't also help myself in throwing in that this is all the more reason the one stop services for recreation has to have an API. ;-)

**In Closing  
**I think I’m finished with my response to the [Department of Agricultures’s solicitation number AG3187S151000--Recreation One Stop Support Services](https://www.fbo.gov/index?s=opportunity&mode=form&id=3c740c1e5b809e5ecd99a4cf8a0467b3&tab=core&_cview=0). I would like to request that they extend the deadline for response for another 30 days, to allow me to drum up more feedback, as well as put some more thought into the RFP myself. Following your own lead of including the U.S. Digital Services Playbook, I would also recommend bringing in:

*   **[18F](https://18f.gsa.gov/)** - Building on the U.S. Digital Services Playbook, 18F has an amazing set of resources to help the Department of Agriculture move forward with this RFP in a way that is in line with other leading platform efforts in the federal government—please make sure 18F is involved. 
*   **Round 3 PIFs -** This is probably already be in the works, but make sure there is someone from the recent round of Presidential Innovation Fellows (PIFs) are on board, helping make sure this project is headed in the right direction.

Ultimately I think all the right parts and pieces are present for this project, but when it comes to  finding the right language, and vision for the RFP, it needs a lot of help, and I'm confident that 18F and PIFs can help bring it home. The most important element for me is that [web service from the RIDB](http://ridb.recreation.gov/RIDBWebSvcManual.pdf) needs to be transformed into a modern web API, and brought front and center to fuel every aspect of the platform. I’m confident that if the RFP speaks the right language, the winning contractor will be able to translate the RFP into the platform it needs to be, and serve the expectations of the modern consumers who will be using the platform in coming years.

If this RFP goes out the door without an API vision, planning of the family camping trip will done in a silo, at Recreation.gov, and not on the mobile phones that are ubiquitous in our everyday life. User do not need a web experience that is translated to function in mobile browsers, they need a web experience when it makes sense, and a native mobile experience, and even offline when necessary. 

Planning the family vacation will not happen from just Recreation.gov, it needs to be part of a larger vacation planning experience, occurring via the online platforms we already use in our daily lives. If the Department of Agriculture focuses on an API-first vision for delivering the one stop service for recreation, it will live up to its name—truly being a one stop service that can be used for planning your recreation from any platform or device.

**Call to Action:** Please visit [Department of Agricultures’s solicitation number AG3187S151000--Recreation One Stop Support Services](https://www.fbo.gov/index?s=opportunity&mode=form&id=3c740c1e5b809e5ecd99a4cf8a0467b3&tab=core&_cview=0) and ask them to extend the comment period, and let them know how important it is that the platform is API-centric. Feel free to send me a link to your of feedback, and I'll add a list of relevant stories to the bottom of this post as I find them.