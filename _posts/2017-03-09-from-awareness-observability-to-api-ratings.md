---
layout: post
title: From Awareness, Observability, To API Ratings
image: null
atomdate: 2017-03-09T23:00:00.000Z
tags:
  - Observability
  - Rating
  - Ratings
  - Awareness
---
This is the third post in my effort to try and define the three sides of my API monitoring. I'm trying to quantify what is needed as a sort of API industry monitoring dashboard -- if there is such a thing. To help me think through this, I have taken my approach to monitoring the API space and I'm breaking them up into three buckets [API awareness](http://apievangelist.com/2017/02/16/trying-to-define-api-awareness/), [API observability](http://apievangelist.com/2017/02/28/a-checklist-for-api-observability/), and now API ratings. While the three areas share many common characteristics, the motivations behind each area are significantly different--enough so, I want to look at them and evolve them separately.

A rating system for the API space is something I usually get one or two requests to discuss each quarter, sustained throughout the year. I have very different actors approaching me to solve this, from hedge fund managers, to venture capital managers, to startups and enterprise organizations. Everyone (except one) who has approached me to date has been woefully unaware of the scope of doing something like [creating a Standard and Poors or Moody's for the API economy](http://apievangelist.com/2015/10/31/how-are-we-going-to-create-the-standard-and-poors-and-moodys-for-the-api-economy/), which is always a red flag for me when it comes to understanding their motivations.

I do not have the resources to develop an API ranking system on my own, and I have no desire to exclusively own such a thing--it needs to be an open, community driven thing. However, I do have interest it trying to define possible algorithms for such a ranking system, derived from the approach I've developed for myself. I am driving this work from [a master dump of my research,](http://apievangelist.com) and the approach I have used to track on in the world of APIs since 2010--an analyst 100K view, and here is what I'm considering...

*   **Discovery -** If we are rating APIs, they need to be discoverable, and accessible--if you can't find them, understand what they do, and kick the tires--you really can't rate something. How many APIs? What is churn?
    *   **Applications** - Find new applications built on top of APIs.
    *   **People** - People who are doing interesting things with APIs.
    *   **Organization** - Any company, group, or organization working with APIs.
    *   **Services** - API-centric services that might help solve a problem.
    *   **Tools** - Open source tools that put APIs to work solving a problem.
*   **Versions -** What versions are currently in use, what new versions are available, but not used, and what future versions are planned and on the horizon. What is the time since the last release, or between releases?
*   **Paths** - What paths are available for all available APIs, and what are changes or additions to this stack of resources.
*   **Schema** \- What schema are available as part of the request and response structure for APIs, and available as part of the underlying data model(s) being used. What are the changes?
*   **SDKs** - What SDKs are available for the APIs I'm monitoring. What is new. What are the changes made regarding programming and platform develop kits?
    *   **Repositories** - What signals are available about an SDK regarding it's Github repository (ie. commits, issues, etc.)
    *   **Contributors** - Who are the contributors.
    *   **Stargazers** - The number of stars on SDK.
    *   **Forks** - The number of forks on an SDK.
*   **Communication** - What is the chatter going on around individual APIs, and across API communities. We need access to the latest messages from across a variety of channels.
    
    *   **Blog** - The latest from each API blog. Is there a feed. a number of blog posts?
    *   **Press** - Any press released about APIs.
    *   **Twitter** - The latest from Twitter regarding API providers.
        *   **Tweets** - The tweets from API providers.
        *   **Mentions** - The mentions of API providers.
        *   **Followers** - Who is following their account.
    *   **Facebook** - The latest Facebook posts from providers.
        
        *   **Posts** - What posts are available?
        *   **Likes** - How many likes does API have?
        
        *   **Followers** - Who is following their account.
    *   **LinkedIn** - The latest LinkedIn posts from providers.
    
    *    
        *   **Posts** - What posts are available?
        *   **Likes** - How many likes does API have?
            
        *   **Followers** - Who is following their account.
    
    *   **Reddit** - Any related Reddit post to API operations.
    *   **Stack Overflow** - Any related Stack Overflow post to API operations.
    *   **Hacker News** - Any related Hacker News post to API operations.
*   **Support** - What support channels are available for individual or groups of APIs, either from the provider or maybe a 3rd party individual or organization. Are they supported?
    *   **Forum / Group** \- What is the latest from groups dedicated to APIs.
    *   **Issues** - What are the issues in aggregate across all relevant repositories.
*   **Issues** - What are the current issues with an API, either known by the provider or possibly also reported from within the community.
*   **Change Log** \- What changes have occurred to an API, that might impact service or operations.
*   **Road Map** - What planned changes are in the road map for a platform, providing a view of what is coming down the road.
*   **Monitoring** - What are the general monitoring statistics for an API, outlining its overall availability.
*   **Testing** - What are the more detailed statistics from testing APIs, providing a more nuanced view of API availability.
*   **Performance** - What are the performance statistics providing a look at how performant an API is, and overall quality of service.
*   **Authentication** - What are all of the authentication approaches available and in-use. What updates are there regarding keys, scopes, and other maintenance elements of authentication.
*   **Security** - What are the security alerts, notifications, and other details that might impact the security of services, or the approach taken by a platform to making sure a platform is secure.
*   **Terms of Service** \- What are the changes to the terms of service, or other events related to the legal operations of the platform.
*   **Privacy** - What are the privacy-related changes that would affect the privacy of end-users, developers, or anyone else impacted by operations.
*   **Licensing** - What licenses are in place for the API, its definitions, and any code and tooling put to use, and what are the changes to licensing.
*   **Patents** - Are there any patents in play that impact API operations, or possibly an entire industry or area of API operations.
*   **Logging** - What other logging data is available from API consumption, or other custom solutions providing other details of API operations.
*   **Plans** - What are the plans and pricing in existence, and what are the tiers of access--along with any changes to the plans and pricing in the near future.
*   **Partners** - Who are the existing platform partners, and who are the recent additions. Maybe some finer grain controls over types of partners and integrations.
*   **Investments** - What investments have been made in the past, and what are the latest investments and filings regarding the business and investment of APIs.
    *   **Crunchbase** - The latest, and historical from Crunchbase.
    *   **Angelist** - The latest, and historical from Angellist.
*   **Acquisitions** - What acquisitions have been made or being planned--showing historical data, as well as latest notifications.
    *   **Crunchbase** - The latest, and historical from Crunchbase.
    *   **Angelist** - The latest, and historical from Angellist.
*   **Events** - What meetups, conferences and other events are coming up that relevant APIs or topics will be present.
*   **Embeddable** - What embeddable tooling are available for either working with individual APIs, or across collections of APIs, providing solutions that can be embedded within any website, or application.
*   **Integration** - What integration platform as a service (iPaaS), continuous integration, and other orchestration solutions are available for helping to make sense of API operations within this world.
*   **Deprecation** - What deprecation notices are on the horizon for APIs, applications, SDKs, and other elements of API operations.

I use data and make gut-level decisions from these areas across my monitoring of the space. Some of these signals are directly within the control of API providers, while others are more in control of their consumers, and the wider public. Many of these signals depend on a company, organization, institutions, and government agencies being public with their API operations. I just can't know about and measure private, internal APIs, without some sort of observability into their operations.

The most obvious areas for measuring the quality of API providers have been based on the number of users, or the number of API calls, which are both completely within the control of the API provider to report, or not to report. My approach to rating APIs is dependent on [my API awareness](http://apievangelist.com/2017/02/16/trying-to-define-api-awareness/), as well as [the API observability](http://apievangelist.com/2017/02/28/a-checklist-for-api-observability/) of each API provider. This is why I am working my way through these three levels, trying to take another look at how to distil down what I do into a set of metrics that can be used to establish some sort of rating for each provider.

I actually have metrics in place for about 25% of this list, and I know other API service providers who have an additional 10% of this, but really there is a pretty big opportunity out there right now for an organization (or organizations) to step up in the area of API ratings. The challenge is going to be about how you are going to keep the money from influencing the rating system, or I guess to be as transparent as possible in how you take money from the people you are rating, and how the process works. Let me know if you want to talk about in detail, I'm looking to stimulate this conversation further in 2017.