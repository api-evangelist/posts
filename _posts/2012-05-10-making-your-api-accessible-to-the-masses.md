---
layout: post
title: Making Your API Accessible to the Masses
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/google-analytics-screenshot.png
author:
  name: kinlane
tags:
  - Access
---
There are a lot of high value APIs emerging these days, APIs with access to essential business data, resources and intelligence.

When designing your API you want to make the interface as intuitive as possible, and ensure as wide as access to it as you possibly can. To quote Jonathan Schwartz, Sun CEO regarding Java APIs:

> _"We wanted to build the biggest tent and invite as many people as possible,” Schwartz said. “You have open APIs and compete on implementations."_

To do this, I encourage building tools and widgets that non-developers can use when working with your API. A great example of this is at Google, with their [Google Analytics Dashboard Library](http://analytics-api-samples.googlecode.com/svn/trunk/src/reporting/javascript/ez-ga-dash/docs/user-documentation.html "Google Analytics Dashboard"). Google wanted to make it [easier for users to deploy a dashboard](http://analytics.blogspot.com/2012/05/new-google-analytics-easy-dashboard.html "easier for users to deploy a dashboard") that was tailored specifically for their business, so using a team of University of California Irvine students, they set out to simplify it down to 3 steps:

1.  Register with Google APIs Console.
2.  Copy and paste the JavaScript code.
3.  Configure this code to query your data and choose a chart type to visualize it.

Now, you still have to be JavaScript savvy to work with the Google Analytics Dashboard Library, understand how to edit your site, and be fluent in Google Analytics--but it’s a step closer to providing wider access to the power of the [Google Analytics API](https://developers.google.com/analytics/ "Google Analytics API"), beyond just the development community.

LinkedIn also has some great examples of taking concept this to the next level with their [“plugin” builders](https://developer.linkedin.com/plugins/member-profile-plugin-generator "plugin builders") which essentially generates the widgets for users, using the API. Since Google is going to keep working with the Google Analytics Dashboard Library over the next 3 quarters, so I’m sure you’ll see their library evolve as well.

![](http://kinlane-productions2.s3.amazonaws.com/linkedin/LinkedIn-Widget-Builder.png)

I’ll keep exploring other great examples of API embeddable strategies that can potentially bring in a much wider audience, opening up your API for access beyond developers, potentially bringing in other more business oriented groups.