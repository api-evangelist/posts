---
layout: post
title: Managing The Apps Across All My API Accounts
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-apps-api.png
atomdate: 2016-08-25T20:00:00.000Z
tags:
  - My
---
I am going through all of my online accounts changing passwords, and one of the things I do along the way is check which applications have access to my digital self. Increasingly my accounts have two dimensions of applications: 1) apps I have created to allow me to make API calls for my system(s) 2) apps I have given access to any account using OAuth. This is a process that can take quite a bit of time, something that is only going to grow in coming years. 

The quickest example of this in the wild is Twitter. I have [authorized 3rd party applications to access my account](https://twitter.com/settings/applications), and I have also [developed my own applications](https://apps.twitter.com/), which have various types of access to my profile--this is how I automate my Tweets, profiling of the space, etc. I'm regularly deleting apps from both of these dimensions, which I tend to add as I test new services, and build prototypes. 

I really wish the platforms I depend on would allow me to manage my internal and 3rd party applications via an API. If I could aggregate applications across all the accounts I depend on, manage the details of these applications (including keys & tokens), and add and remove them as I need--that would be awesome! If nothing else, maybe this will put the bug in your ear to consider this for your own world, and you can help put the pressure on existing API providers to open up oAuth and app management APIs for us to help automate our operations.