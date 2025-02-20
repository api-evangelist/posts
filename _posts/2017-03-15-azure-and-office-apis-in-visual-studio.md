---
layout: post
title: Azure and Office APIs in Visual Studio
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_12_at_10.50.56_pm.png
atomdate: 2017-03-15T19:00:00.000Z
tags:
  - Azure
  - APIs
---
[I was reviewing the latest changes with Visual Studio 2017](https://blogs.msdn.microsoft.com/visualstudio/2017/03/07/visual-studio-2017-productivity-performance-and-partners/) and came across the section introducing connected services, providing a glimpse of Microsoft APIs baked into the integrated development environment (IDE). [I've been pushing for more API availability in IDE's for some time now](http://apievangelist.com/2011/06/18/integrated-development-environment-ide-for-apis/), something that is not new, [with Google and SalesForce having done it for a while](http://apievangelist.com/2014/07/03/expanding-the-layer-of-api-discovery-from-within-the-developers-ide/), but is something I haven't seen any significant movement in for a while now.

I have talked about [delivering APIs in Atom using APIs.json](http://apievangelist.com/2015/06/27/apisjson-driven-api-dictionaries-for-use-in-atom-ide-autocomplete-packages/), and have [long hoped Microsoft would move forward with this in Visual Studio](https://apievangelist.com/2014/08/19/bing-developer-assistant-for-visual-studio-delivers-relevant-api-code/). All APIs should be discoverable from within any IDE, it just makes sense as a frontline for API discovery, especially when we are talking about developers. Microsoft's approach focuses on connecting developers of mobile applications, with _"the first Connected Service we are providing for mobile developers enables you to connect your app to an Azure App Service backend, providing easy access to authentication, push notifications, and data storage with online/offline sync"._

In the picture, you can see Office 365 APIs, but since I don't have Visual Studio I can't explore this any further. If you have any insight into these new connected services features in the IDE, please let me know your thoughts and experiences. If Microsoft was smart, all their APIs would be seamlessly integrated into Visual Studio, as well as allow developers to easily import any other API using OpenAPI, or Postman Collections. 

While I think that IDEs are still relevant to the API development life cycle I feel like maybe there is a reason IDEs haven't caught up in this area. It feels like a need that API lifecycle tooling like [Postman](http://getpostman.com), [Restlet Client](https://restlet.com/modules/client/), and [Stoplight](http://stoplight.io) are stepping up to service the area. Regardless I will keep an eye on. It seems likno-braineriner for Microsoft to make their APIs available via their own IDE products, but maybe we are headed for a different future where a new breed of tools helps us more easily integrate APIs into our applications--no code necessary.