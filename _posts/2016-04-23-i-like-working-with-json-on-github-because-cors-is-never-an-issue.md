---
layout: post
title: I Like Working With JSON On Github Because CORS Is Never An Issue
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-cross-origin-resource-sharing-cors.png
tags:
  - Github
  - JSON
  - Git
---
I tend to only work in environments where I have full control over the server, so Cross-origin resource sharing (CORS) is never really an issue for any of the APIs I have control over, but is a pervasive problem for APIs, and JSON files I come across on the web. This is one of the reasons I really enjoy the fact that I publish all of my JSON driven, hacker storytelling projects using Github Pages and Jekyll.

In the last couple weeks I have been working on a bunch of micro tools that deliver specific functionality which can then be used throughout the API life cycle. All of these apps are developed using JavaScript, and depend on being able to read from any number of JSON file stores. Sometimes these files are stored within the project, but most likely I'm calling the remote JSON files of other projects, something that depends on the sharing of resources across domains.

If I am publishing a JSON file publicly on the open Internet, I want it to be accessible from anywhere. CORS has to be default. The speed, and agility at which I'm able to ingest and work with APIs.json files, and the OpenAPI Spec indexes they contain, sets me up for some serious nimbleness across my work.

If you are working with open data on the web, make sure and consider the CORS enablement by default when working with your JSON data on Github. It will make your life easier, as well as anyone else who will be looking to consume the valuable data you are putting out there.