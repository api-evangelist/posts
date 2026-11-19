---
published: true
layout: post
title: 'Build Playlists And Music Recommendations Into Your Product With TIDAL'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/build-playlists-and-music-recommendations-into-your-product-with-tidal.png
date: 2026-11-19 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - TIDAL
  - Audio & Music
  - Metadata Cataloguing
  - Content Recommendation Modelling
  - Music
  - Streaming
---

Maybe you run a gym, a café, a fitness app or a music community, and you want your customers to find songs, save them, and get playlists built for them without leaving your product. That is a lot to build from scratch. [TIDAL](https://apis.io/providers/tidal/) offers it through an API, which is a way for your software, or an AI assistant working on your behalf, to ask TIDAL for music information and act on a listener's library.

An API is a set of doors into a service that other software can knock on. Your app sends a request, like "find this song" or "add this track to my playlist," and TIDAL sends an answer back. No copying and pasting between apps.

## What TIDAL does

TIDAL is a high-fidelity music streaming service owned by Block. Its developer platform covers catalog details about albums, artists and tracks, personalized recommendations, playlists, a listener's saved collection, search and more. One thing to know up front: TIDAL says the actual audio playback is limited to its official Player SDK for web, iOS and Android, so the API is about everything around the music, while the SDK plays it. You can find them at [tidal.com](https://tidal.com).

## What you can get done

### Manage a listener's music library

[Audio & Music](https://apis.io/capabilities/audio-music/) is the everyday work of a music service: the tracks someone saved, their playlists, their mixes. With TIDAL your product can read and change what a listener has collected.

- `GET /userCollectionTracks` lists the tracks a listener has saved.
- `POST /userCollectionTracks/{id}/relationships/items` adds tracks to that saved collection.
- `DELETE /userCollectionTracks/{id}/relationships/items` removes tracks from it.
- `GET /userCollections/{id}` reads a listener's whole collection.

### Look up albums, tracks and artists

[Metadata Cataloguing](https://apis.io/capabilities/metadata-cataloguing/) means the descriptive details that make music findable: titles, artists, credits, genres. This is how you show a proper album page or track listing inside your own product.

- `GET /albums` retrieves a set of albums.
- `GET /albums/{id}` retrieves one album.
- `GET /albums/{id}/relationships/albumStatistics` gets statistics for an album.
- `GET /tracks` retrieves a set of tracks.

### Serve up personal recommendations

[Content Recommendation Modelling](https://apis.io/capabilities/content-recommendation-modelling/) is the "you might also like" part. TIDAL builds mixes for each listener, and your product can fetch them.

- `GET /userRecommendations/{id}` gets a listener's recommendations.
- `GET /userRecommendations/{id}/relationships/discoveryMixes` gets their discovery mixes, music they have not heard yet.
- `GET /userRecommendations/{id}/relationships/myMixes` gets mixes built from what they already like.
- `GET /userRecommendations/{id}/relationships/newArrivalMixes` gets mixes of new releases.

## Workflows that put it together

A workflow is a recipe: several calls made in a set order to finish one job. We publish these for TIDAL as Arazzo workflows on APIs.io.

- [Search and Save Track to Collection](https://apis.io/arazzos/tidal/tidal-search-and-save-track-to-collection-workflow/) searches for a track, confirms it, then adds it to the listener's collection.
- [Create Playlist and Add Tracks](https://apis.io/arazzos/tidal/tidal-create-playlist-and-add-tracks-workflow/) creates a new playlist, then adds a track to it.
- [Artist Discography Explorer](https://apis.io/arazzos/tidal/tidal-artist-discography-workflow/) finds an artist, then walks their albums, top tracks and similar artists.
- [Discovery Mix Tracks](https://apis.io/arazzos/tidal/tidal-discovery-mix-tracks-workflow/) reads a listener's discovery mix and resolves the tracks in it.
- [Album Tracklist Explorer](https://apis.io/arazzos/tidal/tidal-album-tracklist-workflow/) reads an album and works out its tracks and artist.
- [Track Playback Manifest](https://apis.io/arazzos/tidal/tidal-track-playback-manifest-workflow/) finds a track by its ISRC, the standard recording code, and fetches what a player needs to play it.

## Getting started

TIDAL is freemium with self-serve signup, and it is a hosted service, so you call their endpoint rather than running anything yourself. Cost details live in the [Pricing section of the TIDAL profile](https://apis.io/providers/tidal/#pricing). TIDAL's documentation includes an [API and SDK overview](https://developer.tidal.com/documentation/api-sdk/api-sdk-overview), the [API reference](https://tidal-music.github.io/tidal-api-reference/) and a [walkthrough of its recommendation APIs](https://developer.tidal.com/blog/discover-explore-play-tidals-recommendation-apis-unraveled).

On APIs.io you can browse the full [TIDAL profile](https://apis.io/providers/tidal/) and APIs such as the [Playlists API](https://apis.io/apis/tidal/tidal-playlists-api/), the [Albums API](https://apis.io/apis/tidal/tidal-albums-api/) and the [Artists API](https://apis.io/apis/tidal/tidal-artists-api/).

Start with search and save: let your customers find a song and keep it, and build the rest of the experience from there.
