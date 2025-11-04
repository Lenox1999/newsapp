import React from 'react'
import Article from './Article'
import fetchFromAPI from './utils/fetchFromAPI'
import { useEffect, useState } from 'react'


function ArticleList({search}) {
  const [articles, setArticles] = useState([]);

  // if (search) {

  //   useEffect(() => {
  //     fetchFromAPI(`http://127.0.0.1:8000/news?q=${search}`)
  //       .then(data => {
  //         setArticles(data);
  //         console.log(data);
  //       })
  //       .catch(error => console.log(error))
  //   }, [search])
  // }
  
  useEffect(() => {
    if (search.length > 0) {
      console.log(search);

      fetchFromAPI(`http://127.0.0.1:8000/news?q=${search}`)
        .then(data => {
          const searchResultData = data.articles || data.article || [];
          setArticles(searchResultData)
        })
        .catch(error => console.log(error))

    } else {
    fetchFromAPI('http://127.0.0.1:8000/')
      .then(data => {
        console.log(data);
        // Handle both 'articles' property and direct array responses
        const articlesData = data.articles || data.article || [];
        setArticles(articlesData);
      })
      .catch(error => console.error(error))
    }
  }, [search])
  
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