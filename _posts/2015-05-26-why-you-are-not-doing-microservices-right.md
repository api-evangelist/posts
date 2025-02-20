---
layout: post
title: Why You Are Not Doing Microservices Right!
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Microservices
  - Micro
---
Yeah, I know, it is a click-bait title. My goal is to not flame the haters, but educate everyone involved, both the people looking to learn about microservices, and those who are practicing microservices, so I'm hoping you will forgive me--my goal is not page views.

[I'm sticking to my goal of not making microservices a regular thing I talk about](http://apievangelist.com/2015/04/10/on-apis-and-microservices/), but I wanted to share some observations after listening to folks talk at Gluecon last week--a week that was full of microservices love (and hate). In the past, I mentioned that I received a handful of emails, and DMS from folks letting me know I'm not doing microservices, and after Gluecon I think I have a beginning list of why I think people generally are telling me I'm doing it wrong.

*   **Tooling** - People tend to identify with the tooling they use, and deeply associate the function with the tool. So if I don't use Puppet or Chef, I'm not orchestrating. If your not using Jenkins, your not doing continous delivery, and so on. This is dangerous for microservices storytelling, but also is something that will continue.
*   **Vendor** - This is probably the most egregious reason I see people telling others they are doing microservices wrong, and is somewhat akin to the tooling item, but is really just rooted in selling you something. You will never do it right, unless you are their customer, so don't worry about it.
*   **Scope** - You just aren't doing it at the scope someone else is doing it. Microservices is something large enterprises do, not small companies, or individuals. You have to be operating across many availability zones, many servers, etc. Horseshit. Microservices can be done at any scope, don't listen to them.
*   **Completeness** - You are only doing some of the aspects of microservices. Maybe you don't need to orchestrate across many operational zones, and your traffic looks very different than some of the usual suspects. Microservices is very seldom a complete picture, it is more about doing what works for you, cherry picking the valuable items you can apply in your world, not any complete definition.
*   **Incomplete Info** - Someone just read a single blog post you wrote, and hasn't been following the series, asked any questions, and just make assumptions about a single thing you wrote. While I feel you should make each post as complete as possible, the responsibility is on the reader to do their homework - Bwahahaha! yeah right, pundits will never do that.

So far these are the biggest reasons that I've extracted from people me telling me I am not doing it right. Ultimately it comes down to power and control, which I saw play out with SOA, REST, Linked Data, and other areas of "API". They either want to make you feel small, or not cool because you aren't using the tools they are using, or they just want you to buy their snake oil. 

In the end, for me, microservices are just a new storytelling package. They are mostly marketing, as many of the skeptics like to point out, and the companies who are truly doing microservices, will care about sharing their real-world stories, and work overtime to help you understand--there are a handful of them out there, like [Runscope](https://www.runscope.com/) and [Iron.io](http://www.iron.io/). 

For me, I will be focusing on the moving parts of microservices, which is why you'll see me talking about API design, deployment, management, testing, monitoring, security over just "microservices" umbrella. I could easily attack many of the pundits who challenge me, and say you aren't doing API management, evangelism, monetization, or other critical areas right, but why would I? Where does that get us?

As usual, if you have any questions, let me know how I can help. I'm happy to share, as I try to make sense of all of this. I'm adding some new research sites to support the conversation.