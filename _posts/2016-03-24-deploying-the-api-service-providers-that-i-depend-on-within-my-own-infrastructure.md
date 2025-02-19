---
layout: post
title: >-
  Deploying The API Service Providers That I Depend On Within My Own
  Infrastructure
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/opsee-1.png
tags:
  - My
  - Infrastructure
  - Providers
  - Service Providers
---
I play with a lot of services that are looking to provide solutions to the API industry, and I'm always looking to better understand what leading API services providers are using to deploy their warez. I was test driving the [testing and monitoring solutions from Opsee](https://opsee.com/) this week, and separate from the solutions they provide (which I'll talk about later), I thought the deployment of their API testing and monitoring solutions was worthy of talking about all by itself.

Opsee deploys as a micro-instance within my AWS stack, and gets to work testing and monitoring the APIs that I direct it to, providing a very precise, and effective way of doing monitoring.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/opsee-1.png)](https://opsee.com/)

I do not think this approach will work in all scenarios, for all API providers, but I think packaging up the services, so that API providers can deploy within their stack, and run within the cloud or on-premise environment they choose, is a potentially very powerful formula.

[I have written before about offering up your APIs as wholesale or private label solutions before](http://apievangelist.com/2014/01/09/is-your-api-ready-for-wholesale/), and I would categorize what Opsee is doing as offering up your API industry service provider as wholesale or private label solutions. Many companies will do just fine consuming your SaaS or publicly available API driven solution, but more sophisticated operations, and potentially regulated companies, are going to need a solution that will run within existing infrastructure, not outside the firewall. 

I could see bandwidth and CPU intensive situations also benefiting from this approach. Opsee's way of doing things has gotten me thinking more about how we package up and deploy the services we are selling to API providers. Once Opsee was up and running in my stack, using a set of keys I setup and configured especially for it, it got to work monitoring the endpoints I tell it to. I could also see this approach also work as a locally available API, where I tell my systems to integrate and work with an API made available from the deployed instance as well--either permanently or on a more ephemeral time frame.

There is lots to consider but with the evolution in container tech, I could see this approach be applied in a lot of different ways, allowing companies to pick from exactly the API services they need (A la carte), and deploy exactly where they are needed, eliminating the need to depend on services outside the firewall.