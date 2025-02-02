---
layout: post
title: Should Government Provide Download Or API Of Government Data Resources?
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-download-vs-api.png
author:
  name: kinlane
tags:
  - Data
  - Government
  - Resources
---
I just got an email from an open data, API evangelist, working on a "New Zealand cross government program that is set up to deliver better public services for businesses and providing more and better APIs is a core vehicle that we have identified for that”, who asked a question I see a lot, and thought I should do another post on:

> **_Should government provide the full download of datasets or encourage API access of data assets?_**

The answer is both, but only if you have the resources to properly design, deploy, manage and evangelize the APIs, and you should always start with providing the full download of datasets. Many open data folks feel APIs are unnecessary when you have the full data download, but in reality this is a narrow view of the world—not everyone has the resources to consume entire data downloads, and there are so many lessons for government to learn from when providing APIs.

**Always Provide Raw Data Downloads**  
Publishing of government data assets in machine readable formats like CSV, XML and JSON should be default for all government agencies. Period. If a dataset is not classified or contains personably identifiable information (PII), it should be available in a central location on government web sites for download. This is where ALL government agencies should start, before embarking on any API.

**Deploy APIs When Resources Are Available**  
APIs should only be deployed by government agencies when they have the resources to do so properly. At the very least you should be able to properly design, deploy and respond via email requests around APIs in a timely manner. Nothing is more frustrating than integrating with an API where nobody is home. Also remember that EVERY API operations is short handed, even companies like Twilio and SendGrid could use more resources, so don’t wait for the perfect resource levels before you launch, however you should make sure and give your APIs enough investment so that they will be successful.

**APIs Provide A Valuable Feedback Loop**  
A properly deployed API provides indirect and direct support channels which open up valuable feedback loops for API providers and their consumers, that just do not exist with downloads. APIs will bring government agencies and the consumers of their valuable data resources together, making data acquisition, and stewardship cycles much more meaningful and valuable to everyone involved.

**APIs Provide Valuable Analytics And Insight**  
With a data download you can only see how many times it was downloaded, with APIs an agency has the opportunity understand exactly how data assets are used. Modern API management solutions like [3Scale API infrastructure](http://bit.ly/13esk6Q) provide very granular level measurement, accompanied with meaningful analytics that provide essential insight that can be used in the roadmap of how data will be gathered, organized and made available to the public.

**APIs Make Valuable Resources Accessible to All (Not Just Developers)**  
Every person I talk to who feel that government should only provide full data downloads and not APIs is a skilled data scientist or programmer. APIs make data assets available to EVERYONE, not just those who possess the skills. Not everyone has the time and resources to download, process and work with data downloads, and APIs go a long way to make valuable government resources available in ways that even non-developers can access, and put to use in even small ways that can make a big impact.

**APIs Keep Government Data Fresh And Up To Date**  
Sometimes by the time a developer downloads and integrates government data it can be already out of date. If government is looking to provide the highest quality service level agreement (SLA) or at least service accord with the public, they should look at providing APIs. With APIs developers can focus on what their applications do best and not become stewards of the data, leaving this role to those within government who are already closest to the acquisition and management of data—making government data much more real-time.

[![](https://s3.amazonaws.com/kinlane-productions2/digital-strategy/logos/census.png)](http://www.census.gov/)

The only thing to prevent any government agency from deploying APIs is the available resources to deploy, manage and support properly, a bar that is getting lower and lower with the wealth of cloud based services available for designing, deploying, and management your API data assets that are locked up in spreadsheet, databases or even an existing agency website. You don’t have to be a developer or have investment from your IT to launch an API in 2014.

The poster child for this discussion that I use is the US Census Bureau, who struggled with this [same question of whether to provide download or API](http://apievangelist.com/2013/07/19/providing-full-data-download-vs-api/), and is committed to [delivering value to its data consumers](http://apievangelist.com/2013/08/22/delivering-value-for-developers-is-first-when-it-comes-to-the-census-bureau-apis/). While there are other datasets within the US federal government that are just as valuable as census data, I’ve yet to meet an agency who has the valuable data, technical skills, and the outward, public facing mission to truly internalize the value of both full data downloads and APIs.

This is a question I’m sure I will answer numerous times each month for the next 10 years, but now I’ll have this post to reference when responding to emails and tweets.

_Disclosure: 3Scale is an API Evangelist partner._