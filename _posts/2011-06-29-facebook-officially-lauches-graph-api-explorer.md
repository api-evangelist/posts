---
layout: post
title: Facebook Officially Lauches Graph API Explorer
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Facebook
---
Facebook just [officially launched the Graph API Explorer](http://developers.facebook.com/blog/post/517/ "officially launched the Graph API Explorer"), a tool allowing developers to quickly explore the social graph of people, photos, events, pages and the relationships between them, via the [Facebook Graph API](https://developers.facebook.com/docs/reference/api/ "Facebook Graph API").

Like other [API explorers](http://apievangelist.com/2011/03/24/explorers-open-api-access-beyond-developers/ "API Explorers"), the [Graph API Explorer](https://developers.facebook.com/tools/explorer/ "Graph API Explorer") allows developers to make requests against the API and see formatted results in-line.

The Graph API Explorer interface allows you to obtain an access\_token with the specific permissions necessary to access data, navigating the same permissions dialog users will see when permissions are requested in a production app.

The Graph API Explorer then allows developers to switch between HTTP GET, POST and DELETE to get, create, update or delete objects. When POSTing to the API, you can also provide a list of fields and values that you want to send as parameters to the API.

For every request the Graph API Explorer provides formatted results, allowing developers to move between objects in the graph by click their Ids, showing the details of each object on the social graph. Just like the real Facebook application, the Graph API Explorer only shows you the objects and data you have acess to see, and that you give the Graph API Explorer permission to access on your behalf.

The [Facebook Graph API Explorer was originally deployed by a Facebook employee](http://apievangelist.com/2011/05/17/facebook-joins-api-explorer-game-sort-of/ "Facebook Graph API Explorer was originally deployed by a Facebook employee"), and now is being officially as part of the Facebook developers program, and is part of a growing trend of RESTful API explorers like [Apigee Console](http://apievangelist.com/2011/03/07/apigee-api-console-is-now-free-for-everyone-to-use/ "Apigee Console") and [Google API explorer](http://apievangelist.com/2011/05/21/google-apis-explorer/ "Google API Explorer").