---
layout: post
title: >-
  I Have An API, Now I Need Some Help to Identify What Is Needed To Manage My
  API Presence
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-manage-operations.png
tags:
  - My
  - Presence
---
It is pretty easy to design, define, and deploy APIs these days, and I get a number of folks who approach me with questions about how to get going with the operations and management side of things. While each company, and API provider, will have different needs, I have a general list of the common building blocks used by the leading API providers I track on across the API sector.

So that I have an up to date URL to share with a couple of my partners in crime, I wanted to organize some of the common building blocks across [my almost 50 areas of API research](http://apievangelist.com), into a single list, that can be considered when anyone is planning on deploying an API. For this guide, I wanted to touch on some of the building blocks you should consider as part of your central API developer portal, documentation, and other elements of the management and operations, what I feel should be a minimum viable presence for successful API providers.

**Taking API Inventory**  
Taking inventory of what web services, and APIs may already exist, be in use, or are available within an organization, providing a master catalog of current resources, that can be put to use, and evolved.

*   **Internal APIs -** What existing APIs are in operation and use by internal groups?
*   **Public APIs -** What public APIs are currently available for use?

**On Boarding**  
What is the process for on-boarding of new users? Walk through what a new user will experience, looking at each step from landing on home page, to having what I need to make my own API call. Reduce as much friction as I can, and making on-boarding as fast as possible.

*   **Portal -** Is the portal publicly available, or just a centrally portal on a private network?
*   **Getting Started -** Does this API have a getting started guide applied to its operations?
*   **Self-Service Registration  -** Is this API available for self-service registration?
*   **Sign Up Email -** Do API consumers receive an email upon signup for an account?
*   **Best Practices -** Does this API have a best practices page applied to its operations?
*   **FAQ -** Does this API have a frequently asked questions (FAQ) page applied to its operations?
*   **Google Authentication -** Is Google Authentication available for platform signup and login?
*   **Github Authentication -** Is Github Authentication available for platform signup and login?
*   **Facebook Authentication -** Is Facebook Authentication available for platform signup and login?

The on-boarding experience has to have a little friction as possible, and feel like what API consumers are already used to when they are putting other leading API platforms to use. Do not re-invent the wheel, or introduce obstacles into the API on-boarding process.

**Documentation  
**What is provided when it comes to documentation for the platform? There are a number of proven building blocks available when it comes to API documentation, providing the technical details of what an API can do.

*   **List of Endpoints -** Is there simple list of endpoints available?
*   **Static Documentation**
    *   Is there documentation for the API?
    *   Is Slate used for API documentation?
*   **Interactive Documentation**
    *   Is there interactive documentation or a console available?
    *   Is [Swagger UI](https://github.com/swagger-api/swagger-ui) used for API documentation?
    *   Is [Lucybot Console](https://github.com/lucybot/lucy-console) used for API documentation?
*   **Error Response Codes -** Are error response codes and detail documented anywhere?
*   **Crowd Sourced Updates -** Does the platform allow the community to edit, and submit changes to documentation using Github, or other mechanism?
*   **Notifications -** Are there notifications that are sent out as part of any change that is made to documentation?

**Language Samples**  
Are there small, simple usable samples in a variety of programming languages, and potentially for a variety of platforms, demonstrating each API call available via a platform. 

*   **PHP -** Is there PHP samples for each endpoint?
*   **Python -** Is there Python samples for each endpoint?
*   **Ruby -** Is there Ruby samples for each endpoint?
*   **Node.js -** Is there Node.js samples for each endpoint?
*   **C Sharp -** Is there C Sharp samples for each endpoint?
*   **Java -** Is there Java samples for each endpoint?
*   **Go -** Is there Go samples for each endpoint?
*   **Scala -** Is there Scala samples for each endpoint?

Generally samples will have minimal authentication elements, and reduce any external dependencies, focusing in on a specific API endpoint call, in a particular programming language. 

**Language SDKs**  
What SDKs are available? These SDKs might be hand crafted, or auto generated, but should be available in a variety of languages, encouraging the jumpstarting of integrations by a wide as possible audience.

*   **PHP -** Is there a PHP SDK for the API?
*   **Python -** Is there a Python SDK for the API?
*   **Ruby -** Is there a Ruby SDK for the API?
*   **Node.js -** Is there a Node.js SDK for the API?
*   **C Sharp -** Is there a C Sharp SDK for the API?
*   **Java -** Is there a Java SDK for the API?
*   **Go -** Is there a Go SDK for the API?
*   **Scala -** Is there a Scala SDK for the API?

It is getting more common for API providers to use an SDK generation service, using the machine readable definitions of APIs as the contract to follow. Even with the overhead of SDK generation, development, and support, they are still widely used to help speed up application and system integration.

**Mobile Solutions**  
There are many overlaps with mobile in the regular SDK portion of this research, but some providers are publishing more resources specifically dedicated to the support of mobile integrations.

*   **Mobile Overview -** Is there a page dedicated to the platforms mobile integration resources?
*   **iOS SDK -** Is there an IOS SDK?
*   **Android SDK -** Is there an Android SDK?

Not all platforms will need to support mobile integrations, but the growing number of APIs being deployed, are deploy to support mobile efforts. There are a number of other considerations, but these three areas represent the minimum viable considerations.

**Code Management**  
What resources are available for managing code across the platform. This are focuses on just the services, tooling, and process associated with code management, not always the code itself.

*   **Code Page -** Is there a page in the portal dedicate to the code available for a platform?
*   **Github -** Is Github used to manage code that is part of API operations?
*   **Application Gallery -** Is there an application gallery available for applications that are built on top of the API?
*   **Open Source -** Are there open source code, and applications available as part of API operations?
*   **Community Supported Libraries -** Does the platform accept and list community supported libraries?

Github should play a central role in the code management of any modern API platform. Much like Twitter, Facebook, and LinkedIn will play important role in your communication and support efforts, Github is key to the management of code resources at all levels of operations.

**Self-Service Support**  
What support services are available 24/7, that developers can take advantage of without requiring the direct assistance of platform operators.

*   **Forum -** Is there a forum available that provides self service support options?
*   **Forum RSS -** Does the forum have an RSS feed?
*   **Stack Overflow -** Is Stack Overflow used as part of the support strategy for the platform?
*   **Knowledge base** - What sort of content directory and knowledge base is available to search and browse?

Self-service support is always present in the successful API platforms. Like the web, APIs are a 24/7 operations, and if developers cannot get direct support 24/7, there should be a wealth of self-service items available.

**Direct Support**  
What support services are available that developers can take advantage of, that involves direct employee attention. Even though APIs should be self-service as makes sense, direct support will always play an important role in setting the tone for the community.

*   **Email -** Is there an email for API consumers to receive direct support?
*   **Contact Form -** Is there an contact form for API consumers to receive direct support?
*   **Phone -** Is there a phone number available for API consumers to receive direct support?
*   **Ticket System -** Is there a ticketing system available for API consumers to receive direct support?
*   **Social -** Is community support also offered via existing social network profiles and channels?
*   **Office Hours -** Are office hours available, and posted for API consumers to take advantage of?
*   **Calendar -** Is there a calendar of events for office hours, and other support related events?
*   **Paid Support Plans -** Are there paid support plan options available for the platform?

APIs are a business, and you have to provide support. Many savvy API consumers will browse the blog, Twitter account, and other support channels looking for the right amount of activity, and assistance present -- if its not there, they'll move on.

**The Road Map**   
How are we planning, and communicating updates to the platform? Providing a map of how things have changed across the platform, from versioning of the API itself, to even documentation, and other aspects of platform operations.

*   **Road Map -** Is there a road map shared with API consumers?
*   **Idea Submission -** Can API consumers and partners submit ideas for inclusion in the road map?

A road map plays a critical role as sort of value or joint where platform provider and platform consumer engage. It pushed the provider to consider ideas from the community, bringing the platform closer in alignment with consumers, and goes long way in building trust with the community.

**Platform Status**  
What is currently happening on an API platform, providing a real time heart beat of the current status of API resources. There are a handful of common elements platforms use to stay in tune with their platform operations, while also sharing with the community.

*   **Status Dashboard -** Is there a status dashboard available to API consumers?
*   **Status RSS -** Does the status dashboard have an RSS feed?
*   **Status History -** Is status history archived, and available for review alongside the current status?

When done right, platform status shared with the community, can send the important signal on a regular basis, that all is well on a platform. Something that will be echoed across the platform, and social web, eventually reaching others who might eventually be new consumers.

**Change Log**  
What has already happened with a platform, providing a single archive of all changes made to the platform, for consumers to review at any time, in an easy to find location.

*   **Change Log -** Is there a change log available for API consumers to review, to better understand what changes have been made?
*   **RSS Feed -** Is there an RSS feed for the platform change log, allowing users to subscribe to changes as they are made?
*   **Notifications -** Notifications about changes to the road map, and status of overall operations that will impact API consumers.
*   **Emails -** Are email notifications sent to API consumers where there is a change in the roadmap or status of API platform?

An active change log is one of the clear signs that a platform is active, and something you can depend on. The record that exists across a platforms road map, status, and change log will help set the tone for an API community. A platform where these elements are missing, or has big gaps in information, or out of sync, are all signs of other wider illnesses that may exist across platform operations.

**Communications**  
What are the communication elements available as part of the overall feedback loop for an API platform. There should be at least a minimum viable communications present, otherwise it is unlikely anyone will learn that a platform exists.

*   **Blog -** Is there a blog for API communications?
*   **Blog RSS Feed -** Does the blog have an RSS feed?
*   **Twitter -** Is there a Twitter account for API communications?
*   **Email -** Is there a email account for API communications?
*   **LinkedIn -** Is there a LinkedIn account for API communications?
*   **Slack -** Is there a Slack channel for API communications?
*   **Email Newsletter -** Is there an email newsletter dedicated to API communications?

Like support, road map, status, and change logs, an active and informative communication strategy will set the tone of an API community, and build trust amongst consumers. Also providing clear signals of when a platform is healthy, or one that should be avoided.

**Resources**  
What other resources are available for API consumers to take advantage of? Common resources provide a wealth of usually self-service knowledge resources that API consumers can consume on demand, as part of their API integration journey.

*   **Case Studies -** Are there case studies available showcasing how APIs can be put to use?
*   **How-to Guides -** Are there how to guides assisting consumers in understanding how to integrate with an API?
*   **Webinars -** Are webinars conducted, introducing consumers to platform operations?
*   **Videos -** Are there videos available to assist consumers in understanding what a platform does, and how to integrate with it?

API consumers will learn in different ways. Not all will need how to guides, and videos, but many users will prefer. Make sure and provide a wealth of up to date, and informative resources.

**Developer Account**  
Consumers of an API platform always need an account where they can get access to API authentication, usage reports, and other common elements of API operations. What does the developer account, or area look like, and what resources are available for developers to take advantage of.

*   **Developer Dashboard -** Is there a dashboard for API consumers?
*   **Account Settings -** Can API consumers manage their account settings?
*   **Reset Password -** Can API consumers reset their passwords to their account?
*   **Application Manager -** Can API consumers manage the applications setup to integrate with API?
*   **Usage Logs & Analytics -** Can API consumers access logs and analytics for their API consumption?
*   **Billing History -** Can API consumers see billing history for their accounts?
*   **Message Center -** Is there a messaging center for API consumers to communicate with the platform, and receive notifications?
*   **Delete Account -** Can API consumers delete their account?
*   **Service Tier Management -** Can API consumers change / update the tier of service their account exists in?

Like mentioned in on-boarding, make sure the developer account acts, and feels like other modern SaaS, and online accounts. Don't make it difficult for API consumers to manage their profile and account on an API platform. There are a wealth of healthy examples of how to do this right, across the API landscape.

**Operations API**  
It may seem silly, but what APIs are available for managing API management related elements? API consumers are increasingly needing programmatic control over all aspects of their API accounts, as the number of API used increases. There are a number of API platforms that provide API management APIs, something that is easy to do with modern API management infrastructure.

*   **User Management -** Is there an API for managing users who have access to any API?
*   **Account Management -** Is there an API for managing account level information?
*   **Application Management -** Is there an API for managing applications that have access to any API?
*   **Service Management  -** Is there an API for accessing service level details for available APIs?

Remember, you may be one of multiple APIs that API consumers are using to drive their web, mobile, and device applications, as well as systems integrations. Allow for the automation of all aspects of their accounts, user details, applications, and service management.

**Internationalization**  
When it comes to API operations, what is needed to reach an international audience? There are number of building blocks emerge that are being used by leading platforms to make sure their properly internationalized for a global audience.

*   **Language -** Are there multiple language versions of the portal available?

APIs are a global resources, and are increasingly being deployed to support multiple regions around the world. Even if internationalization is a down the road concern, take a moment to understand how far down the road it is.

**Authentication**   
Authentication is central to many other lines of the API life cycle. There are several common elements present in modern API solutions that address authentication.

*   **Overview -** Is there an authentication overview available?
*   **Basic Auth -** Does the platform employ basic authentication for accessing API resources?
*   **Key Access -** Does the platform require API keys for accessing API resources?
*   **JSON Web Token -** Does the platform require JSON Web Tokens for accessing API resources?
*   **oAuth -** Does the platform require OAuth for accessing API resources?
*   **Tester -** Is there an authentication tester available?
*   **Scopes -** If OAuth is employed, is there a page dedicated to sharing OAuth scopes.
*   **Two Factor Authentication -** Is two factor authentication available for the platform?

While not the perfect identity and access management stack, there are plenty of proven approaches to handling API authentication. Carefully consider how much authentication is necessary, based upon what resources are made available, and the expectations around API integration. Do not over do authentication when not necessary, but also make sure and don't under invest in this area, as it will bit you in he ass down the road.

**Platform Security**   
The details of security an API platform. Since web APIs often use the same infrastructure as websites and applications, some of the approaches to security can be shared.

*   **Security Practices Page -** Is there a page dedicated to providing an overview, and some times detail of security practices?
*   **Security Contact -** Is a security contact published as part of platform operations?

Share as much detail as possible about what is being done to mitigate threats at all layers of your stack. This should be just as much an admission that you know what you are doing, as it is an important details for API consumers around security. When security details are missing from an API platform's presence, I find it is more because this area wasn't considered, more than anything else. 

**Legal Department  
**The lawyers are driving and guiding almost all value being generated, captured, and done via the growing number of online services depend on.  Any savvy API consumer will be looking to understand the legal requirements that surround integration, so make sure there are a handful of building blocks present. 

*   **Terms of Service -** A terms of service that guides platform operations, and developer integrations.
*   **Privacy Policy -** The privacy policy set for how the privacy of all platform stakeholders will be addressed.
*   **Licensing -** What the licensing considerations are for all data, content, server & client code, as well as APIs.
*   **Branding -** The branding requirements, guides, and other assets to be considered as part of company branding.

The best API providers have a legal department that is more human than lawyer, speaking plain english over legalize. A simple, comprehensive, and understandable legal department is a sign of a healthy platform, with nothing to hide from its consumers.

**Direct Value**  
What are the units of currency the platform uses. What are the individual value units applied to each API, and how are things calculated. Most like this is done in dollars, or euros, but other units are emerging as well.

*   **Value -** What is the direct value associated with an API?
*   **Usage -** What direct value does API usage deliver?
*   **Volume -** How does volume usage of an API deliver value?
*   **Limits -** How is value maintained by imposing limitations?
*   **Users -** How does having more users generate value?
*   **Applications -** How does having more application generate value?
*   **Integrations -** How can more integrations with other systems generate value?

You would be surprise how many existing API platforms I speak with who cannot answer many of these questions. They feel their APIs are valuable, but cannot articulate the value they bring to their consumers in a coherent way. Understanding the direct value an API generates is something that should be discussed as part of every API deployment, and shared with API consumers, and other key stakeholders in a coherent way.

**Indirect Value**  
Beyond the obvious, APIs are generating a lot of value for platform providers, and consumers. What are some of the common ways to look at indirect value generation.

*   **Marketing Vehicle -** How are APIs used as a marketing vehicle for an organization, products or services?
*   **Traffic Generation -** How is an API used for generating traffic to other websites, mobile applications, or devices?
*   **Brand Awareness -** How is an API used for increasing brand awareness of an organizations, and its products or services?
*   **Data & Content Acquisition -** How does the acquisition of data or content via an API generate value?
*   **Syndication -** How does the API generate value through the syndication of data, content, and other digital resources?

There are numerous APIs that restrict any indirect value from occurring through tightening down on other aspects of API operations. It takes a savvy API provider to be in tune with the indirect value generated via an API, and see the big picture of what is possible with an API presence.

**Planning Access**  
These are the key elements of API plans that I have gathered from across hundreds of API providers. These elements can be associated with specific plans that are available, but they do not have to, and I often use them to generally describe the plans, or perceived plans behind API operations. These are the elements you should be considering as part of your own plans. You do not have to use all of them, but hopefully they will help you better understand the possibilities when it comes to API planning.

*   **Overview -** Is there a page dedicated to providing of all the plans available via the API platform?
*   **Private -** Are there private APIs available via the platform?
*   **Internal -** Are APIs available via the platform used internally?
*   **Partner -** Are APIs available via the platform used by partners?
*   **Public -** Are APIs available via the platform availably publicly?
*   **Free -** Are there free API access via the platform?
*   **Commercial -** Is there commercial usage of API resources?
*   **Non-Commercial -** Is there non-commercial usage of API resources?
*   **Educational -** Is there educational access to API resources?

Using HTTP as the transport for your API does not mean it is a public API by default, but there are a number of technical, business, and political elements to be considered when planning the internal, partner, and public access to API resources. Have a plan, share the plan, and use it to guide platform discussions.

**Platform Metrics**  
Beyond the overall access considerations, what are the specific metrics that are being applied to overall API operations, as well as individual plans and access tiers. Depending on the resource, there are a number of metrics being used across the API space, by leading API providers. This layer of the journey is meant to walk through the metrics you will want to consider in your API journey, allowing to cherry pick the ones that are most import to you. Not all metrics apply in all situations, but they are the building blocks of good API plans.

*   **Access -** Is access (or not access) used as a metric in monetization, or can you buy access to some API resources?
*   **Calls -** Are API plans metered by individual API call?
*   **Transaction -** Are API plans measured by overall transactions completed?
*   **Message -** Are API plans measured by number of messages sent?
*   **Compute -** Are API plans metered by the amount of compute resources available?
*   **Storage -** Are API plans metered by the amount of storage used?
*   **Bandwidth -** Are API plans metered by the amount of bandwidth used?

Metrics are often rooted in what the hard costs are with deploying, managing, and operating an API. Once they are well defined, and you get more in tune with platform operations, and what value is being generated, and what operational costs are, you will begin to see things in new ways. Think about what Amazon Web Services has done with APIs, pushing the concept of how we measure the access of valuable digital resources.

**Platform Limitations**  
What are limitations and constraints applied as part of the API planning operations. How are these crafted, applied, and reported upon. All APIs will have limitations. Even with wealth of scalable tooling we available today, there are still a handful of areas where limitations are being applied to keep platforms healthy and stable.

*   **Overview -** Is there a page dedicated to helping understand API limits in place?
*   **Range -** Are API rate limits based upon limits of metrics applied to API resources?
*   **Resources -** Are API rate limits applied to individual API resources?
*   **Unlimited -** Are there places where there are no limits applied?
*   **Increased -** Can rate limits be increased?
*   **Inline -** Are API rate limits available inline for each API in the documentation?

The primary reasons for setting limitations is to keep API resources available to the entire community, helping ensure stability, and keep operational costs within reasonable realms. However, limitations are also used for business, and political goals, going well beyond the common technical restrictions in place.

**Timeframes**  
The consumption of API resources is often measured within timeframes, in addition to the wide number of other metrics that can be applied. Having meaningful timeframes defined for evaluating how APIs are consumed, and using as part of overall planning, when it comes to all aspects, ranging from rate limits to billing.

*   **Seconds -** Are elements of plans metered in seconds?
*   **Minutes -** Are elements of plans metered in minutes?
*   **Hourly -** Are elements of plans metered by the hour?
*   **Daily -** Are elements of plans metered daily?
*   **Monthly -** Are elements of plans metered monthly?
*   **Annually -** Are elements of plans metered annually?

At first these seem like they shouldn't be included in the minimum viable presence for API operations, but in reality, these timeframes are core to everything we do. We limit API calls by the second, minute, and hour, and we often clear limitations each day or monthly, as we bill for usage or just allow the amount of consumption we can afford as platform providers.

**Partner Program**  
The communication around partner levels of access is critical to overall health and balance with other tiers of access. Providing as much detail for partners, but also potentially other levels of access is important. Here are a few of the building blocks employed to help manage partner details.

*   **Landing Page -** Is there a landing page dedicated to the partner program?
*   **Program Details -** Are the program details available via a landing page, as well in a portable, shareable format(s).
*   **Program Requirements -** What are the requirements to be part of the partner program?
*   **Program Levels -** What are all the levels of the partner program, and what are the details?
*   **Application -** Is there a partner program application available for prospects to fill out?
*   **List of Partners -** Will there be a list of partners available for other partners and consumers to view?

**How Are APIs Found?**  
How APIs are being discovered across the current API landscape. How are APIs being found by developers, and application architects at all stages of development.

*   **API Directory -** What API directories are in use?
*   **APIs.json -** Is APIs.json in use to provide meta data indexes for API discovery?

This provides one possible base for the average API operations. Granted, not every element here should be implemented by all APIs, but it does provide a healthy checklist that can be considered as part of any APIs life cycle. I'm sharing this so that my partners may consider as part of their own operations, and to use as a draft for a future white paper, that any company can use as a guide in their own API journey.

My goal in assembling this information is to help shape what the portal, and potentially online API presence might be for an API. I also want to provide a nice checklist that anyone can just run down, making sure any important element was not considered. It is easy to miss things, while you are down in the weeds making an API happen. This is why I'm here, to help keep an eye on the bigger picture, and provide you with what you need to be as successful as you can in your own API efforts. 

I find it very tough to provide just enough information to people, without going into areas of the API life cycle that do not apply. This guide is meant to address what is needed as you prepare to launch a new API, but could also be used by API providers, with existing APIs and portal, but are looking to consider what might be next for a road map. [You can find all of these elements as part of my overall research into the API space](http://apievangelist.com), as well as additional areas, and building blocks that didn't quite fit into this particular perspective.