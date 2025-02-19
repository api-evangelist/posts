---
layout: post
title: >-
  API Integration Service Providers Should Have An API So That Their Actions Are
  Embeddable
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/services/bw-embeddable.png
tags:
  - Embeddable
  - Integration
  - Providers
  - Service Providers
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/services/bw-embeddable.png)](http://embeddable.apievangelist.com/)

[During the latest IFTTT flareup](http://apievangelist.com/2016/03/31/hello-pinboard-customers-from-linden-tibbets-the-ceo-of-ifttt/), I realized how much I haven't written about my feelings surrounding API integratio service providers, iPaas, or whatever else you call it. Something that always frustrates me in the future, as I am unable to reference my earlier thoughts with a specific URL. So while I am ranting about [the lack of APIs for these integration platform as a service (iPaaS) provider](http://apievangelist.com/2016/04/05/the-api-integration-providers-who-have-api-access-to-actions-will-be-successful-in-bot-environments/), let me add to my list of critical elements I feel are missing from the space: Embeddability!

As a user of your service, provide me an API, so I can embed your API recipes into any website, web and mobile application. While the fact that Zapier does have a public API, where IFTTT does not have one at all, the Zapier API doesn't not provide me any access to what API integration recipes (Zaps) are available (ie, core business value). I cannot automatically search for all the Google Spreadsheet integrations. I cannot search for all the Twitter API integrations. Let alone embed the actions enabled by these recipes on any of my website. 

When preparing any list of meaningful actions you can take with APIs, [like I did for my university workshop a couple weeks ago](http://kinlane.github.io/university-api-workshop/apis/), I have to manually go to Zapier, search for actions, and then craft my own link to the detail page (which isn't public BTW). The response from Zapier to why there is no API for this, each time I ask, is that nobody has ever asked for that? Which is starting to smell more and more like business lock-in to me, in the wake of the IFTTT / Pinboard shitstorm. 

[It isn't like the concept of an API driven, embeddable button is anything new](http://apievangelist.com/2015/12/19/button-to-run-this-api-in-the-http-api-client-of-my-choice/). Facebook Share, Twitter Tweet? I just can't buy the fact that nobody has asked for a Run Zapier Zap button? I'm just guessing that folks aren't seeing the embed opportunity, when they are down in the weeds, [like with the Run in Postman button](https://dzone.com/articles/button-to-run-this-api-in-the-http-api-client-of-m) was. It just takes time for it to happen, a process I am always looking for ways to expedite. ;-)

Anyways. If you are running an API integration service provider, please:

1.  Pay APIs forward by having an API for your platform.
2.  Make all aspects of your service available via API.
3.  Provide embeddable buttons, and linkable hooks at any point in the action.

If you do this, your service will become more than just a destination for discovering and enabling API driven recipes. With a complete API, your platform can become baked into the API enabled fabric of our web, and mobile world(s). As an API integration platform as a service (iPass) provider, it is your responsibility to pay the API concept forward (hear the laughter of my haterz), and not terminate, and capture all the value generated via APIs. The reasons for this are much more than the altruistic visions you may think I'm speaking of, and touch on real world business advantages that you are missing.