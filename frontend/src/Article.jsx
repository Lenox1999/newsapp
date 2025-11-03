import React from 'react'
import './Article.css'

function Article({ article }) {
  return (
    <div className="article-container">
      <img src={article.urlToImage} className='article-image'/>
        <div className='article-contents'>
        <h1>{article?.title || 'No title'}</h1>
        <p>{article?.description || article?.content || 'No description'}</p>
      </div>
    </div>
  )
}

export default Article