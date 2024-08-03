import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar'

// we can use useNavigate to route from one path to another and send data from one route to another route
// const navigate = useNavigate()
// navigate("/", {state: obj})
// get data from one route to another route using useLocation hook
// const location = useLocation()
// const data = location.state
// const obj = {name:"shoaib", city:"karachi"}

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