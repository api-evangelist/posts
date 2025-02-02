---
layout: post
title: Why Don&#039;t I Have Easy Access to all My Online Personal Data
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - My
  - Data
  - Access
  - Personal
---
![](https://s3.amazonaws.com/kinlane-productions2/facebook/Facebook+Download+Your+Archive.png)

I was just downloading all of my Facebook data. You can [go under your account settings and there is a little link](https://www.facebook.com/download) that lets you download everything.  It takes some time to generate a full archive, but once my archive is ready, they’ll email me and I can get at my data and see what the download format looks like.

While waiting, I wanted to see what Google had to offer. Google has an amazing [acount management dashboard](https://www.google.com/dashboard) which provides you access to your settings, some of the data, but Google is also working on their [takeout service](https://www.google.com/takeout/ "takeout service") which gives you downloads for individual services and across multiple services.

That is a pretty good start. Two of my biggest networks allow me to download data. I wasn't so lucky with the next four:

*   Twitter - No
*   Instagram - No
*   Foursquare - No
*   LinkedIn - Some (just your connections)

I use all six of these services daily. It bums me out that I can’t get out my own data. Of course all of these services have an API, which allows developers to get at my data, but even [Twitter’s API doesn’t give me full access to all my accounts data](http://apivoice.com/2012/06/29/twitter-continues-to-restrict-access-to-our-tweets/ "Twitter’s API doesn’t give me full access to all my accounts data").

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/ifthisthenthat/IFTTT-My-Recipes.png)

I want access to a data store of all my [Facebook](https://www.singly.com/docs/facebook "Facebook"), [Google](https://www.singly.com/docs/gcontacts "Google"), [Twitter](https://www.singly.com/docs/twitter "Twitter"), [Instagram](https://www.singly.com/docs/instagram "Instagram"), [Foursquare](https://www.singly.com/docs/foursquare "Foursquare") and [LinkedIn](https://www.singly.com/docs/linkedin "LinkedIn") data in a single location. There are software available trying to solve this problem such as [ThinkUp](http://thinkupapp.com/ "ThinkUp") or [The Locker Project](http://lockerproject.org/ "The Locker Project"). As with APIs, these solutions require you to be a developer. (I see ThinkUp has a cloud solution now)

At this point I’m thinking about how to build an application using [Singly](https://singly.com "Singly"), one that allows me to pull posts, tweets, photos, friends and other vital personal data into a single store.  I need to think it through.

Then I really start questioning the storage of all of my social data. Do I really even want it all in one location? Do I just want it in another location, a sort of plan B. It really depends on the data. I guess I have to think about each service and how I want the data replicated, moved, syndicated or otherwise. This is beginning to sound a lot like [API automation](http://apievangelist.com/2012/08/21/api-automation-platforms/ "API Automation") to me and not just data liberation.

I hate ending a post, without wrapping up an idea properly.  I'll just have to work out in another post, but then again that is why this is on my personal blog and not API Evangelist or API Voice.