---
layout: post
title: Some Of The Common Building Blocks Of API Deprecation
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-deprecation-2.png
tags:
  - Deprecation
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-deprecation-2.png)](http://deprecation.apievangelist.com/)

I spend my days mapping out the API life cycle, [keeping track of what I consider to be the 50+ areas of a modern API life cycle](http://apievangelist.com), based upon the approach I am seeing from leading providers. One area of this life cycle I'm spending way more time than I want to be lately, is in the area of [API deprecation](http://deprecation.apievangelist.com/). 

This is why I conduct my API research in the way that I do, because when people approach me for advice, guidance, or brain dump in any of these areas, I have a wealth of resources I can pull from. Sadly I have a couple of folks ask me for input on what I'd consider to be a good approach to individual API deprecation, as well as entire company, platform, and API deprecation.

Sadly, there very few "good approaches" to shutting down your APIs in the wild. Luckily there are quite a number of very bad approaches available, that we can reverse engineer, and begin putting together a scaffolding for what might be some possible best practices, when it comes to API deprecation. 

I went through [what I had curated as part of my API deprecation research](http://deprecation.apievangelist.com/news/), and assembled these common building blocks:

**Types**

*   **Individual API Endpoints -** Looking to have a plan for the deprecation of individual APIs, or sets of APIs.
*   **Individual API Tooling -** An approach to how you deprecate one of the client solutions available on API platform.
*   **Entire Platform Shutdown -** What is the plan for an entire platform shutdown, ceasing all API operations.
*   **Enter Platform Safe Mode -** What is the plan for just putting the platform into safe mode, and still operating.

**Runway**

*   **Initial Expectation Set -** What expectations are, or have been set early on in the API design, and deployment parts of the life cycle when it comes to API deprecation.
*   **Legal Department -** What legally has been provided in terms of service, privacy policy, and other parts of the legal department for a platform.
*   **First Decision -** Establishing that an API or platform will need to be deprecated. Recording the date, time, and other key details on what this decision was reached.
*   **First Notice -** What is the time to the first external notice, either privately to partners, or also publicly to the general community. 
*   **Lock-down New Signups -** When will new signups for the platform be locked down, stopping all new user and application registration.
*   **Lock-down New Writes -** When will all POST, PUT, and other write capabilities be locked down, making it easier to stabilize, sync, and migrate for final shut down.
*   **Light Switch Flicking -** Will there be light switch flicking, or dark-out testing, which send real world pain to API consumers, reminding them that a shutdown is imminent.
*   **Other Milestones -** What other milestones are there that will be important to internal, partner, and public stakeholders? 
*   **Final Date -** What is the final date for shutdown, requiring all syncs, migrations, exports, and integration to completely cease.

**Communication**

*   **Key Players -** As soon as the first decision to deprecate is made, who are the key players, and stake holder that need to be contacted, and made aware of the API deprecation.
*   **Public Players -** Once key stakeholders are made aware, what is the plan to go public, and make the general community, and industry aware that the API deprecation is imminent.
*   **Schedule (Runway) -** What does the entire runway look like, with as complete schedule from first decision, to final date -- including a communication schedule documented along the way.
*   **Historical -** What historical communications will be made available from blog posts, to tweets, documentation, and other communication focused efforts.
*   **Be Real -** Make sure that you are genuine in your plans, communication, and out reach.
*   **Be Friendly -** Be as friendly as you can. It will be a hard time for everyone involved.
*   **Be Transparent -** Try to be as transparent as you possibly can, throughout the process.
*   **Be Respectful -** Showing respect for your consumers, and their challenges will go a long way.
*   **PR Campaign -** Craft a public relations plan, and execute it well. Don't take shortcuts.
*   **Communicate Often -** Make sure and email, post to blog, tweet, and communicate regulatly about the deprecation.

**Tooling**

*   **Data Migration -** What data migration tools, services, and support will be made available to help customers get their data off of a platform, and somewhere where they can put to use.
*   **Settings Migration -** Will there be the opportunity to export settings, and other configurations, so that they can be applied into other external systems, either automatically, or manually.
*   **Data Sync -** Are there any real-time data sync opportunities, to help reduce the amount of work that is needed at the time of shutdown, slowly getting API consumers offloaded to their new solution.
*   **Data Portability -** Beyond migration, and syncing, can API consumers get raw dumps of all of their usage data, as well as any other object, and entity they have stored via API operations.

**Licensing**

*   **Data License -** How will data be licensed after things are shut down?
*   **Server Code -** What server code will be made available as open source license?
*   **Client Code -** What client code will be made available as open source license?
*   **API License -** How will the API definition, and data schema be licensed for reuse?

**Virtualization**

*   **AWS AMI -** Will there be an Amazaon AMI made available for any server or client implementations?
*   **Heroku Deploy -** Will there be Heroku deployment made available for any server or client implementations?
*   **Docker Image -** Will there be Docker images made available for any server or client implementations?

**Management**

*   **Github Repo -** Will a dedicated Github repository be made available for the company, platform, API, or other aspects of opportunity, made available for capturing any remaining code, data, and content.
*   **Github Issues -** Is there a Github issues established for handling all concerns, and conversations around the API deprecation.
*   **API Purgatory -** Have you contacted Kin Lane, the API Evangelist, so he can take a snapshot of your API, for inclusion in the API Purgatory Museum.
*   **X-API-Warn -** Using the X-API-Warn header for all requests made to any deprecated APIs.

**Support**

*   **Contact Person -** Who is the person (name, email, Twitter, and Github) who is the point of contact for the API deprecation process.
*   **Migration Partners -** Are there any migration partners that can help out during any migrations, syncing, configuration, and setup of external solutions.
*   **Migration Locations -** Are there any other existing platforms, including competitors, that you can point API consumers to, as an alternative to the API being deprecated. 

Like the areas of my API life cycle, these API deprecation building blocks are by no means complete. I'm just extracting some of the comment elements that I see when I look through just the little bit of API deprecation history that I've managed to curate. The trick now, is to find more time so that I can dig deeper, and find the API deprecation stories I do not have indexed, and hopefully establish a timeline of sorts, along with some of the other possible building blocks that might help folks craft their own deprecation strategy.

I'd love to hear your thoughts on what you think should be considered as part of the inevitable API deprecation process. I thought my friend Mark Boyd ([@mgboydcom](https://twitter.com/mgboydcom)) did a good job [capturing the reality of API deprecation from a provider view](http://www.programmableweb.com/news/2015-api-deprecation-and-versioning-now-more-strategic-issue/analysis/2016/01/04), as well as [what things look like from the API consumer vantage point](http://www.programmableweb.com/news/how-to-manage-risk-losing-api-access/analysis/2016/01/19), if you need a good narrative of what I'm trying to achieve.

Ultimately I think this is a conversation we need to be having more often, with more API providers, out in the open. I'd like to see more platforms publish what their API deprecation strategy is, either as a blog post, or in a more formal way. I'll spend more time next week, digger deeper in the past to find some of the more high profile API deprecation that I'm missing in my research, gather feedback from folks I'm talking to about their API deprecation strategies, and hopefully evolve this list of common API deprecation building blocks forward more.