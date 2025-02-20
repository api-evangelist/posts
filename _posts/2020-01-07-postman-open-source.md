---
published: true
layout: post
title: Postman Open Source
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_open_source_philosphy.jpg
author:
  name: kinlane
tags:
  - Open Source
---
I get asked a lot [if Postman is open source](https://www.postman.com/open-philosophy/). I get told ocasionally that people wish it was open source. I have to admit I didn't fully grasp how open Postman was until I helped work on the new open source philosophy page for Postman. While the Postman application itself isn't open source (it is built on open source), the core building blocks of Postman are open source, shifting my view of how you can use the application across operations. Expanding Postman usage beyond just being a solitaire desktop applicaton, and turning it into a digitally scalable gear on the API factory floor.

Postman as a desktop application is not open source, but here are the core components that are open source, making Postman something you can run anywhere:

*   [**Postman Runtime**](https://github.com/postmanlabs/postman-runtime) - The core runtime of Postman that allows you to run collecctions, including requests, scripts, etc anywhere, extending the work that gets done within the application to anywhere the runtime can be installed and executed.
*   [**Postman Collections Format**](https://github.com/postmanlabs/openapi-to-postman) - The collections you save and share with Postman are all open source and can be shared, exported, published, and used as a unit of currency within any application or system, further extending the reach of the platform.
*   **[Newman](https://github.com/postmanlabs/newman)** - Command-line tool for running and testing a Postman Collection as part of any pipeline, making Postman collecitons a unit of compute that can be baked into the software development life cycle, and leveraged as API truth wherever it is needed.
*   **[Postman Collection SDK](https://github.com/postmanlabs/postman-collection)** - SDK to quickly unlock the power of Postman Collections format using JavaScript, allowing you to create, manage, and automate how collections are defined and put to work across a platform withoiut depending on the application.
*   [**Postman Code Generators**](https://github.com/postmanlabs/postman-code-generators) - Convert Postman collections to usable code in more than 20 different programming languages, generating simple client scripts for consumers that are defined by the Psoitman collections used as the code generators definition.

I am a big fan of open source. I get the power of it across the API landscape. I also understand the benefits of commercial implementations. I've spent a lot of time thinking about the pros and cons of open vs closed across the API landscape. I do not think open always equals good, and I don't think closed always equals bad. I think there is a balance of open and commercial offerings that can be struck to find the optimal conditions within any industry. I think Postman is striking this balance by leveraging both open and closed source offerings to build a viable business, but done in a way that allows other businesses to bake open source components and workflows into their operations.

Honestly, over the last decade I've developed open fatigue from being associated with some faux open source projects, misleading open API efforts, adn damaging open data missions. I haven't lost my belief in open, but I have grown tired of open being used to manipulate the landscape, and I am extremely wary of people who wield open as part of their marketing. I feel good about the balance we are striking at Postman, and I will continue to workk to incentivize and incite more open processes, content, and components at Postman, allowing us to continue baking the goodness that is possible within the application into our infrastructure, withouit concern for lock-in.