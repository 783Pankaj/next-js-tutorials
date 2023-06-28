
//fetch API data in Client component in next.js 13.4


'use client'
import { useEffect, useState } from "react"
const page = () => {
    const [product, setProduct ] = useState([]);
    useEffect(async ()=>{
        let data = await fetch("https://dummyjson.com/products");
        data =await data.json();
        console.log(data)
        setProduct(data.products)
    },[])

  return (
    <div>
       <h1>
        product List
       </h1>
       <ul>
        <li>
           {product.map((item)=>(
            <h3>Name: {item.title}, Price:{item.price}</h3>
           ))}
        </li>
       </ul>
    </div>
  )
}

export default page
