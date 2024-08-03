import React from 'react'
import { useParams } from 'react-router-dom'
import productsData from '../Data'


const Product = () => {
    const {id} = useParams()
    console.log(id)
    const filteredData = productsData.filter(e => e.id == id)
  return (
    <div>
        {filteredData.map((e,i) => {
            return (
                <div>
                    <img src={e.image} alt="" width={300} height={300}/>
                    <h1>{e.title}</h1>
                    <p>{e.description}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Product