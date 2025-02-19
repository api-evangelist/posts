---
layout: post
title: No Database Behind An API and Just Using Files Stored on Github
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-github-api.png
atomdate: 2017-01-23T20:00:00.000Z
tags:
  - Github
  - Database
  - Data
  - Git
---
It is common for an API to just be a facade for a database. Meaning the data, and content served up via the API is read from and written to a database backend. This is probably the most common way to deploy an API, but increasingly I'm working to eliminate the database behind, and storing the content or data being served up via Github repositories. 

[I find it easier to store individual YAML, JSON, and other machine readable files on Github](http://apievangelist.com/2016/09/19/providing-yaml-driven-xml-json-and-atom-using-jekyll-and-github/), and just check out the repository as part of each API deployment. Each API has a different refresh rate determining how often I commit or pull a fresh copy of the content or data, but the API does all of its work with a locally checked out copy of the repository. Eliminating the need for a database backend from the required components to make the API operate.

Why am I doing this? It helps me solve the database challenges when it comes to deploying in containers, and other more modular approaches to deploying APIs as microservices. The API provides a (hopefully) well-designed facade for the data and content stories, and allows me to use my verbs when reading, writing, and managing resources behind. It also injects the benefits of version control, and user and organizational engagement that Github brings to the table.

I'm also using it in on-demand approaches to working with data. I have a lot of government, and other open data stored in Github repositories (free if public), and when I want to work with it, I can spin up a new instance or container, which checks out the latest Github repository, and provides access for reading and writing using a Github OAuth token. When done, the API can be terminated, committing any changes back to the repository, reducing the need for dormant compute resources.

This approach also centralizes the data publicly on Github, allowing anyone else to check out and integrate with the JSON or YAML data and content sources--leveraging Git as the broker. Going down this road I have lost some of the indexing, search and other common database features I enjoy, but I'm slowly evolving the backend API code to work with the YAML or JSON file stores more efficiently. I actually find going back to working with simple static machine-readable files to be refreshing, and using Github makes it even more usable. I will keep writing as I evolve this approach, and provide more open examples of it in action.