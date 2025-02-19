---
layout: post
title: The Amazon Console Came After The API And CLI
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/aws_console.png
atomdate: 2017-02-02T17:00:00.000Z
tags:
  - CLI
  - Amazon
---
I've spent a lot of time thinking about the Amazon Web Services ecosystem lately. [I've gone through and generated OpenAPI Specs for the majority of their APIs, as well as an APIs.json index for the collection of valuable services](http://amazon.web.services.stack.network/). I have also written about [the relationship between the Amazon API and CLI](http://apievangelist.com/2017/01/05/what-i-learned-crafting-api-definitions-for-66-of-the-amazon-web-services/), and while doing this research I had jotted down thoughts about their approach to the Amazon Console.

For most API providers the API is a secondary thing, implemented after their website, applications, and even mobile applications in many situations. When AWS launched in 2006 they were only API and CLI, and after a couple of years, they got to work on providing their AWS Console, which plays a pretty significant role in working with the platform. The AWS console is pretty utilitarian, and lacking in a lot of UI / UX polish, but it plays an important role in working with the platform and is generally in sync with what features are available via the API and CLI.

I don't think there are any major lessons here, I just think it is interesting what has unfolded at Amazon, compared to how many other companies invest so much in the SaaS, and user interface portions of their operations, where AWS has definitely focused more heavily on the CLI and API, with the console only recently coming into focus. I do not think there is any 100% right way to do this, but I think making sure there are parity and consistency between what is available via a UI, and the API and CLI are important.

AWS doesn't always accomplish keeping all of this in sync, but you can see they work hard at it. Most times the CLI and API docs are side by side and even interlinked, and with some of the services, they provide you with a link in the developer area to the AWS Console portion for a specific service. I think whichever comes first for your company, the most important part of this is that you are constantly stepping back, and thinking of the relationship between your human interfaces and your programmatic interfaces, and considering where the gaps are, and how you can better weave all of your offerings together into a more coherent solution.