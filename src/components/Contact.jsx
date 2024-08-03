import React from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'
// import NavBar from './NavBar'

const Contact = () => {
  const [getParams, setGetParams] = useSearchParams()
  const data = getParams.get("id")
  const location = useLocation()
  const data1 = location.state
  return (
   <>
   {/* <NavBar /> */}
   <h1>Contact Page</h1>
   <p>This is Contact Page</p>
   {/* <p>The ID is: {data}</p> */}
   <p>data from home page is name: {data1.name} and city: {data1.city}</p>
   </>
  )
}

export default Contact