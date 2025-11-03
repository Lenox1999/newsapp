from typing import Union

from fastapi import FastAPI
import os
from dotenv import load_dotenv
import requests
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()
api_key = os.getenv("API_KEY")
news_api_key = os.getenv("NEWS_API_KEY")

print(news_api_key)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    
    response = get_latest_news()
    return response

@app.get(f"/news")
def get_news(q: Union[str, None] = None, category: Union[str, None] = None):
    if category or q:
      return search_news(q, category)
    else:
      print("oh no :c")
      return get_latest_news()

  
def get_latest_news():
    url = news_api_url_builder(None, None, 1)
    response = requests.get(url)
    return response.json()

def search_news(q: str, category: str):
    
    url = news_api_url_builder(q, category, 0)
    response = requests.get(url)
    return response.json()

# TODO: let requests handle url building instead of doing it by hand
# TODO: add option to let frontend choose api

def currents_api_url_builder(q: str, category: str, mode: int):
    if mode == 0:
      url = ('https://api.currentsapi.services/v1/search?'
          'language=en&'
          f'apiKey={api_key}&'
          f'keywords={q}&'
          )
      if category:
       url += f'category={category}'
      if q:
        url += f'keywords={q}'
      return url
    elif mode == 1:
      url = ('https://api.currentsapi.services/v1/latest-news?'
       'language=en&'
        f'apiKey={api_key}')
      return url

def news_api_url_builder(q: str, category: str, mode: int):
  if mode == 1:
    url = ('https://newsapi.org/v2/top-headlines?'
          'country=us&'
          f'apiKey={news_api_key}')
  elif mode == 0:
    url = ('https://newsapi.org/v2/everything?'
          f'apiKey={news_api_key}&'
          'sortBy=popularity&')

    if q and category:
      url += f'q={q}&category={category}'
    elif category:
      url += f'category={category}'
    elif q:
      url += f'q={q}'
  print(url)
  return url