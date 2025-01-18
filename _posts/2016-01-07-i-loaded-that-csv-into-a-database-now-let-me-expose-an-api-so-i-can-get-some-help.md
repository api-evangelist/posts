---
layout: post
title: >-
  I Loaded That CSV Into A Database, Now Let Me Expose An API So I Can Get Some
  Help
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-help.png
author:
  name: kinlane
tags:
  - Database
  - Data
  - CSV
---
I have been working to clean up the the web presence for the [API Strategy & Practice conference](http://apistrat.com). We concluded the 6th edition of [@APIStrat in Austin this last november](http://austin2015.apistrat.com/) ([check out the videos](https://www.youtube.com/user/apistrat)), and in addition to this events website, I have five other sites to maintain, and make sure remain accessible. The first three sites have a custom database back-end, the next two had a WordPress + MySQL back-end, and the last edition uses Jekyll + YAML as its back-end(?). 

As part of this round of housecleaning I aggregated the schedule of speakers from all six events into a single spreadsheet, which ended up on my desktop as a CSV file. As I was talking this morning with the rest of the @APIStrat team about the 2016 schedule, I shared the CSV in Slack, as I also uploaded to a MySQL database (yeah I'm new / old school like that). I was talking with my partner in crime Nicolas Grenié ([@picsoung](https://twitter.com/picsoung?lang=en)) shortly after, and he wanted to help me push forward the list of speakers, expand the speaker and company info, as well as connect it up with sponsor info.

I then responded, as Steve Willmott (@njyx) points out on Twitter (is nothing private these days!!!):

> APIer's at work [@kinlane](https://twitter.com/kinlane) "I may take you up on that sir. loaded into DB. Let me expose an API on it I’ll ping you for some help" [@picsoung](https://twitter.com/picsoung)
> 
> — Steven Willmott (@njyx) [January 7, 2016](https://twitter.com/njyx/status/685165771203461121)

I went ahead and exposed an API of all of the 351 speakers who have participated in @APIStrat since [the first edition in New York in February 2013](http://newyork2013.apistrat.com/)\--you can access the endpoints, publicly at:

*   [http://api.apistrat.com/speakers/](http://api.apistrat.com/speakers/)

I also added the ability to pull a single speaker as well:

*   [http://api.apistrat.com/speakers/aO6zItrUhKEUexi7zNiUjOzzJ1230Rfno9P123DJRHNEuh4117/](http://api.apistrat.com/speakers/aO6zItrUhKEUexi7zNiUjOzzJ1230Rfno9P123DJRHNEuh4117/)

All you have to do is put in the speaker\_id for each of the speakers. Now, anyone can pull the information on 351 of the speakers who have helped make @APIStrat a thing. Next I also want [@picsoung](https://twitter.com/picsoung?lang=en) to be able to help me build upon the list of speakers. This is where APIs rock at making the web not just consumable, but also something anyone can program. 

[![](http://www.3scale.net/wp-content/uploads/2014/08/apistrat-logo.jpg)](ttp://apistrat.com/)

Using the two paths provided above, I then added a POST, PUT, and DELETE for the @APIStrat speaker resource. I want [@picsoung](https://twitter.com/picsoung?lang=en) to help me add, update, and delete from the speaker list. Now he can help me make sure all the information available is up to date. [Since I have 3Scale API infrastructure in place](http://3scale.net), and since [@picsoung](https://twitter.com/picsoung?lang=en) is established as a "partner in crime", he has an API key which allows him to not just GET (which anyone can do), he can also POST, PUT, and DELETE--making my speakers resource programmable to only myself, and @picsoung, or anyone else who has "partner in crime" level access to the @APIStrat API.

I know my work isn't done, but I will hand-off to @picsoung for some feedback before I go any further. Steve's tweet reminded me of the potential for APIs to empower collaboration like this. I have a CSV list of speakers across six editions of @APIStrat, which I've uploaded to a database, and I need help improving. So...I published an API providing access to the list, but then using [3Scale I am able to also add add, update, and delete capabilities, in a secure way](http://3scale.net). 

Uploading the CSV to the database, exposing a read / write API, and crafting an OpenAPI Spec for the API (below), is about all I have time for today. I will hand off to [@picsoung](https://twitter.com/picsoung?lang=en) for feedback, and then I can spend some time thinking about whats next. We want to add more details on the companies the speakers work for, and the APIs that exist behind this diverse spectrum of speakers.

As APIs should be, the speakers API for @APIStrat is a work in progress. We are just going to be a little more transparent about the journey. BTW....if you want some "partner in crime" API access, let me know. ;-)