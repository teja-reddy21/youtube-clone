import React from 'react'
import NavBar from './components/Navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

<sr></sr>
const App = () => {
  return (
    <div>
      <NavBar/>
       
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
   
    </div>
  )
}

export default App