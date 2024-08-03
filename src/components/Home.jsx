import React from 'react'
import { useNavigate } from 'react-router-dom'
// import NavBar from './NavBar'
// import { Outlet } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const obj = {
    name:"shoaib",
    city:"karachi"
  }
  return (
    <>
    {/* <NavBar /> */}
    <h1>Home Page</h1>
    <p>This is the home page.</p>
    <button onClick={()=> navigate("/contact", {state:obj}) }>go to contact</button>
    {/* <Outlet /> */}
    </> 
  )
}

export default Home