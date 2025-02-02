---
layout: post
title: AT&T's new Cloud API Platform
url: http://apievangelist.com/2012/01/16/atts-new-cloud-api-platform/
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/ATT-API-Platform.png
author:
  name: kinlane
tags:
  - Cloud
  - Platform
---
kinlane-productions2.s3.amazonaws.com [![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/att/ATT-API-Platform.png)](http://developer.att.com/)

_This is a guest post by [Travis Spencer](http://travisspencer.com/ "Travis Spencer"), a Software engineer specializing in federation, SSO, cloud computing, Web services, & enterprise architecture._

This week, [AT&T announced](http://www.attinnovationspace.com/innovation/story/a7779618) the release of a [new API platform](http://developer.att.com/) that is made up of various components designed to simplify mobile Web application development and utilize resources only available through them. Specifically, the new offering is made up of the following:

*   A number of RESTful cloud services such as device location, MMS, digital signing, and direct carrier billing
*   An application marketplace and distribution channel
*   A hosting environment for the HTML5 and server-side components used by applications running on the platform
*   SDKs for common development environments such as C#, PHP, Ruby, and Java that can be used to call the API
*   An HTML5 client-side SDK built atop Sencha Touch that abstract away the various mobile UI differences of Android, iOS, Blackberry and others while simultaneously simplifying the integration w/ their new cloud services

kinlane-productions2.s3.amazonaws.com ![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/att/att-1.png)

These are complimented by extensive samples, documentation, forums, on-line support, and a non-production environment where you can create an unlimited number of test applications.

After [joining the developer program](https://developer.att.com/developer/urlRouter.jsp?referer=callToAction), you can use the portal to create applications. When you do so, you specify which services your application will use (as shown in the adjacent screenshot). If you are developing a mobile Web application w/ HTML5, the SDK for that platform greatly simplifies the process and reduces the effort required.

kinlane-productions2.s3.amazonaws.com ![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/att/att-2.png)

It does this using the architecture shown in the following figure. As depicted, an HTML5 application calls the new cloud API via a proxy (possibly hosted by AT&T). This intermediary hides the security of the API in a Sencha plug-in, simplifying the programming model clients must follow.

This JavaScript library ensures that a user has authorized an application to access her AT&T resources without having to share a username or password. It does this using a standard security protocol called OAuth, which many other APIs [discussed previously on this blog](/blog/tag.php?Search_Tag=OAuth) also use. Because all calls to the API go through this proxy, the fact that the user has authorized the application can be maintained, ensuring that this step is only done once (or at least on an infrequently basis). After this initial call, the proxy will tack on a token to subsequent ones, proving the user has granted the application the right to use their resources. (See my other blog post for a [deeper dive into the security of the API](http://travisspencer.com/blog/2012/01/atts_use_of_oauth_in_new_api_p).)

Once the application is done, you can deploy it into production. After doing so, you can monitor it in the same management portal. The available reports show you API response time, number of MMS and SMS messages sent, the number of errors encountered, the number of payments made, and more. This type of data will help measure ROI, optimize future releases, and better design other applications. Once the app is live, it can also be submitted to the AppCenter (though not through the portal). This widget presents applications to AT&T subscribers right on their devices, helping market your inventions.

After digging into and toying w/ this new platform for a bit, I have to say I’m impressed. Not every mobile network operator could pull this off, especially to the extent and quality AT&T has done. Their use of an industry standard like OAuth, a common architectural paradigm like REST, and an extension to a popular framework like Sencha is very modern and appealing, which is unexpected coming from an industry where the opposite is often the case. These things together w/ the fact that the API exposes resources only available from the carrier itself, certainly make the API worth checking out.