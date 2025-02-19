---
layout: post
title: Using The Crunchbase API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/crunchbase-logo.png
author:
  name: kinlane
tags: []
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/crunchbase/crunchbase-logo.png)](http://developer.crunchbase.com/)

[Audrey](http://hackeducation.com/) came to me last night and said she had a project that she wanted to tackle, using the [CrunchBase API](http://developer.crunchbase.com/). She wanted to pull a list of education startups that were founded in 2010-2012, showing their investments, CEO, founders and other related company information.

A couple weeks ago, I helped Audrey download a PHP Twitter bot, reverse engineer and make it work for an objective she had around Tweeting random responses to a certain type of tweet. I figured she was ready to see what it took to hack on an API and get the research data she needed.

Audrey wanted to pull a list of startups that were educated related. We started with the /search endpoint, using the query keyword “education”. The query parameter appears to search the title, tags and overview of each Crunchbase entry, pulling way more than what we needed, 5700 in total. Each search returned 10 startups, with a handful of fields for each company, not nearly enough information.

To prove we could get what we needed, we took the first startup returned, grabbed the name and used it to perform a company /entity search, returning a wealth of information. We had what we were looking for including date founded, amount raised, CEO, founders as well as description, logos, addresses and other vital company information.

Back to the /search endpoint. Each search only returned 10 results, when there were actually 5,700. I looked at the documentation and the only parameter listed, was “query”. No way to control how many results returned, paginate or otherwise. So I start guessing, appending page=, and max=, maxrows=, anything to get more results. Eventually I was able to change the page, so I was able to write logic to loop through each page, getting at all the results required.

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/crunchbase/crunchbase-search-endpoint.png)

For each returned result from the /search endpoint, I would take the company name and perform a company search on the /entity endpoint. However each call to the endpoint would yield a 301, redirecting me to another URL. So the search for:

> _http://api.crunchbase.com/v/1/company/Noodle+Education.js?api\_key=\[key\]_

Get a 301 returned, with the following redirect URL:

> _http://ec2-107-21-104-179.compute-1.amazonaws.com/v/1/company/noodle-education.js_

So for each /entity endpoint I would have to make two separate cURL calls to get a single record for a company. An approach that is guarantee to get CrunchBase into the API billionaires club (as chatty APIs do), or at the very least generate a nice bill with their API management provider.

Next, I needed to create a table to store the data in, I looped through the JSON object and spit out a list of fields, so I could generate a SQL script to create the table. There were a few duplicate fields, but quickly got a table up and the data inserted. The data is decent. There are a lot of issues with absence of default values, empty objects with available images, addresses, etc. But nothing I’m not used to wading through, to get what I need from an API.

With the /search endpoint based upon a single keyword search, that spans title, overview and tags, the search returned a lot of companies that didn’t fit our search. As we prepared to enter each record into a database, we would apply further filters, making sure there companies founded in 2010 or greater, and met other criteria, before actually inserting.

Now we had a MySQL table filled with 772 education startups. I exported as CSV, uploaded as a Google Spreadsheet, and shared it with Audrey. Game over. She had what she needed. Overall it took about 3 hours start to finish, which she felt was tedious, and feeling there was a lack of clarity regarding the whole process--something she couldn’t have done with me and my API programming skills. This is a problem CrunchBase.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/crunchbase/startup-ecosystem-visualization.png)](http://developer.crunchbase.com/)

Audrey is your target audience. This needs to be dead simple. She shouldn’t have to blindly navigate the API endpoints, documentation, data structures and holes in the data. These are things I’m used to having to cobble together, but an analyst like herself, won’t have the time and patience.

I can tell the CrunchBase API was created by someone who didn’t give a shit about the data, let alone use the API to build anything. I saw a job posting from CrunchBase, so I know they are looking for someone to own the API. I hope this person can become a steward for this great set of data, and make it into a meaningful API--there is a lot of potential there.

Quick feedback for whoever takes the job, regarding some building blocks to focus on:

*   **Endpoints** - Establish more meaningful names for the existing endpoints, while establishing some new ones
*   **Documentation** - Get the documentation complete!! So what if you have I/O docs, if all the fields aren’t defined
*   **POST / PUT** - Al
low folks to add and update data either after they curate and add to it, or from their own databases*   **Blog** - Create a blog, that lets me know someone is home. Its so evident nobody is.
*   **Social** - Provide me with an active Twitter, LinkedIn and Google+ account to interact with you on and share what I’m doing with your data
*   **Branding** - I need some guidance with branding of CrunchBase data, when I publish in the wild
*   **Embeddable** - Holy shit, the opportunity with badges, buttons and widgets around CrunchBase data. This data is made for crunching and sharing in stories
*   **JS Library** - You need a plug and play dictionary, demographic JavaScript library that allows bloggers, analysts, etc to embed on pages and provide a library with a rich set of demographic references, funding links and other vital data people will cite in stories and reports around the web
*   **Spreadsheet** - From the I/O docs, provide export as CSV and to Google Spreadsheet. Build Google Spreadsheet templates that allow users to enter their key into cell and it will pre-populate a spreadsheet with the data they are looking for, with the analysis, visualizations and other tools analysts will need

CrunchBase is a goldmine of data. As it is, I can make use of the data and generate value. But the API won’t remain at the center of that, I will extract the value I need and not return much to the platform, because well...it sucks ass. I can’t write back, and I do so much work to get the value I do, I feel like its mine after I’m done. Especially if the platform has no person or personality that I consider an owner or steward.  I don't feel beholden to give anything back.  Just take...not good for your business.

You guys have a lot of potential within the [CrunchBase API](http://developer.crunchbase.com/io-docs), I hope you dedicate the resources to make it work, and find a steward for the API that will actually care about what you have, and interact with your API consumers in a meaningful way.