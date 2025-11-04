import React from 'react'
import './TitleBar.css'

import SearchBar from './SearchBar'

function TitleBar({search, setSearch}) {
  return (
    <div className="title-bar-container">
      <h1 className='header'>NEWSAPP Searching for: {search}</h1>
      <SearchBar search={search} setSearch={setSearch} />
    </div>
  )
}

export default TitleBar