---
published: true
layout: post
title: >-
  How Often Do You Receive API Responses Or API Definitions In Emails From
  People?
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/soldier-kneeling-26304845730-d4e495e25f-o-copper-circuit.jpg
author:
  name: kinlane
tags:
  - Sharing
  - Collaboration
  - Definitions
---
I regularly receive emails from random strangers, as well as known individuals who I am working with, that contain JSON responses from an API request, asking for some analysis, troubleshooting, or feedback on how an API works (or doesn’t). I even receive Microsoft Word or Google Docs with API responses pasted in them, attempting to articulate something how an API works, or to solicit some feedback from me. If I am going to share an API response with another user, I’m going to start with a Postman Collection, and secondarily share a link to a GitHub Gist, so the practice of emailing around is something I’m actively trying to nip in the bud with some storytelling and education.  
  
First, let’s start with the quickest, easiest, and most reusable approach to sharing API responses—sharing a Postman collection. This is the most informative and educational way to get the job done, allowing you to actually make the request you desire, save not just the response, but also the details of the request, and share with any other user. This is important, because anyone you are sharing your response with can actually re-run the request, maybe change some parameters or other values, hit save, and share not just the results, but also their changes back to the original user. Plus Postman allows you share in multiple ways, publishing documentation and a run in Postman button, via a simple link, or if the user is part of your team, you can share the collection into a workspace that the team member has access to. This is the most productive way to be sharing API responses. Do this please. Stop sharing responses via email.  
  
Next, if you are going to insist on using email, just send a link to your response. Ideally you are sharing the link to the Postman collection, but at the very least, publish the JSON response to a public or private GitHub Gist, or other platform, and only send the link to anyone you are looking to share the API response with. Pasting JSON responses in Word, or emails can tweak the formatting, and depending on the email platforms and clients you are using, the response can be transformed in transit, or when it is being displayed. Email just isn’t an optimal channel for sharing machine readable files, and you are better off emailing links to anything that is JSON, YAML, CSV, or other machine readable format. Keeping emails about text, or maybe some images and screenshots, relying on more definition friendly tooling for actually presenting and working with JSON responses.  
  
The more I work with enterprise users across different industries, the more emails I see sharing API responses and API definitions. I have even seen this from individuals who are using Postman to make API requests, and demo API functionality in sprint demos. They are just unaware of the sharing functionality built into Postman, and are operating Postman in isolation. Something that I’ve seen over and over at larger enterprise organizations—regularly reminding me that everyone is using Postman, and few are using to collaborate and work in concert. Relying on established tools like email to do what they do. Being extremely inefficient when it comes to daily operations, but also increasing the friction that exists around the delivery and integration of APIs. If you encounter team members who are emailing you API responses and definitions, make sure you don’t shame them, and take a few moments out of your day to help introduce them to more productive ways of engage with team members when it comes to the feedback loop that is essential for delivering reliable APIs at scale.