---
published: true
layout: post
title: A Postman Collection For Updating a Collection Host, Path, or Query Parameter
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_11_30_at_5.23.57_pm.png
author:
  name: kinlane
tags:
  - Collections
---
Sometimes I need to do bulk updates to Postman collections and there is no better way to automate this than to use a Postman Collection that uses the Postman API—inception level stuff, so be careful ;-). [I have setup a dedicated public workspace where I am building out these utility type operational level collections](https://www.postman.com/api-evangelist/workspace/collections/overview) that help me manage the API lifecycle out ahead of what the Postman GUI is capable of doing. Some of the things I am doing will eventually make its way to the Postman UI, but some of them will not. Either way, I am too impatient to wait, and one of the things I love about Postman is that I can hack my way forward through just about any situation using the Postman API. 

Building on my base collection for pulling and updating collections, [I added five specific requests that will help me conduct a find and replace on each API request host, path, and the query parameter key, value, and description](https://www.postman.com/api-evangelist/workspace/collections/documentation/35240-6231fa2a-fb8a-45f1-96a1-f1a6e235362e). There are other dimensions I am looking to cover with future requests, but this gets me what I need right now. You simply add a value to the request for a find and replace value, make sure you’ve entered a collection ID (pulled from URL or info tab), and hit run—it will conduct the appropriate find and replace, and then save the collection using the Postman API. So you can immediately put to use the same collection with the changes you desired.

If you have any questions on the collection for pulling a collection and making changes using the Postman API, feel free to submit a comment for the collection as part of the collection workspace. I’ll be centralizing the evolution of this collection, as well as other collection related collections within this workspace. You can also fork the collection and use in your workspaces, and submit back any enhancements you’d like to see as a pull request. If you have any questions that you don’t want to see in the comments for the collection, feel free to email me at [info@apievangelist.com](mailto:info@apievangelist.com).