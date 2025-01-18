---
layout: post
title: Providing Multiple Types of API Sandboxes To Develop Against
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-sandbox.png
atomdate: 2016-08-19T16:00:00.000Z
tags:
  - Sandbox
  - Sandboxes
  - ai
---
I was going through the [Cisco Devnet ecosystem](https://developer.cisco.com) and stumbled across their [sandbox environment](https://developer.cisco.com/site/devnet/sandbox/). I thought it was worth noting that they provided several different types of sandbox environments, with a rolling list of available sandbox instances at any point in time.

Cisco provides seven different types of sandboxes:

*   **[Networking](https://developer.cisco.com/site/devnet/sandbox/available-labs/networking) -** The Networking Sandbox allows you to remotely access Cisco Networking technologies. Each Sandbox contains either simulated or physical network elements as well as access to developer tools. Some Sandboxes also provide for the creation of synthetic traffic. 
*   **[Collaboration](https://developer.cisco.com/site/devnet/sandbox/available-labs/comm-collab)** \- The Communication and Collaboration Sandbox allows you to remotely access Cisco Collaboration technologies in a cloud lab. Labs contain Cisco UC services: Unified Communications Manager, Unified Presence, and Unity Connection. In these labs you can build and test integrations to support features such as Instant Messaging/ presence, voicemail, and conferencing services into your application or using e.g. the Jabber Web SDK. 
*   **[Compatibility Testing](https://developer.cisco.com/site/devnet/sandbox/available-labs/ivt)** \- The DevNet Sandbox IVT program allows users to complete Interoperability Verification Tests (IVT) in our labs with your engineer as an option to using an authorized Cisco IVT partner services lab. Cisco Solution Partner Program members will be eligible for a Cisco Compatible Logo once testing is complete and deemed passed. The labs contain the architecture, configuration and products needed to complete an IVT for supported products and categories.
*   **[IoT](https://developer.cisco.com/site/devnet/sandbox/available-labs/iot/index.gsp)** \- The DataCenter Sandbox allows you to remotely access Cisco Iot technologies remotely. Labs contain architectures with products from the DevNet Iot product portfolio. The labs contain simulated and actual hardware elements as well as access to tools or synthetic traffic.
*   **[Cloud](https://developer.cisco.com/site/devnet/sandbox/available-labs/cloud/index.gsp)** \- The Cloud Sandbox allows you to remotely access Cisco Cloud technologies remotely. Labs contain architectures with products from the DevNet Cloud product portfolio. 
*   **[Security](https://developer.cisco.com/site/devnet/sandbox/available-labs/security/index.gsp)** \- The Security Sandbox allows you to remotely access Cisco Security technologies remotely. Labs contain architectures with products from the DevNet Security product portfolio. The labs contain simulated and actual hardware elements as well as access to tools or synthetic traffic. 
*   **[Datacenter](https://developer.cisco.com/site/devnet/sandbox/available-labs/data-center/index.gsp)** \- The DataCenter Sandbox allows you to remotely access Cisco DataCenter technologies remotely. Labs contain architectures with products from the DevNet DataCenter product portfolio. The labs contain simulated and actual hardware elements as well as access to tools or synthetic traffic.

I like the diverse number of environments represented here. I've been seeing more virtualized environments show up in support of device-based API integrations--you just can't expect everyone to develop and test against the real thing. The significant area represented here for me is the compatibility and security testing sandbox environments--important areas of if we are going to harden integrations.

API definitions like OpenAPI Spec and API Blueprint, combined with recent advances in virtualization (aka containers), makes for a pretty rich environment for pushing forward the number of available sandbox environments that developers can take advantage of. I'd like to see more API providers offer sandbox environments, build up the capacity in this area, and get to the level where Cisco is already operating, and offer a rich variety of virtualized environments for developers to test their integrations against.