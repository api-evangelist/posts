---
layout: post
title: >-
  A Simple Walkthrough Of How To Deploy A 4th of July Fireworks API Using A
  Google Spreadsheet And APISpark
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/restlet/Restlet-whiteBg.png
author:
  name: kinlane
tags:
  - Spreadsheet
  - 4
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/restlet/Restlet-whiteBg.png)](http://restlet.com)

_This is a guest post by Guillaume Laforge ([@glaforge](https://twitter.com/glaforge)) of [Restlet](http://restlet.com). He did a very cool API deployment project over the holiday weekend, as was good enough to share the details of his project as a story. I've been trying to make time to do more of these simple how-to API deployment guides like this, so I'm always happy to guest post these when they help users understand that they can deploy APIs--no developer necessary._

For the 4th of July, to celebrate the United States’ Independence Day, [Restlet](http://restlet.com) built a fun little website and API to list all the [fireworks in your area](https://fireworks.apispark.net/v1/html/index.html). You can see all the states where fireworks have been found, and lists of towns in those states where those fireworks were taking place. Furthermore, there’s a Google Sheets form that you can fill in to submit fireworks in your area that were not mentioned.

This fireworks app is actually an API with an associated website served by APISpark, using a Google Sheets wrapper for storing the data and receiving form submissions, and a Github file store wrapper to deliver the HTML / CSS / JavaScript assets. In this blog post, I will explain how to make your own APIs with their associated web elements.

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/restlet/fireworks-story/restlet-fireworks-1.png)

So it all started with this idea of listing all the fireworks. We also wanted to let people submit ones in their area, as it’s difficult to find each and every possible event in the whole country. That’s why we thought it’d be important if we could use Google Sheets to store the data, as we can let people fill in the gaps in our listings thanks to a Google Form that automatically saves data in your spreadsheet. Thankfully, [APISpark](http://restlet.com/products/apispark/) provides a [Google Sheets wrapper](http://restlet.com/technical-resources/apispark/tutorials/turn-spreadsheet-to-api) which allows you to expose spreadsheets as a Web API.

Having data served through a Web API is nice, but you won’t cURL it to find an event nearby! You might be a geek with cURL super powers, but I doubt, say, your neighbors are able to find fireworks nearby with a Web API. Thus, you want to be able to view everything through your web browser or mobile device. Which means we had to find a way to display the data from the API through some web pages. To do so, we used an APISpark’s [Github file store](http://restlet.com/technical-resources/apispark/tutorials/github) which serves the content of a Github repository as a Web API… but also as a mere website with its HTML / CSS / JavaScript, like on any website on the Web. For reference, here are my [own assets for the fireworks API](https://github.com/glaforge/fireworks-assets). In turn, this means that your Web API can serve the associated website that goes with that API for easier human consumption — no need for finding a host and setup a server for your website!

Let’s replicate this little fireworks project together!

I’ll start with creating a Google Sheets document and associating it the following form, which let anyone submit new fireworks, with details about the city, state, date and time:

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/restlet/fireworks-story/restlet-fireworks-2.png)

Your website visitors will be able to fill in a form like so:

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/restlet/fireworks-story/restlet-fireworks-3.png)

And your spreadsheet will be updated as new entries are flowing:

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/restlet/fireworks-story/restlet-fireworks-4.png)

The sole modification I’ve done here is to rename the sheet to “fireworks”, but you can also do that later on when configuring the Google Sheets wrapper… speaking of which, it’s time to create it and import that spreadsheet in APISpark!

Once you’ve [created an account on APISpark](http://restlet.com/products/apispark/) (if you haven’t done so yet), login, then, from the dashboard, create an “Entity Store” and select a Google Sheets wrapper:

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/restlet/fireworks-story/restlet-fireworks-5.png)

You’ll be asked to select a Google account (the one with which you’ve created the spreadsheet), then select the spreadsheet document you’ve created for that purpose.

You’ll see that the import of the spreadsheet succeeded, and that some normalization has been done to the name of the properties of your entities, corresponding to the questions of the form (as the column names of the spreadsheet contained special characters like spaces of question marks).

![fireworks-6.png](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/restlet/fireworks-story/restlet-fireworks-6.png)

As those property names will be appearing in the resulting Web API we’re going to create next, I’ve gone the extra step of going through each property to rename them to more succinct names (state, city, date, time):

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/restlet/fireworks-story/restlet-fireworks-7.png)

Now is the time to deploy this first “Cell” so that it can be made available and imported into our future API (just click the “Deploy” button).

If you click on the little cog button in the top right hand corner, near the “Deploy” button, you can export a Web API from this data store directly, so that the API is pre-configured to import it:

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/restlet/fireworks-story/restlet-fireworks-8.png)

I’ve checked the “Read-only API” checkbox (as modifications are done only through the Google Sheets interface), and I’ve selected “No authentication required” for the “Default permissions” as we don’t need authentication here.

Your Web API is ready, and you can see the resource and representation for corresponding to our fireworks sheet:

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/restlet/fireworks-story/restlet-fireworks-9.png)

The Web API is functional, if you deploy it, you’ll be able to make calls to it with [cURL](http://curl.haxx.se/) or [httpie](https://github.com/jakubroztocil/httpie):

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/restlet/fireworks-story/restlet-fireworks-10.png)

Alright, but we said earlier that mere mortals are not cURL warriors, are they? So let’s make a light web frontend on top of that. We don’t want the hassle of finding a host for our website, of dealing with the server, or anything of that sort. That’s why we’re going to let APISpark host the web assets too, thanks to a Github file store! The HTML / CSS / JavaScript / image assets can be served as part of the API.

Go back to the dashboard, and click the “Create file store” button to create a file store, selecting the Github flavor:

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/restlet/fireworks-story/restlet-fireworks-11.png)

In the “Settings” tab, you’ll fill in your credentials to access Github, and add an “Import” pointing at your Github repository containing your web assets:

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/restlet/fireworks-story/restlet-fireworks-12.png)

When configured, you’ll have to deploy your cell to make it usable. Then, heading back to your Web API cell, you’ll be able to add a new import, in the “Settings > Imports” section:

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/restlet/fireworks-story/restlet-fireworks-13.png)

Now the API will contain two imports: one for the Google Sheets wrapper, and this new one for the Github file store.

I haven’t detailed it yet, but what will your Github repository will be looking like? You’ll have to create folders for the various categories of assets that you have. In my online fireworks demo, I had created an “html”, “css”, “javascript”, and “images” folders. For the sake of simplicity here, I’ll just create an “html” folder, and put an “index.html” file that will contain the following HTML and JavaScript code:

This page will be served at [https://fireworks.apispark.net/v1/html/index.html](https://fireworks.apispark.net/v1/html/index.html) by APISpark. I’m using JQuery to call my API, and you will see this simple output in your web browser:

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/restlet/fireworks-story/restlet-fireworks-14.png)

Nothing really fancy, but “[Q.E.D.](https://en.wikipedia.org/wiki/Q.E.D.)” That’s what we had to demonstrate: a Web API delivering data off of a Google Sheets document, but also serving the web assets to offer a UI frontend to interact with that API. No need to host that website elsewhere on some server in the cloud, everything can be done and served through APISpark easily. Having setup Google Sheets for the data makes it easy for non-technical persons to contribute new content and data for your database of fireworks. APISpark then takes care of both exposing a reusable Web API, as well as serving a website to share your nice listing of fireworks to the world!

_**Disclosure:** Restlet is an API Evangelist partner._