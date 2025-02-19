---
layout: post
title: A Review of The CallFire Communication Platform
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/callfire-logo.png
author:
  name: kinlane
tags:
  - Communication
  - Review
  - Platform
---
[![CallFire Messaging](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/callfire/callfire-logo.png)](https://www.callfire.com/)

This is a review of the [communication API platform CallFire](https://www.callfire.com/), crafting a snapshot of platform operations, from an external viewpoint, providing the CallFire platform team with a fresh take on their API from the outside-in. The criteria applied in this review is gathered from looking at the API operations across thousands of API providers, and aggregating best practices, into a single, distilled review process.

This review has been commissioned by CallFire, but as anyone who's paid me for a review knows, money doesn't equal a favorable review—I tell it like I see it. My objective is to help CallFire see their platform through a different sense, as developers might see their platform. It can be hard to see the forest for the trees, and I find the API review is a great way to help API providers see the bigger picture.

I prefer to share my API reviews in a narrative format, walking through each of the important aspect of API management, telling the story of what I see, and what I don't see. Here is the story of what I found while reviewing the communication API platform for CallFire.

**Overview  
**CallFire makes for an easier review than some API operations, because the API is the product. As soon as you land on the homepage of the website, you begin your API journey as a potential API consumer. The first thing you read is "Over 2 Billion Messages Delivered”, so you immediately understand what CallFire does, and the next thing that grabs your eye is “Signup For Free”—way to not miss a beat, CallFire.

Next you see five simple icons, with simple text, breaking what CallFire does down: Text Messaging, Call Tracking, Video Broadcast, Cloud Call Center, IVR. Within the first five seconds you fully understand what is being offered, and given the opportunity to sign up. If that is not enough, you are also told the reasons why: Engage Your Customers, Save Valuable Time, Increase Revenue.

[![CallFire Messaging](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/callfire/callfire-home-page.png)](https://www.callfire.com/)

After you look at thousands of APIs, nothing is more frustrating than to have to figure out what an API does. CallFire gives me what I need, in five seconds or less, without clicking or scrolling. This is the way all APIs should be, if not the homepage of website, then the landing page of the API developer portal. The main page of the CallFire website is well designed, and organized in a simple, and robust way, giving you one-click access to everything you need to get going with the platform--no other feedback required.

**Endpoints**  
This is the part of the review I dive into the actual design of the API, and provide some feedback on the technical endpoints of the APIs themselves. CallFire is unique because it has a REST and a SOAP version of the API available, which I think is important in today's business climate, where APIs are targeting open developers, as well as those within the enterprise.

The CallFire API is very robust, with wide range of endpoints / methods for the most basic text and call features, all the way up to campaign, subscription, and contact management. You can tell the system is well thought out, providing a full suite of communication resources for all types of developers.

On you dig into the REST API you begin to see quite a bit of SOAP residue, and while the API has a well thought out list of endpoints, many elements of the parameters, requests, and responses feel SOAPy, including the XML responses. There is also a lack of consistent response codes, and defined data model, giving the REST API an unfinished, empty bottom feeling.

Overall I give the API a solid B in that it is a very robust stack, but I'd say it needs some hard use, and integrations before some of the rough edges are hammered off, parameters become more intuitive, and request and response structures normalize. Much of this just comes with usage, and requires getting closer to real world use cases, end users, before it becomes more of an experience based design vs. the resource based design it currently is.

I could easily go through the entire Swagger definition for CallFire and make recommendations on naming conventions, and help craft the resource definitions for the underlying data models, but this is best worked out with the community, iterating, and communicating with developers, and learning more about truly what they need. Think of it as kiln firing of the API, through developer execution, and robust platform feedback loops.

**On-Boarding**  
On-boarding with the CallFire API was frictionless. I went one click from home page, authenticated with my Google Account, and immediately I was dropped into my account dashboard, with a helpful intro screen showing me where things are. I easily found the area in my account to add an application, and get my API keys, then stumbled into the overview of how to activate your account as well—account management was intuitive.

The intuitive and informative CallFire home page made the API easy to find, and with frictionless account signup, and a standard API app management, I was ready to make my first call on the API within 10 minutes. The only thing I would consider adding as part of the process, is an option for signup and login using my Github credentials, in addition to Facebook, and Google.

On-boarding with an API is often the most frustrating part of API integration, and it wasn't something I worried about at all with CallFire. The process was intuitive, smooth, and didn't leave me trying to understand what the API does, and how I am supposed to make it work. Solid A on the on-boarding process for the CallFire API.

[![CallFire Messaging](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/callfire/callfire-api-documentation.png)](https://www.callfire.com/api-documentation/rest/version/1.1)

**Documentation**  
Documentation is one of the most critical aspects of API integration, making or breaking many integration efforts by developers. CallFire has double duty, in that it needs to provide documentation for the REST and SOAP version. Somethig CallFire manages to deliver with no problem, providing clean, easy to follow documentation for both APIs they offer.

The SOAP API document provides a simple breakdown of operations and methods, with easy to follow descriptions for everything. Ultimately the SDKs do most of the heavy lifting here, but the SOAP docs provide a nice overview of the CallFire platform.

The REST API for CallFire is defined using the machine readable API definition format Swagger, and uses Swagger UI to generate documentation, making learning about the API more interactive. Swagger provides a machine readable overview of the CallFire API, and is an approach to delivering API documentation that keeps pace with modern approaches.

I do not have much feedback for the documentation side of CallFire, I'd like to see more information about the underlying data model described in the Swagger definition, as well more detail about the response codes, but I give the platform documentation a solid B for being simple, clean, and complete--the API just needs some hardening, and the documentation will improve.

**Authentication**  
On-boarding with the CallFire API is frictionless, and adding an app, and finding your API keys are intuitive enough. The platform also provides a nice overview on how to enable the API on your CallFire account, but ultimately the topic of authentication is neglected.

Authentication for SOAP interactions, and REST for that matter, are abstracted away by each of the SDKs. However one of the elements of RESTful APIs is that authentication should be clearly defined as part of the documentation. I suggest adding a page, or section on an existing page that is dedicated authentication, explaining the BasicAuth used to secure the CallFire API. For any experienced API consumer it isn't difficult navigate, but the app manager with login and password, has appearance that it may be app key via a header or parameter, not BasicAuth--a dedicated authentication overview page would help clear up.

As part of authentication review I do not usually advocate for a specific authentication approach, when the choices are BasicAuth, or using the app id and keys in the header or parameters. The best option is to pick one, be consistent, and explain it clearly, on a page that stands out. Overall the authentication for CallFire is intuitive, it just needs a little bit of information to makes things 100% clear when you first find yourself making that first API call.

_**UPDATE:** Since I wrote this review, and the time of publishing, [CallFire has updated their portal to include a well formed authentication overview for the platform](https://answers.callfire.com/hc/en-us/articles/205407787-Authentication)._

**Code**  
After documentation, code samples, libraries, and SDKs are key to a painless API integration. For the CallFire API, there are only two SDKs available currently, for the PHP, and .NET platforms. It is common that platforms who are just getting going, only have a handful of SDKs in specific language, and is forgivable, but is also a sign of platform immaturity (aka lots of work still to be done).

Another aspect of SDK design for CallFire, that I'd like to bring up, is the cohabitation of REST and SOAP in a single SDK. I'm not sure this type of cross pollination is ideal for all integrations. Maybe it is just my architectural style, but I like seeing each SDK be as smallest possible footprint as possible, and meet the needs of developers without any extraneous bloat.

CallFire needs to have Python, Ruby, Java, Node.Js, Go, and JavaScript language SDKs to be able to serve as wide as possible audience as we possibly can. To help achieve this I recommend soliciting the help of platform users, or even paying a 3rd party developer to build SDKs, if needed.

Moving beyond SDKs, into what I call Platform Development Kits (PDK), CallFire does well in providing two distinct platform plugins for WordPress and Drupal. I recommend bringing these PDKs to the surface, and showcase them in a full SDK and PDK showcase page—showing what is possible.  Maybe even considering the next step, of what is the 3rd PDK that could be developed? SalesForce? Heroku?

The usage of Github by CallFire is another important signal, showing the platform is progressive, and something that developers can depend on. I recommend further bringing Github into the site, linking to accounts, providing direct links to SDK and PDK repositories from an official page, and add Github authentication for developers to be able to create and manage their accounts. Github isn't just about code, it is a potentially important social layer to the CallFire API ecosystem.

**Mobile**  
There really is no evidence of any mobile SDKs, or information for mobile developers available on the CallFire platform. It is common to find entire sections dedicated to mobile developers, or at least links to mobile platform specific code libraries. I recommend establishing a mobile focused section of the platform, and invest the resources necessary to help developers build iOS, Android, and Windows mobile applications using CallFire.

**Support**  
CallFire is doing well on the support front, providing building blocks for both direct, and self-service support. I like to see a mix of support services that developers can find on their own, getting the help they need 24/7, but they also need to be able to get direct support when they get stuck.

When it comes to direct support, CallFire is rocking it, with a support email, live chat, phone number, contact form, and ticketing system tied to your account messaging area. The only additional things I could recommend CallFire offering is paid support plans, allowing developers to pay for one-on-one support via chat, online hangout, or other means.

With self-service support, there is the CallFire FAQ, which I'd call more a knowledgeable than a simple FAQ, providing a wealth of knowledge about the platform. The only common element I see missing is more of a community element with a forum, or usage of Stack Overflow to engage with the wider developer community.  The current FAQ is very robust, and with the integrated ticketing system, the potential is great, but it is all missing that community piece.

Overall, CallFire support is as robust as you'd expect from any API platform. When you combine with the social media presence the platform has, that I'll cover as part of the communication strategy, the platform has all of its bases covered. A+ on support effort.

**Communications**  
When it comes to my review criteria for communications, other than a newsletter, CallFire nailed everyone of them. The platform has all of the expected social media platforms, has an active blog with RSS feed, and is very accessible with email, phone, and chat. All of this sends the right signals to the community, and potential API consumers, that someone is home. I have nothing to contribute when it comes to communications, as long as all channels are kept active, CallFire is doing everything it can in my mind.

**Change Practices**  
As platform providers, we are asking developers to depend on us, and integrate our resources into their applications, and businesses. That is asking a lot, and we need to provide as much information as possible about what the future hold, to hlep build trust with developers. There a handful of proven ways for doing this, established by leading API platforms.

*   **Roadmap** - API roadmaps are usually a simple, bulleted list, derived from the APIs own internal roadmap, showing what the future holds for the platform. Transparency around an APIs roadmap is a tough balance, since you don't want to give away too much, alerting your competitors, but your developer ecosystem needs to know what is next.
*   **Status Dashboard -** Status dashboards are a common way for API platforms to communicate the availability of an API, but also show the track record of a platform, helping developers understand the track record for an API they are to integrate with. There are several simple services, that help API providers do this, without investment in new tools and systems.
*   **Change Log -** Knowing the past is a big part of understanding where things are in store for the future. A change log should work in sync with the API roadmap building block, but provide much more detailed information about changes that have occurred with an API. Developers will not always pay attention to announced updates, but can use a change log as a guide for deciding what changes they need to make in their applications and how they will use an API.

Sharing the change history of a platform, a roadmap to the future, and a status of API operations at the moment go a long way in help build trust with developers. Transparency in the development of any platform, is essential in helping developers feel comfortable that a platform will be around to support their needs, and is worthy of their time.

[![CallFire Messaging Pricing](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/callfire/callfire-pricing-page.png)](https://www.callfire.com/pricing)

**Business Model**  
When reviewing APIs, the overall business model is usually one of the most incomplete aspects of operations, in my experience. This is ok, as many platforms are still figuring this out, however this is not the case with CallFire. The business model for the platform isn't just well defined, it provides me with an example to use when helping other API providers visualize what is possible.

The pricing page for CallFire is clean, well thought out, and provides sensibles tiers of operation, with clear units of measurement, letting me know what I get for each level. I can easily upgrade the access tier directly from my account settings, and I can get volume pricing if needed. This is how APIs should work, allowing me to easily calculate what I'll need, and figure out which tier I will be operating within, complete with a self-service option for scaling as I need, paying for what I use, as I go.

The billing management and credit system for CallFire is superior to most of even the most thought out API billing and pricing models. It is clean, well thought out, and makes sense from a user perspective—which is the most important aspect. I'll be using CallFire credit system as a reference when I talk about how the platforms should build tooling that supports the underlying API business model.

I can't articulate enough, how well done the business model, pricing, supporting billing and the other business elements of the CallFire API.

**Resources**  
When it comes to available support resources, it is another area CallFire does very well. The platform has heavily invested in case studies, videos, webinars, and a tour of the platform. They even have a communications and marketing glossary developers can use to get up to speed. CallFire does a good job of providing valuable resources to get developers quickly understand all aspects of platform operations..

A couple of areas I could provide suggestions for improvement, in is when it comes to more industry level white papers, and when the evangelism side of things kicks in maybe consider posting slide decks from events CallFire presents at, as well as a calendar of interesting events. These things will happen I'm sure once an API evangelism strategy is kicked into full gear, but for now just keep doing more of the same--providing lots of rich resources for devs.

**Research & Development**  
I'd file R&D in the same category as mobile, non-existent. API ecosystem are essentially external R&D labels for companies, and general operations are about exploring ideas of what can be build with an API, but it helps to have some element available to stimulate overall R&D via the platform.

Some of these elements are:

*   Idea Showcase - A place the community can share ideas of what could be built with the CallFire platform.
*   Labs Environment - A workbench showing what CallFire is working on when it comes to their own integration.
*   Opportunities - Available opportunities to build things like SDKs, PDKs, or specific projects.

These are just three things that help stimulate the innovation around an API. Sometimes developers just need something to spark the imagination, or possibly see an existing labs project to help them see something in their own work. These rich R&D environments can provide a great opportunity to help meet the needs of CallFire, and its partners.

**Legal Department**  
CallFire has the requisite Terms of Service (TOS), and privacy policy. I'm not a lawyer, so i'm not going to parse all of the details of each. There was nothing that raised my TOS alarms too significantly, the TOS were pretty standard, and the privacy policy didn't raise any huge privacy concerns as well I wouldn't have any problems integrating my own platform and business into CallFire.

A couple of items I'd recommend also considering, based upon what I seen on other platforms:

*   **Code License -** The PHP SDK has an MIT license, but the .NET didn't have anything. A centralized code licensing page could help as well.
*   **API License -** A license for the API itself, applied to the REST API interface that is defined by Swagger, using API Commons format.
*   **Service Level Agreement (SLA) -** Provide a service level agreement for API consumers to take advantage of, and understand service level commitments.
*   **Branding -** There are no branding or style guidelines with support resources like logos, etc—missed opportunity for spreading word, and steering developers in the right direction.

Just a couple of things to think about. All of these would go a long way in building trust with developers, and the branding thing is a huge missed opportunity in my opinion. When you bundle these with the TOS, privacy, and compliance information already provided by the platform, it would round off the legal department of the CallFire API nicely.

**Embeddable**  
Embeddable tooling is another area that is non-existent for the CallFire API. There are no embeddable tools like widgets, buttons, etc that allow the average end-user, and developer to put the API to use in web pages, and applications. I'm not sure what an embeddable suite of tools would look like for CallFire, that would need to be a separate brainstorming process.

When it comes to communication platforms, especially ones involving media, and deep social interactions, embeddable tools are a proven way to grow platform, expand the network effect, and potentially bring in new developers. I recommend including an embeddable section to the site, with a handful of embeddable tooling to compliment the SDK and PDK resources already available.

**Environment**  
One area I consider when looking through API operations, is the environment itself. By default many APIs are live, ready for production use, but increasingly platforms are employing alternate environments for development, QA, and potentially variant product environment.

*   **Sandbox** - With the sensitive information available via many APIs, providing developers a sandbox environment to develop and test their code might be wise idea. Sandboxes environments will increase the overall cost of an API deployment, but can reduce headaches for developers and can significantly reduce support overhead. Consider the value of a sandbox when planning an API.
*   **Production** - When planning an API, consider if all deployments need to have access to live data in real-time or there is the need to require developers to request for separate production access for their API applications. In line with the sandbox building block, a separate API production environment can make for a much healthier API ecosystem.
*   **Simulator** - Providing an environment where developers can find existing profiles, templates or other collections of data, as well as sequence for simulating a particular experience via an API platform. While this is emerging as critical building block for Internet of Thing APIs, it is something other API providers have been doing to help onboard new users.
*   **Templates** - Predefined templates of operation, when a new environment is setup, either sandbox, production, or simulator, it can be pre-populated with data, and other configuration, making it more useful to developers. These templates can be used throughout the API lifecycle from development, QA, all the way to simulation.

This approach to delivering an environment for the CallFire API is not essential, but I could see it providing some interesting scenarios for communication campaigns, and the deployment of messaging infrastructure in a containerized, Internet of Things rich environment. Deployment CallFire communication infrastructure should be as flexible as possible to support the next generation of Internet enabled communication, both in the cloud and on-premise.

**Developers**  
An often overlooked aspect of API operations is the tools provided to API consumers. CallFire is in a fortunate position as the API is core to their product, and the API integration is an extension of a primary CallFire user account. The account area for CallFire is well done, clean, and gives users, and those who choose to be API consumers, quite a bit of control over their communication infrastructure.

CallFire nailed almost every API account area I like to see in any API platform:

*   **Account Dashboard -** The dashboard for CallFire account is well done, and information.
*   **Account Settings -** CallFire provides a high level of control over account settings.
*   **Reset Password -** Resetting password is important, and I like to highlight separately.
*   **Applications** - The app management for CallFire is on par with rest of industry.
*   **Service Tiers -** The ability to change service tier, and scale is pretty significant.
*   **Messaging** - An import part of the communication and support strategy of platform.
*   **Billing**  - Essential to the economy portion of platform operations, well executed.

There are a couple of areas I'd like to see, to round off developer account operations:

*   **Github Authentication -** It would fit nicely with Facebook, and Google Auth--I prefer authenticating for APIs with my Github.
*   **Delete Account -** Maybe it is in there, but I couldn't find it. The ability to delete an account is important in my book.
*   **Usage Logs & Analytics -** I'd like to see application specific analytics like on the dashboard, showing usage per app.
*   **Account API -** Allow API access to all account operations, allowing access to account settings, usage limits, billing, messaging and other areas.

The CallFire account management for users and developers is much more robust than I see in many of the APIs I review. Like I said before the monetization portion is something to be showcased, and all the most important aspects of account management for API operations are present. It wouldn't take much to round off with a couple more features, some more analytics, and an account management API would really take things to the next level.

**Consistency**  
I always enjoy when I come find consistent design, and function across API operations. This is what I found with CallFire. The API isn't an afterthought like other platforms, it is their product, and the site design, messaging, and content are consistent across the platform.

The API design is consistent, and the supporting documentation is as well. The only thing I'd add is design patterns across the SOAP and REST API should be less consistent, and stay true to their own design constraints. The details of the REST could be tightened, to be more consistent in how parameters are formed, and response formats, and error code are commonly presented.

Usually when reviewing APIs, I look for fractures between API operations, like clunky UI between website sections, or incomplete documentation, often created by disparate teams. This doesn't exist with CallFire, and while there are many details that could be cleaned up, the consistency is all there.

**Openness**  
This is a term thrown around a lot in the space, and very seldom do sites live up to it. There are many things that contribute to whether or not an API is truly open. CallFire delivers on all of the important areas, making open a word I'd apply to CallFire.

First on-boarding for the platform frictionless, and everything is self-service, even scaling your account when you need more credits. You have control over your account, and the terms of service and privacy policy are liberal. These are all hallmarks of an open API. Add the ability to delete my account, I'm 100% on board.

One of the things I think heavily contribute to the openness of the CallFire platform is the business model. The monetization strategy is well formed, with pricing and service tiers well defined. You know what things cost, and how to get what you need. This type of approach eliminates the need for other extraneous rate list, or restrictions—this type of balance is important to truly achieving openness.

After this review I'd call CallFire an open API, but only time will tell, if the platform is also stable, support channels are truly supportive, and other aspects of open that only CallFire can deliver on. For right now I consider them open for business, and open for developers, but ultimately whether or not CallFire is willing to share this review, will put the exclamation on the platform openness definition, won't it! ;-)

**Evangelism**  
The usual footprint you'd see when an API platform has an active evangelism program doesn't exist for CallFire, but that is part of the motivation of this review. We are looking to take a snapshot of where  the platform is at, in hopes of providing much needed input for the roadmap, as well as establish a version 1.0 evangelism strategy--we will revisit the evangelism portion of this review in a couple months.

**Conclusion**  
In short, the CallFire passes my review. There are several key areas like mobile, and roadmap communication, that are missing from the platform entirely, but then there are other areas CallFire nails almost every one of my review criteria. The API is robust, the documentation is complete, and they provide all the essential support building blocks.

One of the things that really stand out for me is the CallFire business model, something that I think really cuts through the BS of many APIs I look at. CallFire has a clear business model, and the tools to manage your API usage. There is no grey area with the business of model for CallFire, which is something I just don't see a lot of.

I'd say my biggest concern with the platform is the lack of diverse code resources. I can't tell if they are just getting going, or maybe the lack of developer skills is slowing the diversity of available coding resources--I am just not sure. My guess is their is a lack of diverse developer skills on staff, which explains the lack of mobile SDKs, and the SOAP residue on the REST API. My advice is to invest in the developer resources necessary to load the platform up with a wide variety of coding resources that developers can put to work in their projects.

Beyond the code resources, it is really just a bunch smaller items that would bring the platform into better form. CallFire definitely reflects everything I'm looking for in an API platform, and is something I've included in the top APIs I track on as part of my API Stack. Additionally, I've gathered a couple of other stories while doing this review, including the overall monetization strategy, the notification system under account settings, and their usage of Swagger—which is always another good sign of a healthy platform, and a positive review.

Lots going on with the [CallFire platform](https://www.callfire.com/), I recommend taking a look at what they are up to.

_This was a paid review of the CallFire platform, if you'd like to schedule a review of your platform, [please contact me](mailto: info@apievangelist.com), and we'll see if I can make time.  A paid review does not equal a good review. it is my goal to give as critical, and constructive feedback as I can to help API providers enhance their roadmap and better serve their consumers._