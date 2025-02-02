---
layout: post
title: Regex Suggestion Discovery For Web Concepts And Specs During API Design Time
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-regex.png
atomdate: 2016-09-09T18:00:00.000Z
tags:
  - Design
  - Discovery
  - Web
  - Discover
  - Time
  - Specs
---
I am working on taking the [JSON feed of web concepts and specs](http://apievangelist.com/2016/09/06/a-json-feed-of-critical-web-concepts-to-integrate-into-api-design-service-and-tooling/) and developing a simple [website JavaScript tooltip library](http://apievangelist.com/2016/09/07/a-web-concepts-and-specifications-javascript-library-for-api-providers/) that API providers can employ to inject web literacy into their API developer portals and documentation. I have settled in on using an existing [JavaScript tooltip library](http://darsa.in/tooltip/) for the core functionality and have put [some thought into a basic dictionary lookup that can be used in web and API literacy tooling](http://apievangelist.com/2016/09/08/a-dictionary-to-lookup-web-concepts-and-specs-for-the-javascript-tooltip/).

As I was brainstorming on what is possible within a basic dictionary which could be used to map specific keywords and phrases to the [web concepts](http://webconcepts.info/concepts/concepts.json) and [specs](http://webconcepts.info/specs/specs.json) that Erik Wilde (@dret) has showcased in his [webconcepts.info](http://webconcepts.info) work, it occurred to me that there should also be a regex layer to this dictionary lookup. I purposely left it out of my brainstorming on the dictionary, because I wanted to keep simple for usage within API portals and documentation, leaving my thoughts around how this could be applied wth in API design services and tooling, as well as potentially within IDEs (Atom, Visual Studio, Eclipse, etc.).

I am envisioning regular expressions that could be applied to data, text within API definitions like [OpenAPI Spec](https://github.com/OAI/OpenAPI-Specification) and [API Blueprint](http://apiblueprint.org). When you are editing or have placed your cursor in a data field, a tooltip could pop up, or display in the help tooling with information about [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) or [RFC 3339](https://tools.ietf.org/html/rfc3339). When you are working with headers, as part of the API design process, [information regarding HTTP headers could be auto-completed](http://webconcepts.info/concepts/http-headers), and shown in tooltips and other help solutions.

In short, the basic dictionary would handle keywords and phrases, where the regex layer could be used for more structured considerations within the API design process. It would take time to build up a wealth of regular expressions that could be assigned to each available [web concepts](http://webconcepts.info/concepts/concepts.json) or [spec](http://webconcepts.info/specs/specs.json), however once the heavy lifting is done, we would be injecting web literacy, and the common building blocks of the Internet earlier on in the API lifecycle, at design time, before things get too much more expensive down the road.