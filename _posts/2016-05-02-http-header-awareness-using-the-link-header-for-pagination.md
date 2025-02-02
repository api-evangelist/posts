---
layout: post
title: 'HTTP Header Awareness: Using The Link Header For Pagination'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/github-link-header.png
tags:
  - HTTP
  - Awareness
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/github-link-header.png)](https://developer.github.com/v3/#pagination)

I was revisiting the concept of pagination for a specific project I am working, and after consulting my API research, I came up with a suitable approach using a Link Header. Beyond applying this in my specific project, I thought the usage of the header for pagination would be a suitable topic for helping with HTTP header awareness -- a topic I will be writing about regularly, to help folks be more aware of useful approaches to using HTTP headers.

[Github has the best example of using the link header for pagination that I could find](https://developer.github.com/v3/#pagination). Github uses the Link response header to hold a handful of Hypermedia link relations including next, last, first, and prev. Providing a nice way to handle not just pagination, but potentially any other related action you might want to take around an API response. It also provides a way to augment link relations to any existing API design, without adding to the actual response body -- which is one reason I decided to use it for my existing project. 

HTTP headers are a critical aspect of API integration, and an area that I feel many developers are lacking awareness of. Which is why I will be working harder to write up simple uses like Link header for pagination, that can help API providers, as well as API consumers better use common HTTP header patterns. To be clear, the Link header is not unique to Github, and is something that is [articulated in RFC 5988 for web linking](https://tools.ietf.org/html/rfc5988#page-6). Something I will add as a tooling to my API design research, so it can be considered as part of an overall [API design toolbox](http://design.apievangelist.com).