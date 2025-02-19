---
published: true
layout: post
title: Turning Environmental Data Into a More Usable API
image: >-
  https://kinlane-productions2.s3.amazonaws.com/turning-environmental-data-into-a-more-usable-api.png
tags:
  - Environment
  - Data
---
The work with our open data partners over at [Metadata Technology North America (MTNA)](https://www.mtna.us/) continues, moving from our last post on CMS healthcare data to working with a variety of environmental datasets. I have a couple of open data projects going on right now, and as we find ourselves with a new administration in the United States, as well as getting closer to Earth Day 2021, we figured it would be a good time to help make data that is available as downloadable files more searchable and usable via a more modern web API. I had given the MTNA team ten links to a mix of environmental data sets last week, and this week they came back to me with the next steps for deploying each one as a more accessible API, something we cover in the video of our regular open data discussions.

I had given MTNA a mixed bag of data and APIs, but I was really interested to see how they could help with three of the larger datasets, which were proving a little bit unwieldy when it came to publishing as a simple static API using Postman — here are the three I was most interested in:

*   [CO2 Time Series 1970-2018](https://edgar.jrc.ec.europa.eu/overview.php?v=50_GHG)
*   [Global Wildfires from 2013-2016](https://daac.ornl.gov/cgi-bin/dsviewer.pl?ds_id=1642)
*   [Citizens considering climate change as serious problem per country](https://www.pewresearch.org/global/dataset/spring-2018-survey-data/)

Next, they’ll be publishing each of these as an API using their Rich Data Services (RDS), and I’ll get to work publishing an OpenAPI and collection in a public workspace, or set of public workspaces. I like to keep datasets separated and then just share them to the workspaces I am needing to work with them. Once I get my hands on the APIs for these we will do another session on documenting them using Postman, publishing them to a public workspace so that others can fork, but then also put together an access plan for helping MTNA manage access to the data.

I am really enjoying these sessions with MTNA. They see data in an elevated way. I find their rigorous process for interrogating data as they inject it and make available via RDS very enlightening. Even with 30 years of database experience I find that I am learning a lot just watching them work. I am learning so much that I want to make sure we record all of our sessions, and publishing stories about what we are working on. Helping others learn from what we are doing, while also being able to access the data via a series of Postman public workspaces.