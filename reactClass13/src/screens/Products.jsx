import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const navigate = useNavigate()

  const getDataFromApi = async () => {
    // using fetch api
    // const apiData = await fetch("https://fakestoreapi.com/products")
    // const data = await apiData.json()
    // setProductsData(data);

    // using axios package for api data handling
    const apiData = await axios.get("https://fakestoreapi.com/products");
    const data = await apiData.data
    setProductsData(data);
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <>
    <h1>Products Data</h1>
    <div style={{display:"flex", flexWrap:"wrap" , justifyContent:"space-evenly"}}>
      {productsData.map((e,i) => {
        return (
          <div key={i} style={{display:"flex", flexDirection:"column", flexWrap:"wrap", height:"700px", width:"600px"}}>
            <img src={e.image} alt="" width={400} height={350}/>
            <h1>{e.title}</h1>
            <p>{e.description.slice(0,100)}</p>
            <p>{e.price}</p>
            <button onClick={()=> navigate(`/product/${e.id}`)}>Add</button>
          </div>
        )
      })}
    </div>
  </>
  )
};

export default Products;
