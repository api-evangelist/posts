---
layout: post
title: Helping Standardize How We Communicate About The API Integration Possibilities
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_integrations_icon_page.png
atomdate: 2017-05-12T22:00:00.000Z
tags:
  - Integration
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_integrations_icon_page.png)](http://api.integration.tool.apievangelist.com/integrations-icons/)

Showcasing the integrations that are possible with your API via your API developer portal is an increasingly important way to demonstrate the usefulness of your API resources. Companies like [Amazon](https://aws.amazon.com/codedeploy/product-integrations/), [DataDog](https://www.datadoghq.com/product/integrations/), [Intercom](https://www.intercom.com/integrations), and other leading providers showcase other systems their solution is already integrated with. When it comes to API solutions, applications aren't just web and mobile, they are often system to system integrations with many of the SaaS and other software solutions that companies are already using in their operations.

As I do with other types of signals coming out of the API space I'd like to see more API providers publish a listing of possible integrations, and [I've created a simple API solution for managing an API integration page that can run in any Jekyll environment and possesses an API core](http://api.integration.tool.apievangelist.com/integrations-icons/). Using my approach to managing simple datasets, and publishing a human and machine interface using Github, I published an [API integration page solution](https://github.com/api-evangelist-tools/api-integration). Anyone can fork the project, reskin the look & feel of the website, and update the listing of integrations that are possible using a Google spreadsheet, then publishing the latest data using a Github repo and site.

My objective is to help API providers better manage and communicate the integrations that are possible via their API platform. I want them doing this in an organized and standardized way, helping their API consumers understand what is possible. I also want there to be a machine-readable definition of these integrations, so that analysts like me can more easily aggregate and connect the dots when it comes to what is possible with APIs. Right now, I am just tracking the URL of API providers integration pages, but I'd love it if the contents were also machine-readable and available via Github and API for forking and integration into other applications.

[My API integration page and API template can be forked and run standalone](http://api.integration.tool.apievangelist.com/), or you can copy the listing or icon pages, APIs, and YAML data core into a separate project. Each project has an OpenAPI defining the API surface area, and an APIs.json index for the entire project, as well as a YAML and JSON representation of API integrations present. I haven't had time to document everything 100%, so there is some awareness of Github, Jekyll, Liquid, and OpenAPI needed to get up and running. If you need help setting up a project, I'm adding these types of implementations to my list of services I offer, and I'm happy to help setup one up, and populate it for you, and even help you manage--for a fee of course. ;-)