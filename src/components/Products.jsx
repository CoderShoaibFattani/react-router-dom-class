import productsData from "../Data"
import Cards from "./Cards"

const Products = () => {
  const data = productsData
  console.log(data)
  return (
  <div  style={{display:"flex", gap:2, flexWrap:"wrap"}}>
   {data.map((e,i) => {
    return (
        <Cards key={i} title={e.title} desc={e.description} image={e.image} id={e.id} />
    )
  })}
  </div>
)
}

export default Products