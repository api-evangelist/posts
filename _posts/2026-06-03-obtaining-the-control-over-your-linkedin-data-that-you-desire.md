---
published: true
layout: post
title: "Obtaining the Control Over Your LinkedIn Data That You Desire"
date: 2026-06-03
author: "Kin Lane"
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/server-cloud-server-racks-clouds-copper-circuit.jpg
category: "Blog"
tags:
 - LinkedIn
 - Personal Data
 - Data Ownership
 - Data Portability
 - Fiddler Everywhere
 - Claude
 - Agent Skills
 - APIs
 - Privacy
excerpt: "I have ranted several times about how tightly LinkedIn controls our personal user data. They refuse to give you access to your personal profile data via the LinkedIn API. I simply want access to MY data via the platform. I am not asking for much. I am not one to be deterred, and I usually will find a way to get what I want. I finally did, and you don't have to be a programmer to do this — but you have to be technically brave."
---

I have ranted several times about how tightly LinkedIn controls our personal user data. They refuse to give you access to your personal profile data via the LinkedIn API. You can access your company pages via the API, but everything is centered around your desire to run LinkedIn ads. I simply want access to MY data via the platform. I am not asking for much. I have tried every SaaS and Chrome extension out there that promises to do this for you, and have been unable to obtain access to my data daily in the manner that I wish. It is unacceptable.

I am not one to be deterred, and usually will find a way to get what I want. I finally did. You don't have to be a programmer to do this, but you have to be technically brave. Another caveat and assumption. I use the Claude VSCode extension to do this, which gives you more file-level access to many files—which transforms how you use Claude. I highly recommend it, even if you aren't a programmer. Like GitHub, you don't have to write code to use VSCode—it is just an editor. I don't have the time right now to work out all the details using Claude desktop, web, or via ChatGPT or Gemini—if you need that, let me know, maybe sweet talk or pay me, and I may be able to prioritize one of these solution paths. Let me know.

## Fiddler Everywhere

This journey begins with downloading [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere), a modern, cross-platform web debugging proxy and traffic analyzer available for Windows, macOS, and Linux. It captures, inspects, mocks, and modifies HTTP and HTTPS traffic between your machine and the internet.

Turn it on and capture all traffic. Again, you don't have to be a programmer, but you need to be technically unafraid, and it is a tool that will open up a whole new world for you if you do. It is a gateway drug to APIs, and you will see the digital world differently once you get acquainted with it.

## LinkedIn

Once you've downloaded and installed Fiddler Everywhere, open it up and you will immediately see traffic from across EVERY website you visit, and everything behind it flowing through Fiddler. Now visit LinkedIn. Spend some time browsing through all of the types of data you wish to capture. Here is a list of the LinkedIn entities I browse to get what I needed.

- **Posts** - Posts I submitted or shared. I try to stay off the home page.
- **Reactions** - Opening up the full list of reactions to each post.
- **Profiles** - Clicking open the profile pages of people I am interested in.
- **Messages** - Opening up messages, replying, and scrolling up and down.
- **Groups** - Opening up the groups I manage or am part of and scrolling down.

Fiddler will only record what you load, so scroll around, click and load what you want. Stay off the things you don't want. I recommend staying in your notifications, mentions, and groups, but you can open up the profile of people you want to "profile" and view their page and activity. I regularly use this to find out what people are interested in, by gathering what they have posted and what they have shared.

## Filtering

Once you are done exploring LinkedIn and are ready to process your activity for the day or any given moment, maybe after research, click on the filters button in Fiddler, and add a URL Contains filter for `https://www.linkedin.com`. It will list all of the traffic just for LinkedIn. Highlight everything by hitting command or control all, right click and choose export RAW file. Put it somewhere you remember, so you can direct Claude to it via a path you will need to update via the Agent Skill I have provided below.

