import React from "react";
import IconList from "./IconList";

function ProductItems({product}) {
    return (
        <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product"> <img src={product.image} alt={product.title} />
            <IconList/>
            </div>
            <div class="tag bg-red">sale</div>
            <div class="title pt-4 pb-1">{product.title}r</div>
            <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
            <div class="price">Rs. {product.price}</div>
        </div>
    )
}



export default ProductItems