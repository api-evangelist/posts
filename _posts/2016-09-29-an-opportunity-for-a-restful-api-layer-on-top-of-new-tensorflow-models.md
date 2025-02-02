---
layout: post
title: An Opportunity For A RESTful API Layer On Top Of New TensorFlow Models
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/tensorflow.jpg
atomdate: 2016-09-30T00:00:00.000Z
tags:
  - REST
---
I was looking [the open source models available for execution via the machine learning platform TensorFlow](/admin/blog/autoencoder -- various autoencoders inception -- deep convolutional networks for computer vision namignizer -- recognize and generate names neural_gpu -- highly parallel neural computer privacy -- privacy-preserving student models from multiple teachers resnet -- deep and wide residual networks slim -- image classification models in TF-Slim swivel -- the Swivel algorithm for generating word embeddings syntaxnet -- neural models of natural language syntax textsum -- sequence-to-sequence with attention model for text summarization. transformer -- spatial transformer network, which allows the spatial manipulation of data within the network im2txt -- image-to-text neural network for image captioning.), and couldn't help but think there is a pretty big opportunity for a web API layer on top of it. After a little Googling, I see there is someone asking on [Stack Overflow](ttp://stackoverflow.com/questions/34036689/example-for-deploying-a-tensorflow-model-via-a-restful-api), [Google Groups](https://groups.google.com/a/tensorflow.org/forum/#!topic/discuss/00-XOWAD4S0), and [a student project to tackle the need](https://github.com/Irtza/tensorflow_Server). Maybe there are some other projects out there already in the works, but I couldn't find anything with 10 minutes of Googling (mad skills).

[Google has twelve pretty compelling machine learning models available on Github](https://github.com/tensorflow/models):

*   [autoencoder](https://github.com/tensorflow/models/blob/master/autoencoder) -- various autoencoders
*   [inception](https://github.com/tensorflow/models/blob/master/inception) -- deep convolutional networks for computer vision
*   [namignizer](https://github.com/tensorflow/models/blob/master/namignizer) -- recognize and generate names
*   [neural\_gpu](https://github.com/tensorflow/models/blob/master/neural_gpu) -- highly parallel neural computer
*   [privacy](https://github.com/tensorflow/models/blob/master/privacy) -- privacy-preserving student models from multiple teachers
*   [resnet](https://github.com/tensorflow/models/blob/master/resnet) -- deep and wide residual networks
*   [slim](https://github.com/tensorflow/models/blob/master/slim) -- image classification models in TF-Slim
*   [swivel](https://github.com/tensorflow/models/blob/master/swivel) -- the Swivel algorithm for generating word embeddings
*   [syntaxnet](https://github.com/tensorflow/models/blob/master/syntaxnet) -- neural models of natural language syntax
*   [textsum](https://github.com/tensorflow/models/blob/master/textsum) -- sequence-to-sequence with attention model for text summarization.
*   [transformer](https://github.com/tensorflow/models/blob/master/transformer) -- spatial transformer network, which allows the spatial manipulation of data within the network
*   [im2txt](https://github.com/tensorflow/models/blob/master/im2txt) -- image-to-text neural network for image captioning.

That would make a pretty stellar machine learning API stack, with a simple, intuitive, RESTl wrapper. Once done it seems like there would also be a pretty big opportunity for containerized deployment of these machine learning APIs, on a wholesale basis. [I'm still not sure how the whole open source code to commercial API implementation model will work](http://apievangelist.com/2015/12/02/what-licensing-should-i-be-considering-when-i-take-open-source-software-and-offer-up-as-an-api/), but I'm sure there is some money to made in there somewhere--at least when it comes to implementation and support.

I will add to the list of open source software I'd like to see have an accompanying web API, as well as containerized, or even serverless implementation. It makes me happy that Google is helping commoditize machine learning by open sourcing their tools, but I'd also like to see them further simplified and polished for consumption by a wider developer, or even non-developer audience, using web APIs.