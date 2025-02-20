---
published: true
layout: post
title: Crowdsourcing COVID-19 Testing Location Data
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_data_api_blueprint_multiple_google_sheets.jpg
author:
  name: kinlane
tags:
  - Covid
---
### Framing the COVID-19 Testing Location Problem

Before I dive into what I built, let me talk a little about how I landed on this being a problem in the first place, which is an important first step in any technological response to a real world problem. I was listening to the regular highlighting of drive-through COVID-19 testing locations during the press conferences coming out of this administration, and I was seeing or hearing it on the news I am digesting each day. Recognizing that the availability of COVID-19 testing locations was a politically charged topic, I wanted to better understand where we could or should go if we had Corona symptoms. I don’t have a doctor, event though I have health insurance, so I really have no idea where to go if I came down with it. I have anxiety about where I would go in my community if I came down with symptoms, and I can imagine that other people are feeling the same, but more importantly I don’t feel like the official federal response about drive-thru COVID-19 esting locations was adequate, honest, or satisfactory in any way.

### Finding he COVID-19 Testing Location Data

With a real world problem of finding COVID-19 testing locations identified I moved on to defining where the data might actually be. I couldn’t find any specific announcement out of the federal government agencies leading the COVID-19 fight, so I set out to find other possible locations where I could find authoritative information about where testing locations were—tuning into the following channels:

