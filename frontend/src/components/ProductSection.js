import React, {useState, useEffect} from "react";
import ProductItems from "./product_items";

function ProductSection(){

    const[products, setProduct] = useState([])

        let getProducts = () =>{
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data=>setProduct(data))
        }
    

    useEffect(getProducts, [])

    return (
        <div class="container bg-white">
            <div class="row mt-5">
                {products.map(product=> <ProductItems key={product.id} product={product}/>)}
        </div>
        </div>
    )
}

export default ProductSection