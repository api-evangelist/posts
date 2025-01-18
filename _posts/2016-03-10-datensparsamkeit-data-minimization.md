---
layout: post
title: 'Datensparsamkeit: Data Minimization'
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-data-distillation.png
tags:
  - Data
---
[I am borrowing from the very prescient post from Martin Fowler](http://martinfowler.com/bliki/Datensparsamkeit.html), an older post, but is a topic that should be revisited regularly. Google translate tells me Datensparsamkeit means "data minimization". I prefer Fowler's translation:

_It's an attitude to how we capture and store data, saying that we should only handle data that we really need._

My partner in crime Audrey Watters ([@audreywatters](https://twitter.com/audreywatters)) sent me the link, and expressing that it was very telling that we (United States) do not have a word that applies for this concept. I think data minimization gets the point across, but I think Fowler elevates it from being just a data process, to something that should be rooted in company culture.

I am adding Datensparsamkeit as a building block to any area of the API life cycle that will potentially store data. The goal is to help API platforms consider  how they capture and store data at the strategy level, as well as tactically at every stop along the API life cycle, and only capture and store exactly what you need, and nothing more.

Just because cloud storage is cheap doesn't mean we should capture and store everything we can--just because we can, doesn't mean we sould. [Data can just as easily be a liability as it can be an asset](http://boingboing.net/2015/09/11/data-is-a-liability-not-an-as.html), and your machinations around there being an all knowing, all seeing big data future are pure fantasy. The real trouble becomes clear when you realize that the majority of the tech sector, and the NSA, kind of enjoy living in this fantasy world.