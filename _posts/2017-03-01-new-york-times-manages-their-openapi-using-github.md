---
layout: post
title: New York Times Manages Their OpenAPI Using Github
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_02_26_at_3.44.42_pm.png
atomdate: 2017-03-01T17:00:00.000Z
tags:
  - Github
  - OpenAPI
  - Time
  - Open
  - Git
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_02_26_at_3.44.42_pm.png)](https://github.com/NYTimes/public_api_specs)

I come across more companies managing their [OpenAPI](http://openapis.org) definition as a single Github repository. One example of this is from [the New York Times](https://www.nytimes.com/), who as [the API definitions for their platform available as its own Github repository](https://github.com/NYTimes/public_api_specs). It demonstrates the importance of maintaining your API definitions separately from any particular implementation, such as just your documentation.

You can find Individual OpenAPIs for their [archive\_api](https://github.com/NYTimes/public_api_specs/tree/master/archive_api), [updated description](https://github.com/NYTimes/public_api_specs/commit/dd0716a5adc93f95eb4b065ddd8601ffd17cb09c), [article\_search](https://github.com/NYTimes/public_api_specs/tree/master/article_search),[books\_api](https://github.com/NYTimes/public_api_specs/tree/master/books_api), [community](https://github.com/NYTimes/public_api_specs/tree/master/community), [geo\_api](https://github.com/NYTimes/public_api_specs/tree/master/geo_api), [most\_popular\_api](https://github.com/NYTimes/public_api_specs/tree/master/most_popular_api), [movie\_reviews](https://github.com/NYTimes/public_api_specs/tree/master/movie_reviews), [semantic\_api](https://github.com/NYTimes/public_api_specs/tree/master/semantic_api), [times\_tags](https://github.com/NYTimes/public_api_specs/tree/master/times_tags), [timeswire](https://github.com/NYTimes/public_api_specs/tree/master/timeswire), [top\_stories](https://github.com/NYTimes/public_api_specs/tree/master/top_stories) broken down into separate folders within the Github repository. The NYT also provides markdown documentation, alongside the machine-readable OpenAPI definition in each folder, helping make sure things are human-readable.

It just makes sense to manage your API definitions this way. It's more than just documentation. When you do this, you are taking advantage of the repository and version control features of Github, but you also open things up for participation through forking and pull requests. The resulting definition and machine readable contract can then be injected anywhere into the integration and API lifecycle, internally or externally.

I personally like it when companies manage their API definitions in this way. It gives me a central truth to work with when profiling their operations, something that will be used across my research and storytelling. The more you describe your APIs in this way, the more chance I will be writing about them and including them across my work.