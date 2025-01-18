---
layout: post
title: Maybe A Save As JSON Option For Excel Wasn&#039;t Forward Thinking Enough
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-spreadsheet-to-json.png
atomdate: 2016-08-19T00:00:00.000Z
tags:
  - JSON
---
In September of 2015, [I asked when are we going to get a save as JSON in our spreadsheets](http://apievangelist.com/2015/09/08/when-are-we-going-to-get-a-save-as-json-in-our-spreadsheets/)? I was doing a lot of work saving spreadsheets as CSV files, something I can easily do programmatically, but I was doing it manually as part of a workshop. After I downloaded each CSV file, I then [converted to a JSON file](http://kinlane.github.io/csv-converter/)\--leaving me asking, "where is the save as JSON"?

As I've been reviewing new [Microsoft's Excel API](https://dev.office.com/excel/rest), I got to thinking about the need for a save as JSON option, and now I think that this line of thought was not forward thinking enough. A "save as" just does not speak to the future of machine readable spreadsheet interactions in an online world. Save as CSV, TSV, are very desktop oriented visions of using Excel, and in 2016 we need more.

The [Microsoft's Excel API](https://dev.office.com/excel/rest) plus OAuth opens up an endless number of opportunities for working with data available in spreadsheets. Microsoft will have to open up the navigation in the online version of Microsoft Excel to the API developer community, allowing for users to subscribe to 3rd party API driven solutions like, save as JSON, open in Github as CSV, visualize with D3.js, and anything else that developers dream up via the Microsoft Excel API.

Maybe this is already possible in the Microsoft Excel online navigation, regardless, there will also be opportunities for extending these options via browser add-ons, as well as integration directly within 3rd party solutions, that use OAuth and the Microsoft Excel API to access valuable data that is locked up in spreadsheets. I enjoy that APIs are constantly pushing me to re-evaluate my legacy ways of thinking, and help me look more towards the future.