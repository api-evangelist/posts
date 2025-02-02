---
layout: post
title: Dwolla Using Slate For An Evolved API Documentation Experience
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/dwolla/dwolla-logo.jpeg
author:
  name: kinlane
tags:
  - Documentation
  - Experience
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/dwolla/dwolla-logo.jpeg)](https://docs.dwolla.com)

I'm liking the new [Dwolla's new API docs](https://docs.dwolla.com) that they just launched. They are using an [open source API documentation framework called Slate](https://github.com/tripit/slate), developed by [Tripit](https://www.tripit.com), for their own API documentation. 

I enjoy seeing the different directions that providers take with their API docs. Slate's approach is a different path than we've been seeing with interactive docs using frameworks like [Swagger](http://swagger.io/), but provides a very intuitive, elegant documentation experience which includes code samples tailored to each API endpoint.

Here are the features Slate lists on the Github repository for the project:

*   **Clean, Intuitive Design - T**he description of your API is on the left side of your documentation, and all the code examples are on the right side. Inspired by Stripe's and Paypal's API docs. Slate is responsive, so it looks great on tablets, phones, and even print.
*   **Everything On A Single Page -** Gone are the days where your users had to search through a million pages to find what they wanted. Slate puts the entire documentation on a single page. We haven't sacrificed link-ability, though. As you scroll, your browser's hash will update to the nearest header, so linking to a particular point in the documentation is still natural and easy.
*   **Slate Is Just Markdown -** When you write docs with Slate, you're just writing Markdown, which makes it simple to edit and understand. Everything is written in Markdown — even the code samples are just Markdown code blocks!
*   **Write Code Samples In Multiple Languages —** If your API has bindings in multiple programming languages, you easily put in tabs to switch between them. In your document, you'll distinguish different languages by specifying the language name at the top of each code block, just like with Github Flavored Markdown!

Slate provides some pretty interesting tools for any API documentation toolbox. I also really like that they are Github-centric, acknowledging that many API providers will use Github Pages when deploying their docs, adding that _"Not only does this mean you get free hosting for your docs with Github Pages, but it also makes it's simple for other developers to make pull requests to your docs if they find typos or other problems.” - s_omething I thoroughly enjoy across the [API Evangelist network](http://apievangelist.com/network.html).

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/dwolla/dwolla-api-docs.png)](https://docs.dwolla.com)

It looks like to me (maybe I’m wrong) that the code samples are hand written? Something that could easily be remedied using Swagger. It would be way cool to see a Swagger and API Blueprint generated version of Slate emerge—merging the Slate experience, with the interactive documentation experience we’ve seen evolve over the last couple years. This way your docs would be elegant, interactive, and very utilitarian with the inline code samples. 

Nice job [Dwolla](https://www.dwolla.com/)!