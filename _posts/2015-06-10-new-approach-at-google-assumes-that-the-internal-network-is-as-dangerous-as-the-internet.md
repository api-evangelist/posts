---
layout: post
title: >-
  New Approach At Google Assumes That The Internal Network Is As Dangerous As
  The Internet
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-internet-desktop.png
author:
  name: kinlane
tags:
  - Network
  - Internal
---
I was recently reading about [Google moving its corporate applications to the Internet](http://blogs.wsj.com/cio/2015/05/11/google-moves-its-corporate-applications-to-the-internet/), and as my brain works, began applying this ine of thinking to the world APIs. I am big advocate for companies being more transparent, and acknowledging that more and more of our ever day business occurs on the open Internet, and we should start treating it like we are.

I think one statement in the Google paper says it well:

_The new model — called the BeyondCorp initiative — assumes that the internal network is as dangerous as the Internet._ 

As the Internet penetrates more of our personal and business lives, the concept of a private, localized, and secure network, is fading. Even if a system is only accessible via a local area network, if any node on that network has Internet access, and delivers resources to web, mobile, and increasingly devices via DNS--it is operating on the open Internet.

I am not saying that we need to put all our private information out on the open Internet, but I know too many organizations who feel pretty confident in their security through obscurity strategies, and that if things are kept hidden, and lightly secured, you are fine. Inversely they also claim that if you push directories of infrastructure out on the web, that you are just giving a map to the bad guys. This all just feels way out of balance to me.

Ultimately I feel like an API first approach for all digital resources is the way to go. Acknowledging that all of these resources will use the open Internet as a transport, and require all systems, web applications, mobile applications, and devices to use the same API--proving a single surface area that a company can secure. With it being publicly available, but secured properly using a sound identity and access management approach, companies can easily bring in external service providers to audit and help secure.

I am not selling this concept as a holy grail, but I wanted to point out that other large companies are thinking along the same lines, and I am looking to plant the seeds that maybe your current belief in the privacy and security of your internal networks isn't as solid as you think. We are seeing more security breaches in recent months, and I think in 2015 we need to start having a more honest conversations about how we operate our infrastructure.