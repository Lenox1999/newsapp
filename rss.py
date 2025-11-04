import feedparser

def parse_feed(urls):
  
  all_articles = []

  for url in urls:
    print(url)
    feed = feedparser.parse(url)
    all_articles += feed.entries

  print(len(all_articles))
  all_articles_clean = []

  for article in all_articles:
    #print(article.title)
    all_articles_clean.append({
      "title": article.title,
      "summary": article.summary,
      "publishedAt": article.published,
      "image_url": article.media_content[0]["url"],
      "url": article.link
    })
  #print(all_articles_clean)
  return {"status": 200, "articles": all_articles_clean}



if __name__ == "__main__":

  rss_bild_url = f'http://www.bild.de/rss-feeds/rss-16725492,feed=politik.bild.html'
  rss_berliner_zeitung_url = 'https://www.berliner-zeitung.de/feed.xml'

  feeds = [rss_bild_url, rss_berliner_zeitung_url]

  parse_feed(feeds)

  # print("feed")

  # feed = []

  # for entry in rss_berliner_zeitung["entries"]:
  #   title = entry.title
  #   summary = entry.summary
  #   published_date = entry.published
  #   article_link = entry.link
  #   image_link = entry.media_content[0]["url"]

  #   #print(entry)
  #   print(title,summary,published_date, article_link, image_link)
    
  # # print(d["feed"]["title"]))