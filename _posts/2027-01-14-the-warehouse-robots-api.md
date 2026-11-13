---
published: false
layout: post
title: "The Warehouse Robot's API"
date: 2027-01-14 14:00:00 +0000
author: Kin Lane
tags:
  - API Economy
  - Dark Side Of The API Economy
  - Automation
  - Robotics
  - Warehouse Automation
  - Logistics
---
*Part of [The Dark Side of the API Economy](https://apievangelist.com/2026/12/17/the-dark-side-of-the-api-economy/). Act three: automate.*

Before anyone measured AI's effect on jobs, economists measured robots. The work I trust most is by Daron Acemoglu and Pascual Restrepo, published in the Journal of Political Economy in 2020. Looking at US labor markets, they found that one more industrial robot per thousand workers lowered the share of people employed by roughly 0.2 percentage points and cut wages by about 0.4 percent. The effect held after accounting for imports from China and Mexico, offshoring and other technology. The losses fell mostly on workers without college degrees.

Their later work goes further. They estimate automation explains 50 to 70 percent of the change in wage gaps between groups of American workers from 1980 to 2016. They also coined the phrase "so-so technologies" for automation that displaces workers without making the economy much more productive.

That is the measured baseline. When someone tells you AI will be different, this is what they are being compared against.

## What the APIs show

Warehouses are where robots and software meet most directly, and the catalog shows how little of it is open. On APIs.io, [Locus Robotics](https://apis.io/providers/locus-robotics/), which makes autonomous mobile robots for fulfillment, publishes no public APIs and scores emerging. [Vecna Robotics](https://apis.io/providers/vecna-robotics/) exposes little more than login and partner identity. [Instock](https://apis.io/providers/instock/) publishes an API for orders, moves and sites and scores developing. [Dexterity](https://apis.io/providers/dexterity/), which builds robots for truck loading and palletizing, scores thin.

Every one of these robots is coordinated by software calling other software. Orders come in from a warehouse management system, tasks go out to the fleet, and status comes back. It is all API-driven. Almost none of it is published.

## Why it matters

When I started this series I expected the automation story to be about AI. The longer-running story is about robots, and the research is clear that its costs landed on the people with the fewest options. The orchestration layer that decides which tasks go to robots and which go to people is one of the most consequential interfaces in the economy, and it is almost entirely private. Warehouse quotas and algorithmic pacing of human workers are part of that same story, and I have not covered them here yet.

Sources: [NBER, "Robots and Jobs"](https://img.nber.org/papers/23285), [Robohub](https://robohub.org/how-many-jobs-do-robots-really-replace/), [Robohub on inequality](https://robohub.org/study-automation-drives-income-inequality/), [World Economic Forum](https://weforum.org/agenda/2020/05/automation-robot-employment-inequality).
