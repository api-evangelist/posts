---
layout: post
title: Looking At API Design, Deployment, And Management From A Form Point Of View
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/form-io/formio-logo-full.png
author:
  name: kinlane
tags:
  - Deployment
  - Design
  - Management
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/form-io/formio-logo-full.png)](https://form.io/)

The concept of a form, is one one of those [skeuomorphs](https://en.wikipedia.org/wiki/Skeuomorph), that have taken on an entirely new life on the Internet. The concept of a form is baked into HTML, PDFs, and many other commons aspects of our digital lives, while also still dominating many of the information exchanges in our physical worlds. There are a handful of APIs out there that let you build forms, and their are APIs that let you build forms for platforms like Drupal, but I have yet to see a platform that uses the concept of a form, as carrot to design, deploy, and manage your API--until now. 

[I was introduced to Form.io at Gluecon this year](https://form.io/), and was very please with the demo I was given (and my time playing with since). Form.io is a platform that enables developers to build web and mobile applications using a drag & drop interface which allows you to create both the forms and the RESTful APIs all at once. I like this concept, because forms is something the average business user will potentially understand, and is something that has helped them also better understand web, PDF, and other digital platforms--whcih tells me it might do the same for the world of APIs.

Form.io lets users craft their resources, from a forms point of view, allowing you to construct using common elements like email, password, address block, as well as being able to define the custom elements you will need. This is important because it is shifting API design to begin from the standpoint of how it will gathered or put to use, rather than just the system resource it came from like a database. This approach, in my opinion, has the potential to bring API design, closer to the people who are trying to solve everyday problems.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/form-io/form-io-builder.png)](https://form.io/)

Once you have crafted your forms, and the underlying resources, Form.io gives you the ability to publish [an application front-end as an AngularJS driven Single Page Application (SPA)](https://angularjs.org/), which will be a whole other aspect that I will write about in coming weeks. Using Form.io, you end up with simple, embeddable forms you can publish anywhere, and a complete API that you can easily integrate with other systems, or web, and mobile applications. 

I am putting Form.io into the category of meaningful approaches to API design, deployment, and management for the masses, like [APISpark for building APIs from common file and data sources](http://restlet.com/products/apispark/), or [Kimono for scraping web data, and publishing as simple API](https://www.kimonolabs.com/). I also feel it will [move the API conversation forward significantly with mainstream business users like Blockspring is doing](https://www.blockspring.com/), because like spreadsheets, users just get forms. 

You will hear more about Form.io from me in coming months. The platform is in beta right now, but will be announcing a wider release soon. I am also helping them work through their thoughts about how they deliver their services in the cloud, on-premise, and their overall business model and service level agreements. I am eager to support services like Form.io because while they help move the API discussion forward, they do it in a way that supports the average business user, not just developers, and the API elite.

_**Disclosure:** Restlet / APISpark is an API Evangelist partner._