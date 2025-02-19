---
layout: post
title: Understanding More About The Web Communications Platform Respoke
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/respoke/respoke-web-communications-300x101.jpg
author:
  name: kinlane
tags:
  - Communication
  - Communications
  - Web
  - Platform
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/respoke/respoke-web-communications-300x101.jpg)](https://www.respoke.io)

In the coming months I’m doing some deep profiling of the API space, so you are going to see me reviewing the approach of more API providers in the space. My goal with API reviews is not just to showcase the company or service involved, but review the overall approach of the provider. You can [read more about my review process on API Evangelist](http://apievangelist.com/2013/12/12/an-api-evangelist-review-of-your-api/), to better understand my objectives.

The review in the queue today is from [Respoke, a web communications platform](https://www.respoke.io). When you land on the Respoke website, you see all the signs of a modern platform, starting with the simple single page app style website, but more importantly, they immediately tell me what they do, in a simple, easy to understand way:

> _Add live voice, video, text, and data features to your website or app_

You wouldn't believe how hard this is for some of the APIs I review. If I have to spend more than 5 seconds trying to understand what you do, you've failed, and Respoke nails it, by both providing simple text, as well as visuals that help me understand that they are a web communications platform.

To continue understanding what Respoke does, let’s take a stroll through all of the areas I focus on during any API review.

**Actual API Endpoints**  
I always start with the actual API endpoints when reviewing an platform. Respoke provides a basic set of endpoints, mostly for authentication of communications via the platform, but also managing roles, groups, etc. You can tell the API is new, and it doesn't have the telltale signs of a fully mature API that has been used for a while, but I know with Respoke, they are just getting going. I’m not a fan of using POST, and relying on request data being passed through the body as JSON. I like simple parameter based design, with sensible usage of your verbs. I feel this approach makes an API more hackable by users, even non-developers who only know enough to be dangerous. It is not a show stopper, just a personal opinion of mine.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/respoke/Respoke-Web-Communications.png)](https://www.respoke.io)

**Developer On-Boarding**  
Respoke provides a simple, frictionless on-boarding experience, easing you in with a getting started that walks you through the platform, and the self-service registration flow you need to get started with the service. At first glance I’d say they can do a little better job of explaining the authentication. I haven't actually hacked on it yet, but at first glance it seems overly complex, or maybe just could be explained better. Another thing I'd like to see is a simple FAQ that I can scan to be able to see many of the common questions that get asked, and educate myself about Respoke in one page.

**Platform Documentation**  
Like the API endpoints themselves, the documentation is simple. I’d like to see a [Swagger](http://swagger.io/) or [API Blueprint](https://apiblueprint.org/) specs for the API, and some interactive documentation to go with it—in my opinion this is default for all platform documentation in 2014. I suspect as the API matures, so will the platform documentation.

**Authentication & Security**  
As I mentioned above, I think the authentication strategy is a little confusing when you are on-boarding. I’m guessing I don’t fully understand everything about the security and authentication of web communications via Respoke, but I also suspect they can put a little more work into help new users understand how it works, get started with basic authentication, and then when you are ready, learn more about the advanced security features around platform communications.

**Code For Integration**  
Respoke integration is pretty focused on JavaScript, so my evaluation of code resources will be a little different than with other APIs. I’d like to see other language libraries, but I’m sure as the platform evolves, we'll see these emerge from the community. Respoke provides JavaScript and Node.js libraries to get going, but what I really like is the [example apps that they provide](https://docs.respoke.io/tutorials/example-apps.html), or as I call them starter kits . I think starter kits go well beyond just providing code, but also help spark the imagination of developers around what is possible. +1 in this area for the Respoke usage of Github—I consider Github an essential building block for any API provider. Beyond these areas, I would suggest that Respoke spends some time thinking about what Platform Development Kits (PDK) they could provide. Providing ready to go solutions for top platforms like SalesForce, WordPress, and other leading systems that would benefit from a seamless web communications integration from Respoke. Similar to the starter apps they provide, PDKs would seriously contribute to adoption.

**Direct and Indirect Support**  
When it comes to support resources, Respoke has the minimum viable building blocks need, providing indirect support via a forum, and direct support via email. This is definitely the baseline for any provider, but I would encourage the addition of a support ticketing system as they pick up momentum, and definitely start keep an eye on Stack Overflow, and engaging developers on their own turf.

**Communication With Community**  
The Twitter, Facebook, and Google+ social accounts are front and center for Respoke, and they appear to be active—nice. However the lack of a blog always makes me sad. I know that many providers don’t feel they have the resources to publish a blog, and keep active, but for me this is one of the most important signals an API platform can provide. When it comes to communicating with your API community, I’d say the blog is number one, and after that Twitter and Github are number two and three. Respoke has 2 out of 3 when it comes to the essential communication building blocks.

**Platform Updates**  
As I made my way around the Respoke platform, I was happy to see there was a [change log](https://docs.respoke.io/reference/changelog.html) keeping developers up to date with what has happened to the platform. I would also consider providing some sort of roadmap, providing the other end of the platform update coin. Since Respoke uses [WebRTC](http://en.wikipedia.org/wiki/WebRTC) as core technology, it seems there should be some element of updates regarding browser support, and updates to the WebRTC format. I would also consider adding a status dashboard to keep Respoke users informed about the stability of the overall platform.

**Business Model**  
One of things I judge APIs on is their pricing, and whether or not the pricing page is front and center, and Respokes is. They provide you with a free tier for playing around, and sensible pricing tiers for you to grow into, with unit based pricing per minute and connection. How a platform wears its business model tells a lot about the underlying services, and Respoke is straight up about all of it. Kudos!

**Resources**  
When it came to supporting resources for the Respoke platform, there really were no case-studies, slides from events, how to guides, and other vital resources to help developers through all stages of development. This is one area I’m pretty lenient in early on, because I understand that many APIs are just getting going, and it will take time for supporting resources to be developed properly. My goal is to just make sure the platform is aware of the lack of general resources, and make sure it gets into the roadmap ASAP.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/respoke/Respoke-Pricing.png)](https://www.respoke.io/#pricing)

**Research & Development**  
I always like to see some sort of forward leaning research & development areas of an API, such as an idea showcase, or labs environment. I think Respoke touches on this with their starter projects, that don’t just provide valuable code, but also ideas for how the service can be integrated with, but I think they could take this further. Respoke needs to bring their experience with web communications, and WebRTC to the table and providing leading examples of what is next for web communications. There are many proven ways platforms demonstrate where their platform, and supporting technologies are headed, and I’d like to see more of this within the Respoke community, I know the knowledge and talent exists, they just need to showcase on site.

**Legal Department**  
Respoke provides the required terms of service (TOS), and privacy policy that outlines how the platform operates. I’m not a lawyer, but after reading through their TOS and Privacy Policy I didn’t see any red flags regarding data ownership, privacy, or the other hot button areas I usually see around the politics of API operations. My first take on the Respoke legal department is that they are operating a pretty straightforward technology platform, and are respecting the interests of both developers, as well as end user. The only area I would comment on, is the lack of branding guidelines and resources for developers to take advantage of. I expect that branding will play an important role in helping drive Respoke adoption.

**Embeddable Tools**  
Respoke has a built in advantage in the area of embeddable, with the fact that many of their core integrations will be done via JavaScript. Respoke is meant to be embedded, and developers can do this pretty quickly using the default JavaScript library, but I think Respoke could go much further in this areas by providing embeddable platform development kits (PDK) as I mentioned above, as well as an assortment of other copy / paste goodies, and possibly even a communication widget builder. Properly branded, embeddable tools go a long way in acting as a marketing vehicle for the platform, educating users along the way of the platform behind the tools they are using.

**Development Environment**  
After I signed up for my Respoke account, logged in, and setup my first application, I noticed that Respoke had a dev mode for developer to take advantage of when integrating into their applications. I’m a big fan of sandbox or development environments, allowing developers to build in a safer, more comfortable environment, but then being able to easily flip the production switch in a self-service way, when they are ready. I’d like to see more integration resources available to developers, that help with development, QA, and production issues, and even provide monitoring, testing, and other common integration building blocks we are seeing from providers like [APITools](https://www.apitools.com/) and [Runscope](https://www.runscope.com/).

**Developer Portal**  
A simple, robust developer portal is a must these days for any providers, and Respoke provide a pretty standard account management solution, giving you control over settings, the ability managing individual applications, as well as your pricing and payment history. I’d like to see more analytics, and other integration resources as I mentioned above, here in my Respoke developer area, but overall it provides the minimum viable portal developers need to be successful when integrating with an API--anticipating it will only get better.

**Balance and Consistency**  
Across the technical, business, and political building blocks of an API, I’m always looking for balance and consistency. This might be in how they craft their actual API endpoints, but could also be in API documentation, code samples, or even storytelling on the blog. I’d say that they are consistent in their API design, but as I mentioned above, I’m not a fan of making requests a POST, using the body to pass values. While they are consistent in this use, I don’t think its consistent with modern, web APIs developers are used to seeing. I think Respoke will achieve more balance, and consistency in their API design, as well as content and other resources available on the platform over time—they are just getting going, and it always takes a while to get firm footing in this area.

**Is It An Open API?**  
I’m always hesitant to truly call an API “open”, until I peel back the layers of the onion, and make an assessment myself—just because an API is publicly available, doesn’t mean it is open. After doing this, I can confidently say that Respoke is an open API. It is publicly available, self-service, with a straightforward business model, including sensible TOS. Only time will tell if Respoke continues to deliver their services in an open way, but the way they've constructed their platform so far, tells me they will.

**API Evangelism**  
Like the resources area, there is pretty much no sign of life to report on when it comes to evangelism of the Respoke platform. However, I do know they have hired an evangelist, I have a call scheduled with him, and I’m confident this is another area we will start seeing activity. You can always tell when a platform as an active evangelist because the social networks are active, Stack Overflow and Quora are engaged, there are a steady stream of commits on Github, regular flow of stories on the blog, and lots of exhaust from conferences and hackathons they are at. I'm guessing the next time I take a look at the Respoke platform, this will be different.

**In Conclusion**  
That concludes my review of the Respoke API, across these 18 areas. I’d give them a solid B for their efforts. The platform has some maturing to do, in the overall design of the API, and the supporting building blocks, but this is standard operating procedure. Respoke is just getting going, and are kicking butt in most of the essential areas. My only red flag is the lack of blog, but this is just one of my pet peeves. I need the storytelling heartbeat of a blog to help me get to know providers in real time. I do not have time to speak to all providers on a regular basis, and an active blog provides an asynchronous way to track on thousands of companies, and their API resources.

I think Respoke is notable because they are pushing forward not just an open technology like WebRTC, but all web communication in general. WebRTC is all about "Real-Time Communications (RTC) capabilities via simple JavaScript APIs”, and I just as I mentioned in my [post about what Context.io is doing to push forward SMTP, POP, and IMAP with web APIs](http://apievangelist.com/2014/12/01/the-contextio-api-and-thinking-out-of-the-box-when-crafting-apis/), I think Respoke is working do the same with WebRTC. They seem to have a vision, derived from years of experience in the field, and they are looking to deliver on this vision using not just JavaScript APIs, but wider web APIs—something I can definitely get behind.

Hopefully my review provides value for Respoke, but also the wider API space, and helps API providers understand how they can better craft their own API strategies. Respoke is something I’d share as a blueprint for how you can deliver a communication platform using APIs, and I will be keeping an eye on them, updating my definition of what they do as they evolve. Look for more updates as I continue to weave Respoke into my [API Stack](http://theapistack.com/), as well as any of my other [API research](http://kinlane.com/projects/).

**Update:** They do have a blog at [blog.respoke.io](http://blog.respoke.io/) (happy dance), and [you can submit tickets via their Github issues](https://github.com/respoke/respoke/issues) on the Respoke repo. Thanks [@erinspice](https://twitter.com/erinspice).