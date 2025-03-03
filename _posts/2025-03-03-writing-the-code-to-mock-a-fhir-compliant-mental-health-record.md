---
published: true
layout: post
title: Writing the Code to Mock a FHIR Complian Mental Health Record
tags:
  - FHIR
  - Healthcare
  - Mental Health
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/copper-circuit-new-york-high-up.jpg
---
The Fast Healthcare Interoperability Resources (FHIR) provides a standardized way to make healthcare records more interoperable across different healthcare providers. Having 




const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());

const getPosts = require('./paths/getPosts.js');
app.use('/posts', getPosts);

app.listen(5800, () => {
  console.log('Server listening on port 5800');
});

