---
published: true
layout: post
title: Creating A NASA API Postman Collection And Environment
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/aws-s3-stories-server-racks-clouds-copper-circuit.jpg
author:
  name: kinlane
tags:
  - Collections
  - environments
  - space
  - NASA
---
_This is a story derived from work to help develop a Postman Collection that could be used by the International Space Apps Challenge, establishing a machine readable definition for all the NASA APIs available at [https://api.nasa.gov/](https://api.nasa.gov/) that can be used by participations in the challenge, helping developers quickly get up to speed with the valuable APIs NASA provides. The International Space Apps Challenge is in need of sponsors and participants to help make the event a success--please visit [http://www.spaceappschallenge.org](http://www.spaceappschallenge.org), or on Twitter at [@SpaceApps](https://twitter.com/spaceapps) to get involved._  
  
I met Katelyn Hertel ([@Katers\_Potaters](https://twitter.com/Katers_Potaters)) from the International Space Apps Challenge at POSTCON, and we got to talking about the interesting APIs NASA has, and how we can use Postman to make things easier for the developers who are participating in the global challenge. I immediately knew what was needed, and as soon as I got home this weekend I got to work on crafting a Postman Collection for all of the NASA APIs. It took me about four hours t apply for a key, and get up and running with each of the NASA APIs using Postman. As I was playing around with each of the individual API resources, which come from across many different groups, I took the liberty to better organize them, and came up with the following sub-folders for the NASA API Postman collection.  
  

*   [**Asteroids near East Objects**](https://api.nasa.gov/api.html#NeoWS) - Information on near-earth asteroid information.
*   [**Astronomy Picture of the Day (APOD)**](https://api.nasa.gov/api.html#apod) - A single astronomy picture each day.
*   [**CelesTrak Two-line Element (TLE)**](https://api.nasa.gov/api.html#trek) - Orbital elements of an Earth-orbiting object.
*   [**Earth Observatory Natural Event Tracker (EONET)**](https://api.nasa.gov/api.html#EONET) - Curated source of continuously updated natural event metadata.
*   [**Earth Polychromatic Imaging Camera (EPIC)**](https://api.nasa.gov/api.html#EPIC) - Daily imagery collected by DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument.
*   [**Exoplanet Archive**](https://api.nasa.gov/api.html#exoPlanetIntro) - Access to NASA's Exoplanet Archive database.
*   [**GeneLab**](https://api.nasa.gov/api.html#genelab) - Bioinformatics and Biotechnology information search.
*   [**Image and Video Library**](https://api.nasa.gov/api.html#Images) - Access to NASA's image and video library.
*   [**Kepler Objects of Interest (KOI)**](https://api.nasa.gov/api.html#genelab) - Stars observed by the Kepler spacecraft that is suspected of hosting one or more transiting planets.
*   [**Kepler Stellar Table**](https://api.nasa.gov/api.html#genelab) - Parameters for all targets observed by Kepler for the purpose of finding transiting planets.
*   [**Mars Rover - Curiosity**](https://api.nasa.gov/api.html#MarsPhotos) - Images from the Curiosity rover.
*   [**Mars Rover - Opportunity**](https://api.nasa.gov/api.html#MarsPhotos) - Images from the Opportunity rover.
*   [**Mars Rover - Spirit**](https://api.nasa.gov/api.html#MarsPhotos) - Images from the Spirit rover.
*   [**Mars Rover - Mission Manifest**](https://api.nasa.gov/api.html#MarsPhotos) - Manifests for Curiosity, Opportunity, and Spirit rovers.
*   [**Mars Weather**](https://api.nasa.gov/api.html#insight_weather) - Continuous weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia.
*   [**Patents**](https://api.nasa.gov/api.html#patents) - All of the patents that NASA has filed.
*   [**Satellite Situation Center**](https://api.nasa.gov/api.html#SSC) - Geocentric spacecraft location information into a framework of (empirical) geophysical regions and mappings of spacecraft locations along lines of the Earth's magnetic field.
*   [**Solar System Dynamics and Center for Near Earth Objects**](https://api.nasa.gov/api.html#ssd_CNEOS) - The orbits, physical characteristics, and discovery circumstances for most known natural bodies in orbit around our sun, as well as asteroid and comet orbits and their odds of Earth impact.
*   [**Space Weather Database**](https://api.nasa.gov/api.html#DONKI) - Daily interpretations of space weather observations, analysis, models, forecasts, and notifications.
*   [**Techport**](https://api.nasa.gov/api.html#techport) - Resource for collecting and sharing information about NASA-funded technology development.
*   [**Threshold-Crossing Events (TCE)**](https://api.nasa.gov/api.html#genelab) - Potential transit signals that exceed the pipeline transiting planet detection threshold and pass a series of transit consistency tests.

  
I could spend days writing better summaries, descriptions, and organizing APIs into more meaningful folders and requests, but this should provide a good starting point. All 79 of the individual API requests work, allowing me to easily generate examples and documentation when ready. Here is the current draft of [the NASA API Postman Collection](https://www.postman.com/collections/3a1e9510a749108b13ed). I thought about breaking it into separate collections, one for reach area, but I thought it worked better as one collection, abstracting away the different APIs that come from different groups. I did manage to standardize some of the parameters across the APIs using [a Postman Environment](https://kinlane-productions2.s3.amazonaws.com/postman-collections/nasa/nasa-apis.postman_environment.json), helping potentially reduce some friction running the different APIs. There is still much more work to be done across the APIs to help clean up some of the design and documentation available, but it provides a pretty robust picture of the different APIs NASA offers.  
  
This NASA API Postman Collection should help reduce friction for developers at the International Space Apps Challenge, providing them with a quick way to get up and running with any of the NASA APIs. Each developer will still need to signup for their own API key, but once they save their key as part of their Postman Environment, they should be able to use any of the 79 API requests organized within the collection. I’m going to work with the International Space Apps Challenge folks to polish the collection a bit, and publish as part of the resources on the website for the challenge. Along the way I’ve learned a lot of NASA’s APIs, and organizing resources as a Postman Collection, something I will be talking about in ongoing stories here on the blog, showcasing how I profiled NASA APIs using Postman.