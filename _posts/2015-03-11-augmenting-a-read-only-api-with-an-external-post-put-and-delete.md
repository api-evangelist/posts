---
layout: post
title: Augmenting A Read Only API With AN External POST, PUT, And DELETE
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/augmented-post.png
author:
  name: kinlane
tags:
  - PUT
  - POST
---
I am revisiting some work that I started when I was working in Washington DC as a Presidential Innovation Fellow(PIF). Actually there are several things going on here, a sort of perfect storm of API design thoughts. After reviewing hundreds of APIs, including APIs in the federal government, you start to want to either go mad, or start making changes to the API designs you are exposed to.

This leads me to the other layer to this story, a common question I get regularly, regarding [whether or not there are any write APIs in the federal government](http://apievangelist.com/2015/03/02/using-machine-readable-api-definitions-to-solve-a-persistent-question-are-there-any-write-apis-in-federal-government/)—meaning, can you POST, or PUT to a common government resources. [Write APIs are important in government](http://apievangelist.com/2014/04/25/a-rare-beast-in-government-the-write-api/), and their scarcity reflect some of the systemic illnesses I feel exists in government IT. With that in mind, bundled with the regular process of reviewing an API implementation out of government—you get this late night API Evangelist story. Enjoy. ;-)

I was profiling the [data.usajobs.gov jobs API](https://data.usajobs.gov/Rest), which included crafting a machine readable Swagger API definition:

After crafting this machine readable definition of the surface area of data.usajobs.gov, I am once again reminded of the lack of write APIs in government--as the data.usajobs.gov API is GET only, which only provides a single search endpoint. Don’t get me wrong. I am thankful for the work they’ve done with the data.usajobs.gov jobs API, it is just my nature to study, then push and iterate on API designs anywhere I possibly can. Sorry, I have an addiction. ;-(

As I was profiling data.usajobs.gov, [I remembered of the work I did as a PIF in DC, and how after the government shutdown, I wanted to see more APIs, have an augmented layer to their operations](http://apievangelist.com/2013/09/25/github-can-be-the-post-and-put-layer-for-federal-government-apis/)—eliminating the ability to turn off the switch for government APIs. Meaning I would like read only APIs like data.usajobs.gov to have one or many other APIs that sync, and augment API functionality, beyond what the original government agency intended. It may sound radical, but I think it is how we are going to get this stuff done.

To help understand what I’m talking about, I generated a basic evolution of the data.usajobs.gov jobs API design, allowing for potential POST, PUT, and DELETE capabilities, opening up the federal jobs API for community input:

Of course, this API isn’t a real API--It is just a Swagger representation of one possible API that could exist to augment the read only API provided by data.usajobs.gov. My goal is to just think through how we might be able to help iterate on existing API resources being provided by government agencies. Allowing for extending, building upon, and potentially crowdsourced assistance in the management public data. I’m not saying this should be a fully open API, available to anyone, but the idea of a well managed, or possibly multiple well managed resources for the same public data is an interesting thought.

This approach would allow for the evolution of public data, beyond what the government can do on its own. External entities could build upon government data, like the jobs data from data.usajobs.gov, and then data.usajobs.gov could decide if any 3rd party resources becomes worthy of paying attention to. I’m thinking about applying this type of model in other areas of government I am working through like with the [FAFSA API](http://apievangelist.com/2013/11/15/free-application-for-federal-student-aid-fafsa-api/), and some of the API efforts I’m seeing out of Department of Interior and Department of Energy.

In the end this post is primarily about the [potential in augmenting existing read only APIs, with an external POST, PUT, and DELETE](http://apievangelist.com/2013/03/17/beyondget-or-otherverbs-an-augmented-api-platform-/). I’m not saying the data.usajobs.gov jobs API needs this, it just happen to be the API I was profiling when this story came up, and it seemed as good of an API as any to leverage as part of this story.

Not much else will happen for me on this topic. I am not going to develop this API. [I just wanted to add the data.usajobs.gov job API to my federal API stack,](http://federal-government.apievangelist.com/) and along the way I got sidetracked with adding the POST, PUT, and DELETE layer of this story--damn ADD! ;-)

I’m going to find a couple of other federal government data sources to possibly push this idea forward, and eventually I’d like to see a single API, developed on top of a government resources, surpass its original source in quality, and value, resulting in the original agency accepting the data back into their interanal systems. When it comes to data stewardship, open data, and APIs in government it is all about trust—without trust, any external, outside-in effort around open data and APis in the federal government, will be rejected.