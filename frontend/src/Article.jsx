import React from 'react'
import './Article.css'

function Article({ article }) {
  return (
    <div className="article-container">
      <h1>{article?.title || 'No title'}</h1>
      <p>{article?.description || article?.content || 'No description'}</p>
    </div>
  )
}

export default Article