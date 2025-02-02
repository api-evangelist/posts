---
layout: post
title: Thinking About The Monetization Layer For Public Data
image: null
atomdate: 2017-01-03T23:00:00.000Z
tags:
  - Monetization
  - Data
  - Public Data
  - Public
---
This is my walk-through of the concepts involved with the monetization of public data using APIs. In this work I am not advocating that companies should be mindlessly profiting from publicly available data, my intent is to provide a framework for organizations to think through the process of generating revenue from commercial access to public data, acknowledging that it costs money to aggregate, serve up, and keep data up to date and usable for the greater public good--if public data is not accessible, accurate, and up to date it is of no use to anyone.

[I have long argued that companies and even government agencies should be able to charge for commercial access to public data](http://apievangelist.com/2014/03/07/a-better-understanding-of-government-apis-and-their-consumers-before-considering-charging-for-use/) and be able to generate revenue to cover operational costs, and even produce much-needed funds that can be applied to the road map. My work in this has been referenced in existing projects, [such as the Department of Interior and Forest Service looking to generate revenue from commercial access and usage of public data generated by the national parks systems](http://apievangelist.com/2015/08/24/setting-a-precedent-when-charging-for-high-volume-access-to-government-apis/). In my opinion, this conversation around generating revenue from publicly available digital assets should be occurring right alongside the existing conversations that already are going on around publicly available physical assets.

**Building Upon The Monetization Strategies Of Leading Cloud Providers**  
My thoughts around generating revenue from public open data is built upon monitoring the strategies of leading online platforms like Amazon Web Services, Google, and others. In 2001 a new approach to providing access to digital resources began to emerge from Internet companies like Amazon and Salesforce, and by 2016, it has become a common way for companies to do business online, providing metered, secure access to valuable corporate and end-users data, content, and other algorithmic resources. This research looks to combine these practices into a single guide that public data stewards can consider as they look to fund their important work.

Do not get me wrong, there are many practices of leading tech providers that I am not looking to replicate when it comes to providing access to public data, let alone generating revenue. Much of the illness in the tech space right now is due to the usage of APIs, it is due to a lack of creative approaches to monetizing digital assets like data and content, and terms of service that do not protect the interest of users. My vantage point is the result of six years studying the technology, business, and politics of the API sector, while also working actively on open data projects within city, state, and federal government--I'm looking to strike a balance between these two worlds.

**Using Common Government Services As A Target For Generating Much-Needed Revenue**  
For this research, I am going to use a common example of public data, public services. I am focusing in this area specifically to help develop a strategy for [Open Referral](https://openreferral.org/) but it is also a potential model that I can see working beyond just public services. I am looking to leverage [my existing Open Referral work](https://apievangelist.com/2016/03/31/gathering-my-thoughts-about-open-referral-and-the-human-services-api/) to help push this concept forward, but at the same time, I am hoping it will also provide me with some public data examples that are familiar to all of my readers, giving me with some relevant ways to explain some potentially abstract concepts like APIs to the average folk we need to convince.

For the sake of this discussion things down and focus on three areas of public data, which could be put to work in any city across the country:

*   **Organizations** - The business listings and details for public and private sector agencies, businesses, organizations, and institutions.
*   **Locations** - The details of specific locations which organizations are providing access to public services.
*   **Services** - The listings and details of public services offered at the municipal, county, state, or federal levels of government.

[Open Referral is a common definition for describing public services organizations, locations, and services, allowing the government, organizations, institutions, and companies to share data in a common way,](https://openreferral.org/) which focuses on helping them better serve their constituents--this is what public data is all about, right? The trick is getting all players at the table to speak a common language, one that serves their constituents, and allows them to also make money.

While some open data people may snicker at me suggesting that revenue should be generated on top of open data describing public services, the reality is that this is already occurring--there are numerous companies in this space. The big difference is it is currently being done within silos, locked up in databases, and only accessible to those with the privileges and the technical expertise required. I am looking to bring the data, and the monetization out of the shadows, and expand on it in a transparent way that benefits everybody involved.

**Using APIs To Make Public Data More Accessible and Usable In A Collaborative Way**  
Publicly available data plays a central role in driving websites, mobile applications, and system to system integrations, but simply making this data available for download only serves a small portion of these needs, and often does so in a very disconnected way, establishing data silos where data is duplicated, and the accuracy of data is often in question. Web APIs are increasingly being used to make data not just available for downloading, but also allow it to be updated, and deleted in a secure way, by trusted parties. 

For this example I am looking provide three separate API paths, which will give access to our public services data:

*   **http://example.com/organizations/ -** Returns JSON or XML listing and details of organizations for use in other applications.
*   **http://example.com/locations/ -** Returns JSON or XML listing and details of organizational locations for use in other applications.
*   **http://example.com/services/ -** Returns JSON or XML listing and details of public services for use in other applications.

A website provides HTML information for humans, and web APIs provides machine readable representations of the same data, making it open for use in a single website, but also potentially multiple websites, mobile applications, visualizations, and other important use cases. The mandate for public data should ensure it isn't available on a single website but is as many scenarios that empower end-users as is possible. This is what APIs excel at, but is also something that takes resources to do properly, making the case for generating revenue to properly fund the operations of APIs in the service of the public good.

**The Business of Public Data Using Modern Approaches to API Management**  
One of the common misconceptions of public web APIs is that they are open to anyone with access to the Internet, with no restrictions. This might be the case for some APIs, but increasingly government agency, organizations, and institutions are making public data available securely using common API management practices defined by the Internet pioneers like Salesforce, Amazon, and Google over the last decade.

API management practices provide some important layers on top of public data resources, allowing for a greater understanding and control over how data is accessed and put to use. I want to provide an overview of how this works before I dive into the details of this approach by outlining some of the tenets of an API management layer:

*   **Users** - Requiring users to register, establishing a unique account for associated all API and public data activity.
*   **Applications** - Requiring users to define the application (the web, mobile, visualization, etc.) and other viable information regarding their access to the public data.
*   **Keys** - Issuing of unique API keys for each application, requiring their inclusion in all consumption of public data via the API.
*   **Service Composition** \- Placement of public data resource (organizations, locations, services) into tiers, defining which APIs different users have access to and the scope of that access.
    *   **Resource Specific -** Allowing access to specific data resources to a select audience.
    *   **Read / Write** \- Restricting write access to select users and applications. 
    *   **Data Specific -** Limiting which data is returned, filtering based on who is requesting it.
*   **Rate Limits** \- All APIs are rate limited, allowing for different levels of access to public data resources, which can be defined in alignment with the costs associated with operations.
*   **Logging** - Each API call is logged, with required user application keys, as well as details of the request and response associated with each API call.
*   **Analytics** - The presence of a variety of visual layers that establish an awareness of who is accessing public data APIs, what they are accessing, and details on how and where it is being applied.

These seven areas provide some very flexible variables which can be applied to the technical, business, and politics of providing access to public data using the Internet. Before you can access the organizations, locations, and service information via this example public services API you will need to be a registered user, with an approved application, possessing valid API keys. Each call to the API will contain these keys, identifying which tier of access an application is operating within, which API paths are available, the rate limits in existence, and logging of everything you consume and add so it can be included as part of any operational analytics. 

This layer enables more control over public data assets, while also ensuring data is available and accessible. When done thoughtfully, this can open up entirely new approaches to monetization of commercial usage by allowing for increased rate limits, performance, and service level agreements, which can be used to help fund the public data's mandate to be accessible by the public, researchers, and auditors.

**Providing The Required Level Of Control Over Public Data Access**  
Understandably, there concerns when it comes to publishing data on the Internet. Unless you have experience working with modern approaches to delivering APIs it can be easy to focus on losing control over your data when publishing on the web--when in reality data stewards of public data can gain more control over their data when using APIs over just publishing for a complete download. There are some distinct ways that API providers are leveraging modern API management practices to evolve greater levels of control over who accesses data, and how it is put to use.

I wanted to highlight what can be brought to the table by employing APIs in service of public data, to help anyone make the argument for why providing machine readable data via APIs is just as important as having a website in 2016:

*   **Awareness** - Requiring all data to be accessed via APIs which required keys to be used for ALL applications, combined with a comprehensive logging strategy, brings a new level of awareness regarding which data is accessed, and how it is being used, or not used.
*   **Security** - While API keys are primarily used for logging and analytics, it also ensures that all public data resources are secured, providing tiered levels of access to 3rd parties based upon trust, contributing value to the data, and overall platform involvement--allowing data to be securely made available on the open web.
*   **Quality Control -**  APIs act as central gatekeeper regarding how data is updated, evolved, and deleted, allowing for a centralized, yet also potentially distributed, and collaborative approach to ensuring public data is accurate, possessing a high level of quality control.
*   **Terms of Service -** All API usage is governed by the legal terms of service laid out as part of platform operations, requiring all users to respect and follow terms of service if they expect to maintain their public data API keys.
*   **Governance** - Opening up the overall management of the availability, usability, integrity, and security of the public data which may include oversight from governing body or council, a defined set of procedures, and a plan to execute those procedures.
*   **Provenance** - Enabling visibility into the origins, history, and oversight of public data, helping establish the chain of custody regarding shared use of valuable data across platform operations.
*   **Observability** - Allowing for the observability of data resources, and its contributors and consumers using existing platform outputs and mechanisms, enabling high levels of awareness through the API management framework employed as part of platform operations, meeting service level agreements, and expected availability.

It is important to discuss, and quantify this control layer of any public data being made available via APIs if we are going to talk about monetization. Having APIs is not enough to ensure platform success, and sometimes too strict of control can suffocate consumption and contribution, but a lack of some control elements can also have a similar effect, encouraging the type of consumption and contribution that might not benefit a platform's success. A balanced approach to control, with a sensible approach to management and monetization, has helped API pioneers like Amazon achieve new levels of innovation, and domination using APIs--some of this way of thinking can be applied to public data by other organizations.

**Enabling and Ensuring Access To Public Data For Everyone It Touches**  
Providing access to data through a variety of channels for commercial and non-commercial purposes is what modern API management infrastructure is all about. Shortly after possessing a website became normal operating procedure for companies, organizations, institutions, and government agencies, web APIs began to emerge to power networks of distributed websites, embeddable widgets, and then mobile applications for many different service providers. APIs can provide access to public data, while modern API management practices ensure that access is balanced and in alignment with platform objectives--resulting in the desired level of control discussed above.

There are a number of areas of access that can be opened up by employing APIs in the service of public data:

*   **Internal** - APIs can be used by all internal efforts, powering websites, mobile applications, and other systems. The awareness, logging, and other benefits can just as easily be applied to internal groups, helping understand how resources are used (or not used) across internal groups.
*   **Partner -** After internal access to data resources, access levels can be crafted to support partner tiers of access, which might include access to special APIs, read and write capabilities, and relaxing of rate limits. These levels often include service level agreements, additional support options, as well as other benefits.
*   **Public** - Data can be made publicly available using the web, while also maintaining the quality and security of the data, keep the access as frictionless as possible, while ensuring things stay up and running, and of expected quality and availability.
*   **Privacy -** Even with publicly available data there is a lot to consider when it comes to the privacy of organizations, locations, and services involved, but also the logging, and tracking associated with platform operations.
*   **Transparency** - One important characteristic of API platform is transparency in the API management layer, being public with the access tiers, resources available, and how a platform operates--without necessary transparency, consumers can become distrustful of the data.
*   **Licensing -** Ideally all data and all schema in this scenario would be licensed as CC0, putting them into the public domain, but if there are license considerations, these requirements can be included along with each API response, as well as in platform documentation.
*   **Platform Meta API -** APIs do not just provide access to the public data, they also provide access to the API management layer for the public data. Modern API management allows for API access to the platform in the several important ways:  
    *   **Users** - Providing API access to user's data and usage.
    *   **Apps** - Providing API access to applicaiton level data and usage.
    *   **Tiers** - Providing API access to platform tiers and details.
    *   **Logs** - Providing API access to the platform log files.
    *   **Billing** - Providing API access to the platform billing for access.
    *   **Analytics** - Providing API access to the analytics derived from logs, billing, and usage.
*   **Observability** - An API management layer on top of public data makes data access observable, allowing platform operators, government agencies, and potentially 3rd party and independent auditors--observability will define both the control as well as access to vital public data resources.

In a world that is increasingly defined by data, access to quality data is important and easy, secure access via the Internet is part of the DNA of public data in this world. API management provides a coherent way to define access to public data, adhering to the mandate that the data is accessible, while also striking a balance to ensure the quality, reliability, and completeness of the public data.

There has been a lot of promises made in the past about what open or public data can do by default when in reality opening up data is not a silver bullet for public services, and there is a lot more involved in successfully operating a sustained public data operation. APIs help ensure data resources are made available publicly, while also opening up some new revenue generation opportunities, helping ensure access is sustainable and continues to provide value--hopefully find a balance between public good and any sensible commercial aspirations that may exist.

**APIs Open Up Many Potential Applications That Support the Mission**  
As doing business on the web became commonplace in the early 21st century, Amazon was realizing that they could enable the sales of their books and other products on the websites of their affiliate partners by using APIs. In 2016 there are many additional applications being developed on top of APIs, with delivering public data to multiple web sites being just the beginning.

*   **Web** - It is common for websites to pull from a database. Increasingly APIs are being used to drive not just a single website, but networks, and distributed websites that draw data and content from a variety of sources.
*   **Mobile** - APIs are used to make data and content available across a variety of mobile applications, on different platforms.
*   **Embeddable** - Delivering data to buttons, badges, bookmarklets, and widgets that can be embedded across a variety of websites, and applications.
*   **Conversational** - Using data in conversational interfaces like for bots, messaging, and voice-enabled applications.
*   **Visualizations** - Including data in visualizations, showing API consumption, and platform usage around public data.
*   **iPaaS / ETL -** Enabling the migration of public data to and from other external 3rd party platforms using traditional ETL, or more modern iPaaS solutions powered via the API.
*   **Webhooks** - Notifying external systems of relevant events (location or service update) by pushing to URLs via what is called a webhook.
*   **Spreadsheets -** Publishing of data to Microsoft Excel or Google Spreadsheet using the public data APIs, as well as spreadsheet APIs.

This is just an overview of the number of ways in which a single, or multiple APIs can be used to deliver public data to many different endpoints, all in service of a single mission. When you consider this in support of public services, a bigger picture of how APIs and public data can be used to better serve the population--the first step always involved standardized, well-planned set of APIs being made available.

**The Monetization Requirements Around Public Data API Operations**  
This is where we get to the portion of this discussion that is specifically about monetization of the operations around publishing and maintaining high-quality sources of public data. Before a sensible monetization strategy can be laid out, we need to be able to quantify what it costs to operate the platform and generate the expected value from everyone at the table.

What are the hard costs that should be considered when operating a public data platform and looking to establish some reasonable monetization objectives?

*   **Data Acquisition** - What one-time, and recurring costs are associated with acquiring data. This might include ongoing payouts to API contributors who are adding, updating, and validating data via the API.
    *   **Discover** \- What was spent to discover data, and identify its use on the platform.
    *   **Negotiate** - What time to I have in actually getting access to something.
    *   **Licensing** \- Are there licensing costs or fees involved in the acquisition of data.
*   **Development** - What one-time, and recurring costs are associated with platform development.
    *   **Normalization** - What does it take me to clean up, and normalize a data set, or across content. This is usually the busy janitorial work necessary.
    *   **Validation** - What is involved with validating that data is accurate correct, providing sources, and following up on references.
    *   **Database** - How much work is being put putting into setting up the database, maintaining, backing up, and delivering optimal levels of performance.
    *   **Server** - Defining the amount of work put into setting up, and configuring the server(s) to operate an API, including where it goes in the overall operations plan.
    *   **Coding** - How much work goes into actually coding an API. Ideally, open source frameworks are employed to reduce overhead, maintenance, and the resources needed to launch new endpoints.
*   **Operational** - What one-time, and recurring costs are associated with platform development.
    *   **Compute** - What costs are associated with providing server compute capacity to process and deliver public data via APIs.
    *   **Storage** -What costs are associated with on the disk storage, for both the database and other images, video, and related objects.
    *   **Network** - How much bandwidth in / out is an API using to get the job done, as well as any other network overhead.
    *   **Management** - What percentage of API management resources is dedicated to the API. A flat percentage of API management overhead until usage history exists.
    *   **Monitoring** - What percentage of the API monitoring, testing, and performance service budget is dedicated to this API. How large is the surface area for monitoring?
    *   **Security** - What does it cost to secure a single API, as part of the larger overall operations? Does internal resource spend time, or is this a 3rd party service.

**Understand The Value Being Generated By Public Data**  
Now that we understand some of our hard costs, let's have an honest conversation about what value is being generated? First, public data has to offer value, or why are we doing all this hard work? Second, nobody is going to pay for anything if it doesn't offer any value. Let's stop for a moment and think about why we are doing all of this in the first place, and what value is worthy of carving off to drive monetization efforts.

*   **Direct Value Generation -** What direct value is being generated by the public data platform operations.
    
    *   **Usage** - How is usage wielded as part of value generation? Is value about the increased usage of a resource, or possible value generated by a minimum usage of a resource? Usage is an important dimension of determining how value is generated as part of API operations.
    *   **Users** - How is the value generated on a per user level? Are more users valuable? or possibly more targeted users? Teams, groups, and many other ways to determine how users impact positively or negatively the value generated from platform usage.
    
    *   **Relationships** - How can relationships between users, or companies be applied to value generated? Will access to more relationships positively or negatively impact how value is generated for the platform and consumers?
    *   **Data Acquisition** \- Is the acquisition of data part of the generation of value via the public data platform, encouraging the growth of data.
    *   **Applications** - Is value generated looked at on a per application basis? Does having multiple applications impact the value generate? Coming up with interesting ways to understand how applications impact platform value for everyone.
    *   **Integrations** - What external integrations are available? How can these be leveraged to enhance the value for consumers? Are some integrations part of base operations, where others are accessible at higher levels, or on a one-off basis.
    
    *   **Support** - Is access to support something that impacts the value being generated? Does access to support resources introduce the optimal levels of value consumers are looking for? How is support wielded within overall platform monetization?
    *   Service Level Agreements - Are we measuring the number of contracts signed, and partner agreements in place? And how we are delivering against those agreements?
    *   **Revenue** - What revenue opportunities for the ecosystem around an API and its operation, sharing in the money made from platform operations. Obviously, anything beyond operating costs should be applied to expansion of efforts.
*   **Indirect Value -** What are some of the indirect value being generated by the public data platform operations.
    
    *   **Marketing Vehicle** - Having an API is cool these days, and some APIs are worth just having because of the PR value, and discussion.
    *   **Traffic Generation** - The API exists solely for distributing links to the web and mobile applications, driving traffic to specific properties - is this tracked as part of other analytics?
    *   **Brand Awareness** - Applying a brand strategy, and using the API to incentivize publishers to extend the reach of the brand and ultimately the platform - can we quantify this?
    
    *   **Analysis** - How can analytics be leveraged as part of API value generation? Are analytics part of the base of operations, or are they an added value incentive for consumers, and platform operators.
    *   **Competitiveness** - Is the public data effort more agile, flexible, and competitive because it has an API and can deliver on new integrations, partnerships, and to new platforms easier, and more cost effectively?
    *   **Public Service -** Making data available for use on many different web, mobile, and other applications demonstrates a commitment to public service, and the good public data can do.

While there may be other hard costs associated, as well as areas of value being generated, this should provide a simple checklist that any open data provider can use as a starting blueprint. Additional costs can be included on in these existing areas or added on as new areas as deemed relevant--this is just about getting the monetization conversation going.

There are two main objectives in this exercise: 1) understanding the hard costs and value associated with operations 2) assembling into a coherent list so that we can explain to others as part of transparency efforts. When it comes to the business of public data, it is more than just generating revenue, it is about being upfront and honest about why we are doing this, and how it is done--mitigating the political risk involved with doing business with public resources out in the open.

**Putting Together A Working Plan Involving Public Data**  
With an understanding of the hard costs of providing a public data platform and an awareness of the intended value to be generated via operations, we can now look at what details would be involved in a plan for executing this monetization strategy. API management practices are architected for metering, measuring, and limiting access to data, content, and algorithmic resources in service of a coherent, transparent public data monetization strategy. 

Here is a core framework of API management that can be applied to public data that can be used to drive monetization efforts:

*   **Access** - What are the default access levels for public data access via the API.
    *   **Self-Service -** Public access to the platform via user registration, or 3rd party authentication like Twitter, Facebook, or Github.
    *   **Approval** - Access level(s) that require the approval of user or application before they are able to access platform resources.
*   **Tiers -** What are the multiple tiers of access to all data resources available via API.
    
    *   **Public** - Define the default public access for the platform, with a free, limited access tier that is obtainable via a self-service registration without approval.
    
    *   **Contributor** \- Providing a tier of access to contribute content, validate and management data on the platform.
    
    *   **Service Provider** \- Providing a tier of access for service providers involved with public data operations.
    
    *   **Internal** - Access tier for internal groups, used by all websites, mobile applications, and system integrations.
    *   **Partner** - Tier(s) of access design for data, and other partners involved in the management of public data resources.
    *   **Commercial** - Access tier(s) for commercial usage of public data resources with higher levels of access for set fees.
    *   **Non-Commercial** - Access tier(s) for non-commercial usage of public data resources with specific access waving fees.
    *   **Government** - A set of API resources is available specifically for government access.
    *   **Auditor** - Access across APIs specifically designed for external 3rd party auditors.
*   **Elements** - What are the core elements that make up the service composition for the monetization plan(s).
    *   **Paths** - Establishing plans based upon the availability and access to different API endpoints, including platform meta API. 
    *   **Read / Write -** Restricting read and write access to public data to specific tiers, limiting who writes data to only trusted applications.
*   **Time Frames** \- What are the timeframes that impact the public data / API monetization plan(s) and consumption.
    *   **Daily** - What are the details for managing, guiding, and restricting plan entries each day.
    *   **Weekly** - What are the details for managing, guiding, and restricting plan entries in weekly timeframes.
    *   **Monthly** - What are the details for managing, guiding, and restricting plan entries on a monthly basis.
*   **Metrics** - What is being measured to quantify value generated, providing a framework to understand monetization possibilities.
    *   **API Calls -** Each call to the API is measured, providing the cornerstone of monetizing access and contribution to public data--remember not all calls will cost, some will add value with contributions.
    *   **URL Clicks -** Each click on a URL served up via the API drive data and content is measured, providing details on value delivered to internal and external websites--URL shortener required for this.
    *   **Searches -** All searches conducted via the API are measured, providing details on what users are looking for.
    *   **Users -** Measure user acquisitions and history to keep track of the value of each platform user.
    *   **Applications -** Measure the number of applications added, with details of activity to understand value generated.
*   **Limits** - What are the limitations imposed across all tiers of access as part of the API monetization plan.
    *   **API Calls -** How many API calls any single application can make during a specific time frame.
    *   **IP Address -** Which IP addresses you can request data from, limiting the scope of serving data.
    *   **Spend -** How much any user can spend during a given time period, for each user or application.
*   **Pricing** - What prices are set for different aspects of the monetizing the platform.
    *   **Tiers** - What are the base prices established for each tier of API access.
    *   **Unit** - What are the default unit prices of per API call access for each tier.
    *   **Support** - What charges are in place for receiving support for platform applications.
    *   **SLA** - What costs are associated with delivering specific quality or levels of service and availability?

These are the moving parts of a public data monetization strategy. It allows any public data resources to be made available on the web, enabling self-service access to data 24/7. However, it does it in a way that requires accountability by ALL consumers, whether they are internal, partner, or the public at large. This API management scaffolding allows for the frictionless access to public data resources by the users and applications that are identified as worthwhile, and imposing limits, and fees for higher volume and commercial levels of access. 

**Speaking To A Wide Audience With This Public Data Monetization Research**  
I purposely wrote this document to speak to as wide as possible audience as possible. In my experience working with public data across numerous different industries, there can be a wide variety of actors involved in the public data stewardship pipeline. My objective is to get more public data accessible via web APIs, and generating revenue to help fund this is one of my biggest concerns. I am not looking to incentivize people in making unwarranted profits on top of public data, this is already going on. My goal is open up the silos of public data out there right now, make them more accessible, while opening up the opportunity for delivering to a variety of applications, while also funding this important process.

I wanted to help anyone reading this to craft a coherent argument for generating much-needed revenue from public data, whether they are trying to convince a government agency, non-profit organization, institution, or a commercial company. Public data needs to be available in a machine-readable way for use in a variety of applications in 2016--something that takes resources and collaboration. APIs are not another vendor solution, they are the next step in the evolution of the web, where we don't just make data available for humans by publishing as HTML--we need the raw data available for use in many different applications.