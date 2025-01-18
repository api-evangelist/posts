---
layout: post
title: Help EFF Make Case For No Copryight on APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/electronic-frontier-foundation-logo.gif
tags:
  - APIs
---
The [Electronic Frontier Foundation (EFF) needs our help](https://www.eff.org/deeplinks/2012/11/no-copyrights-apis-help-us-make-case) to explain to the Federal Circuit Court on why there should **NOT** be copyrights on APIs. As EFF published today:

> _Earlier this year, we applauded District Court Judge Alsup for getting it right and holding that, as a matter of law, one could not copyright APIs. The case, Oracle v. Google, is now on appeal to the Federal Circuit, where a three-judge panel is going to revisit Judge Alsup’s ruling._

The EFF is soliciting the our assistance in how to help build the case, asking for feedback on two example areas:

1.  Software reimplementing someone else’s API, calling someone else’s API, or any other uses of third-party APIs for interoperability, competition, or innovation.
2.  Reimplementation of an API, where the resulting software benefitted the original API creator, perhaps by increasing the creator’s user base or otherwise benefitted the developer community

I think we are in the infancy of API deployment, so it’s going to be tough to find many solid examples.  But I think the two areas we can demonstrate the importance of no copyright on APIs, is within two business sectors that evolved on the web, using APIs and are critical to business and government today:

*   **Cloud** - As EFF said, Eucalyptus reimplemented the Amazon API to offer a competing cloud storage service. You also saw the same with [first implementation of Google Developer Storage](http://www.kinlane.com/2010/09/01/google-storage-for-developers-interoperability/) and up to & other providers: [Dunkel Cloud Storage](http://trac.cyberduck.ch/wiki/help/en/howto/dunkel), [âHost Europe Cloud Storage](http://www.hosteurope.de/produkte/Cloud-Storage), [GreenQloud Storage Qloud](http://trac.cyberduck.ch/wiki/help/en/howto/greenqloud), [ScaleUp Technologies](http://www.scaleupcloud.com/), [âConnectria Cloud Storage](https://www.mh.connectria.com/rp/order/cloud_storage_index), [Lunacloud](http://trac.cyberduck.ch/wiki/help/en/howto/lunacloud), and [DreamObjects Cloud Storage](http://trac.cyberduck.ch/wiki/help/en/howto/dreamobjects) providing unprecedented interoperability for cloud computing.
*   **Social** - Same as with cloud you have seen competition pop up for both Twitter and Facebook, mimicking their platform and APIs. Platforms like [App.net](https://join.app.net/ "App.net") have copied Twitter’s social network providing competition, and potential value to Twitter users by allowing developers to use App.net for things they can't use Twitter for.

I think another clear example of open API design being used to help users is Pinboard’s implementation of the Delicious API:

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/pinboard/pinboard-icon.png)

**[Pinboard](http://pinboard.in/api/ "Pinboard")** - Wherever possible the Pinboard API uses the same syntax and method names as the Delicious V1 API. This implementation allowed users to seamlessly export Delicious bookmarks accumulated over several years to Pinboard when Delicious was sold by Yahoo.  If Yahoo had copyrighted their API design, Pinboard could never have done this.

A slightly different approach to offering benefit to users via an open API design is surrounding the Instagram API:

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/instagram/instagram-icon-250.png)

**[Instagram API](http://apievangelist.com/2011/02/08/instagram-launches-api/)** \- In 2010, before Instagram itself launched an API, a passionate developer launched a rogue API for the popular photo sharing platform based upon Instagram's own internal API design they used to drive the popular iPhone application. The move showed Instagram the demand for an API, and after designing and launching their own asked the rogue API to shut down. A slightly different scenario, but if API design was copyright this may not have been possible. We’ve seen the same approach with a [rogue Pinterest API](http://apievangelist.com/2012/05/25/lack-of-pinterest-api-is-a-lack-of-api-business-strategy/), but it hasn’t resulted in the same response from Pinterest unfortunately. But community driven API design has a lot of potential for opening up companies and encouraging API innovation.

I strongly believe that APIs have massive potential for innovation across many business sectors. The copyright of API design would eliminate much of this potential. Open API design allows for healthy competition, interoperability and innovation as we’ve seen with cloud and social. But open API design can also augment the lack of standards through market leadership, helping grow healthy industries and essential online utilities. Amazon EC2 and S3 design standards are clear examples of this in the wild.

Cloud and social are fast become essential components in our everyday lives, but open API have the potential to become mission critical with implementations like [Open311](http://open311.org/). Some API designs are just too important to be proprietary. I would argue Twitter, Amazon S3 and Amazon EC2 also fall into this category and need to remain open for the greater good.

Open API design reuse represents the future of API communication. Companies like [Singly](https://singly.com/ "Singly"), [Temboo](https://www.temboo.com/ "Temboo"), [Webshell](http://webshell.io/ "Webshell") and [Zapier](https://zapier.com/ "Zapier") are building API aggregation, automation, and languages that very much rely on flexible API terms of use, as well as API design reuse. Copyright of API design would prevent companies from openly competing, offering redunancy as well as limit new and more meaningful APIs to be derived from existing API implementations.

Without the ability to copy, mimic, mashup, translate, emulate and re-define API design we won’t be able to become more fluent in communicating via web and mobile apps using APIs. We are just beginning to understand online communication via the power of mobile apps. As we still grunt and groan while communicating via APIs--let’s not stunt our growth and development with allowing API design to be copyrighted.