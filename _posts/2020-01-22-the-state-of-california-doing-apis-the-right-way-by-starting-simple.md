---
published: true
layout: post
title: The State of California Doing APIs The Right Way By Starting Simple
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/state_of_california.png
author:
  name: kinlane
tags:
  - State Government
---
I got introduced to the [CA.gov Alpha Team](https://medium.com/cadotgov/introducing-the-ca-gov-alpha-team-6daff8e0b4b8) by my fellow government change maker Luke Fretwell ([@lukefretwell)](https://twitter.com/lukefretwell) the other day, and I am beginning to tune into what they are up to in similar ways to how I’ve done with other city, state, and federal government entities over the years. We kicked off a conversation around their approach to delivering APIs, and what was possible with Postman. After we were done kicking things off they shared some links with me to help me get up to speed on what they have been doing with their new approach to delivering technology across the State of California.

As far as first impressions go I am super stoked with their approach. They are starting small, and working hard to be as public with how they are doing everything. The CA.gov Alpha Team gets right down to the core of doing API well, by setting up the essential communication channels you need to do APIs well across any small or large organization.

*   **[GitHub](https://github.com/cagov/)** - All of the projects they develop are published to GitHub.
*   **[Twitter](https://twitter.com/CAdotGov)** - Providing a social stream from what is happening.
*   **[Blog](https://medium.com/cadotgov)** - Shaping the narrative around all of the work that is occuring.

The CA.gov Alpha Team has not just gone all in on GitHub, they are all about their work truly existing in the public domain. It looks like everything they are doing is first being defined as a GitHub repository, providing a default way for other government stakeholders, as well as the public at large to stay in tune with what is going on, and even contribute to what is happening. This is how all government should be by default, and the CA.gov Alpha Team provides one possible blueprint for other city, state, and federal agencies to follow.

I really like that the CA.gov Alpha Team is seeding and managing everything out in the open on Twitter, and being so vocal about it all with a blog, making sure they tell the story about what is happening in real time—this is critical for API success. In addition to these essential building blocks, they have begun working in some areas, to help define how they will be doing what they do. 

*   **[Website](https://github.com/cagov/Alpha)** - They are working on a centralized website for the groups work.
*   **[Web Design System](https://github.com/cagov/cwds)** - Defining a web design system based on Bootstrap.
*   **[Website Theme](https://github.com/cagov/Alpha.CA.gov-theme)** - A website theme for use across projects.
*   **[Handbook](https://github.com/cagov/handbook-cadotgov)** - Document lessons learned as they build a hybrid multi-disciplinary team.
*   **[UX](https://github.com/cagov/UX)** \- A repository dedicated to tracking all of their user needs and stories.
*   **[API](https://github.com/cagov/API)**\- The actual API(s) they are developing as part of their work for the state.
*   **[GitHub Actions](https://github.com/cagov/actions-eleventy)** - Defining how GitHub actions are used for pipelines.

Since all of their work is available on GitHub you can follow each individual projects to get updates, and you can submit issues or pull requests for each of the individual projects. I am going to be tuning into [the API repository](https://github.com/cagov/API) because that is the one that interests me the most (surprise). Although I will also be evaluating how they are using GitHub Actions in conjunction with the rest of their API architecture. Then I will be thinking more deeply about their API life cycle workflow, and making suggestions along the way, beginning with their new API requests template which uses GitHub issues.

*   **[New API Request (Issues)](https://github.com/cagov/API/issues/new/choose)** - The CA.gov Alpha Team is using GitHub issues to allow other government stakeholders, as well as the public to submit suggestions for which APIs and services they should be delivering—something that all government agencies should have. Currently they have X questions to help submit the seed for each new API request
    *   **Is your feature request related to a problem?** \- A clear and concise description of what the problem is.
    *   **Describe the solution you'd like** - How would you like to interact with this API
    *   **Are there any existing related APIs or data sources** - Are you aware of data sources or existing APIs related to this request
    *   **Additional context** - Add any other context or screenshots about the feature request here.

I am going to spend some time thinking about this approach to allowing suggestions for new APIs within government, and provide some feedback on how to improve, and establish a workflow to manage a steady flow of incoming API requests. You can already see this process in action with the three new APIs they are currently defining and developing, working to deliver specific services but also flesh out what their API delivery life cycle will look like.

*   **[Water Quality](https://github.com/cagov/API/tree/master/DrinkingWaterQuality)** - Water quality contaminant measurements after water passes through each local California water treatment plant.
*   **[Lane Closures](https://github.com/cagov/API/tree/master/LaneClosures)** - Caltrans CCWWP, could consume all the separate district specific json files from Caltrans web portal.
*   **[Safe to Swim](https://github.com/cagov/API/tree/master/SafeToSwim)** - Swimming location water contaminant measurements, which could also include algae bloom info. 

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/1_jgrirb9lj7tsrvkesuxwta.jpeg)

I’m going to dive into thinking about all three of these APIs, and using them as an opportunity to help their team think through the delivery of each API, but also begin defining what their overall API life cycle might look like. Helping them establish some clear guidelines on how to deliver APIs consistently across teams, eventually maybe publishing it alongside their web site, UX, handbook, and the other resources they are making available. I just wanted to get up to speed on their approach to doing things, and process all of the links they had shared with me. Next I am going to focus on a couple of areas to hopefully contribute some value.

*   **API First** - I am going to work to establish an API first workflow for each of the APIs they are working on currently, attempting to demonstrate the value of API first in a way that they can also reuse to convince other stakeholders.
*   **Pipeline** - Then I want to better understand how they are using Azure to deliver their APIs, and how they are building using GitHub Actions, working to better define how the API collections for each API can be used as part of the pipeline.

After that I will thinkg more about where else I can help out. I’m just looking to shadow what they are doing and provide additional elements that they can consider merging into their existing work. I don’t want to create extra work or processes for them, I just want to help them see the bigger picture when it comes to delivering APIs efficiently at scale, and provide resources they can share with their other stakeholders. After this first dive into things, a couple of areas I’d consider thinking more about before moving forward too fast are:

*   **GitHub Standards** - Establish naming conventions for GitHub repositories, as well as establish a template for README, to help standardize how repositories are put to use as part of work—standardizing things before they explode too much.
*   **Mono Repo vs Multi Repo** - Considering the pros and cons of operating a single repo for all APIs being delivered or breaking them up into separate repositories, and being honest about the tradeoffs now as well as down the road with hundreds of APIs.

I am sure I will have lots of other suggestions now that I have their work loaded up into my old brain, letting me simmer more on what is going on. After fleshing out an API first approach for the three APIs that are on the table, and thinking more deeply on the pipeline and how they use GitHub and Azure, I am sure I’ll have lots of other feedback which I’ll submit as GitHub issues. Then they can decide what they actually want listen to, and what feedback might not make sense. I just want to make sure they have another pair of eyes on things. I know how hard it can be to see the big picture when you are down on the ground within government agencies. I’m hoping my contributions and storytelling will also drum up interest from other government employees as well as the general public. I get pretty excited to think about the potential of people pitching in when it comes to moving forward the conversation around how government does what it does, and how it leverages the web to be more engaged with the public.