import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "../App.css"

const NavBar = () => {
  return (
    <>
    <ul className='list'>
        <li className='listItem'><NavLink className='listItem1' to="/home">Home</NavLink></li>
        <li className='listItem'><NavLink className='listItem1' to="/about">About</NavLink></li>
        <li className='listItem'><NavLink className='listItem1' to="/contact">Contact</NavLink></li>
    </ul>
    <Outlet />
    </>
    
  )
}

export default NavBar