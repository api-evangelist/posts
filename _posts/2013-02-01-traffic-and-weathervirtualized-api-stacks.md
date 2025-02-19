---
layout: post
title: Traffic and Weather - Virtualized API Stacks
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Traffic-and-Weather.png
author:
  name: kinlane
tags:
  - Stack
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/traffic-and-weather/Traffic-and-Weather.png)](http://trafficandweather.io/)

I recently added the [Traffic and Weather podcast](http://trafficandweather.io/) to the right hand menu for everyone to enjoy. What John Sheehan ([@johnsheehan](http://twitter.com/johnsheehan) ) and Steve Marx ([@smarx](http://twitter.com/smarx)) are doing on the podcast is **SO** needed in the API space, I highly recommend subscribing to the podcast in your itunes and listening regularly.

I was honored to be critiqued in the podcast this week, where they “gently” disagreed with my post from earlier this week on my [speculation around virtual API stacks](/2013/01/28/virtualized-api-stacks/ "virtualized API stacks"). So I wanted to “gently” respond and help clarify.

The first 60 seconds, pretty much sum up rebuttal, where they make my argument for me by saying [IFTT](http://ifttt.com) and [Zapier](http://zapier.com) are already doing this? Which is the whole basis for my story except I use [Singly](http://singly.com "Singly") and [Temboo](http://temboo.com) as examples. All of these providers are in the same space in my opinion, I think maybe they are just referencing what they are familiar with (as John used to work at IFTTT).

Second they read in that I’m envisioning some grand discovery language? Not sure where this comes from. I’m just referencing that API providers can provide JSON definitions of their APIs, which is happening with specs like Swagger, but not being done for discovery but for interactive documentation and code stub generation--the fact it is there is a plus for discovery. But I have zero visions of there every being a grand “standard” for discovery, but I feel you can't argue Swagger is picking up momentum.

John and Steve also reference that I’m calling for a “standardized building blocks API providers can jump on?” Not sure where this comes from. My arguement is that API will play almost no role in this process at all. They won’t give a shit or prepare in any way. It will be 3rd party providers stepping up and building these abstracted platforms around existing API providers. Something we are already seeing with Temboo, Singly and yes IFTTT and Zapier as well as BaaS providers like Kinvey, Parse, etc.

Then at the part they start talking about "API providers do not want to be commoditized", they lose me and deviate from anything I’m talking about. I agree that API providers don’t want to be reduced to commodities. This is just one possible path, and would not be for every API provider or reduce their existing retail relationship with developers. We see it already happening with [SendGrid partners with Heroku, Engine Yard, & others on email management](http://venturebeat.com/2012/07/25/sendgrid-partners-heroku-engine-yard-cloudbees/), and [Twilio partners with Azure](http://www.geekwire.com/2012/twilio-partners-windows-azure/).

So SendGrid won't be commoditized on Heroku?  Twilio won't be commoditzed on Azure?

Google your favorite API by name and add partners with, you will see API providers do care about partnering and reselling themselves, which brings you very close to the commodities line when you resell at that level.  What I'm suggesting could just be interpreted as reverse partnering, where a 3rd party platform integrates the API, rather than API seeking partnership--which we see with Singly, IFTT and Zapier, they don't ask for permission from every API provider.

While I listened further, the rest of the conversation had nothing to do with my post. I blame my storytelling, as I’m always trying to perfect how i articulate my visions and obviously I didn’t clearly get my point across. Since it was my first exploratory post on this subject, I will keep trying, and trying. 

I also have to call them out a bit, cause I heard standard over and over in the podcast, about building blocks, API interfaces and API definitions. But if you look at my post I never even used the word standard or standardizing or anything. So I think you guys read something that wasn’t there, cause I am the last API guy who believes in standardizing in the web API space.

With that said, I fuck’n love that you guys are doing this! Makes me happy!  Thanks John and Steve!