---
layout: post
title: Gathering My Thoughts About Open Referral And The Human Services API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/ohana-api.png
tags:
  - My
  - Open Referral
  - Human Services
  - Open
  - Services
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/icarol-screenshot.png)](https://openreferral.org/)

I am working on several very rewarding API efforts lately, but one I'm particularly psyched about is [Open Referral](https://openreferral.org/). I'm working with them to help apply the open API format in a handful of implementations, but to also share some insight on what the platform could be in the future. I have been working to carve out the time for about it, and finally managed to do so this week, resulting in what I am hoping will be some rewarding API work.

As i do, I wanted to explore the project, work to understand all the moving parts, as well as what is needed for the future, using my blog. I am not recommending that Open Referral tackle of all this work right now, I am just trying to pull together a framework to think about some of the short, and long terms areas we can invest in together. I intend to continue working with Greg, and the Open Referral team to help spread the awareness of the open API specification, and help build the community.

Open Referral is all about being an open specification, dedicated to helping humans find services, and even more humans to help other humans to find the services they need--I can't think of a more worthy implementation of an API. In my opinion, this is what APIs are all about -- providing open access to information, while also allowing for commercial activity. To help prime the pump, let's take a look at the specification, and think more about where I can help, when it comes to the Open Referral organization and eventually, the Open Referral platform.

**Human Services Data Specification (HSDS)**

"The Human Services Data Specification (HSDS) defines content that provides the minimum set of data for Information and Referral (I&R) applications as well as specialized service directory applications."  Which represents a pretty huge opportunity to help deliver vital information around public services, to those who need them, where they need them, using an open API approach.

Currently there is an existing definition for HSDS available on Github, but I'd like to see the presence of HSDS elevated, showcasing it independently of any single implementation of the API, or the web, and mobile applications that are built on top of it. It is important that new people, who are just learning about HSDS understand that it is a format, and independent of any single instance. Here is a break down of the HSDS presence I'd like to see.

*   **Website** - Establish a simple, dedicated website for just the specification.
*   **Twitter** - Establish a dedicated Twitter account for the specification.
*   **[Github Repo](https://github.com/codeforamerica/OpenReferral)** \- Can repo be moved under Open Referral Github?
    *   **API Definition(s)**
        *   **[OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification)** - Establish a representation for HSDS.
        *   **[API Blueprint](https://apiblueprint.org/)** \- Establish a representation for HSDS.
    *   **Data Definition(S)**
        *   **[JSON Schema](http://json-schema.org/)** - Establish a set of JSON Schema for HSDS
        *   **[MSON](https://github.com/apiaryio/mson)** - Establish a set of MSON definitions for HSDS
*   **Partners** - Link to the Open Referral partner network.
*   **Road Map** \- What is the road map for the specification?
*   **Change Log** \- What is the change log for the specification?
*   **Licensed** - [CC0 License](https://creativecommons.org/publicdomain/zero/1.0/)

I want to help make sure HSDS is highly available as an OpenAPI Specification, as well as the API Blueprint format. Both of these formats will enable anyone looking to put HSDS to work, to use the definition as a central reference for their API implementation, that can drive API documentation, code samples, testing, and much more.

I do not know about you, but having an open standard for finding and managing open data about human services, that can be used across cities, regions, and countries, seems like a pretty vital API design pattern--one that could make a significant impact in people's lives. When you are talking about helping folks find food and health services, making sure the disparate systems all speak the language matters, and could be the difference between life and death, or at least just make your life suck a little less.

While Open Referral, and HSDS was born out of Code For America, there is an organization in place, to use as a base for evolving the format, and building a community of implementations around the important specification. I wanted to take some time and organize some of the existing moving parts of the Open Referral organization, while also exporting what elements that I feel be needed to help evolve it into a platform. 

**The Open Referral Organization**  
As I mentioned, there is an organization already setup to guide the effort, "the Open Referral initiative is developing common formats and open platforms for the sharing of community resource directory data — i.e., information about the health, human and social services that are available to people in need." -- You can count me in, helping with that. Right up my alley.

Right now Open Referral is a nice website, with some valuable information about where things are today. The "common formats" portion of that vision is in place, but how do help scale Open Referral toward being an open platform, while also enabling others to also deploy their own open platform, in support of their own human services project(s). Some of these projects will be open civic projects by government and non-governmental agencies, while some will be commercial efforts -- both approaches are acceptable when it comes to Open Referral, and HSDS.

Let's explore what is currently available for the Open Referral organization, and what is needed to help evolve it towards being a platform enabler. Here is what I have outlined so far:

**Organizational  
**There is already a basic web presence for the organization, it just needs a little help to look as modern as it possibly can, and assume the lead role in getting folks aware, and involved with Open Referral and HSDS as possible.

*   [Website](https://openreferral.org/) - Having a simple, modern web presence for the Open Referral organization.

OpenReferral.org is the tip of the platform, but if we want to increase the reach of the organization, and take the conversation to where people already exist, we'll need to think more multi-channel when it comes to the organizational presence.

**Communications  
**There is already a great presence in place, an active blog, Twitter, and Google Group. Based upon the approach of other open formats, and software efforts, there are a number of other platforms we should be looking to spread the Open Referral presence to.

*   [Twitter](https://twitter.com/Open_Referral) - Managing an active, human presence on Twitter.
*   LinkedIn - Managing an active, human presence on LinkedIn.
*   Facebook - Managing an active, human presence on Facebook.
*   [Blog](https://openreferral.org/category/blog/)\- Having an active, informative, blog available.
*   [Blog RSS](https://openreferral.org/feed/) - Providing a machine readable feed from blog.
*   Medium - Publishing regularly to Medium as well as blog.
*   [Google Group](http://groups.google.com/forum/#!forum/openreferral) - Maintaining community and discussion on Google Groups.
*   Newsletter - Provide a dedicated partner newsletter.

So far we are just talking about marketing, and social media basics for any organization. We will need to make sure the overall organizational presence for Open Referral dovetails seamlessly with the more technical side of things, establishing a very non-developer friendly, yet still a little more technical, developer, and IT focused audience.

**Open Referral Developer Portal  
**I suggest following the lead of other successful open standard, and software efforts, and establish a dedicated portal for the platform at [http://developer.openreferral.org](http://developer.openreferral.org). This central portal will not provide access to a working implementation of the API, but focus instead on the community resources it will take to help ensure the widespread adoption of HSDS.

Right now, there is only the Ohana API, and supporting client tools that have been developer by Code for America. This is a great start, but Open Referral needs to evolve, making sure there are a wealth of language and platform formats available for supporting any implementation. I went to town thinking through what is possible with the Open Referral developer portal, based upon other open API, specification, and software platforms I have studied. Not everything here is required to get started, with a minimum viable developer portal, but provides some food for thought around what could be.

*   **Landing Page -** A simple, distilled representation of everything available.
*   **HSDS Specification** \- Link to separate site dedicated to the specification.
*   **Code**
    *   **[Github](https://github.com/openreferral)** - The organizational organization as umbrella for presence.
    *   **Server Implementations** (PHP, Python, [Ruby](https://github.com/codeforamerica/ohana-api), Node, C#, Java)
    *   **Server Images** (Amazon, Docker, [Heroku](https://github.com/codeforamerica/ohana-api/wiki/How-to-deploy-the-Ohana-API-to-your-Heroku-account) Deploy)
    *   **Database Implementations** (MySQL, PostgreSQL, MongoDB)
    *   **Client Samples** (PHP, Python, [Ruby](https://github.com/codeforamerica/ohanakapa-ruby), Node, C#, Java)
    *   **Client SDKs** (PHP, Python, Ruby, Node, C#, Java)
    *   **White Label Apps**
        *   Admin (PHP, Python, [Ruby](https://github.com/codeforamerica/ohana-api), Node, C#, Java)
        *   Search (PHP, Python, [Ruby](https://github.com/codeforamerica/ohana-web-search), Node, C#, Java)
        *   Other ???
    *   **Platform Development Kits**
        *   WordPress (PHP)
    *   **Tooling**
        *   Spreadsheet Connector(s) (Google, Excel)
        *   Database Connector(s) (MySQL, SQL Server, PostgreSQL)
    *   **Embeddable**
        *   Widgets (ie. Search, Featured)
        *   Buttons (ie. Bookmarklet, Share)
        *   Visualizations (ie. Graphs, Charts)
*   **Support**
    *   **Email** - The email channels in which the organization provides.
    *   **Github Issues -** Setup for platform, and aggregate across code projects.
    *   **Google Group -** Setup specific threads dedicated to the developers.
*   **Legal -** The legal department for the Open Referral organization and platform.
    
    *   **Terms of Service** \- What are the terms of service set by the Open Referral organization.
    *   **Privacy Policy -** What is the privacy policy set by the Open Referral organization.
    
    *   **Licensing (Data, Code, Content) -** What licensing is applied to content, data, and code resources.
    *   **Branding** - What are the branding guidelines and assetts available for the Open Referral platform.

The Open Referral developer portal really is just a project website which organizes links, and meta information about any valuable code that is developed, that uses HSDS as its core. The ultimate goal is to provide a rich marketplace of server, client-side, platform, and language resources that can be applied anywhere. Some of it will be officially platform support, while other will be partner and Open Referral community supported. The central portal is purely to help organize all the valuable resources that are generated from the community, and easy to find by the community.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/ohana-api.png)](/admin/blog/)

**Open Referral Demo Portal  
**I'd like to see a dedicated demo portal for the platform available at [http://demo.openreferral.org](http://developer.openreferral.org), which can be forked and launched as a new project if necessary. Maybe there can be multiple demo portals available, meant for different languages and platforms? I'd like to see a forkable, HTML, CSS, and JavaScript version available, that can be used as a base, with some of the more dynamic aspects done in specific languages, or via specific platforms.

I have assembled this outline, based upon the portal presence of leading API platforms like Twitter, Twilio, and Stripe. As with every other area, not all these elements will be in the first iteration of the Open Referral demo portal, but we should consider what the essentials should be in a minimum viable definition for an Open Referral demo portal. 

*   **Landing Page -** A simple, distilled down version of portal into a single page.
*   **Getting Started**
    *   **Overview** - What is the least possible information we need to get going.
    *   **Registration / Login** \- Where do we signup or login for access.
    *   **Signup Email** - Providing a simple email when signing up for access.
    *   **FAQ** - What are the most commonly asked questions, easily available.
*   **Authentication**
    *   **Overview** - Provide an overview of how to authenticate.
    *   **Keys** - What is involved in adding an app, and getting keys.
    *   **OAuth Overview** \- Provide an overview of OAuth implementation.
    *   **OAuth Tools** \- Tools for testing, and generating OAuth tokens.
    *   **CORS** - Is CORS enabled, allowing for cross-site JavaScript.
*   **Documentation**
    *   **Interactive (Swagger UI) -** Providing interactive documentation using Swagger UI.
    *   **Static (Slate) -** Providing more static, attractive version of documentation in Slate.
    *   **Schemas (JSON) -** Defining all underlying data models, and providing as JSON Schema.
    *   **Pagination -** Overview of how pagination is handled across API calls.
    *   **Error Codes -** A short, concise list of available error codes for API responses.
*   **Code**
    *   **Samples**  (PHP, Python, Ruby, Node, C#, Java) - Simple code samples in variety of languages.
    *   SDKs  (PHP, Python, Ruby, Node, C#, Java) - More complete SDKs, with authentication in variety of languages.
*   **Embeddable**
    *   **Widgets (ie. Search, Featured) -** Simple, embeddable widgets that make public or authenticated API calls.
    *   **Buttons (ie. Bookmarklet, Share) -** Simple browser, web, or mobile buttons for interacting with APIs.
    *   **Visualizations (ie. Graphs, Charts) -** Provide a base set of D3.js or other visualizations for engaging with platform.
*   **Webhooks**
    *   **Outbound -** Allow for outbound webhook destinations and payload be defined.
    *   **Inbound** - Allow for inbound webhook receipt and payload be defined. 
    *   **Analytics** - Offer analytics for outbound, and inbound webhook activity.
    *   **Alerts** -  Provide alerts for when webhooks are triggered.
    *   **Logging** - Offer access to log files generated as part of webhook activity.
*   **Plans**
    *   **Limits** - What are the limits involved with accessing the APIs.
    *   **Pricing** - At what point does API access become commercial. 
*   **Updates**
    *   **Road Map -** Providing a simple road map of future changes coming for the platform.
    *   **Issues** - A list of current issues that are known, and being addressed as part of operations.
    *   **Change Log** - Providing a simple accounting of the changes that have occurred via the platform.
    *   **Status** - A real time status dashboard, with RSS feed, as well as historical data when possible.
*   **Support**
    *   **Github Issues -** Provide platform support using Github issues, allowing for public support.
    *   **Email -** Provide an email account dedicated to supporting the platform.
    *   **Phone**\- Provide an phone number (if available) for support purposes.
    *   **Ticket System** \- Providing a more formal ticketing system like ZenDesk for handling support.
*   **Communications**
    *   **Blog w/ RSS** \- Providing a basic blog for sharing stories around the platform operations.
    *   **Slack** - Offering a slack channel dedicated to the platform operations.
*   **Developer Account**
    *   **Dashboard** - An overview dashboard providing a snapshot of platform usage for consumers.
    *   **Account Settings -** The ability to manage settings and configuration for platform.
    *   **Application / Keys -** A system for adding, updating, and remove application and keys for API.
    *   **Usage / Analytics -** Simple visualizations that help consumers understand their platform usage.
    *   **Messaging -** A basic, private messaging system for use between API provider and consumer(s).
    *   **Forgot Password -** Offering the ability to recover and reset account password.
    *   **Delete Account -** Allow API consumers to delete their API accounts. 
*   **Legal**
    *   **Terms of Service -** A general, open source terms of service that can be applied.
    *   **Privacy Policy -** A general, open source privacy policy that can be applied.
    *   **Licensing (Data, Code, Content) -** Licensing for the data, code, and content available via the platform.
*   **Discovery**
    *   **APIs.json -** Providing a machine readable API.json index for the API implementation.
    *   **APIs.io -** Registering of the API with the APIs.io search engine via their API.

This base portal design will act as a demo implementation, with an actual functional API operating behind it. It could also be potentially forked, and used in other Open Referral API implementations, as a forkable base, that can be customized, and built on for each individual deployment. Github, using Github Pages, along with Jekyll pages allows for the easy design, development, and then forkability of an open portal blueprint. I'd like to see all the project sites that support the Open Referral effort operate in this similar fashion, which isn't unique to Github, and can run on Amazon S3, Dropbox, and almost any other hosting environment.

**Partner Program  
**One of the strengths of the Open Referral organization, and is essential to evolve into a platform is the availability of a formal partner program to help manage a variety of different partners who will be contributing in different ways. I suggest operating a site dedicated to the Open Referral partner program, located at the sub domain [http://partner.openreferral.org](http://partner.openreferral.org). This provides a clear location to visit to see who is helping building out the Open Referral platform, and get involved when it makes sense.

*   **Overview** - An overview of the Open Referral partner program.
*   **Showcase**
    *   **Gallery of Partners -** Who are the Open Referral Partners.
    *   **Gallery of Applications -** What are the Open Referral implementations.
    *   **Partner Stories -** What are the stories being the partner implementations.
*   **Types** - The types of partners involved with platform.
    *   **Application** - The partners who are just deploying single web, or mobile applications.
    *   **Integration** - The partners who are just deploying single API, portals.
    *   **Platform** - The partners who are implementing many server, and app integration.
    *   **Investor** - Someone who is investing in Open Referral and / or specific implementations.
*   **Registration / Form** - A registration form for partners to submit and join the program.
*   **Marketing Activities**
    *   **Blog Posts -** Provide blog posts for partners to take advantage of one time or recurring.
    *   **Press Release -** Provide press releases for new partners, and possibly recurring for other milestones.
*   **Support**
    *   **Discounts** - Provide discounts on direct support for partners.
    *   **Office Hours** \- Provide virtual open office hours just for partners.
    *   **Training** - Offer direct training opportunities that is designed just for partners.
    *   **Advisors** - Provide special advisors that are there to support partners.
*   **Content**
    *   **Quotes** - Allow partners to provide quotes that can be published to relevant properties.
    *   **Testimonials** - Have partners provide testimonials that get published to relevant sites.
    *   **Use of Logo** - Allow partners to use the platform logo, or special partner platform logo.
*   **Communication**
    *   **Blog** - Have a blog that is dedicated to providing information for the partner program.
    *   **Spotlight** - Have a special section to spotlight on partners.
    *   **Newsletter** - Provide a dedicated partner newsletter.

Formalizing the partner program for Open Referral will help in organizing for operation, but also provide a public face to the program, lending credibility to the platform, as well as to its trusted partners. Not all partnerships need to be publicized, but it will lend some potential exposure to those that want. Not every detail of Open Referral partnerships needs to be present, but operating in the open, being as transparent as possible will help build trust in a potentinally competitive environment.

There will be some HSDS API implementations, as well as potentially web or mobile applications that are developed by Open Referral, with some developed and operated by partners. Whenever possible, being transparent about this will help build trust, and reduce speculation around the organizational mission. Formalizing the approach to platform partnerships, that help set a positive tone for the community, and go from just site, to community, to a true platform.

**Service Needs  
**I wanted to explore some of the services that will be needed in support of the Open Referral format specification, open source software development, as well as specific implementations. Not all of these services will be executed by Open Referral, with partners being leveraged at every turn, but it will also be important for Open Referral to develop internally capacity to support all areas, and as many types of implementations as possible. This internal capacity will be necessary to help move the specification forward in a meaningful way.

Here are some of the main areas I identified that would be be needed to help support core API implementations, as well as some of the web and mobile applications implementations that will use HSDS.

*   **Server Side**
    *   **Deployment** - The deployment of existing or custom server implementations.
    *   **Hosting** - Hosting and maintenance of server implementations for customers.
    *   **Operation** - The overseeing of day to day operations for any single implementation.
*   **Data Services**
    *   **Acquisition** - The coordination, access, and overall acquisition of data from existing systems.
    *   **Normalization** - The process of normalization of data as part of other data service.
    *   **Deployment** - The deployment of a database in support of implementation.
    *   **Hosting** - The hosting of database, APIs, and applications in the support of implementations.
    *   **Backup** - The backing up of data, and API, or application as part of operations.
    *   **Migration** - The migration of an existing implementation to another location.
*   **Application**
    *   **Development** - The development of an application that uses an Open Referral API implementation.
    *   **Hosting** - The hosting of a web or mobile application that uses an Open Referral API implementation.
    *   **Management** - The management of an existing web or mobile application that uses an Open Referral API implementation.
    *   **UI / UX -** There will be the need to create graphics, user interface, and drive usability of end-user applications.
*   **Developer Portal**
    *   **Deployment** - The demo portal can be used as base, and template for portal deployment services.
    *   **Management** - Handling the day to day operations of a developer portal.
*   **DNS**
    *   **Registration** - Registering for the domains used as part of implementations.
    *   **Management** - Running the day to day management of DNS for implementations.
*   **Monitoring**
    *   **App Monitoring** - The monitoring of apps that are deployed.
    *   **API Monitoring** \- The monitoring of APIs that are deployed.
*   **Security**
    *   **API** \- Initial, and regular evaluation of the security of the API.
    *   **Application** \- Initial, and regular evaluation of the security of applications.

In some of these areas I want to offer API Evangelist assistance as a partner, while in others I will be looking for partners to step up. I will also be looking at what cloud services, or open source software can assist in augmenting needs in these service areas. These are all areas that Open Referral will not be able to ignore, with many projects needing a variety of assistance in any number of these areas. Ideally Open Referral develops enough internal capacity to play a role in as many implementations as possible, even if it is just part of the platform storytelling, or support process.

**Service Providers  
**What service providers will be used as part of operations? Throughout this project exploration I've mentioned the usage of Github, a potentially free, and paid solution to multiple service areas. I've listed some of the other common service providers I recommend as part of my API research, and would be using to help deliver some of my contributions to the platform, and specific projects.

*   **Github** - Github is used for managing code, content, and project sites.
*   **Amazon** - AWS is used as part of database, hosting, and storage.
*   **CloudFlare** - Used for DNS services, and DNS level security.
*   **Postman** - Applied as part of on boarding, testing, and integrating with APIs.
*   **3Scale** - A service that can be used as part of the API management.
*   **API Science** \- A service that can be used as part of API monitoring.
*   **APIMATIC** - A service that can be used to generate SDKs.

For a well balanced approach I recommend that Open Referral strike a balance in the number of services it uses to operate the platform, and what it suggests for partners, and specific implementations. If possible, it would be nice to have one or more cloud services identified, as well as some potentially open source tooling that might be able to help deliver in the specific area. 

**Open Source Tooling  
**What tools will be used as part of operations? Complementing the services showcased above, let's explore some of the open source tooling that will be used as part of Open Referral platform operations. This should be a growing list, hopefully outweighing the number of cloud services listed above, providing low cost options to tackle much of what is needed to stand up, and operate an Open Referral, HSDS driven solution.

*   **Swagger UI** - An open source, interactive JavaScript UI for OpenAPI Spec.
*   **Slate** - A static, presentation friendly version of API documentation.
*   **Jekyll** - An open source content management systems used for project sites.
*   **D3.js** - An open visualization toolkit, to build interactive solutions using JavaScript.

I have only gotten started here. There are no doubt other open tools already in use, as well as some we should be targeting. What are these, what will they be used for, and do their licensing and support reflect the Open Referral mission. Each of these solutions should be forked, and maintained alongside other organizational developed or managed software.

**Open Definitions  
**HSDS is an open definition, built on the back of, and supporting other existing open definition formats. Let's showcase this heart of what Open Referral, and HSDS is, by providing an update to date list of all open definition formats, and standards in use.

*   **OpenAPI Spec -** An open source, JSON API definition format for describing web APIs.
*   **APIBlueprint -** An open source, Markdown API definition format for describing web APIs.
*   **MSON** - An open source, markdown data schema format.
*   **JSON Schema  -** An open source, JSON data schema format.
*   The Alliance of Information and Referral Systems [XSD](http://www.airs.org/i4a/pages/index.cfm?pageid=3363) and [211 Taxonomy](http://www.airs.org/i4a/pages/index.cfm?pageid=3386)
*   **Schema.org** - Civic Services Schema ([at the W3C](http://www.w3.org/wiki/WebSchemas/CivicServices))
*   The National Information Exchange Model - via [the National Human Services Information Architecture](http://www.acf.hhs.gov/initiatives-priorities/interoperability) - logic model [here](http://https//raw.github.com/hserv/open-human-services/master/doc/NHSIA_conceptual_data_model.jpeg).

Open source software, and open definitions are the core of Open Referral. The goal is to provide open formats, APIs, data, and tools that can be easily replicated by cash strapped municipalities, government agencies, and other organizations. However software development, and operation takes money, and resources, so there will be a monetization aspect to Open Referral, which will need to be explored, and planned for.

**Platform Monetization  
**I wanted to take what I've learned in the API sector, and put towards the evolution of a monetization framework that can applied across the Open Referral platform, down to the individual project level. Most monetization planning will be at the project level, with some of these considerations when it comes to thinking of generating revenue.

*   **Acquisition** - What does it cost to get everything together for a project from first email, right before development starts.
*   **Development** - What person hours, and other costs associated with development of a project.
*   **Operations** - What goes into the operation of APIs, portals, and other applications developed as part of integration.
*   **Direct Value**
    *   **Services** - What revenue is generated as part of services.
    *   **Grants** - What grants have been received, and being applied to projects.
    *   **Investment** - What investments have been made for platform projects.
*   **Indirect Value**
    *   **Branding** - What branding opportunities are opened up as part of operations.
    *   **Partners** - What partnerships have been established as part of operations.
    *   **Traffic** - What traffic to the website, project sites, and other properties.
*   **Reporting**
    *   **Internal** - What internal reporting is needed as part of platform monetization?
    *   **Public** - What reporting is needed to fulfill public needs?
    *   **Partners** - What partner reporting is needed as part of the program.
    *   **Investment** - What reporting is needed for investors?
    *   **Grants** - What grant reporting is required for grants.

Most of these areas will be applied to each project, but no doubt will need to be rolled up and reported, and understand across projects, as well as by other areas listed above. Open Referral will not be a profit driven platform, but will be looking to revenue generation to not just develop the open specification further, but also push for the development of open tooling, and other resources.

Monetization strategies applied to Open Referral will heavily drive the plans for API access that are applied to each individual implementation. While not everything will be standard across HSDS supporting implementations, there should be a base set of plans for how partners can operate, and generate their own revenue to support operations.

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/open-referral/pricing-mapbox.png)

**Platform API Plans  
**What are the details of API engagement plans offered as part of operations? I wanted to explore the many ways that leading API platforms open up access to their resources, and hand pick the ones that made sense for a minimum set of plans that could be inherited by default, within each implementation. Of course, each potential implementation might be different, but these are some of the essential platform plan considerations.

*   **Elements**
    *   **Public** - What are the details of public access.
    *   **Commercial**\- At what point does access become commercial.
    *   **Sponsor** - How much access is sponsored by partners?
    *   **Partner** - Which plans are only available to partners?
    *   **Education** - Are there educational and research access?
*   **Time Frames**
    *   **Seconds** - Resources are restricted by the second.
    *   **Daily** - Resources are restricted by the 24 hour period.
    *   **Monthly** - Resource access is reported on my monthly timeframe.
*   **Metrics**
    *   **Calls** - Individual API calls are measured.
    *   **Support** - Support time is measured.
    *   **Writes** - The ability to write data to platform is measured.
*   **Geo**
    *   **Country** - In country deployment opportunities are available.
    *   **On-Premise** \- On-premise options are available for deployment.
    *   **Regions** - The deployment in predefined regions are available.
*   **Limits**
    
    *   **Range** - API access limitations are available in multiple ranges.
    
    *   **Minutes** - Support access is limited in hours
    *   **Hours** - Support access is limited in hours.
*   **Resources**
    *   **Endpoints** - There are access limitations applied to specific API paths.
    *   **Verbs** - There are access limitations applied to the method / verb level.

While it is ideal that HSDS implementations provide public access to the vital resources being made available, it is not a requirement, and some implementations might severely lock down the public access elements of the platform. Regardless, all of the items listed should be considered, when one to five separate API access plans. The plans should cover hard infrastructure costs like compute, storage, and bandwidth, while also providing other commercialization opportunities that support revenue generation as well.

**Resources  
**These are mostly the resources that currently exist on the public website, but I wanted to also make sure and provide other details about the organization, the team behind the efforts.   These are a few other resources that shouldn't be forgotten.

*   **[FAQ](https://openreferral.org/faq/)** - Providing an organized list of the frequently asked questions for the platform.
*   **[History](https://openreferral.org/about/history/)** - Provide the history necessary to understand the background of the project.
*   **[Strategic](https://openreferral.org/about/strategic-overview/)** - What are the strategic objectives of the organization and specification.
*   **[Technical](https://openreferral.org/about/technology-overview/)**  - What are the technical details of the organization and specification.
*   **About**
    *   **Organization** - Description of the organization.
    *   **Team** - Description of the team involved.
    *   **Specification** - Description of the HSDS.

I can keep adding to this list, but I think this represents a pretty significant v2 presence for Open Referral, as well as the Human Services Data Specification (HSDS) format. This isn't just a suggested proposal. I needed to think about what was needed, and what is next to help support projects on table, and proposals that in the works for specific implementations. I couldn't think about any single project without exploring the big picture. 

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/icarol-screenshot.png)](http://ohanapi.org/)

Now I'm going to share this with Greg Bloom, the passionate champion behind Open Referral, and HSDS. I just needed to make sure everything was in my head, in support of our discussion in person tomorrow. We'll be looking to move the needle forward on this vision, in conjunction with the implementations on the table. Exploring the big picture on my blog, is how I put my experience on the table, working through all of its moving parts, and make sure I've covered all the ground I need to discuss.

**What Does The Road Map Look Like?**  
Greg and crew are in charge of the road map. I just need to get more intimate with the specification. I have already created a v1 draft, scraped from the Slate documentation for the existing Ohana API implementation, using OpenAPISpec. I have the PDF documentation for an Open Referral partner to convert to a machine readable OpenAPI Spec as well. The process will help me further build awareness around the specification itself. This post has helped me see the 100K view, crafting the OpenAPI Spec will help me dive deep down into the weeds of how to deliver a human services API using the HSDS standard.

Since PHP is my primary language, I'll get to work on a PHP / Slim Framework implementation of HSDS, providing a working prototype. I'll use the Ohana API generated OpenAPI Spec as my guide for the server side API code, the documentation, as well as some client code in both PHP and JavaScript. I'll push forward with some of the aspects of the demo portal implementation above, as well as completing some of the PHP code needed for server, and client side in the process. After all of this, I should have a pretty solid view of the details of what is possible with a human services API.

**A Model For Human Services API And Hopefully Other Public API Services**  
I'm pretty stoked with the potential for working on Open Referral, and honored Greg has invited me to participate. This is just a first draft, tailored for what I would like to see considered for Open Referral / HSDS API, and for a couple of immediate implementations. However the model is something I will keep evolving alongside this project, as well as a more generic blueprint for how public service APIs could possibly be implemented.

There are several other API implementations that have come across my desk, which I've felt a model like this should be applied. I was thinking about applying this to the [FAFSA API](http://ed-data.github.io/developer/index.html), to help develop a student aid API community. I also thought it could be applied around the deployment of the [RIDB API](http://apievangelist.com/2015/01/21/the-next-steps-for-the-the-recreation-information-database-ridb-api/), in support of our national park system. In both of these environments a centralized, common, open API definition, with supporting schema and dictionaries, and a healthy selection of of open source server, and client side web or mobile app implementations, would have gone a long ways.

Anyways, I have what I need in my head so that I can talk with Greg, and coherently discuss what could be next.