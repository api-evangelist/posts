---
published: true
layout: post
title: COVID-19 Data and Information
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_covid_response_1.png
author:
  name: kinlane
tags:
  - Covid
---
When it comes to coping with the stressful world unfolding around us I like to lose myself in my work. Data and APIs is a great way to tune out the world and keep myself busy while in isolation. Like most other technosolutionists I want to do some good in this crazy time, even if I don’t quite fully know what that means. So, to help me define what that means I sat down and began scratching at what was already occuring across the landscape. Identifying what sources of data were available out there, and what types of information was available which would truly make a difference in everyones world--not make it worse.

**Informational API Collections**

To begin I wanted to better understand where the top sources of information were, so I began documenting who the most relevant government agencies were in the COVID-19 conversation, going directly to the source of information at the highest levels.

*   **Center for Disease Control (CDC)** ([Website](https://www.cdc.gov/)) ([Collection](https://documenter.postman.com/view/8854915/SzS7NkAL?version=latest)) - A simple collection for pulling information from the CDC.
*   **European Centre for Disease Prevention and Control (ECDC)** ([Website](https://www.ecdc.europa.eu/en)) ([Collection](https://documenter.postman.com/view/8854915/SzS7NkAQ?version=latest)) - A simple collection for pulling information from the ECDC.
*   **World Health Organization (WHO)** ([Website](https://www.who.int/)) ([Collection](https://documenter.postman.com/view/8854915/SzS7NkAS?version=latest)) - A simple collection for pulling information from the WHO.

This seemed to reflect the authoritative resources available to me, so I got to work defining how each of these agencies shares information, mapping out the top channels I could profile as a Postman collection, aggregating relevant information, and then allowing it to be pulled manually or in some automated way.

*   **Twitter** - Each agency uses Twitter as a way of providing updates.
*   **YouTube** - Each agency uses YouTube to publish video resources.
*   **RSS / Atom Feeds** - Each of the agency provides RSS feeds of info.

I created a Postman collection for each agency, all someone has to do is enter their Twitter and YouTube API authentication, and they are up and running pulling data from across each of the agencies. My goal is to help expedite the pulling, aggregation and publishing of information from these sources, while demonstrating how this type of information gathering across many APIs can be done using Postman. For now, I have only done CDC, ECDC, and WHO, but the model can easily be applied to any source of information, and I have a number of other government agenices I am working on currently.

**Tapping Twitter API Collections**

Once I saw that the Twitter API would be a valuable source of information, I wanted to work on some other collections that would help the pulling, aggregation, and publishing. So I got to work on a handful of collections that developers, and even non-developers could put to work to pull information, and help make sense of what is going on using the Twitter API. 

*   **COVID-19 Twitter Searches** ([Collection](https://documenter.postman.com/view/8854915/SzS7NkEt?version=latest)) - Some of the most common searches for uncovering COVID-19 related conversations.
*   **State Government Twitter Accounts**  ([Collection](https://documenter.postman.com/view/8854915/SzYT5MzV?version=latest)) - Official government Twitter accounts for each state in the US.
*   **Statte Governor Twitter Accounts** ([Collection](https://documenter.postman.com/view/8854915/SzYT5MzU?version=latest)) -The Twitter accounts for all the governors of the 50 US states.
*   **State Health Department Twitter Accounts** ([Collection](https://documenter.postman.com/view/8854915/SzYT5MzW?version=latest)) - The Twitter accounts for all of the state health departments.

After working on this more general, state centered Postman collections I began seeing the need to focus more on the local levels and understanding what is going on down on the ground in each county, resulting in two collections for the State of California.

*   **California County Health Department Twitter Accounts** ([Collection](https://documenter.postman.com/view/8854915/SzYT5Mv5?version=latest)) - A single collection for aggregating Tweets across all of Californias county health departments.
*   **Calfironia Television News Stations ([Collection](https://documenter.postman.com/view/8854915/SzYT5h6P?version=latest)**) A single collection for aggregating Tweets across all of the Calfiornia television stations.

These API collections are designed to reduce friction when getting up and running with pulling of data across many different Twitter accounts. All you need is to create your own Twitter application, get you some API keys, and you run each of the collections. I am looking. There is a lot of information available across those Twitter collections, making it easier to automate the processing of information being made available about the pandemic. I have things broken into such small collections beause it helps with the separation of concerns, but also helps spread out the API calls to the Twitter API, allow for the running of collections as Postman monitors across a balanced 24 hour schedule.

**COVID-19 API Collections**

After that I paused for a bit and then zoomed out a bit. I wanted to step back and see what else might be going on around COVID-19 data and API specifically. There was a handful of APIs emerging, coming out of primarily data from Johns Hopkins University, and other known and unknown data sources, producing a variety of approaches to making sense of the spread of COVID-19 and its impact on the ground. 

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_covid_response_2.png)](https://covid-19-apis.postman.com/)

*   **The COVID Tracking Project** ([Collection](https://documenter.postman.com/view/8854915/SzS8rjHv?version=latest)) - The COVID Tracking Project collects information from 50 US states, the District of Columbia, and 5 other US territories to provide the most comprehensive testing data we can collect for the novel coronavirus, SARS-CoV-2.
*   **Covid19API** ([Collection](https://documenter.postman.com/view/10808728/SzS8rjbc?version=latest)) - A free API for data on the Coronavirus Access data on COVID19 through an easy API for free.
*   **COVID19-Tracker-REST API -** ([Collection](https://documenter.postman.com/view/4074074/SzS7Pkup?version=latest)) - Provides global and country level statistics on the Coronavirus.
*   **NovelCOVID AP**I ([Collection](https://documenter.postman.com/view/8854915/SzS7R6uu?version=latest)) - API for Current cases and more stuff about COVID-19 or the Novel Coronavirus Strain.
*   **COVID-19 AP**I ([Collection](https://documenter.postman.com/view/8854915/SzS7R74j?version=latest)) - The COVID-19 API provides information related with the case of pneumonia associated with the COVID-19 coronavirus.
*   **Coronavirus Data API** ([Collection](https://documenter.postman.com/view/8854915/SzS7R74n?version=latest)) - Provides global stats, country stats, full timeline, and country timeline for the coronavirus.
*   **Health API - COVID-19** ([Collection](https://documenter.postman.com/view/8854915/SzS7R74s?version=latest)) - Global Coronavirus statistics by country and state.
*   **Coronavirus Smartable** ([Collection](https://documenter.postman.com/view/8854915/SzS7R74q?version=latest)) - The coronavirus stats and news API offers latest and historic COVID-19 stats and news information per country or state.

 Each of these APIs provide their own take on the COVID-19 pandemic. I have created a Postman collection for each of these APIs, and encouraged their owners to publish as well. Next, I’ll study the provenance of the data behind, and do a little diff on the schema behind each one. To help me better understand what is being offered by each API provider, in an effort to make sense of the benefits each bring to the table. 

**ScrAPI Collections**

Before I found [the COVID Tracking Project](https://covidtracking.com/) I was looking to establish my own source of state and county counts for the cases by pulling data from the state health department websites. To help me tackle the work I created a handful of what I am calling Postman ScrAPI collections, that help pull some data from a website, and publish as a mock or real API. Making for a handful of useful collections that can be adapted to target, scrape, process, and publish web data as an API.

*   **CDC Cases & Deaths** (Collection) - Scraping the COVID-19 cases and deaths from CDC home page, converting to JSON, and saving within an environment.
*   **CDC Testing** ([Collection](https://documenter.postman.com/view/8854915/SzS7R6gm?version=latest)) - Scraping the number of specimens tested for SARS CoV-2 by CDC labs and U.S. public health laboratories from the CDC website.

I find these little ScrAPI collections provide me with reusable requests that I can duplicate and customize to pull almost any single piece of data, lists, or tables from a website. Providing me with very useful set of utilities when it comes to gathering the data I need to publish a variety of APIs, acknowledging that not all of the data I need will be available via a straightforward data source.

**Data API Templates**

As I was working on mapping out the world of COVID-19 APIs I began seeing two specific approaches to producing valuable sets of data with accompanying APIs. I saw a significant amount of data spread across many domains in need of aggregation. I also saw a need for a light weight, easy to use, crowdsourced approach to aggregating data, refining, managing, and then redistributing it using APIs. So I got to work defining two distinct blueprints for data APIs that might be used to help reduce friction when it comes to more accurate data sharing across the COVID-19 pandemic.

*   **Google Sheets -** Provide a Postman collection that allows any data stored within a Google Sheet to be pulled and published as an API using Postman, GitHub, AWS, or other service.
*   **Web Scraping** \- Provide a postman collection that harvests data stored on any website, aggregates and publishes it as an API using Postman, GitHub, AWS, or other service.

I am trying to push myself to be more consistent in how I aggregate, define, refine, store, and syndicate data. I am also looking to share share these patterns with others so that they can do the same. I have thse blueprints established, but I do not have them properly narrated, and complete with instructions, so that someone else could pick up and put to work. I will be working on polishing them more as replicable collections that anyone can reverse engineer and apply to a specific data problem they have, hopefully helping folks be more collaborative and efficient at making COVID-19 related (and other) data available to the public.

**What Is Next?**

I am not 100% sure what is next. I am going to step back a bit and work on my regular work for a while, and let the ideas I’ve put forth simmer. Like any data project I have learned a lot along the way. I want to simmer for a bit on what I have learned. I think I have my process really honde for how I am deploying data APIs using Google Sheets, Postman, and GitHub. I’m just not convinced that I have the right ideas when it comes to what is needed when it comes to data sharing in support of the COVID-19 fight. I have jotted down some ideas about what I think I should tackle, but at this point I’m not 100% sure I have my finger on the pulse of what is needed—here is a short list.

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_covid_response_3.png)](https://covid-19-apis.postman.com/)

*   **Federal Agencies Twitter & RSS & Data** \- Create the same collections I have for WHO, CDC, and others for the leading federal agencies making an impact.
*   **State Health Departments -** Pull together a collection of the websites, Twitter accounts, and RSS feeds for the state health departments for all 50 states.
*   **County Health Departments -** Pull together a collection of the websites, Twitter accounts, and RSS feeds for the county health departments for all 50 states.
*   **Corporate Statements / Announcements -** Pull together a list of Fortune 500 companies, and where they announcement pages, feeds, and Twitter accounts are.
*   **K-12 / Higher Education School Statements / Announcements** \- Pull together a list of school distracts and their COVID-19 update pages and feeds.
*   **State Laws Being Passed** \- Pull lists of all laws being enacted by states in response to the COVID-19 pandemic, providing details on what is being done.
*   **Federal Laws Being Passed -** Pull lists of all laws being enacted by the federal government in response to the COVID-19 pandemic, providing details on what is being done.
*   **Food Banks -** Pull together lists of available food banks within local areas — this is most likely just a template that others can easily fork and put to work on their own.
*   Restaurant Open for Pickup - Pull together a list of local restaurants available for pickup — this is most likely just a template that others can easily fork and put to work on their own.
*   **Delivery APIs -** Pull together a list of the delivery APIs, or other service economy APIs that can help with services on the ground within communities.
*   **Zapier, IFTTT -** Brainstorm and develop lists of recipes and formulas that people can put together to help reduce friction in their lives, providing some useful API-driven solutions.

I am adding to this list almost daily, but being pretty picky about what I actually tackle. It is pretty easy to fall prey to building something that isn’t needed, but on the other hand if it keeps me busy and distracted, there still might be value in doing. Beyond the prices, templates, and the different types of data I still have other areas I need to think about before moving to fast on any project. I have concerns around the provenance and trust of data being published, my own included. I have concerns around data always being publicly accessible, so I’m thinking about how to easily secure this data and allow for easier management of private spreadsheets, and other data sources. As always there are a lot of questions to be asked before I dive head first into new data project, despite the urgency we are al feeling in any particular moment.

All of this work is being funded by Postman, as part of [their COVID-19 API Resource Center](https://covid-19-apis.postman.com/). Our CEO Abhinav Asthana ([@a85](https://twitter.com/a85?lang=en)), and my boss Nick Tran ([@tranmanyo](https://twitter.com/tranmanyo?lang=en)) have given me space to work on all of these collections, and my amazing design, front-end, and marketing teams are working daily to help shape the Postman response to COVID-19. Currently I'm working to crowdsource the Twitter accounts for all the county health depeartments across the US, which I am almost done with. Then I will publish 50 separate collections like the California County Healthy Department collection listed above. Beyond that, I'm not sure what is next. These collections are shaping how we are responding to the COVID-19 pandemic in real-time. Tuning into things via the Twitter API at the ground level is shaping what data we think is relevant to the conversation. Aggregating more information and data on testing locations, equipment and foot shortages, the availability of food banks and other resources seem like they are priorities. We'll just keep tuning in to what we are hearing, and engaging with other technology service providers and non-profits to understand what type of data projects are really needed. Then I will focus my efforts based upon this response. If you have any ideas for projects, or need help on a data API project for your non-profit, [feel free to reach out](https://covid-19-apis.postman.com/).