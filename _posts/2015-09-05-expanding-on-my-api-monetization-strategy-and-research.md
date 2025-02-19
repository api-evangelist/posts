---
layout: post
title: Expanding On My API Monetization Strategy And Research
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-monetization-strategy.png
author:
  name: kinlane
tags:
  - My
  - Monetization
  - Strategy
  - Research
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-monetization-strategy.png)](http://monetization.apievangelist.com)

This is a full walk-through of me trying to distill down my approach to API monetization, in a way that can be applied across not just 30 APIs, but potentially 300, or 3000. There are several things converging for me right now, which includes the maturing of my own infrastructure, as well as conversations I'm having with startups, enterprise groups, federal government agencies, and my own partner(s).

I need to keep hammering on this to help me operate my own infrastructure, but I am also partnering with [APIWare to help me deliver on much of the API design, deployment, and management](http://apiware.io/), so I need to have a good handle on my costs. As with all of my areas of research, within the area of [API monetization](http://monetization.apievangelist.com/) I am just trying to get a handle on the common building blocks, and provide a checklist of considerations to be employed when I'm planning and operating my API infrastructure.

To help me build a base, let's walk through some of the building blocks of my own API monetization strategy.

**Acquisition**  
What do I have invested into any single API. Even if I am building something from scratch, what went into it? Every API I possess has some sort of acquisition cost, even if it is just $14.00 for the two pints of beer I bought while I was brainstorming the idea.

*   **Discover -** What did I spent to find this. I may have had to buy someone dinner or beer to find, as well as time on the Internet searching, and connecting the dots.
*   **Negotiate** - What time to I have in actually getting access to something. Most of the time its on the Internet, and other times it requires travel, and meeting with folks.
*   **Licensing** - There is a chance I would license a database from a company or institution, so I want to have this option in here. Even if this is open source, I want the license referenced as part of acquisition.
*   **Purchase** - Also the chance I may buy a database from someone outright, or pay them to put the database together, resulting in one-time fee, which I'm going to call "purchase".

Having a framework for me to think about the acquisition of each API resource I possess, makes it easier for me to think it through when I am brainstorming new API ideas. Something that makes sure I am tracking all details from the moment of inception, to when I commit to actually making it available via an API on my platform.

**Development**  
What does it actually take to stand up an API. There are a lot of moving parts with making an API happen, and not all of them are technical. Am I willing to invest the time necessary to stand up an API or will it require outside investment, as well as resources. What is needed to take an API from acquisition to actual operation?

*   **Investment -** Who put up the money to support the development of this API resource? Was it internal, or did we have to take external investment.
*   **Grant -** Was the development of this API rolled up in a grant, or specifically a grant for its development. Covering costs involved.
*   **Normalization** - What does it take me to cleanup, and normalize a dataset, or across content. This is usually he busy janitorial work necessary.
*   **Design** - What does it take me to generate a Swagger and API Blueprint, something that isn't just auto-generated, but also has the required hand polish it will require.
*   **Database** - How much work am I putting into setting up the database. A lot of this I can automate, but there is always a setup cost involved.
*   **Server** - Defining the amount of work I put into setting up, and configuring the server to run a new API, including where it goes in my overall operations plan.
*   **Coding** - How much work to I put into actually coding an API. I use the Slim PHP framework, and using automation scripts I can generate 75% of it usually, but there is always finish work.
*   **DNS** - What was the overhead in me defining, and configuring the DNS for any API, setting up endpoint domain, as well as potentially a portal to house operations. 

Historically when it came to APIs, I just dove into writing code with little consideration for what went into it. I'd say this is one by-product of the microservices way of thinking, is that I decoupled the moving parts of each of my APIs, allowing me to approach development in this way. I'm sure I will keep slicing off other elements within the development process as I progress.

**Operation  
**What goes into keeping an API operational, reliable and available? How much do I spend on all aspects of an existing APIs lifecycle to make sure it meets the standards of API consumers. Ideally operational costs go down the more efficient the platform gets with overall operations, reducing overhead, and streamlining across everything.

*   **Definition** - How much resources am I applying to creating and maintaining APIs.json, Swagger, and API Blueprint definitions for my APIs.
*   **Compute** - What percentage of my AWS compute is dedicated to an API. Flat percentage of the server its one until usage history exists.
*   **Storage** - How much on disk storage am I using to operate an API? Could fluctuate from month to month, and exponentially increase for some.
*   **Bandwidth** - How much bandwidth in / out is an API using to get the job done.
*   **Management** - What percentage of API management resources is dedicated to the API. A flat percentage of API management overhead until usage history exists.
*   **Code -** What does it cost me to maintain my code samples, libraries, and SDKs for each individual API, or possibly across multiple APIs and endpoints.
*   **Evangelism** - How much energy do I put into evangelizing any single API? Did I write a blog post, or am I'm buying Twitter or Google Ads? How is the word getting out?
*   **Monitoring** - What percentage of the API monitoring, testing, and performance service budget is dedicated to this API. How large is surface area for monitoring?
*   **Security -** What does it cost for me to secure a single API, as part of the larger overall operations? Does internal resource spend time, or is this a 3rd party service.
*   **Virtualization -** What am I spending on virtualization for an API, as part of QA process, for retail sandbox and simulation environments, or for specific partner needs.

Ideally the more APIs you operate, the more detail you will get about each of these areas, and some of these areas you should get better deals, the more volume you run through each area listed above. Example of this would be with compute and storage costs going down, as we do more business. The more we understand the details of operations, the more we can optimize operations.

**Access Levels  
**What sort of access levels are we going to provide across **ALL APIs**, not that all APIs will use all areas, but we should be ready for as many scenarios as we possibly can. We need to be clear of what access is the free layer, as well as the tiers of access, and any wholesale, partner, or re-sellers aspects.

*   **Free (unlimited) -** This is just a free API, I won't be rate limiting the usage of it. It will act similar to any website I put out there, but instead of HTML it is JSON.
*   **Free Trial** \- I am only going to offer a limited use, or time period for access a resource, giving just a taste test, but won't be in main pool of APIs available. 
*   **Not For Profit -** This API is being subsidized somehow. Either there is direct investment from internal or external resources to subsidize or there is a grant involved.
*   **Educational Access -** Is this API available as an educational resource, with special pricing for students and teachers? This will usually be reflected in the tier, and credit availability.
*   **Tier(s) -** Which of these service tiers is an API available in, and which endpoint paths + verbs are accessible in the tier (api-pricing definition).
    *   **Public** - General access, you usually don't even need a key. Only limited to specific APIs.
    *   **Retail** - This is the pay as you go level for public acess to all APIs. This is where the retail side of business operations will occur.
    *   **Trusted** - These are just a handful of trusted individuals or companies, who may have write access to some endpoints.
    *   **Education -** Providing a specific access tier for education partners, including students, teachers, and institutions. Providing higher levels of free access, and lower price points.
    *   **Partner** - These are partners I have prearranged agreements with, something I will be transparent about, showcasing them on partner page.
    *   **Wholesale** - The wholesale, often non-rate limited portion of my platform, where I deploy APIs in other people infrastructure, or our own for flat fees.
    *   **Platform** - This is all internal access by applications I build for my own usage. I still rate limit, and manage this access, I just give myself different privileges.
*   **Partner Program -** A structured program allowing API consumers to achieve higher levels of access, with reduced pricing levels, flat rate access, and other benefits.
*   **Reseller Program -** A structured programming for allowing API consumers to prove themselves, and share in revenues from API usage, affiliate links, and revenue share.

My intent around access levels is to be as transparent as possible. Not all users will access at all levels, and not all APIs, and their endpoints will be available within at all access levels. The goal is to optimize access, remain as open as makes sense, while also sensibly monetizing resources to cover costs, and make a fair profit.

**Pricing & Credits  
**I am employing a universal credit system that will be used by all APIs. The goal is to expand the unit of currencies I employ beyond just API calls, and attach a universal unit of value that can be applied across all APis. API consumers will be given a certain amount of API credits to be used each day, as well be able to buy and sell credits at various rates. 

*   **API Value** - Each API will have its own credit rate set, where some will be one credit, while others may be 100 credits to make a single call, it can be defined by API or a specific endpoint.
*   **Daily Limit -** The daily allowed credit limit will be determined by the access level tier is registered at, starting with daily free public access to retail, trusted, and potentially custom tiers.
*   **Usage** - How many credits does any one user use during a day, week, or month, across all APIs. When each API is used, it will apply the defined credit value for the single API call.
*   **Incentive** - How can the platform give credits as an incentive for use, or even pay credits for writing to certain APIs, and enriching the system, or driving traffic.
*   **Purchase -** What does it cost to buy a credit, something that could fluctuate from day to day, week to week, or month to month.
*   **Buyout -** Allow API consumers to get paid for the credits on their account, preferably all users are encouraged to spend credits, but buyout is an option.
*   **Discounts** - Can we give discounts when you buy credits through specific channels, promotions, or other type of planned deal.
*   **Volume** - Are there volume discounts for buying of credits, allowing consumers to purchase credits in bulk, when they need to and apply when they desire. 
*   **Applying** - Can you wait to apply credits you have accumulated? Given the option with each billing cycle to apply, or you may want to wait and use at future date.

I envision credits being the lifeblood of the API monetization strategy for my platform, and would love to see it spread beyond any single API ecosystem, and be something that all providers could put to work. The benefits of this would be seen by both API provider, as well as consumers, in helping us establish a currency for the API economy.

**Indirect Value Generation  
**What value is generated via API operations that isn't directly monetized, but driving value in other ways. These indirect value generators are often overlooked, and under-showcased areas of operation, often resulting in API failure--always showcase the buzz.

*   **Marketing Vehicle -** Having an API is cool these days, and some APIs are worth just having for the PR value, and extending the overall brand of the platform.
*   **Web or Mobile Traffic -** The API exists solely for distributing links to web and mobile applications, driving traffic to specific properties - is this tracked as part of other analytics?
*   **Brand Awareness -** Applying a brand strategy, and using the API to incentivize publishers to extend the reach of the brand and ultimately the platform - can we quantify this?
*   **Data & Content Acquisition -** Using the API, and the applications built on top as part of a larger data and content acquisition strategy--can we quantify this?

I could see data and content acquisition grow into an area we can better quantify soon. Putting a base value on each resource in the system, and figure out how much each resource grows in size, and quality over time. Applying value to these indirect areas is something I'd like to expand upon in future iterations.

**Partner Revenue Generation  
**Ideally any platform should be sharing the revenue and value exhaust generated via the ecosystem, providing revenue opportunities for web, and mobile application developers. There are a handful of ways revenue can be shared via API operations.

*   **Link Affiliate -** What revenue is generated and paid out via links that are made available via the API, with potentially externally affiliate links embedded.
*   **Revenue Share -** What portion API revenue is paid out to potential re-sellers who drive API usage. Revenue is percentage of overall credit purchases / usage.
*   **Credits to Bill -** All revenue is paid in credits on account, and user can decide to get buy out of credits at any time, or possibly use in other aspects of system operation.

I will be expanding on these areas in the future, as I play with ways to incentivize content or data creation, or just driving API consumption well into the paid tiers. Right now many API platforms I study are essentially sharecropping plantations, reaping the value generated from developer activity. In the future, developers should be incentivized with cash and credit to help achieve platform monetization goals, which is something I want to explore via my own API resources when I have the bandwidth.

**Internal Revenue Generation  
**Where are we making money? What revenue is generated across the platform, and then what are the breakdowns. I want to understand who my rockstar users and applications are, something that isn't isolated to external users. I am looking to craft all of my applications as individual citizens within the API ecosystem, measuring and limiting what type of access they have, and treat them like any other consumer on the platform.

*   **Monthly** - How much revenue is being brought in on a monthly basis for an API and all of its endpoints.
*   **Users** - How much revenue is being brought in on a monthly basis for a specific user, for an API and all of its endpoints.
*   **Applications** - How much revenue is being brought in on a monthly basis for a specific application, for an API and all of its endpoints.
*   **Tiers -**  Which tiers generate most usage and revenue? I should be applying just as easily to aspects of platform / internal usage as well.
*   **Affiliate Revenue -** What was generated from affiliate links made available via APIs, minus what percentage was paid out to API consumers.
*   **Advertising Revenue -** What advertising revenue was derived from web or mobile application traffic resulting from the API, minus whatever was paid out as rev share to API consumers.

The goal of my platform is not simply to make money. Sure I like making money, but I'm looking to flush out a reproducible framework for hanging each API, and making sense of it as part of my larger API platform operations. Not all APIs will be created equally, but I should be able to equally measure what it costs to develop, and operate, and apply consistent ways of generating revenue around its use. 

All of this looks intimidating when you scroll back through. However my goal is to produce a standardized pricing page that can exist across all of my API ecosystem(s), which are growing in number, and prompting me to think in this way. I need a better handle on my costs, and ultimately be able to generate more revenue to keep me with a roof over my head, food on the table, and my AWS bill paid.

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-building-blocks-monetization.png)](http://monetization.apievangelist.com/building-blocks.html)

[While I only have a single API portal right now](https://kin-lane.github.io/master/), I'm preparing to deploy a specific collection using [APIs.json](http://apisjson.org) and publish as version 2.0 of my API Evangelist developer portal. I'm also looking to immediately publish a few other API portals, designed to support various collections or stacks of APIs available in my network (images, API definitions, etc.). I need a standard way to deliver on-boarding, and pricing for the APIs, and this backend framework gives me the v1 approach to that. 

Each API that I launch will have a pricing page, with each of the available service tiers as a box, and within each box it will list how many free credits you get each day, and other features available like per credit rate beyond the daily allowed limit, support elements, and other relevant details to that tier. There should also be links to more detail about partner, re-seller, and wholesale options for each API portal I launch. The API consumer never sees all of this. This framework is for me to hang each API upon, and think through it in context of the overall API lifecycle and platform operations.

I'm applying this outline to the 30 APIs I have in my stack, and then also applying it to a handful of new data APIs I'm working on. Along the way I will flush it out a little more, before I get to work on some of the more advanced pieces like a partner and re-seller programs. I'm not a big fan of advertising, but I do have some single page apps that perform pretty well, and it wouldn't be too intrusive to have some advertising on them. All of these SPAs are driven by my APIs, and they often exist as tools across my API driven content network as well.

This post will be published to my [API monetization research](http://monetization.apievangelist.com/), and this list will be published as common building blocks, that can be considered as part of any API monetization strategy. It makes me happy to see this portion of my research finally move forward, and evolve, especially since its based upon my own platform goals, as well as my wider monitoring and review of the space.