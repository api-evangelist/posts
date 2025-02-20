---
published: true
layout: post
title: More Examples of using GitHub to Manage Your OpenAPI
tags:
  - GitHub
  - OpenAPI
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/citizenship-old-tools.jpeg
---
I have found thirteen more solid <a href="https://apievangelist.com/2024/03/31/using-github-to-manage-your-openapis/">examples of API providers using GitHub to manage their OpenAPI and related artifacts</a>. I am regularly finding these as I am profiling APIs, and rather than just write a blog post each time I figured I'd store as YAML, and keep adding them in batches every couple of weeks.

You can find all of the <a href="https://github.com/kinlane/api-evangelist/blob/gh-pages/_data/github-openapi-providers.yml">API providers who are using GitHub via a YAML file</a>, or here via this post.

<ul>
{% for provider in site.data.github-openapi-providers %}
  <li><strong>{{ provider.name }}</strong> ({{ provider.grade }}) - <a href="{{ provider.url }}">{{ provider.url }}</a></li>
{% endfor %}
</ul>

As I add each provider to the list I also have created <a href="https://github.com/kinlane/api-evangelist/blob/gh-pages/_data/github-openapi-properties.yml">a separate YAML file for the properties I find supporting each GitHub repository</a>, providing a pretty interesting checklist to consider.

<ul>
{% for property in site.data.github-openapi-properties %}
  <li><strong>{{ property.name }}</strong> - {{ property.description }}</li>
{% endfor %}
</ul>

The list of properties really overlaps with the properties of an <a href="https://apisjson.org/properties/">API portal and APIs.json index</a>, but with OpenAPI as the center piece. Some of these repos are more about just making the OpenAPI available, while others clearly have a build apparatus around them. 

I will keep setting the interesting ones aside. I don't think every OpenAPI in a GitHub repo is worth showcasing, but when you find API providers who have invested more into their approach, you find there is often a lot to learn from them.