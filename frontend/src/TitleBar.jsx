import React from 'react'
import './TitleBar.css'

import SearchBar from './SearchBar'

function TitleBar({search, setSearch}) {
  return (
    <div className="title-bar-container">
      <h1 className='header'>NEWSAPP </h1>
      <p>Searching for: {search}</p>
      <SearchBar search={search} setSearch={setSearch} />
    </div>
  )
}

export default TitleBar