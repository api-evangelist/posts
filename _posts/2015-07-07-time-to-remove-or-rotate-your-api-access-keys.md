---
layout: post
title: Time To Remove Or Rotate Your API Access Keys
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-key-circle.png
author:
  name: kinlane
tags:
  - Access
  - Keys
  - Time
---
I got an email from [Amazon Web Services](http://aws.amazon.com/) this morning, regarding a set of API keys I setup a while back, for a prototype I was building. The project was over a year ago, and the keys have not been evolved, and managed like I do with the rest of my regularly used AWS API keys. 

Here is the email I received:

_We noticed that your account contains root access keys that are more than 1 year old. As a security best practice, AWS recommends removing your root access keys entirely and using AWS Identity and Access Management (IAM) instead. At a minimum we recommend rotating access keys regularly or removing access keys if they are no longer in use._   
  
_To help you determine whether your access keys are safe to rotate or delete, AWS Identity and Access Management (IAM) now reports the time stamp when access keys for an IAM user or root account were last used, along with the region and the AWS service that was accessed. These details complement password last used data to provide a more thorough picture of when an IAM user or root account was last active._   
  
_To view your root access keys and when they were last used, go to the security credentials page in the AWS Management Console. After you have located the old keys, rotate or delete them by using these steps. Note that you can also view the access keys of an IAM user in the IAM console or see a snapshot of all the access keys in your AWS account by downloading an IAM credential report._  
  
_To learn more, read Best Practices for Managing AWS Access Keys in the AWS documentation._ 

I like the fact that they notify me about keys like this, and they provide me with links to resources where I can management my API keys, see when they were last used, and also provide access to best practices around key management.

I am in a unique spot, because I sign up for hundreds of API keys, to test out the services I talk about, so management of my API keys gets pretty unwieldy. This is something I'm working on as part of my [APIs.json work](http://apisjson.org), and something I'm hoping to share with others, as key management is both an API provider, and an API consumer problem. 

[Along with other suggestions like the automation of account, app, and key management by providing an API](http://apievangelist.com/2014/12/16/with-number-of-apis-continuing-to-grow-account-automation-will-be-key/), I will track on approaches like what AWS is doing, and try to [standardize as common building blocks](http://management.apievangelist.com/building-blocks.html), to help API providers (and consumers) better secure their platforms, through sensible API key management approaches.