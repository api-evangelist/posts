---
layout: post
title: Formalizing My Approach To Identifying The Low Hanging API Fruit
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-grapes.png
tags:
  - My
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-grapes.png)](http://low.hanging.fruit.apievangelist.com/)

I get approached by folks all the time who are looking to do APIs at their company, organization, institution, or government agency. The reasons behind these desires to do APIs vary widely. Some want to do API to deliver a specific web or mobile app, while many others just understand they need to get started somewhere, but are unsure of exactly where to begin with this daunting, never-ending task. 

In these situations I always tell people to start with the low hanging fruit, which means, if its already on your website, it should also be available as an API. If you are publishing data or content to your website, as HTML, CSV, XML, XLS, or JSON, you should have available via an API. The average company has a mess of information made available via a website, and the API journey is about untangling this mess, and make it available for not just the web, but also mobile, messaging, bot, voice, and other emerging channels in which people are getting their information.

I've been asked to help identify the low hanging fruit for enough groups now, [I'm looking to formalize it as a service](http://low.hanging.fruit.apievangelist.com/). My low hanging fruit process involves spinning up a web spider instance on AWS, giving it a domain as a target, and letting it slowly spider all the HTML pages, looking for the following low hanging fruit, over the course of a couple of weeks.

*   **Tables** - Identify an HTML page with a table on it that has more than 5 rows.
*   **CSV** - Identify an CSV file that is linked to from any HTML page within the domain.
*   **XLS** - Identify an XLS or XSLX file that is linked to from any HTML page within the domain.
*   **XML** - Identify an XML file that is linked to from any HTML page within the domain.
*   **Forms** - Identify any page that has a form on it, and also index any fields available with it.

After I've spun up the spider server instance, and let it run for a few days, I can output a JSON list of any tables, CSV, XLS, XML, and forms that the spider has found. I publish each of these as JSON files, which can then be reviewed for possible API candidates. Ideally each entry gets fleshed out more, giving it a human readable title, a description, apply some tags, and hopefully identifying the source of the data, and hopefully better understand some of the goals around why it is published.

Once the low hanging fruit bot is released, I follow up with a manual review of the website being targeted, looking for common entities and objects that emerge from the top level, and sub navigation -- reverse engineering the sites information architecture, so it can also be considered alongside the other low hanging fruit that is defined. I would say this process helps identify many of the top level organizational and business motivations for sharing information, where the spidering, and targeting of low hanging fruit represents the under-currents, or less obvious organizational and business motivations behind making information available.

That is my low hanging fruit approach. It is a pretty crude, yet can be a very valuable way to helping jumpstart API efforts at any company, organization, institution, and government agency. If a formal approach has not already emerged out of existing IT, and developer groups within your organization, you might consider a more grass roots, low hanging fruit approach to identifying the next steps for your API effort(s).

With this low hanging fruit target list, and website review in hand, we can start to talk about what is needed next when it comes to designing, defining, deploying, and managing APIs. If you need help with this, let me know, I'm now doing it as a service for more companies and organiations--[just contact me via one of my channels, and I'll see what I can do](http://apievangelist.com/contact/).

P.S. Please make sure you have the legal right to spider the website in this way. I'm only looking to consider the low hanging fruit of your own organization, ad better understand how to jumpstart an official API effort -- we are just doing this from the outside-in.