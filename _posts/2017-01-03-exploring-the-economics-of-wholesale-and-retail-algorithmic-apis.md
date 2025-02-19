---
layout: post
title: Exploring The Economics of Wholesale and Retail Algorithmic APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/algorithmia_pricing_how_it_works.png
atomdate: 2017-01-03T20:00:00.000Z
tags:
  - Wholesale
  - APIs
  - ai
---
I got sucked into [a month long project applying machine learning filters to video over the holidays](http://apievangelist.com/2017/01/03/learning-about-machine-learning-apis-with-my-algorithmic-rotoscope-work/). The project began with me doing the research on the economics behind Algorithmia's machine learning services, specifically [the DeepFilter algorithm in their catalog](https://algorithmia.com/algorithms/deeplearning/DeepFilter). My [algorithmic rotoscope](http://algorithmic.rotoscope.work) work applying Algorithmia's Deep Filters to images and drone videos has given me a hands-on view of Algorithmia's approach to algorithms, and APIs, and the opportunity to think pretty deeply about the economics of all of this. I think Algorithmia's vision of all of this has a lot of potential for not just image filters, but any sort of algorithmic and machine learning API.

**Retail Algorithmic and Machine Learning APIs**  
Using [Algorithmia](http://algorithmia.io) is pretty straightforward. With their API or CLI you can make calls to a variety of algorithms in their catalog, in this case [their DeepFilter solution](https://algorithmia.com/algorithms/deeplearning/DeepFilter). All I do is pass them the URL of an image, what I want the new filtered image to be called, and the name of the filter that I want to be applied. Algorithmia provides an API explorer you can copy & paste the required JSON into, or they also provide a demo application for you to use--no JSON required. 

**Training Your Own Style Transfer Models Using Their AWS AMI**  
The first "rabbit hole" concept I fell into when doing the research on Algorithmia's model was [their story on creating your own style transfer models](/admin/blog/blog.algorithmia.com/training-style-transfer-models/), providing you step by step details on how to train them, including a ready to go AWS AMI that you can run as a GPU instance. At first, I thought they were just cannibalizing their own service, but then I realized it was much more savvier than that. They were offloading much of the costly compute resources needed to create the models, but the end product still resulted in using their Deep Filter APIs. 

**Developing My Own API Layer For Working With Images and Videos**  
Once I had experience using Algorithmia's deep filter via their API, and had produced a handful of my own style transfer models, I got to work designing my own process for uploading and applying the filters to images, then eventually separating out videos into individual images, applying the filters, then reassembling them into videos. The entire process, start to finish is a set of APIs, with a couple of them simply acting as a facade for Algorithmia's file upload, download, and DeepFilter APIs. It provided me with a perfect hypothetical business for thinking through the economics of building on top of Algorithmia's platform.

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/algorithmia_pricing_how_it_works.png)](https://algorithmia.com/pricing)

**Defining My Hard Costs of Algorithmia's Service and the AWS Compute Needed**  
Algorithmia provides [a pricing calculator along with each of their algorithms](https://algorithmia.com/algorithms/deeplearning/DeepFilter), allowing you to easily predict your costs. They charge you per API call, and the compute usage by the second. Each API has its own calculator, and average runtime duration costs, so I'm easily able to calculate a per image cost to apply filters--something that exponentially grows when you are applying to 60 frames (images) per second of video. Similarly, when it comes to training filter models using AWS EC2 GUP instance, I have a per hour charge for compute, storage costs, and (now) a pretty good idea of how many hours it takes to make a single filter. 

All of this gives me some pretty solid numbers to work with when trying to build a viable business built on top of Algorithmia. In theory, when my customers use my algorithmic rotoscope image or video interface, as well as the API, I can cover my operating costs, and generate a healthy profit by charging a per image cost for applying a machine learning texture filter. What I really think is innovative about Algorithmia's approach is that they are providing an AWS AMI to offload much of the "heavy compute lifting", with all roads still leading back to using their service. It is a model that could quickly shift algorithmic API consumers to be more wholesale / volume consumers, from being just a retail level API consumer.

My example of this focuses on images and video, but this model can be applied to any type of algorithmically fueled APIs. It provides me with a model of how you can safely open source the process behind your algorithms as AWS AMI and actually drive more business to your APIs by evolving your API consumers into wholesale API consumers. In my experience, many API providers are very concerned with malicious users reverse engineering their algorithms via their APIs, when in reality, in true API fashion, there are ways you can actually open up your algorithms, make them more accessible, and deployable, while still helping contribute significantly to your bottom line.