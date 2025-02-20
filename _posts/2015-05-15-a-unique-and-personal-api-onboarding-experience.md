---
layout: post
title: A Unique and Personal API Onboarding Experience
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/wearther2020-globe.png
author:
  name: kinlane
tags:
  - Onboarding
  - Personal
  - Experience
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/wearther2020-globe.png)](http://weather2020.com/)

I have written many times before [about the right way to onboard with an API](http://apievangelist.com/2015/01/21/this-is-how-you-onboard-with-an-api/), as well as [how not to onboard with an API](http://apievangelist.com/2015/04/10/how-not-to-onboard-with-your-api-fiber-locator-api/). I see a lot of APIs, and can tell you which APIs have put thought into the process, and those who haven't. Helping companies smooth out the sharp edges on their API onboarding is something I spend a lot of time doing, so I work hard to make sure the topic shows up regularly in my writing.

Today I want to highlight a slight different onboarding email I received from [Weather2020](http://weather2020.com/):

_Hi there Mr. Lane!  
_  
_First off I'll get my lil bit of gushing out of the way.  I really enjoy what you're doing out there in the world.  I love your commitment and passion to the growing world and need for APIs and your focus on the narrative vs. straight technical details.  So even if you find some reason to hate what we have going on here just please keep up the great work.  
_  
_But now without further delay, I generated a key that grants you an unlimited number of calls.  That key is: c47c5e6e52ae4ae9183e65f30390693f3ee  
_  
_The structure of our API calls are:http://api.weather2020.com/\[APIKEY\]/\[LAT\],\[LNG\]_  
_  
So a sample functioning call for us here in Kansas City is:[http://api.weather2020.com/_c47c5e6e52ae4ae9183e65f30390693f3ee_/39.099727,-94.578567](http://api.weather2020.com/c47c5e6e52ae4ae9183e65f30390693f3ee/39.099727,-94.578567)_  
_  
Just because you're obviously just a bit of an enthusiast I'll let you know I have 2 other call structures that deliver the forecast data based on zip codes and city names.  I use them strictly for our internal purposes but I've enabled your API key to work with them as well.  Just in case you want to play around with them.  They're not that super impressive but involved a very different kind of internal data mapping so I'm mildly proud of em.http://api.weather2020.com/zip/_c47c5e6e52ae4ae9183e65f30390693f3ee_/90210http://api.weather2020.com/city/_c47c5e6e52ae4ae9183e65f30390693f3ee_/Portland,OR_  
_  
I plan to have some documentation at the root API domain very soon ( ie. here: http://api.weather2020.com ) .  So hopefully none of the returned data is too much of a mystery.  If you have any questions just let me know.  Also if you have any feedback whatsoever I'd love to hear it.  I can always use some wisdom!_  
_  
Enjoy!_

I do not always read the API signup emails I receive, but I do store them in a folder for later review, and I happen to read this one today. It always makes me happy to receive nice emails from my readers, but the fact that this was also in the form of an API onboarding response--made me smile.

I added a couple random characters to the API key above, so don't worry about the security side of this post. I don't expect everyone to personalize their new developers message like this, but I do think it is helpful to let developers know there is a human behind the self-service registration for any API--it could go a long way.