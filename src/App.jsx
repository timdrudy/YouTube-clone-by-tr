import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/video/:categoryId/:videoID' element={<video/>} />
      </Routes>
    </div>
  )
}

export default App
