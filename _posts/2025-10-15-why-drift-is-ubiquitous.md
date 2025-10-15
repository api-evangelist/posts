---
published: true
layout: post
title: Why Drift Is Ubiquitous
date: 2025-10-15T09:00:00.000Z
tags:
 - Code
 - Schema
 - Words
 - Visuals
 - Drift
 - Communication
 - Validation
 - Rules
 - Linting
 - Governance
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/john-wayne-the-searchers-drone-boats.jpeg
---
I have done a lot of thinking about how difficult it is to get people on the same page, but also keep them there after my time standing up an API governance program at Bloomberg last year. I went there to learn more about the divide that exists between product and engineering folks, and I strengthened my awareness of what goes into this divide when I mapped the API and team landscape, while trying to govern HTTP, GraphQL, and event-driven APIs. I am thankful that I got paid to learn at such a scale.

One the main reasons APIs drift over time is that people are talking at different scopes and stages, while not possessing a common vocabulary. Engineering folks inhabit the left-hand side of this diagram, where the business folk exist on the right hand side of this diagram. There are people who live across all these areas, but they are rare. There are people who inhabit ends of this spectral as well, while avoiding the middle. But ultimately it is an inconsistent jumping around back and forth on this spectrum during the initial design and development of an API (or any digital object or objects), but more damaging to operations is the inability to consistently jump back and forth from these realms as an API evolves over time.

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/drift.jpg" width="100%">

This is why design or contract first has had such a significant impact where applied. Product and engineering meeting in the middle two squares-—the challenge is always to maintain this over time. Changes on the far left are more expensive than the changes on the far right. You can also begin to validate and lint on the left-hand side where you can’t on the right. It is also easier to apply semantic versioning on the left. It can be done on the right, but there is a lot less rigor, tooling, and practices to support. The sooner you can get your visuals and outlines distilled down into schema, the sooner you will be able to apply validation and rules, and be able to regulate and govern work across teams—without it you drift over time.

Nobody wants to do the work to prevent drift, but everyone hates it when things drift. Product people do not want to dabble in the schema and code realms, avoiding anything with Git involved. Engineering people do not like to use their words, and resist making their schema more human using these words. Some engineers love code and love visuals, but most will resist doing the work to link these realms with words and schema. Work across this spectrum takes time, and it slows things down just a bit. But it is necessary to minimize drift, but there is an added benefit along the way—you strengthen relationships between product and engineering, and establish more trust, where drift tends to just erode trust over time.
