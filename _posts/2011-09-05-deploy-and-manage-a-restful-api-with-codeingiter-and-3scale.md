---
layout: post
title: Deploy and Manage a RESTful API with CodeIngiter and 3Scale
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/3scale-500.png
author:
  name: kinlane
tags:
  - 3Scale
  - Scale
  - REST
  - Code
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-service-providers/3scale-logo.jpg)](http://www.3scale.net/)At Mimeo, my API developers were running into problems integrating with our cloud print API, I needed a fast way to virtualize and deploy an API built on top of my existing REST API.  A quick and dirty way I could research and develop new APIs, launch, measure and manage without getting IT involved.    
  
So I [virtualized four document APIs](http://apievangelist.com/2011/09/05/virtualized-document-printing-apis/ "virtualized four document APIs") using the [CodeIgniter open-source PHP web framework](http://codeigniter.com/ "CodeIgniter"), [Amazon EC2](http://apievangelist.com/apis/amazon_ec2.php "Amazon EC2"), [3Scale self-service API management service](http://www.3scale.net "3Scale API Management Service") and [Mimeo Connect Cloud Print API](http://developer.mimeo.com "Mimeo Connect Cloud Print API").  
  
First I launched a copy of the CodeIgniter framework on my existing Amazon EC2 instance, configured mod\_rewrite to handle my URLs, and wrote seven API methods dedicated to printing just one type of document, like a poster.  I now had a simple RESTful API that handled requests, and returned XML and JSON responses.  
  
[![](http://kinlane-productions2.s3.amazonaws.com/api-tools/codeigniter-logo.jpg)](http://codeigniter.com/)I need a quick way to manage access to my API and measure its usage.  So I would know who was using it, how they were using it, and if it was worth while to keep the API and put more resources into it.  I selected [3Scale API management](http://apievangelist.com/serviceproviders/3scale.php "3Scale API Management"), one of two free, self-service API mangement platforms out there.  The other is [Mashape](http://apievangelist.com/serviceproviders/mashape.php "Mashape"), but they are still in BETA, so 3Scale was the only other solution I could deploy for free, and scale as I needed when things were successful.  
  
I deployed the 3Scale PHP connector on my Amazon EC2 instance as part of the CodeIgniter REST framework.  I then launched my 3Scale self-service API area, which provides me with:

*   Self-Service Developer Registration / Login / Key Management
*   Documentation
*   Forum & Support
*   API Metering / Billing 
*   Analytics and API Usage Reporting

I now had a simple RESTful API, that had self-service documentation, app key registration, forum, and support.  I received emails when new developers registered, could track how much they used, and turn off access when needed.  
  
I was open for business, using the CodeIgniter tools as a RESTful framework and 3Scale as API management solution I was able to deploy and manage my APIs on an existing Amazon EC2 instance for free, with minimal work, and the platform will scale as my APIs get more usage.