---
layout: post
title: When We Lose Trust In The Reporting Numbers Our Providers Feed Us
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-trust.png
atomdate: 2017-01-17T20:00:00.000Z
tags:
  - Providers
  - rust
---
What happens when we can't trust the numbers our service providers report to us? I personally do not stress over my analytics and traffic, views, and other numbers we are engineering our worlds to run by, but when you are paying for a service--I definitely have an opinion. [Facebook recently had a series of misreporting events around their metrics](http://www.socialmediatoday.com/social-networks/complete-list-facebooks-misreported-metrics-and-what-they-mean), leaving us questioning the numbers we are fed by our service providers on a regular basis.

There is no way that we can be 100% sure our service providers are telling us the truth--we have to trust them. However, there are ways that API providers can be more transparent when it comes to the data behind the numbers. It is easy enough to open up the log files, and other data that went into calculating the numbers when operating a platform. Many of the advertising and other service providers in questions have APIs to control the parts of the systems a platform desires you to perform--they just don't like pulling back the curtain, and showing what is truly going on.

If you do not fully trust your provider's numbers make sure and let them know publicly and privately that you would like access to the raw data behind. APIs can be designed to provide access to any data, as well as provide observability into the algorithms that driving any process. This is not a question of whether it's possible technically, it is a question of whether it is possible politically, and whether or not your service provider is willing to be transparent enough with you to develop the required trust needed for all of this to work properly.