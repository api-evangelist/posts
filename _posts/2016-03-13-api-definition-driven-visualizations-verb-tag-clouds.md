---
layout: post
title: 'API Definition Driven Visualizations: Verb Tag Clouds'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/tag-cloud-verb-sms.png
tags:
  - Cloud
  - Visualizations
  - Visualization
  - Definition
---
[I am playing with different ways of exploring APIs](http://apievangelist.com/2016/03/08/playing-with-concepts-around-simplifying-the-api-docs-that-are-generated-using-api-definitions/), building on documentation solutions like [Swagger UI](https://github.com/swagger-api/swagger-ui), [Lucybot Console](https://github.com/lucybot/lucy-console), and [Slate](https://github.com/tripit/slate). I want to push the boundaries of how we document, tell stories, and understand our APIs. I'm playing with two different formats, one is driven using Jekyll + Liquid, and the other are more embeddable JavaScript editions. I haven't hit on anything groundbreaking, but I am having fun breaking up the API definitions of common APIs, and organizing them for different experiences.

This weekend I took [my API Stack tag cloud](http://theapistack.com/tags.html), and made it driven by API collections defined using APIs.json and OpenAPI Spec. Instead of driving it from a simple tag JSON file, I wired it up to the APIs.json for each of my research projects, and it loops through each API that is indexed, finds their OpenAPI Spec, and uses various elements to publish as tags.

[First I applied to my SMS research, to help me understand the verb usage across the APIs](http://sms.stack.network/apisjson/verb-tag-cloud/):

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/tag-cloud-verb-sms.png)](http://sms.stack.network/apisjson/verb-tag-cloud/)

Then I wanted to scale it, and [see what the tag cloud would look like when applied to a larger collection:](http://kinlane.github.io/indie-edtech-data-jam/apisjson/verb-tag-cloud/)

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/tag-cloud-verb-indie-collection.png)](http://kinlane.github.io/indie-edtech-data-jam/apisjson/verb-tag-cloud/)

I'm not sure if these visualizations offer me any value, but it gets me thinking about APIs at the macro level, considering different ways to slice and dice the information available as part of any of the API's indexed. The verb tag cloud is extracted from an API I have that returns the verb count for any APIs.json collection, which gives me one possible data point to consider when quantifying how open, or closed an API is. Its not always constant, due to the wide variety of ways people design their APIs, but when you see an API that is all GET, there is good chance they are pretty tight with their resources.

As a quick next step, [I also connected it up to the tags applied across all the OpenAPI Specs indexed, looking a different slice of the surface area of APIs](http://sms.stack.network/apisjson/tag-cloud/):

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/tag-cloud-sms.png)](http://sms.stack.network/apisjson/tag-cloud/)

I'm just iterating through the possibilities, and along the way creating an API, Liquid, and JavaScript version to each approach. We'll see where I go with all of this. I am hoping eventually I hit on a killer approach, or at the very least, a whole toolbox of API definition driven visual API elements, that can be used across documentation, and storytelling around what is possible with an API.