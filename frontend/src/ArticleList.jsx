import React from 'react'
import Article from './Article'
import fetchFromAPI from './utils/fetchFromAPI'
import { useEffect, useState } from 'react'


function ArticleList() {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    fetchFromAPI('http://127.0.0.1:8080/')
      .then(data => {
        console.log(data);
        // Handle both 'articles' property and direct array responses
        const articlesData = data.articles || data.article || [];
        setArticles(articlesData);
      })
      .catch(error => console.error(error))
  }, [])
  
  console.log("hello", articles);
  
  return (
    <div className="article-list-container">
      {
        articles.map((article) => (
          <Article key={article.title || article.id} article={article} />
        ))
      } 
    </div>
  )
}

export default ArticleList