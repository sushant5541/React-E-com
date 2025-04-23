import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import './details.css'
import { useNavigate } from 'react-router-dom';

let ProductDetails = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const incrementQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                ...product,
                quantity: quantity
            }
        });
        alert(`${quantity} ${product.title} added to cart!`);
    };

    return (
        <div className="container my-5">
            <div className="row details-snippet1">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-2 mini-preview">
                            <img className="img-fluid" src={product.image} alt="Preview" />
                        </div>
                        <div className="col-md-10">
                            <div className="product-image" style={{ marginLeft: 50 }}>
                                <img className="img-fluid" style={{ height: 500 }} src={product.image} alt="" />
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

                    <div className="row mt-3 align-items-center">
                        <div className="col-md-3">
                            <div className="input-group">
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={decrementQuantity}
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    className="form-control text-center"
                                    value={quantity}
                                    readOnly
                                />
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={incrementQuantity}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <button
                                className="btn addBtn btn-block"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
                        </div>
                        <div className="col-md-5">
                        <button
    className="btn btn-success btn-block"
    onClick={() => {
        // handleAddToCart();
        // navigate('/payment'); // Redirect to payment page
    }}
>
    Buy Now
</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;