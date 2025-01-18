---
layout: post
title: Which BaaS Pricing Model Is Better?
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/baas-trends.png
author:
  name: kinlane
tags:
  - Pricing
---
I’ve been processing a [conversation over at Branch](http://branch.com/b/apicalls-successtax), that was triggered by a story in TechCrunch by Sarah Perez([@sarahintampa](https://twitter.com/sarahintampa)) called, “[StackMob Ratchets Up The Competition: Makes API Calls Free, Launches A Marketplace For Third-Party Mobile Services](http://techcrunch.com/2012/11/13/stackmob-ratchets-up-the-competition-makes-api-calls-free-launches-a-marketplace-for-third-party-mobile-services/)”.

There are several layers to the convSteersation, the part I’m focusing on is about how BaaS providers are structuring their pricing, in which Sarah Perez writes:

> _StackMob is now making API calls free. This latter news will impact the competitive landscape, which includes startups like Parse, Kinvey and others, all of which have traditionally charged developers as API calls increase alongside an app’s popularity._

Making the argument that:

> _Today, developers have to have an understanding of how many API calls they make, and if an app becomes really successful, developers are penalized for that with increased pricing._

Sarah quotes StackMob CEO Ty Amell, saying that:

> _“this isn’t really all that fair, explaining that it doesn’t matter to StackMob how many API calls the app makes – the cost to them doesn’t really go up. “It doesn’t matter to us whether someone’s making a million API calls or 20 million API calls – the cost is fairly manageable on our parts. So we felt like this was a blocker to innovation on the developer’s side,” he explains. “And we feel like API calls are starting to become a commodity, where it’s really how can you provide value beyond that?”_

The conversation immediately begins on Twitter, with:

> **Steve Gershnik([@StackMobSteve](https://twitter.com/StackMobSteve)) of Stackmob** - @stackmob doesn't charge for 'active users' either. No success tax for you.

> **Joe Chernov ([@jchernov](https://twitter.com/jchernov)) of Kinvey** \- but you charge for features. In the end, everyone charges for something. It's business!

After this, the conversation moves to Branch. I’m not including full comments, because there is a lot of banter back and forth, discussing various claims BaaS providers make, that I feel are irrelevant to the more important, pricing story.

The conversation continues:

> ****Joe Chernov ([@jchernov](https://twitter.com/jchernov)) of Kinvey**:**  
> If a developer prefers to pay by number of users, our model may work for them; if someone would rather buy features, then StackMob may make more sense. It's all good. Everyone has their own twist on pricing. Vendors should strive to highlight their own value without misrepresenting others'. Fair? Steve Gershnik (StackMob):  
> We don't charge per user. We don't charge per API call. We think those are outdated and archaic pricing models.

> **Miko Matsumura ([@mikojava](https://twitter.com/mikojava)) of Kii:**  
> I respect what @StackMob is doing but in looking at their pricing page, isn't it just segmenting everyone into a free tier and a "custom" Enterprise tier?

> **Steve Willmott([@njyx](https://twitter.com/njyx)) of 3Scale:**  
> Which model is best in our experience depends a lot on what type of market you're serving - individual developers tend to like by the drop because (start cheaply and scale). Large companies tend to like predictability so they can budget properly.

> Box.net is a storage company - yet, for all their enterprise accounts storage is unlimited. Variable scared their customers. Instead they charge by number of seats/users - something their enterprise customers CAN predict.

> Thinking more abstractly: If a developer is successful, there will be some sort of increase in volume. Unless the PAAS service is truly magical that means extra cost for the PAAS provider.

> You can call this a success tax, but in my view what matters is not if there is more cost to the developer but if the unit cost goes down over time. I.e. As I succeed, I'm happy to pay you a bit more as long as you are not getting an increasing %age of the pie (and ideally if the %age is decreasing). If that %age increases I'll most likely ditch you for someone who offers me better terms at that point.

> **QuickBlox([@QuickBlox](https://twitter.com/QuickBlox)):**  
> Our pricing model is per API calls as well, we do it like that because it is clear for developers (and for our business model), also allows to create apps and prototypes that, in case they are not successful, the developers won't be charged. according to @jchernov

Only Stackmob, Kinvey, Kii and Quickblox are represented in the [conversation on Branch](http://branch.com/b/apicalls-successtax). So I wanted to see how each of the 20 BaaS providers I’m tracking on, structure their pricing:

*   [APIOMAT](http://www.apiomat.com/) - Beta, can't find
*   [Appcelerator](http://www.appcelerator.com/plans-pricing/) - Events, Notifications, API Calls, Storage, Emails, Support
*   [Applicasa](http://www.applicasa.com/) - Beta, can't find
*   [Buddy](http://buddy.com/pricing/) - API Calls
*   [CloudMine](https://cloudmine.me/pricing/signup) - User
*   [CloudyRec](http://cloudyrec.com/welcome/pricing) - App, API Calls, File Storage
*   [FeedHenry](http://www.feedhenry.com/) - Can't Find
*   [Flurry](http://www.flurry.com/flurry-appCloud.html) - Beta, can't find
*   [Geoloqi](https://geoloqi.com/pricing) - API Calls
*   [iKnode](http://iknode.io/pricing/) - API Calls, Data Storage
*   [Kii](http://www.kii.com/en/technology/Price) - API Calls, Data Storage, Push Notifications
*   [Kinvey](http://www.kinvey.com/pricing) - Users, API Calls
*   [MobDB](https://www.mobdb.net/pricing) - API Calls, Push Notifications, Data Storage
*   [Parse](https://parse.com/plans) - API Calls, Push Notifications, Data Storage
*   [Proxomo](http://www.proxomo.com/Pricing) - API Calls
*   [Quickblox](http://quickblox.com/pricing/) - API Calls
*   [ScottyApp](http://scottyapp.com/pricing) - Apps, Users, Database Size, Emails
*   [Sencha.io](http://www.sencha.com/products/io/) - Can't Find, Beta
*   [Stackmob](https://www.stackmob.com/pricing/) - Features
*   [Urban Airship](https://go.urbanairship.com/accounts/register/) - Push Messages

I couldn’t find pricing for five of the BaaS providers, because they are in beta, but pricing by API call is definitely the preferred way for the rest of them, with 11 of the 15 using this approach. The rest of them charge based upon a mix of number of users, number of apps, data and file storage, push messages, and email messages. With Stackmob going with pricing based upon feature, add-on or premium services, which can also be from 3rd party services via the [StackMob marketplace](https://marketplace.stackmob.com/).

Personally I don’t think there is one approach to API or BaaS pricing. Seems to me, that different models will work for different industries, companies and even at the application level. But I wanted to document this conversation for my [larger research project around the BaaS space](/trends/baas.php)\--maybe I will have more opinions after I dive in deeper.

Let me know what you think about BaaS pricing.