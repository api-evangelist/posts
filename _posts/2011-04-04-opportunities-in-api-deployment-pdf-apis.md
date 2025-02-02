---
layout: post
title: Opportunities in API Deployment, PDF APIs
url: http://apievangelist.com/2011/04/04/opportunities-in-api-deployment-pdf-apis/
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Deployment
  - APIs
  - PDF
---
kinlane-productions2.s3.amazonaws.com ![](http://kinlane-productions.s3.amazonaws.com/Tag-Cloud-API-PDF.png)I'm spending time evaluating different types of APIs in various categories.

I want to see how each provider delivers their API in similar categories, and potentially look for opportunities within those categories for new API services.

I'm starting with PDF APIs.

There are quite a few web APIs providing services to generate and work with PDFs.

The first main group of APIs I notice are HTML to PDF conversion APIs:

*   [DocRaptor](http://docraptor.com/documentation "DocRaptor")
*   [Doculicious](http://docs.doculicious.com/api "Doculicious")
*   [htm2pdf](http://webservice.htm2pdf.co.uk/htm2pdf.asm "html2PDF")
*   [Joliprint](http://joliprint.com/api/ "Joliprint")
*   [HTML2PDF](http://www.html2pdf.biz/api.php "HTM2PDF")
*   [Web2PDF](http://www.web2pdfconvert.com/pdf-api.aspx "Web2PDF")
*   [PDF My URL](http://pdfmyurl.com/support/support.jsp "PDF My URL")
*   [PDF Crowd](http://pdfcrowd.com/html-to-pdf-api/ "PDF Crowd")
kinlane-productions2.s3.amazonaws.com

Next there are a couple of other PDF conversion tools:![](http://kinlane-productions.s3.amazonaws.com/PDF_red.jpg)

*   [Anything to PDF](http://api.danielprocter.com/ "Anything to PDF") - Convert base 64 encoded data to PDF
*   [PDF Alchemy](http://www.pdfalchemy.com/ "PDF Alchemy") - Word to PDF

Beyond document conversion I found two APIs for commenting and annotating PDFs:

*   [Crocodoc](http://crocodoc.com/api/ "Crocodoc") - PDF commenting and collaboration
*   [A.nnotate](http://a.nnotate.com/api-reference.html "Annotate") - PDF annotation

Then there was a single provider of PDF document signatures:

*   [DocuSign](http://www.docusign.com/developers-center/developers-center-overview "DocuSign")

There are two clear leaders that provide more advanced PDF document management services:

*   [Doxument](http://doxument.com/en/developer "Doxument") - HTML to PDF, OCR, Split PDF pages in separate images
*   [Google Docs](http://code.google.com/apis/documents/ "Google Docs ") - File Conversion to PDF, OCR, translation
kinlane-productions2.s3.amazonaws.com

With the ubiquitous nature of PDFs, and a wide range of desktop and web based PDF tools, I think there is a huge opportunity for new types of APIs in this area. ![](http://kinlane-productions.s3.amazonaws.com/pdf-ocr.png) There are dozens of code libraries in various languages for manipulating PDFs. I would suggest some savvy developer:

*   Identify the most viable business uses for PDF APis
*   Select the strong set of PDF language libraries
*   Wrap in a RESTful wrapper
*   Deploy on Amazon EC2 with PDF storage on Amazon S3

PDF APis is one category of APIs that has huge opportunity for growth in the next couple of years.