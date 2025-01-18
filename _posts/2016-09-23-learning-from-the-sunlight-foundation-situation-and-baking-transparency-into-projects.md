---
layout: post
title: >-
  Learning From The Sunlight Foundation Situation And Baking Transparency Into
  Projects
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/sunlight_foundation_transparency.png
atomdate: 2016-09-23T22:00:00.000Z
tags:
  - Transparency
  - Project
  - Learning
---
[As I work through the APIs, and Github repositories of soon to be gone Sunlight Foundation](http://apievangelist.com/2016/09/23/identifying-the-important-work-from-the-sunlightfoundation-i-would-like-to-see-live-on/), I wanted to take some more time to help open data and API efforts realize the important of real-time transparency and openness of their projects--specifically how Github can help contribute to this. I'm super stoked at [the number of projects on Sunlight Lab's Github account](https://github.com/sunlightlabs/), but after identifying the actual gaps between what is there and what is available in their APIs, I want to emphasize the importance of doing our work out in the open on Github when working on these types of projects.

In short, it is really difficult to package up any project once the hammer comes down, and a company or individuals are moving on. You'll never be as thorough with sharing the data, code, and the story behind as if you did in real-time, while in the moment. Even if the lights aren't being shut off, it is extremely difficult to remember all the details after the fact--which is why I am an extreme advocate for being transparent by default throughout the life of any open data and API projects in the service of government transparency.

Many technologists see sharing your work as it happens as extra work, but in my experience, it is actually the opposite, even before you come up against circumstances where you have to recreate work after the fact. Technologists also tend to view Github as purely for managing open source code, when in reality it can be used for much, much more. After reviewing the Sunlight Foundation's Github repo, here are few area that come to mind:

*   **Data** - Publishing raw JSON and YAML data, as part of regular updates, including backups in native database format (ie. MySQL, etc.)
*   **Server Code** - Using Github to manage all server side code for APIs, with regular commits as the code evolves and changes.
*   **Scraping Code** - Making sure all libraries and code used as part of data and content scraping is shared on Github.
*   **Client /Frontend Code** - This is the most common thing currently with providers, with the sharing of client libraries on Github
*   **Visualizations** - Publishing of data behind, and the JavaScript [code for all visualization like I'm doing with D3.js](http://apievangelist.com/2016/09/20/d3js-visualizations-using-yaml-and-jekyll/).
*   **Storytelling** - Jekyll on Github pages provides an easy, free way to publish a blog which can be used to tell the story in real-time.

Everything that runs API Evangelist exists on Github. This approach has fed [my Knight Foundation funded Adopta.Agency work](http://adopta.agency/). If you want to see an [example of what I'm talking about check out the Adopta.Agency Blueprint](http://adopta-agency.github.io/adopta-blueprint/). It is much easier to make sure all of your work will live on beyond your organization or project's lifespan, if you are publishing your work in real time on Github in this way. If you are using Github to manage your daily data, code, visualizations, and storytelling--you will be transparent by default, no extra work necessary.

No project is immune to what has happened with the Sunlight Foundation. All open data and API projects will go away some day, and if we are going to keep building on each other's work it should happen out in the open, in real time, in a way that anyone can fork. I'm not even touching on the zero costs associated with publishing using Github--which I identified when working on open data efforts for the White House, where I couldn't stand up any hosting environment, but I damn sure could stand up a Github repository. I'm not even talking about the social benefits of doing this in real-time and attracting other key actors and players to your work even before it done. I'm just talking about doing this for the benefits of when the lights are dimmed or shut off completely as they are with the Sunlight Foundation.

I know there has been a lot of rhetoric, both good and bad about using Github in government, but the benefits are real, and this type of work around open data and APIs is too important to ignore. If you need help understanding what I'm talking about, needing open data or API efforts rescued, or specific Github templates developed like my [Adopta.Agency blueprint](http://adopta-agency.github.io/adopta-blueprint/), feel free to reach out. I'm hoping to carve off some cycles to apply my approach to the existing Sunlight Foundation projects, helping keep them alive, as well as teach this approach to other upcoming open data and API efforts, to help ensure the work lives on.