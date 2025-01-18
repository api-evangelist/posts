---
layout: post
title: Lots Of Talk About Machine Learning Marketplaces
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_12_at_1.24.18_pm.png
atomdate: 2017-03-13T16:00:00.000Z
tags:
  - Marketplace
  - Machine Learning
  - Marketplaces
  - Learning
---
I spent last week in San Francisco listening to Google's very machine learning focused view of the future. In addition to their Google Next conference, I spent Tuesday at the Google Community Summit, getting an analyst look at what they are up to. Machine Learning (ML) was definitely playing a significant role in their strategy, and I heard a lot talk of machine learning marketplaces.

Beyond their own ML offerings like [video intelligence](https://cloud.google.com/video-intelligence/) and [vision APIs](https://cloud.google.com/vision/), Google also provides you with [an engine for publishing your own ML models](https://cloud.google.com/blog/big-data/2016/09/google-cloud-machine-learning-now-open-to-all-with-new-professional-services-and-education-programs). They also have a [machine learning advanced solution lab](https://cloud.google.com/asl/), throwing a [machine learning hackathon](https://cloudplatformonline.com/Machine-Learning-Startup-Competition.html), and pushing a [machine learning certification program](http://cloud.google.com/certification) as part of their cloud and data offerings. As the Google machine learning roadmap was being discussed throughout the day, the question of where can I publish my ML models, and begin selling them, came up regularly--something I feel like is going to be a common theme of the 2017 ML hype.

I'm guessing we will see a relationship between the Google ML engine, Google Cloud Endpoints emerge, and eventually some sort of ML marketplace like we have with [Algorithmia](https://algorithmia.com/). We are already seeing this shift in the AWS landscape, between their Lambda, ML, API Gateway, and AWS Marketplace offerings. You see hints of the future in [the AWS serverless API portal](http://apievangelist.com/2017/02/28/the-aws-serverless-api-portal/) I wrote about previously. [The technology, business, and politics of providing retail and wholesale access to algorithms and machine learning models in this way fascinates me](http://apievangelist.com/2017/01/03/exploring-the-economics-of-wholesale-and-retail-algorithmic-apis/), but as with every other successful area of the API economy, about 90% of this will be shit, and 10% will be actually doing anything interesting with compute and APIs.

[I'm doing all my image and video texture transfer machine learning model training using AWS and Algorithmia](http://algorithmic.rotoscope.work/2017/01/03/learning-about-machine-learning-apis-with-my-algorithmic-rotoscope-work/). I then use Algorithmia to get access to the models I've trained, and if I ever want to open up partner level (wholesale), or public (retail) access to my ML Models I will use Algorithmia, or an API facade on top of their API to open up access, and make available in the [Algorithmia ML marketplace](https://algorithmia.com/algorithms). I'm guessing at some point I will want to syndicate my models into other marketplace environments, with giants like Google and AWS, but also other more niche, specialty ML marketplaces, where I can reach exactly the audience I want.