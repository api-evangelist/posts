---
layout: post
title: Service Composition for My Screen Capture API
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-composer.png
author:
  name: kinlane
tags:
  - My
  - Screen Capture
---
I now have a pretty simple [screen capture API](http://screen-capture.apievangelist.com/). You can pass it a URL and it gives you back a PNG image file of that website. Meeting my definition of a simple utility API. I use this API in my own platform, capturing what websites and applications look like for reference in stories, and other content.

I want to make this valuable utility API available to a wider audience now. I need to compose some tiers of access to my screen capture API, that makes sense to my business goals and how it will be consumed by a variety of users. So far I’ve come up with five levels of access to my API:

*   **Private / Internal** \- This is where my API is consumer currently, internally my own systems. I need this tier to be unlimited use, no charge, but still tracking on how I am consuming the screen capture API so I can evaluate along with all my other service levels.
*   **Private / Partner -** I have partners who can make use of my screen capture API, I want to offer them special access to my resource, but I still want to track on how they are using the resource.
*   **Public / Free -** To help attract new developers to my screen capture API I want to make open to the public, all you have to do is sign up for a key, and you can make a certain amount of calls in an hour or day, I haven't decided how much yet.
*   **Public / Retail -** Once a user hits a certain amount of screen capture API calls I want to be able to charge a certain rate per call, allowing consumers to use as much as they want, but cover my operational costs, while making a little money on top.
*   **Public / Wholesale -** I also want to be able to sell wholesale instances of the API either deployed within my infrastructure or someone else’s. A company might want access to the screen capture API as part of their stack, but do not have the time to deploy internally.

That represents the five separate ways I want to allow access to my screen capture API. Now I can [configure my 3Scale API infrastructure](http://apievangelist.com/2014/04/12/moving-beyond-my-basic-3scale-api-infrastructure-plan/), define this exact service composition, and the API will handle the rest. When new users sign-up I will route them into one of these service tiers, and manage their access accordingly.

After I get my API management layer configured, I will have to craft a pricing page to educate new users about what type of access is available. In addition to being a post on [API Evangelist](http://apievangelist.com), you can find the story of my [screen capture API over at the research project](http://screen-capture.apievangelist.com/) I’ve setup over on Github.