*   **Web Search via Google & Bing -** Manually using Google, and pulling from the Bing API using a Postman collection I am able to find quite a few links to news stories about COVID-19 testing locations.
*   **[State Health Departments via Twitter](https://documenter.postman.com/view/8854915/SzYT5MzW?version=latest)** \- I have crowdsourced all of the state health departments and I am pulling their tweets and looking for mentions of COVID-19 testing locations.
*   **[County Health Departments via Twitter](https://documenter.postman.com/view/8854915/SzYXVdyQ?version=latest) -** I have crowdsourced all of the county health departments and I am pulling their tweets and looking for mentions of COVID-19 testing locations.
*   **Television Stations via Twitter -** I am crowdsourcing television states for different states and I am pulling their tweets and looking for mentions of COVID-19 testing locations.

There was no shortage of chatter about COVID-19 testing locations, but there wasn’t any actually data being made available. In order to establish a structured data set for COVID-19 testing locations, humans would have to get involved. To find, filter, and extract a standard set of data from each of the news pages, blog posts, and other page it would need a human touch to do it right, and there is no better interface for sucking data out of humans than a spreadsheet, and in this situation Google Sheets. I set out to engineer a Google Sheet driven approach to efficiently crowdsourcing COVID-19 testing locations across all 50 US states, and maybe eventually a global dataset. 

### Managing COVID-19 Testing Location Data Using Google Sheets

To mange the crowdsourcing of COVID-19 testing location data I looked to Google Sheets, which is the quickest free way to stand up a data store that most individual will know how to work with. To lay the foundation for managing the COVID-19 testing location data I opted to setup 50 separate sheets, which was pretty easy to do using a simple script that uses the Google Drive and Sheets API. I opted for 50 separate sheets to help isolate users working on different states into different buckets, sharding out the potentially large amount of data, management, and user access using Google accounts. Something that allows me to quickly use the Google sharing and publishing features to manage a group of evolving individuals who are helping crowdsource the COVID-19 testing location data across all 50 states, and maybe wider.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/google_sheets_covid_testing_locations.png)

### Managing COVID-19 Testing Location Data Syndication Using Postman

After creating 50 separate Google Sheets and populating them with some data I wanted to get to work making the data available via an API, so that the data could be used in other applications. You can access the data via the Google Sheets API, but the data isn’t available in the most intuitive format, and I wanted to be able to use Postman to not just pull the data, but also refactor the data to make it available in a more thoughtful way. I opted to structure the Google Sheets and the resulting API using the [Open Referral specification](http://docs.openreferral.org/en/latest/), which is an open source open data and API format for making health and human services data available to the public. Postman would help me pull from the Google Sheets then transform the data for publishing as valid Open Referral API endpoints, with a standardized underlying schema driven by Google Sheets. The resulting Postman collection for managing COVID-19 testing locations has the following outline:

1.  **Configuration** - Defining the base settings the collection needs to run.
2.  **Google Sheets** \- Pulling of the data from the Google Sheet(s).
3.  **Publish to GitHub** \- Publishing the data to GitHub as JSON and CSV files.
4.  **Build Collection -** Generate a separate collection for making calls to the API.
5.  **Call APIs -** Default endpoints for call the endpoints of each state being managed.

[You can view the documentation for my COVID-19 testing location data management collection](https://covid-19-apis.postman.com/covid-19-testing-locations/), and use the Run in Postman button to import into your own Postman client. The code isn’t the most beautiful or well documented, but it gets the job done and accomplishes what I am looking to do. The Postman collection comes with a starter environment which I have duplicated to create 50 separate environments for each state, providing me with my local data store for pulling COVID-19 testing location data and refactoring for then making available through API syndication. I have already improved upon this model for another crowdsourcing model I am building, but the collection provides an interesting look at how to work with data in Google sheets, but also how to leverage Postman to pull, aggregate, and transform data, but also auto-generate Postman collections for pulling the data.

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/covid_19_testing_locations_management.png)](https://documenter.postman.com/view/8854915/SzS7P5VZ?version=latest)

### Publishing COVID-19 Testing Location to GitHub for Wider Access

While Postman can work a lot of magic, it doesn’t have a scalable way to publish an API. Earlier on I had includedf a request where I would automatically publish a mock API using the collection, but I quickly realized I would need a better way of quickly publishing JSON and CSV data that would be receiving a significant amount of traffic. For me, the quickest, cheapest, and APIi-driven way to publish JSON and CSV data for high volume access by other applications is GitHub. So I added a set of requests to the collection for publishing individual JSON and CSV files for the COVID-19 testing location data to GitHub, as well as a single complete JSON endpoint that rolls it all up into a single JSON file for each state. It is important to keep the data as flat as possible so that consumers can work with in spreadsheets, this is why I publish as CSV. But then it is also important to publish as JSON, which allows for more complex data structures, going beyond what spreadsheets can handle. 

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/covid_19_github.png)](https://github.com/covid-19-testing/locations)

GItHub is designed for quickly making public data available in a machine readable format. I use the GitHub API to publish the data to GitHub, and consumers can make calls to the variety of JSON and CSV files publicly via GitHub using the URL. I also added a request to the COVID-19 testing location collection above for automatically generating another collection for accessing and consuming the 50 individual JSON files published to GitHub. Making for [a single set of documentation and Run in Postman button for viewing, processing, and syndicating of COVID-19 testing location data](https://documenter.postman.com/view/8854915/SzS7PR3t?version=latest) across other systems and applications. Adding another dimension for how Postman can be used, publishing two separate collections, 1) for managing the COVID-19 testing location data, and 2) for accessing the resulting data aggregated from Google Sheets, converted to a more usable [Open Referral specification](http://docs.openreferral.org/en/latest/), and then publishing to Github so that the APIs can handle a large volume of calls, while being updated on a regular basis.

### Aggregating, Refactoring, and Publishing Using Postman Monitors

With a Postman collection for managing the crowdsourced COVID-19 testing location data, and separate Postman environments for each of the 50 US states, I am able to schedule the pulling, refactoring, and publishing of testing location data across all 50 states using Postman monitors. To automate this process I schedule separate Postman monitors for each of the 50 states, applying the collection above to a specific states environment, resulting in the same process being executed for all 50 US states. Leveraging the Postman platform as the engine for making COVID-19 testing location data more accessible using a low-cost crowdsourced way to solve this problem.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_monitoring_covid_test.png)

### Browsing COVID-19 Testing Locations and Accessing via API

You can [browse the COVID-19 testing locations using the microsite setup by Postman](https://covid-19-apis.postman.com/covid-19-testing-locations/), and you can access [the COVID-19 testing location API using the documentation and Run in Postman button](https://documenter.postman.com/view/8854915/SzS7PR3t?version=latest). If you want to help work on adding COVID-19 testing locations for any of the states—there is an email to hit, and we’ll plug you in. If you want to build something on top of the API, you can grab any of the URLs from the Postman collection for accessing the COVID-19 testing location API published as part of this work.

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_covid_19_testing_locations.png)](https://covid-19-apis.postman.com/covid-19-testing-locations/)

If you want to learn more about the overall model I am using for crowdsourcing this data, feel free to ping us as well. I am still honing the overall approach. As I said earlier, I have an improved version of this data management collection driving a separate project, which I will talk about in a future post. Postman is also looking for other interesting projects involving public data, APIs, and the COVID-19 fight. I’ll end this post with an overview diagram of this process, which I hope can provide an open blueprint that could easily be replicated to serve other project that also use multiple Google Sheets as the data store.

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_data_api_blueprint_multiple_google_sheets.jpg)](https://covid-19-apis.postman.com/covid-19-testing-locations/how-it-works/)