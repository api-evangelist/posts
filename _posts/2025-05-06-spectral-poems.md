---
published: true
layout: post
title: Spectral Poems
date: 2025-05-06T09:00:00.000Z
tags:
  - Poetry
  - Spectral
  - Rules
  - Words
  - Slow
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/francis-williams-an-me-store-front.jpeg
---
I was reading [The Restless Clock byJessica Riskin](https://press.uchicago.edu/ucp/books/book/chicago/R/bo21519800.html), and learned that in the early days of science they went through a phase where everything was described using poetry. I can’t help but feel like this is one of the reasons we’ve lost our way when it comes to computer science and APIs--we didn’t have a poetry phase. So, to help contribute to getting us on the right path, I’ve produced some Spectral poems.

```
  openapi-version-foul:
    description: A shadow forever cast over the land.
    message: Do not ever use Swagger you tool!
    severity: foul
    given: "$"
    then:
      field: swagger
      function: pattern
      functionOptions:
        match: 2.0

  do-you-have-an-info-title:
    description: You have brought another API into the world.
    message: But you cannot take the time to properly name it.
    severity: error
    given: "$.info"
    then:
      field: title
      function: falsy

  tell-me-what-you-are-doing-for-me:
    description: If your little project is so cool you should tell me about it.
    message: I do not need a novel, but share the story of why your API matters so much.
    severity: error
    given: "$.info"
    then:
      field: description
      function: falsy
```

One of the benefits of poetry is that we slow down and think about the words we use, which is a lost art in the realm of technology. The lack of words describing the human experience amidst all the work we each do on a daily causes so much friction, instability, and misalignment. I am confident that if we were just a little more thoughtful in how we craft the words we use around our APIs, we’d be so much more successful.