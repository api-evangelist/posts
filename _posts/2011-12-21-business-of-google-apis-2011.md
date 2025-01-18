---
layout: post
title: Business of Google APIs 2011
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/google_code.jpg
author:
  name: kinlane
tags:
  - Business
  - APIs
---
[![](http://kinlane-productions2.s3.amazonaws.com/google/google_code.jpg)](http://code.google.com/more/)

[ProgrammableWeb says Google has 94 APIs](http://www.programmableweb.com/apis/directory/1?company=Google "ProgrammableWeb says Google has 94 APIs"). I roughly count about [75 going through Google Code](http://code.google.com/more/). I’m more concerned with public web APIs, and Google has Android, Chrome and other non-web APIs, so its hard to tell.

In any case I would consider Google to the largest public web API owner around. I don’t think any other single provider, owns the number of, as well as size of public APIs, that Google does. As with any leading API providers I think there is a lot to learn in studying their approach to API deployment and management.

With this in mind I wanted to take a look at the Business of Google APIs in 2011 as one of my year-end, API reflection posts. I think there are some important lessons to be learned from the work Google did over 2011, to get their API business in order.

Google was already setting the theme for 2011, with the [launch of Google Console in November 2010](http://googlecode.blogspot.com/2010/11/introducing-google-apis-console-and-our.html "launch of Google Console in 2010"). The [Google API Console](https://code.google.com/apis/console/ "Google API Console") helps developers manage their Google API usage across all of thier sites and apps. It was clear, Google was not just looking for a way to get a handle on how they deploy and manage large numbers of APIs, they were acknowledging developers needed a way as well.

[![](http://kinlane-productions2.s3.amazonaws.com/google/Google-APIs-Console-Dashboard.png)](http://apievangelist.com/2011/05/21/google-apis-console/ "Google API Console")

[Google API Console](http://apievangelist.com/2011/05/21/google-apis-console/ "Google API Console") centralized how developers managed the Google APIs they used, traffic generated via these APIs, introduced billing management for some APIs, and provided developers with project and team building tools.  Google supports 30 APIs inside of the API Console now.

In 2011 Google also worked to make their [APIs more discoverable for developers](http://googlecode.blogspot.com/2011/05/google-apis-discovery-service-one-api.html "Google APIs more discoverable") with the launch [Google API Discovery Service](http://code.google.com/apis/discovery/ "Google API Discovery Service"). The [Google API Discovery Service](http://apievangelist.com/2011/05/21/google-apis-discovery-service/ "Google API Discover Service") provides a set of web APIs for discovering metadata across Google APIs by delivering a JSON-based API that provides a directory of supported Google APIs, and a machine-readable discovery document for each API.

[![](http://kinlane-productions2.s3.amazonaws.com/google/google-discover-file-cabinet.png)](http://apievangelist.com/2011/05/21/google-apis-discovery-service/ "Google API Discover Service")

Now developers can integrate Google API discovery into client libraries, IDE plugins and other tools, making it easier to discover the API they need. After providing an API discovery service, Google followed another 2011 trend around deploying the [Google API Explorer](https://code.google.com/apis/explorer/ "Google API Explorer").

Like other API explorers, [Google API Explorer](http://apievangelist.com/2011/03/08/google-api-explorer/ "Google API Explorer") allows users to make calls and explore REST APIs using a web interface, allowing anyone to start using an API without writing any code, even when authentication using Basic Auth or OAuth is required.

API explorers have done a lot to improve the time it takes for developers to get up and running using an API, but nothing beats good quality code samples, and Google put some serious effort into standardized code samples that can be used across Google APIs, in multiple programming languages:

*   [**Google APIs Client Library for PHP (Beta)**](http://googlecode.blogspot.com/search?updated-max=2011-09-09T15:20:00-07:00&max-results=10 Google APIs)
*   [**Client Library for .NET (Beta)**](http://googlecode.blogspot.com/2011/09/google-apis-client-library-for-net-beta.html)
*   [**Objective-C library for a new generation of APIs**](http://googlecode.blogspot.com/2011/08/new-objective-c-library-for-new.html)
*   [**Google APIs Python Library goes to Beta**](http://googlecode.blogspot.com/2011/04/google-apis-python-library-goes-to-beta.html)

Beyond making it easier to discover, explore and manage APIs with Google Discovery, Google Explorer and Google Console in 2011, Google also spent a lot of time addressing API security.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist/Google-OAuth-2-Playground.png)](https://code.google.com/oauthplayground/)

The first step to [improving the security of Google APIs was by supporting SSL](http://googlecode.blogspot.com/2011/03/improving-security-of-google-apis-with.html "improving security across Google APIs by supporting SSL") across all Google APIs. Next Google went all in by not just working to [support OAuth 2.0 across Google APIs](http://googlecode.blogspot.com/2011/03/making-auth-easier-oauth-20-for-google.html "support OAuth across Google APIs"), they want to help developers understand OAuth 2.0, making it easier to secure applications with the standard. To help facilitate this understanding, [Google opened up the OAuth 2.0 Playground](http://googlecode.blogspot.com/2011/11/oauth-20-playground-open-to-developers.ht "Google opened up the oauth playground"), which is meant to simplify experimentation with the OAuth 2.0 protocol and APIs that use the protocol by developers.

With these moves by Google in 2011, I think we can say that SSL support and OAuth 2.0 are two API security essentials that are here to stay. After working on security, Google moved into the legal department with the introduction of a [single Google APIs Terms of Service](http://apievangelist.com/2011/12/12/google-deploys-a-single,-centralized-terms-of-use-for-apis/ "single Google APIs Terms of Service").

Google has rewritten their terms from the ground up with the goal of making them easier to understand for application developers, and one by one, redirecting each API to use the [centralized, easier to understand terms of service](http://code.google.com/apis/terms/index.html "centralized, easier to use terms of service"). At the moment it seems as though most of the APIs that use the central terms of service are content and data related APIs, like Google Moderator and Blogger, while more complex APIs like Youtube and Google Adwords still use their own terms of service.

Overall Google made some pretty significant improvements to get their API house in order. Of course in order to do this they also had to make some hard decision, like deciding to [shut down 18 Google APIs in May](http://googlecode.blogspot.com/2011/05/spring-cleaning-for-some-of-our-apis.html "shut down 18 Google APIs in May"), which included the Google Translate API. A decision they reversed two months later, when they decided it was better to [offer Google Translate as a billable API](/2011/08/25/paid-version-of-google-translate-api/ "offer Google Translate as a Billable API") under Google Console.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist/Tag-Cloud-Google-Translate.png)](/2011/08/25/paid-version-of-google-translate-api/ "offer Google Translate as a Billable API")

As the [API Evangelist](http://apievangelist.com "API Evangelist") I don’t really invent any of the API approaches I write about, I try to shed light on what others are doing. Thats what this post is all about, shedding light on how Google is conducting the business of their APIs, so we can learn from them-- the good and the bad.

I think its important to remember that we are all making this shit up as we go along, of course it should be based on some experience, but ultimately we are in some seriously new territory, and even some of the biggest players in this space fumble the ball. This fact became painfully clear in an [accidental post by Googler Steve Yegge](https://plus.google.com/112678702228711889851/posts/eVeouesvaVX "accidental post by Steve Yegge"), shedding light into the API strategy of not just Google, but also Amazon.

So what do I take from Google’s approach to APIs in 2011?

*   API discovery is important
*   API exploration is important
*   Centralized billing and reporting are essentials
*   Good quality code samples are essential
*   Security with SSL and OAuth 2.0 for APIs is standard
*   The legal around APIs needs to be easier and standardized
*   Sometimes, APIs go away
*   We are all making this shit up as we go along

A lot of this is what we already are seeing from API service providers in the space like [3Scale](http://apievangelist.com/serviceproviders/3scale.php "3Scale"), [Apigee](http://apievangelist.com/serviceproviders/apigee.php "Apigee"), Atmosphere and [Mashery](http://apievangelist.com/serviceproviders/mashery.php "Mashery"). But, what I don’t see, is anyone addressing discoverability, easy legal and centralized billing, management and reporting from a developers perspective.

Google is addressing all of this because its in their best interest for ALL developers to be successful, where API service providers tend to focus on the success of developers who use their client APIs, not ALL developers.

Well, maybe in 2012 a service provider can step up with a solution that help developers discover and manage their business and legal across “ANY” API, or maybe Google can open the doors to any API provider to use the Google API platform as part of any Google Apps account?