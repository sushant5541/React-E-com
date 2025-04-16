import React, {useState, useEffect} from "react";
import ProductItems from "./product_items";

function ProductSection(){

    const[products, setProduct] = useState([])

        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data=>setProduct(data))
            .catch(error => console.log("error fetching product:", error));
        }, [])
    


    return (
        <div className="container bg-white">
            <div className="row mt-5">
                {products.map(product=> <ProductItems key={product.id} product={product}/>)}
        </div>
        </div>
    )
}

export default ProductSection