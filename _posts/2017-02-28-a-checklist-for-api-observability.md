---
layout: post
title: A Checklist For API Observability
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_observability_lighthouse.jpg
atomdate: 2017-02-28T23:00:00.000Z
tags:
  - Observability
---
I have had [the Wikipedia page for Observability](https://en.wikipedia.org/wiki/Observability) open in a browser tab for weeks now. [I learned about the concept from Stripe a while back](http://apievangelist.com/2016/10/25/thinking-about-an-api-observability-stack/) and is something that I am looking to help define APIs from an external vantage point. In this world of fake news and wild promises of artificial intelligence and machine learning, we need these black boxes to be as observable as they can--I am hoping that APIs can be one of the tools in this observability toolbox.

Stripe is approaching this concept from the inside, with a focus on stability and reliability of their API operations. I am focusing on this concept from the outside, to "measure how well internal states of a system can be inferred by knowledge of its external outputs". More of a regulatory, auditing, and journalistic way of thinking, but in the API way of doing things. Some of this is about understanding, but some of it is also about holding providers accountable for what they are peddling.

The other day I mapped out what API monitoring means to me, [rebranding it as what I'd prefer to call API awareness](http://apievangelist.com/2017/02/16/trying-to-define-api-awareness/). I went through the elements I use to understand what is going on with APIs across the sector, but this time I am thinking about them in terms of observability. Meaning, not what I'm doing to be aware of APIs, but what is expected from providers to meet (my) minimum viable definition of a platform being observable.

*   **Discovery -** Do APIs exist? Are they easily discoverable? Are they public? Can anyone put them to use?  
     
    *   **Applications** - Find new applications built on top of APIs.
    *   **People** - People who are doing interesting things with APIs.
    *   **Organization** - Any company, group, or organization working with APIs.
    *   **Services** - API-centric services that might help solve a problem.
    *   **Tools** - Open source tools that put APIs to work solving a problem.

*   **Versions -** What versions are currently in use, what new versions are available, but not used, and what future versions are planned and on the horizon.
*   **Paths** - What paths are available for all available APIs, and what are changes or additions to this stack of resources.
*   **Schema** \- What schema are available as part of the request and response structure for APIs, and available as part of the underlying data model(s) being used. What are the changes?
*   **SDKs** - What SDKs are available for the APIs I'm monitoring. What is new. What are the changes made regarding programming and platform develop kits?  
      
    *   **Repositories** - What signals are available about an SDK regarding it's Github repository (ie. commits, issues, etc.)
    *   **Contributors** - Who are the contributors.
    *   **Forks** - The number of forks on an SDK.
*   **Communication** - What is the chatter going on around individual APIs, and across API communities. We need access to the latest messages from across a variety of channels.  
      
    *   **Blog** - The latest from each API blog.
    *   **Press** - Any press released about APIs.
    *   **Twitter** - The latest from Twitter regarding API providers.
    *   **Facebook** - The latest Facebook posts from providers.
    *   **LinkedIn** - The latest LinkedIn posts from providers.
*   **Issues** - What are the current issues with an API, either known by the provider or possibly also reported from within the community.
*   **Change Log** \- What changes have occurred to an API, that might impact service or operations.
*   **Road Map** - What planned changes are in the road map for a platform, providing a view of what is coming down the road.
*   **Monitoring** - What are the general monitoring statistics for an API, outlining its overall availability.
*   **Testing** - What are the more detailed statistics from testing APIs, providing a more nuanced view of API availability.
*   **Performance** - What are the performance statistics providing a look at how performant an API is, and overall quality of service.
*   **Authentication** - What are all of the authentication approaches available and in-use. What updates are there regarding keys, scopes, and other maintenance elements of authentication.
*   **Security** - What are the security alerts, notifications, and other details that might impact the security of services, or the approach taken by a platform to making sure a platform is secure.
*   **Terms of Service** \- What are the changes to the terms of service, or other events related to the legal operations of the platform.
*   **Licensing** - What licenses are in place for the API, its definitions, and any code and tooling put to use, and what are the changes to licensing.
*   **Patents** - Are there any patents in play that impact API operations, or possibly an entire industry or area of API operations.
*   **Logging** - What other logging data is available from API consumption, or other custom solutions providing other details of API operations.
*   **Plans** - What are the plans and pricing in existence, and what are the tiers of access--along with any changes to the plans and pricing in the near future.
*   **Analysis** - What tools and services are available for further monitoring, understanding, and deriving intelligence from individual APIs, as well as across collections of APIs.
*   **Embeddables** - What embeddable tooling are available for either working with individual APIs, or across collections of APIs, providing solutions that can be embedded within any website, or application.
*   **Visualizations** - What visualizations are available for making sense of any single API or collections of APIs, providing easy to understand, or perhaps more complex visualizations that bring meaning to the dashboard.
*   **Integration** - What integration platform as a service (iPaaS), continuous integration, and other orchestration solutions are available for helping to make sense of API operations within this world.

I do not think APIs being present automatically mean a company, it's data, content, or algorithms are observable. This list represents what I feel enables and empowers observability, and are the key areas where I think companies need to work on when it comes to ensuring their operations are more observable. I pulled this list of elements from my own toolbox for monitoring the API sector but is trimmed down specifically for platform operators who might be thinking about how they can make things more observable for everyone involved, internal or external. 

If you are like me and operating outside the corporate firewall, this list represents the areas you should be encouraging platform operators to invest in when it comes to pulling back the current a little bit more. Different folks will read this post and walk away with different takes on what observability might mean. Some will view it as a good thing, while others will see it is as API driven regulatory interference. Your take probably has more to do with your position in the conversation, than it does to the observability of anything. 

Now for some concrete examples. What is the observability of the Facebook news algorithm? What is the observability of the Twitter feed? [What is the observability of our credit score?](https://en.wikipedia.org/wiki/Credit_score) [How observable is COMPAS as it evaluates its risk score for whether a criminal offender will reoffend?](http://doc.wi.gov/about/doc-overview/office-of-the-secretary/office-of-reentry/compas-assessment-tool) [How observable is Chicago's food inspection algorithm?](https://github.com/Chicago/food-inspections-evaluation) [How observable is the RSA algorithm which drives cryptography?](https://en.wikipedia.org/wiki/RSA_\(cryptosystem\)) [How observable is algorithmic trading across stock markets?](https://en.wikipedia.org/wiki/Algorithmic_trading) These are just a handful of some relatable algorithms when in reality there are numerous micro impacts of algorithms felt each moment, of each day, as we navigate our worlds.

I do not think there are easy answers when it comes to [algorithmic transparency](https://apievangelist.com/2016/08/04/pushing-for-more-algorithmic-transparency-using-apis/). This is just my attempt to understand how APIs can be put to work making the algorithms that are increasingly governing our reality more observable. I spend a lot of time trying to make sense of the very obscure things like cloud and social. What are they? What can you do with them? Do they do what they promise? When do things change? [I shared a version of this list for folks on the outside to develop API awareness](http://apievangelist.com/2017/02/16/trying-to-define-api-awareness/). Now,, this is my recommendations for what companies, organizations, institutions, and government agencies can do to make the data, content, and algorithms they use more observable--not just for our benefit, for yours as well.