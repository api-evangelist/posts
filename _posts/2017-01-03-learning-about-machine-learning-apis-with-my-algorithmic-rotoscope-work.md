---
layout: post
title: Learning About Machine Learning APIs With My Algorithmic Rotoscope Work
image: >-
  http://kinlane-productions2.s3.amazonaws.com/algorotoscope/valleyrivertreeline/clean_view/file-00_01_06_83.jpg
atomdate: 2017-01-03T17:00:00.000Z
tags:
  - My
  - Machine Learning
  - APIs
  - Learning
---
[![](http://kinlane-productions2.s3.amazonaws.com/algorotoscope/valleyrivertreeline/clean_view/file-00_01_06_83.jpg)](http://algorithmic.rotoscope.work)

I was playing around with [Algorithmia](https://algorithmia.com) for a story about their business model back in December, when I got sucked into playing with their [DeepFilter service](https://algorithmia.com/algorithms/deeplearning/DeepFilter), resulting in a 4-week long distraction which ultimately became what I am calling my [algorithmic rotoscope](http://algorithmic.rotoscope.work) work. After weeks of playing around, I have a good grasp of what it takes to separate videos into individual images, applying the Algorithmia machine learning filters, and reassembling them as videos. I also have several of my own texture filters created now using [the AWS AMI and process provided Algorithmia](http://blog.algorithmia.com/training-style-transfer-models/)\--you can [learn more about algorithmic rotoscope, and details of what I did via the Github project updates](http://algorithmic.rotoscope.work/updates/)e.

The project has been a great distraction from what I should be doing. After the election, I just did not feel like doing my regular writing, scheduling of Tweets, processing of press releases, and the other things I do on a regular basis. Algorithmic Rotoscope provided a creative, yet a still very API focused project to take my mind off things during the holidays. It was a concept I couldn't get out of my head, which is always a sign for me that I should be working on a project. The work was more involved than I anticipated, but after a couple weeks of tinkering, I have the core process for applying filters to videos working well, allowing me to easily apply the algorithmic textures.

Other than just being a distraction, this project has been a great learning experience for me, with several aspects keeping me engaged:

*   **[Algorithmia's Image Filters](https://algorithmia.com/algorithms/deeplearning/DeepFilter)**  - Their very cool DeepFilter service, which allows you to apply artistically and stylish filters to your images using their API or CLI, providing over 30 filters you can use right away.
*   **[Training Style Transfer Models](http://blog.algorithmia.com/training-style-transfer-models/?ref=demo) -** Firing up an Amazon GPU instance, look through art books and find interesting pieces that can be used to train the machine learning models, so you can define your own filters.
*   **[Applying Filters To Images](http://image.rotoscope.work/)** - I spent hours playing with Algorithmia's filters, applying to my photo library, experimenting, and playing around with what looks good, and what is possible.
*   **[Applying Filters To Videos](http://algorithmic.rotoscope.work/)** - Applying Algorithmia's, and my own filters video I have laying around, especially what is possible when applied to the GB's of drone video I have laying around, something that is only going to grow.

Why is this an API story? Well, first of all, it uses the Algorithmia API, but I also developed the separation of the videos, applying filters to images, and reassembling the videos as an API. It isn't anything that is production stable, but I've processed thousands of images, many minutes of video, and made over 100K API calls to Algorithmia. Next, I am going to write-up Algorithmia's business model, using my algorithmic rotoscope work as a hypothetical API-driven business--helping me think through the economics of building a SaaS or retail API solution on top of Algorithmia. 

Beyond being an API story, it has been a lot of fun to engineer, and play with. I still have a GPU instance fired up, training filters, as well as recording more drone and other video footage specifically so I can apply some of the new filters I've produced. I have no intention of doing it as a business. algorithmic rotoscope is just a side project, that I hope will continue to be a creative distraction for me, and give me another reason to keep flying drones, and getting away from the computer when I can. In the end I am learning a lot about drones, videography, and machine learning, but the best of all it has helped me regain my writing mojo--with this being the first post I've written on API Evangelist since LAST YEAR! ;-)