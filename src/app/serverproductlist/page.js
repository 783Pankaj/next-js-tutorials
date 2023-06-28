//
//fetch API data in server component in next.js 13.4
///here we not use useEffect...useEffect works on client component

import ProductPrice from "./ProductPrice";


async function Productlist(){
    let data = await fetch("https://dummyjson.com/products");
    data =await data.json();
    return data.products
}

export default async function Page(){
    let products = await Productlist();
    console.log(products);
    return(
        <div> 
            <h1>Product list</h1>
            {
                products.map((item,i)=>(
                    <div key={i}>{`Name:  ${item.title} `}
                     <ProductPrice price={item.price}/>
                    </div>
                ))
            }
        </div>
    );
}