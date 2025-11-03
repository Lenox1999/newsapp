import React from 'react'
import './SearchBar.css'

function SearchBar() {
  return (
    <div className="search-bar-container">
      <input className="search-bar-input"
       type="text" placeholder="Search for news" />
    </div>
  )
}

export default SearchBar