---
layout: post
title: Google And AWS APIs Available In Visual Studio And Eclipse IDEs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/google_visual_studio_ide_apidiscovery.png
atomdate: 2017-04-25T16:00:00.000Z
tags:
  - IDE
  - AWS
  - APIs
  - ai
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/google_visual_studio_ide_apidiscovery.png)](https://cloud.google.com/tools/visual-studio/docs/find-library)

I'm always learning from the API pioneers, and trying to understand how they are pushing forward the API conversation. I'm neck deep in [profiling AWS APIs](http://amazon.web.services.stack.network/), as well as G[oogle APIs](http://google.stack.network/). One common pattern I'm seeing across both providers is the support for API access in both Visual Studio and Eclipse IDEs. 

Google is helping developers find APIs within both of the leading IDE platforms. They have long had some [Eclipse plugins for their API infrastructure](ttps://cloud.google.com/eclipse/docs/), but I recently noticed [they also have a pretty robust solution for Visual Studio developers](https://cloud.google.com/tools/visual-studio/docs/find-library). The Google APIs .NET library is made available in Visual Studio using the NuGet package manager, opening up access to a significant portion of their API stack.

Amazon also provides [Eclipse](https://aws.amazon.com/documentation/awstoolkiteclipse/) and [Visual Studio](https://aws.amazon.com/documentation/awstoolkitvisualstudio/) tooling as part of their [AWS toolbox](https://aws.amazon.com/tools/). Opening up access the AWS API catalog to developers in the IDE they are are using to build their applications and craft their system integrations. I don't know how much time you've spent looking through the AWS catalog, but it can be a timesucker--giving me access to APIs in my native environment makes a lot sense.

I feel like API innovation in the IDE is right there with API integration into our continuous integration workflows, and the usage of Github. You should haven't to depend on Google to find your APIs, they should be right at your fingertips in your IDE, no matter whether they are for your applications, or for managing your API operations. All your internal, and 3rd party APIs should be baked into your development, and continuous integration environments, allowing you to orchestrate exactly the application experience, and life cycle you desire. This is just one of the fronts I'd like to see API discovery evolve in coming years, reaching developers with new APIs and paths during design and development, as well as across continuous integration stages of our work.