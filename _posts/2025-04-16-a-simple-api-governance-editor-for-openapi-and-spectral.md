---
published: true
layout: post
title: A Simple API Governance Editor For OpenAPI and Spectral
date: 2025-04-16T09:00:00.000Z
tags:
  - Governance
  - OpenAPI
  - Spectral
  - Editor
image: https://kinlane-images.s3.amazonaws.com/shared/bf-skinner-waterfront-in-italy-mist.jpg
---
[Spectral rules](https://bit.ly/3Q0yku9) have been the base of API governance since it evolved from Speccy in 2018, and is the widest adopted ruleset and linter. If you are just getting started with API governance and have the technical chops I recommend looking at [Vacuum](https://bit.ly/3WDnhej), or if you are looking for an industrial-grade approach with API governance I recommend looking at [APIMATIC](https://bit.ly/3NyONos). However, if you are on a budget, still trying to develop your internal capacity around what API governance is, and how rules work I recommend sticking with the Spectral rule for the time being, as it has the visibility, adoption, and open-source you will need to get started.

To help my customers bootstrap things both financially and education wise I have been providing a starter API governance tool, but a baseline of Spectral API governance rules. [I have my own Monaco and Spectral powered API governance solution I use in demos and workshops](https://utilities.apievangelist.com/openapi-linter/), but I also encourage my customers to use this [starter OpenAPI Governance editor](https://starter.apievangelist.com/) that also uses Monaco and Spectral, for a couple reasons.

- **Simplicity** - It is a pretty bare bones implementation that is disconnected from the other aspects of API operations — helps you focus on governance.
- **Focused** - It is focused on governing a single OpenAPI definition and applying Spectral rules without documentation, mocking, and other distractions.
- **Client-Side** - This will run 100% on Github pages which makes it a pretty powerful solution what I consider to be downloadable governance for teams.
- **Configurable** - You can add and remove the rules you want from the rulesets, and choose to added other rulesets as teams will need to work on APIs.
- **Open-Source** - As a governance editor it is openly licensed and built on top of openly licensed editor and listing rules library keeping your costs down.
- **Guidance** - It shows the description in a popup for each rule to guide teams with what it means and you can link to Slack, Confluence, or other source.

The base my my API Governance Starter is built by the [Italian government](https://bit.ly/3Y1MWhB) as part of their [API Starter Kit](https://bit.ly/42f8AkU) - I highly recommend checking out their approach, but I have isolated this version for use in demos and workshops that provide governance my customers can download and use internally. My goal is to push them to develop internal capacity around API governance. So, with this in mind there are multiple ways you can use this work.

1. [**Web**](https://starter.apievangelist.com/) - You can visit the GitHub Pages portion of this repository and use the editor. It is completely client-side with no backend, and OpenAPI or no other data is stored -- it is stateless. If there are rules or rulesets you’d like to see added, or more template OpenAPIs added let me know.
2. [**Fork**](https://github.com/api-evangelist-tools/starter) - You can fork this repository and fire up in your own cloud or on-premise edition of GitHub and publish with GitHub Pages-- then you can just edit the ruleset.json to customize rules, and you can set the default OpenAPI using initial.yaml. 
3. [**Build**](https://bit.ly/3Y1MWhB) - If you have the resources and skills I highly recommend building on the same base that I did and fork the [APIs OpenAPI Checker from the Italian government](https://bit.ly/3Y1MWhB). You will get more capabilities out of the box, their version of rules, and allow you to customize better for your needs.

Obviously the web edition is the easiest for you to use, but the fork and publish in your own GitHub or other static site hosting is the next easiest, but then using the [repo from the Italian Government](https://bit.ly/3Y1MWhB) is going to get you the most control and customizability. I am happy to help you with any of these approach, just let me know wha you need, what doesn’t make sense, and I’ll provide more details.

I really like the Italian Governments approach using Monaco editor with code highlighting and linking from each rule, as well as the popup and email, Slack, or other support integrations. I am not a React developer, but it took me an hour or so to reverse engineer how to customize and make the editor my own. I strongly encourage seamlessly weaving into your internal enterprise approach making it your own. You learn a lot about OpenAPI, JSON Schema, Spectral Rules, and Monaco Editor in the process. I like the approach taken by the Italian Government, and I feel their motivations reflects what enterprises need when they are just trying to figure things out.