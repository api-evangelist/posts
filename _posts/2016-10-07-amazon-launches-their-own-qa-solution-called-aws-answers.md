---
layout: post
title: Amazon Launches Their Own QA Solution Called AWS Answers
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/aws_answers_splat_1.png
atomdate: 2016-10-07T22:00:00.000Z
tags:
  - AWS
  - Amazon
---
[Amazon launched their own questions and answers site called simply called AWS Answers](https://aws.amazon.com/blogs/aws/aws-answers-architect-more-confidently-effectively-on-aws/). Amazon is definitely in a class of their own, but I thought the move reflects illnesses in the wider QA space and an approach that smaller API providers might want to consider for their operations.

Quora doesn't have an API, so why would we use as a QA solution for the API space? I don't care how much network they have. While Stack Overflow is a wealth of API related questions and answers, the environment has been found to be pretty toxic for some API providers. Making hand rolling your own QA site a more interesting option.

AWS answers is a pretty basic implementation but also has a wealth of valuable content. it wouldn't take much to handroll your own FAQ or wider answers solution within your [API developer portal](http://portal.minimum.apievangelist.com/). I can understand why AWS would do their own, to help ensure their users are able to find the answers they need, without leaving the AWS platform. It depends on the type of platform you are operating, but keeping QA local might make more sense than using 3rd party solutions--allowing for more precise control over the answers your customers receive.

As I work to expand my [API portal definition beyond just the minimum version](http://portal.minimum.apievangelist.com/), I'm adding a FAQ solution to the stack, and now I'm going to consider adding a separate answers solution modeled after [AWS Answers](https://aws.amazon.com/answers/). While I think platforms like Stack Overflow and Quora will continue to do well, I'm more interested in supporting API providers to roll their own solution, maybe even provide an API, and allow for more interoperability, and control over their own resources.