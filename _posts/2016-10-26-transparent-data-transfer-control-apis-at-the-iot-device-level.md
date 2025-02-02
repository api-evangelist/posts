---
layout: post
title: Transparent Data Transfer Control APIs At The IoT Device Level
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-device-data.png
atomdate: 2016-10-27T00:00:00.000Z
tags:
  - Data
  - APIs
---
I am diving deep into the DJi drone developer platform, and one of the elements of [the DJi Drone Guidance API that caught my attention was the data transfer control methods](https://developer.dji.com/guidance-sdk/documentation/introduction/index.html#api). In this situation, the transfer control methods are designed for just the data being sent as part of the drone guidance systems, but I think it provides a blueprint that can be used across almost any IoT device connectivity.

DJI provides four methods for managing the drone data transfer control:

*   **Start Transfer -** Inform guidance to start data transfer.
*   **Stop Transfer -** Inform guidance to stop data transfer.
*   **Release Transfer -** Release the data transfer thread.
*   **Wait For Board Ready -** Set callback function handler for hen data from guidance comes, it will be called by data transfer thread.

The "wait for board ready" method acts as a sort of web hook, that can notify any application build on the API that data is now being transferred, opening up the possibilities for notifying a device owner, and operator that data is being transferred. To me, this can be a critical aspect of building trust that our devices have our best interests in mind, providing some essential transparency in the data layer of the IoT space.

Data transfer control APIs for IoT devices like this will not ensure healthy data practices. This implementation is designed to provide transfer control capabilities to the developer, it is now up to the developer to include the end users in this process. Many current mobile application business models do not incentivize this type of transparency, as you do not want end users, and often times 3rd party developers involved in data gathering, and revenue generation this valuable "exhaust" of Internet-connected devices.

I am hoping this evolves and changes as the Internet matures, and the number of connected devices increases. We need transparency at the device data transfer level, and we need all humans involved / impacted to be a literate, active, and will participate in the IoT data flow. I know many entrepreneurs think the end user isn't sophisticated enough to be involved, but this is more about your desire to keep any value generated for yourself than it is about the end-users capacity to grasp this stuff.