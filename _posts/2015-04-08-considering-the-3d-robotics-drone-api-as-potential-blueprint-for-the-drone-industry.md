---
layout: post
title: >-
  Considering The 3D Robotics Drone API As Potential Blueprint For The Drone
  Industry
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/3d-robotics/3d-robotics-drone.jpg
author:
  name: kinlane
tags:
  - Industry
  - Blueprint
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/3d-robotics/3d-robotics-drone.jpg)](http://3drobotics.com/home-2014/)

As my Internet of Things (IoT) research continues, I’m applying much of my API thinking from the mainstream API space to the world of IoT. A couple weeks ago I stumbled across the [3D Robotics Drone API](http://api.3drobotics.com/swagger-ui/), which to my surprise, was documented using a Swagger specification, providing a machine readable definition of the API, which helped me quickly get up to speed on what the Drone API delivers.

I haven't put much thought into the detail for any drone APIs, something that has been adjacent to my mainstream research for over a year now, but I did have some basic opinions about what a drone API could have. So, when it comes to potential resources, I have to say the 3D Robotics Drone API delivers in all earlier areas I had been considering--with five main endpoints:

*   **The Vehicle API** \- Exposes operations for browsing and searching lists of vehicle, and retrieving single vehicle, including airspeed, ground speed, and battery.
*   **The Mission API -** Exposes operations for browsing and searching lists of mission, and retrieving single mission.
*   **The Administrator API** \- Access to administrative resources including debugging, logging, and flight simulation.
*   **The User API -** Access operations for browsing and searching lists of user, and retrieving single user.
*   **Authentication** \- Session operations for logging in and out, and identifying user.

The vehicle stuff I expected, but I was pleasantly surprised to see the resources around logging, and specifically the mission API. When it comes to transparency, and accountability around drone activity, I feel pretty strongly that these types of resources will be essential, and eventually will be mandated by government entities. I’m glad that 3D Robotics is ahead of the game, in providing API driven resources that deliver in this way.

What I didn’t expect, when I stumbled across the user and mission management APIs, was the social, online layer. As part of the 3D Robotics Drone API platform, the company offers [DroneShare](http://www.droneshare.com), where you can publish your user profile, and your [missions](http://www.droneshare.com/mission). I was coming at this from the angle of a potential industry regulation tool, or possible drone pilot resource management—I didn't think it would be done as social, and potential entertainment platform.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/3d-robotics/Droneshare-Screnshot.png)](http://www.droneshare.com/)

Here is the description from the site:

> _"This is the beta release of Droneshare. Droneshare is a mission viewing and sharing application that works with ground control applications to let you share your mission data. This project is open source, if you would like to improve it, it is probably best to start at our github repo."_

This is why I thoroughly enjoy doing my research, because it expands my understanding of specific business sectors that APIs are touching. While I was discovering DroneShare, I also learned about the existence of the "[Don’t Fly Drones Here](https://www.mapbox.com/drone/no-fly/)” project, from Mapbox, which provides a database resource of restricted zones, where you can’t fly drones. Which brought me back to my original thoughts, regarding what resource we will need to keep the drone industry sane, rather than just focusing on social and entertainment.

Ultimately I see a lot of patterns here, that reflect several possible drone futures we are potentially crafting. I see social networks, where drone pilots compete for the best jobs, based upon their missions, and equipment usage. I also see potential for entertainment--think about the networks that have arisen for watching people play videogames, and competitive gaming platforms, but apply that to the world of drones. I also see potential elements of government regulation, where the FAA and other agencies, require drone pilots to log their equipment, and activity, logging all drone flights, and potentially sharing publicly via drone social networks to increase accountability.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/3d-robotics/3d-robotics-logo.png)](http://3drobotics.com/home-2014/)

In the end, I’m thinking that the [3D Robotics Drone API](http://api.3drobotics.com/swagger-ui/) provides a potential blueprint that could be used by other drone manufacturers, and cloud platforms that serve the drone industry. The 3D Robotics Drone API pattern could be held up as an open specification, that the government could weigh in on, making sure the proper regulatory resources are available, and that drone activity can be accessed, and audited via a secure API, available via the Internet.

The world of drones is fascinating to me. On one hand, the security and privacy considerations scare the shit out of me. On the other hand, they are endlessly fascinating to me, and ultimately I’m going to be purchasing a drone, so I can play with more, and understand better—its a business expense you know!

Man, I have a great career. I'm so privileged to be doing what I do—even if our world is under a threat of attack by drones!