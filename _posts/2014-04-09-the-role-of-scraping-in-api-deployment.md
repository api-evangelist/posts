---
layout: post
title: The Role Of Scraping In API Deployment
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-scraper.jpg
author:
  name: kinlane
tags:
  - Deployment
  - Scraping
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-scraper.jpg)](http://scraping.apievangelist.com/)

Scraping has been something I’ve done since I first started working on the web. Sometimes you just need some data or a piece of content that isn't available in a machine readable format, and the only way is to get it scrape it off a web page.

Scraping is widespread, but something very few individuals or companies will admit to doing. Just like writing scripts for pulling data from APIs, I write a lot of scripts that pull content and data from websites and RSS feeds. Even though I tend to write my own scripts for scraping, I’ve been closely watching the new breed of scraping tools like Scraperwiki:

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/798px-ScraperWiki_logo.png)](https://scraperwiki.com/)

[**ScraperWiki**](https://scraperwiki.com/)

ScraperWiki is a web-based platform for collaboratively building programs to extract and analyze public (online) data, in a wiki-like fashion. "Scraper" refers to screen scrapers, programs that extract data from websites. "Wiki" means that any user with programming experience can create or edit such programs for extracting new data, or for analyzing existing datasets. The main use of the website is providing a place for programmers and journalists to collaborate on analyzing public data

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](https://scraperwiki.com/ "Website") [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-twitter-icon.png)](https://twitter.com/#!/scraperwiki "Twitter") [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-github-icon.png)](https://github.com/scraperwiki "Github")

I was first attracted to Scraperwiki as a way to harvest Tweets, and further interested by their web and PDF extraction tools. Scraperwiki has already been around for a while, founded back in 2010, and recently there is a new wave of scraping tools that have emerged:

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/1728_logo.png)](http://docs.import.io/)

[**import.io**](http://docs.import.io/)

Importio turns the web into a database, releasing the vast potential of data trapped in websites. Allowing you to identify a website, select the data and treat it as a table in your database. In effect transform the data into a row and column format. You can then add more websites to your data set, the same as adding more rows and query in real-time to access the data.

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://docs.import.io/ "Website") [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-twitter-icon.png)](https://twitter.com/importio "Twitter") [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-github-icon.png)](https://github.com/import-io "Github")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/kimono-labs-logo.png)](https://www.kimonolabs.com/)

[**Kimono**](https://www.kimonolabs.com/)

Kimono is a way to turn websites into structured APIs from your browser in seconds. You don’t need to write any code or install any software to extract data with Kimono. The easiest way to use Kimono is to add our bookmarklet to your browser’s bookmark bar. Then go to the website you want to get data from and click the bookmarklet. Select the data you want and Kimono does the rest.

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](https://www.kimonolabs.com/ "Website") [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-twitter-icon.png)](https://twitter.com/kimonolabs "Twitter")

Kimono and Import.io provide scraping tools for anyone, even non-developers to scrape content from web pages, but also allow you to deploy an API from the content. While it is easy to deploy APIs using data and content from the other scraping providers I track on, the new breed of scraping services focus on API deployment as end-goal.

At [API Strategy & Practice in Amsterdam](http://www.apistrategyconference.com/2014Amsterdam/index.php), the final panel of the event was called “[toward 1 million APIs](https://www.youtube.com/watch?v=zhbm_MtSYlg)”, and scraping came up as one possible way that we will get to APIs at this scale. Sometimes the stewards or owners of data just don’t have the resources to deploy APIs, and the only way to deploy an API will be to scrape data and content and publish as web API--either internally or externally by 3rd party.

I have a [research site setup to keep track of scraping news I come across, as well as any companies and tools I discover](http://scraping.apievangelist.com/). Beyond ScraperWiki, Kimono and Import.io I’m watching these additional scraping services.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/alchemy-api-logo.png)](http://www.alchemyapi.com/api/categ/)

[**Alchemy**](http://www.alchemyapi.com/api/categ/)

The product of over 50 person years of engineering effort, AlchemyAPI is a text mining platform providing the most comprehensive set of semantic analysis capabilities in the natural language processing field. Used over 3 billion times every month, AlchemyAPI enables customers to perform large-scale social media monitoring, target advertisements more effectively, track influencers and sentiment within the media, automate content aggregation and recommendation, make more accurate stock trading decisions, enhance business and government intelligence systems, and create smarter applications and services.

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://www.alchemyapi.com/api/categ/ "Website") [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-twitter-icon.png)](https://twitter.com/alchemyapi "Twitter") [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-github-icon.png)](https://github.com/AlchemyAPI "Github")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/common-crawl-logo-2.png)](http://commoncrawl.org/)

[**Common Crawl**](http://commoncrawl.org/)

Common Crawl is a non-profit foundation dedicated to providing an open repository of web crawl data that can be accessed and analyzed by everyone. Common Crawl Foundation is a California 501(c)(3) registered non-profit founded by Gil Elbaz with the goal of democratizing access to web information by producing and maintaining an open repository of web crawl data that is universally accessible and analyzable.

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://commoncrawl.org/ "Website") [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-twitter-icon.png)](https://twitter.com/CommonCrawl "Twitter") [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-github-icon.png)](https://github.com/commoncrawl "Github")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/convextra-logo.png)](http://convextra.com/)

[**ConvExtra**](http://convextra.com/)

Convextra allows you collect valuable data from internet and represents it in easy-to-use CVS format for forther utilization.

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://convextra.com/ "Website")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/page-munch-logo.png)](http://www.pagemunch.com)

[**PageMunch**](http://www.pagemunch.com)

Page Munch is a simple API that allows you to turn webpages into rich, structured JSON. Easily extract photos, videos, event, author and other metadata from any page on the internet in milliseconds.

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://www.pagemunch.com "Website") [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-twitter-icon.png)](https://twitter.com/PageMunch "Twitter") [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-github-icon.png)](https://github.com/PageMunch "Github")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/prompt-cloud-logo.png)](http://promptcloud.com/)

[**PromptCloud**](http://promptcloud.com/)

PromptCloud opeartes on “Data as a Service” (DaaS) model and deals with large-scale data crawl and extraction, using cutting-edge technologies and cloud computing solutions (Nutch, Hadoop, Lucene, Cassandra, etc). Its proprietary software employs machine learning techniques to extract meaningful information from the web in desired format. These data could be from reviews, blogs, product catalogs, social sites, travel data—basically anything and everything on WWW. It’s a customized solution over simply being a mass-data crawler, so you only get the data you wish to see. The solution provides both deep crawl and refresh crawl of the web pages in a structured format.

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://promptcloud.com/ "Website") [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-twitter-icon.png)](https://twitter.com/promptcloud "Twitter") [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-github-icon.png)](https://github.com/promptcloud "Github")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/scrapinghub-logo.png)](http://scrapinghub.com/)

[**Scrapinghub**](http://scrapinghub.com/)

Scrapinghub is a company that provides web crawling solutions, including a platform for running crawlers, a tool for building scrapers visually, data feed providers (DaaS) and a consulting team to help startups and enterprises build and maintain their web crawling infrastructures.

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://scrapinghub.com/ "Website") [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-twitter-icon.png)](https://twitter.com/ScrapingHub "Twitter") [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-github-icon.png)](https://github.com/scrapinghub "Github")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/screen-scraper-logo.png)](http://screen-scraper.com/)

[**Screen Scraper**](http://screen-scraper.com/)

Copying text from a web page. Clicking links. Entering data into forms and submitting. Iterating through search results pages. Downloading files (PDF, MS Word, images, etc.).

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://screen-scraper.com/ "Website")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/web-scrape-master-logo-2.png)](http://motyar.info/webscrapemaster/)

[**Web Scrape Master**](http://motyar.info/webscrapemaster/)

Scrape web without writing code for it; To create value from the sea of data being published over web. Data is Currency. API. Web scrape master provides a very simple API for retrieving scrape data.

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://motyar.info/webscrapemaster/ "Website") [![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-twitter-icon.png)](https://twitter.com/motyar "Twitter")

If you know of scraping services I don't have listed, or scraping tools that aren't included in my research, please let me know. I think scraping services that get it right, will continue to play a vital role in [API deployment](http://deployment.apievangelist.com) and getting us to 1M APIs.