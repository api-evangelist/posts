---
layout: post
title: >-
  As The API Design Space Grows, More Companies Are Publishing Their API Design
  Guides to Github
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/api-design-guide.png
author:
  name: kinlane
tags:
  - Github
  - Design
  - Guides
  - Publishing
  - Git
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/api-design-guide.png)](http://design.apievangelist.com/)

[I recently went through my API design research](http://design.apievangelist.com/), updating and evolving it, to help me better understand changes in the API design space, while also sharing as much of the information as I can with my readers. [One of the resources I include under my tools section are the increasing number of API design guides being published](http://design.apievangelist.com/tools.html). 

Currently I'm showcasing the API design guides for [18F in the federal government](https://github.com/18F/api-standards), [Heroku](https://github.com/interagent/http-api-design), and [PayPal](https://github.com/paypal/api-standards/blob/master/api-style-guide.md), then the other day my friend Holger Reinhardt ([@hlgr360](https://twitter.com/hlgr360)), formerly of [CA Technologies](http://www.ca.com/us/default.aspx), now the CTO at the [Haufe Group in Germany](http://www.haufe.de/), shared his teams API design guidie with me. The executive summary for the guide says it well:

_Purpose of this style guide is to gather a list of rules, best practices, resources and our way of creating REST APIs in Haufe Group. The style guide addresses API Designers, mostly developers and architects, who want to design an API. Intention is to ease the design process by providing helpful rules to create a successful API that your customers will love._

One thing I really like, is they also added "please follow the guidelines but don't follow blindly! you can break the rules with justification". Overall the API design guide is full of very pragmatic API design theory, much of what I've heard before, but also emphasizes some very import, forward thinking aspects of modern web API as well. 

The design guide leads with some very sound API wisdom:

*   You should think of an API like a product. Indeed a Business API is a product.
*   Design your API with a customer, or at least with a customer in mind and Get Feedback.
*   Do not implement API Management (use existing services)
*   Every API MUST be described using a formal API description language
*   API clients MUST use a self-service API portal to get access to the API via an API Key

After that, they do not miss a beat going into REST principles stating: "All our REST APIs MUST support hypermedia." The way they lay out their API design best practices makes everything very accessible, leaving hypermedia seeming a very sensible practice, not a bleeding edge design theory. I'm going to try and go through each section and apply to my own internal API design practices, there are several things here I could do so much better, by following.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Logo_Haufe_Gruppe.gif)](http://www.haufe-lexware.com/)

I may even begin work on my own API design guide, based upon what I've learned from the Haufe Group, 18F, Heroku, Paypal, and others. Not that my version would be any better than the sources, but I'm feeling the process of parsing the work of others, and assembling into my own document will be a healthy journey all by itself. An API design guide is quickly becoming an essential building block for API providers of all shapes and sizes, and publishing it publicly via Github is becoming a badge of leadership and transparency for the rest of the API community.