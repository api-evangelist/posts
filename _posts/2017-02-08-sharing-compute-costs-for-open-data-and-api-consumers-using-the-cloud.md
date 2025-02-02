---
layout: post
title: Sharing Compute Costs For Open Data And API Consumers Using The Cloud
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_02_08_at_8.18.41_am.png
atomdate: 2017-02-08T17:00:00.000Z
tags:
  - Cloud
  - Data
  - Compute
  - Open Data
  - Consumers
  - Sharing
  - Open
  - Consumer
  - Costs
---
[I recently wrote about how Algorithmia offloads the compute costs around machine learning using AWS](http://apievangelist.com/2017/01/03/exploring-the-economics-of-wholesale-and-retail-algorithmic-apis/), structuring their image style transfer modeling so that the consumer pays the cost for deploy an AWS GPU instance. It is an interesting way to shift the burden of paying for the hard costs around API operations.

Another interesting approach I extracted from a story I wrote yesterday is from [Amazon Web Services (AWS) with their approach to open data](https://aws.amazon.com/government-education/open-data/). Amazon Public Datasets are available as Amazon Elastic Block Store (Amazon EBS) snapshots and/or Amazon Simple Storage Service (Amazon S3) buckets. AWS hosts the master copy of the dataset, and when you want to use, you fire it up in your AWS account, and get to work.

I find some of these approaches to managing, and offloading the heavy costs of working with algorithms, datasets, and other resources interesting. I especially find this approach interesting because it is in the service of public data, providing an option for how the private sector can help share the load in managing government, research, and other public data, and offloading the heavy costs to those who are going to put the data to use. 

I will figure out how to add this into my API [monetization](http://monetization.apievangelist.com/) and [plan](http://plans.apievangelist.com/) research. Providing a list of these types of approaches to providing on-premise, wholesale, and containerized or virtualized approaches to making data, content, and algorithms available. I will definitely keep looking for unique approaches to API deployment like this--after a couple of these grabbing my attention, I'm feeling like I am seeing another shift in both the technology and business of how we deploy and consume APIs.