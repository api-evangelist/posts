---
layout: post
title: Google Introduces a Google+ Hangout API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/google-plus-hangouts.png
author:
  name: kinlane
tags: []
---
Not even a week after Google rolled out the long awaited [Google+ API](/2011/09/16/google-api-a-technology-review/ "Google+ API"), they [launched the Google+ Hangouts API](http://googleplusplatform.blogspot.com/2011/09/introducing-google-hangouts-api.html "rolled out Google+ Hangouts API"), enabling developers to build collaborative apps that run inside of a Google+ Hangout

The [Google+ Hangout API](http://developers.google.com/+/hangouts/ "Google+ Hangout API") will provide developers with the ability to manipulate the UI, interact with hangout participants and respond to the different events that occur within a hangout.  The functionality is reminiscent of the way Google Wave gadgets and robots could interact with a wave and its participants.  I wonder if we are seeing some of the Google Wave code being recycled?

To use Google+ you have to register your application with Google, and specify any other Google+ users on your team that will be able to load the application into their hangout.  Since the Google+ Hangouts API is only in developer preview, this is temporary requirement.

![](http://kinlane-productions2.s3.amazonaws.com/google-plus/google-plus-hangouts.png)

Once registered, apps behaves like a normal web app, but it also can take part in the real-time conversations within a hangout using the API.  Google+ Hangout apps will use whats called a “shared state” among all instances, notifying users of changes by other application users in real-time.

The decision to release the Google+ clearly was a strategic move against Facebook, which I understand, but I still feel strongly that a empowering developers with a fully write enabled API from the beginning, is very important to setting the tone for the Google+ API ecosystem.

Many developers, including myself [were not happy with the limited functionality of the initial Google+ API release](/2011/09/16/google-api-a-technology-review/ "were not happy with the limited functionality of the Google+ API release").  However, I could tell that Google was being cautious in their API roll-out, and there is potentially much more behind the scenes.  I expect Google will be rolling out new APIs as they feel confident, or maybe when they feel it will give them a strategic advantage, like this week during the [Facebook F8 conference](http://www.facebook.com/f8 "Facebook F8 Conference").