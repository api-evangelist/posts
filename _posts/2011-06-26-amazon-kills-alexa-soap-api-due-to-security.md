---
layout: post
title: Amazon Kills Alexa SOAP API Due To Security
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Security
  - SOAP
  - SOA
  - Amazon
---
[![](http://kinlane-productions2.s3.amazonaws.com/amazon/alexa-logo.gif)](http://aws.amazon.com/awis/)Amazon recently sent an email to all developers notifying them of upcoming changes to the [Alexa Top Sites API](http://docs.amazonwebservices.com/AlexaTopSites/latest/ "Alexa Top Sites API").

On November 25, 2011 Amazon will deprecate the Alexa Top Sites SOAP API. The SOAP interface has had repeated security issues over the last couple of years, and since only a small percentage of users actually use the API, they decided to decommission it.

Alexa will also be enforcing that all requests to the API must be signed using [signature version 2](http://docs.amazonwebservices.com/AlexaTopSites/latest/CalculatingSignatures.html "signature version 2"). Version 2 is significantly more secure that the version, and all [Amazon Web Services](http://aws.amazon.com/ "Amazon Web Services") are being required to migrate to it.

I wonder if Amazon is having similar security issues with other SOAP APIs? Maybe the other SOAP APIs just have more users and it was worthwhile for them to fix.

Makes you wonder how many SOAP users vs. REST users Amazon Web Services has.