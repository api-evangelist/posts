---
layout: post
title: Which Of The Three OAuth Legs Is The Most Important?
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/apistrat-ecosystem-panel.jpg
author:
  name: kinlane
tags:
  - OAuth
---
We closed up the [API Strategy & Practice Conference](http://www.apistrategyconference.com/sessions.php "API Strategy & Practice") ([#APIstrat](https://twitter.com/search?q=%23apistrat&src=typd)) last friday with a panel called APIs, Platforms and Ecosystem, where I moderated a healthy discussion with Tyler Stalder ([@tylerstalder](https://twitter.com/tylerstalder)) of [Singly](http://www.singly.com/ "Singly"), Seth Blank ([@AntiFreeze](https://twitter.com/AntiFreeze)) of [YourTrove](https://www.yourtrove.com/ "YourTrove"), Asif Rahman ([@asifrahman](https://twitter.com/asifrahman)) of [Newscred](http://newscred.com/ "NewsCred"), Orian Marx ([@orian](http://alpha.app.net/orian)) of [App.net](https://join.app.net/ "App.net"), Travis Wallis ([@traviswallis](https://twitter.com/traviswallis)) of [PeopleBrowsr](http://peoplebrowsr.com/ "PeopleBrowsr") around the very broad spectrum of APIs, platforms and the concept of ecosystems.

One of the questions I asked the group was, which of the three OAuth Legs is the most important?  

To provide a quick primer for the portion of my audience that aren’t OAuth geeks:

> _[OAuth is an open standard for authorization that provides a method for clients to access server resources on behalf of a resource owner](http://en.wikipedia.org/wiki/OAuth)_

Ok, what does that mean? Think Twitter. Twitter is server. You are the owner of your tweet resources. When you authenticate anywhere using your Twitter ID, that website or app uses OAuth to get access to your tweets, via the Twitter platform. If you login to your Twitter account, click on settings and select apps from the left menu--these are apps and sites that have requested OAuth access your Twitter resources.

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/oauth/OAuth2.png)

OAuth is a relationship between you, your platform provider and various sites and apps that want to access your data via the API. Sometimes these apps and your platform provider are one and the same, but the beauty of OAuth is that anyone can request access from you--access that you can revoke when you choose.

Back to the panel at API Strategy & Practice. Every panelist, except for Asif Rahman of Newscred said that the most important leg of oAuth is the end user. This made me happy because it shows that, at least at [#APIstrat](https://twitter.com/search?q=%23apistrat&src=typd), people are concerned with the interest of the end user. This is healthy.

In reality, I worry that when platform discussions do occur, the conversation leans too much in favor of platform, then the developer, with very little to no involvement of the end user. Think of the Twitter ecosystem discussions since March of 2010. Rarely do you hear discussion about API access and ecosystem viability in the context of the end-users. Platforms and especially developers are very good at being very loud in these conversations.

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/oauth/oauth-twitter-3-legs.png)

In my opinion all three legs of OAuth are equally important, with an emphasis on the end-user. It is their resource right? Or is it? The only thing standing between healthy OAuth conversations and relationships is the platforms terms of use and privacy policies.

The entire panel at #APIStrat agreed that we need more education for end-users about OAuth. Now that we have OAuth 2.0 settled (in some minds), we need to get down to business _educating all three legs_ around the process of OAuth and its best practices, empowering all three parties to be aware, and participate in ongoing conversations about how we are producing, storing, sharing, selling, licensing and consuming resources via APIs.

We need to make sure API platform conversations have all three legs represented. The success of any platform will depend on a healthy balance between a platform, developers and the end-users--with oAuth 2.0 being the best model we have to make this happen to date.

Lets get to work.