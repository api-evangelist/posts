---
layout: post
title: The Emerging Landscape Of API Orchestration Platforms
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-conductor.png
author:
  name: kinlane
tags:
  - Orchestration
  - Platform
  - Landscape
  - Platforms
---
I’ve been exploring one possible API future more and more lately, a future which centers around the a concept of being able to deploy [virtual API stacks](http://apievangelist.com/2013/01/28/virtualized-api-stacks/), by employing the [power of deploying API resources in virtualized containers](http://apievangelist.com/2014/03/13/the-power-of-designing-and-deploying-api-driven-resources-in-containers/), something that will free individual API resources up for [orchestration in new and exciting ways](http://apievangelist.com/2014/04/17/api-virtual-stack-composition-like-the-absolut-drinks-data-api/)\--[doing for APIs, what APIs have been doing for companies](http://apievangelist.com/2014/04/07/containers-will-do-for-apis-what-apis-do-for-companies/).

Driven by a recent evolution in cloud computing introduced by [Docker.io](http://docker.io), we are beginning to see new services emerge that get us closer to this vision of API orchesstration. Last week I wrote about how [StrongLoop providing one look at the future of API deployment](http://apievangelist.com/2014/07/23/the-new-strongloop-api-server-provides-a-look-at-future-of-api-deployment/), using Node.js. This week I was introduced to another API deployment solution that also resembles some of these earlier thoughts I have had on API orchestration, from [BlockSpring](https://api.blockspring.com/).

Blockspring deploys a containerized API for any Python, Ruby, and R scripts, so all you do is take some code resource, deploy using BlockSpring, and it generates API endpoints, and a form interface for working with the resource. Blockspring provides documentation to help you understand how to craft your code, and a library to publish your API to, when ready.

When you look at their API library, it even drops you into a folder called /blocks, which gives you into a list of APIs deployed using Blockspring, doing a range of functions from screen capture, applying image filters, to sentiment and text analysis. Blockspring enables, and encourages the design, and deployment of very granular API resources, that do one thing, and hopefully also doing it well, providing an interesting, and very modular way of deploying APIs--think legos.

This deployment of simple, programmatic API resources, using a very containerized architecture, is an important new layer to the growing world of API orchestration, complimenting the simpler content and data driven API resources we are seeing deployed from spreadsheets and databases, and common file stores. I’m not seeing a pure spreadsheet to API, or database to API solution which solely employs virtual containers, but I’m sure its not far off.

Seeing what Strongloop and Blockspring are up to makes me happy. Imagine a world where you can deploy exactly the data, content, and programmatic resources you will need for your web, mobile or single page application. This ability to define, deploy, scale and manage all of your API resources, in such a granular way will contribute significantly to the evolution how we build apps, and connect our devices to the Internet.

This emerging landscape of new API orchestration platforms will change how we deploy and consume APIs, making APIs much more remixable and composable, bringing APIs out of their silos. I also hope this new approach will also expand on [wholesale opportunities for API providers](http://apievangelist.com/2014/01/30/what-will-it-take-to-sell-my-api-as-a-wholesale-resource/), and continue to change how we monetize our content, data, and programmatic resources in the API economy.