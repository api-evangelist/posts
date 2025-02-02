---
published: true
layout: post
title: DevOps Azure Style
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/containership-containership-copper-circuit.jpg
author:
  name: kinlane
tags:
  - DevOps
  - Pipelines
  - CI/CD
---
I am spending time thinking more deeply about how APIs can be delivered via Azure. I spent much of the holidays looking at how to deliver APIs on AWS, but only a small amount of time looking at Azure. I'm looking at how Azure can be used for the development and delivery of APIs, trying to understand the different ways you can use not just Azure for managing APIs, but also use Azure APIs for managing your APIs. Next up is Azure DevOps, and learning more about the nuts and bolts of how the orchestration solution allows you to streamline and stabilize the delivery of your API infrastructure using Azure.

First, I want to just break down what the core elements of [Azure Devops](https://azure.microsoft.com/en-us/services/devops/). Learning more about how Azure sees the DevOps workflow and how they have provided a system to put their vision to work. Here are the main elements of Azure DevOps that help us understand the big picture when it comes to mapping to your API life cycle.

*   **[Azure DevOps Server](https://azure.microsoft.com/en-us/services/devops/server/)** - Share code, track work, and ship software using integrated software delivery tools, hosted on-premises
*   [**Azure Boards**](https://azure.microsoft.com/en-us/services/devops/boards/) \- Deliver value to your users faster using proven agile tools to plan, track, and discuss work across your teams.
*   **[Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/)** - Build, test, and deploy with CI/CD that works with any language, platform, and cloud. Connect to GitHub or any other Git provider and deploy continuously.
*   **[Azure Repos](https://azure.microsoft.com/en-us/services/devops/repos/)** - Get unlimited, cloud-hosted private Git repos and collaborate to build better code with pull requests and advanced file management.
*   **[Azure Test Plans](https://azure.microsoft.com/en-us/services/devops/test-plans/)** - Test and ship with confidence using manual and exploratory testing tools.
*   **[Azure Artifacts](https://azure.microsoft.com/en-us/services/devops/artifacts/)** - Create, host, and share packages with your team, and add artifacts to your CI/CD pipelines with a single click.
*   **[Azure DevTest Labs](https://azure.microsoft.com/en-us/services/devtest-lab/)** - Fast, easy, and lean dev-test environments

Not every API implementations will use all of these elements, but it is still nice to understand the big picture. Depending on how your team will be developing and delivering your APIs, and the applications they serve you will be applying Azure DevOps elements in different ways. Another important dimension can be found on their DevOps integration page, which demonstrates how you can choose to replace some of the elements here with existing CI/CD solutions like Jenkins, as well as infrastructure configuration, orchestration and automation solutions like Ansible and Terraform. Additionally you can put one of the [Azure DevOps extensions](https://marketplace.visualstudio.com/azuredevops) to work, augmenting these elements with community driven solutions. I'd love to eventually see Postman added to integration page, as well as added as one or more extensions, allowing it to be used as a seamless player in Azure DevOps ecosystem.

Next I am diving into different ways you can use Azure DevOps with Postman. There are quite a few tutorials out there walking through how to use Postman with Azure DevOps. So why reinvent the wheel here. I am just going to find the best community approaches to using Azure DevOps and Postman, highlighting the great work of our community when it comes to Postman-driven DevOps on the Azure platform. This is one of the things I love about being part of the Postman team--there is such a compassionate community of users, you can find people who are doing interesting things across almost every platform and solution, complete with a detailed walkthrough on how to make it all work.