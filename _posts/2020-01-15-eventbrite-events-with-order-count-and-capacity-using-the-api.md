---
published: true
layout: post
title: Eventbrite Events with Order Count and Capacity Using the API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/https__cdn.evbuc.com_images_85596975_293025926021_1_original.png
author:
  name: kinlane
tags:
  - Events
---
My boss asked me if I could build [a Postman collection that would pull our future events from Evenbrite and display ticket counts for each individual event](https://documenter.postman.com/view/35240/SWLk3QwT?version=latest). So I got to work hacking on [the Eventbrite API](https://www.eventbrite.com/platform), learning each of the events API paths, stitching together what I needed to pull together my Postman collection for this new API capability. I’m a big fan of not just creating reference collections for different APIs like the Eventbrite API, but also creating individual capability collections that use one or many API requests to deliver on a specific business objective.

I was able to craft my Postman API capability collection using two Eventbrite APIs, getting me the data I need to satisfy what my boss needed to get the updates he needed.

*   **[Events By Organization](https://www.eventbrite.com/platform/api#/reference/event/list/list-events-by-organization)** \- Pulls all of the future active events for our Eventbrite organization.
*   **[Event Orders](https://www.eventbrite.com/platform/docs/orders)** \- Pulling the orders fore each individual event, pulling the relevant information needed to assess each event.

This Eventbrite event order Postman capability collection only has one request in it, but I call the second API multiple times using a test script for the request. So in the end I’m making multiple API calls using a single Postman request, allowing me to get at what I need for each future event across multiple APIS--abstracting away some of the complexity. [I have published the collection as a Postman template which you can access via the Postman documentation I’ve published](https://www.eventbrite.com/platform), but you will need to add your own Eventbrite token and organization id to actually execute. Once you added these properties entered you can click send and see a listing of events with ticket counts as well as maximum capacity for all the future events using the Postman visualizer tab.

I’ve added this Postman capability collection [my list of individual API collections I’ve been building.](https://github.com/api-evangelist/capabilities) Providing a list of the common things I need to accomplish across the different platforms I depend for my operations. I’m looking to keep each of these collections as simple as I possibly can doing one thing well, reflecting my view of how APIs should work. Helping reduce friction when it comes to putting APIs to work, while also making APIs more accessible to non-developers by providing simple sharable, executable, API capabilities that help them accomplish common everyday tasks they need to get done.