---
published: true
layout: post
title: A Minimum Viable APIs.json File For Your APIs
image: https://s3.amazonaws.com/kinlane-productions2/apis-json/apisdotjson.png
author:
  name: kinlane
tags:
  - APIs.json
  - APIs
  - APIs.jso
---
[![](https://s3.amazonaws.com/kinlane-productions2/apis-json/apisdotjson.png)](http://apisjson.org/)

I'm continuing my work to [help people understand what APIs.json is](http://apievangelist.com/2015/02/04/what-exactly-is-api-commons/), and the varying ways that it can be put to use. My post the other day, [breaking down Fitbits APIs.json file](http://apievangelist.com/2015/01/31/breaking-down-the-fitbit-apisjson-file/) is a good example of where to get started, but I wanted to help further set the bar for a minimum viable APIs.json.

APIs.json starts with a basic set of descriptions of who you are, the API provider. Each header of an APIs.json file gives you a handful of parameters for describing who you are:

*   **name** - your individual or company name, who is managing the APIs.json file.
*   **description** - a description of your company and / or the API collection you are building.
*   **image** - an image, logo, or icon that describes yourself or your company.
*   **tags** - a handful of key words and phrases that describe your API collection.
*   **created** - the first date in which an APIs.json file was created.
*   **modified** - the last date in which an APIs.json file created.
*   **url** - The url of where the APIs.json lives, allowing your file to be portable.

Those seven parameters provide details on who you are, and what the API collection is all about. Remember an API collection doesn’t always have to live under a specific company domain, it could be a temporary or more permanent collection, which is part of specific project or application.

The next essential element of an APIs.json file, is the APIs collection, providing you the ability to describe one or many APIs as part of this collection. Similar to the parameters provided for the header, each API entry is allowed a handful of parameters that describe the API:

*   **name** - the name of the API.
*   **description** - a description of the value an API delivers.
*   **image** - an image, logo, or icon that describes an API.
*   **tags** - a handful of key words and phrases that describe the API itself.
*   **humanURL** - The url any human should visit to learn more about an API.
*   **baseURL** - The base url any machine should follow to start using an API.

Each API should have at least this information, at a minimum. I could stop here, with my minimum viable APIs.json definition, but I encourage you to take one more step, and put the properties collection to use for each of your API. Using the properties collection, you can provide any other URL you want for an API--I recommend starting with four basic properties:

*   **X-documentation** - Where the documentation resides for the API.
*   **X-signup** - Where a user can signup to use an API.
*   **X-pricing** \- What is the pricing for using an API.
*   **X-tos** \- Where do I find the legalize behind AP operations.

Ultimately you can define any property you wish for an API, but recommend with these essential building blocks that all API consumers will need. After that each API has a contact collection, allowing you to provide some basic support for API operations:

*   **FN** - The name of person to contact.
*   **email** - The email address to contact.
*   **X-twitter** \- A twitter user for the API.

These contact properties, follow the [vCard format](https://en.wikipedia.org/wiki/VCard), and provide what API consumers will need to get support for an API. The same properties are available again for the overall APIs.json file, as a maintainers collection, which provide contact information for the overall APIs.json maintainer. This will often be a duplicate of information for each API, but allows for ultimately flexibility in aggregating many disparate APIs, into a single collection.

That is it. That is a minimum viable APIs.json definition. We now know who maintains the collection, and essential details about API operations. This goes well beyond just the technical definition of an API, and provides essential business and political elements of API operations, that all API consumers will need to be informed of, and are something that developers will often overlook.

With an [APIs.json file](http://apisjson.org/), [open source API search engines like APIs.io](http://apis.io/) will be able to index your APIs, and any API directory like [ProgrammableWeb](http://programmableweb.com) can do the same. The definition of your API(s) is now machine readable, and is portable, allowing this definition to live on any website, or within any desktop, web or mobile application.