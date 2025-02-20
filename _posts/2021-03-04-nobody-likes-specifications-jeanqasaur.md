---
published: true
layout: post
title: Nobody Likes Specifications - @jeanqasaur
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/christianity-christianity-under-construction-copper-circuit.jpg
author:
  name: kinlane
tags:
  - Specifications
  - Definitions
---
Jean Yang from [Akita Software](https://www.akitasoftware.com/) pinged some of us in the API community with ["People don't like specs. There's a long history of people not liking specs." @thatplguy on how we need a new term for \[PLACEHOLDER WORD\] that we infer from behavior, since people think specs are things that take work to write and get out of date.”](https://twitter.com/jeanqasaur/status/1367609443563630592) I wanted to riff off all the great ideas from folks who replied, and see where I could go with the concept. I am fine with the term specification, but as a storyteller I get the power and potential of finding exactly the right word to describe this. I also get that people don’t like doing things that sound like work, and if we can come up with a term or phrase that softens things up, making it friendlier and more accessible, while retaining all of the essence of what API specifications, I think it could move the needle on API spec literacy and practice amongst the masses of people waking up to APIs in 2021.

I see singer and songwriter Matt McLarty ([@MattMcLartyBC](https://twitter.com/MattMcLartyBC)) suggest models in response to Jean—here are my thoughts piled on Matt’s:

*   **Models** - I like this one. I agree that we are modeling all the moving parts of our operations. Working together to model all of our API capabilities makes a lot of sense. I would say it begins to break down though as a concept as we move into production. The closest definition of model to this situation is, “a system or thing used as an example to follow or imitate.” Is it sufficient enough to take us through the entire lifecycle? IDK...

Then I see Harry Potter, er I mean my friend Michael Hibay ([@hibaymj](https://twitter.com/hibaymj)) suggest languages and vocabularies, to which I pile on my own thoughts:

*   **Languages** - I worry this is too ambiguous and will get lost in the shuffle--not translate globally.
*   **Vocabularies** - I feel like vocabularies are one of the building blocks of this concept we are trying to nail down.

Then before seeing more of the other responses to Jean I began to work through my own list using my handy dandy thesaurus:

*   **Definitions** - This is the word I have used to lump all of the various specifications, vocabularies, schema, and other artifacts into over the last decade on API Evangelist. It is dry, boring, and doesn’t capture anyone’s attention. I’ve seen it cause friction over the years, but it generally works. But yawn….
*   **Blueprints** - This is one of my favorite approaches which properly applies skeuomorphism to answer this question. It provides something that is tangible, well, at least it used to be. It at least conjures up something tangible in most people’s mind. It is something that is sophisticated and structured, and something really smart people do right? However I tend to reserve this for specific implementations. I have product API blueprints which employ OpenAPI and JSON Schema. So I don’t like this as a big circus tent phrase.
*   **Plan** - I like this. It is straightforward and works. People get it. We all want to have a plan. However, I also already use this to describe one of the circus rings within this big tent, referring specifically to the API management pricing plan, which I have artifacts for, and the SL4OpenAPI folks have as well—making it another building block of the bigger thing we are looking for.
*   **Contracts** - This one is already in use. Has a very business context. It speaks to a business audience. It adequately covers the technology, business, and politics of APIs for me. However, I think move specifications away from the human and is more about reducing everything we do to a transaction. Which adequately describes what we are all trying to get at, but we can do better.
*   **Understanding** - After putting contract into my thesaurus I went down a rabbit hole trying to bring things closer to the human part of it. I feel like the specifications are working to help us all reach an understanding regarding what is happening with each of our APIs, or at least it does when it is done well. Let’s reach a machine readable API understanding before we begin development. Nah, too touchy feely.
*   **Commitment** - Next, how about an API commitment? Putting the emphasis on the API provider to step up. Similar to the API contract, is the process of development robust API specifications all about making a commitment to our consumers and the end users of the applications that depend on them? It works. It’s not as business boring as contract is.
*   **Engagement** - While looking through the synonyms for contract the word engagement stood out to me. API specifications are about defining specific API engagements with consumers, providing us with a machine readable set of rules for our continued engagement. I like it, but it doesn’t feel like it will speak very loud to the widest possible audience.
*   **Policies** - Our API specifications provide the policies to operate our API factory floor. I think this is a good grown up phrase for what we are looking for, and where I am headed with API specifications and standards at the industry and regulatory levels. However, it is too wonkish to work for what we are looking to accomplish here.

After going down several rabbit holes I ended up thinking about how API specifications are powering the API lifecycle and I wanted to stress test each of the terms I’ve outline so far a little bit. How do each of these terms feel when applied to specific stops along the API life cycle? I would prefer to make sure we have a big enough circus tent to cover everything API specifications are doing across the entire lifecycle.

*   **Documentation** - Understanding, blueprint and plan really resonate with me while thinking about documentation.
*   **Code Generation** - Blueprint, engagement, and commitment really work in my head when thinking about codeine.
*   **Gateway** - Blueprint, engagement, commitment, and policies are all applicable at this stop along the API lifecycle.
*   **Management** - Contract, commitment, policies, engagement, and understanding speak to API management for me.
*   **Testing** - Contract, commitment, compact, plan, and understanding help make testing more real when talking to people.
*   **Security** - Compact, policies, engagement, and plan feel like they encompass what we think of with API security.
*   **Service Level Agreement** - Understanding, commitment, compact, contracts are easily applied to the SLA part of this.

Then I poked my head back on Twitter and saw that the colorful Kevin Swiber ([@kevinswiber](https://twitter.com/kevinswiber)) had chimed in suggesting some of the ones I had thought of, but also added a handful of new ones I think are worthy of consideration, and of course I gotta pile on with my own opinions here too:

*   **Flows** - This is very applicable to a wide swath of what we are doing with specifications, but after joining in on the OpenAPI TSC today where they talked about API workflows I am reminded that this is another one of the circus rings within our big tent.
*   **Scenarios** - I’d put this one in a similar category as flows, and it is already part of what we are doing, and can be derived from common API specification. For example, you can generate many scenario Postman collections from an OpenAPI definition.
*   **Sketches** - I love this one for an API-first approach. Providing the artifacts we need to capture the meaningful aspects of an API-first approach to delivering our critical API infrastructure, but like models I feel like it doesn’t go the distance for what we need.
*   **Maps** - This one really, really works for describing how API specifications are helping us map out the API landscape that has emerged around us all, harvesting and generating specifications from the exhaust of our existing API operations each day.
*   **Prototypes** - Again, this works for the API-first approach to delivering APIs, but I think won’t go the distance. Would it be possible to use one word during the early stages of delivering an API, and then having a different one for the more mature phases?
*   **Journeys** - I use this one a lot to bundle together many different API definitions that describe a single or group of APIs. I even have an Github repo where I use Siren in YAML (oh the horror) to stitch together a full API lifecycle journey with many different specs.

At this point I pop my head back on Twitter and see shit has gone completely sideways. I wisely chose to use to use the circus analogy above. I also see some other interesting ideas and thoughts to Jean’s question. I could go on forever, but I should probably wrap this up now and publish this post. 150 characters just wasn’t enough for me, and I had to resort to 1500 here on API Evangelist. Sounds like I better round up as many of the API circus performers present in this Twitter thread to some sort of live stream to discuss this topic. I currently have a project that I call [the API Specification Toolbox](http://api.specificationtoolbox.com/), and Jean’s question has left me questioning my choice of name. So I’d love to keep workshopping this one until we come up with an adequately meaningful term or phrase. I feel like an API Specification Toolbox might run folks off who aren’t interested in doing the hard work of realizing the potential of API specifications. I’d love to settle in on something that is softer, more accessible, but still captures what API specifications are all about.

Now I just need to get this posted before everyone else on the Twitter thread wonder why the hell I am not responding...

P.S. I vote bikeshedding.