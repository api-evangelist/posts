---
published: true
layout: post
title: >-
  Innovation at the Intersection of OpenAPI Editor and Governance Rules with
  OpenAPI Doctor
tags:
  - OpenAPI
  - Editor
  - Governance
  - Rules
image: >-
  https://kinlane-productions2.s3.us-east-1.amazonaws.com/openapi-doctor/openapi-doctor.png
---
[I am gathering my thoughts on what I’d like to see in an OpenAPI editor](https://apievangelist.com/2024/11/13/investing-in-the-future-of-the-visual-openapi-editor/), and one of the interesting tools out there pushing the envelope is the [OpenAPI Doctor](https://pb33f.io/doctor/). I mentioned them in the previous post, but needed to dig in a bit more because of their innovation around governance and rules. This is an area I’ve seen almost no innovation in and something I was pushing on during the development of tools at Bloomberg, and will continue as part of my API Evangelist platform delivering API governance services for my customers. Like other aspects of editing OpenAPI, it is critical that we innovate, explore, and play around with how rules get enforced during design-time, something [Dave Shanley](https://www.linkedin.com/in/daveshanley/) over at [quobix](https://quobix.com/) / [Princess Beef Heavy Industries](https://pb33f.io/) is smartly exploring.

## Summary
Breaking down the scope of your OpenAPI with size, version, schemas, parameters, operations, refs, enums, and tags that help you understand the footprint of your OpenAPI, which goes a long way to address [some of the concerns I had the other day with scoop of OpenAPI](https://apievangelist.com/2024/11/11/we-are-loading-too-much-into-our-openapis/).

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/openapi-doctor/openapi-doctor-summary.png" style="padding: 15px;">

## Violations
Showing the total number of violations, distilled number of rules, categories, errors, warnings, and information surfaced by running rules, helping you understand the scope of governance being applied to the openAPI you are developing in the editor.

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/openapi-doctor/openapi-doctor-violations.png" style="padding: 15px;">

## Diagnosis
I really like a plain language doctor’s diagnosis, helping bring humanity to the discussion, and an area I think you could get really smart with depending on the type of spec and the rules that are being applied, providing a single point of reference.

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/openapi-doctor/openapi-doctor-diagnosis.png" style="padding: 15px;">

## Score
The percentage based scoring is essential and something I’ve seen applied pretty commonly, but I would like to see it evolve to maybe an A,B,C,D, F grade, or maybe explore new scoring by seeing how other games are communicating this.

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/openapi-doctor/openapi-doctor-score.png" style="padding: 15px;">

## Progress
Seeing ALL the rules always makes your head swim, so aggregating them by rule and showing a progress bar is a great way to make things more digestible and doable by teams, providing a nice summary with more detail when I need to dig in.

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/openapi-doctor/openapi-doctor-progress.png" style="padding: 15px;">

## Objects
Breaking things down by OpenAPI object helps provide another dimension of rules for users, revealing governance and enforcement through the lens of OpenAPI and the objects that make up the specification, which will help users learn about objects.

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/openapi-doctor/openapi-doctor-objects.png" style="padding: 15px;">

## Problems
Now let’s just focus on the problem and drill into the most severe offenses, allowing me to sort, filter, and search through specific offenses encountered in the design of my API, getting down to the technical details at specific lines.

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/openapi-doctor/openapi-doctor-problems.png" style="padding: 15px;">

## Rules
Listing all of the rules being applied, allowing me to filter by category, but then get down into the detail of each of the rules being applied, helping provide more literacy regarding what governance is being enforced and how the process works.

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/openapi-doctor/openapi-doctor-rules.png" style="padding: 15px;">

## Feedback
Providing a much needed feedback loop for users to ask questions and share more about what they like or don’t like in OpenAPI Doctor or with the rules themselves, making API governance a participatory sport that evolves over time.

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/openapi-doctor/openapi-doctor-feedback.png" style="padding: 15px;">

## Updates
Let folks sign up for updates on the product, building the audience of stakeholders, something that could be leveraged intelligently when deployed for an enterprise client, keeping teams up to date on governance and what is happening not just with OpenAPI Doctor, but rules and everything else.

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/openapi-doctor/openapi-doctor-updates.png" style="padding: 15px;">

I love this. I mean the UI is innovative and dare I agree with them—-sexy. It is the first meaningful innovation at the rules level I’ve seen to date. I have been beyond frustrated with the way API services and tooling approach rules, and you can see innovation from Dave at the rule level, as well as how it is applied in a visual OpenAPI editor at design time. Damn good stuff and makes me very happy—-looking forward to the road map.

Let me share some of my own features I am building into the API Evangelist platform and have been investing in over the last year of governance work. While I am building my own solutions, my approach to API governance and evangelism demands that my ideas be free and part of the community, and not something proprietary to what I am building-—here are my additions:

- **Business** - Show more of the reasons why these rules will impact business (product, revenue).
- **Experience** - Show more of how these rules will impact experience (docs, mocks, SDKS, etc.)
- **Education** - Provide more inline guidance to help educate behind spec and rules and governance.
- **Visuals** - Diagrams and charts — damn good start with UI and progress bar, but more is needed.
- **Reporting** - Produce some enterprise reporting I can pay for as a business stakeholder across APIs.

I have more ideas, but I’ll stop there. I love this shit. When I see innovation like this it always gets my mojo going. I was going to end with this post and get back to work, but I have another post I’d like to do on how I see the overall future of the OpenAPI editor based upon writing about this API governance innovation. I’ve been planning on talking to Dave about their development of their own approach to rules, and now I will also reach out about OpenAPI Doctor and the intersection with API governance.

Innovation at the API spec and governance layer will be the most valuable in coming years. It is critical that this innovation is open-source and in the hands of people who know specs, know APIs, and love building good things. The biggest wet blanket to progress in this space has been venture capital, which despite the popular myth that they make the fucking world go round, in reality actually have held things back and derailed innovation at the visual API editor and governance layer for many years now-—enough. Impressive work Princess Beef Heavy Industries. Impressive. 