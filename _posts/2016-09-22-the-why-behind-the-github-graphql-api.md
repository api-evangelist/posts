---
layout: post
title: The Why Behind The Github GraphQL API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/the_github_graphql_api__github_engineering.png
atomdate: 2016-09-22T20:00:00.000Z
tags:
  - Github
  - GraphQL
  - Git
---
[I wrote a skeptical piece the other day about GraphQL](http://apievangelist.com/2016/08/30/graphql-seems-like-we-do-not-want-to-do-the-hard-work-of-api-design/), which I followed up with [another post saying I would keep an open mind](http://apievangelist.com/2016/09/02/i-am-keeping-my-mind-open-and-looking-forward-to-learning-more-about-graphql/). I've added GraphQL to my regular monitoring of the space, but I don't have its own research area yet, but if the conversation keeps expanding I will. A recent expansion in the GraphQL conversation for me was [Github releasing the GitHub GraphQL API](http://githubengineering.com/the-github-graphql-api/).

In the release blog post, from Github they provide exactly what I'm looking for in the GraphQL conversation--[the reasons why they chose to start supporting GraphQL](http://githubengineering.com/the-github-graphql-api/#why). In their post Github describes some of the challenges API consumers were having with the existing API, which led them down the GraphQL path:

*   sometimes required two or three separate calls to assemble a complete view of a resource
*   responses simultaneously sent too many data and didn’t include data that consumers needed

They also talk about some of what they wanted to accomplish:

*   wanted to identify the OAuth scopes required for each endpoint
*   wanted to be smarter about how our resources were paginated
*   wanted assurances of type-safety for user-supplied parameters
*   wanted to generate documentation from our code
*   wanted to generate clients

Github says they _"studied a variety of API specifications built to make some of this easier, but we found that none of the standards totally matched our requirements"_ and felt that _"GraphQL represents a massive leap forward for API development. Type safety, introspection, generated_ documentation _and predictable responses benefit both the maintainers and consumers of our platform"_. Some interesting points to consider, as I work to understand the benefits GraphQL brings to the table.

I'm still processing the entire story behind their decision to go GraphQL, and will share any more thoughts I'm having in future blog posts. With this major release from Github, I am now keeping an eye out for other providers who are headed in this direction. Hopefully, they will be as transparent about their reasons why as Github has--this kind of storytelling around API design and deployment is important for the rest of the API community to learn from.