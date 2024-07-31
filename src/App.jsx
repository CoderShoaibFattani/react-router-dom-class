import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<NavBar />} >
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
    </Routes>
  )
}

export default App