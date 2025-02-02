---
published: true
layout: post
title: D3.js Visualizations Using YAML and Jekyll
image: http://d3.js.yaml.jekyll.apievangelist.com/images/d3-js-bar-chart.png
author:
  name: kinlane
tags:
  - Jekyll
  - Visualizations
  - Visualization
  - YAML
---
[![](http://d3.js.yaml.jekyll.apievangelist.com/images/d3-js-bar-chart.png)](http://d3.js.yaml.jekyll.apievangelist.com/bar-chart/)

I am increasingly using [D3.js](https://d3js.org/) as part of my storytelling process. Since all my websites run using Jekyll, and published entirely using Github repositories wich are shared as Github Page sites, it makes sense to standardize how I publish my visualizations.

Jekyll provides a wealth of data management tools, including the ability to manage YAML dta stores in the \_data folder. An approach I feel is not very well understand, and lacks real world examples regarding how to use when managing open data--I am looking to change that.

I like my data visualizations beautiful, dynamic, with the data right behind--making [D3.js](https://d3js.org/) the obvious choice. For this work, I took data intended for use as a bar and pie chart and published as YAML to this Github repositories \_data folder. This approach to centrally storing machine-readable data, in the simple, more readable YAML format, makes the data behind visualizations much more accessible in my opinion.

The problem with using D3.js visualization is that I need it in JSON format. Thankfully, using Jekyll and Liquid, I can easily establish dynamic versions of my data in JSON, XML, or any other format I need it in. I place these JSON pages in a separate folder I am just calling /data.

Now I have the JSON I need to power my D3.js visualizations. To share the actual visualization, I created separate editions for my bar and pie charts, and have the HTML, CSS, and JavaScript for each chart, in its own file.

There are two things being accomplished here. 1) I'm decoupling the data source in a way that makes it easier to swap in and out different D3.js visualizations, and 2) I'm centralizing the data management, making it easily managed by even a non-technical operator, who just needs to grasp how Jekyll and YAML works--which dramatically lowers the barriers to entry for managing the data needed for visualizations.

There is definitely a learning curve involved. Jekyll, Github Pages, and YAML take some time to absorb, but the reverse engineerability of this approach lends itself to reuse and reworking by any data curious person that isn't afraid of Github. I'm hoping to keep publishing any new D3.js visualization I create in this way, to provide small, forkable, data-driven visualizations that can be used as part of data storytelling efforts-[everything here is available as a public repo](https://github.com/kinlane/d3-js-using-yaml-jekyll).

As a 25-year data veteran, [I find myself very intrigued with the potential of Jekyll as a data management solution, something that when you combine with the social coding benefits of Github, and Github Pages, can unleash unlimited possibilities](http://kinlane.com/2016/08/15/using-github-repos-and-jekyll-as-a-data-store/). I'm going to keep working to define small, modular examples of how to do this, and publish as individual Github lessons for you to fork and learn from.