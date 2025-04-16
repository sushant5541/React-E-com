// In Men.js
import React, {useState, useEffect} from "react";
import ProductItems from "../components/product_items";
import Navbar from '../components/Navbar';

function Living(){
    const[products, setProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/living\'s clothing')
        .then(response => response.json())
        .then(data=>setProduct(data))
        .catch(error => console.log("error fetching product:", error));
    }, [])

    return (
        <div>
            <Navbar/>
            <div className="container bg-white">
                <div className="row mt-5">
                    {products.map(product=> <ProductItems key={product.id} product={product}/>)}
                </div>
            </div>
        </div>
    )
}

export default Living;