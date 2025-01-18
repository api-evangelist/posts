---
layout: post
title: Jumpstarting The API Conversation Using Prototypes
image: >-
  https://s3.amazonaws.com/kinlane-productions2/federal-government/ed/fafsa-form.jpg
author:
  name: kinlane
tags:
  - Prototypes
  - Prototype
---
[![](https://s3.amazonaws.com/kinlane-productions2/federal-government/ed/fafsa-form.jpg)](https://ed-data.github.io/fafsa-api)

For those of us who live and breathe APIs, it is easy to image what is possible when discussing an idea for an API, or what an API could to to transform an existing process or application—however for everyone else will often need something more to help them understand what is possible. Often times it is these folks who are the decision makers behind whether an API will live or die, so it is critical to help them get up to speed.

In my experience there is no better way to jumpstart the conversation about what is possible around an API, than to just build a prototype, flushing out all aspect around an API resource. This is just what I recently did around the [free financial student aid form](https://fafsa.ed.gov/), from the Department of Education.

In November someone contacted me in government and told me how there had been a conversation around a potential API for the FAFSA form, but because of the usual undercurrents in government, the discussion had gone cold. My contacts in the federal government can’t actually ask me to work on projects for free (and they didn't), but they can express their ideas of what "could be", then it is up to me if I want to help make this come true. This is one of the primary reason I left my own position in government as a [Presidential Innovation Fellow](http://www.whitehouse.gov/innovationfellows/meet-the-fellows), to give me more flexibility in designing and deployment projects, and also help federal agencies kickstart API initiatives from the outside-in.

During November and December I worked on [a prototype for what the FAFSA API could be](http://ed-data.github.io/fafsa-api/), using my own approach to API project development, where I don’t just design and develop the API, I tell the story of the process in real-time, publishing it all as a Github repository and site that anyone can follow, fork and put to use. By 12/15 I had a [handful of API endpoints including for reading and writing the FAFSA application, available fields, rejection codes, conditional procedures and for pulling states and universities](http://ed-data.github.io/fafsa-api/docs.html) to support web and mobile application development.

In December I went to an education data jam in Palo Alto at Stanford, and supported another virtually that was held in Cambridge at Harvard, in an effort to push the existence of my API prototype, making people aware of what I was doing. While there is still a lot of work to be done on prototype, I needed to add the most important ingredient that doesn't have anything to do with technology—I need to start a conversation around the potential of a FAFSA API within the education community.

While my FAFSA API prototype didn’t generate code and applications I would like, I did start a conversation, and the resulting discussion and awareness around it help rekindle the conversation at the Department of Education. On January 15th at an education datapalooza in Washington DC that was looking to promote innovation in improving college access, affordability and completion the [Department of Education made an announcement](http://www.ed.gov/news/press-releases/fact-sheet-education-datapalooza-promote-innovation-improving-college-access-aff):

> _The U.S. Department of Education will explore the use of Application Program Interfaces (APIs) as a way to help students and families access key education processes, programs, and data. The Department will issue a Request for Information (RFI) to gather ideas and feedback on potential development of APIs with key education data, programs, and frequently used forms—including the Free Application for Federal Student Aid (FAFSA)._

I’m not taking full credit for this, everyone who participated in the conversation deserves credit, and while my prototype may not get any more time or resources to evolve the project forward, I still feel I accomplished my goal, which was not to develop a FAFSA API, or spawn an actual API ecosystem—it was to revive the conversation with the one group that should own the API deployment, the Department of Education.

When it comes to the business and politics of APIs there isn’t always a clear path to follow when designing, deploying and finding success. Sometimes you have to develop prototypes and proof of concepts and get the conversation going, get key players to the table and then things will move forward in their own way.