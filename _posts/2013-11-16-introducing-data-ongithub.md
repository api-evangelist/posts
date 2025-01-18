---
layout: post
title: Introducing Data Ongithub
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/github-matrix.jpg
author:
  name: kinlane
tags:
  - Data
---
[![](https://s3.amazonaws.com/kinlane-productions2/github/github-matrix.jpg)](http://data.ongithub.com)

I am a big fan of opening up data in city, county, state and federal government and across companies of all shapes and sizes. One thing I've learned in my 20+ years of working with data is that when it comes to data management, the spreadsheet is king. While there are always centralized database systems at companies and government organizations, the spreadsheet is actually how data is generally managed, shared and distributed by the average person.

[Data Ongithub](http://data.ongithub.com) is a project that is focused on tapping the wealth of data available in spreadsheet form and provide a simple platform for converting and managing open data, that anyone can use. While working on open data initiatives I consistently see two major hurdles for individuals who are opening up data:

> **How Do I Convert My Data To JSON?** JSON is the reigning open data format. It is a light-weight, portable, machine readable format and is the preferred format of programmers over CSV or XML. Even with this popularity there is no common way for individuals to easily convert common data formats like Excel, CSV or XML to JSON without being a programmer.

> **Where Do I Put My Converted JSON Data Files?** Once users are able to convert their data in JSON, they quickly struggle with where they should put these files to make publicly available. Even though website hosting is widely available and inexpensive, users have not associated open data with online website storage. Especially within government organizations, individuals struggle with easy storage of their open data files.

Data Ongithub looks to address both these concerns by delivering a lightweight application for conversion of Excel and CSV files to JSON formats, that is developed completely in client-side JavaScript, which means it can run anywhere in any browser. Since it is JavaScript, Data Ongithub lends itself to running completely on the social coding platform Github, which in this scenario acts as the backend storage for the application.

Data Ongithub can be forked and deployed to run under any Github account as a Github page. Every Github repository starts as a master branch, then once you add a Github Page, it adds a gh-pages branch to the repository. Data Ongithub uses the gh-pages branch as the user interface of the application and then employs the master branch as the backend JSON file storage.

Using [oAuth.io](http://oauth.io "oauth.io"), Data OnGithub enables completely client-side authentication using Github oAuth, and if a user is a member of the repository, they are allowed to not just upload and convert common open data file formats, but also save them as JSON files to the master repository. This approach creates a self-contained data conversion, management and storage platform that if you keep open source, is completely free to operate. Think of it as a "pod" for your open data.

![](https://s3.amazonaws.com/kinlane-productions2/data-on-github/pod-container.png)

If you have any comments, visit the [blog](/blog/), [roadmap](/roadmap.html), then submit your questions via the [Github Issue Management](https://github.com/ongithub/data/issues) for the project.