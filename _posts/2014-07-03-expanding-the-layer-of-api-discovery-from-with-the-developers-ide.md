---
layout: post
title: Expanding The Layer Of API Discovery From With The Developers IDE
url: >-
  http://apievangelist.com/2014/07/03/expanding-the-layer-of-api-discovery-from-with-the-developers-ide/
image: https://s3.amazonaws.com/kinlane-productions2/eclipse/eclipse-ide-logo.jpeg
author:
  name: kinlane
tags:
  - Discovery
  - IDE
  - Discover
  - Developers
---
Much like API [design](http://design.apievangelist.com) and [integration](http://integration.apievangelist.com), the world of [API discovery](http://discovery.apievangelist.com) is heating up in 2014. We are moving beyond the API directory as our primary mode of API search, in favor of a distributed approach using APIs.json, and supporting [open source search engines like APIs.io](http://apievangelist.com/2014/07/03/an-open-source-distributed-api-evangelist-engine/). Another area of API discovery I’ve been [watching for a while](http://apievangelist.com/2011/06/18/integrated-development-environment-ide-for-apis/), and predict will become an important layer of API discovery, will be via the Integrated Development Environment (IDE) plugin.

**Open Source SalesForce API IDE Plugin**  
SalesForce just [announced they have just open sourced their API IDE plugin on Github](https://developer.salesforce.com/blogs/engineering/2014/07/new-eclipse-plugin.html), after developing on it since 2007, when [APEX](http://www.salesforce.com/us/developer/docs/apexcode/index_Left.htm) was born. The plugin is old, but is very much in use in the SalesForce ecosystem, [something I’ve written about before](http://apievangelist.com/2013/02/04/salesforce-discusses-its-eclipse-plugin-release-approach/). They will be accepting pull requests on the main branch, looking to improve on the codebase, while looking to also maintain a community branch, as well as encouraging you to establish your own branch.

**Does Your API Have An IDE Plugin?**  
How far along are you on your own APIs Eclipse Plugin? Are you trying to reach enterprise develop/kinlane-productions2/ource? You should probably look at the pros and cons of providing your API developers with a plugin, for leading IDEs. With the open sourcing of SalesForce API IDE plugin, [you can reverse engineer their approach](https://github.com/forcedotcom/idecore) and see what you can use for your own APIs IDE plugin—smells like a good opportunity to me.

[![](https://s3.amazonaws.com/kinlane-productions/salesforce/apex_doc_plugin_menu.jpg)](https://developer.salesforce.com/blogs/engineering/2014/07/new-eclipse-plugin.html)

**Opportunity For General Or Niche API IDE Plugins**  
Not that using SalesForce open source IDE would be the place to start for this kind of project, but I think there is a huge opportunity to develop API focused IDE plugins, for top developed environments, across many popular APIs. Developers shouldn’t have to leave their development environments to find the resources they need, they should be able to have quick access to the APIs they depend on te most, and discover new API resources right from their local environment, aking IDE plugins an excellent API discovery opportunity.

**Native Opportunities For IDE Platforms**  
I’ve seen a lot of new development environments emerge, many are web-based, with varying degrees of being “integrated”. I think that IDE developers can take a lead from [Backend as a Service (BaaS) providers](http://baas.apievangelist.com/companies.html) and build in the ability to define an integrated stack of API resources, right into a developer's web, mobile, or Iot development environment. If you are building a platform for developers to produce code, you should begin baking in API discovery and integration directly into your environment.

All I do as the API Evangelist, is shed light on what API pioneers like SalesForce are up to, and expand on their ideas, using my knowledge of the industry--resulting in these stories. SalesForce has been doing APIs for 14 years now, and the IDE has been part of their API driven ecosystem for the last seven years. I think their move to open source the technology, is an opportunity for the wider API space to run with, by helping improve the community SalesForce API IDE plugin, but also apply their experience, and legacy code to help evolve and improve on this layer of API discovery, available within the IDE.