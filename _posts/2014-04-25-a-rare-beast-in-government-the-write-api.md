---
layout: post
title: A Rare Beast In Government, The Write API
image: >-
  https://s3.amazonaws.com/kinlane-productions2/federal-government/we-the-people/we_the_people.jpg
author:
  name: kinlane
tags:
  - Government
---
[![](https://s3.amazonaws.com/kinlane-productions2/federal-government/we-the-people/we_the_people.jpg)](https://petitions.whitehouse.gov/how-why/introduction)

The number of APIs in government has grown significantly in the last couple of years, increasing access to public data, potentially driving the private sector to build web and mobile apps around government resources data. Even with this growth in API deployment and resulting app development, this movement has been severely handicapped by one aspect—99% of these APis are read only, you cannot write data to government via APIs.

APIs being a two way street is one of those subtle, but very important aspects of API operations that can define whether an API initiative will be success or not. Since government is so risk averse, most entities are afraid of what can happen when they launch APIs, and completely terrified around what will happen with an API that people can write data to.

I’ve been [pushing for more read / write APis in government for some time now](http://apievangelist.com/2014/01/09/what-is-next-for-the-us-government-api-strategy-getting-technical/), and for the first time I'm seeing the potential for things to change, with a [new beta API project from the We The People API](https://github.com/WhiteHouse/write-api-beta-testing). I couldn't think of a better program to test a writable API for, than We The People—pushing the democratic powers of web APIs.

First, what is We The People?

_We the People is the White House's petitions platform -- giving people a new way to petition the government. The way it works is pretty simple: People can create or sign petitions on WhiteHouse.gov. If it gets enough support (i.e. signatures), it will receive an official response. And with more than 13 million users, it's been a big success._

Second, why an API?

An API opens up the petition platform to exist within any website, application and mobile applications. A read API allows for content to display on any site or app, and a write API allows for participation in the petition process via any site or app—changing the dynamics of the petition process, moving it off of just .gov websites, ultimately evolving how our government operates.

![](https://s3.amazonaws.com/kinlane-productions2/federal-government/we-the-people/we-the-people-write-api-beta.png)

**Testing The Waters With A Beta Phase**  
With any web software you need a beta phase, allowing trusted users to play with and debug an implementation, and this is what the team behind the We The People API are doing. They are using Github as a collaborative platform during the beta phase to test the write API, fix issues and squash bugs, and improve documentation ahead of the public release.

**Measuring And Throttling Write API Access**  
Counter to popular opinion, not all APIs are open and publicly available by default. We The People requires you to request access to the API, and limits the number of API requests available for each API key. This type of access is essential to establishing a trusted layer of users and applications, that will be writing data to the We The People platform, through the API.

**Collaborative Documentation**  
The We The People API provides complete documentation for the read and write API methods, allowing developers to learn about the interface and how to integrate into their applications. As part of the beta process they are looking for assistance from developers in improving and evolving the available documentation.

**A Central Role For Github**  
The We The People API team is relying on Github for managing code related to the platform, but also relying on it for managing collaborative changes to the API documentation, and using Github issue management to handle all feedback for the API beta cycles--making the deployment of this API a social process.

**Politics Of API Usage**  
Along with the other essential building blocks, the We The People API team provides a terms of service and privacy policy to help set the tone for what is expected of developers who are integrating their web and mobile applications with the API, providing a few of the [knobs and levers for managing the political aspects of a read / write API](http://apievangelist.com/2014/04/10/the-levers-dials-and-switches-for-your-participation-in-the-api-economy/).

**An API Blueprint For Government To Follow**  
I’m super excited about the [We The People Write API beta](https://github.com/WhiteHouse/write-api-beta-testing). There are no other write APIs in the federal government beyond the [IRS modernized e-file system](https://github.com/kinlane/irs-modernized-efile-blueprint)—there are some others that allow for minimal interactions, and open tooling at the city government level, but a simple write API at the White House level, is a big deal. To realize the full potential of an API in government, it has to have write capabilities, and despite what some believe, write capabilities should not be available to everyone—you should demonstrate that you will bring value to the platform.

The We The People API is a blueprint for how APIs can be done in government. The platform started with a basic read API, that focuses on doing one thing, and makes sure it does it well. Then once they have a handle on that, they have moved into allowing developers the ability to write to the API, during a very controlled beta phase.

I will be watching the We The People API process closely, and work hard to craft stories ,and help solidify it as a blueprint that other agencies can follow. The write API represents a significant shift in open data and API efforts in government. The overall government lifecycle is not a one way street, where government just dictates to citizens, so there is no reason government APIs should be a one way street—adding write capabilities to all government APIs is essential to getting to not just a healthy government API ecosystem, but also a healthy overall API economy.