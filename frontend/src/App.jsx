import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArticleList from './ArticleList'
import SearchBar from './SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar className="search-bar"/>
      <ArticleList />  
    </>
  )
}

export default App
