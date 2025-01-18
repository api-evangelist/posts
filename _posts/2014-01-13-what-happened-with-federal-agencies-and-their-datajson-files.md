---
layout: post
title: What Happened With Federal Agencies And Their Data.json Files
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-json-data-store.png
author:
  name: kinlane
tags:
  - Data
  - Agencies
---
I’m playing catchup on some of my projects, and one of them is tracking on the evolution of [Executive Order 13642](http://www.whitehouse.gov/the-press-office/2013/05/09/executive-order-making-open-and-machine-readable-new-default-government) from last May, which was the White House directive to make open and machine readable the new default for government information. The piece that I'm tracking on specifically right now is around the [OMB Memorandum M-13-13](http://project-open-data.github.io/policy-memo) Open Data Policy-Managing Information as an Asset, in which one of the items require agencies to publish a data.json file that provides a machine readable inventory of each agencies public data assets.

In short, each federal agencies should round up a list of all their public data assets, make a machine readable JSON file from that list, and publish to the web. The deadline for publishing was November 30, 2013, and I got caught up in my FAFSA work and the holidays happened, resulting in just getting a chance to take a look at truly take a look at where our government is at with this.

To really quantify where we are at, you have to execute on the core vision of the mandate—write a script to pull all the federal agencies data.json file. First you pull all the agency’s root url using the Federal Agency Directory API from [USA.gov](http://www.usa.gov/About/developer-resources/federal-agency-directory/). Then you append data.json to the end of each address, pull each data.json file and get to work! When executing on this work, you encounter the problem of [inconsistent HTTP status codes from agency](http://kinlane.com/2013/11/06/knowing-your-http-status-codes-in-federal-government/), which I talked about before. Once you navigate this I find:

*   22 Federal Agency Data.json Publish (I also see SEC published, what they did is another story)
*   5,558 Public Datasets Published (6,479 actual distributions)

This is just my initial pull, and resulting count. I have only begun hand evaluating what is published, what is not. This is good though right? 22 federal agencies successfully publishing a data.json file for a combined 5,558 datasets available! I know how hard this was to make happen, and I commend everyone for their hard work. I’m a big fan of acknowledging the hard work that goes into this, but then also big fan of pushing back to make sure we keep working. So let’s break M-13-13 down, and see if we are really on track. What did I see during my initial pulling of these 22 data.json files?

**Validate Your Data.json Files**  
My number of piece of advice to give to agencies is make sure you validate your data.json files. [JSONLint](http://jsonlint.com/) is a free tool, head over there, paste in the contents of your data.json file. Do this after EVERY change. If your data.json doesn’t validate, it will just be a headache for consumers. Before you validate, also work hard to clean up your descriptions, abstracts and other fields. Make sure you do away with unnecessary quotes, slashes and other garbage that is just unnecessary.

**Size of Data.json Files**  
Some of the files are pretty big (wink wink EPA, DOT). I’m not sure what the solution is for this, but the bigger the file, the more compute it takes to process. We all need to discuss the solution for this, because it is only going to get worse, and will pretty quickly become unsustainable.

**Use of Data.json Fields**  
Overall agencies make good use of the common core meta data fields as recommended in the [open data implementation guide for M-13-13](http://project-open-data.github.io/schema/). Agencies provided a wealth of descriptions, tags and even provided relevant contact info and other important meta data for listings. I'm analyzing all the fields used an will be providing a deeper analysis of how well they tagged, are there duplicate descriptions. in the near future.

**Use of Distribution Field**  
There is one critical field in each data.json listing called distribution, which can be a listing of multiple file types for a single data set. For example the dataset might be a list of government acronyms, and you might have a CSV version, as well as Spreadsheet, XML and / or JSON versions. There are 5,858 datasets I’ve recorded so far, and there are 6,479 distributions for those datasets. However, only 3,766 of the 5,858 datasets use the distribution field, relying on the Download URL or Access URL as the reference to where the dataset is located—this is a problem.

**Format Types of Distribution Files**  
One of the benefits of an agency using the distribution field, is that each entry has a format field, allowing me to understand the format of each dataset, such as HTML, XML, JSON, CSV or other. While this value should be a valid [internet media typ](http://en.wikipedia.org/wiki/Internet_media_type)e--they all pretty random entries. So the best I can extrapolate right now is 2,550 are html, 2,479 are xml, 13 are json 177 are csv, 285 are xls and the rest are some other format—including PDF which, well, which is a problem. Another big problem is almost half are html references, which if it meant structured HTML would be one thing, but mostly means it is a web page with some sort of form you can extract data yourself (not in line with M-13-13 vision). So 2,954 are truly machine readable (the whole point of the exercise), and 2,904 are not really or can’t be identified as so. Ok, so around 50% of the datasets are machine readable (maybe, hopefully), which will have to be tested with another round of scripts and lot of work.

**Tracking Progress**  
How do we track progress on what is going on with federal agency’s data.gov files, from here forward? The best I can come up with for right now is to store a copy of data.json files each time I pull. You can find these archives on my [federal government research Github repository](https://github.com/kinlane/federal-government/tree/gh-pages/data/json-archive). I will also be pulling a copy of the 6,479 dataset distributions and storing on Amazon S3, depending on what it costs me to pull, transfer and store. Then I will work on some diff, and month to month analytics based upon agency’s work.

**Overall Quality Of Datasets**  
I give the overall data.json effort of agencies a C grade. It very much has that, “we got our homework in on time” feel to it. The leading agencies did what they were supposed to, but ultimately didn’t put a whole of of care into the quality of work. The 5000+ datasets reflect what I was saying in my advice for the federal government that came out today on Govfresh, we have a lot of house cleaning to do.

So how should OMB, OSTP and GSA respond to this C level effort by federal agencies? They should:

*   Help the agencies who DID publish, refine what they published. Bring in outside help if necessary, clean up data, listings and demonstrate to agencies what was done, and how they can continue doing better in the future.
*   Help the agencies who DID NOT publish, by going through their websites, finding high value, already published datasets and convert them to JSON and generate a data.json file for them to publish on their websites.

This would help agencies who are already on board understand more about what is needed from the consumer side of things, and why quality in their data..json listings and datasets is so very, very important. It would also help agencies who aren’t on board get their data inventory process kickstarted. It should all be able to be done in Q1 2014, then by Q2 we can get rolling with next steps with Data.gov.

As I said earlier, I’m not naive about the amount of work that went into the 22 agencies getting these 5,000+ datasets published, but we can’t stop there. If you want to see meaningful data journalism, data visualizations, web and mobile apps incorporate this hard work into their own efforts, we have to clean things up. Remember Washington, you can’t do it alone. You have to figure out a way to open these up and allow the public to help clean, organize and add value to the data you have published in addition to your own efforts.

It is a healthy start, but we have so much more work.