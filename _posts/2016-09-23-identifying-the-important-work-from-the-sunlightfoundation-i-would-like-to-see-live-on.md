---
layout: post
title: >-
  Identifying The Important Work From The @SunlightFoundation I Would Like To
  See Live On
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/sunlight_foundation.png
atomdate: 2016-09-23T20:00:00.000Z
tags: []
---
I am saddened to hear [the news of the Sunlight Foundation dimming the lights on their important work around government transparency](https://sunlightfoundation.com/blog/2016/09/20/statement-from-sunlight-foundations-board-chairman/). They have provided me a constant spotlight on government activity, and provide a model for me when it comes to opening up government data, and providing APIs that can make a difference. Having helped run non-profit organizations, working to make social change, I know this can be a very difficult thing to keep above water.

I have already reached out to the Sunlight foundation staff letting them know I'm here to help with any API related projects, and happy to fund their existence until I can find a suitable, caring adoption situations for them. First up, I wanted to make sure and [go through their APIs](https://sunlightfoundation.com/api/), and make sure there is a current [OpenAPI Specification](https://openapis.org/specification) snapshot for each one, in case they get shuttered:

*   **[Capital Words API](http://sunlightlabs.github.io/Capitol-Words/)** - The Capitol Words API is an API allowing access to the word frequency count data powering the Capitol Words project.
*   **[Congress API v3](https://sunlightlabs.github.io/congress/)** - A live JSON API for the people and work of Congress. Information on legislators, districts, committees, bills, votes, as well as real-time notice of hearings, 
*   floor activity and upcoming bills.
*   **[Open States API](http://sunlightlabs.github.io/openstates-api/)** - Information on the legislators and activities of all 50 state legislatures, Washington, D.C. and Puerto Rico.
*   **[Political Party Time API](http://sunlightlabs.github.io/partytime-docs/)** - Provides access to the underlying, raw data that the Sunlight Foundation creates based on fundraising invitations collected in Party Time. As we enter information on new invitations, the database updates automatically.
*   **[Real-Time Federal Campaign Finance API](http://sunlightlabs.github.io/realtime-docs/)** - A JSON and CSV API that delivers up-to-the-minute campaign finance information on federal candidates, committees, PACs and other groups that file electronically with the Federal Election Commission. Summary information for Senate candidate committees, which file on paper, is available as soon as they have been digitized by the FEC.

Next, I wanted to go through [their Github repositories](https://github.com/sunlightlabs) and identify any repos that contained data, server, and client code that is API related. In doing this I also found some interesting visualizations built on top of their work, that I think are worthy of showcasing and preserving:

*   [openstates](https://github.com/sunlightlabs/openstates) - source for Open States' scrapers
*   [foia-data](https://github.com/sunlightlabs/foia-data) - Tracking FOIA data across government agencies and departments
*   [billy](https://github.com/sunlightlabs/billy) - scraping, storing, and sharing legislative information
*   [census](https://github.com/sunlightlabs/census) - A Python wrapper for the US Census API
*   [congress](https://github.com/sunlightlabs/congress) - The Sunlight Foundation's Congress API
*   [hall-of-justice](https://github.com/sunlightlabs/hall-of-justice) - Working with criminal justice data
*   [openstates-boundaries-postgres](https://github.com/sunlightlabs/openstates-boundaries-postgres) - PostgreSQL Docker container setup for Open States' implementation of the Represent Boundaries API
*   [body-cam-bills](/admin/blog/tracked, visualized, and possibly some other things - https:/github.com/sunlightlabs/body-cam-bills) - Police body camera bills
*   [go-sunlight](https://github.com/sunlightlabs/go-sunlight) - Go bindings to the Sunlight APIs
*   [read\_FEC](https://github.com/sunlightlabs/read_FEC) - Turn raw electronic FEC filings into meaningful data
*   [python-sunlight](https://github.com/sunlightlabs/python-sunlight) - Unified Python bindings for Sunlight APIs
*   [fara](https://github.com/sunlightlabs/fara) - Foreign influence database
*   [openitup](https://github.com/sunlightlabs/openitup) - A repository for projects that scrape data from government agencies
*   [politwoops-data](https://github.com/sunlightlabs/politwoops-data) - Storage for data associated with politwoops
*   [Capitol-Words](https://github.com/sunlightlabs/Capitol-Words) - Scraping, parsing and indexing the daily Congressional Record to support phrase search over time, and by legislator and date
*   [emailcongress](https://github.com/sunlightlabs/emailcongress) - Lightweight Django web app and API to courier email messages to phantom-of-the-capitol using Postmark.
*   [fcc-net-neutrality-comments](https://github.com/sunlightlabs/fcc-net-neutrality-comments) - scraping, parsing and making sense of the flood of comments submitted to the FCC on net neutrality
*   [mapviz](https://github.com/sunlightlabs/mapviz) - Visualize data from states
*   [disbursements](https://github.com/sunlightlabs/disbursements) - Data and scripts relating to the publishing of the House expenditure reports, and hopefully the Senate's in future
*   [databuoy](https://github.com/sunlightlabs/databuoy) - A spreadsheet-backed data catalog
*   [politwoops-tweet-collector](https://github.com/sunlightlabs/politwoops-tweet-collector) - Python workers that collect tweets from the twitter streaming api and track
*   [regulations-scraper](https://github.com/sunlightlabs/regulations-scraper) - Scraper of public comments on regulations.gov
*   [ruby-sunlight](https://github.com/sunlightlabs/ruby-sunlight) - Ruby wrapper for the Sunlight Labs API
*   [mlscrape](https://github.com/sunlightlabs/mlscrape) - mlscrape is a library for site-specific automated website scraping based on human-annotated examples
*   [openstates-api](https://github.com/sunlightlabs/openstates-api) - Documentation for the Open States API
*   [datacommons](https://github.com/sunlightlabs/datacommons) - The core of sunlightlabs' Data Commons project. Includes the Transparency Data site and the APIs that power TransparencyData.com and InfluenceExplorer.com
*   [staffers](https://github.com/sunlightlabs/staffers) - Interactive and searchable House staffer directory, based on House disbursement data
*   [realtime-docs](https://github.com/sunlightlabs/realtime-docs) - API documentation for the realtime FEC project
*   [nodejs-sunlight](https://github.com/sunlightlabs/nodejs-sunlight) - Unified NodeJS bindings for Sunlight APIs.
*   [python-transparencydata](https://github.com/sunlightlabs/python-transparencydata) - Wrapper for TransparencyData.com API
*   [carnitas](https://github.com/sunlightlabs/carnitas) - Email based API key registration
*   [gun-data-explorer](https://github.com/sunlightlabs/gun-data-explorer) - visualization of federal- and state-level contributions from gun control and gun rights groups, with links to data.influenceexplorer.com
*   [navis-openstates](https://github.com/sunlightlabs/navis-openstates) - WordPress plugin to embed legislator and bill information from the OpenStates API.

I only went back to 2013 looking for projects in the Sunlight Foundation Github account, because I felt if it hasn't been updated or touched in that time, I probably won't have time to touch it myself. In addition to visualizations, going through their Github account showed me that there is also some interesting scraping work that should also be targeted for keeping alive, as well as open data, API, and visualization projects.

There is a lot of amazing work present in the Sunlight Foundation APIs and Github repositories. I am just as bummed as many of the comments on their blog, and via the Twittersphere express (some friendly, and some not so friendly), but having worked for the White House, and lived in the world of APIs for the last six years I know that nothing is permanent, and all good things will go away in time--usually due to budgetary and investment scenarios. None of it stops me from doing the hard work that needs to be done, and there is still a lot more to occur around the Sunlight Foundation.