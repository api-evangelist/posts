---
layout: post
title: Using Excel For Crowdsourced Data Gathering And Reporting
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/ramps-to-play-components-600.jpg
author:
  name: kinlane
tags:
  - Data
---
[![](https://s3.amazonaws.com/kinlane-productions2/npr/accessible-playgrounds/ramps-to-play-components-600.jpg)](http://apps.npr.org/playgrounds/#playground-help)

I was impressed with some of the data journalism behind the recent NPR story, [Playgrounds For Everyone, a community-edited guide to accessible playgrounds](http://apps.npr.org/playgrounds/#playground-help).

The story is definitely an important one, but it is the data behind it I think is significant to highlight. You can download the data of the 1700 playgrounds in 20 different cities in a CSV and JSON format. Something I think is ripe for an API, by the way.

Another interesting aspect is they are asking for submissions from the public, and they even provide a template Google spreadsheet, providing a framework for how the public should gather and organize data into a standard way, that NPR can import.

While I think this project could go further, I think it is an excellent example of using data journalism in public reporting. The only suggestions I have is making the project a Github repository so the story, JSON and CSV can be versioned, forked and downloaded much more easily.

I think Google Spreadsheets and Excel templates are a perfectly acceptable way to gather data from the public and 3rd party sources. It allows you to solicit data from others in a format that they understand, while still making sure it is structured enough to easily merge with a master database.

Additionaly, it would be pretty easy to add the ability for users to email their spreadsheets to a central email address, and programmatically convert to JSON, and CSV, then commit to the Github repository that contains the master JSON and CSV files. This way the repository administrator could accept or deny submissions as a pull request.

I'm enjoying seeing these scrappy spreadsheet, CSV and JSON solutions to data storytelling. Even if they aren't perfect I like seeing people play with different approaches, in hopes of finding an approach that works for them.

Lots to learn from. Nice work NPR.