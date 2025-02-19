---
layout: post
title: Amazing Visuals, But Lack of API Imagination
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/great-salt-desert.jpeg
author:
  name: kinlane
tags: []
---
[![](https://s3.amazonaws.com/kinlane-productions2/earth-as-art/desolation-canyon.jpeg)](http://kinlane.github.com/earth-as-art/index.html)

I was scrolling through my feeds today and I came across, "[Earth As Art](http://www.nasa.gov/connect/ebooks/earth_art_detail.html)" from NASA. I clicked on the homepage and didn’t think much, and moved on. Then I came across [Earth as Art book from NASA on Flowing Data](http://flowingdata.com/2012/12/21/earth-as-art-from-nasa/), where they showed an actual image from the “Earth As Art” collection.

Sure, I suffer from ADD. But so does much of the world. I work through huge amounts of data on a daily basis, looking for gems. Sometimes I can find them myself, and sometimes I need help.

The “Earth as Art” is an amazing collection of satellite photos from NASA. I feel the entire collection could be made into an exhibit, allowing us to experience, take in and discuss the meaning of art, created from space of the planet we live on.

I also feel NASA’s Earth as Art I think is a poster boy example of how APIs can open up and provide access to content, but also work as conduit for syndication, sharing, remixing and expression around content the owner may not have been able to see.

The [deployment of the Earth as Art collection at NASA](http://www.nasa.gov/connect/ebooks/earth_art_detail.html) has a title, description and meaningless photo thumbnail--accompanied by a [PDF](http://www.nasa.gov/pdf/703154main_earth_art-ebook.pdf) and [iPad app](https://itunes.apple.com/us/app/nasa-earth-as-art/id577527077?mt=8). Obviously NASA saw the value in delivering an iPad app, and making the content accessible to the masses via a PDF.

As soon as I saw the images I want to create something that would share, syndicate and bring awareness to their beauty. My hands are immediately tied, with only a PDF and iPad app--I am not equipped with the tools of a developer.

If there were simply a JSON file of all images, titles, locations and details. Before I got to work, I looked around, but couldn’t find any raw data for the project. So I created [my own JSON representation](https://raw.github.com/kinlane/earth-as-art/gh-pages/data/photos.json) of the [Earth as Art PDF](http://www.nasa.gov/pdf/703154main_earth_art-ebook.pdf).

JSON output is so much more valuable than PDF output. It took me about 2 hours to reverse engineer the Earth as Art PDF and render as images and text. Now, equipped with the parts and pieces of the Earth as Art content, with JSON file as a framework--I can get to work creating several, more interactive representations of the satellite imagery.

Before I create any visualizations, I need a place to put my project. No better place than [Github](/admin/blog/http:/github.com). I can use [Github Pages](http://pages.github.com/) to host my project and with a JSON file as my data source, I can easily use [Mustache Templates](http://mustache.github.com/) to display the images and allow for basic browsing.

Instead of a single, static PDF--I now have all my images and the title, details, location and paths in a JSON file I can render the content in any way I want:

*   **HTML Templates** - Using JSON + Mustache I can view images on a listing with detail pages
*   **Deck.js Presentation** \- Create a presentation in markdown using the satellite imagery and content, laid out using the deck.js framework
*   **Widgets** - Develop several, embeddable, syndicatable JavaScript widgets that are driven from the JSON file

[![](https://s3.amazonaws.com/kinlane-productions2/earth-as-art/great-salt-desert.jpeg)](http://kinlane.github.com/earth-as-art/index.html)

Having the Earth as a Art assets stored as individual images with name, details, location and image paths as JSON allows me build my own HTML display, presentations and widgets around the content.

[Hosting the Earth as Art project at Github](http://kinlane.github.com/earth-as-art/index.html) allows me to provide simple, inexpensive, open hosting for the data, content and display elements--allowing anyone to fork, download and remix and even choose to contribute back.

As another project, I can explore the licensing, branding and other aspects that will ensure the creators of the content (NASA), get the attribution they deserve for creating such amazing content.

When I first saw the Earth as Art pictures this morning, I couldn’t get over the fact that they weren’t in a format that allowed for remix, sharing and syndication. The images are amazing and really lend themselves for infinite presentations and interpretations.

Hopefully the project will only grow from here.