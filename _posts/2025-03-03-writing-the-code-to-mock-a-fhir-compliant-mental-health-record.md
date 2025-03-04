---
published: true
layout: post
title: Writing the Code to Mock a FHIR Compliant Mental Health Record
tags:
  - FHIR
  - Healthcare
  - Mental Health
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/purple-circuit-old-chair-hopsital.jpg
---
[The Fast Healthcare Interoperability Resources (FHIR)](https://fhir.org/) provides a standardized way to make healthcare records more interoperable across different healthcare providers. Healthcare interoperability is essential to ensuring people are getting the help they need, when they need it. To help demonstrate the potential of the FHIR specification to mock a mental health behavior record by writing the code for a simple Node.js API.

## Writing the Server Code
To return a FHIR mental health behavior record we are using Node.js express to return a simple FHIR compliant JSON response for the discharge of a patient who is getting treatment.

```
var express = require("express");
var app = express();

var record = {
  "resourceType": "DocumentReference",
  "id": "mental-health-discharge-summary",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/us/bhp/StructureDefinition/mental-health-clinical-notes"
    ]
  },
  "status": "current",
  "type": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "78263-1",
        "display": "Mental Health Discharge Summary"
      }
    ],
    "text": "Mental Health Discharge Summary"
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
          "code": "clinical-note",
          "display": "Clinical Note"
        }
      ],
      "text": "Clinical Note"
    }
  ],
  "subject": {
    "reference": "Patient/bh-patient-example",
    "display": "Max Taber"
  },
  "date": "2025-03-03",
  "author": [
    {
      "reference": "Practitioner/mental-health-provider",
      "display": "Dr. Mildred Ratched"
    }
  ],
  "content": [
    {
      "attachment": {
        "contentType": "text/plain",
        "data": "Tm8gYWN0aXZpdHkgcmVzdHJpY3Rpb24sIHJlZ3VsYXIgZGlldCwgZm9sbG93IHVwIGluIHR3byB0byB0aHJlZSB3ZWVrcyB3aXRoIHByaW1hcnkgY2FyZSBwcm92aWRlci4="
      }
    }
  ]
};

app.get("/discharge", (req, res) => {
  res.json(record);
});

var port = 3000;
app.listen(port, () => {
  console.log('Server is running on http://localhost:' + port);
});
```
This code provides the server-side implementation that will return a discharge record for a patient that is FHIR compliant, but now let's write the code for the mental health system that will be calling our API to pull the discharge record.

## Writing Client Code
For our system that will be pulling the discharge record we are also going to be using JavaScript, using Fetch will allos us to make a remote API call to the mocked FHIR server and process the discharge record.
```
const options = {
  method: 'GET',
  headers: {
  "Content-Type": "application/json"            
  }        
};

var api_url = 'http://localhost:3000/discharge';
fetch(api_url, options)
.then(function (response) {
    if (!response.ok) {
      console.log(response.status);
      // HANDLE STATUS CODES
    }
    response.json().then(function (response) {
    if(response.status == "current"){
        // INSERT CURRENT RECORD
    }
    else{
      // HANDLE ALTERNATE RECORD    
    }

    });
})
.catch(function (err) {
    console.log('Error: ' + err);
});
```
We have added the ability to deal with any status code other than 200 with this request, and we are checking that the discharge record has a current status, otherwise we will need to handle alternate record types. 

This provides the code for both the server-side and client-side of a single mental health discharge record for a patient that is FHIR compliant. This code should demonstrate what is needed to help ensure that someone receives the help they need, and their mental health record is available in any system that is needed. The FHIR API standard is open source and can be implemented by healthcare provider.