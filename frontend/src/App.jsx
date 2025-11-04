import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ArticleList from './ArticleList'
import TitleBar from './TitleBar'

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <TitleBar search={search} setSearch={setSearch} className='title-bar' />
      <ArticleList search={search} />  
    </>
  )
}

export default App;
