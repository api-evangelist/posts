---
layout: post
title: 'OpenAPI Spec Google Spreadsheet to Github Jekyll Hosted YAML '
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_19_at_12.02.32_am.png
atomdate: 2016-10-19T16:00:00.000Z
tags:
  - Github
  - OpenAPI
  - Jekyll
  - Spreadsheet
  - YAML
  - Open
  - Git
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_19_at_12.02.32_am.png)](https://api-evangelist-tools.github.io/openapi-spec-google-spreadsheet-to-jekyll-github-yaml/)

[I have been playing around with different ways of using Google Spreadsheet to drive YAML and JSON data to Jekyll data projects hosted as Github repositories](http://apievangelist.com/2016/09/20/d3js-visualizations-using-yaml-and-jekyll/). It is an approach [I started playing around with in Washington DC, while I was helping data stewards publish government services as JSON-LD](http://government.services.adopta.agency/). It is something I've been playing around with lately using to [drive D3.js visualizations](http://apievangelist.com/2016/09/20/d3js-visualizations-using-yaml-and-jekyll/) and even [a comic book](https://kinlane.github.io/teh-jigz-up/two/).

There are couple of things going on here. First, you are managing machine-readable data using Google Spreadsheets, and publishing this data as two separate machine readable formats: JSON and YAML. When these formats are combined with the data capabilities of a Jekyll website hosted on Github Pages, it opens up some pretty interesting possibilities for using data to fuel some pretty fun things. Plus...no backend needed.

To push this approach forward I wanted to apply to managing [OpenAPI Specs](https://github.com/OAI/OpenAPI-Specification) that can be used across the API life cycle. [I pulled together a spreadsheet template for managing the details I need for an OpenAPI Spec](https://docs.google.com/spreadsheets/d/1dDrCFm8C2jtAkTm4zw86YJeREyCs9Vq49dAQeLiTxtg/pubhtml). Then I created a Github repository, forked my previous spreadsheet to YAML project, and modified it to [pull data from a couple of worksheets in the Google Doc and publish as both JSON and YAML OpenAPI Spec](https://github.com/api-evangelist-tools/openapi-spec-google-spreadsheet-to-jekyll-github-yaml)s. 

[My OpenAPI Spec Google Sheet to YAML for use in a Jekyll project hosted on Github is just a prototype](https://api-evangelist-tools.github.io/openapi-spec-google-spreadsheet-to-jekyll-github-yaml/). The results don't always validate, and I'm playing with different ways to represent and manage the data in the Google Sheet. It is a fun start though! I am going to keep working on it, and probably start a similar project for managing an APIs.json index using Google Sheets. When done right it might provide another way that non-developers can participate in the API design process, and apply OpenAPI Specs to other stops along the API life cycle like with API documentation, SDK generation, or testing and monitoring.