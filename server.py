from typing import Union

from fastapi import FastAPI
import os
from dotenv import load_dotenv
import requests

load_dotenv()
api_key = os.getenv("API_KEY")

app = FastAPI()


@app.get("/")
def read_root():
    url = ('https://api.currentsapi.services/v1/latest-news?'
        'language=en&'
        f'apiKey={api_key}')
    print(url)
    response = requests.get(url)
    return response.json()


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get(f"/news")
def get_news(q: Union[str, None] = None, topic: Union[str, None] = None):
    if topic and q:
      print("boom chakalaka")
      return {"q": q, "topic": topic}
    elif q: 
      print("lol that's interesting q")
      return {"q": q}
    elif topic:
      print("lol that's interesting topic")
      return {"topic": topic}
    else:
      print("oh no :c")
      return get_latest_news()

  
def get_latest_news():
    url = ('https://api.currentsapi.services/v1/latest-news?'
        'language=en&'
        f'apiKey={api_key}')
    response = requests.get(url)
    return response.json()
