---
layout: post
title: API Access To Your Account By Default But Requires Permission To See Others
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-access-cloud.png
atomdate: 2016-09-27T22:00:00.000Z
tags:
  - Access
---
[I wrote about SoundCloud beginning to require approval before developers get access to any API resources](http://apievangelist.com/2016/09/26/doing-away-with-selfservice-api-access-without-approval-like-soundcloud/) yesterday, a concept that I want to keep exploring. I'm going to be going through the APIs track on, looking for different variations of this, but before I did this I wanted to explore a couple of approaches I already had rattling around in my head.

What if, when you first sign up for API access you only get access to your own data, and content? You couldn't get access to any other users until you were approved. It seems like something that would incentivize developers to publish data and content, build their profiles out, which is good for the platform right? It will also protect other end-users from malicious activity by random developers who are just looking to wreak havoc in support of their own objectives and do not care about the platform--like we saw with Soundcloud.

A good example of how this could be applied is evident in [the post yesterday by Kris Shaffer on Medium, who was looking to get his content out of the platform](https://medium.com/@krisshaffer/getting-data-out-of-medium-8b8b318057c3#.t2x6wlrls). I use [the Medium API to syndicate blog posts to Medium](http://apievangelist.com/2016/09/22/syndicating-api-evangelist-posts-to-medium-using-their-api/) ([POSSEE](https://indieweb.org/POSSE)), but there is no read API allowing me to pull my content out--I agree with Kris, this is a problem. What if Medium opened up API access, allowing us platform users to get at our own content, but then required approval of any app before there ever is access to other users content?

Some food for thought. I hear a lot of platforms say they don't do APIs because they don't want to end up with the same problems as Twitter. I think this is the result of [some legacy views about public APIs that should just go away](http://apievangelist.com/2016/09/19/putting-the-concept-of-the-public-api-to-rest-as-a-dominant-narrative/). Not all APIs are created equal, and I feel that APIs shouldn't always be just about applications, and often times [are just a lifeline for platform users](http://apievangelist.com/2016/08/29/apis-are-not-just-meant-for-killer-apps-they-can-also-be-a-lifeline-for-users/), helping us end-users better manage their data and content. If my internal systems and other 3rd party systems are integrated together with APIs, the likelihood I will grow dependent on the integration only increases.