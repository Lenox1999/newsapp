import React from 'react'
import './TitleBar.css'

import SearchBar from './SearchBar'

function TitleBar() {
  return (
    <div className="title-bar-container">
      <h1 className='header'>NEWSAPP</h1>
      <SearchBar />
    </div>
  )
}

export default TitleBar