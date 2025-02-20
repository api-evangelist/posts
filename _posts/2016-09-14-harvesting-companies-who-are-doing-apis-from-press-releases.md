---
layout: post
title: Harvesting Companies Who Are Doing APIs From Press Releases
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-press-apis.png
atomdate: 2016-09-15T00:00:00.000Z
tags:
  - Harvesting
  - APIs
---
Press releases continue to be one of the best ways for me to discover companies who have embarked on their API journey. From what I can tell, even with the shrinkage around funding for startups, the number companies offering up APIs is increasing. The big difference in the current wave of companies doing APIs. is these are just regular businesses, using APIs to provide access to resources in web, mobile, device, and partner integrations--a more business usage of APIs, as opposed to startups where the product is an API.

This class of SMB, and SME API provider tend not to be so good at sharing the documentation, code, and other resources for their API operations via their sites, but do see the value in pointing it out when issuing a press release. The reasons vary for why they showcase their APIs, often times it is just in the little "about" paragraph, but sometimes it is the center of a partnership, an acquisition was made possible, or the focus of a new product or service. I wish companies were more into being public about it, but I'll take what I can get--I am guessing many just haven't thought about it, or don't have the resources to do it right.

I'd say press releases are the number one way I discover companies who are doing APIs, with [patent filings as a close second or third](http://apievangelist.com/2016/09/02/api-patent-search-as-way-to-discover-companies-who-are-doing-apis/). After I publish eachpress release to [API.Report](http://api.report), I have a CRON job running that extracts any URLs referenced in the page, spiders them looking for blog feeds, and Twitter or Github accounts, and makes sure they are entered into my monitoring system. If you are an API service provider looking for interesting leads of companies who are doing APIs let me know--I'm looking to formalize the list of companies I extract from press releases each week. I'm thinking about providing this list as a new API Evangelist service, and subsidize my research with new sources of information about APIs, as well as some potential revenue that can help me keep the lights on.