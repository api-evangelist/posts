---
layout: post
title: Where Do I Learn More About APIs?
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/i-love-apis.jpeg
author:
  name: kinlane
tags:
  - APIs
---
I’m closely following the [Oracle v Google](http://www.wired.com/wiredenterprise/2012/05/judge-oracle-google/ "Oracle v Google") case playing out in a court of law right now, and more specifically the Tweet stream of Wired writer, [Caleb Garling](https://twitter.com/#!/calebgarling "Caleb Garling").

According to Garling:

> _"A jury has ruled that Google infringed on Oracle’s copyrights in building a new version of the Java platform for its Android mobile operating system, but it was unable to reach a decision on whether this infringement was acceptable under the law."_

[Google quickly moved for a mistrial based upon this incomplete decision](http://www.wired.com/wiredenterprise/2012/05/oracle-google-verdict/ "Google quickly moved for a mistrial based upon this incomplete decision"), and in a statement to [Wired](http://www.wired.com/wiredenterprise/2012/05/judge-oracle-google/ "Wired"), Google says:

> _"We appreciate the jury's efforts, and know that fair use and infringement are two sides of the same coin,” reads a canned statement from Google sent to Wired. "The core issue is whether the APIs here are copyrightable, and that’s for the court to decide. We expect to prevail on this issue and Oracle’s other claims"._

The case is now moving into other areas which include patent infringement, but today’s portion is what I’m most concerned about, dealing with the API copyright vs. fair use, when Google "mimicked" 37 APIs used by the Java platform while building a new Java engine for Android. While Java APIs

During this case Judge William Alsup defined copyright by saying:

> _"Copyright protects the "expression of ideas" but not a procedures, processes, systems, methods of operation, concepts, principles, or discoveries."_

I’m not 100% sure where I stand on copyright of APIs, I have a lot more education and contemplation to do on the subject. My gut reaction is concern. If you can’t mimic an API interface, what will this do for innovation and growth in the API space?

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist/pinboard/pinboard_in_blue.png)](http://pinboard.in/api/ "PInboard API")

One API I depend on daily is the [Pinboard API](http://pinboard.in/api/ "PInboard API"). Pinboard provides an essential bookmarking API I use in my curation, which is modeled after [Delicious](http://delicious.com/ "Delicious"). This is right off the Pinboard API documentation page:

> _"In order to make life convenient for developers, wherever possible the Pinboard API uses the same syntax and method names as the Delicious V1 API. See differences from Delicious for a full list of areas where the APIs diverge."_

And similarly [Google Cloud Storage API v1](https://developers.google.com/storage/docs/reference/v1/apiversion1) is interoperable with a some cloud storage tools and libraries that work with services such as Amazon Simple Storage Service (Amazon S3) and Eucalyptus Systems, Inc. To use these tools and libraries, all you do is change the request endpoint (URI) that the tool or library uses so it points to the Google Cloud Storage URI, and your up and running.

This kind of interoperability is critical to growth and innovation in all areas of the API sector. What if [AVOS Systems](http://www.avos.com/ "AVOS Systems") (owners of Delicious) decided to file for copyright on the Delicioius API, where would this leave Pinboard? Or what if Amazon copyrighted the web API for EC2 and S3?

I don’t know. I only know enough to be concerned at this point. There aren’t many answers right now. But to quote Jonathan Schwartz, Sun CEO:

> _"We wanted to build the biggest tent and invite as many people as possible,” Schwartz said. “You have open APIs and compete on implementations."_