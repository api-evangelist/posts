---
layout: post
title: API Deployment For Non-Developers Using Zapier, Google Docs, and APISpark
url: >-
  http://apievangelist.com/2014/07/16/api-deployment-for-nondevelopers-using-zapier-google-docs-and-apispark/
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/zapier-google-docs-api-spark.png
author:
  name: kinlane
tags:
  - Deployment
  - Zapier
  - Docs
  - Developers
---
I’m exploring different ways that APIs can be deployed, with an emphasis on deployment by non-developers. There are numerous cloud services available, that allow non-developers to execute common business tasks like registration forms, [surveys](https://zapier.com/zapbook/surveymonkey/google-docs/18382/surveymonkey-new-response-to-google-docs-create-spreadsheet-row/), payments, and product sales, and when you combine these business functions with [Zapier](https://zapier.com/app/dashboard), Google Docs and [APISpark](https://apispark.com/)—you can deploy an API, no code skills required.

This story begins with the [ability to deploy an API from any Google Spreadsheet using APISpark](http://apievangelist.com/2014/06/30/deploy-an-api-from-a-google-spreadsheet-using-apispark/), putting API deployment within the grasp of the average business user. Next, I want the easiest possible way to get data, from multiple sources, into a Google Spreadsheet? Answer: [Zapier](https://zapier.com/app/dashboard) (or [other reciprocity provider](http://reciprocity.apievangelist.com/companies.html), like [IFTTT](https://ifttt.com/)).  To support this, I started looking through the numerous Zapier recipes, that allow my me to publish results to a Google Spreadsheet—there are 167!

The most obvious [data source I see is Twitter](https://zapier.com/zapbook/twitter/google-docs/4396/add-tweets-to-google-docs-row/). Everyone time there is a Tweet from specific user, or from a specific Twitter search, you can have it published to a Google Spreadsheet, and when you have that spreadsheet connected to an APISpark API, the results will be automatically available via API.

The second most common source of data I see, would be cloud based forms. I see providers like [Wufoo](https://zapier.com/zapbook/wufoo/google-docs/4905/save-wufoo-entry-to-google-docs-row/), [Gravity Forms](https://zapier.com/zapbook/gravity-forms/google-docs/16647/save-gravity-forms-submission-to-google-spreadsheet/), and [JotForm](https://zapier.com/zapbook/jotform/google-docs/3379/add-jotform-submission-to-google-docs-row/), to name a few, that allow you to submit form submissions to any Google Spreadsheet, and with the APISpark integration, all your form submissions are automatically available via API.

After that, I see numerous [commerce](https://zapier.com/zapbook/woocommerce/google-docs/23762/woocommerce-new-order-to-google-docs-create-spreadsheet-row/), [payment](https://zapier.com/zapbook/paypal/google-docs/1421/add-paypal-sales-google-docs-spreadsheet-row/)s, and other key business functions, that Zapier enables publishing of data and content into a Google Spreadsheet from. All of these services have APIs, that is why Zapier is able to do what they do, but that would require a developer to tackle with custom API integration (not for this story). This story is all about enabling non-developers to deploy APIs, from common business functions, no coding necessary--Zapier is our middleman.

Beyond Twitter, forms, payments, and product sales, I will explore other easy to implement, API deployment using Zapier, Google Docs, and APISpark. These represent API deployment scenarios I don't think people are tracking on, and with a little education, I think we can bring problem owners up to speed, and increase the number of APIs available, driven by average person, and the common business problems they face every day.

_**Disclosure:** APISpark is an API Evangelist partner._