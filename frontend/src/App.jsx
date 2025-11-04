import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ArticleList from './ArticleList'
import SearchBar from './SearchBar'
import TitleBar from './TitleBar'

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <>
      <TitleBar search={search} className='title-bar' />
      <ArticleList />  
    </>
  )
}

export default App;
