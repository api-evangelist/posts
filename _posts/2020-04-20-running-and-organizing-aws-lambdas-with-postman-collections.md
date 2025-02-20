---
published: true
layout: post
title: Running and Organizing AWS Lambdas with Postman Collections
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_04_20_at_9.16.29_am.png
author:
  name: kinlane
tags:
  - Collection
  - Serverless
---
When it comes to deploying APIs with AWS infrastructure using a Postman collection, there were two things I couldn’t do purely with AWS APIs, which pushed me to create AWS Lambda functions that would get the job done. Demonstrating that I was going to be creating a growing number of Lambda functions that I was going to need to organize, retrieve, and execute regularly as part of my manual work, but also automated process, beginning with these two functions:

*   **[Create AWS RDS Aurora SQL Table](https://documenter.postman.com/view/10394726/Szf6Z9Kn?version=latest#42702fb3-00c3-401e-b371-8da9892a5bf7)** - There is no way to create a table using the AWS RDS API, so I created an AWS Lambda function that would let me pass in the table name and fields using environment variables, mounting the database and creating the table I needed.
*   **[Generate AWS Lambda Deployment Package](https://documenter.postman.com/view/10394726/Szf6Z9Kn?version=latest#0401abaa-2fe4-4915-99f5-9614c994c277)** - I was dynamically generating a lot of the code powering Lambdas, as well as the layers of Node.js dependencies they were using, so I created a Lambda script that would take files from an AWS S3 bucket and folder and generate a zipped up AWS Lambda deployment package.

[I then created myself a Postman collection simply named “utility lambdas”](https://documenter.postman.com/view/10394726/Szf6Z9Kn?version=latest#intro), until I begin to see other logical boundaries and buckets for the AWS Lambdas I am developing—then I’ll create some better named Postman collections. There is a single AWS Lambda API path for invoking a Lambda function which conveniently uses the name of the AWS Lambda as a path variable. So all you have to do is create an individual Postman request that authenticates with the AWS Lambda API, plug in the name of your function as a path variable, and environment variables via the body of the request. And BAM! You have a single Postman request for quickly running an individual AWS Lambda. Being able to create individual requests for each Lambda is great, but what I really like is being able to organize the via folders and collections, helping make them more browse-able and searchable via the interface I use daily—Postman.

I enjoying bending what a Postman collection is for in these ways. There is no reason I can’t have a collection full of 50 requests to the same API, as long as I am changing one path, query, header, or body parameter—then naming and describing each API request appropriately, and breaking down into meaningful, logical, and human readable folders. Sure, I can search for my functions via the AWS Lambda console, but that means I remember the Lambda exists in the first place. Having Postman collections of my Lambdas organized into workspaces and collections, making calls to the AWS Lambda API to invoke specific functions makes my Lambda functions more tangible and usable, within the environment I am already working each day—[Postman](https://www.postman.com/).