---
layout: post
title: Airmap&#039;s API Enabled Digital Notice And Awareness System
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_12_at_5.33.25_pm.png
atomdate: 2017-03-13T22:00:00.000Z
tags:
  - Awareness
  - Digital
---
I am spending time learning more about what [Airmap](https://www.airmap.com) is doing with their [digital notice and awareness system](https://www.airmap.com/stakeholders/). I first [learned about what Airmap was up to when I learned they were behind the notifications of national parks, and forest fires](http://apievangelist.com/2016/08/05/airmap-is-positioning-itself-to-be-a-critical-api-broker-for-the-drone-industry/) that displayed via the iPhone enabled radio controller for my [DJI Phantom 3 Pro drone](https://www.dji.com/phantom-3-pro). I found it to be a pretty slick way to notify me of issues with the drone, my radio signal, and the environment around me, so when I came back to civilization I set out researching more about what Airmap does, staying in tune with what they are up to ever since.

Now, Airmap's digital notice and awareness system caught my attention: _AirMap’s Digital Notice & Awareness System works by sending an encrypted digital flight notice from a drone operator to a secure airspace management dashboard accessible by airspace authorities._ Moving this beyond just the drone operator getting notifications about device or environmental conditions based upon my latitude, longitude, and elevation. This system allows for an event driven notification system to be put in place between drone operator(s) and the cloud, modeling an airplane flight control system, but for the drone universe. 

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_12_at_5.33.25_pm.png)](https://www.airmap.com/stakeholders/)

For me, this is just one possible control system for drones--a cloud, mobile, and device based flight control system. I'm thinking about movie production, agricultural, mining, disaster, and many other types of control systems. [Airmap provides you with some of the APIs you will need to develop a drone platform and/or application(s) that will deliver in these areas](https://developers.airmap.com/):

*   **[Status API](https://developers.airmap.com/reference#status-api-overview)** - Provide nearby airspace information, including advisories, and notice requirements.
*   **[Airspace API](http://developers.airmap.com/reference#airspace-api-overview)** - Interact with the surrounding airspace including its obstacles, rules, and requirements.
*   **[Flight API](http://developers.airmap.com/reference#flight-api-overview)** - Create and query flights, verify a pilot meets flight requirements, and provide digital notice.
*   **[Pilot API](https://developers.airmap.com/reference#pilot-api-overview)** - Manage a pilot's profile, preferences, and provide identity verification.
*   **[Aircraft API](https://developers.airmap.com/reference#aircraft-api-overview)** - Information about drone manufacturers, models, and metadata.
*   **[Maps](http://developers.airmap.com/reference#vector-tiles)** - Provides a TileJSON spec map style for use with MapBox GL.

I'm taking these APIs and including them in my drone API research. Next, I'm taking what I've learned about machine learning and API enabled cloud pipelines and get to working mapping out some of the common blueprints for video production pipelines, and data processing workflows. I am looking to identify some common ways that AWS and Google cloud infrastructure can be seamlessly mapped to Airmap, and other drone enablement solutions--providing the next generation digital notice and awareness systems like Airmap is doing.

I am enjoying staying in tune where Airmap is headed with their platform. They have identified a very interesting and important layer to the emerging world of drones. Providing the API for tracking for airspace, aircraft, pilots, and their flights is a super smart approach to providing APIs, as well as leading the charge when it comes to information, advisories, and notices in the real world where drones are operating. This space fascinates me, as well as the production, and post-production API enablement when it comes to processing the video, images, and data these fascinating devices generate.