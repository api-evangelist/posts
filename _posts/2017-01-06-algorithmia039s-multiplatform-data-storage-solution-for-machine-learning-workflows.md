---
published: true
layout: post
title: >-
  Algorithmia&#039;s Multi-Platform Data Storage Solution For Machine Learning
  Workflows
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_01_06_at_11.14.26_am.png
author:
  name: kinlane
tags:
  - Storage
  - Machine Learning
  - Data
  - Platform
  - Workflows
  - Learning
---
I've been working with [Algorithmia](http://algorithmia.io) to manage a large number of images as part of [my algorithmic rotoscope side project](http://image.rotoscope.work/), and they have a really nice omni-platform approach to allowing me to manage my images and other files I am using in my machine learning workflows. Images, files, and the input and output of heavy object is an essential part of almost any machine learning task, and Algorithmia makes easy to do across the storage platforms we use the most (hopefully). 

Algorithmia provides you with local data storage--pretty standard stuff, but they also allow you to connect your Amazon S3 account, or your Dropbox account, and connect to specific folders, buckets, while helping you handle all of your permissions. Maybe I have my blinders on with this because I heavily use Amazon S3 as me default online storage, and Dropbox is my secondary store, but I think the concept still is worth sharing..

![](https://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_01_06_at_11.14.26_am.png)

This allows me to seamlessly manage the objects, documents, files, and other images I store across my operation as part of my machine learning workflow.  Algorithmia even provides you with an intuitive way of referencing files, by allowing each Data URI to uniquely identifies files and directories, with each composed of a protocol and a path, with each service having its own unique protocol:

*   **data://** Algorithmia hosted data
*   **dropbox://** Dropbox default connected accounts
*   **S3://** Amazon S3 default connected account

This approach dramatically simplifies my operations when working with files, and allows me to leverage the API driven storage services I am already putting to work, while also taking advantage of [the growing number of algorithms available to me in Algorithmia's catalog](https://algorithmia.com/algorithms). In my algorithmic rotoscope project I am breaking videos into individual images, producing 60 images per second of video, and uploading to Amazon S3. Once images are uploaded, I can then run Algorithmia's Deep Filter algorithm against all images, sometimes thousands of images, using their text models, or any of the 25+ I've trained myself. 

This approach is not limited to just video and images, this is generic to any sort of API driven machine learning orchestration. Just swap out video and images, with mapping, content, or other resource, and then find the relevant machine learning workflow you need to apply, and get to work. While I am having fun playing with my drone videos and texture filters, the approach can be just as easily applied to streamline any sort of marchine learning workflow.

One additional benefit of storing data this way is I've found Dropbox to be a really amazing layer for including humans in the workflow. I leverage Amazon S3 for my wholesale, compute grade storage, but Dropbox is where I publish images, videos, and documents that I need to put in front of humans, or include them in the machine learning workflow. I find this gives them a role in the process, in a way that gives them control over the data, images, videos, and other objects, on a platform they are already comfortable with. I'd encourage Algorithmia, and other providers to also consider including Google Drive as part of this--it would go a long way logically connected with the human portion of the wokflows.

Anyways, I thought Algorithmia's approach to storage was interesting, worth highlight, and something that other providers might consider implementing themselves.