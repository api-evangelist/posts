---
published: true
layout: post
title: Postman API Reference and Capability Collections
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/bf-skinner-docks-water-front-ships-containers.jpg
author:
  name: kinlane
tags:
  - Reference
  - Capabilities
  - Collections
---
### An AWS EC2 Reference Collection

An example of a Postman reference API collection can be found in [the collections I worked on leading up to AWS re:Invent last December](https://github.com/api-evangelist/aws). One of the reference API collections I have been crafting is for the [Amazon EC2](https://aws.amazon.com/ec2/), providing a portable and executable collection of all API requests possible for the cloud compute platform. The AWS EC2 reference collection has over 350 individual requests possible in, providing a dizzying amount of control over delivering, operating, and evolving compute capacity across AWS regions. While this collection a robust representation of all the available AWS EC2 resources, it will take additional work to understand what is possible, find the specific request needed for any particular integration or application, and populate the request with relevant values to realize any specific business need. It is a great start when it comes to putting AWS EC2 to work, but to make things more usable, it will take a little more work.

### An Amazon EC2 Capability Collection

This AWS EC2 reference collection provides a foundation for delivering integrations and applications, and can be used as a seed for a different type of API collection I like to call "capability collections". These capability collections involve further populating individual API requests with specific parameters, headers, and body payload values that accomplish a specific business task. An example of this could be [taking the run instance request](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) and pre-populate it with a specific EC2 instance type and pre-built base image for deployment, accomplishing a more precise goal when it comes to deploying and running a specific type of AWS EC2 instance. Establishing a single collection with one or more precise API requests that can deliver on a single organizational capability which any individual with the proper access can execute. Keeping the collection very focused on a single or suite of complimentary capabilities that make the AWS EC2 Run Instance action more about representing business capabilities, then just being a generic technical interface for use in many different scenarios.

### Collections Defining Organizational Capabilities

This is just one example of the evolutionary difference between reference Postman API collections and capability Postman API collections. Both play a significant role in making API integration as frictionless as possible, but the capability Postman collections go the extra difference to define and enable specific organizational capabilities. Defining a single digital capability of an organization, then grouping complimentary capabilities into meaningful folders, collections, and workspaces, making them available across technical and non-technical teams. Defining organizational capabilities as portable sharable units of compute that can be made accessible and discoverable across distributed groups, and put to work manually via the Postman platform, 3rd party tools, or automated as part of scheduled and CI/CD pipelines. Properly defining what an organization is capable of, and further defining that down to each line of business, department, and team—ensuring that an organization has firm grasp on what it is capable of at any moment.

Postman collections exist to help developers keep track of the growing number of API requests they will need to make on any given day, across each of the projects they are working on. Reference collections are all about making sure enterprise API infrastructure is properly defined, versioned, and made available across teams. Capability Postman API collections are about atomically defining what each individual API resource is capable of doing in a way that makes sense, is accessible, and executable by both developer and business users. Postman reference API collections represent what is possible across operations, and Postman capability API collections represents going beyond what is possible, and actually putting each individual capability to work—manually by running a collection within Postman client, scheduled as a monitor, or integrated into existing CI/CD workflows by using the Postman runner. Defining what organizations are capable of as they continue to invest in their digital transformation, and get more organized about how they do business within the expanding and shifting global API economy.