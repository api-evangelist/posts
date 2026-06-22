---
published: true
layout: post
title: Selfish Standardization Using JSON-LD for Job Postings
date: 2025-09-26T09:00:00.000Z
tags:
  - Search
  - Scraping
  - Standardization
  - JSON-LD
  - Jobs
  - Careers
image: https://kinlane-images.s3.amazonaws.com/shared/leaflets-of-the-russian-revolution-new-and-old-building.jpeg
---
I have become an API standards realist over the years. Yes I believe we should all strive for a common good through the standardization of APIs, but I’ve become all to aware of the misalignment of incentives out there across different companies and industries when it comes to why we standardize. In short, people rarely standardize for the greater good. They standardize for their own selfish needs. You can see this in action when it comes to the standardization of job posting--as in the job posting company publish on their sites to find new employees. 

Job postings are a great place to understand what is happening at a company. Job postings are an output from a largely black box system which you can use to understand a corporate system. The challenge is, those companies rarely ever want you to tune into the job posting signals in any automated way. I took 15 companies job posting websites, which none of them had a feed or API, and set to scrape the content. Half had robots.txt and Cloudflare blocking from crawling, with the others possessing a mix of HTML, JavaScript, and pagination complexifying how a simple HTML listing of jobs is rendered, attempting to keep people like me out.

However, once you resolve all of the URLs to the thousands of job postings across all 15 companies, they ALL have a JSON-LD “API” embedded in the header of the detail page for a job. The scrape script for all the job listings were 100% custom for each company, and the scrape script for the job posting pages was 100% the same for all the job postings. There are so many lessons here when it comes to how we standardize. Why we standardize. We only standardize for what we want. We don’t standardize for the greater good. For those us trying to widen the standardization of data and APIs, we must understand what the incentives and motivations are, and stop pretending everyone will just want to standardize for the greater good.