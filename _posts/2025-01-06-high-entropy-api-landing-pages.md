---
published: true
layout: post
title: High Entropy API Landing Pages
tags:
  - Entropy
  - Disorder
  - Chaos
  - Cognitive Load
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/leaflets-of-the-russian-revolution-docks-water-front-ships-containers.jpg
---
According to [Claude Shannon’s Mathematical Theory of Communication](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf) for a message to be properly received the entropy needs to be low. Think of high entropy as when the board on the game show Wheel is Fortune first comes up with very view letters exposed, and low entropy as being when more letters are revealed and you can begin to guess what the phrase is. Entropy is disorder and chaos, [some simply define it as ignorance](https://www.quantamagazine.org/what-is-entropy-a-measure-of-just-how-little-we-really-know-20241213/), but an increasing number of API land pages I come across possess dangerously high levels of entropy, leaving consumers scratching their head about what each API actually does.

API documentation plays an important role in helping people understand what an API does, but the API design and artifacts will also play an equal role in increasing or reducing the entropy levels. The best way to test your API entropy levels is to take your OpenAPI (you have one right?) and write a little script that lists just the summary + descriptions for each operation as a single bulleted list. Now does the list make sense to the human eye? Can you read down the bulleted list and understand what it does? If not then the entropy is too high for normal human to comprehend.

In short, Entropy means disorder and chaos. High entropy means your API is not coherent and understandable at first review. Low entropy means your API is speaking a common language than most people can understand with minimal work and cognitive load. It takes work to reduce the entropy of HTTP API design, as well as the supporting API documentation, SDKs, and sandboxes. The cost of developing applications and integrations on high entropy APIs goes up significantly, and high entropy API landing pages will run off new customers before they even get started. 