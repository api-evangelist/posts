---
layout: post
title: What Will It Take To Sell My API AS A Wholesale Resource
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-connected-network.png
author:
  name: kinlane
tags:
  - My
  - Wholesale
---
I'm continuing my exploration of the possibilities of offering up a wholesale version of an API resource. While wholesale is not an option for all types of APIs, there are a subset of APIs that are more utility in nature and would lend themselves nicely to being sold wholesale to other API providers.

I want to better understand the nuts and bolts of what it will take to offer up APIs in this way, and for this exercise I’m going to explore providing [my recent screenshot API](http://apievangelist.com/2014/01/06/creating-my-own-screenshot-api/ "screenshot API") as a wholesale API that other API providers could resale alongside their own resources. An API provider could have their own news, content or other resources, and decide it would be more cost effective to resell my screen capture API, rather than design, deploy and provide their own.

I have designed, developed and deployed my screenshot API, now what do I need to make it available wholesale?

1.  **Definition** - I'll need to have some sort of API definition in API Blueprint, Swagger or RAML to be able to communicate my interface and underlying data model to other providers in a machine readable way that lets them interface with it, as well as potentially develop other tooling around their resale of my resource.
2.  **Proxy** - I don't think this this one is a requirement, as some providers would prefer to develop their own proxy layer, but providing a proxy harness that other API providers could use to deploy my API, as a resource within their domain would be a nice to have. Providing it in a variety of languages including PHP, Python, Ruby, C#, Java and Node.js would sensible.
3.  **Management APIs** - To support wholesale interactions I would need a set of my own APIs that providers can use to accomplish common API management features like usage volumes, rate limits, and user management if applicable. These services would have to be available as APIs so that providers could seamlessly integrate into their own API management platform.

That is just a few of the elements I think that I would need to serve up my API in a wholesale way. I might think of more needs as I evolve my thoughts on this, and potentially develop a working prototype around my screenshot API.   
  
Using these tools, an API provider could come and sign up for wholesale access, deploy a proxy within their domain, and use the API definition to deploy interactive documentation that was seamless with their own documentation. Next I see two distinct scenarios for user management around wholesale APIs. You don’t want users having to sign up for two separate keys, or even know about the wholesale provider in any way. This is where the management APIs would come in, depending on my business goals that surround my wholesale resources I would employ two user scenarios:

1.  **User Profile Required -** If I wanted to require my API resellers to pass along their user profiles along with API usage I could provide some sort of key translation as part of management APIs and / or as part of the proxy operations. When a new users first uses the API resources, my reseller would have to generate a profile for them in my wholesale system, generating a unique key, and either my system or my resellers would translate keys upon requests. This way I could understand who is using my API resources, and enjoy deeper demographics around API sales.
2.  **User Profile Not Required -** Maybe, as a whole provider I don't care about understanding who uses my API at this granular level, I just want to sell, sell, sell. This way I could provide a much more simplified process that would just require resellers to sign up for a single API key, and all API requests are tracked under this single provider key. Resellers would manage their own user keys, and just hardcode all requests to my API with their wholesale key via their proxy.

I could understand both of these implementations. Some wholesale providers are going to be obsessed with understanding who is using their API, and require their resellers to be transparent and share their API developer profile data. While I personally think this is overkill, and it would be much simpler to just use a single wholesale key for each reseller--I will assume that most wholesale API providers will go this route.

Next steps for this concept is to actually make it work for real. I have the screenshot API as well as some other similar, utility style APIs, that I wil use as my test cases. I use [3Scale API infrastructure](http://bit.ly/13esk6Q) for my API management, so I have [APIs for almost all aspects of my API management](https://support.3scale.net/reference/activedocs). I just need to proxy them on my end, and potentially offer up to my prospective API resellers, giving them access to usage, rate limits and user management.

Right now this is just an idea, an academic exercise, but I see no reason this can't be reality and just like other goods and services in the real-world, companies could sell wholesale version of the API resources, further fueling the growth of the API economy. After making this scenario a little more real, I want to think through what this would look like in an on-premise scenario—no proxy involved.