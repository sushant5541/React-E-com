import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import setCurrentProduct from '../actions/setCurrentProduct';

function IconList({ product }) {
    const dispatch = useDispatch();

    const handleCurrentProduct = () => {
        dispatch(setCurrentProduct(product));
    };

    const handleAddToWishlist = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TO_WISHLIST',
            payload: product
        });
        alert(`${product.title} added to wishlist!`);
    };

    const handleAddToCart = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TO_CART',
            payload: product
        });
        alert(`${product.title} added to cart!`);
    };

    return (
        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
            <Link
                style={{ textDecoration: "none" }}
                onClick={handleCurrentProduct}
                to={{ pathname: '/details/' }}
            >
                <li className="icon">
                    <span className="fas fa-expand-arrows-alt"></span>
                </li>
            </Link>

            <Link
                style={{ textDecoration: "none" }}
                onClick={handleAddToWishlist}
                to={{ pathname: '/wishlist/' }}
            >
                <li className="icon mx-3">
                    <span className="far fa-heart"></span>
                </li>
            </Link>

            <Link
                style={{ textDecoration: "none" }}
                onClick={handleAddToCart}
                to={{ pathname: '/cart/' }}
            >
                <li className="icon">
                    <span className="fas fa-shopping-bag"></span>
                </li>
            </Link>
        </ul>
    );
}

export default IconList;