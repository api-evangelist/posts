---
published: true
layout: post
title: Automating the Management of Postman Collections Using a Postman Collection
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_11_23_at_9.35.47_pm.png
author:
  name: kinlane
tags:
  - Automation
  - Collections
---
I am managing more collections via hundreds of different workspaces lately. As part of my work I am needing to make bulk changes to collections based upon a variety of properties. Sometimes I need to find and replace variables, and other times I need to rewrite or append to the descriptions for each collection. Whil I am sure eventually there will be capabilities to do some of this via the Postman interface, I find creating maintenance collections that use the Postman API to do what I need is the quickest way to get what I want, without having to wait for the Postman road map to catch up to my work.

I have a whole list of automated changes I want to make to Postman collections that I am generating from OpenAPI definitions, and to help me quickly work through this list I wanted to create a base collection that I could use to augment with common and some unique scripts for making changes to any collection, and then save the results back using the Postman API. [You can find this collection in my public workspace for managing my collection work](https://www.postman.com/apievangelist/workspace/collections/documentation/35240-1eb1d94c-0f99-444e-bcd7-d0f146c1be8d), where you can fork it and apply to the changes you need to make to collections. You are also welcome to just wait until I get specialized collections built, or feel free to submit a suggestion for a variation that maybe I haven’t considered.

If you have any questions on the collection for pulling a collection and making changes using the Postman API, feel free to submit a comment for the collection as part of the collection workspace. I’ll be centralizing the evolution of this collection, as well as other collection related collections within this workspace. You can also fork the collection and use in your workspaces, and submit back any enhancements you’d like to see as a pull request. If you have any questions that you don’t want to see in the comments for the collection, feel free to email me at [info@apievangelist.com](mailto:info@apievangelist.com).