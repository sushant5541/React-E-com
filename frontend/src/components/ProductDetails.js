import React from "react";
import './details.css'

let ProductDetails = ({product}) =>{

    return (
    <div className="container my-5">
    <div className="row details-snippet1">
        <div className="col-md-6">
            <div className="row">
                <div className="col-md-2 mini-preview">
                    <img className="img-fluid" src={product.image} alt="Preview"/>
                    <img className="img-fluid" src="" alt="Preview"/>
                    <img className="img-fluid" src="" alt="Preview"/>
                    <img className="img-fluid" src="" alt="Preview"/>
                </div>
                <div className="col-md-10">
                    <div className="product-image" style={{marginLeft:50}}>
                        <img className="img-fluid" style={{height:500}} src={product.image} alt=""/>
                    </div>

                </div>
            </div>

        </div>
        <div className="col-md-5">
            <div className="category"><span className="theme-text">Category:</span>{product.category}</div>
            <div className="title">{product.title}</div>
            <div className="ratings my-2">
                <div className="stars d-flex">
                    <div className="theme-text mr-2">Product Ratings: </div>
                    <div>&#9733;</div>
                    <div>&#9733;</div>
                    <div>&#9733;</div>
                    <div>&#9733;</div>
                    <div>&#9733;</div>
                    <div className="ml-2">(4.5) 50 Reviews</div>
                </div>
            </div>
            <div className="price my-2">Rs. {product.price} <strike className="original-price">$120.00</strike></div>
            <div className="theme-text subtitle">Brief Description:</div>
            <div className="brief-description">
                {product.description}
            </div>


            <div>
                <div className="subtitle my-3 theme-text">Colors:</div>
                <div className="select-colors d-flex">
                    <div className="color red"></div>
                    <div className="color silver"></div>
                    <div className="color black"></div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-3">
                    <input type="number" className="form-control" value="1"/>
                </div>
                <div className="col-md-9"><button className="btn addBtn btn-block">Add to basket</button></div>
            </div>

        </div>
    </div>
    </div>
    )
}

export default ProductDetails