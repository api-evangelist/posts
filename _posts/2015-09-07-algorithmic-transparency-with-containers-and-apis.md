---
layout: post
title: Algorithmic Transparency With Containers and APIs
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-algorithmic-pricing.png
author:
  name: kinlane
tags:
  - Containers
  - Transparency
  - APIs
  - ai
---
I believe in the ability of APIs to pull back the curtain of the great OZ, that we call IT. The average business and individual technology consumer has long been asked to just believe in the magic behind the tech we use, putting the control into the hands of those who are in the know. This is something that has begun to thaw, with the introduction of the Internet, and the usage of web APIs to drive applications of all shapes and sizes. 

It isn't just that we are poking little holes into the corporate and government firewall, to drive the next generation of applications, it is also that a handful of API pioneers like Amazon, Flickr, Twitter, Twilio, and others saw the potential of making these exposed resources available to any developers. The pulling back of the curtain was done via these two acts, exposing resources using the Internet, but also inviting in 3rd parties to learn about, and tap into these resources.

Something that is present in this evolution of software development, is trust. API providers have to have a certain amount of trust that developers will respect their terms of service, and API consumers have to have a certain amount of trust that they can depend on API providers. To achieve this, there needs to be a healthy dose of transparency present, so API providers can see into what consumers are doing with their resources, and API consumers have to be able to see into the operations, and roadmap for the platform.

When transparency and trust does not exist, this is when the impact of APIs begin to break down and they become simply another tech tool. If a platform is up to no good, has ill intentions, selling vapor ware, or there is corruption behind the scenes, the API concept is just going to create problems, for both provider and consumer. How much is exposed via an API interface is up to the API designer, architect, and ultimatley the governing organization. 

![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-shipping-container.png)

There are many varying motivations behind why companies open up APIs, and the reasons they make them public or not. APIs allow companies to keep control over their data, content, and algorithmic resources, while also opening them up so "innovation" can occur, or simply be accessible by 3rd party resources to bypass the historical friction or bottleneck that is IT and developer groups. Some companies I work with are aware of this balance being struck, while many others are not aware at all, they simple are trying to make innovation happen, or provide access to resources.

[As I spend some brain cycles pondering algorithmic transparency, and the recent concept of "surge pricing" used by technology providers like Uber and Gogo](http://kinlane.com/blog/), I am looking to understand how APIs can help pull back the curtain that is in front of many algorithms impacting our lives. in the same way APIs have pulled back the curtains on traditional IT operations, and software development. As part of this thought exercise I'm thinking about the role Docker and other virtualized contaniners can play in providing us with more transparency in how algorithms are making decisions around us.

When I deploy one of my APIs using my microservices model, it has two distinct API layers, one for the container, and one for what runs inside of it. Docker comes ready to go with an API for all aspects of it operations--[here is an Swagger definition of it](http://apievangelist.com/2015/03/17/more-pondering-on-my-own-microservice-definition/). What if all algorithms came with an API by default, just like each Docker container does? We would put algorithms into containers, it would have an interface for every aspect of its operation. The API wouldn't expose the actual inner workings of the algorithm, and its calculations, but provide a complete interface for all its functionality.

![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-algorithm-flow.png)

How much of this API a company wished to expose, would vary just like with APIs, but companies who cared about the trust balance between them, their developers, and end-users, could offer a certain amount of transparency to build trust. The API wouldn't give away the proprietary algorithm, but would give 3rd party groups a way to test assumptions, and verify the promises made around what an alogorithm delivers, thus pulling back the curtain. With no API, we have to trust Uber, GoGo and other providers about what goes into their surge pricing. With an API, 3rd party regulators, and potentially any individual could run tests, validating what is being presented as algorithmic truth. 

I know many companies, entrepreneurs, and IT folks will dismiss this as bullshit. I'm used to that. Most of them don't follow my beliefs around the balance between the tech, business, and politics of APIs, as well as the balance between platform, developer, end-users, and what I consider to be an invetiable collison with government regulation. For now this is just a thought exercise, but it is something I will be studying, and pondering more, and as I gather more examples of algorthmic, or "surge pricing", I will work to evolve these thoughts, and solidify into something more presentable.