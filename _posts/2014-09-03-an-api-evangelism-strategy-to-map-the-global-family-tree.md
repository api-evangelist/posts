---
layout: post
title: An API Evangelism Strategy To Map The Global Family Tree
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/250px-FamilySearch_logo.svg.png
author:
  name: kinlane
tags:
  - Evangelism
  - Strategy
  - Global
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/250px-FamilySearch_logo.svg.png)](https://familysearch.org/)

In my work everyday as the API Evangelist, I get to have some very interesting conversations, with a wide variety of folks, about how they are using APIs, as well as brainstorming other ways they can approach their API strategy allowing them to be more effective. One of the things that keep me going in this space is this diversity. One day I’m looking at [Developer.Trade.Gov for the Department of Commerce](http://apievangelist.com/2014/08/14/swagger-apisjson-and-review-for-the-new-developertradegov/), the next talking to [WordPress about APIs for 60 million websites](http://apievangelist.com/2014/08/02/everyone-is-about-to-get-an-api-with-the-new-wordpress-api/), and then I’m talking with the The Church of Jesus Christ of Latter-day Saints about the Family Search API, which is actively gathering, preserving, and sharing genealogical records from around the world.

I’m so lucky I get to speak with all of these folks about the benefits, and perils of APIs, helping them think through their approach to opening up their valuable resources using APIs. The process is nourishing for me because I get to speak to such a diverse number of implementations, push my understanding of what is possible with APIs, while also sharpening my critical eye, understanding of where APIs can help, or where they can possibly go wrong. Personally, I find a couple of things very intriguing about the Family Search API story:

1.  Mapping the worlds genealogical history using a publicly available API — Going Big!!
2.  Potential from participation by not just big partners, but the long tail of genealogical geeks
3.  Transparency, openness, and collaboration shining through as the solution beyond just the technology
4.  The mission driven focus of the API overlapping with my obsession for API evangelism intrigues and scares me
5.  Have existing developer area, APIs, and seemingly necessary building blocks but failed to achieve a platform level

I’m open to talking with anyone about their startup, SMB, enterprise, organizational, institutional, or government API, always leaving open a 15 minute slot to hear a good story, which turned into more than an hour of discussion with the Family Search team. See, Family Search already has an API, they have the technology in order, and they even have many of the essential business building blocks as well, but where they are falling short is when it comes to dialing in both the business and politics of their developer ecosystem to discover the right balance that will help them truly become a platform—which is my specialty. ;-)

This brings us to the million dollar question: _**How does one become a platform?**_

All of this makes Family Search an interesting API story. The scope of the API, and to take something this big to the next level, Family Search has to become a platform, and not a superficial “platform” where they are just catering to three partners, but nourishing a vibrant long tail ecosystem of website, web application, single page application, mobile applications, and widget developers. Family Search is at an important reflection point, they have all the parts and pieces of a platform, they just have to figure out exactly what changes need to be made to open up, and take things to the next level.

First, let’s quantify the company, what is FamilySearch? “ For over 100 years, FamilySearch has been actively gathering, preserving, and sharing genealogical records worldwide”, believing that “learning about our ancestors helps us better understand who we are—creating a family bond, linking the present to the past, and building a bridge to the future”.

FamilySearch is 1.2 billion total records, with 108 million completed in 2014 so far, with 24 million awaiting, as well as 386 active genealogical projects going on. Family Search provides the ability to manage photos, stories, documents, people, and albums—allowing people to be organized into a tree, knowing the branch everyone belongs to in the global family tree.

FamilySearch, started out as the Genealogical Society of Utah, which was founded in 1894, and dedicate preserving the records of the family of mankind, looking to "help people connect with their ancestors through easy access to historical records”. FamilySearch is a mission-driven, non-profit organization, ran by the The Church of Jesus Christ of Latter-day Saints. All of this comes together to define an entity, that possesses an image that will appeal to some, while leave concern for others—making for a pretty unique formula for an API driven platform, that doesn’t quite have a model anywhere else.

FamilySearch consider what they deliver as as a set of record custodian services:

*   **Image Capture -** Obtaining a preservation quality image is often the most costly and time-consuming step for records custodians. Microfilm has been the standard, but digital is emerging. Whether you opt to do it yourself or use one of our worldwide camera teams, we can help.
*   **Online Indexing -** Once an image is digitized, key data needs to be transcribed in order to produce a searchable index that patrons around the world can access. Our online indexing application harnesses volunteers from around the world to quickly and accurately create indexes.
*   **Digital Conversion -** For those records custodians who already have a substantial collection of microfilm, we can help digitize those images and even provide digital image storage.
*   **Online Access -** Whether your goal is to make your records freely available to the public or to help supplement your budget needs, we can help you get your records online. To minimize your costs and increase access for your users, we can host your indexes and records on [FamilySearch.org](http://familysearch.org/), or we can provide tools and expertise that enable you to create your own hosted access.
*   **Preservation -** Preservation copies of microfilm, microfiche, and digital records from over 100 countries and spanning hundreds of years are safely stored in the Granite Mountain Records Vault—a long-term storage facility designed for preservation.

FamilySearch provides a proven set of services that users can take advantage of via a web applications, as well as iPhone and Android mobile apps, resulting in the online community they have built today. FamilySearch also goes beyond their basic web and mobile application services, and is elevated to software as a service (SaaS) level by having a pretty robust developer center and API stack.

**Developer Center  
**FamilySearch provides the required first impression when you land in the [FamilySearch developer center](https://familysearch.org/developers/), quickly explaining what you can do with the API, "FamilySearch offers developers a way to integrate web, desktop, and mobile apps with its collaborative Family Tree and vast digital archive of records”, and immediately provides you with a getting started guide, and other supporting tutorials.

FamilySearch provides access to over 100 API resources in the twenty separate groups: Authorities, Change History, Discovery, Discussions, Memories, Notes, Ordinances, Parents and Children, Pedigree, Person, Places, Records, Search and Match, Source Box, Sources, Spouses, User, Utilities, Vocabularies, connecting you to the core FamilySearch genealogical engine.

The FamilySearch developer area provides all the common, and even some forward leaning technical building blocks:

*   oAuth 2.0
*   simple, consistent web API design
*   [hypermedia](https://familysearch.org/developers/docs/guides/hypermedia)
*   [code libraries](https://familysearch.org/developers/libraries)
*   [sample apps](https://familysearch.org/developers/docs/sample-app)

To support developers, FamilySearch provides a fairly [standard support setup](https://familysearch.org/developers/support):

*   [Google Group](https://groups.google.com/a/ldsmail.net/forum/#!forum/fsdn)
*   [Issue Tracker](https://familysearch.org/developers/projects/platform-api/issues)
*   [Email](mailto:devsupport@familysearch.org)
*   [FAQ](https://familysearch.org/developers/faq)
*   [Changelog](https://familysearch.org/developers/docs/change-log)

To augment support efforts there are also some other interesting building blocks:

*   [Webinars](https://familysearch.org/developers/docs/guides/webinars)
*   [Glossary](https://familysearch.org/developers/docs/guides/glossary)
*   [Caching](https://familysearch.org/developers/docs/guides/caching)
*   [Throttling](https://familysearch.org/developers/docs/guides/throttling)

Setting the stage for FamilySearch evolving to being a platform, they even posses some necessary partner level building blocks:

*   [Certification](https://familysearch.org/developers/docs/certification)
*   [Partner Tier](https://familysearch.org/developers/partnering)

There is even an application gallery showcasing what web, mac & windows desktop, and mobile applications developers have built. FamilySearch even encourages developers to “donate your software skills by participating in community projects and collaborating through the FamilySearch Developer Network”.

Many of the ingredients of a platform exist within the current FamilySearch developer hub, at least the technical elements, and some of the common business, and political building blocks of a platform, but what is missing? This is what makes FamilySearch a compelling story, because it emphasizes one of the core elements of API Evangelist—that all of this API stuff only works when the right blend of technical, business, and politics exists.

**Establishing A Rich Partnership Environment**

FamilySearch has some strong partnerships, that have helped establish FamilySearch as the genealogy service it is today. FamilySearch knows they wouldn’t exist without the partnerships they’ve established, but how do you take it to the next and grow to a much larger, organic API driven ecosystem where a long tail of genealogy businesses, professionals, and enthusiasts can build on, and contribute to, the FamilySearch platform.

FamilySearch knows the time has come to make a shift to being an open platform, but is not entirely sure what needs to happen to actually stimulate not just the core FamilySearch partners, but also establish a vibrant long tail of developers. A developer portal is not just a place where geeky coders come to find what they need, it is a hub where business development occurs at all levels, in both synchronous, and asynchronous ways, in a 24/7 global environment.

FamilySearch acknowledge they have some issues when it comes investing in API driven partnerships:

*   “Platform” means their core set of large partners
*   Not treating all partners like first class citizens
*   Competing with some of their partners
*   Don’t use their own API, creating a gap in perspective

FamilySearch knows if they can work out the right configuration, they can evolve FamilySearch from a digital genealogical web and mobile service to a genealogical platform. If they do this they can scale beyond what they’ve been able to do with a core set of partners, and crowdsource the mapping of the global family tree, allowing individuals to map their own family trees, while also contributing to the larger global tree. With a proper API driven platform this process doesn’t have to occur via the FamiliySearch website and mobile app, it can happen in any web, desktop, or mobile application anywhere.

FamilySearch already has a pretty solid development team taking care of the tech of the FamilySearch API, and they have 20 people working internally to support partners. They have a handle on the tech of their API, they just need to get a handle on the business and politics of their API, and invest in the resources that needed to help scale the FamilySearch API being just a developer area, to being a growing genealogical developer community, to a full blow ecosystem that span not just the FamilySearch developer portal, but thousands of other sites and applications around the globe.

**A Good Dose Of API Evangelism To Shift Culture A Bit**

A healthy API evangelism strategy brings together a mix of business, marketing, sales and technology disciplines into a new approach to doing business for FamilySearch, something that if done right, can open up FamilySearch to outside ideas, and with the right framework manage to allow the platform to move beyond just certification, and partnering to also investment, and acquisition of data, content, talent, applications, and partners via the FamilySearch developer platform.

Think of evangelism as the grease in the gears of the platform allowing it to grow, expand, and handle a larger volume, of outreach, and support. API evangelism works to lubricate all aspects of platform operation.

First, lets kick off with setting some **objectives** for why we are doing this, what are we trying to accomplish:

*   **Increase Number of Records -** Increase the number of overall records in the FamilySearch database, contributing the larger goals of mapping the global family tree.
*   **Growth in New Users -** Growing the number of new users who are building on the FamilySearch API, increase the overall headcount fro the platform.
*   **Growth In Active Apps -** Increase not just new users but the number of actual apps being built and used, not just counting people kicking the tires.
*   **Growth in Existing User API Usage -** Increase how existing users are putting the FamilySearch APIs. Educate about new features, increase adoption.
*   **Brand Awareness -** One of the top reasons for designing, deploying and managing an active APIs is increase awareness of the FamilySearch brand.
*   What else?

What does **developer engagement** look like for the FamilySearch platform?

*   **Active User Engagement -** How do we reach out to existing, active users and find out what they need, and how do we profile them and continue to understand who they are and what they need. Is there a direct line to the CRM?
*   **Fresh Engagement -** How is FamilySearch contacting new developers who have registered weekly to see what their immediate needs are, while their registration is fresh in their minds.
*   **Historical Engagement -** How are historical active and / or inactive developers being engaged to better understand what their needs are and would make them active or increase activity.
*   **Social Engagement -** Is FamilySearch profiling the URL, Twitter, Facebook LinkedIn, and Github profiles, and then actively engage via these active channels?

Establish a Developer Focused **Blog For Storytelling**

*   **Projects -** There are over 390 active projects on the FamilySearch platform, plus any number of active web, desktop, and mobile applications. All of this activity should be regularly profiled as part of platform evangelism. An editorial assembly line of technical projects that can feed blog stories, how-tos, samples and Github code libraries should be taking place, establishing a large volume of exhaust via the FamlySearch platform.
*   **Stories -** FamilySearch is great at writing public, and partner facing content, but there is a need to be writing, editing and posting of stories derived from the technically focused projects, with SEO and API support by design.
*   **Syndication -** Syndication to Tumblr, Blogger, Medium and other relevant blogging sites on regular basis with the best of the content.

Mapping Out The Geneology **Landscape**

*   **Competition Monitoring -** Evaluation of regular activity of competitors via their blog, Twitter, Github and beyond.
*   Alpha Players - Who are the vocal people in the genealogy space with active Twitter, blogs, and Github accounts.
*   **Top Apps -** What are the top applications in the space, whether built on the FamilySearch platform or not, and what do they do?
*   **Social -** Mapping the social landscape for genealogy, who is who, and who should the platform be working with.
*   **Keywords -** Established a list of keywords to use when searching for topics at search engines, QA, forums, social bookmarking and social networks. (should already be done by marketing folks)
*   **Cities & Regions -** Target specific markets in cities that make sense to your evangelism strategy, what are local tech meet ups, what are the local organizations, schools, and other gatherings. Who are the tech ambassadors for FamilySearch in these spaces?

Adding To **Feedback Loop From Forum** Operations

*   **Stories -** Deriving of stories for blog derived from forum activity, and the actual needs of developers.
*   **FAQ Feed -** Is this being updated regularly with stuff?
*   **Streams -** other stream giving the platform a heartbeat?

Being Social About Platform Code and Operations With **Github**

*   **Setup Github Account -** Setup FamilySearch platform developer account and bring internal development team into a team umbrella as part of.
*   **Github Relationships -** Managing of followers, forks, downloads and other potential relationships via Github, which has grown beyond just code, and is social.
*   **Github Repositories -** Managing of code sample Gists, official code libraries and any samples, starter kits or other code samples generated through projects.

Adding To The **Feedback Loop From The Bigger FAQ** Picture

*   **Quora -** Regular trolling of Quora and responding to relevant \[Client Name\] or industry related questions.
*   **Stack Exchange -** Regular trolling of Stack Exchange / Stack Overflow and responding to relevant FamilySearch or industry related questions.
*   **FAQ -** Add questions from the bigger FAQ picture to the local FamilySearch FAQ for referencing locally.

Leverage **Social Engagement** And Bring In Developers Too

*   **Facebook -** Consider setting up of new API specific Facebook company. Posting of all API evangelism activities and management of friends.
*   **Google Plus -** Consider setting up of new API specific Google+ company. Posting of all API evangelism activities and management of friends.
*   **LinkedIn -** Consider setting up of new API specific LinkedIn profile page who will follow developers and other relevant users for engagement. Posting of all API evangelism activities.
*   **Twitter -** Consider setting up of new API specific Twitter account. Tweeting of all API evangelism activity, relevant industry landscape activity, discover new followers and engage with followers.

Sharing **Bookmarks** With the Social Space

*   **Hacker News -** Social bookmarking of all relevant API evangelism activities as well as relevant industry landscape topics to Hacker News, to keep a fair and balanced profile, as well as network and user engagement.
*   **Product Hunt -** Product Hunt is a place to share the latest tech creations, providing an excellent format for API providers to share details about their new API offerings.
*   **Reddit -** Social bookmarking of all relevant API evangelism activities as well as relevant industry landscape topics to Reddit, to keep a fair and balanced profile, as well as network and user engagement.

Communicate Where The **Roadmap** Is Going

*   **Roadmap -** Provide regular roadmap feedback based upon developer outreach and feedback.
*   **Changelog -** Make sure the change log always reflects the roadmap communication or there could be backlash.

Establish A Presence At **Events**

*   **Conferences -** What are the top conferences occurring that we can participate in or attend--pay attention to call for papers of relevant industry events.
*   **Hackathons -** What hackathons are coming up in 30, 90, 120 days? Which would should be sponsored, attended, etc.
*   **Meetups -** What are the best meetups in target cities? Are there different formats that would best meet our goals? Are there any sponsorship or speaking opportunities?
*   **[Family History Centers](https://familysearch.org/locations/centerlocator) -** Are there local opportunities for the platform to hold training, workshops and other events at Family History Centers?
*   **[Learning Centers](https://familysearch.org/learningcenter/home.html) -** Are there local opportunities for the platform to hold training, workshops and other events at Learning Centers?

**Measuring** All Platform Efforts

*   **Activity By Group -** Summary and highlights from weekly activity within the each area of API evangelism strategy.
*   **New Registrations -** Historical and weekly accounting of new developer registrations across APis.
*   **Volume of Calls -** Historical and weekly accounting of API calls per API.
*   **Number of Apps -** How many applications are there.

Essential **Internal Evangelism** Activities

*   **Storytelling -** Telling stories of an API isn’t just something you do externally, what stories need to be told internally to make sure an API initiative is successful.
*   **Conversations -** Incite internal conversations about the FamilySearch platform. Hold brown bag lunches if you need to, or internal hackathons to get them involved.
*   **Participation -** It is very healthy to include other people from across the company in API operations. How can we include people from other teams in API evangelism efforts. Bring them to events, conferences and potentially expose them to local, platform focused events.
*   **Reporting -** Sometimes providing regular numbers and reports to key players internally can help keep operations running smooth. What reports can we produce? Make them meaningful.

All of this evangelism starts with a very external focus, which is a hallmark of API and developer evangelism efforts, but if you notice by the end we are bringing it home to the most important aspect of platform evangelism, the internal outreach. This is the number one reason APIs fail, is due to a lack of internal evangelism, educating top and mid-level management, as well as lower level staff, getting buy-in and direct hands-on involvement with the platform, and failing to justify budget costs for the resources needed to make a platform successful.

**Top-Down Change At FamilySearch**

The change FamilySearch is looking for already has top level management buy-in, the problem is that the vision is not in lock step sync with actual platform operations. When regular projects developed via the FamilySearch platform are regularly showcased to top level executives, and stories consistent with platform operations are told, management will echo what is actually happening via the FamilySearch. This will provide a much more ongoing, deeper message for the rest of the company, and partners around what the priorities of the platform are, making it not just a meaningless top down mandate.

An example of this in action is with the [recent mandate from President Obama, that all federal agencies should go “machine readable by default”](http://apievangelist.com/2012/06/01/barack-obama-directs-all-federal-agencies-to-have-an-api/), which includes using APIs and open data outputs like JSON, instead of document formats like PDF. This top down mandate makes for a good PR soundbite, but in reality has little affect on the ground at federal agencies. In reality it has taken two years of hard work on the ground, at each agency, between agencies, and with the public to even begin to make this mandate a truth at over 20 of the federal government agencies.

Top down change is a piece of the overall platform evolution at FamilySearch, but is only a piece. Without proper bottom-up, and outside-in change, FamilySearch will never evolve beyond just being a genealogical software as a service with an interesting API. It takes much more than leadership to make a platform.

**Bottom-Up Change At FamilySearch**

One of the most influential aspects of APIs I have seen at companies, institutions, and agencies is the change of culture brought when APIs move beyond just a technical IT effort, and become about making resources available across an organization, and enabling people to do their job better. Without an awareness, buy-in, and in some cases evangelist conversion, a large organization will not be able to move from a service orientation to a platform way of thinking.

If a company as a whole is unaware of APIs, either at the company or organization, as well as out in the larger world with popular platforms like Twitter, Instagram, and others—it is extremely unlikely they will endorse, let alone participate in moving from being a digital service to platform. Employees need to see the benefits of a platform to their everyday job, and their involvement cannot require what they would perceive as extra work to accomplish platform related duties. FamilySearch employees need to see the benefits the platform brings to the overall mission, and play a role in this happening—even if it originates from a top-down mandate.

Top bookseller Amazon was already on the path to being a platform with their set of commerce APIs, when after a top down mandate from CEO Jeff Bezos, [Amazon internalized APIs in such a way, that the entire company interacted, and exchange resources using web APIs](http://apievangelist.com/2012/01/12/the-secret-to-amazons-success-internal-apis/), resulting in one of the most successful API platforms—Amazon Web Services (AWS). Bezos mandated that if an Amazon department needed to procure a resource from another department, like server or storage space from IT, it need to happen via APIs. This wasn’t a meaningless top-down mandate, it made employees life easier, and ultimately made the entire company more nimble, and agile, while also saving time and money. Without buy-in, and execution from Amazon employees, what we know as the cloud would never have occurred.

Change at large enterprises, organizations, institutions and agencies, can be expedited with the right top-down leadership, but without the right platform evangelism strategy, that includes internal stakeholders as not just targets of outreach efforts, but also inclusion in operations, it can result in sweeping, transformational changes. This type of change at a single organization can effect how an entire industry operates, similar to what we’ve seen from the ultimate API platform pioneer, Amazon.

**Outside-In Change At FamilySearch**

The final layer of change that needs to occur to bring FamilySearch from being just a service to a true platform, is opening up the channels to outside influence when it comes not just to platform operations, but organizational operations as well. The bar is high at FamilySearch. The quality of services, and expectation of the process, and adherence to the mission is strong, but if you are truly dedicated to providing a database of all mankind, you are going to have to let mankind in a little bit.

FamilySearch is still the keeper of knowledge, but to become a platform you have to let in the possibility that outside ideas, process, and applications can bring value to the organization, as well as to the wider genealogical community. You have to evolve beyond notions that the best ideas from inside the organization, and just from the leading partners in the space. There are opportunities for innovation and transformation in the long-tail stream, but you have to have a platform setup to encourage, participate in, and be able to identify value in the long-tail stream of an API platform.

Twitter is one of the best examples of how any platform will have to let in outside ideas, applications, companies, and individuals. Much of what we consider as Twitter today was built in the platform ecosystem from the iPhone and Android apps, to the desktop app TweetDeck, to terminology like the #hashtag. Over the last 5 years, Twitter has worked hard to find the optimal platform balance, regarding how they educate, communicate, invest, acquire, and incentives their platform ecosystem. Listening to outside ideas goes well beyond the fact that Twitter is a publicly available social platform, it is about having such a large platform of API developers, and it is impossible to let in all ideas, but through a sophisticated evangelism strategy of in-person, and online channels, in 2014 Twitter has managed to find a balance that is working well.

Having a public facing platform doesn’t mean the flood gates are open for ideas, and thoughts to just flow in, this is where service composition, and the certification and partner framework for FamilySearch will come in. Through clear, transparent partners tiers, open and transparent operations and communications, an optimal flow of outside ideas, applications, companies and individuals can be established—enabling a healthy, sustainable amount of change from the outside world.

**Knowing All Of Your Platform Partners**

The hallmark of any mature online platform is a [well established partner ecosystem](http://apievangelist.com/2014/04/03/taking-a-quick-look-at-the-leading-api-partner-programs/). If you’ve made the transition from service to platform, you’ve established a pretty robust approach to not just certifying, and on boarding your partners, you also have stepped it up in knowing and understanding who they are, what their needs are, and investing in them throughout the lifecycle.

First off, profile everyone who comes through the front door of the platform. If they sign up for a public API key, who are they, and where do they potentially fit into your overall strategy. Don’t be pushy, but understanding who they are and what they might be looking for, and make sure you have a track for this type of user well defined.

Next, quality, and certify as you have been doing. Make sure the process is well documented, but also transparent, allowing companies and individuals to quickly understand what it will take to certified, what the benefits are, and examples of other partners who have achieved this status. As a developer, building a genealogical mobile app, I need to know what I can expect, and have some incentive for investing in the certification process.

Keep your friends close, and your competition closer. Open the door wide for your competition to become a platform user, and potentially partner. 100+ year old technology company [Johnson Controls (JCI)](http://www.johnsoncontrols.com/) was concerned about what the competition might do it they [opened up their building efficient data resources to the public via the Panoptix API platform](https://whatspossible.johnsoncontrols.com/community/panoptix-developer-center\)), when after it was launched, they realized their competition were now their customer, and a partner in this new approach to doing business online for JCI.

When Department of Energy decides what data and other resource it makes available via Data.gov or the agencies developer program it has to deeply consider how this could affect U.S. industries. The resources the federal agency possesses can be pretty high value, and huge benefits for the private sector, but in some cases how might opening up APIs, or limiting access to APIs help or hurt the larger economy, as well as the Department of Energy developer ecosystem—there are lots of considerations when opening up API resources, that vary from industry to industry.

There are no silver bullets when it comes to API design, deployment, management, and evangelism. It takes a lot of hard work, communication, and iterating before you strike the right balance of operations, and every business sector will be different. Without knowing who your platform users are, and being able to establish a clear and transparent road for them to follow to achieve partner status, FamilySearch will never elevate to a true platform. How can you scale the trusted layers of your platform, if your partner framework isn’t well documented, open, transparent, and well executed? It just can’t be done.

**Meaningful Monetization For Platform**

All of this will take money to make happen. Designing, and executing on the technical, and the evangelism aspects I’m laying out will cost a lot of money, and on the consumers side, it will take money to design, develop, and manage desktop, web, and mobile applications build around the FamilySearch platform. How will both the FamilySearch platform, and its participants make ends meet?

This conversation is a hard one for startups, and established businesses, let alone when you are a non-profit, mission driven organization. Internal developers cost money, server and bandwidth are getting cheaper but still are a significant platform cost--sustaining a sale, bizdev, and evangelism also will not be cheap. It takes money to properly deliver resources via APIs, and even if the lowest tiers of access are free, at some point consumers are going to have to pay for access, resources, and advanced features.

The [conversation around how do you monetize API driven resources is going on across government, from cities up to the federal government](http://apievangelist.com/2014/03/07/a-better-understanding-of-government-apis-and-their-consumers-before-considering-charging-for-use/). Where the thought of charging for access to public data is unheard of. These are public assets, and they should be freely available. While this is true, think of the same situation, but when it comes to physical public assets that are owned by the government, like parks. You can freely enjoy many city, county, and federal parks, there are sometimes small fees for usage, but if you want to actually sell something in a public park, you will need to buy permits, and often share revenue with the managing agency. We have to think critically about how we fund the publishing, and refinement of publicly owned digital assets, as with physical assets there will be much debate in coming years, around what is acceptable, and what is not.

Woven into the tiers of partner access, there should always be provisions for applying costs, overhead, and even generation of a little revenue to be applied in other ways. With great power, comes great responsibility, and along with great access for FamilySearch partners, many will also be required to cover costs of compute capacity, storage costs, and other hard facts of delivering a scalable platform around any valuable digital assets, whether its privately or publicly held.

Platform monetization doesn’t end with covering the costs of platform operation. Consumers of FamilySearch APIs will need assistance in identify the best ways to cover their own costs as well. Running a successful desktop, web or mobile application will take discipline, structure, and the ability to manage overhead costs, while also being able to generate some revenue through a clear business model. As a platform, FamilySearch will have to bring to the table some monetization opportunities for consumers, providing guidance as part of the certification process regarding what are best practices for monetization, and even some direct opportunities for advertising, in-app purchases and other common approaches to application monetization and sustainment.

Without revenue greasing the gears, no service can achieve platform status. As with all other aspects of platform operations the conversation around monetization cannot be on-sided, and just about the needs of the platform providers. Pro-active steps need to be taken to ensure both the platform provider, and its consumers are being monetized in the healthiest way possible, bringing as much benefit to the overall platform community as possible.

**Open & Transparent Operations & Communications**

How does all of this talk of platform and evangelism actually happen? It takes a whole lot of open, transparent communication across the board. Right now the only active part of the platform is the FamilySearch Developer Google Group, beyond that you don’t see any activity that is platform specific. There are active Twitter, Facebook, Google+, and mainstream and affiliate focused blogs, but nothing that serves the platform, contributed to the feedback loop that will be necessary to take the service to the next level.

On a public platform, communications cannot all be private emails, phone calls, or face to face meetings. One of the things that allows an online service to expand to become a platform, then scale and grow into robust, vibrant, and active community is a stream of public communications, which include blogs, forums, social streams, images, and video content. These communication channels cannot all be one way, meaning they need to include forum and social conversations, as well as showcase platform activity by API consumers.

Platform communications isn’t just about getting direct messages answered, it is about public conversation so everyone shares in the answer, and public storytelling to help guide and lead the platform, that together with support via multiple channels, establishes a feedback loop, that when done right will keep growing, expanding and driving healthy growth. The transparent nature of platform feedback loops are essential to providing everything the consumers will need, while also bringing a fresh flow of ideas, and insight within the FamilySearch firewall.

**Truly Shifting FamilySearch The Culture**

Top-down, bottom-up, outside-in, with constantly flow of oxygen via vibrant, flowing feedback loop, and the nourishing, and sanitizing sunlight of platform transparency, where week by week, month by month someone change can occur. It won’t all be good, there are plenty of problems that arise in ecosystem operations, but all of this has the potential to slowly shift culture when done right.

One thing that shows me the team over at FamilySearch has what it takes, is when I asked if I could write this up a story, rather than just a proposal I email them, they said yes. This is a true test of whether or not an organization might have what it takes. If you are unwilling to be transparent about the problems you have currently, and the work that goes into your strategy, it is unlikely you will have what it takes to establish the amount of transparency required for a platform to be successful.

When internal staff, large external partners, and long tail genealogical app developers and enthusiasts are in sync via a FamilySearch platform driven ecosystem, I think we can consider a shift to platform has occurred for FamilySearch. The real question is how do we get there?

**Executing On Evangelism**

This is not a definitive proposal for executing on an API evangelism strategy, merely a blueprint for the seed that can be used to start a slow, seismic shift in how FamilySearch engages its API area, in a way that will slowly evolve it into a community, one that includes internal, partner, and public developers, and some day, with the right set of circumstances, FamilySearch could grow into robust, social, genealogical ecosystem where everyone comes to access, and participate in the mapping of mankind.

*   **Defining Current Platform -** Where are we now? In detail.
*   **Mapping the Landscape -** What does the world of genealogy look like?
*   **Identifying Projects -** What are the existing projects being developed via the platform?
*   **Define an API Evangelist Strategy -** Actually flushing out of a detailed strategy.
*   *   Projects
    *   Storytelling
    *   Syndication
    *   Social
    *   Channels
    *   *   External Public
        *   External Partner
        *   Internal Stakeholder
        *   Internal Company-Wide
*   **Identify Resources -** What resource currently exist? What are needed?
*   *   Evangelist
    *   Content / Storytelling
    *   Development
*   **Execute -** What does execution of an API evangelist strategy look like?
*   **Iterate -** What does iteration look like for an API evangelism strategy.
*   *   Weekly
    *   Review
    *   Repeat

AS with many providers, you don’t want to this to take 5 years, so how do you take a 3-5 year cycle, and execute in 12-18 months?

*   **Invest In Evangelist Resources -** [It takes a team of evangelists to build a platform](http://apievangelist.com/2014/07/17/it-takes-a-team-of-evangelists-to-raise-an-api/)
*   *   External Facing
    *   Partner Facing
    *   Internal Facing
*   **Development Resources -** We need to step up the number of resources available for platform integration.
*   *   Code Samples & SDKs
    *   Embeddable Tools
*   **Content Resources -** A steady stream of content should be flowing out of the platform, and syndicated everywhere.
*   *   Short Form (Blog)
    *   Long Form (White Paper & Case Study)
*   **Event Budget -** FamilySearch needs to be everywhere, so people know that it exists. It can’t just be online.
*   *   Meetups
    *   Hackathons
    *   Conferences

There is nothing easy about this. It takes time, and resources, and there are only so many elements you can automate when it comes to API evangelism. For something that is very programmatic, it takes more of the human variable to make the API driven platform algorithm work. With that said it is possible to scale some aspects, and increase the awareness, presence, and effectiveness of FamilySearch platform efforts, which is really what is currently missing.

While as the API Evangelist, I cannot personally execute on every aspect of an API evangelism strategy for FamilySearch, I can provide essential planning expertise for the overall FamilySearch API strategy, as well as provide regular checkin with the team on how things are going, and help plan the roadmap. The two things I can bring to the table that are reflected in this proposal, is the understanding of where the FamilySearch API effort currently is, and what is missing to help get FamilySearch to the next stage of its platform evolution.

When operating within the corporate or organizational silo, it can be very easy to lose site of how other organizations, and companies, are approach their API strategy, and miss important pieces of how you need to shift your strategy. This is one of the biggest inhibitors of API efforts at large organizations, and is one of the biggest imperatives for companies to invest in their API strategy, and begin the process of breaking operations out of their silo.

What FamilySearch is facing demonstrates that APIs are much more than the technical endpoint that most believe, it takes many other business, and political building blocks to truly go from API to platform.