import React from "react";
import IconList from "./IconList";

let ProductItems = ({product}) => {
    return (
        <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div className="product"> <img src={product.image} alt={product.title} />
            <IconList product={product} />
            </div>
            <div className="tag bg-red">sale</div>
            <div className="title pt-4 pb-1">{product.title}r</div>
            <div className="d-flex align-content-center justify-content-center"> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> </div>
            <div className="price">Rs. {product.price}</div>
        </div>
    )
}



export default ProductItems