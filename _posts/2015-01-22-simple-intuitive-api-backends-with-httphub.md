---
layout: post
title: Simple, Intuitive API Backends With HTTPHUB
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Httphub-Logo.png
author:
  name: kinlane
tags:
  - HTTP
  - Backend
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Httphub-Logo.png)](https://www.httphub.com/)

I come across a lot of API related companies during my monitoring of the space, which I queue up, and as I have time, I work to explore and understand what they do. One company that I’ve had open in a tab for the last week is [HTTPHUB](https://www.httphub.com/).

HTTPHUB is very interesting. It starts by giving you a root namespace, like https://kinlane.httphub.com, and from there I can add on any resources on, and make it either public or private—then I can POST any JSON to this resource in the body. So I could create https://kinlane.httphub.com/notes/, and craft a simple form + script to post any data I submit to my HTTPHUB resource.

I think that HTTPHUB captures the simplicity of APIs. Obviously the system will have some limitations, but ultimately it makes on boarding with the concept of APIs, and getting up and running with an API backend as frictionless as possible. HTTPHUB also gives you logging, and user management for your namespace, adding some other essential elements you will need for your API backend.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Httphub-examples.png)](https://www.httphub.com/)

Here are some of the features of an HTTPHUB account:

*   Unlimited requests (rate limited)
*   3Gb of storage space
*   300.000 resources
*   3.000 namespace users
*   3Mb Max POST size
*   Signup and quota management for namespace users
*   Authenticate with credentials or IP address
*   Register up to 5 different accounts using the same email address

HTTPHUB also provides a pretty slick demo feature, using demo test data, in conjunction with [Postman](http://www.getpostman.com/). They provide you with a link to the Postman Chrome app, and a link to a collection file that you can import. This gives you a listing of all of the base endpoints for HTTPHUB, which you can then use to expand, and manage your HTTPHUB API backend--no programming necessary.

[HTTPHUB](https://www.httphub.com/) is most interesting to me because its simple, intuitive, and potentially something you could self-define exactly the backend resources you need, as you need them. Imagine if applications could grow its own backend? Allowing end-users to add to their world, changing how they store contacts, or take notes—using a backend that flexes, grows, and fits end-users needs like a glove.