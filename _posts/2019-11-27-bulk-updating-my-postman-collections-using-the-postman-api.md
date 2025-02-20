---
published: true
layout: post
title: Bulk Updating My Postman Collections Using The Postman API
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/aws-s3-square-file-00-00-35-50-los-angeles-square.jpg
author:
  name: kinlane
tags:
  - Collections
---
I had recently pulled all of the AWS Postman collections I have created and spread across Postman workspaces. [After creating over 50 AWS Postman collections](https://github.com/api-evangelist/aws) I learned some things along the way, and realized I needed to update my variable for the baseURL of each API, but I had already created all my collections, and to update these variables manually would take me hours, if not days. So I got to work writing a script that would pull the latest JSON for each collection, conduct a find and replace on the [base_url] replacing it with a service specific base url that went something like this [aws_cloud_front_base_url], then write back using the Postman API. This is something that would take me many hours to update across 50+ collections and nearly 1000 individual requests, but is something that I could accomplish in less than an hour with the Postman API.

Once again, when I can’t get what I need to quickly in the Postman UI, I can quickly get things done using the Postman API. This is how it should be. I don’t expect that the Postman UI keep pace with all of my needs. I like Postman as it is, and carefully plodding forward adding features that make sense to as wide of an audience as possible. I always know that I can get at what I need through the API, and automate the changes I need. In this case, I’m able to rapidly make updates at scale across many different API collections, relying on Postman to help me manage API definitions manually through the interface and in many different automated ways via their API.

I am still getting my bearings when it comes to managing the variables I use across my many Postman collections. I am rapidly iterating upon how I name my variables for maximum flexibility within Postman environments, and where I apply them within my Postman collections. This is something that requires a lot of tweaking and changing of variables and how they are applied, which would not be possible through the Postman interface. This is fine. I don’t fully understand the nature of changes I am goin to have to make at every turn, and there is no way I can expect Postman to accommodate this type of development. Making the Postman an indispensable tool for helping me better define and execute my many different Postman collections.

APIs are designed to act as a pressure relief valve for the feature road map of the applications they power. We can’t expect every application to meet each of our needs, but we can expect every application to have an API. They are essential to how we put software to work, and represent the full potential of any digital resource or capability that we are putting to work as part of our operations. For me, the Postman API is what makes Postman such a powerful tool. I spend a significant portion of my in the Postman UI, but increasing it is the Postman collections, and the Postman API that are dominating most of my time. Allowing me to make bulk updates across my API infrastructure, increasing the power and flexibility of the APIs I am leveraging as part of my work.