---
layout: post
title: 'API Service Idea: API Via Excel From Within Corporate Email'
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-email.png
author:
  name: kinlane
tags:
  - Email
  - ai
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-email.png)](/admin/blog/)

Most organization I’ve worked with, the Excel spreadsheet is the central way of storing, managing and sharing data, with email being the number one way to share these data filled documents. When I was doing data inventory at the Department of Veteran Affairs (VA), as part of the White House open data initiative, almost every piece of high value data I found was housed in a spreadsheet, and the data stewards who were in charge of this data, would email it to me when I asked for it.

To help data stewards go from spreadsheet to API, I [wrote an Excel to JSON converter](https://github.com/kinlane/email-xlsx-to-csv-json-xml), that was available via a private email address. All you had to do to convert a spreadsheet, was create a new email, attach your spreadsheet to the email, then send it to the specific address, and when it was done processing, you’d get an email in response, with links to a CSV, XML, and JSON version of the spreadsheet—unless it was a super complex spreadsheet of course, but this wasn’t our target.

Over the last year, this concept has simmered in my brain, and I can’t help but think how important both Excel and email are to the onboarding the data that exists across small businesses, the enterprise, organizations, and government agencies. Imagine if you could monitor all the email that flowed within an organization, and look for spreadsheets being emailed back and forth. This would tell you a lot of about how data is stored, managed, and shared across groups. This intelligence could then be used to help direct API efforts, and open data initiatives like the one I participated in within the federal government.

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-excel-icon.jpg)](/admin/blog/)

I put this idea in my Evernote a couple months back, and tried writing about it a few times, and during a recent flight I added to it. You could go beyond just identifying data usage patterns across a company, you could also generate APIs from this activity. Anytime an email with a spreadsheet attached was intercepted, a reply could be sent giving them a path to an API that was created, education about how to use that API, including a spreadsheet connector for the API, so that the person could continue working in the tools they are most comfortable, but now the data would be centralized, rather than fragmented across inboxes.

This idea could easily be executed upon using the [popular email API Context.io](http://context.io/), which would allow you to store an organization's email, and provide the index you’d need to discovery the spreadsheets you can use to develop APIs, and identify how data is shared across an organization, then develop educational strategies for evolving behavior. I’m pretty confident that part of the next wave of APIs will involve this layer of data, across businesses, organizations, and government agencies. I’d like to see services like this emerge, to help organizations understand how they use data, and provide the vital intelligence needed to help change behavior for the better, evolving everyone towards an API centric way of getting business done.