---
layout: post
title: Replacing Legacy Systems With APIs At The Department Of Veteran Affairs
image: https://s3.amazonaws.com/kinlane-productions2/digital-strategy/logos/va.png
author:
  name: kinlane
tags:
  - Legacy
  - APIs
  - fair
  - ai
  - Systems
---
I haven't written much about my experience last summer as a Presidential Innovation Fellow (PIF) at the Department of Veteran Affairs (VA). I have lots of thoughts about experience at the VA, as well as participating in the PIF program, and I choose to trickle these thoughts out, as I continue to make sense of them, slowly bringing them into alignment with my overall mission as the API Evangelist.

On deck are my thoughts on _replacing legacy systems with APIs_, at the Department of Veteran Affairs. In the “real world”, one of the motivations for deploying APIs, is to assist in the evolution, and replacement of legacy systems. The theory is, you have older system that needs to be replaced, and you can wrap in a modern web API, and slowly switch any desktop, web, mobile or other client system to use the new API—then you build out newer backend system, and make the switch in the API layer from the legacy to the newer backend system, leaving everything operating as expected. API magic!

I'm used to hostile environments to this way of thinking, but most times in the private sector there are other business objectives that can be leveraged to get legacy system owners to get on board with a shift towards API deployment—I saw no incentive for this practice in the VA environment, where in reality there are incentives for IT, and business owners, as well as 3rd party contractors to keep legacy systems in place, not replace them. There are a variety of motivation for existing VA workers to keep existing systems in place, ranging from not understanding how the system works, to budgetary restrictions on how money flows in support of this pro-sustainment culture.

Here is an example. There is old database for storing of a specific type of document, a database that X amount of existing desktop, server, web, or even mobile systems depend on. If I move in and create an API, that allows for reading and writing of data into this database, then work with all X of the legacy systems to use the API instead of a direct database connection—in theory I can now work to dismantle the legacy database, and replace with a newer, modern backend database. In most IT operations, this approach will then allow me to replace, modernize and evolve upon an existing legacy system. This is a common view of technologists who are purely looking through a technical lens, and ignoring the existing business and political constraints that exist in some companies, organizations, insitutions and government agencies. 

In the real world, you have staff, budgets, workflows, and decision making processes that are already in place. Let’s say this legacy database had $50M a year allocated in budget for its operation, and I replace with a newer database, plus API, which operates for $10M a year—you’d think I get to reallocate the staff, budget, and other resources to developing newer mobile apps, and other system with my newly liberated $40M. Right? Nope…that money goes away, and those people have no interest in moving from supporting a COBOL system, to supporting a new MongoDB + Node.js API that is driving a Swift iPhone app. ;-(

This is a pretty fundamental flaw in how large companies, organizations, institutions and government agencies operate, that are in conflict with what an API philosphy can bring to the table. I don’t give a shit how well designed your API is, in this environment you will fail. Period. I do not think I will ever fully understand what I saw at the VA, while a PIF in Washington DC, but I feel like I’m finally reaching a point where I can at least talk about things publicly, put my thoughts out there, and begin to weave my experiences as a PIF at the VA into my overall API Evangelist message.