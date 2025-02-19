---
layout: post
title: >-
  My Answer To Why You Should Not Use Services Like Quora That Do Not Offer API
  And Data Portability
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/quora/quora_logo_620px.png
author:
  name: kinlane
tags:
  - My
  - Data
  - Services
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/quora/quora_logo_620px.png)](http://www.quora.com/)

As the API Evangelist I spend a lot of time cheering for companies to have APIs, and in 2014 I’m continuing a slow shift from cheerleading to calling out companies who do not have an API. If you are an older company or institution I will be a lot more forgiving about whether or not an API exists, but with newer tech companies, there is NO excuse --an API is mandatory!

As a digital citizen in 2014, you should not use any online service that doesn’t allow for data portability, which starts with the ability to just download a complete file of all your account settings and data, and is fully realized when a fully read/write API exists, with the support of a healthy, vibrant API community. If a company doesn’t provide you with these basic data portability features, you are most likely in a hostage situation where you are generating content and value for a company, with no say in how your content is used, monetized or even removed.

I am reminded of an example of a modern tech company, who is harvesting the knowledge and wisdom of the crowd, but offers nothing back in return to its users, by Andy Baio (@waxpancake):

> Worth noting: Quora has no public API, no backup/export tools, blocks anonymous display of answers, and banned the Wayback Machine entirely.
> 
> — Andy Baio (@waxpancake) [April 9, 2014](https://twitter.com/waxpancake/statuses/453958676529696769)

After I retweeted Andy’s reminder, one of my followers said they would like to retweet, but they want to make sure it was true. Andy said to go look for their self, and that after over 300+ retweets nobody had challenged his statement--which the reply was he didn't have time. Well I have time to go look, and verify whether or not Quora has an API—let’s take a look, and what better way than to just ask Quora!

[Does a Quora API exist?](http://www.quora.com/Does-a-Quora-API-exihttp://www.quora.com/Does-a-Quora-API-exist) The short answer is yes. There is the [Quora Extension API](http://www.quora.com/Edmond-Lau/Edmond-Laus-Posts/Quora-Extension-API), which is a “json-based data API exposing information about the currently logged-in user”. This API is purely designed for use in a toolbar, not building apps or even extracting a users data, and the developer Edmond Lau ([@edmondlau](https://twitter.com/edmondlau)), who posted the announcement of the API is gone from Quora, which is usually a sign that an API project has lost its leader.

There are plenty of questions about [when is Quora planning an open API?](http://www.quora.com/Quora-API/When-is-Quora-planning-an-open-API), and there are responses from Quora founders, like this one from Charlie Cheever - 9 Jun, 2010:

> _When there are enough users and content on Quora that an API would be really useful, we'll almost certainly add one. For right now, we'll probably focus on the web interface since that's how we think most people will use the product, at least to start. Another reason we probably won't do an API for a little while is that the interface into the product is changing frequently in big ways right now (ex. We added "thanks" a few days ago and we're not sure if we'll keep that or not,) and APIs that aren't stable are hard to use effectively._

After reading the answers it is evident to me that there is no API knowledge or passionate leader at Quora. Charlie’s response demonstrates they don’t possess a true understanding of what is possible with a properly executed API, the agiity it will bring to their own dev cycles, but also the community opportunities that will emerge. Without a fundamental knowledge of APIs, company leaders always possess a lack of understanding how you can manage and control content in even more powerful ways than you can, with just an web interface.

Of course there is speculation on [why isn't there a public Quora API?](http://www.quora.com/Quora-API/Why-isnt-there-a-public-Quora-API). With a pretty direct response from Chuck Russell, Sr. Partner Collective Intelligence Inc.:

> _Maybe Quora wants to own the corpus of thought on the platform. Coupled with your Twitter, FB and Linkedin social profiles they know quite a bit about you. To assume that they're not monetizing this information is naive. At this point they don't want to dilute the value of the psychometrics they've collected by creating aggregator-like competitors. The fact that they say they're "working on it" is absolute BS. Either the Quora team is incompetent or they are disingenuous. Which is more likely?_

Beyond the discussion about the Quora API, the conversation quickly moves into [what's the best way to backup your Quora answers and votes](http://www.quora.com/Whats-the-best-way-to-backup-your-Quora-answers-and-votes), and [would writing a Quora-scraper (in the absence of an API) get me banned for life from Quora](http://www.quora.com/Would-writing-a-Quora-scraper-in-the-absence-of-an-API-get-me-banned-for-life-from-Quora--hich)?  I find it very interesting, and telling that Quora hasn’t chimed in on these threads. There is a sensible answer recommending that scrapers should adhere to the sites robots.txt, which begins with a request to email them when you are crawling the site. Is this the poor mans on-boarding process for content partners?

In my experience, the lack of an API and data portability is the result of two things: 1) lack of understanding of business and politics of APIs 2) lack of a healthy, creative monetization strategy. I think the responses I’ve seen cover number one, but [what could Quora's long-term business plan be?](http://www.quora.com/Quoras-Business-Model-and-Monetization/What-could-Quoras-long-term-business-plan-be) According to Yair Livne, Data Science Manager at Quora, which has a vote by Adam D'Angelo (Quora Founder & CEO):

> _Advertising models represent an interesting opportunity for Quora, given the nature of our traffic.Quora's traffic is 30-40% direct intent: people searching for something, asking a question, or indicating in some other way that they are looking for something specific. And given our high percentage of commercial intent traffic, I would estimate that our long-term implied CPMs for advertising would be comparable to those achieved by web search (Google, Yahoo, Bing) and vertical search (LinkedIn, TripAdvisor, Yelp). With these products, people are explicit about the question they are trying to answer and the topics they are interested in learning about. This creates exciting ad opportunities because you can deliver real results for both people and advertisers._

This smells like a play out of the Twitter playbook to me, [where much like Pinterest](http://apievangelist.com/2012/05/25/lack-of-pinterest-api-is-a-lack-of-api-business-strategy/), Quora is not going make the same mistakes as Twitter by having an API and relinquishing any control over its content, in ways that might hurt monetization for their investors or just confuse operations for them. This represents a lack of understanding of the business and politics of APIs, and an inability to truly innovate when it comes to monetization.

Quora refelects a pretty basic Silicon Valley formula for making money. Create site that attracts users, and generates content or media, and as long as you can control all eyeballs who view this content, at some point you can monetize by placing ads along with that content. In the beginning you have to act like you care about your users, so they will sign up, return and generate content. As part of this process you pretend like an API is coming, but in reality you just want to retain as much control over the content your community has generated as you can.

This classic formula for extracting and controlling the value online users create, is an easy and proven formula for generating value that investors can get behind. Giving users access to their data, and providing an ecosystem for other businesses to come in an innovate takes way to much thinking, creativity and belief that your core business model is truly unique and valuable. The Quoras, Pinterests, and Twitters of the world don’t have time to explore the future of user generated content ownership, or new and interesting ways of monetization beyond the classic advertising. It is somewhat unfair that Twitter is listed above, because they do have data portability and an API, but I include them in the group because I strongly feel they have left serious money on the table by not letting the ecosystem help them in their monetization efforts, and just focusing on Twitter advertising. I know its what your investors get, but it is sooooo shortsided.

The reason I write this post is that I want the average Internet user to understand the inner workings of the tech companies they are lining up to use. **You should not use any platform that doesn’t provide data portability and an API**. If a company doesn’t provide this in 2014, there is either incompetency at the helm, or there are other motivations involved—usually the fact that you are the product, generating value for the platform and sharing that wealth with you is not in the business plan. Shouldn’t you go somewhere else with your contribution, somewhere that values what you bring to the table, and gives you a vote and ast least ownership over your work?

I have a [Quora profile](http://www.quora.com/Kin-Lane), but if you follow me, you notice I don’t answer many questions or participate in any meaningful way—this is because I do not have any control over my knowledge that hand over to Quora. I will up vote, or maybe provide a short answer now and then, but if I want to share some wisdom I will do it on a platform that I have some control over like my blog, or even Twitter. Why would I hand over my content for Quora to own, monetize without any sort of nod to the value I bring to the table?