---
layout: post
title: Google API Explorer
url: http://apievangelist.com/2011/03/08/google-api-explorer/
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags: []
---
Just days after Apigee made their [API explorer free and embeddable](http://apievangelist.com/2011/03/07/apigee-api-console-is-now-free-for-everyone-to-use/ "Apigee API Explorer"), Google has [announced a new API Explorer](http://googlecode.blogspot.com/2011/03/introducing-google-apis-explorer.html "Google API Explorer").

The new Google API Explorer is an interactive interface for playing with Google APIs.

[Google API Explorer](https://code.google.com/apis/explorer/ "Google API Explorer") currently supports:[![](http://4.bp.blogspot.com/-PidOKEWFRR8/TXE0FTOPL8I/AAAAAAAAAJA/zZlx-KoWeXw/s400/2011-03-04-google_apis_explorer.jpg)](http://4.bp.blogspot.com/-PidOKEWFRR8/TXE0FTOPL8I/AAAAAAAAAJA/zZlx-KoWeXw/s400/2011-03-04-google_apis_explorer.jpg)

*   Google Buzz API
*   Google Custom Search API
*   Diacritize API
*   Moderator API
*   Shopping API
*   Translate API
*   URL Shortener API

The API Explorer interface provides public or private access to APIs, with the private access handling the necessary [OAuth](http://oauth.net "OAuth") authentication.

By selecting an API you wish to explore, you can see all the available methods and parameters along with documentation. Just fill out the parameters for the method you want to try and click execute. The Google Explorer composes the request, executes it, and displays the response.

Google provides some real-life examples anyone can execute:

*   [Expand a goo.gl URL](https://code.google.com/apis/explorer/#_s=urlshortener&_v=v1&_m=url.get&shortUrl=http://goo.gl/jN3IJ "Expand a goog.gl URL") using the URL Shortener API
*   [Translate a phrase to French](https://code.google.com/apis/explorer/#_s=translate&_v=v2&_m=translations.list&q=APIs%20explorer%20is%20awesome!&target=fr&source=en "Translate a phrase to French") using the Translate API
*   [List your personal Buzz posts](List your personal Buzz posts "List Personal Buzz Posts") using the Buzz API (requires private access)

The Google Explorer provides an quick access tool for developers to discover what APIs Google offers, and enables users to immediately start using.

This type of discovery and instant visualization can be the difference between API adoption or choosing to go with an alternative.

###### Related articles

*   [API Area - Common Building Blocks](http://apievangelist.com/2011/03/07/api-area-common-building-blocks/) (apievangelist.com)
*   [Apigee To-Go: Build, Skin, and Embed Your Own API Console, Free](http://blog.apigee.com/detail/apigee_to_go/) (apigee.com)
*   [Introducing the Google APIs Explorer](http://googlecode.blogspot.com/2011/03/introducing-google-apis-explorer.html) (googlecode.blogspot.com)