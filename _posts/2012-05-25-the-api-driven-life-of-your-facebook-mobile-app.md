---
layout: post
title: The API Driven Life of Your Facebook Mobile App
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/iPhone-Desktop.png
author:
  name: kinlane
tags:
  - Mobile
  - Facebook
---
One of the best ways to explain what APIs are to someone sitting next to me on the plane is to find something the user does every day, that is driven by an API, and explain how an API drives the functionality they take for granted.

I tend to look for industry specific examples if they are an accountant or stock broker, but the most common example I use, is Facebook. Facebook is technology everyone I meet has exposure with.

My story always starts with Facebook.com, and how the social networking website was built for people. People go to www.facebook.com and they see HTML web pages, that allow them to interact with the community.

Next I move to the Facebook application on their mobile phone. While the application is built for people to use, the application needs a way to talk with Facebook--in comes APIs. APIs are a way for other programs to interact with Facebook, providing a interface for developers to build applications that use Facebook.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist/iPhone-Facebook-Login.png)

When you first login to Facebook on your mobile phone, the applications makes a request to the Facebook Authentication API, and gives your mobile application rights to interact with your Facebook account on your behalf.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist/iPHone-Facebook-Auth.png)

After your logged into the Facebook application on your mobile app, every action you take will make an API call. When you click on your news feed, update your status, look at photos or check-in to a place, they each represent a different call to the [Facebook Open Graph API](https://developers.facebook.com/docs/reference/api/ "Facebook Open Graph API"). The Open Graph API exposes almost every aspect of Facebook as a programmatic interface that applications can use, hence the name Application Programming Interface (API).

Most online technologies that you use everyday have APIs. Amazon, EBay, Facebook, Twitter and Google all have APIs, allowing developers to build applications on top of their businesses, turning their websites into web services.

With the grwoth of the smart phone and tablet markets, the number of, and usage of APIs are exploding, silently driving the mobile applications like Facebook that are part of your everyday lives.