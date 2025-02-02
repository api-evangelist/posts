---
layout: post
title: >-
  Get API Results Into A Google Spreadsheet By Pasting The Following Into A
  Cell 
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/alan-delevie.jpeg
author:
  name: kinlane
tags:
  - Spreadsheet
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/alan-delevie.jpeg)](https://twitter.com/adelevie)

My API hero of the day is [Alan deLevie](https://twitter.com/adelevie) (@adelevie) over at [18F](https://18f.gsa.gov/). I was tweeting out my story "[Going Beyond Excel As A Data Source For API Deployment And Focusing On It As An API Client](http://apievangelist.com/2015/03/13/going-beyond-excel-as-a-data-source-for-api-deployment-and-focusing-on-it-as-an-api-client/)” today, and he tweeted me back his [slick usage of the ImportXML function to get Federal Communication Commission (FCC) Electronic Comment Filing System data into a Google Spreadsheet.](https://ecfs.link/search?q=12-83)

When you visit [ecfa.link](https://ecfs.link/search?q=12-83), and scroll to the bottom of the page you will see simple instructions on how to get the data into your Google Spreadsheet:

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/ecfs-link-google-spreadsheet-importxml.png)](https://ecfs.link/search?q=12-83)

This is what we need more of, something that should be default for all data APIs. There are some other RSS, JSON, and XML goodies on the page too, but that is another story. Providing a simple copy / paste option for taking API driven data and making available in Google Spreadsheets is what I'd consider fundamental building block, getting us towards what I talk about in my post. Spreadsheet users need a wealth of simple, copy and paste resources like this that they can tap, from both public, and private data sources.

You rock Alan! I think his approach to providing a copy / paste ImportXML standard should be standard for all data APIs. We can start simple, by building a library of simple data sources like cities, states, postal codes, but then graduate up to more advanced data sources, or even subscriptions to valuable, curated, premium data--the trick is going to be keeping it as dead simple as Alan made it.

I will have to think about adding the ImportXML copy / paste as a standard building block, along with RSS, XML, and JSON. It feeds nicely into my [wider spreadsheet and API research](http://spreadsheets.apievangelist.com) nicely. Thanks Alan for this story, keep up good work!