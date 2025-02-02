---
layout: post
title: Pull The Social Media Accounts For Gov Using The US Digital Registry API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_01_24_at_11.36.10_pm.png
atomdate: 2017-01-25T23:00:00.000Z
tags:
  - Social
  - Registry
  - Digital
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_01_24_at_11.36.10_pm.png)](http://usdigitalregistry.digitalgov.gov.adopta.agency/)

Over the holidays [I pulled the data.gov index of federal government data](https://github.com/gsa-data/data-gov-dump), and the next item on my list was to cache the results of the [US Digital Registry API](https://usdigitalregistry.digitalgov.gov/) , providing me with a list of agencies, and their social media accounts. I pulled the JSON from the API, and then published to the Github repository for this site, so that I could use for several different applications.

**Drive Listings Of Federal Agency Social Media**  
I wanted a quick way to get at the Twitter and Github accounts for the federal government, and have in a single location (Github). I've published YAML data to Github, and using Jekyll I've created listings for the Twitter, Github, Facebook, Pinterest, Instagram, and LinkedIn accounts, making them easier to browse when I need them.

**Accessible In Machine Readable Format For Others**  
I have several uses for the listing of government agencies and their social media accounts. I needed the data in a machine-readable format on Github so that I could pull remotely, and even check out the Github repository if I need to. This approach also makes the data available for anyone else to fork and put to use in their own way using Github.

**Profile The Agencies Using Each Of The Social APIs**   
Now that I have the social media account for these federal gencies pulled using the US Digital Registry API, I'm going to take each of the accounts, and pull their profile details, and any other relevant information using the APIs for each of the social media services. APIs for the win--providing me with a way to quickly profile the US federal government at scale, and stay in tune either real-time or when I think a checkup is required.

I'm not sure what I'll do next on this project. I'd like to take a look at how active each account is, and maybe check in each week to see if any accounts have gone dormant, picked up in activity, or possibly publishing anything interesting. At this point I just wanted to have the social media landscape for these federal agencies mapped out. I have other social media data beyond what I have displayed on the project site. I just wanted to get going pulling the landscape, then I'll evaluate using the index as an engine for monitoring and tunining in to what government is up to (or not). Once that is done, I'll consider expanding to other social media channels.

[**View The Github Repository Here**](http://usdigitalregistry.digitalgov.gov.adopta.agency/)