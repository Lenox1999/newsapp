import React from 'react'
import Article from './Article'
import fetchFromAPI from './utils/fetchFromAPI'
import { useEffect, useState } from 'react'


function ArticleList({search}) {
  const [articles, setArticles] = useState([]);

  const [error, setError] = useState(false);
  
  useEffect(() => {
  // Set up a timer.
  const handler = setTimeout(() => {
    // This code runs after 500ms of inactivity
    if (search.length > 0) {
      console.log(`Fetching for: ${search}`);
      fetchFromAPI(`http://127.0.0.1:8000/news?q=${search}`)
        .then(data => {
          const searchResultData = data.articles || data.article || [];
          setArticles(searchResultData);
        })
        .catch(error => console.log(error));
    } else {
      // If search is empty, fetch all articles
      fetchFromAPI('http://127.0.0.1:8000/')
        .then(data => {
          if (data["status"] == "error") setError(true);
          const articlesData = data.articles || data.article || [];
          setArticles(articlesData);
        })
        .catch(error => console.error(error));
    }
  }, 500); // Wait for 500ms

  // This is the cleanup function.
  // It runs when 'search' changes, before the effect re-runs.
  return () => {
    clearTimeout(handler);
  };
}, [search]);

  if (error) {
    return (
    <div className='error-container'>
      <h1>Something bad happened!</h1>
      <p>Couldn't fetch articles</p>
    </div>
    )
  }

  //const [key, setKey] = useState(0);
  
  return (
    <div className="article-list-container">
      {
        articles.map((article) => {
          // if (article.urlToImage.length == 0) {
          //   article.urlToImage == null;
          // }
          //setKey(key+1);
          return <Article key={article.id} article={article} />
        })
      } 
    </div>
  )
}

export default ArticleList