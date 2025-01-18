---
layout: post
title: Every Form Should Be An API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/example-form.png
author:
  name: kinlane
tags: []
---
I'm working on an [API design for the free application for federal student aid form](http://ed-data.github.io/fafsa-api/index.html), also known as FAFSA, over the last couple weeks. I took [the form](http://www.fafsa.ed.gov/fotw1314/pdf/PdfFafsa13-14.pdf) which had over 150 separate fields, and turned into a basic create, read, update and delete (CRUD) API. I even added an endpoint that allows you to query and get a list of the fields.

The project is a proof of concept to show the Department of Education what is possible around a FAFSA API. I'm not sure if the API will ever be deployed or adopted by the Department of Education or if by other 3rd party providers, establishing a sort of federated FAFSA API network. My goal is to just generate the API definition with supporting server and client side tooling, to show what is possible.

As I assess my work over the last couple weeks on FAFSA, I can't help but think how this should be standard practice for all forms. If you do a simple search at google for "[forms](https://www.google.com/search?q=forms&oq=forms&aqs=chrome.0.69i59j69i65j69i60l3j69i59.752j0j4&sourceid=chrome&espv=210&es_sm=91&ie=UTF-8)", you get IRS forms, immigration, legal, voter registration and yes the FAFSA forms. It is clear that forms still dominate our lives--print and PDF.

I'm thinking that simple, open designs and tooling around forms would help us continue evolve the concept of the "form" beyond the just the PDF. Sure the PDF still has a place, and some tooling can work with consuming and publishing as PDF, but APIs could help us innovate around what is a form, how users enter their data into them, and take advantage of newer technologies like tablets.

In my opinion, every form should be an API. If you'd like help developing a new form as an API or evolving an older print or PDF form as an API, feel free to [reach out](http://kinlane.com/contact/).