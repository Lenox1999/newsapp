import React from 'react'
import './Article.css'

function Article({ article }) {
  return (
    <div className="article-container">
      <div>
        <img src={article?.image_url || 'null'} className='article-image' />
        <p>{article.author || 'Unknown Author'}</p>
        {/* <p>{article.source.name || 'Unknown Publisher'}</p> */}
        <p>{article.publishedAt}</p>
      </div>
      <div className='article-contents'>
        <h1><a
          target="_blank"
          rel="noopener noreferrer"
          href={article.url}>
          {article?.title || 'No title'}</a></h1>
        {/* <h1>{article?.title || 'No title'}</h1> */}
        <p>{article?.summary || article?.content || 'No description'}</p>
      </div>
    </div>
  )
}

export default Article