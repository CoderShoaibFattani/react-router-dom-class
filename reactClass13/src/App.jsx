import { Route, Routes } from "react-router-dom"
import Products from "./screens/Products"
import SingleProduct from "./screens/SingleProduct"


const App = () => {
  
  return (
   <Routes>
    <Route path="/" element={<Products/>}/>
    <Route path="/product/:id" element={<SingleProduct/>}/>
   </Routes>
  )
}

export default App