This is a process you can do for any website. It isn't limited to LinkedIn, but the Agent Skill I provide is only for LinkedIn. The same approach will work for any website or application you use, but the entities you capture will be relative to the platform. It just depends on what you capture and are looking to mine. This is what makes Fiddler so powerful. You can leave it on all day and paint a picture of your entire digital footprint. Warning though, there are some sites where having a proxy open will screw with things, so be aware. I leave it on all the time and then a website doesn't load or I get wonky things.

## Agent Skill

I have created an Agent Skill to guide each time I do this, and I am happy to share it with you. I've pasted it here via a GitHub Gist, but you will need to download it locally and edit it. You will need to update the `[local path]` location which exists throughout the skill with the local path where you save your Fiddler RAW file containing all your LinkedIn traffic. Make sure to read the entire Agent Skill. Again, you don't need to be a coder to do this, it is plain enough English that you should be able to follow. NEVER trust an Agent Skill file from anyone—even me. It is easy to put malicious things in there that can mess with your world.

I save the Agent Skill to the `.claude/skills` folder in the project I have VSCode open to, which I then save my Fiddler file to `social/linkedin/*`—you will have to navigate this on your end, and update the path accordingly. Like I said earlier, if you want to do this via Claude desktop, web, or Gemini and ChatGPT, it is a separate process, but the same approach and skills will work, but the file system voodoo will vary.

