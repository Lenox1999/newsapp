import { useState } from 'react'
import './SearchBar.css'

function SearchBar({search, setSearch}) {
  

  function searchChangeHandler(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="search-bar-container">
      <input className="search-bar-input"
       onChange={searchChangeHandler}
       type="text" placeholder="Search for news" />
    </div>
  )
}

export default SearchBar