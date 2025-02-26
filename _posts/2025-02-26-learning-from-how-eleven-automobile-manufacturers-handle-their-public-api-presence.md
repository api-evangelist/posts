---
published: true
layout: post
title: Learning From How Eleven Automobile Manufacturers Handle their Public API Presence
tags:
  - Automobiles
  - Cars
  - Vehicals
  - Portals
  - Presence
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/copper-circuit-old-car-model-t.jpg
---
[The previous example of how the credit card companies handled their public API presence](https://apievangelist.com/2025/02/24/what-stands-out-across-the-apis-for-the-seven-major-credit-card-companies/) provides a very strong industry for showcasing APIs in a heavily regulated space. Grownup APIs. Another interesting business sector to look at is the automobile industry, which has some shining examples like credit card companies, but there are also a lot more non-existent, and messier approaches to learn from within the automobile space. Across the automobile manufacturers you can really enterprises who are at very different points in their API journey, which help contrast their approaches in useful ways.

<h3>API Portals</h3>
<div id="carouselExampleCaptions" class="carousel slide" style="background-color: #000; border: 3px #000 solid;">
 <div class="carousel-indicators">
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" aria-label="Slide 11"></button>
 </div>
 <div class="carousel-inner">
   <div class="carousel-item active">
     <a href="https://aos-portal.bmwgroup.com/" target="_blank"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/automobiles/bmw-screenshot.png" class="d-block w-100" alt="BMW"></a>
   </div>
   <div class="carousel-item">
     <a href="https://developer.ford.com/" target="_blank"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/automobiles/ford-screenshot.png" class="d-block w-100" alt="Ford"></a>
   </div>
   <div class="carousel-item">
     <a href="https://developer.gm.com/" target="_blank"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/automobiles/general-motors-screenshot.png" class="d-block w-100" alt="General Motors"></a>
   </div>
   <div class="carousel-item">
     <a href="https://csat.services.honda.com/swagger/ui/index.html" target="_blank"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/automobiles/honda-screenshot.png" class="d-block w-100" alt="Honda"></a>
   </div>   
   <div class="carousel-item">
     <a href="https://www.hyundaiusa.com/us/en" target="_blank"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/automobiles/hyundai-screenshot.png" class="d-block w-100" alt="Hyundai"></a>
   </div> 
   <div class="carousel-item">
     <a href="https://developer.mercedes-benz.com/" target="_blank"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/automobiles/mercedes-benz-screenshot.png" class="d-block w-100" alt="Mercedes-Benz"></a>
   </div> 
   <div class="carousel-item">
     <a href="https://developer.na.nissancloud.com/" target="_blank"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/automobiles/nissan-screenshot.png" class="d-block w-100" alt="Nissan"></a>
   </div> 
   <div class="carousel-item">
     <a href="https://developer.porsche.com/" target="_blank"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/automobiles/porsche-screenshot.png" class="d-block w-100" alt="Porsche"></a>
   </div>     
   <div class="carousel-item">
     <a href="https://developer.tesla.com/" target="_blank"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/automobiles/tesla-screenshot.png" class="d-block w-100" alt="Tesla"></a>
   </div> 
   <div class="carousel-item">
     <a href="https://developer.eig.toyota.com/" target="_blank"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/automobiles/toyota-screenshot.png" class="d-block w-100" alt="Toyota"></a>
   </div> 
   <div class="carousel-item">
     <a href="https://productdata.volkswagenag.com/" target="_blank"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/automobiles/volkswagen-screenshot.png" class="d-block w-100" alt="Volkswagen"></a>
   </div>     
 </div>
 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
   <span>Previous</span>
 </button>
 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
   <span class="carousel-control-next-icon" aria-hidden="true"></span>
   <span>Next</span>
 </button>
</div><br>

You can see companies like BMW, Ford, GM, Mercedes-Benz, and Volkswagen aligning with what is expected from the public API presence across other mainstream industries, However, you also see a handful of them who have no footprint, or a minimal footprint, while others are still keeping a mix of resources behind a login or partner access. The credit card companies profiled were all consistently further along in their journey, but the automobile manufacturers provide an even wider spread to learn from when it comes to what you want to do with your enterprise public API portal.

- **BMW** ([Portal](https://aos-portal.bmwgroup.com/)) ([Research](https://contracts.apievangelist.com/store/bmw)) - Part of an after sales, but uses OpenAPI, and has the beginning of a standardized approach.
- **Ford** ([Portal](https://developer.ford.com/)) ([Research](https://contracts.apievangelist.com/store/ford)) - Dedicated portal, handful of APIs, minimal support and storytelling, but a beginning.
- **GM** ([Portal](https://developer.gm.com/)) ([Research](https://contracts.apievangelist.com/store/general-motors)) - Dedicated portal, nice login, lots of developer resources, but not really standard HTTP.
- **Honda** ([Research](https://contracts.apievangelist.com/store/honda)) - Does not have a dedicated portal with two haphazard pages, one with a swagger UI published.
- **Hyundai** ([Research](https://contracts.apievangelist.com/store/hyundai)) - No footprint at all.
- **Mercedes-Benz** ([Portal)](https://developer.mercedes-benz.com/) ([Research](https://contracts.apievangelist.com/store/mercedes-benz)) - Has a dedicated portal, lots of properties to support, nice catalog with OpenAPIs.
- **Nissan** ([Portal](https://developer.na.nissancloud.com/)) ([Research](https://contracts.apievangelist.com/store/nissan)) - Has a dedicated portal, handful of resources, but can't access APIs without login and it doesn't work.
- **Porsche** ([Portal](https://developer.porsche.com/)) ([Research](https://contracts.apievangelist.com/store/porsche)) - Has a dedicated portal but you have to be a partner to see APIs.
- **Tesla** ([Portal](https://developer.tesla.com/0)) ([Research](https://contracts.apievangelist.com/store/tesla)) - Has a dedicated portal, a handful of resources, and a single fleet API.
- **Toyota** ([Portal](https://developer.eig.toyota.com/)) ([Research](https://contracts.apievangelist.com/store/toyota)) - Has a dedicated portal,  but you have to be a partner to see APis.
- **Volkswagen** ([Portal](https://productdata.volkswagenag.com/)) ([Research](https://contracts.apievangelist.com/store/volkswagen)) - Has a dedicated portal and one main API with supporting resources.

The APIs.json, OpenAPI, and JSON Schema we've accumulated across these API producers, as well as the Spectral rules we are running against them provide a compelling blueprint of what properties are being used for their API operations, and what patterns and anti-patterns are present in the designs of their APIs. It is difficult to do a full analysis due to the access levels on some of the APIs, but pulling the tags and path segments in use across these APIs will also provide a rich vocabulary we can use to differentiate each provider.

Once there is an API blueprint for the automobile industry showing what properties are used by each provider, as well as a vocabulary derived from the digital resources and capabilities being made available we will offer a more complete picture. But after the initial pass through this research, the following areas stand out as what lessons are available when evaluating the approach to APIs by these eleven automobile manufacturers.

- **Partner** - About half of the automobile manufacturers approach their APIs as purely a partner and aftermarket approach to be controlled.
- **Patterns** - Because of the hardware nature of the industry there isn't always a clear picture of what an API and other resources are.
- **Business** - The business imperative for why you should do APIs out in the open isn't as evident here and likely is slowing things down.
- **Narrative** - Only a handful of these companies control the technology and integration narrative around their automobile ecosystem.
- **Opportunity** - There is a huge opportunity to standardize and lead in this space, which [Car API](https://carapi.app/) is obviously looking to do.

It is fairly straightforward to sign-up and onboard with the automobile manufacturers API portals that are gated, but there are still important lessons to be observed across what companies publish openly to their portals and what they keep behind the login. There are a lot of things to like and not like across all of these approaches, which makes automobile industry a valuable learning opportunity. It is a mainstream business sector that makes sense to a wide audience, and when coupled with the credit card sector, it becomes a useful example of why API matters that can be presented to any enterprise leadership.

An API blueprint of properties used across the automobile industry, as well as the vocabulary of digital resources and capabilities being made available will provide the next set of stories to tell in the automobile space. This post includes a carousel to explore the API producers, which is a onewne approach to enable more visual exploration of how APIs are being done across many different companies. From the API blueprint and vocabulary research there will be additional charts, graphs, and tables published to help see the "diff" between each of the approaches presented here, helping to better understand the words and phrases being used to describe digital resources and capabilities all of these automobile manufacturers are producing.
