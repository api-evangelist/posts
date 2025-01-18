---
published: true
layout: post
title: >-
  The New AWS API (Gateway): Anyone Who Does Not Do This, Will Be Fired. Thank
  You. Have A Nice Day! - Jeff Bezos
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist/aws/aws-logo.jpg
author:
  name: kinlane
tags:
  - Gateway
  - AWS
---
It has been almost 10 years since Amazon shifted the conversation on the Internetz, with their release of [Amazon S3](http://apievangelist.com/2011/03/12/history-of-apis--amazon-s3/), and [Amazon EC2](http://apievangelist.com/2011/03/12/history-of-apis--amazon-ec2/) \-- showing us that web APIs were more than just a hobby thing you do in this new social kids game, but that you could actually deploy any digital resource, including storage and compute, at a global scale.

[As I process the release information about AWS API Gateway today](https://aws.amazon.com/blogs/aws/amazon-api-gateway-build-and-run-scalable-application-backends/), [I can hear the echoes of Jeff Bezos's now mythical mandate](http://apievangelist.com/2012/01/12/the-secret-to-amazons-success-internal-apis/): 

*   All teams will henceforth expose their data and functionality through service interfaces.
*   Teams must communicate with each other through these interfaces.
*   There will be no other form of inter-process communication allowed: no direct linking, no direct reads of another team’s data store, no shared-memory model, no back-doors whatsoever. The only communication allowed is via service interface calls over the network.
*   It doesn’t matter what technology they use.
*   All service interfaces, without exception, must be designed from the ground up to be externalizable. That is to say, the team must plan and design to be able to expose the interface to developers in the outside world. No exceptions.

Closing with:

>  **_Anyone who doesn’t do this will be fired.  Thank you; have a nice day!_** 

In 2015, Bezos is now making this mandate to you, in your own business operations. If you do not embrace APIs, as the next step in the evolution of the web, you will not make the cut. Goodbye! In the early 2000's, it was unacceptable to Bezos that his businesses didn't operate in an API -entric way. By 2006, Amazon was leading by example, showing all of us how Amazon had identified essential digital assets, optimze their usage internally using APIs, and then externalize via a publicly available API driven platform--something we now call cloud computing. In 2015, AWS is continuing to define their core competencies as API centric services, but this time opening their methodology to you, so that you will embark on the same API journey with your own business and organization.

As the AWS API Gateway press release information states:

_“create an API that acts as a “front door” for applications to access data, business logic, or functionality from your back-end services, such as workloads running on Amazon Elastic Compute Cloud (Amazon EC2), code running on AWS Lambda, or any Web application”_

The new gateway will take all that existing infrastructure you have accumulated (in the cloud), and it:

_“..handles all the tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls, including traffic management, authorization and access control, monitoring, and API version management.”_

Distilling down the lessons from the last five years, and selling it:

_“With the proliferation of mobile devices and the rise in the Internet of Things (IoT), it is increasingly common to make backend systems and data accessible to applications through APIs.”_

The new AWS API Gateway reflects all the modern approaches to API operations:

*   Build, Deploy and Manage APIs
*   API Lifecycle Management
*   SDK Generation
*   API Operations Monitoring
*   AWS Authorization
*   API Keys for Third-Party Developers
*   Enhancing Legacy Services
*   Traffic Management
*   Data Transformation

I'm on board!! I have been drinking the AWS Kool-Aid (oh yeah) since 2006. I was an early adopter, and honestly have built my career as the API Evangelist, on the work of Amazon, and what I have learned from their approach. To me, the release of the AWS API Gateway is a pretty significant milestones in the evolution of what is API. By 2006 the web had matured, and the Internet was being used for much more than just consumption, the API community was realizing that we could deploy vital digital resources using the Internet as a vehicle. Almost 10 years later, Amazon understands the opportunity in enabling you to do this for yourself--helping you either embark on, or speed up your API journey.

The best part is, this is all for the low, low price of:

_"$3.50 per million API calls received, plus the cost of data transfer out, in gigabytes."_

Allowing you to manage any of your digital assets as an API, using AWS API Gateway, is just the beginning of the expertise that Amazon is packaging up for all of us in the latest release. [AWS API Gateway is just the initial technical building block](https://aws.amazon.com/api-gateway/) they are making available. [AWS is also continuing the business conversation with their release of the AWS Partner Program for SaaS](https://aws.amazon.com/blogs/aws/new-aws-partner-program-for-saas/), and [beating the politics of API drum of their Identity and Access Management (IAM), and security solutions, via the AWS platform](http://blogs.aws.amazon.com/security/).

I'm a big fan of the business opportunities that AWS has crafted, and shared with the world. I am also a big supporter of the standardization around IAM and security, that they are pushing (important). [I just wrote about their API key practices, which are something the rest of the API space should emulate](http://apievangelist.com/2015/07/07/time-to-remove-or-rotate-your-api-access-keys/). I think there are endless lessons that the API industry can be extracted from Amazon, and their "web of services". As with Twitter, I will keep holding up Amazon as a model for how we can do things right, but where I also think the healthy API focus begins to be degraded by big money, big companies, big systems, and a belief in scope and scale in a more centralized wall garden, rather than an open, truly distributed approach.

Like earlier offerings:

_“Amazon API Gateway is a pay-as-you-go service that takes care of all of the undifferentiated heavy lifting involved in securely and reliably running APIs at scale.”_

You get all the benefits:

*   Scalable
*   Efficient
*   Self-Service
*   Highly Usable
*   Reliable,
*   Secure
*   Performant
*   Cost-Effective

You leave all the heavy lifting to Amazon. As I said, I'm a big Amazon Kool-Aid (tm) drinker--have been since the early days. While the release of AWS API Gateway is a huge milestone along the API journey for me, this is where the vision begins to fall short for me. Amazon, and Google at this point are starting to feel like just a newer version of historical approaches to delivering software, and take on a "VENDOR" vibe for me. I know SalesForce, Amazon, Google, and Twitter have all shifted the conversation, making a huge impact on how we deliver software, and architect our business systems, and will deliver on many of these comfort points, but at some point, when there is enough scale, and money on the table, everything eventually becomes what we all were seeking to disrupt (aka we have nothing nice).

I will keep using Amazon, and will explore deploying APIs with the new AWS API Gateway. I know Amazon put a lot of thought into the features of this service, as well as the naming, but the concept of a gateway under-delivers for me. I understand as a large organization you have a lot of legacy resources to move forward, and gateway solutions are very appealing. The problem is it abstracts away a lot of the heavy lifting that you should be doing, and need to be in tune with. When you rely on a single platform to deliver this for you, you aren't evolving -- you are stuck in a corporate circle jerk. Your infrastructure portfolio should be diverse, modular, and meaningful, reducing the bottlenecks, and points of failure. Our increased reliance on AWS isn't moving forward, its slowly being sucked back into what we just escaped.

Don't get me wrong. I am on board with the AWS vision of the cloud (changed my life). I just do not think it is as decoupled, and distributed as it could be. Sure you can deliver on-premise, alongside your cloud infrastructure, but the spaghetti mess we proxy with the AWS API Gateway seems similar to what we gateway(ed) 5, 10, and 15 years ago. I enjoy the convenience a gateway brings to the table, and the ability to quickly define, deploy, manage, and monitor from our existing infrastructure, but I feel like some of the more important devops and microservice related lessons are being paved over in this vision. 

In the end, I'm very excited about what the AWS API Gateway release means for the overall API industry. I also know that my vision of what should be, will not win out in the end, and that we are only capable of baby steps beyond what just was, especially when the powers that be, begin to tune into the conversation, and change things to be more in tune with their objectives. My mission is to just push back, and course correct where I can, until I'm ground up by the machine.