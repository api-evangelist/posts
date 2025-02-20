---
layout: post
title: WhatsApps Reason For Not Opening Up API Is Just Not Informed And Short-Sighted
image: https://s3.amazonaws.com/kinlane-productions2/whatsapp/whatsapp-logo.png
author:
  name: kinlane
tags:
  - Open
---
There was a quick post from Mashable the other day about a conversation with [WhatsApp](https://www.whatsapp.com/) cofounder Brian Acton, called WhatsApp cofounder: [Sorry developers, no API for you](http://mashable.com/2015/03/25/whatsapp-developers-api/). Its pretty common argument you hear from business leaders, regarding why they won’t open up APIs. It has been a while since I railed on this line of thinking, so I am taking the opportunity to share why this is such an un-informed, short-sighted view of APIs.

I wasn’t at the conference, so I a completely dependent on Mashable for this, but apparently someone in the audience asked:

> _"We have done a lot of transactional messaging using traditional email and SMS, and we've recently moved into the international market," the engineer explained to the audience, who clapped and hollered. "We're desperate to communicate with our members where WhatsApp would be a wonderful platform. We're good developers."_

Acton stated that they had no current plans to, adding:

> _"We don't want to inundate users with messages they don't want," Acton explained of the choice. "I am very empathetic to your cause. I receive emails on a regular basis from people who want to run their business or want to run something using WhatsApp as the backbone for communication, but we're balancing that with the user experience."_

Before I point out how narrow this thinking, let’s focused on why I use the word un-informed to describe this perspective. Let’s say the motivation for not opening up an API at WhatsApp is purely about UX, let’s explore some of the options on the table, for API providers to strike the balance they are looking for in this area.

**API Management Service Composition**  
With modern API management services, you have a critical concept called "service composition", where you the API provider, can carve up different levels of access to valuable API resources, deciding exactly who has access to what. API do not equal firehose to the public, where anyone can build whatever they want. If you still see APIs in this way, spend some time playing with the more successful APIs out there like Twilio, SendGrid, and expand your definition of just exactly what an API is, and the role service composition plays.

**oAuth For Platform Access & End User Control**  
oAuth is a pretty proven way for managing who is accessing API resources, in a way that the end-user has a say in operations. An API does not automatically open access to all users, when a developers signs up for API access. In the beginning, you have access to your own account as a developer, that is it. It is up to end-users to find these applications, and using oAuth, give (or revoke) access to whatever application they choose. As a platform owner you should consider giving end-users oversight, via oAuth, into how you the platform provider is accessing their data, and require **ALL** partners to follow this path. If you need example of this in action go look at your Google Account profile, you’ll see Google Apps in the oAuth list.

**Branding And Design Guidelines**  
What are the official internal branding and design guidelines you use to direct your own WhatsAp development teams—you have them right? So share these with developers, and give them a chance to share in your master UX vision of how the WhatsApp UX vision, is the one to rule them all. You should be able to articulate the platform UX vision as a set of professionally crafted, publicly shared, design guides, that everyone can see, and use to understand the vision--you never know maybe here would be someone out there in the world that could iterate on them in a meaningful way, that even you might even agree with.

**Starter Kits and UX Frameworks  
**Additionally, go beyond just design guides, and provide developers with HTML, CSS, Images, and JavaScript goodies that will demonstrate how visionary the WhatsApp UX vision is. Think [Twitter Bootstrap](http://getbootstrap.com/). I’m not saying that Twitter nailed it on this front. They did well, but their overall timing and execution left a lot to be desired. As a platform provider who possesses a UX vision that works, open up the platform, provide developers with the proper starter kit, or UX framework that they need to succeed. As a developer, I fail to deliver on your UX vision, it is more a failure of your platform to provide me with proper tooling, than it is my fault as a dev.

**Developer Sandbox & Simulation Environments**  
A common approach to managing developer on-boarding, and overall quality control through an API and resulting app lifecycle, is done by providing developers with a sandbox. When nothing is live, and developers do not have any access to actual end-users, what harm is done? What harm to the overall UX experience is there, when developers are only building in sandbox and simulation environments? Until they prove themselves, no developer should move to a production environment, until their solutions is proven to meet WhatsApp strict UX guidelines.

**Application & Developer Certification**  
Now let’s talk about how WhatsApp could certify developers, giving them access to more resources, or possibly investment from the WhatsApp platform. Many leading platforms require developers to get certified, and / or their applications certified before they get full access to production environments, and end-users. How you craft your developer and application certification is a reflection of your overall UX requirements, and platform goals.

**Application Showcase**  
When you have proper branding and design guidelines, starter kits and supporting UI / UX frameworks, proper developer environments, and official application and developer certification, you should end up with a handful of apps worth showcasing. Maybe its not just a single, competing application, it could be integration with an existing platform (SalesForce, ZendDesk, etc.), or just providing access to valuable messages and conversations. With proper API ecosystem management, an application showcase provides an incentive for developers to build applications that work properly, and reflect the well defined UX vision of WhatsApp.

**Partner Program**  
With a robust ecosystem of certified developers, and applications that meet the strict UX guidelines of WhatsApp, surely there will be the cream on top of what is developed on the APIs. Which apps, and platform integrations are the best designed, and provide the most value to WhatsApp end-users? These are the ones that WhatsApp should be investing in, bringing them closer to internal operations, and providing them with additional access to resources, investment when it makes sense. What does the WhatsApp partner program look like currently? I'm sure there is one, just not a formal approach, which includes any transparency, or public involvement.

**Zooming Back Out**  
That represents just a handful of the common API management building blocks that are commonly put to work by API providers to help manage their API ecosystems. It doesn’t just take technology to make APIs work, it takes a healthy business, and political approach to make sure any API actually works as an ecosystem. I could go on for days about how proper support, communication, and other proven elements, could also be used by WhatsApp to strike the API developer balance system they are looking for, and even possibly create a positive feedback loop with the community, that could be applied to the roadmap.

Now that we are paused, and zoomed out a little bit, let’s talk about the narrow perception demonstrated by WhatsApp current stance on APIs. If you open up APIs, developers will just come and mess with your UX version. Nothing else will happen? This is where we shift from being educated about common building blocks, to the limited perceptions that results from this lack of awareness—you just don't know, what you don’t know.

**You Have APIs, You Just Aren’t Open**  
WhatsApp uses APIs. This is how the mobile app works. The company just does not want to share these resources with developers, because they fear losing control over the UX experience. I guarantee that WhatsApp is sharing data and resources with 3rd party provider, they are just very picky about who these are, and they don't have a formal process for doing so, so they keep their cards very close to their chest—aka, not open.

Let’s explore the darker side of the WhatsApp API conversation. I’m not alluding that WhatsApp has less than honorable intentions, my goal is to shine a line into the dark areas that exist, regardless of WhatsApp lack of education of modern API practices, and missing the wider picture of how APIs are actually put to work. This moves into the area of responsibility I feel that platforms assume, when they step up and invite end-users to sign up, depend on, and stay engage with any online, public, API driven web, mobile, or device based application.

**Data Access & Portability**  
WhatsApp end-user deserve access to their accounts, and their messages. APIs are not just about developers building the cool app that will compete with WhatsApp, or mess up the WhatsApp UX vision. APIs provide basic data access and portability to the information end-users generate via the WhatsApp platform. Platforms that do not empower end-user data portability, do not operate in the best interest of their own customers, removing from the overall user experience. Something you don't see, because your UX vision is so narrowly aligned with your business goals, not widely aligned with your end-users needs.

**Platform Reciprocity**  
Using services like IFTTT and Zapier, API driven platforms are enabling users to to migrate their information between the services they depend on, and add to their own user experience on each platform they depend on, and most importantly between them. APIs, and oAuth enable the flow of information between cloud platforms in a way that protects the interests of users, as well as that of the platforms. APIs aren't just about developers building apps, they are also about users enhancing their own overall experience, on their terms—moving beyond the platform owners single UX vision.

**Diversity & Platform Balance**  
I just can't imagine any single company, in 2015, thinking they have single UX vision, and nobody could possibly contribute to that, from an outside perspective. As a product owner, I would love to get as much input from my community regarding the next generation UX, because in the end, it is ultimately up to me what I incorporate into the roadmap, what are best practices in the API community, and ultimately which apps get certified, showcased in the application gallery, and pushed to end-users. When you operate a global platform like WhatsApp you can't address the diverse needs of end-users over time, around the globe, without the help of users augmenting and evolving exactly what is the WhatsApp UX vision. When you are a white dude in the U.S., you just aren't going to understand the UX for women of color in Africa, I don't care how much vision you think you have.

**In Conclusion, Just Shy of Innovation**  
I’m going to end this there. I’m not even going to pull out the innovation card and talk about all the potential for new ideas, a WhatsApp API could generate. I’ll stick with talking about a handful of common building blocks used across the space to mitigate the UX concerns that API driven platform providers have, and pointing out how narrow the UX concerns are. There are plenty of other reasons for having an API, beyond just developers building apps, that will mess with your UX vision.

Users should have a choice to use their preferred messaging channel (WhatsApp) in any platform they depend on, and be able to manage their experience using 3rd party services of their choice. With an informed approach to API management, you can do all of this, giving end-users more, without compromising the overall WhatsApp UX—you can carefully craft and evolve it, with the help of your community. As it stands, WhatsApp has an API, it is what the mobile app uses, and I’m pretty sure that WhatsApp does provide access to 3rd party partners of their choice, they just don't open that up to public knowledge—they are already doing what they say they don't do, they just aren't open and transparent about the process.

It doesn't take much to launch a proper developer portal, with the essential building blocks like documentation, code samples, and self-service registration. You don’t have to give production access to every new developers—make them build something cool, and prove themselves first. That way you only deliver only the best to WhatsApp users. People are already building unsanctioned apps on WhatsApp (just Google WhatsApp API), not having an API isn’t stopping these potentially bad seeds from entering the UX paradigm, there is just no sanctioned place for users to go, when they are looking to extend, augment, or make their WhatsApp work with other services they use, or assume control over their own account and data.

Alright, I'll stop ranting there. I know I’m biased, but if you have a popular public mobile application in 2015, there is no reason you shouldn't have at least a public face of your developer program, to answer these question. In the end you are just hurting your own operations, as well as the overall experience for your users. Additionally, I just can't see how the leading position of any mobile is defensible for very long without an API. Things are just too volatile, and end-users are just too picky, someone will always come along and disrupt you, unless you can shift to deliver the UX consumers are demanding.