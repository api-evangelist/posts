---
published: true
layout: post
title: >-
  Turning Centers for Medicare & Medicaid Services Providers Data Files Into an
  API
image: >-
  https://kinlane-productions2.s3.amazonaws.com/turning-centers-for-medicare--medicaid-services-providers-data-files-into-an-api.png
tags:
  - Healthcare
  - Data
  - Federal Government
---
I am working with our open data partners over at [Metadata Technology North America (MTNA)](https://www.mtna.us/) to publish a mix of open data APIs across a variety of areas. First up on the list are the providers. We are working to better understand how APIs are being used in healthcare, and to help us in our journey we are taking [the data files on characteristics of hospitals and other types of healthcare facilities, including the name and address of the facility and the type of Medicare services the facility providers](https://www.cms.gov/Research-Statistics-Data-and-Systems/Downloadable-Public-Use-Files/Provider-of-Services), and looking to make available via a first class API. There are data files outlining all of the CMS service providers for just shy of the last 20 years, making for a pretty rich data set that would be very useful as a modern API, so Pascal over at MTNA got to work breaking things down, something he covers in great detail via this video from our session.

We are unsure exactly where all of this work will end up. First we are looking to better understand the state of CMS data, but also use it to help us understand how their recent [CMS Interoperability and Prior Authorization Proposed Rule is playing out in the market](https://www.cms.gov/Regulations-and-Guidance/Guidance/Interoperability/index). We aren’t healthcare experts, but MTNA are data experts, and I know my way around the API space, so we are just looking to map things out from a data and API specification perspective. Next, once Pascal and team publish a production version of the CMS service provider directory, I will take it and produce an OpenAPI and Postman collection within a public workspace, helping make the CMS service provider directory API more accessible, and something we can iterate upon via the public workspace as we do some more storytelling.