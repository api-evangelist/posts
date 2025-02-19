---
published: true
layout: post
title: Profiling The bunq Banking API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/pull_image_09_26_2019_07_20_pm.png
author:
  name: kinlane
tags:
  - Profiles
  - Banking
  - Financial
---
[The banking API bunq](https://www.bunq.com/) purchased one of [my API profile packages](https://gumroad.com/l/cjANw), so I spent some time this week going through what they offer. Every API provider who purchases one of my profiling packages will utlimately get a post here on the blog, outlining what I found. It is no guarantee of a positive story, but it is the only way an API provider can technically pay to have a story published to API Evangelist. This is the narrative from what I found as I worked my way through what bunq offers, using [my formal approach to profiling APIs](https://discovery.apievangelist.com/2019/10/14/the-api-evangelist-api-profiling-process/).

I always enjoy finding a simple description of what an API does, and bunq doesn't disappoint with, _"Use bunq’s RESTful open banking API to build fintech apps you can't build anywhere else and reshape your banking experience the way you want it."_ Providing me with what I need to know in 5 seconds or less, setting the tone for our relationship, and planting a seed in my mind regarding what bunq is all about. bunq's business objective is pretty clear. I don't have to hunt around, and my profiling of the Fintech platform is already off to a good start.

### Overview Details

The bunq profiling begins with three key links, that put you on the home page for bunq, introduce you to what they are all about with their about page, or land you directly in their developer portal, letting you quickly get up to speed on what is possible when you integrate bunq into an application.

*   [Website](https://www.bunq.com/) - The website for bunq.
*   [About](https://www.bunq.com/about-us) - The about page for bunq.
*   [Developers](https://www.bunq.com/api/developer) - The developer portal for bunq.

You quickly get an idea for what bunq does across these three pages. It allowed me to immediately get up to speed on what they do, and understand the scope of investment they've made in their platform. Employing the three most common building blocks to help on-board new API consumers to their banking platform.

### Company Tag Cloud

As I profiled bunq I worked to apply a set of meaningful tags to the profile, which I use to organize and make the API available as part of my research. These tags are applied by me as I work my way through the website, providing some useful dimensions for considering where bunq fits in with the overall API economy--here are the tags I applied to bunq, helping illustrate what it is that they deliver.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/bunq_company_tag_cloud.png)

These help me define the entity behind each API. It is a taxonomy that will evolve over time as my taxonomy continues to expand and contract to accomodate the landscape I'm seeing. They provide a rich set of tags we can use to understand the value the bunq platform provides, allowing us to pick and choose which dimeinsion is the most meaningful to what we are looking to accomplish as an API consumer.

### Documentation

Next I went through bunq's API documentation looking for some of the common building blocks that should exist for all API providers. bunq nails it in the area of documentation, providing mature, API definition-driven documentation that is up to date. Covering a rich set of well designed APIs that are consistent and easy to use.

*   [Documentation](https://doc.bunq.com/#/introduction) - Documentation for the bunq API.
*   [Error Codes](https://doc.bunq.com/#/error) - Error codes for the bunq API.
*   [Headers](https://doc.bunq.com/#/headers) - Headers for the bunq API.
*   [Postman Documentation](https://documenter.postman.com/view/8012148/S1a8zkS4?version=latest) - The Postman documentation for the bunq API.

If I had to critique their approach in some way I would add that the bunq documentation could use another round of clean up and organization. It uses Swagger UI which while still relevant, but it is a little dated and doesn't provide the seamless experience across all areas of the documentation--the general information abut the API, and the interactive details for each endpoint seem a little at odds with one another.

### API Tag Cloud

The tag cloud for the company paints an important picture of what bunq does, but I always find that the actual design of the API tends to add another critical layer to what is possible. Getting down to the technical details of what bunq can do, providing us with another rich set of tags that are directly associated with what each individual API path can deliver.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/bunq_api_tag_cloud.png)I find the API design to be a more honest view of what is happening than the general marketing. It isn't always as coherent as the marketing materials, but it provides a nice snapshot of what is truly possible at the ground level. I think that bunq has a pretty sophisticated and rich set of API resources, representing a pretty relevant slice of the Fintech landscape.

### Access

bunq's access reflects what all modern APIs should do. They give you a 30 day free trial, and allow you to quickly sign up and get access to the API. Being transparent about the business of their API, and providing a very simple and elegant self-service registration workflow to on-board with their API.

*   [Self-Service Registration](https://www.bunq.com/signup) - The self-service registration location for the bunq API.

The business model for bunq is pretty straightforward. I have to admit though, I did get stuck on the sign-process entering in my six digit code, it just kept telling me my code was incorrect. However, with the amount of resources bunq provides it didn't stop me from conducting my profiling of their API--I'll get into my account and round off this research later.

### Authentication

It is easy to find information about authentication for the bunq API, with a simple overview of how developers can authentication for the banking API platform, including the details of how to put OAuth to work. Authentication is the top friction point for developers who are on-boarding with an API and bunq does a good job of walking you through what is needed.

*   [Authentication](https://doc.bunq.com/#/authentication) - The authentication information for the bunq API.
*   [OAuth](https://doc.bunq.com/#/oauth) - The oAuth information for the bunq API.

bunq's OAuth is pretty straightforward, providing the expected security for a banking API, while giving developers what they need to authenticate then authorize users of their applicaitons. They do a good job of distilling the information down and giving you what you need to authenticate with the platform without overwhelming you with too much information like many API provides are guilty of.

### Definitions

bunq nails it when it comes to API definitions for their banking API. They have both OpenAPI and Postman collections for their platform. Making it dead simple to get up and running using their Swagger UI documentation, or within the Postman platform--providing us with a blueprint for how all API providers should be defining the APIs they are making available.

*   [OpenAPI](https://kinlane-productions2.s3.amazonaws.com/api-definitions/openapi/30773-2019-10-25-18-26-13.json) - An OpenAPI for the bunq API.
*   [Postman Collection](https://www.postman.com/collections/8012148-2a401c1b-b64c-41d7-b0ba-e3f26c0a6a7a-S1a8zkS4) - A Postman Collection for the bunq API.
*   [Postman on GitHub](https://github.com/bunq/postman) - The Postman collection managed on GitHub for the bunq API.

I want to highlight here that bunq manages their Postman collection on Github. Making it something that they can manage alongside their other code and artifacts, but done in a way that allows anyone to also fork and put to use in their own API workflows. This is a healthy pattern I actively encourage other API proviers to follow, and would recocmend that bunq also does this for their OpenAPI definitions as well, keeping all definitions open and accessible, while also managed using version control.

### Code

When it comes to the code-assist, I'd say bunq could invest more in some additional language libraries and SDKs. They provide four separate language resources when it comes to supporting consumers. With the quality of the API definition, it wouldn't take much to produce additional languages going beyond the three current GitHub repositories available.

*   [PHP](https://github.com/bunq/sdk_php) - PHP resources for the bunq API.
*   [Python](https://github.com/bunq/sdk_python) - Python resources for the bunq API.
*   [Java](https://github.com/bunq/sdk_java) - Java resources for the bunq API.
*   [**cSharp**](https://github.com/bunq/sdk_csharp) - cSharp resources for the bunq API.

[You can find code snippets available for the bunq Postman documentation available in 7 different languages](https://documenter.postman.com/view/8012148/S1a8zkS4?version=latest), but I'd say that more investment in the area of code-enablement for developers would have a significant impact on on-boarding bunq developers. I'd also consider investing in more mobile development kits (MDK), and platform development kits (PDK), going beyond just language specific resources.

### Applications

bunq has a very nice application marketplace for developers to submit their application, making it really easy to get exposure for you build on to of the banking APIs. bunq has two critical building blocks for showcasing what gets built on top of their platform, engaging with the community to build a banking application marketplace.

*   [Applications](http://apps.bunq.com/) - Applications for the bunq API.
*   [Add Applications](https://apps.bunq.com/apps/submit#app) - Add application for the bunq API.

The application marketplace for bunq is simple and well done. It reflects the baseline application showcase / marketplace that all API providers should invest in. Providing a necessary outlet for their developers when it comes helping them reach a wider audience, while also showcasing to newer developers what is possible with the bunq API.

### Orchestration

When it comes to API orchestration, and allowing developers to move data around in real-time, and respond to different events, bunq has only one building block. Providing webhooks, or as they call them callbacks, for push information when a variety of events occur on the banking API platform.

*   [Callbacks](https://doc.bunq.com/#/callbacks) - Callbacks for the bunq API.

bunq provides a pretty lengthy list of event types in which API consumers can tune into, and receive notifications for. It is a pretty simple, yet effective approach to helping make the platform more real time, while also keeping the API interfaces simple and consumble by the widest possible audience--allowing all users to stay informed of the most meaningful events that occur via their bunq integrations.

### Business

bunq gets straight to business when it comes to the pricing for their platform. You can sign up for a 30 day trial, and the pricing for everything is front and center on the prominent pricing page. bunq even take things up a notch by offering an affiliate program for developers to tap into when it comes to getting a share of the revenue generated through the business they send bunqs way.

*   [Pricing](https://www.bunq.com/pricing) - Pricing for the bunq API.
*   [Affiliates](https://www.bunq.com/affiliates) - Affiliate information for the bunq API.

The pricing for bunq is very straightforward, with detail pages available for each of their memberships levels ([Business](https://www.bunq.com/pricing/business), [Premium](https://www.bunq.com/pricing/premium), [Joint](https://www.bunq.com/pricing/joint), [Travel Card](https://www.bunq.com/pricing/travel-card)). The API supports access to each customers account via OAuth, requiring each user to have their own bunq membership level, while also providing revenue opportunities for developers via the bunq affiliate program.

### Legal

When it comes to the legal department bunq provides the bare minimum required for operating a platform today, publishing the terms of service, as well as the privacy policy that governs developers, as well as end users.

*   [Terms of Service](https://www.bunq.com/legal) - Terms of service for the bunq API.
*   [Privacy Policy](https://www.bunq.com/assets/media/legal/en/20190903_Privacy_Statement_EN.pdf) - Privacy policy for the bunq API.

While these two building blocks are sufficient, I'd recommend more investment in service level agreements (SLA), transparency reports, licensing and other common legal building blocks that leading API providers use to govern their operations.

### Support

bunq has a pretty straightforward approach to supporting the platform, with a general support page, in-application channels, and emails to allow developers to get support from the platform.

*   [Support](https://www.bunq.com/contact) - Support informtion for the bunq API.

Support at bunq is also conducted via social media channels outlined below in my list of external resources. So while their support offering might look a little thin, they go all in on the social channels where users already exist.

### Communication

bunq provides a modern informative, and up to date blog to help keep their platform up to date, breaking down their stories into a handful of categories including products & services, fintech, lifestyle, company, and business insights.

*   [Blog](https://www.bunq.com/blog) - The blog for the bunq API.
*   [Developer Blog](https://medium.com/bunq-developers-corner) - Medium developer blog for the bunq API.
*   [Updates](https://www.bunq.com/updates) - Updates for the bunq API.
*   [Change Log](https://beta.doc.bunq.com/basics/changelog) - A change log for the bunq API.

Similar to support, the communication area might look like a short list, but because of the social media channels listed under external resources, bunq is clearly engaged when it comes to communicating with their community.

### Resources

There are a handful of resources provided by bunq, acknolwedging that it won't just be developers showing up to learn about the platform, and providing resources that help spread the word about what the platform is up to.

*   [Press](https://www.bunq.com/press) - Press for the bunq API.
*   [Press Kit](https://www.bunq.com/press/kit) - Press kit for the bunq API.

I would recommend expanding the number of resources available to developers and non-developers in this area. Providing more white papers, case studies, tutorials, webinars, and other resources that help developers be more successful.

### External Resources

When it comes to providing a diverse set of support and communication channels, bunq has checked all the boxes. Making sure their platform has a presence on all the core platforms necesary for getting the word out about an API, but also done in a way that helps you expand and stay engaged with your community.

*   [GitHub](https://github.com/bunq) - GitHub for the bunq API.
*   [Twitter](https://twitter.com/bunq) - Twitter for the bunq API.
*   [LinkedIn](https://www.linkedin.com/company/bunq/) - LinkedIn for the bunq API.
*   [Crunchbase](https://www.crunchbase.com/organization/bunq) - Crunchbase for the bunq API.
*   [Facebook](https://www.facebook.com/bunq/) - Facebook for the bunq API.
*   [Medium](https://apievangelist.com/network/providers/bunq/Medium - https://medium.com/bunq) - Medium for the bunq API.
*   [Instagram](https://www.instagram.com/bunq/?hl=en) - Instagram for the bunq API.
*   [Wikipedia](https://en.wikipedia.org/wiki/bunq) - Wikipedia for the bunq API.

I find that the number of external resources present, as well as the activity on each of these channels provides me with important signals regarding the health and velocity of the bunq API. bunq reflects not just how SaaS providers are operating their business, but also how succesful API providers are getting business done on the web.

### Virtualization

I was very happy to see a sandbox for bunq. I feel pretty strongly that sandboxes should be default for all APIs, but especially for heavily regulated industries like banking. In adition to a sandbox environment, bunq also provides an Android emulator for helping developers build mobile applications more easily.

*   [Sandbox](https://www.bunq.com/api/psd2-sandbox) - A sandbox for the bunq API.
*   [Emulator](https://doc.bunq.com/#/android-emulator) - An Android emulator for the bunq API.

Virtualization is valuable for helping developers be more confident when developing against APIs and learning about what is possible without having to work with sensitve data. An additional thing to note is that bunq's sandbox is PSD2 compliant, demonstrating the importance of API virtualization for not just API providers, but also for entire industries like banking, and the regulatory process.

### Discovery

When it comes to API discovery, I was pleasantly surprised to see how much bunq has invested in making sure their APIs are found. I feel that bunq's approach to API discovery is worth highlighting all by itself, and will be writing a separate story on it, helping shine a light on how API discovery is finally thawing after many years of limited growth--bunq has invested in these areas when it comes to API discovery.

*   [ProgrammableWeb](https://www.programmableweb.com/company/bunq) - ProgrammableWeb for the bunq API.
*   [RapidAPI](https://rapidapi.com/bunq/api/bunq) - RapidAPI for the bunq API.
*   [API List](https://apilist.fun/api/bunq-api) - API List for the bunq API.
*   [Schema.org](https://schema.org/BankOrCreditUnion) - Schema.org for the bunq API.
*   [Postman on GitHub](https://github.com/bunq/postman) - The Postman collection managed on GitHub for the bunq API.
*   [Postman Network](https://explore.postman.com/api/1655) - The Postman network page for the bunq API.
*   [Postman Team](https://explore.postman.com/team/423451) - The Postman team page for the bunq API.

bunq's usage of OpenAPI as well as Postman is pretty forward thinking, and when you consider how they publish a JSON-LD to identify their API as a Schema.org BankorCreditUnion, their approach is worthy of showcasing. Using JSON-LD + Schema.org is not something I see very often, but it is something I would like for all API providers to be doing--overall, bunq gets pretty high marks when it comes to the API discovery portion of my profiling.

### In Summary

While I can always recommend additional building blocks for API providers like bunq, I have to note that their approach is not only robust, it is precise. I can definitely recommend that they invest more into case studies and other resources, but bunq really nails all of the essential building blocks for me, while also investing in some forward leaning stuff like API discovery, virtualization, and orchestration. As far as a profiling goes, the bunq approach to their APIs reaches what I consider to be a blueprint standard--meaning that it is a profile I would hold up as an example that other API providers should consider following.

There are always things that can be improved upon with each API provider I profile, but the goal is always to make sure you are investing in all the right areas. bunq does this well. I'm impressed with their approach. I will spend more time playing around with the bunq platform, updating my profile about what they do, and will also consider crafting a formal banking API industry blueprint from their approach. I have to admit, I'm not overly excited by banking APIs, but I am very interested in how fintech companies like bunq are pushing forward the banking API conversation in Europe, North America , and Asia.