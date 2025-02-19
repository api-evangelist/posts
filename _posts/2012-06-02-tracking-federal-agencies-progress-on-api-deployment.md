---
layout: post
title: Tracking Federal Agencies Progress on API Deployment
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Track-Federal-Agency-API.png
author:
  name: kinlane
tags:
  - Tracking
  - Deployment
  - Agencies
  - Progress
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist/federal-government/Track-Federal-Agency-API.png)](/federal_government.php "Federal Agency API Deployment Tracker")

I’m excited about [Barack Obama directing all federal agencies to have an API](http://apievangelist.com/2012/06/01/barak-obama-directs-all-federal-agencies-to-have-an-api/ "Barack Obama directing all federal agencies to have an API"). The President has given federal agencies 90 days to create a page on its website, located at www.\[agency\].gov/digitalstrategy, to publicly report progress in meeting the requirements of the Strategy in a machine-readable format, and implement the requirements of the Strategy within 12 months.

As I said in my post, I wanted to setup a [page to monitor this activity](/federal_government.php "page to monitor this activity"). I found a [dataset of federal executive branch Internet domains](https://explore.data.gov/Federal-Government-Finances-and-Employment/Federal-Executive-Branch-Internet-Domains/k9h8-e98h), thanks to Anthony Sutardja, one of my readers. In the dataset there are 1467 domains, with 106 distinct agencies running those domains. The President states "executive department and agencies" in his directive.  I can’t imagine we are going to see digital strategies in 90 days for all 1467 domains? I’m assuming it will occur within the top level agencies first. But I’m very curious see which agency domains follow, so I’m going to leave all of them up.

I created a script that will poll www.\[agency\].gov/digitalstrategy for each agency. I will run this every night this year. The script checks the HTTP status code for the page, records it with a time stamp, and the we’ll see who returns HTTP status code 200(OK) first. Quick note: It’s interesting to see which agency doesn’t properly use status codes, but that is another issue.

Anyone want to wager on who is first, and how many of the 1467 meet the requirements for posting their strategy and ultimately implementing APIs? Personally I’m hoping for CIA and the NSF. Think of the mashups you could make!!!

I all seriousness, this is extremely important. If agencies meet these requirements, we can see a radically different federal government in the coming years. As one of my readers and friend said on the post yesterday, "It looks like the Jeff Bezos mandate that he did 10 years ago!". If you don’t known what I’m talking about, read "[The Secret to Amazons Success Internal APIs](http://apievangelist.com/2012/01/12/the-secret-to-amazons-success-internal-apis/ "The Secret to Amazons Success, APIs")”.

You can visit the [Federal Agency API Deployment Tracker](/federal_government.php "Federal Agency API Deployment Tracker") page for more detail, I will keep the link prominent in the right hand feature area of this site, for the rest of the year.