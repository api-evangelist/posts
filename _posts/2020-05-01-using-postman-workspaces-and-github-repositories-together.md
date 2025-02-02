---
published: true
layout: post
title: Using Postman Workspaces and GitHub Repositories Together
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/bf-skinner-chess-in-the-park-with-pigeons.jpg
author:
  name: kinlane
tags:
  - Workspaces
  - Repositories
---
I find that it helps to have defined boundaries for your APIs. If you have the resources and interest I recommend studying subjects like [domain driven design](https://en.wikipedia.org/wiki/Domain-driven_design). Investment in properly defining the boundaries of your organization and lines of business is a very worthy endeavor—if you have the time. However, if you already have a lot on your plate, and are just looking for incremental changes that can help make your life easier when it comes to the API sprawl we’ve introduced into our worlds, I recommend just spending a few moments thinking about how you can better use Postman workspaces to dive and conquer your API landscape.

I have begun using Postman workspaces in similar ways that I use GitHub repositories. The GitHub repository has long represented a unit of API value in my world, but with the introduction of [GitHub two-way sync](https://learning.postman.com/docs/integrations/github/) into Postman I now have a one for one matchup between workspace and repository when it comes to moving each API forward. For my [API-first e-commerce reference implementation Union Fashion](https://github.com/union-fashion/home) I am currently developing five separate APIs, which each have their own Postman workspace and GitHub repository pairing.

*   **Products** - ([Workspace](https://union-fashion.postman.co/workspaces/2990215b-b3e0-4431-b2ca-80cf01274a25/apis)) ([Repo](https://github.com/union-fashion/products)) ([Docs](https://documenter.postman.com/view/10394726/SzS2xojt?version=latest)) - Defining all of the products that Union Fashion offers.
*   **Orders** - ([Workspace](https://union-fashion.postman.co/workspaces/67f9508f-a375-4a65-8450-b7f0aabc4cc4/apis)) ([Repo](https://github.com/union-fashion/orders)) ([Docs](https://documenter.postman.com/view/10394726/SzYXXzLu?version=latest)) - Allows for the ordering of Union Fashion products online.
*   **Baskets** - ([Workspace](https://union-fashion.postman.co/workspaces/a396c446-3ecd-48c7-8df1-e2fee10f129f/apis)) ([Repo](https://github.com/union-fashion/baskets)) ([Docs](https://documenter.postman.com/view/10394726/SzYXXzVh?version=latest)) - Allows for the ordering of Union Fashion products online.
*   **Users** - ([Workspace](https://union-fashion.postman.co/workspaces/7b9395cc-f700-4526-aeff-6825965e42d7/apis)) ([Repo](https://github.com/union-fashion/users)) ([Docs](https://documenter.postman.com/view/10394726/SzYXXzaC?version=latest)) - Defines users who engage with the Union Fashion platform.
*   **Search** - ([Workspace](https://union-fashion.postman.co/workspaces/ea93d961-16cb-4a8e-bbe0-7cdb1e5b62fc/apis)) ([Repo](https://github.com/union-fashion/search)) ([Docs](https://documenter.postman.com/view/10394726/SzYXXza6?version=latest)) - Provides a universal search for products, orders, and users.

Postman workspaces and GitHub repositories accomplish many overlapping concerns along the API life cycle, however I am finding that Postman workspaces are better suited for establishing a tighter team level definition of who should have access and voice in moving an API forward, but GitHub is better for a more organizational-wide, or a public level of engagement. With both workspaces containing many of the same artifacts, but they will be evolved and consumed in different ways within a Postman workspace, or GitHub repository. Making for a pretty powerful Venn diagram when it comes how I move APIs forward as part of this project.

There is a natural synergy between Postman workspaces and GitHub repositories for me. Postman workspaces very much reflect the organization and tighter knit collaboration I need for each individual API, and the GitHub repositories reflect that next outward wave of engagement via a private or public GitHub repository. I can sync my artifacts between Postman and GitHub, and use both platforms APIs to orchestrate and automate the evolution of each individual API. Using Postman workspaces and GitHub repositories in tandem is allowing me to be a little more organized about how I roll out my APIs, and helps me establish relevant bounded contexts to any of the API resources I’m pushing forward.