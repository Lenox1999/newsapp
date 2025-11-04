# NewsApp


Little pet project to fresh up on fullstack skills and build something I personally need.

A simple fullstack web app, written in Python with FastAPI and React, that's designed to provide the latest media in a well cultivated manner.
The Goal is to have a main feed where you see what's going on in the world, filtered by country or just the generally biggest headlines, also tabs to search for topics. Tabs are important for research but can also be pineed and used to track topics. Pinned tabs persist throughout visits to always have your priorities where they should be: at the top of your list.

To achieve that newsapp is able to parse news APIs and will soon be able to use RSS feeds from popular news outlets

## Motivation
Lack of complete solutions I liked to get news independent of news outlets and already curated feeds. Only see the news you want to see.

# REST API Overview
The API is written in python and uses the fastapi library

`/`
main feed, overview over subscribed topics, homepage

`/query?q=somesearch`
search for a topic

`/query?topic=sometopic&q=somesearch`
provide additional parameters to refine search

... more api options to come after 0.1 (MVP) milestone is hit
# Frontend
The frontend uses React

It is supposed to be dark mode by default and 

# NEWS APis
right now using:
- currents api
- newsapi

# NEWS RSS Feeds
The following RSS feeds WILL be implemented (depends on availability):
- Frankfurter Allgemeine
- Berliner Zeitung
- Bild (has RSS)
- BBC (has RSS)
- Washington Post
- New York Times

# TODO

### Left for minimum viable product
- implement interactive search functionality

### eventual future features:
- caching: save data directly on the backend and then lazily hit third party api and update frontend for any differences. for rss feed parsing, this could be done on a hourly or bi-hourly basis where it's pulled into local storage
- language should be set through ui later on and handled flexibly on backend
- features like setting setting date, time, sortby etc dynamically set through api
- implement rss feeds on backend
- **RSS feed implementation:** have a list of biggest news stations for most important countries: germany, us, france, spain etc. (mainly focusing on germany)
- could have settings page in frontend to add rss feeds/apis
- refactor `server.py` to let the requests library handle URL building instead of doing it by hand
- 

---
# Run

### Run Backend Server
```bash
python -m venv venv # only necessary for first time
source venv/bin/activate 
uvicorn main:app --reload
```

### Run Frontend Server
```bash
cd frontend
npm run dev
```