import React from 'react'
import './TitleBar.css'

import SearchBar from './SearchBar'

function TitleBar({search}) {
  return (
    <div className="title-bar-container">
      <h1 className='header'>NEWSAPP</h1>
      <SearchBar search={search} />
    </div>
  )
}

export default TitleBar