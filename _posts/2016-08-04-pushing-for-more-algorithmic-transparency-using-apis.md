---
layout: post
title: Pushing For More Algorithmic Transparency Using APIs
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-algorithmic-transparency-2.png
atomdate: 2016-08-04T19:00:00.000Z
tags:
  - Transparency
  - APIs
---
I saw the potential for collaboration when it came to using web APIs back around 2004 and 2005. I was seeing innovative companies opening up their digital assets to the world using low-cost, efficient Internet technology like HTTP, opening things up for potentially interesting approaches to collaboration around the development of web and mobile applications on top of valuable digital resources. This approach has brought us valuable platforms like Amazon Web Services and SalesForce. 

Common API discussions tend to focus on providing APIs to an ecosystem of developers and encouraging the development of web and mobile applications, widgets, visualizations, and other integrations that benefit the platform. In the course of these operations, it is also customary to gather feedback from the community and work to evolve the APIs design, available resources, and even the underlying data model--extending collaboration to also be about the APIs, and underlying resources, in addition to just building things on top of the API.

This approach to designing, defining, and deploying APIs, and then also web and mobile applications on top of these APIs is nothing new, and is something that I have been tracking on for over the last six years. The transparency that can be injected into the evolution of data, content, and potentially the "algorithms behind" with APIs is significant, which is how it became such a big part of my professional mission, and fueling my drive to spread the "gospel" whenever and wherever I can. 

Ok, so how can APIs contribute to algorithmic transparency? To fully grasp where I am taking this, you need to understand that APIs can be used as an input and output for data, content, as well as algorithms. Let's use Twitter as an example. Using Twitter and the Twitter API I can read and write data about myself, or any user, using the /account and /users API endpoints--providing the content and data portion of what I am talking about.

When it comes to the algorithm portion, Twitter API has several methods, such as [GET statuses/user\_timeline](https://dev.twitter.com/rest/reference/get/statuses/user_timeline), [GET statuses/home\_timeline](https://dev.twitter.com/rest/reference/get/statuses/home_timeline) and [GET search/tweets](https://dev.twitter.com/rest/reference/get/search/tweets), which return a "timeline of Tweet data". In 2006 this timeline was just the latest Tweets from the users you follow, in sequential order. In 2016, you will get "content powered by a variety of signals". In short, [the algorithm that drives the Twitter timeline is pretty complicated](https://support.twitter.com/articles/164083), with a number of things to consider:

*   Your home timeline displays a stream of Tweets from accounts you have chosen to follow on Twitter. 
*   You may see suggested content powered by a variety of signals. 
*   Tweets you are likely to care about most will show up first in your timeline. 
*   You may see a summary of the most interesting Tweets you received since your last visit
*   You may also see content such as promoted Tweets or Retweets in your timeline.
*   Additionally, when we identify a Tweet, an account to follow, or other content that's popular or relevant, we may add it to your timeline.

There are a number of considerations that would go into any one timeline response--this is Twitter's algorithm. While I technically have access to this algorithm via three separate API endpoints, there really isn't much algorithmic transparency present, [beyond their overview in the support section](https://support.twitter.com/articles/164083). Most companies are going to claim this is their secret sauce and their intellectual property. That is fine, I don't have a problem with y'all being secretive about this, even though I will always push you to be more open, as well as leave the API layer out of your patents you use to pretect your algorithms.

Algorithmic transparency with APIs is not something that should be applied to all APIs in my opinion, but for regulated industries, and truly open API solutions, transparency can go a long way, and bring a number of benefits. All Twitter (and any other API provider) has to do is add parameters, and corresponding that open up the variables of the underlying algorithm for each endpoint. What goes into considerations about "what I care about", constitutes "interesting", and what makes things "popular or relevant"? Twitter will never do this, but other API providers can.

It is up to each API provider to decide how transparent they are going to be with their algorithms. The ideal solution when it comes to transparency is that the algorithm is documented and shared along with supporting code on Github, like [Chicago, did for their food inspection algorithm](https://github.com/Chicago/food-inspections-evaluation). This opens up the algorithm, and the code behind for evaluation by 3rd parties, potentially improving upon it, as well as validating the logic behind--potentially opening up a conversation about the life of the algorithm.

There are a number of common reasons I have seen for companies and developers not opening up their algorithms:

*   It truly is secret sauce, and too much was invested to just share with the world.
*   It is crap, and the creator doesn't want anyone to know there is nothing behind.
*   There are malicious things going on behind the scenes that they do not want to be public.
*   Insecurities about coding abilities, security practices and logic applied to the algorithms.
*   Exist in competitive space with lots of bad actors, and may want to limit this behavior.
*   What is accomplished isn't really that defensible, and the only advantage is to keep hidden.

I have no problem making an argument for algorithmic transparency when it comes to regulated industries, like financial, healthcare, and education. I think it should be default in all civic, non-profit, and other similar scenarios where the whole stack should just be open sourced, and available on Github. You won't find me pushing back to hard on the startups unless I see some wild claims about the magic behind, or I see evidence of exploitation, then you will hear me rant about this some more.

Algorithmic transparency can help limit algorithmic exploitation and the other shady shit that is going on behind the scenes on a regular basis these days. [I have added an algorithm section to my research](http://apievangelist.com), and as I see more talk about the magic of algorithms, and how these amazing creations are changing our world--I am going to be poking around a bit, and probably asking to see more algorithmic transparency when I think it makes sense.