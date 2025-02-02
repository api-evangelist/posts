---
layout: post
title: >-
  Excel and CSV Conversion to JSON and XML in JavaScript That Runs 100% on
  Github
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/csv-converter-github.png
author:
  name: kinlane
tags:
  - Github
  - Conversion
  - CSV
  - JSON
  - XML
  - Git
---
[![](https://s3.amazonaws.com/kinlane-productions2/csv-converter-github.png)](http://kinlane.github.io/csv-converter/)

When it comes to building applications within the federal government, there are numerous road-blocks to innovation. I'm currently assisting with the inventorying of open data assets at the Department of Veterans Affairs, as well as across numerous other federal agencies.

The two biggest bottlenecks of this process are:

*   **File Conversion** - Converting Excel and CSV data assets into JSON and XML
*   **File Storage** - Where do you put data assets once you have available in CSV, JSON and XML

When I hit these road-blocks, it is my nature to find quick and dirty technical solutions (hacks) to get around these obstacles, and do it in a way that can be taught to others, allowing them to overcome these challenges in their own worlds.

The solution I've employed involved discovering and forking of a kick ass data conversion tool called [Mr. Data Converter](https://github.com/shancarter/Mr-Data-Converter), and quickly the tool retrofitted with some of my own enhancements:

*   [HTML5 File API](http://www.w3.org/TR/FileAPI/) - Allows me to acces file content without server side technology.
*   [oAuth.io](https://oauth.io/ "oAuth") - Dead simple, client side oAuth for Github and other platforms.
*   [Github.js](https://github.com/michael/github) - A JavaScript API wrapper for Github, enabling client-side interaction.

I quickly stripped down Mr. Data Converter to have only the features I desired, added a file upload capabilities that used the File API to access CSV files without a server side layer, then after authenticating with oAuth.io via Github, I used Github.js to post the original CSV and converted JSON or XML files directly to the same Github repo that the file conversion application runs in.

This approach allows me to run the Excel / CSV conversion app 100% on Github using Github Pages--an blueprint that allows anyone to fork and run within their own Github accounts. I'll spend more time hardening the code, and documenting it, to make it easier to use, and empower anyone to use in their own open data inventorying initiatives.

You can [see it in action live on Github Pages](http://kinlane.github.io/csv-converter/), and get at the [code behind in the Github repository](https://github.com/kinlane/csv-converter/tree/gh-pages).