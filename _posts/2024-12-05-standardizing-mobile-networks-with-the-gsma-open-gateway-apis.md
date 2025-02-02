---
published: true
layout: post
title: Standardizing Mobile Networks with GSMA Open Gateway APIs
tags:
  - GSMA
  - Networking
  - Telcos
  - Telecommunications
  - Standards
  - Industries
image: >-
  https://kinlane-productions2.s3.us-east-1.amazonaws.com/gsma/open-gateway-initiative-gsma-17330.jpeg
---
I recently sat down with [Henry Calvert, Global Head of Future Networks at the GSMA](https://conversations.apievangelist.com/sessions/2024-12-05-henry-calvert-gsma.html) about their [Open Gateway suite of API for the telecommunications and mobile networking industry](https://www.gsma.com/solutions-and-impact/gsma-open-gateway/). They reached out to me for a conversation, but the APIs were already on my stack of industry API standards to profile, so I appreciated the nudge from the GSMA. I was already working on the diff between GSMA and TM Forum, so this was a good opportunity to roll up my sleeves and learn more.

Here is the breakdown of the APIs included with GSMA's Open Gateway, providing a pretty rich set of APIs for making mobile networks more visible and tangible.

### Anti Fraud

- **Call Forwarding Signal** - Determine if a specific mobile Phone Number has an active call forwarding setup.
- **Device Roaming Status** - Checks whether a certain user device is roaming and if so, the country it is in.
- **Device Roaming Status Subscriptions** - Receive notifications if the user’s device roaming status changes.
- **KYC Fill-In** - Request and receive information that has been verified by the end user’s Mobile Operator in their KYC records.
- **KYC Match** - Compare the information the API customer has for a particular user with that on file and verified by the user’s Mobile Network Operator in their own KYC records.
- **Number verification** - Verifying that the provided mobile phone number is the one used in the device.
- **One Time Password** - Delivers a short-lived one-time password to a mobile phone number via SMS.
- **SIM Swap** - Check the last date that the SIM card associated with a mobile phone number has changed.
- **SIM Swap Notification Subscription** - Enables subscription to notifications related to SIM Swap events, reporting a change in the SIM card associated with a mobile phone number.
- **Scam Signal** - Allows businesses to protect their customers from impersonation scams, particularly Authorized Pushed Payment (APP) fraud.

### Location

- **Device Location Verification** - Checks if a mobile device is in proximity of a given location.
- **Device Geofencing Subscriptions** - Enables the subscription to geographical position changes.
- **Device Location Retrieval** - Provides the ability to retrieve the location of a device.
- **Population Density Data** - Enables the retrieval of population density estimations for a specific area at a future date and time.

### Network Quality

- **Quality on Demand** - Request stable latency (reduced jitter) or minimum throughput for specified application data flows between application clients (within a user device) and Application Servers (backend services).
- **QoD Provisioning** - Request the assignment of a certain QoS Profile to a specified device.
- **Connectivity Insights** - Query the likelihood that an application’s networking requirements can be met for a given end user session.

### Communication

- **SMS API** - Send an SMS to a mobile phone number in use on a mobile phone device.

### Fixed Connectivity

- **Home Devices QoD** - Control the network configuration of their End Users devices when they are connected through the WiFi access point provided by a telecom fixed line.

### Cloud & Edge

- **Simple Edge Discovery** - Discover the nearest Edge-Cloud zone for it to connect to, specifically the API will calculate the Edge Cloud Zone with the shortest network path to the application.
- **Traffic Influence** - Establish the optimal routing, in terms of latency, in a specific geographical area, between the user device, e.g. the user’s smartphone, and the optimal Edge Application Server (EAS) instance nearby.

### Payments

- **Carrier Billing** - Allows an online merchant to enable the purchase of third-party digital goods and to request payment against the user’s Mobile Operator billing system.

I have gone through the [OpenAPI for all of these APIs and created Postman and Bruno collections and published them to a GitHub repository](https://github.com/api-evangelist/global-system-for-mobile-communications) as well as a [Postman workspace](https://www.postman.com/api-evangelist/global-system-for-mobile-communications-gsma/overview). There is no better way to get a handle on what the GSMA offers than getting intimate with the design of each API. The process helped make mobile networks much more visible and tangible for me, and the list of API capabilities feels like what really matters when it comes to our mobile networks, complete with how you can monetize things.

The GSMA's approach to rolling out the Open Gateway APIs does a good job of speaking to what developers are going to want with OpenAPI and documentation published via GitHub repositories, as well as to what business leadership and regulators are going to be looking for. The list of APIs above really speak to the technology, business, and politics of APIs, but as it applies to mobile networks and what you face today at global scale technically, but also making money and operating across many different countries with a patchwork of regulations.

I thought [Henry Calvert](https://www.linkedin.com/in/henrycalvert/) did a good job of highlighting the balance between the technical and business realities of modern telco networks in our conversation, and shared his own personal take on why publishing the APIs as a [Linux Foundation project](https://camaraproject.org/) matters--I will let you listen for yourself.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/H5u14yHDV6c?si=v5H50FMasDgkUj_d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></center>

With the [APIs.json, OpenAPI, and Postman and Bruno collections published to a public GitHub repository and workspace](https://github.com/api-evangelist/global-system-for-mobile-communications), next I will play around with the examples they provide to see what kind of mocked API experience I can provide out of the gate. Playing with the design of an API is a good first start when it comes to understanding what an API does, but having examples with actual mocked requests and responses helps take things even further. My goal is to make sure the GitHub repository and Postman workspace for the GSMA Open Gateway APIs is as usable as possible out of the gate, so anyone can play with and see the potential.

Once I have the sandbox experience available I will also get to work on tests to certify each API, as well as Spectral rules for governing the OpenAPI and APIs.json for any GSMA Open Gateway deployment. My intention is to provide a certifiable set of automate-able tests that anyone can run to validate their own instance or any instance they are depending on as a consumer. So far, I am impressed with the GSMA Open Gateway API rollout, and I would like to do more stories on each of the individual groups of APIs, their overall approach and process, but then also begin doing a "diff" against TM Forum to better understand the overlap and partnership between the two standards. I am eager to keep learning from the GSMA and TM Forum, but then also bring my unique blend of surveying, assessment, and governance to the mix.