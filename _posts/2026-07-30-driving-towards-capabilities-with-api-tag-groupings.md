---
published: true
layout: post
title: 'Driving Towards Capabilities With API Tag Groupings'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/driving-towards-capabilities-with-api-tag-groupings.png
date: 2026-07-30
author: Kin Lane
tags:
  - API Tags
  - Capabilities
  - Knowledge Graphs
  - Discovery
  - APIs.json
  - API Management
  - Vocabulary
  - API Commons
  - APIs
---
I came home from APIDays Munich with knowledge graphs stuck in my head after MC'ing a talk from [Adorsys](https://adorsys.com/en/) on the subject. They are doing some interesting and compelling work building knowledge graphs for their customers based upon the APIs those customers produce, and they are approaching the work in a very disciplined way that stays aligned with the business. As I always do, I wanted to take that thinking and point it at the very messy world I track on outside of the enterprise, and find different ways of visualizing it.

One way I make sense of that messy and chaotic world is to work with the existing outputs of our existing systems. So I thought I would take the OpenAPIs I have indexed for many different commons systems using APIs.json, and play around with a variety of visualizations that help me see the resources available in the systems we are already using. I began by trying to "see" a [cloud](https://tags.apicommons.org/?src=https://raw.githubusercontent.com/api-evangelist/kong/refs/heads/main/apis.yml&view=cloud), [graph](https://tags.apicommons.org/?src=https://raw.githubusercontent.com/api-evangelist/kong/refs/heads/main/apis.yml&view=graph), [matrix](https://tags.apicommons.org/?src=https://raw.githubusercontent.com/api-evangelist/kong/refs/heads/main/apis.yml&view=matrix), and [table](https://tags.apicommons.org/?src=https://raw.githubusercontent.com/api-evangelist/kong/refs/heads/main/apis.yml&view=table) for the API management provider Kong.

Interesting view, but I kept working my way through the API management solutions I personally use, to understand how the vocabulary applied to my actual world. Next I tried to "see" a [cloud](https://tags.apicommons.org/?src=https://raw.githubusercontent.com/api-evangelist/aws-api-gateway/refs/heads/main/apis.yml&view=cloud), [graph](https://tags.apicommons.org/?src=https://raw.githubusercontent.com/api-evangelist/aws-api-gateway/refs/heads/main/apis.yml&view=graph), [matrix](https://tags.apicommons.org/?src=https://raw.githubusercontent.com/api-evangelist/aws-api-gateway/refs/heads/main/apis.yml&view=matrix), and [table](https://tags.apicommons.org/?src=https://raw.githubusercontent.com/api-evangelist/aws-api-gateway/refs/heads/main/apis.yml&view=table) for AWS API Gateway, bringing things a lot closer to home.

Then I wanted to understand all of this in the context of marketing, and the stories we get told by the legacy API management providers. I think Kong is part of that legacy, but when it comes to what enterprises believe they are capable of, Apigee has played a significant role in defining the words we use to describe our API operations, and specifically our API products. So I set out to "see" a [cloud](https://tags.apicommons.org/?src=https://raw.githubusercontent.com/api-evangelist/apigee/refs/heads/main/apis.yml&view=cloud), [graph](https://tags.apicommons.org/?src=https://raw.githubusercontent.com/api-evangelist/apigee/refs/heads/main/apis.yml&view=graph), [matrix](https://tags.apicommons.org/?src=https://raw.githubusercontent.com/api-evangelist/apigee/refs/heads/main/apis.yml&view=matrix), and [table](https://tags.apicommons.org/?src=https://raw.githubusercontent.com/api-evangelist/apigee/refs/heads/main/apis.yml&view=table) for Apigee's offerings.

Next, I wanted to see these side by side, and bring in other providers from the API management sector. At this scale I notice there are some broken links to OpenAPIs in the APIs.json files, which I will fix, but I think the API management aggregation view as a [cloud](https://tags.apicommons.org/?catalog=management&view=cloud), [graph](https://tags.apicommons.org/?catalog=management&view=graph), [matrix](https://tags.apicommons.org/?catalog=management&view=matrix), and [table](https://tags.apicommons.org/?catalog=management&view=table) still helps provide a messy but interesting view of the chaotic vocabulary being used across the market.

I like the noise of that view, and wanted to sample another sector. So I took the API platform and aggregated some of the common services and APIs from that dimension to see what the market noise looked like there, creating a [cloud](https://tags.apicommons.org/?catalog=platform&view=cloud), [graph](https://tags.apicommons.org/?catalog=platform&view=graph), [matrix](https://tags.apicommons.org/?catalog=platform&view=matrix), and [table](https://tags.apicommons.org/?catalog=platform&view=table) view of what is popularly called an API platform, just to see the shape of the word on the street.

These are not taxonomies, vocabularies, or anything structured. These are tags. Applied during the design, documentation, and discovery process. There is no real semantics here, and no meaningful grouping of these tags. There is no discipline or rigor applied. These are just a bunch of words applied by vendors and by me, to describe what an API operation offered by a specific API provider does. It does reflect the word on the street, though, which enterprises often pick up and apply to their own operations because it was spoon fed to them by a vendor.

These aren't business capabilities. Although if you squint and believe hard enough, you can see the beginnings of business capabilities in there. That is where I am looking to steer things, and to begin driving conversations about how we translate API sprawl into business capabilities. The tags are a mess. But I can see and hear echoes of what matters in them. Maybe with a little work I can tune in the signal within the noise. The challenge will be doing it at scale, across the thousands of APIs I am profiling over on APIs.io and here at API Evangelist.
