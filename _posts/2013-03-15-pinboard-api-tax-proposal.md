---
layout: post
title: Pinboard API Tax Proposal
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/pinboard-icon.png
author:
  name: kinlane
tags: []
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/pinboard/pinboard_in_blue.png)](https://pinboard.in)

Maciej Ceglowskiis, the founder of popular social bookmarking platform [Pinboard](https://pinboard.in),made an [interesting proposal over on the Pinboard Google Group](https://groups.google.com/d/msg/pinboard-dev/PidYOmyBaxI/mLDKIzC6olgJ):

_I've been thinking about imposing an API tax, the proceeds of which would go into improving API infrastructure and offsetting operating costs, structured along these lines:_

*   *   _API free to use for your own Pinboard account_
    *   _Every API client making requests on behalf of someone else must register an app identifier_
    *   _$20/year tax if your app makes requests for over 100 Pinboard accounts_
    *   _$100/year tax if your app makes requests for over 1000 Pinboard accounts_
    *   _Possibly additional price levels to waive certain rate limits_

_Think of it as a road tax that then pays for further construction, repair, and people in orange vests._

I’m guessing that Maciej has a lot of experience to back his proposal, watching how developers use Pinboard for their own purposes, or on behalf of a user via a client. I heavily depend on Pinboard for my curation at API Evangelist, so API access would remain free for me. I’m not sure how I would feel if I was building a client.

On the forum, there is very interesting feedback from Matt Schmidt, developer of [PinDroid](https://play.google.com/store/apps/details?id=com.pindroid), the leading Pinboard client for Android:

_I'm very much against this. Why would you tax the makers of the apps that help drive use of your product, rather than the users themselves? To extend your road use tax analogy, this is like taxing the car companies for their customer's use of the roads._

_I offer PinDroid as a free, open source app and have no interest in making money off it, but I also have no interest in losing money on it. Why not offer api access as a premium account feature (like archiving) for an extra buck instead?_

_To be clear, if such a "tax" were to be implemented, I will have to stop developing and supporting PinDroid and take it off the market._

Matt provides some real life feedback, that I can’t. PindDroid is a vital player in the PinBoard ecosystem, that could be hurt by such a tax. Free and open source code and clients are a vital aspect of any API ecosystem, you definitely want to understand how this layer will be affected by such a tax.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/pinboard/pindroid.png)](https://play.google.com/store/apps/details?id=com.pindroid)

Maciej just made this proposal today, so the conversation is fresh. Head over to the [Pinboard Google Group](https://groups.google.com/d/msg/pinboard-dev/PidYOmyBaxI/mLDKIzC6olgJ) to weigh in. I’ll post another story after the conversation dies down, providing more thoughts about API taxes.

Thanks Marsh ([@earth2marsh](https://twitter.com/earth2marsh)) for alerting me to the conversation!