---
layout: post
title: >-
  How Are We Going To Create The Standard And Poors And Moodys For The API
  Economy?
url: >-
  http://apievangelist.com/2015/10/31/how-are-we-going-to-create-the-standard-and-poors-and-moodys-for-the-api-economy/
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Economy
---
API rating is a conversation I have several times a year, with different groups, and is a conversation that seems to occurring with a little more frequency in recent months. How do we know which APIs are the good ones? What constitutes a good API? How do we measure whether a contract (the API) is being adhered to, by both API provider, and potentially the consumer as well. How will we establish the Standard & Poors or Moodys for the API economy? These are the API rating conversations I am having with folks.

These are all great questions, and something many companies have approached me looking help in solving, with nobody moving forward with this in a meaningful, and sustainable way. So to help apply some CPR to the subject, I am going to explore API rating some more, from my own point of view, in hopes of guiding some existing conversation I'm already having on the subject, and also hopefully generate some new ones. I want to quantify where we are at with this problem, what work I've put into, and maybe establish an open blueprint that the community might be able help run with.

**Starts With API Discovery**  
Before we will ever have a usable approach to API ratings, we are going to have to also work on our API discovery problems. We have one open format, designed to not just index the technical side of APIs, but also the business, and political side of operations--[APIs.json](http://apisjson.org). The problem is we haven't reached a critical mass where a machine readable index of API operations is available for most of the public APIs available, as well as private indexes of the APIs that exist behind the firewall. It will take time, but soon, every actor in the API economy, [from Fitbit](https://www.fitbit.com/apis.json), up to [the International Trade Administration](http://developer.trade.gov/apis.json), will have [APIs.json indexes](http://apisjson.org) of their API operations. 

**Next, What Makes A Good API?**  
There are many things that goes into making an API good, or bad, and unfortunately many of these characteristics are difficult to track on in any sort of automated way. I'd say that API design is the number one complaint against APIs, but until recently there were not really any good ways to measure API consistency across many disparate APIs. I'd say the number two complaint against an API is around the documentation--good, clean, intuitive, and up to date documentation is always telling. However we can talk about API design and API documentation until the cows come home, and will make no progress on solving the question of how to measure, and quantify what a good API is, and what a bad API is.

In reality, there are a number of criteria that could be used to help separate the good APIs from the bad APIs. I've worked to aggregate what I consider to be some of the common building blocks across API design, deployment, management, and almost 20 other stops along the API life-cycle. From this research, I can provide a pretty good starting point for establishing a baseline rating that can be applied against all types of APIs. Part of my motivation in crafting this post, is to organize these thoughts, and publish as a potential v1 open blueprint, to help move conversations forward. I'm not saying this is what should be, but just a list of things to consider as the community contributes something.

**The Technology of APIs**  
This is where all API operations, good or bad begin, with the technical implementations of the API itself. When you are dealing with something as technical and abstract as an API, it can be hard separate the technology from everything else, but I feel it is an important exercise, even if I don't always get it right. Here are some of the technological aspects to consider when rating APIs from the technical view:

*   **Design** - How is the API designed? Is it simple, web-focused, and follows moderns conventions, and leverage HTTP over language specific characteristics.
*   **Authentication** - What sort of authentication technology is employed? Are modern approaches from  basic keys, too tokens, and OAuth employed?
*   **Availability** - Is the API available? Our there significant outages involved in recent times, and what is the overall track record for a platform.
*   **Scalability** - Will the API scale technically, and meet the demand of its users. Does the underlying code, server, and database scale with the demand.
*   **Code Resources** \- What extra code resources area available around an API from CLI to SDKs, and starter kits. Code resources play big role in API success.
*   **Webhooks -** The presence of webhooks for me, tells me that a platform operates as a two way street, contributes to availability, and scalability, and a nod towards real-time.

To establish a true rating criteria, you would need to break many of these things down, and establish a way of actually validating in a programmatic way. You would need to be able to look for consistent API design patterns, usage of HTTP status codes, and how available and scalable a platform is. With most of the technology of an API hidden behind the facade, you are left with little to go on, but the design, authentication pattern, availability, scalability, and any other technical resources that are made available.

**The Business of APIs**  
I have worked hard to understand the line between the tech, and the business of API operations. I feel this separation is critical to truly understanding why APIs work. Like the technology behind, the business approaches to API operations can be subjective, and vary from provider to provider. However, in my work I have found some ways of identifying the healthy business practices, as well as some unhealthy business practices that exist in the space.

*   **Documentation -** The availability of simple, intuitive, up to date API documentation, usually of the interactive kind is standard operating procedure of good APIs.
*   **Self-Service Registration -** Self-service, 24/7 registration for API access is a hallmark of good APIs--leaving access considerations dealt with via multiple tiers of API plans.
*   **Business Model -** A clear business model, and pricing is always present in the good APIs. It can be easy to spot the bad apples, because they tend to only be free.
*   **Support** - What support resources area available? Are there multiple channels of self-service, or direct support that have regular person behind the scenes supporting?
*   **Communication -** Does an API platform communicate? Are there multiple channels like a blog, Twitter, or other social accounts available? 
*   **Change -** How often, and rapid is change on the platform, and are changes communicated through a road-map, and other available channels? 

An API platform reflects the core business values of the company that operates it. The business of an API sets the tone for their entire community, something API consumers can contribute to, but it is ultimately left to the platform provider to set overall. It is fairly easy to identify bad actors, because of significant gaps in the business model, support, and communication around platform operations. There are many other aspects of API business operations to consider, but this provides a good base to start.

![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-fist.png)

**The Politics of APIs**  
In the last three years, another significant line has emerged when determining which APIs are good ones, and which are the bad ones. While much of this area depends on legal building blocks of API operations, I call it the politics of APIs, because it tends to reflect the politics of a company, or maybe the industry it resides in. Some of these areas will make or break APIs, and definitely put them in the good or bad bucket.

*   **Terms of Service -** What is in a terms of service? Are the heavily weighted towards the platform, or do they allow for innovation by consumers, within the ecosystem?
*   **Privacy Policy -** What does privacy look like on a platform? What do official policies state, and what does actual practice look like on the platform, and among consumers?
*   **Platform Security -** How is security handled across platform operations? How open is a platform about their security policies. This will be the number one criteria going forward.
*   **Transparency -** How transparent is a company with platform operations, and the overall roadmap. Is there an adversarial relationship with community, or an open, collaborative one?
*   **Licensing -** What software, content, and data license are in place? How is the API interface, server, and client code licensed, as well as the supporting content, and resources for the platform.
*   **Rate Limits -** What rate limits are imposed by the provider, and are they consistent and fair across access plans? Do rate limits favor the platform or consumer?
*   **Investment -** Who is invested in the company behind an API platform? Where in the investment cycle is a company, and how much money has been invested?

Those are just a handful of the political elements of API platform operations, but they are the usual suspects when it comes to determining the good APIs from the bad ones. This area tends to be the hardest to nail down area of how we would rate API providers in my eperience. This is where the most amount of smoke and mirrors is deployed, and nothing is ever what it seems, but this area makes or breaks many API operations, in more situations than the other technical and business elements listed.

The areas I provided across the technical, business, and political considerations for rating APIs as good or bad, can be broken down much further. I have specific questions that should be asked about API design, communication, and platform licensing, but for this discussion I just wanted to highlight the core groups of considerations. The separation between these areas, as well as the overlap is tough to see sometimes, but is something that is coming into focus, with the more APIs that I look at through this lens. 

**How Do We Make One Such API Rating Model Work?**  
With a rating definition in hand (theoretically) how do we move forward actually making this a reality. This is a huge problem, one very few people or companies truly grasp the scope of, and one that wave of new startups think they can solve, only to watch ALL of them fail. This is a problem that I feel will take four distinct groups to make happen, each bringing their own assets to the table, when it comes to making one such API rating model work.

**The Essential API Provider Signals**  
What information can API providers share, and what signals are the sending, either consciously, or unconsciously, that can be included as part of a rating system? There are numerous aspects of API operations on the open Internet, that are ripe for discovery, monitoring, and ultimately rating how a provider approaches their operations.

*   **Blog -** An active blog is a great way to understand the viability, tone, and overall presence of an API provider, with a RSS bonus for monitoring.
*   **Twitter -** An active Twitter account is second to a blog, when it comes to understanding the viability, tone, and overall presence of an API provider. 
*   **Github -** The social coding platform is quickly surpassing Twitter and a blog as the most important signal an API can send about their viability as a platform.
*   **Press -**  A regular PR drumbeat out of a company is a great to understand the investment into any platform, and the tone that it will take in the community.
*   **Road-map -** The regular update, and sharing of the platforms road-map providing as much information as possible about what is coming down the road for the platform.

It may sound silly to track on such basic things, but when a platform is about to die, the blog and Twitter accounts go silent, and you see diminished activity on Github. These content and social signals are the heartbeat of modern API operations. If you aren't telling stories, being social, and pushing code on a regular basis, your overall rating in the space goes down.

![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-signals.png)

**The Signals From The Community, Industry, and Open Web**  
What is the community saying about a platform? This is one of the benefits of being a public API operation is you can generate the right signals across the space that attract other developers, businesses, analysts, and generally open you up for inclusion in any potential API rating systems. What are some of the common signals the community sends, that could be gathered as part of an open API rating system?

*   **Blog Sharing -** Which blogs posts were shared across the community, and at large on social networks, and bookmarking sites?
*   **Twitter Followers -** How many Twitter followers does a platform have? Did they buy them?
*   **Twitter Retweets -** What gets retweeted by the Twitter community? What is the echo from platform operations?
*   **Twitter Favorites -** How many tweets have been favorited? Even if this is just for bookmarking, it acknowledges people are paying attention.
*   **Github Followers -** How many Github followers does a platform have?
*   **Github Repo Stars -** How many stars has been received across a platforms repositories?
*   **Github Repo Forks -** How many repositories have been forked, and how many times?
*   **Github Repo Watchers -** Are they watchers of a platforms Github repository? How many?
*   **Platform Stories -** What other stories are told about an API provider, via popular tech blogs, and other industry news.
*   **QA & Forum Discussions -** What is the presence, and conversation on sites like Stack Exchange and Quora, and what is the overall sentiment?

These are just a handful of the signals I tune into, when it comes to monitoring what API providers are up to across the sector. While there are no absolutes when it comes to these data points, they provide me a buffet of information to make my own decisions around, when it comes to what the community is thinking regarding any particular platform.

**What The Almighty Analysts Gods Think About An API Platform**

The third area that has a significant influence on the API space, is the analyst perspective. I put myself in this category, as I make a living analyzing the API sector. If we are going to strike a balance across the internal provider, and the public view of any single company, and its API offerings, we will need an informed analyst community to weigh in. Here are just a handful of the data points I include in my own analyst ranking variable.

*   **My Notes -** How many occurrences of a company are there in my notebook?
*   **My Curation -** How many times have I bookmarked and curated a post from, or about a platform?
*   **My Posts -** Have I written stories about a company? How many?
*   **My White Papers -** Has a platform being referenced, or featured in one of my white papers or guides?
*   **My Tweets -** Have I tweeted anything from a platforms Twitter account? Or a mention about them?
*   **My Gut -** What is my general feeling, and gut reaction to an API platform?

This reflects my own criteria that goes into my analyst ranking for a company, and yes, I have a tool that helps me calculate this across the companies, and individuals I track on. Other analysts are probably going to have their own formula, but is something I'd love to start seeing shared by the community--how do experts in the space, feel about existing APIs, and their technical, business, and political approach to API operations.

**There Is Always A Role For Government To Play In All Of This**  
Whether you believe in the power of government or not, there will always be a role, both positive and potentially negative, for government of all shapes and sizes to play in this API rating system. Like other data points considered as part of this rating system, the following data points should be considered, but will mean different things to different folks, and APIs.

*   **Filings -** What are the SEC, IRS, and other government filings by companies who operate API platforms.
*   **Investigations -** What are ongoing investigations by government agencies into companies who operate API platforms.
*   **Stories -** What are some of the leaks, and other stories being told in media and government circles about how companies are viewed.
*   **Patents -** Are there patent filings by specific platforms that impact the overall API space, down to specific industries.
*   **Legal -**  What court battles are being waged, at any level of our legal system, that impact specific platforms, and the industries they operate in.
*   **Legislation -** What legislation is being planned, or is on the books that impact any specific sector an API provider operates in.

There are a number of government induced influences that could impact the rating any particular API platform may receive. Patents could be seen as strengths or even weaknesses, and existing court battles, filings, investigations, and other government influenced decisions may weigh into rating decisions as well. The involvement by the government of all sizes is only going to increase in the API economy.

**It Will Take Everyone Working Together To Make This Work**  
A realistic API rating system or systems, will take work between all the groups listed above. API providers will have to step up and be more transparent, and share the data they possess. The developer community, API service providers, and the public at large will have to share information, and knowledge they accumulate from across the space. Analysts are going to have to step up, providing leadership and analysis across all industries, as well as within specific industries. The government will play a role in not just regulating industries, but also being API providers, and consumers themselves, providing valuable data, and aggregate resources, as well as informed analysis from the vital public sector perspective.

![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-blueprint-2.png)

**How Do We Make Sure An Share An Open Blueprint For Rating Algorithm(s) Exists?**  
This post is just an executive summary of the summary data points I'd like to see in a potential open API rating algorithm. Ultimately I'd like to see an API-Rating outline published to Github, outlining all of the areas I track on. I'm happy to be caretaker of these open blueprints, and use Github to store the algorithm, and public or proprietary data that goes into the end rating. Ultimately it should be an open, and transparent blueprint that anyone can follow, or contribute to.

**What Are Models For Incentivizing The Investing Of Open And Proprietary Data In Rating Algorithm(s)**  
In establishing an open blueprint, and house the algorithm for an open API rating blueprint, I have ideas about how we can store open, and even proprietary datasets that goes into different areas of the API rating system. Using a Github organization, a series of public, and private repositories, it is easy enough to provide a central place for everything to live. I've seen evidence of strong currents in the space that will swoop in and snatch up tooling and specification that gains adoption in the space, and know there will be many groups who seek to influence the rating system disproportionately--it has to be an open blueprint, and have the ability to support public and private data, from a variety of players, that will drive the rating results.

**This Will All Take Time, But We Need To Start Somewhere**  
As with the [API discovery work I'm doing with APIs.json](http://apisjson.org), I know this is a long game, and will not happen overnight. APIs are the driving force behind the growth in online commerce, social, cloud, mobile, and devices, touching almost every industry in 2015, the need for not just discovery of high quality APIs, but also being able to rate them, is only going to increase. We have to begin somewhere, and while some of what I propose seems far-fetched, it represents my efforts to define a rating algorithm, and I am the only person to put anything forward, beyond thinking it should be a startup.

I have most of the v1 algorithm available, it would just take some work to hammer into a coherent road-map. I have some of the data needed to get a v1 rating off the ground, going back to 2011 and 2012. With some work we could pull together other missing data. However to make this work, it would require API providers to step up and share data, and API service providers to do the same. Many leading API providers will be unwilling to participate, because they are rated highly without a rating system. It will be new APIs that will be willing to contribute to such as system, in hopes they can compete with the existing leaders.

I see, what I'm calling API Rating, as something that needs to evolve alongside my API discovery, and API monetization research. I will setup a project, and help me tune into the bigger picture. i will also formalize my look into crafting API plans, that are driven by the business model, and monetization goals of companies playing in the API game. Alright, moving on to crafting some blueprints for Twilio, SendGrid, and other common messaging APIs for their API plans, and API rating...then we'll do some comparison, and see how any of this will actually make sense in the wild.