---
layout: post
title: API Environment Variable Autocomplete And Tooltips In Postman
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/autocomplete.gif,qx38712.pagespeed.ce.mdv9wuhtbw.gif
atomdate: 2017-03-16T16:00:00.000Z
tags:
  - Postman
  - Environment
---
The Postman team has been hard at work lately, [releasing their API data editor](http://blog.getpostman.com/2017/02/28/introducing-the-new-data-editor/), as well as [introducing variable highlighting and tooltips](http://blog.getpostman.com/2017/03/07/autocomplete-and-tooltips-for-variables-are-here/). The new autocomplete menu contains a list of all the variables in the current environment, followed by global variables, making your API environment setups more accessible from the Postman interface. Introducing a pretty significant time saver, once you have your environments setup properly.

This is a pretty interesting feature, but what makes me most optimistic, is when this approach becomes available for parameters, headers, and some of the data management features we are seeing emerge with the new Portman data editor. It all feels like the UI equivalent of what [we've seen emerge in the latest OpenAPI 3.0 release](http://apievangelist.com/2017/01/25/the-openapi-specification-version-30-highlights/), helping us better manage and reuse the schema, data, and other bits we put to use across all of our APIs. 

Imagine when you can design and mock your API in Postman, crafting our API using a common vocabulary. Reusing environment variables, API path resources, parameters, headers, and other common elements already in use across operations. Imagine when I get tooltip suggesting that I use [Schema.org vocabulary](http://schema.org), or possibly even RFCs for a date, currency, and other common definitions. Anyways, I'm liking the features coming out of postman, and I'm also liking that they are regularly blogging about this stuff, so I can keep up to speed on what is going on, and eventually cover here on the blog, and include in my research.