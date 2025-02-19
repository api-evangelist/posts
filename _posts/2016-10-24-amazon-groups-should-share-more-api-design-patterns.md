---
layout: post
title: Amazon Groups Should Share More API Design Patterns
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/squirrelbin_arch.png
atomdate: 2016-10-24T16:00:00.000Z
tags:
  - Design
  - Patterns
  - Amazon
---
The sharing of common API design patterns is something we are really bad at in the API space. I'm not a believer that there is one API design pattern to rule them all, but I am a believer in learning from what works, consuming other people's APIs, and sharing design tips over the cubicle wall. I don't believe that everyone should be 100% REST-compliant in the crafting of their APIs, but you should be picking your head up from time to time, and learning from what the rest of the world is up to, especially across the other groups within your own company.

I tend to shy away on critiquing companies on API design, and prescribing any specific approach, but I can't help but point out inconsistencies in any approach, when it is clear that they aren't tuning into some of the common patterns out there, especially between their own internal groups. An example of this can be found at one of the API gods, Amazon Web Services. Amazon isn't known for their RESTful APIs, which is something I can overlook, but when it comes to their lack consistency between their different APIs, I think there are lessons for all of us to learn from.

I have not hacked against all of the Amazon APIs, but here are the four distinct patterns I've seen:

*   **[S3](http://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketOps.html) -** /?{method}
*   **[EC2](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Operations.html) -** /?Action={method}
*   **[Route 53](http://docs.aws.amazon.com/Route53/latest/APIReference/API_Operations_Amazon_Route_53.html) -** /2013-04-01/{methodname}
*   **[](http://docs.aws.amazon.com/Route53/latest/APIReference/API_Operations_Amazon_Route_53_Domains.html)[Route 53 Domains](http://docs.aws.amazon.com/Route53/latest/APIReference/API_Operations_Amazon_Route_53_Domains.html) -** route53domains.us-east-1.amazonaws.com/ header: x-amz-target:Route53Domains\_v20140515.{method}

There might be additional patterns employed over at other Amazon APIs, but these are the four that I'm exposed to in my own integrations. The presence of two separate patterns within the Route 53 team was what prompted me to write this post. While I'm not a fan of the action={method} approach, which is the most common AWS pattern I have seen used, the passing of method as part of custom header just seems even wackier to me. 

I do not get dogmatic about specific API design patterns, but I do think that a lack of awareness of common patterns, especially across groups within the same company is counterproductive. I think Amazon has done amazing things as a pioneer in the space, forever changing how we deliver data, content, and algorithmic resources online, but I think they would benefit from a company-wide API design campaign. [Something like Microsoft, Paypal, and others have done, to help standardize how they design APIs across all internal groups](http://design.apievangelist.com/tools/design-guides/).