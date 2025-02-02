---
layout: post
title: Quora Exposes JSON API
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - JSON
  - JSON API
---
Quora has exposed a [JSON](http://www.apievangelist.com/definition-json.php)\-based data API that allows users to access data about a currently logged-in user.

To request particular fields about the currently logged-in user, you can add fields to a query string and append to [http://api.quora.com/api/logged\_in\_user](Quora Exposes JSON API).

Currently supported fields include:

*   Inbox
*   Followers
*   Following
*   Notifs

Here is an example call: [http://api.quora.com/api/logged\_in\_user?fields=inbox,notifs](http://api.quora.com/api/logged_in_user?fields=inbox,notifs)

This will return Inbox and Notification related information for the authenticated user.

This is not a full-blown API release by Quora. Quora engineer Edmond Lau posted information on Quora about the API, stating that it is in its alpha stage and is only meant to support existing [Quora Chrome](http://www.quora.com/Is-anyone-working-on-a-Quora-Chrome-extension) and [Quora Firefox extensions](http://www.quora.com/Is-anyone-working-on-a-Quora-Chrome-extension).

Even though it doesn't have all the supporting elements of an official API release, the fact that the Q&A startup has established [api.quora.com](http://api.quora.com/) for its use, indicates that it plans to invest more energy around an official [Quora API](http://www.quora.com/Edmond-Lau/Quora-Extension-API).