Here is the full Agent Skill (you can also [download the raw file from the GitHub Gist](https://gist.github.com/kinlane/fa938f842c7b0a75432685a1a9b87c34)):

````markdown
---
name: parse-linkedin
description: Parse a Fiddler Everywhere RAW export of LinkedIn (Voyager API) traffic into markdown lists of Posts, Reactions, Profiles, Messages, and Groups. Use when a LinkedIn capture into social/linkedin/ is dropped and wants it turned into readable lists.
user_invocable: true
---

# LinkedIn — Fiddler capture parser

 Captures LinkedIn web traffic in Fiddler Everywhere and exports the **RAW**
capture into a dated folder under:

```
[local path]social/linkedin/<YYYY-MM-DD-HHMMSS>/
```

Fiddler saves each captured HTTP **response body** as a file on disk, laid out
as `<dump>/<hostname>/<url-path>[index]`. The signal lives under
`www.linkedin.com/voyager/api/*` — LinkedIn's internal "Voyager" JSON API. Each
file is one JSON response body (no HTTP headers). The bodies are
`$type`-discriminated entity graphs.

This skill turns that raw network exhaust into five readable markdown lists:

- **Posts** — feed updates (`feed.Update`): author, age, commentary text, permalink
- **Reactions** — likes/etc (`social.Reaction`): reactor name, headline, target activity
- **Profiles** — people seen (`identity.profile.Profile`): name, headline, premium, profile link
- **Messages** — DMs (rich messenger graph under `voyagerMessagingGraphQL/`):
  grouped by conversation, showing who each thread was **with**, a permalink to
  the thread, and every captured message (timestamp, sender, text; the user's
  own outbound messages are labelled **Me**)
- **Groups** — groups seen (`groups.Group`): name, member count, visibility, link

## When to invoke

- "Parse the LinkedIn export"
- "Turn the latest LinkedIn capture into lists"
- "What posts/reactions/messages are in social/linkedin?"
- `/linkedin-parse`

## Steps

1. **Run the parser.** It defaults to the newest dated dump under
   `social/linkedin/`.
   ```bash
   cd [local path]
   python3 [local path].claude/skills/linkedin-parse/parse_linkedin.py
   # or a specific dump:
   python3 [local path].claude/skills/linkedin-parse/parse_linkedin.py [local path]social/linkedin/2026-06-03-154246
   ```
   It writes to `social/linkedin/_reports/<dump-name>/`:
   - `posts.md`, `reactions.md`, `profiles.md`, `messages.md`, `groups.md`
   - `README.md` — index with counts
   - `data.json` — structured sidecar for downstream tooling

2. **Read the generated reports** (or just the counts the script prints). Don't
   paste whole files backm. Give a short briefing: counts per
   list, plus 2–4 highlights (notable posts in the feed, who reacted to Kin's
   posts, any inbound message threads, new groups).

## How it works (so you can answer questions about it)

- Walks every JSON body under `www.linkedin.com/voyager/api/` (recursively, so
  it reaches subdirs like `voyagerMessagingGraphQL/`), visiting every dict node.
- **Name resolution:** LinkedIn profile URNs are opaque (`ACoAA...`). For the
  feed, names come from `ActorComponent` (post author) and `EntityLockupViewModel`
  (reaction reactor) blocks, each pairing a display name with a `*profile` URN in
  its image attributes. For messages, names come from the messenger graph's
  `MessagingParticipant` records — `participantType.member` gives first/last name
  and profile URL, `participantType.custom` gives sponsored-InMail names, and
  company participants fall back to captured `Company` names.
- **Messages** are decoded from the rich messenger graph (`_type`-keyed, e.g.
  `com.linkedin.messenger.Conversation` / `.Message`, not the older `$type`
  format). The viewer ("Me") is the first profile in each conversation URN tuple;
  everyone else in the roster becomes the thread's "with". Thread permalinks come
  from each conversation's `conversationUrl`. Output is grouped by conversation,
  sorted most-recent-first, messages chronological within a thread.
- De-dupes by entity URN / activity id / message backend URN so the same item
  appearing across multiple captured responses is listed once.
- It does **not** parse anything outside `voyager/api`. Coverage is whatever
  threads/messages were loaded in the browser while capturing — an unnamed
  "Unknown" thread just means that participant's name was never in the capture.

## Notes / limits

- Coverage depends entirely on what is scrolled past while capturing. A bigger
  list means more was loaded in the browser, not that more exists.
- Profiles often have no name (only the headline) when the profile was returned
  without ever appearing in a feed/reaction lockup. Those still list by headline
  and profile link.
- Re-running is safe and idempotent — it overwrites the report folder for that
  dump.

## Related

- `me-daily` skill summarizes the *same kind* of Fiddler dumps at the
  host/category level (who was talked to). This skill goes the other way:
  decoding the LinkedIn response bodies into actual content lists.
````

## Markdown Files

The reason I like using Claude as an extension in VSCode is that it is easy for Claude to work with entire folders of files, like the Fiddler RAW export, but also it can then easily output multiple markdown files. I had it dump a `groups.md`, `messages.md`, `posts.md`, `profiles.md`, and `reactions.md`, as well as a `README.md` and `data.json` dump for each time I run a report. Then I can reference the context for a specific research session, day, or other bounded context I wish. It gives me full control over my data, within the bounded context that matters to whatever I am trying to accomplish.

## My LinkedIn Data

I've done this work to satisfy my needs. Giving me control over my LinkedIn data. But I am sharing it in response to a couple friends who have asked for how to do it. They've been struggling to get control of their data, frustrated with having to request their entire archive from LinkedIn, or getting warned for using Chrome extensions and other methodologies. This approach gives you full control over your data locally on a daily or other basis, and what you do with the data is up to you. Claude can easily work across the folders and markdown files in VSCode, but you will need to refine if you don't use VSCode.

I've published a video below to walk through some of it to try and outline the steps. But it would need much more work to refine and turn into a tutorial that anyone can follow. So you will have to accept this unpolished story and video, and if you need more help feel free to reach out. I am happy to help and make more time to refine, but for my purposes it has accomplished what I needed, and I am using it daily to align my LinkedIn reality with my Gmail, Google Calendar, Bluesky, YouTube, and other activities. Storing all my data locally as markdown, which I then sync using GitHub and Amazon S3, and then using Claude to help me make sense of my world in real-time, without having to play the games that LinkedIn, and many other platform providers, make us play.

<iframe width="560" height="315" src="https://www.youtube.com/embed/6HktUZdnMBU?si=plfd1sQX9ylQU8Vx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>