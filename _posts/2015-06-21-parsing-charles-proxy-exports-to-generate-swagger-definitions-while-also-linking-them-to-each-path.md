---
layout: post
title: >-
  Parsing Charles Proxy Exports To Generate Swagger Definitions, While Also
  Linking Them To Each Path
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/charles-proxy-to-swagger.png
author:
  name: kinlane
tags:
  - Definitions
  - Proxy
  - Definition
  - Swagger
---
Making sure the Swagger files I craft possess a complete definition for its underlying data model, one that is linked to each API path, and parameters where it is put to use, is important to me, but damn it is a lot of work. [As I mentioned in my last piece](http://apievangelist.com/2015/06/21/the-swagger-definitions-collection-is-the-cherry-on-top-of-each-api-that-i-profile/) I'm looking at [the Twitter Swagger file](https://github.com/api-stack/api-stack/blob/gh-pages/data/twitter/twitter-api-swagger.json), and my head starts spinning thinking about how much work it will be to hand-define all of the data models that used across the almost 100 Twitter endpoints.

I quickly got to work finding a better solution--I landed on [Charles Proxy](http://www.charlesproxy.com/). [I had downloaded and installed Charles Proxy to better understand how we could map out the dark layer of the API universe](http://apievangelist.com/2014/10/27/if-you-have-a-publicly-available-mobile-app-you-have-a-public-api/), that the popular mobile applications we use depend on. When running, Charles proxies all the requests and responses my desktop apps, and browsers make on my local Macbook. I can also route my iPhone and iPad through the proxy, when I want to also record my mobile app usage. This is perfect for helping me map out the public APIs in my API Stack work!

When the Charles Proxy is running, it saves an XML summary export to my local Dropbox folder, which then gets synced to the cloud via the Dropbox API. I am now working on a script that will keep an eye on my Dropbox folder, and process any new Charles export files it finds. As I process each file, I'm cherry picking from the domains of specific companies that I'm tracking on, pulling out the request and response information I need to craft a Swagger definition. 

To generate the traffic I need, I just load up any API I'm looking to profile in [Postman](https://www.getpostman.com/), and started working my way through the list of endpoints, until I've covered the entire surface area of any API. I find it is easy to generate a beginning Swagger definition, which includes the host, base uRL, endpoints, and parameters, then load it into Postman, and let Charles proxy complete the rest of the Swagger definition collection, and link each one to any path or parameter it is referenced by. I will be running checks on request details, to make sure I haven't forgotten about any endpoints, and parameters, but my goal is primarily around polishing the definition collection, with an endpoint linkage.

I will not rely on these Swagger definitions generated from the Charles proxy. I will be queuing them up in a Github repo(s), and syncing them existing, often hand-crafted Swagger definitions I'm already evolving. Hopefully this process will help me automate the profiling of popular public APIs, and enable me to crank through more APIs this summer, as part of my [API Stack research](http://theapistack.com).

All of this is working out well. My need to automate the defining of underlying data models, reminded me of the dark API work I was already doing with Charles Proxy--something I will spend more time on this summer. I am looking to generate a Swagger definition for each of the desktop apps I use on my MacBook, and the mobile apps I use on my iDevices--stay tuned!