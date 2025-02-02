---
layout: post
title: The Flora and Fauna of the Twitter Ecosystem
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Field-Guide-Tweets.png
author:
  name: kinlane
tags:
  - Twitter
  - Ecosystem
---
Twitter has an innovative approach to presenting the objects that make up the Twitter Platform. They have built a [field guide to Twitter Platform objects](https://dev.twitter.com/docs/platform-objects "field guide to Twitter Platform objects"), designed like an [Audubon Society](http://www.audubon.org/ "Audubon Society") field guide, describing the four primaty Twitter objects:

*   **Tweets** - Also known as a Status Update, Tweets are the basic atomic unit of all things Twitter. Users [create Tweets](https://dev.twitter.com/docs/api/1/post/statuses/update). Tweets can be [embedded](https://dev.twitter.com/docs/embedded-tweets), [replied to](https://dev.twitter.com/docs/api/1/post/statuses/update), [favorited](https://dev.twitter.com/docs/api/1/post/favorites/create/%3Aid), [unfavorited](https://dev.twitter.com/docs/api/1/post/favorites/destroy/%3Aid), [retweeted](https://dev.twitter.com/docs/api/1/post/statuses/retweet/%3Aid), [unretweeted](https://dev.twitter.com/docs/api/1/post/statuses/destroy/%3Aid) and [deleted](https://dev.twitter.com/docs/api/1/post/statuses/destroy/%3Aid).
*   **Users** - Users can be anyone or anything. They [tweet](https://dev.twitter.com/docs/api/1/post/statuses/update), [follow](https://dev.twitter.com/docs/api/1/post/friendships/create), [create lists](https://dev.twitter.com/docs/api/1/post/lists/create), have a [home\_timeline](https://dev.twitter.com/docs/api/1/get/statuses/home_timeline), can be [mentioned](https://dev.twitter.com/docs/api/1/get/statuses/mentions), and can be[looked up](https://dev.twitter.com/docs/api/1/get/users/lookup) in bulk.
*   **Entities** - Entities provide metadata and additional contextual information about content posted on Twitter. Entities are never divorced from the content they describe. After May 14th, 2012 [Tweet Entities](https://dev.twitter.com/docs/tweet-entities) will be returned wherever [Tweets](https://dev.twitter.com/docs/platform-objects/tweets) are found in the API. Entities are instrumental in [resolving URLs](https://dev.twitter.com/docs/tco-url-wrapper).
*   **Places** - Places are specific, named locations with corresponding geo coordinates. They can be attached to [Tweets](https://dev.twitter.com/docs/platform-objects/tweets) by specifying a place\_id when [tweeting](https://dev.twitter.com/docs/api/1/post/statuses/update). Tweets associated with places are not necessarily issued from that location but could also potentially be _about_ that location. [Places](https://dev.twitter.com/docs/api/1/get/geo/id/%3Aplace_id) can be [created](https://dev.twitter.com/docs/api/1/post/geo/place) and [searched for](https://dev.twitter.com/docs/api/1/get/geo/search). Tweets can also be [found](https://dev.twitter.com/docs/places/finding-tweets-about-places) by place\_id.

It is a creative way to educate users about the Twitter API, making it more visually appealing. Beyond that, I'm not sure it helps developers get up and running using the API, but who knows...it might make it more accessible to some users.

Have you seen any other creative wasy of displaying API documentaton?