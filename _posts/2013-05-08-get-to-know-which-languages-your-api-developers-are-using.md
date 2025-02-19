---
layout: post
title: Get To Know Which Languages Your API Developers Are Using
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/xero-logo.png
author:
  name: kinlane
tags:
  - Developers
---
[![](https://s3.amazonaws.com/kinlane-productions2/xero/xero-logo.png)](http://developer.xero.com/ "Xero Accounting Software")

[Accounting API platform Xero](http://developer.xero.com/ "Xero Accounting Software") has been taking a deeper look into the languages that their developers are using when integrating with the Xero API. Currently there are 1,600 active applications communicating with the Xero API, from a mix of Xero add-on partners to custom integrations engineered by 3rd party developers.  But which programming languages were they using?

To create a snapshot of what tools developers are using, Xero needed to find the best source to obtain this data. Xero doesn't ask developers which platform they use upon registration, and since Xero doesn't require any sort of user agent or other identifying signature, it was difficult to know where to best acquire the data they needed.

The next best place to look for this data, is with the code samples themselves. It would be nice, if Xero code samples were hosted using Github where they could track downloads, forks, followers, etc. But the best they had, was the page views from the pages for each code library, within the Xero developer area.

[![](https://s3.amazonaws.com/kinlane-productions2/xero/xero-2013-usage-chart.png)](http://developer.xero.com/ "Xero Accounting Software")

Using this approach, Xero was able to extract some pretty interesting data about which programming languages developers were clicking on. Identifying the growing dominance of languages like PHP and the emergence of newer approaches using Node.js.

While Xero was able to learn a lot, I think we all should learn from Xero's story. There is a lot to be learned by other API providers: 1) API integration needs to be language agnostic 2) Working to understand which languages are beings used or in demand from developers, on a regular basis is important.

This seems like a pretty basic topic to some of us, but when an API is born out of a company that has a single language focus, it can be difficult to understand the needs of developers who are using other platforms and languages.

Make sure you prepare an approach to gathering and regularly evaluating data around which languages your API developers are needing to integrate ad work to support that as much as you possibly can.