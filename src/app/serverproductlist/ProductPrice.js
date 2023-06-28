"use client"
const ProductPrice = (propms) => {
    return (
        <>
        <div>
        <button onClick={()=>alert(propms.price)}>Check Price</button>
        </div>
        </>
    )
}

export default ProductPrice
