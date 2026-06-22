---
published: true
layout: post
title: API Visibility and Control Is at Odds With Enterprise Power and Control
date: 2025-03-06T09:00:00.000Z
tags:
  - Visibility
  - Power
  - Control
  - Discovery
  - Registries
image: https://kinlane-images.s3.amazonaws.com/shared/bf-skinner-god-sitting-hand-out.jpeg
---
I regularly leverage social media for engaging with my audience and customers, but I am also a big fan of keeping as much back within my domain as possible, while still engaging in conversation via LinkedIn, Bluesky, Mastodon, and others. [Daniel Kocot asked me a very interesting question in response to one of my stories](https://www.linkedin.com/feed/update/urn:li:activity:7303113564439957504/), and knowing my answer might be a little longer than a comment, but more importantly that this is something I’d want a URL to share with customers, I wanted to answer Daniel’s question here.

<div style="padding: 25px; border: 1px solid #000; border-radius: 10px;">
  Kin Lane, your post really highlights a fundamental challenge in API governance. While many teams rely on Git repositories as their single source of truth, this approach often falls short when it comes to discoverability, lifecycle management, and policy enforcement—especially at scale.<br><br>

  This is where API registries could provide immense value, yet the industry still lacks mature, widely adopted registry solutions that seamlessly integrate into existing workflows. Projects like Apicurio Registry and xRegistry are tackling this space by offering structured storage and governance capabilities for API definitions, but adoption remains relatively niche compared to traditional repo-based approaches.<br><br>

  Do you see a shift towards hybrid models, where repositories remain the authoritative source but registries enhance visibility and control? And what do you think is holding back broader adoption of dedicated API registries in the industry? Looking forward to your thoughts!
</div>
<br>
I don’t see a shift towards hybrid models. I see a strong desire to do so, and as you said, tooling and services emerge to help enhance visibility and control, but after 15 years of studying this, I don’t see any meaningful shift in the ideal direction you lay out. Why? Well...

<strong>"Visibility and control is at odds with power and control"</strong>

It is the same reasons behind the uneven rollout of API portals internally, with partners, and publicly. It is extremely hard to convince those with the power and the control over digital resources, the data, and the new capital to give up the control they have. It is just the next generation of the classic database power vacuums that have existed for decades.

This is what has been litigated around the API gateway and the bundling of the API portal with this. While pitched as centralizing your API product catalog or marketplace, bringing more visibility and control, it is mostly a power play by API management providers—-which is why you end up with such mixed results around the API catalog ever becoming anything too robust. There are outliers, but for the most part these gateway adjacent catalogs aren’t an accurate representation of digital resources even with their proximity to the runtime truth, and you can look to SOA registries for the evidence.

This has been true for API hubs, marketplaces, and discovery which are not adjacent to the gateway. ProgrammableWeb, RapidAPI, and now Postman Network all demonstrate there is no money in API discovery. I can attest from the perspective of APIs.json—nobody cares about API discovery. Until they need to spend hours and hours looking for an API and all of its parts and pieces. However, even with all that pain, time, and money nobody cares about discovery enough to invest in it. API discovery is just too sensible, and there is a lot of money to be made keeping things noisy, and maintaining the power status quo.

The schema or API registry is just a reflection of the API product catalog in the portal or the promise of API discovery via marketplaces, hubs, networks, or even on the open web. It is all very logical. It is all very much what is needed. There is just no incentive for anyone to do it or use it. It threatens those with the power within enterprise organizations, either centralized top down or federated tribal power. I’ve seen it over and over within enterprises. People cite privacy, security, and other concerns despite the evidence of encryption, access control, and other proven methods. But why people don't contribute reliable comes down to the fact that observable also means that others have access to what you have control over.

One experience I can share that is far enough in my past, but still relevant today, was my time inventorying public data assets within the US federal government for the Obama administration. I was tasked to go around to agencies and inventory all the public data assets, meaning any spreadsheet, XML, CSV, or JSON file that was being made available for public consumption. The first part of my job was finding these assets—-which was extremely difficult as there was no reliable up to date registry, portal, or anything. There were lots of them. Just none that were reliable. Once I found them there was often a well meaning steward who managed the data via a spreadsheet, but their version was often not the final version. If you wanted to find the WSDLs for web services, APIs, or other interfaces where this data was actually made available into other systems—-you had to find the Deloittes, Accentures, and Booz Allen Hamiltons of the world knew where the data and APIs were within these enterprises who had outsourced their IT soul years ago.

In the end. The people with the power and control or the people seeking power and control do not want enhanced visibility, access, and control. You can find IBM and other enterprise schema registries in almost any large enterprise that is out of date, but still operating. You can find Apicuro, xRegistry, and newer registries being rolled out. You can find portals, hubs, and marketplaces. But they are rarely accurate representations of what is actually happening when it comes to digital resources and capabilities. There are just too many incentives within an enterprise to hoard data—-this isn’t new. There is just too much manufactured urgency and velocity for anyone to do the work. There are also just too many service providers lining up to sell you a solution that will mine and extract value and data into their solutions. Now with the information economy behind all of this history shifting into the casino financialization of everything through artificial intelligence and the blockchain—-portals, registries, and marketplaces will be extracted of any meaning and value within seconds of them being stood up, before they can ever reach any sort of critical mass.

