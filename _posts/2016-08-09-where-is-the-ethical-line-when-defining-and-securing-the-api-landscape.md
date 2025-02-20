---
layout: post
title: Where Is The Ethical Line When Defining And Securing The API Landscape?
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-safety.png
atomdate: 2016-08-09T23:30:00.000Z
tags:
  - Landscape
---
I was reading [a post from the Electronic Frontier Foundation asking some great questions about having a safety protocol for things like the DARPA's Cyber Grand Challenge](https://www.eff.org/deeplinks/2016/08/darpa-cgc-safety-protocol). It is good to see EFF leading this conversation, providing us with some important things to consider as part of any security related work, whether it's in the cyber theater or just guiding your ethics as a small business, analyst or freelance hacker (I happen to be all three). 

To hopefully contribute somewhat to the conversation, I wanted to think through some of the questions I ask when defining and helping folks secure their slice of the API landscape. There are two distinct portions of the conversation I wanted to chime in on, speaking to the areas that I find the most friction with when mapping out, and securing infrastructure.

**The Dangers Of Being An API Cartographer In The Shadows Behind Mobile And Internet of Things**  
Only a small fraction of web APIs available today are intentionally open to the public. The majority of web APIs out there are developed to support web, mobile, or device-based apps, delivering resources on the open Internet, but not meant to be viewed, accessed, and documented by 3rd parties.

API developers and architects heavily focused on the end deliverable, the web, mobile, system, or device integration, they do not consider the API to be open to the public--thus perceived as a private API, even though it uses public infrastructure. Many people frown on even mapping out this shadow API world, let along making and API definition or documentation publicly available. 

If I can publicly get access to a website, application, or device, I can map out the APIs, simply by routing traffic on my computer through a proxy. Before we can ensure this portion of our public infrastructure is secure, we must map it out, and we must change popular opinion to view this infrastructure as public, and begin securing it like it is, sharing maps of the infrastructure, and having an "open" conversation about it--not creating friction for those who do.

**A Fine Line Between Scanning For API Vulnerabilities And Executing a DDoS Attack On A Domain**  
Once I have a map of the landscape,  I can begin looking for vulnerabilities. Establishing the map ([API definition](http://definitions.apievangelist.com/)) is a grey zone for me, but actually scanning that map looking for even the most common of vulnerabilities is black, and a no-go zone for me. Before I can scan any domain used as part of API infrastructure, I will need the approval of the domain owner. Even a low-level security scan for the most common vulnerabilities will come across as a potential DDoS attack--requiring deeper considerations before doing it.

Much like the EFF sis looking to encourage a conversation around a safety protocol for cyber challenge related activity, I'd like to encourage a conversation about mapping and scanning of publicly available API infrastructure. I'd like to discuss the importance of having public maps be available, much like we do with physical infrastructure, both public and private. Then I'd like to also talk about how we can collectively ensure this infrastructure is secured properly, and have a sensible conversation about this, on a regular basis. 

I am not suggesting anything wild here. I do not get in trouble for driving by our local hospital, my child's school, or the local water plant. I shouldn't get in trouble for reporting a hole in the fence, or suspicious activity that I see when I drive or walk by either. I should also be able to be reassured that the hospital, school, and local water utility have a solid security plan, and have my best interest in mind when it comes to my healthcare data, student information, and water usage and billing information. Why is the virtual space so different?

I am just putting this out there, as I do. I walk this ethical line on a daily basis as I monitor the API space, and wanted to make my stance known.  I am going to keep mapping out the known API universe, I feel comfortable pushing the boundaries of this grey zone. I will also be scanning, and helping secure API infrastructure using my [API security service Sapience](https://sapience.io/), but of course only when a customer asks me to. ;-)