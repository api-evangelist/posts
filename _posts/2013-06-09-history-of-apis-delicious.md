---
layout: post
title: History of APIs - del.icio.us
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/delicious-logo.jpg
tags:
  - History
  - APIs
---
Del.icio.us was a social bookmarking service for storing, sharing, and discovering web bookmarks. It was founded by Joshua Schachter in 2003. Del.icio.us implemented a simple tagging system that allowed users to easily tag their web bookmarks in a meaningful way. This system also established a kind of folksonomy across all users of the platform, which proved to be a powerful method for cataloging and sharing web links.

The innovative tagging methodology used by del.icio.us allowed users to retrieve a list of their tags or public web bookmarks using a straightforward URL structure. For example, if someone was searching for bookmarks on airplanes, they could visit http://del.icio.us/tag/airplane and obtain a list of all bookmarks tagged with 'airplane.' This simplicity made it very user-friendly.

When it came to the programmatic del.icio.us interface, the API was integrated into the site, creating a seamless experience. For example:

- To get airplane tags via HTML, users entered http://del.icio.us/tag/airplane.
- For RSS feeds of the tags, users entered http://del.icio.us/rss/tag/airplane.
- To receive XML output, they used http://del.icio.us/api/tag/airplane.

This approach has evolved with the modern version of the Delicious API. Del.icio.us was one of the first concrete examples of how the web could deliver HTML content alongside machine-readable formats like RSS and XML using a simple and human-readable URL structure. This methodology set the stage for future APIs, making them accessible and understandable for developers and even non-developers. Slightly technical users could easily parse the XML or RSS, enabling the development or reverse engineering of widgets and apps around del.icio.us content.

Del.icio.us was sold twice after its initial popularity—first to Yahoo! in 2005 and then to AVOS Systems in April 2011. Despite these transitions, del.icio.us was one of the pillar platforms that ushered in the social era of the API movement. It demonstrated that sharing via APIs is critical to the API economy and highlighted the importance of simplicity in API design.