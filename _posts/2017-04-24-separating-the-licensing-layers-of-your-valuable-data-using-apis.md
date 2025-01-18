---
layout: post
title: Separating The Licensing Layers Of Your Valuable Data Using APIs
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-onion.png
atomdate: 2017-04-24T22:00:00.000Z
tags:
  - Data
  - Licensing
  - APIs
---
Data is power. If you have valuable data, people want it. While this is the current way of doing things on the Internet, it really isn't a new concept. The data in databases has always been wielded alongside business and political objectives. I have worked professionally as a database engineer for 30 years this year, with my first job building COBOL databases for use in schools across the State of Oregon in 1987, and have seen many different ways that data is the fuel for the engines of power.

Data is valuable. We put a lot of work into acquiring, creating, normalizing, updating, and maintaining our data. However, this value only goes so far if we keep it siloed, and isolated. We have to be able to open up our data to other stakeholders, partners, or possibly even the public. This is where modern approaches to APIs can help us in some meaningful ways, allowing data stewards to sensibly, and securely open up access to valuable API resources using low-cost web technology. One of the most common obstacles I see impeding companies, organizations, institutions, and agencies from achieving API success, center around restrictive views on data licensing, not being able to separate the data layers by using APIs, and being overly concerned about a loss of power when you publish APIs.

You worked hard to develop the data you have, but you also want to make accessible. To protect our interests I see many folks impose pretty proprietary restrictions around their data, which ends up hurting its usage and viability in partner systems, and introducing friction when it comes to accessing and putting data to work--when this is the thing you really want as a data steward. Let me take a stab at helping you reduce this friction by better understanding how APIs can help you peel the licensing onion layers back when it comes to your valuable data.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/contact_point_data.png)

**Your Valuable Data**  
This is an example point of contact record. I've worked hard to create this bit of data (not really), and maintain a relationship with this point of contact. It takes time to validate that their record is up to date, always relfecting reality in my database.

While openly licensed data is one important piece of the puzzle, and data should be openly licensed when it makes sense, this is the layer of this discussion you may want to be a little more controlling in who has access to, and how partners and the public are able to put your data to use in their operations.

In an online, always on, digital environment, you want data accessible, but to be able to do this you need to think critically about how you peel back the licensing onion when it comes to this data.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/contact_point_schema.png)

**The Schema For Your Data**  
The first layer to peel back when you are looking to make data more accessible with APIs is at the schema level. This is the names, description, data type, and other details about the meta layer of your valuable data--it isn't the data, but the description of the structure of your data.

Ideally, your schema already employs predefined schemas like we find at [Schema.org](http://schema.org), or [Open Referral](http://openreferral.org). Following common definitions will significantly widen the audience for any dataset, allowing data to seamlessly be used across a variety of systems. These forms of schema or openly licensed, usually putting into the public domain.

The schema layer of open data can often resemble the data itself, using machine readable formats like XML, JSON, and YAML. This is most likely the biggest contributing factor for data stewards failing to see this as a separate layer of access from the data itself, and sometimes applying a restrictive license, or forgetting to license it at all.

Data is often more ephemeral than the schema. Ideally, schemas do not change often, are shared and resused, as well as free from restrictive licensing. For system integrations to work, and for partnerships to be sustainable, we need to speak a common language, and schema is how we describe our data so it can be put to use outside our firewall.

Make sure the schema for your data is well-defined, machine readable, and openly licensed for the widest possible use.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/contact_point_api.png)

**Defining Access To Data Using OpenAPI**   
The third layer of this licensing onion is the API layer, which governs access to data, defining how requests are made upon data, and how responses are structured. Many API providers are putting [OpenAPI](http://openapis.org) to work to define this layer of data operations.

As with the schema layer of data operations, you are hoping that other companies, organizations, institutions, and government agencies will integrate this layer into their operations. This layer is much more permanent than the ephermeral data layer, and should be well defined, ideally sharing common patterns, and free from restrictive licensing.

Per the Oracle v Google Java API copyright case in the United States, the API layer is subject to copyright enforcement, meaning the naming, ordering of the surface area of your API can be copyright. If you are looking for others to comfortably integrate this definition into their operations, it should be openly licensed. 

The API layer is not your data. It defines how data will be accessed, and put to use. It is important to separate this layer of your data operations, allowing it to shared, reused, and implemented in many different ways supporting web, mobile, voice, bot, and a growing number of API driven applications.

Make sure the API layer to data operations is well-defined, machine readable, and free from restrictive licensing when possible. 

Currently, many data providers I talk to see this all as a single entity. It's our data. It's valuable. We need to protect it. Even at the same time they really want it simultaneously put to work in other systems, by partners, or even the public. Because they cannot separate the layers, and understand the need for separate licensing considerations, they end up being very closed with the data, schema, and API layers of their operations--introducing friciton at all steps of the application and data life cycle.

Modern approaches to [API management](http://management.apievangelist.com) and logging at the API layer is how savvy data stewards are simultaenoulsy opening up access, and maintaing control over data, while also increasing awareness around how data is being put to use, or not used. Key-based access, [rate limits, access plans](http://plans.apievangelist.com), are all approaches to opening up access to data, while maximizing control, and maintaining a desired balance of power between steward, partners, and consumers. In this model, your schema and API definition needs to be open, accessible, and shareable, where the data itself can be much more tightly controlled, depending on the goals of the data steward, and the needs of consumers.

Let me know if you want to talk through the separation of these layers of licensing and access around your data resources. I'm all for helping you protect your valuable data, but in a pragrmatic way. If you want to be successful in partnering with other stakeholders, you need to be thinking more critically about separating the layers of your data operations, and getting better at peeling back the onion of your data operations--something that seems to leave many folks with tears in their eyes.