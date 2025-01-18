---
layout: post
title: >-
  @SlashDB Created The Ranking Digital Rights Corporate Accountability Index API
  I Was Asking For
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/slashdb-new-logo-sideways-medium.png
author:
  name: kinlane
tags:
  - Ranking
  - Accountability
  - Digital
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/slashdb-new-logo-sideways-medium.png)](http://www.slashdb.com/)

I read a lot of blog posts, and press releases about open data these days, and when I find a dataset I think offers a lot of value, or is just interesting enough to help push forward, I either try to incorporate into my [Adopta open data work](http://adopta.agency/), or I just put it out to my followers to see if anyone can help.

As I was monitoring the space yesterday I came across the [Ranking Digital Rights 2015 Corporate Accountability Index](https://rankingdigitalrights.org/), which _"evaluates 16 of the world’s most powerful Internet and telecommunications companies on their disclosed commitments, policies, and practices that affect users’ freedom of expression and privacy."_\--[I saw there was an excel and CSV versions of the report](https://rankingdigitalrights.org/index2015/download/), but I didn't see an API, so I tweeted out:

  

> Done [@kinlane](https://twitter.com/kinlane) [https://t.co/f69iFoYgDJ](https://t.co/f69iFoYgDJ)
> 
> — SlashDB (@slash\_db) [November 4, 2015](https://twitter.com/slash_db/status/661790951749386240)

Victor Olex ([@agilevic](https://twitter.com/agilevic)) from [SlashDB](http://www.slashdb.com/), turned around an API endpoint in a matter of a couple of hours. Here is what Victor sent me:

_I took your Twitter challenge and created the API for Ranking Digital Rights data. The data model does not include scores for individual lines of business, but it does have all qualitative data needed to make sense of it. I did not write any data aggregation queries, but we can add those later. The whole thing works off a MySQL database model, which I designed and fed with data from the spreadsheet._

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/slashdb-ranking-digital-rights-diagram)

Using SlashDB, Victor quickly generated the following endpoints for quick access to the digital rights data behind the report:

*   Root API endpoint - [http://demo.slashdb.com/db/rdr.html](http://demo.slashdb.com/db/rdr.html)
*   Privacy indicators - [http://demo.slashdb.com/db/rdr/indicator/category\_cd/P.html](http://demo.slashdb.com/db/rdr/indicator/category_cd/P.html)
*   All privacy grades - [http://demo.slashdb.com/db/rdr/indicator/category\_cd/P/grade.html](http://demo.slashdb.com/db/rdr/indicator/category_cd/P/grade.html)
*   American companies' grade on C1 (Commitment - Policy and Leadership) - [http://demo.slashdb.com/db/rdr/company/country\_cd/US/grade/indicator\_cd/C1.html](http://demo.slashdb.com/db/rdr/company/country_cd/US/grade/indicator_cd/C1.html)
*   Companies, which scored at least 75% on at least privacy indicator - [http://demo.slashdb.com/db/rdr/indicator/category\_cd/P/grade/value/0.75..1/company.html](http://demo.slashdb.com/db/rdr/indicator/category_cd/P/grade/value/0.75..1/company.html)
*   All grades in Telecom - [http://demo.slashdb.com/db/rdr/industry/industry\_cd/TELCO/company/grade.html](http://demo.slashdb.com/db/rdr/industry/industry_cd/TELCO/company/grade.html)
*   As above, but pull in company and indicator details too - [http://demo.slashdb.com/db/rdr/industry/industry\_cd/TELCO/company/grade.json?depth=1](http://demo.slashdb.com/db/rdr/industry/industry_cd/TELCO/company/grade.json?depth=1)
*   All grades with company and indicator data inline - [http://demo.slashdb.com/db/rdr/grade.json?depth=1](http://demo.slashdb.com/db/rdr/grade.json?depth=1)

These are very resource oriented API endpoints, meaning they look like the raw resource they are generated from, but it demonstrates the value of using cloud services like SlashDB to do a lot of the heavy lifting for you when deploying an API. Getting an API up and running, so that you can start building web, mobile, data visualizations, and other tooling is an important first step--then you can also start iterating on, and begin the process of defining the next generation endpoints.

As you can see the SlashDB interface allows me to dill down using the URL, referencing the databases, relationships, and other resources that are exposed. What I like about SlashDB, is it lets you navigate the resources and relationships through the generated HTML pages, and then retrieve the XML or JSON you will need. 

Next steps for me, is I'd like to craft a simple Github Pages hosted landing page, and define a base set of meaningful API endpoints that would allow potential API consumers to quickly understand what is contained in the the [Ranking Digital Rights 2015 Corporate Accountability Index](https://rankingdigitalrights.org/), and hopefully incentivize someone building something cool on top of it.

Thanks to Victor Olex ([@agilevic](https://twitter.com/agilevic)) and [SlashDB](http://www.slashdb.com/) more doing this important work--you guys rock!!