---
published: true
layout: post
title: Looking For APIs By Industry
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/long-factory-copper-circuit.jpg
author:
  name: kinlane
tags:
  - Industries
---
I am working to expand the vocabulary I use to search for new APIs. I already have a pretty extensive set of keywords and phrases I have from mining the world of APIs over the last nine years, but I wanted to get more formal about how I find new and interesting APIs across as many industries as I possibly can. To help me in my effort I adopted [the North American Industry Classification System (NAICS)](https://en.wikipedia.org/wiki/North_American_Industry_Classification_System) as the official vocabulary I use for searching and organizing the businesses, organizations, tooling, APIs, and datasets I'm profiling as part of my research. Helping me standardize how I uncover new APIs, keeping my vocabulary in alignment with government agencies like Censuse and Labor, but also industry organizations, and the companies that operate within each business sector.

After settling in on NAICS, I found the NAICS API and created a Postman Collection for it. The open source API implementation doesn't have the most recent 2017 update, and the response schema didn't really work for what I was looking to build. So I got to work on creating [my own version of NAISC from the 2017 index](https://gist.github.com/kinlane/adaf75265e8f45a4e6dccbc73153f26c), shaping the structure of the JSON response to better meet my needs. Resulting in a single JSON file that represents the entire NAICS index, but also reflecting each tier of the specification.

Now that I have the JSON in a more usable format I am using it as part of my automated API search engine, but I also wanted to develop ways to visualize and manually engage with any layer of the NAISC scaffolding while searching for new APIs on the web and GitHub. To help me see the scope of the vocabulary I was implementing I published it as a series of HTML lists, allowing me to quickly search for different APIs using [the Bing Cognitive Search API](https://azure.microsoft.com/en-us/services/cognitive-services/bing-web-search-api/), or via the public Bing search page. Producing an interesting list of industries which one click queries that generally surface interesting APIs.

\[industries\]

It is a big list. Damn. Anyways, it is the definition of the landscape I was looking for. I'm going to keep extending it with some of my own vocabulary. I just wanted to try and create a screen for manually applying the vocabulary, and help quantify the scope of the automated search I was doing. I'll take every industry and look for OpenAPI, Swagger, and Postman Collecitons on GitHub and via Bing. I'm going to also work on dimensions of it service of specifically looking for data schema, standards, and data sets--however, this one will only use the top three layers of vocabulary, and not going as deep as this one did.

I will run the automated search for a few days and see how many API definitions it hoovers up. Even if it doesn't find any API definitions, it will still catalog the domains it finds as part of each search, adding them to my queue of potential APIs to manually look at. I'm always amazed at what comes up in searches for key phrases I would never have thought about without standards like NAICS existing out there. I'll keep monitoring this dimension for APIs and track on changes over time. In addition to finding interesting APIs I'm guessing I'm going to learn a lot of other lessons, identify varioius trends and opportunities that exist in the cracks. I'm hoping NAICS helps me increase the scope of my API search vocabulary and shine a light in all the cracks and crevices of every business sector where APIs are making an impact, helping me shine a light on what is going, or maybe just on what isn't going on.