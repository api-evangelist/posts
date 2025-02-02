---
layout: post
title: Interactive Feedback On The FDA Recall API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/fda-recall.jpg
author:
  name: kinlane
tags:
  - Feedback
---
[![](https://s3.amazonaws.com/kinlane-productions2/federal-government/fda/fda-recall.jpg)](http://fda-data.github.io/fda-recalls/)

I have a long list of little projects I'm working across government, and since I'm not being paid for some of this work now (except for the support of my amazing partners), the publicity and page views for this work is all I got! :-) So I'm publishing the stories around everything I do.

Up next: I was asked for some feedback on the FDA Recall API that is in pre-production currently, and I thought, what better way to offer feedback on API design than actually [sculpting a Swagger definition of the changes](http://api.fda.publicprivatesector.org/swagger/kinlane/recalls/recalls) and making it [usable via Github](http://fda-data.github.io/fda-recalls/).

Overall the FDA Recall API design was perfectly suitable for launch, even though the interface isn't perfect and some of the data is pretty messy, but I'm a big fan of just getting things out there, letting developers hack on it and gather feedback for the next iteration.

The existing FDA Recall API allows you to pull weekly recalls for 5 separate product types including Food, Drugs, Veterinarian, Devices and Biologics. Using the API you can pull each week listing of recalls as well as pull detail on individual recalls.

To get a handle on where they should take the interface I needed to hack on it like I was a developer, so I setup a proxy that runs on AWS EC2 and started coding against each endpoint, then adjusting a Swagger definition until I had something that was acceptable for a v.01.

You can find the result of this work over at the [FDA Recall API working project I stood up on Github](http://fda-data.github.io/fda-recalls/), it should work until they make any adjustments to the pre-production API. You can follow any work I do on [FDA open data and APIs at the main project site](http://fda-data.github.io/developer/index.html) I setup.