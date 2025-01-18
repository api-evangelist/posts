---
layout: post
title: Pulling a Federal Agencies Digital Strategy
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Agencies
  - Strategy
  - Digital
---
Back in May, when the White House CIO has released a strategy, entitled "[Digital Government: Building a 21st Century Platform to Better Serve the American People](http://www.whitehouse.gov/sites/default/files/omb/egov/digital-government/digital-government-strategy.pdf "Digital Government: Building a 21st Century Platform to Better Serve the American People")", which directs all federal agencies to publish HTML, JSON and XML versions of their digital strategy, I wrote a PHP script to monitor the progress. 

To date, 25 federal agencies have successfully published their digital strategy, and I have been updating my script regularly to keep up. And while a few of the agencies still have querks with their HTTP Codes and with JSON formatting, the code is starting to stabilize.  So I decided to start [sharing it on Github](https://github.com/kinlane/digital-strategy "Publishing to Github"), allowing others to put it to use.

The first sample script I'm publishing is a [basic example of how to pull the JSON version of a single agencies digital strategy](https://github.com/kinlane/digital-strategy/blob/master/pull-agency.php).  Once it pulls the JSON, it then loops through each item and field on the strategy, and renders to screen.  It doesn't make any assumptions on what you wish to do with data.

Next I will publish a more sophisticated version that stores values in a database.  Here is the pull federal agency digital strategy PHP script: