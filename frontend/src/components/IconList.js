import React from "react";
import {Link} from "react-router-dom"
import setCurrentProduct from '../actions/setCurrentProduct'
import {useDispatch} from 'react-redux'

function IconList({product}){

    let dispatch = useDispatch()

    let handleCurrentProduct = () =>{
        dispatch(setCurrentProduct(product))
    }

    return(
    <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
        <Link style={{textDecoration:"none"}} onClick={handleCurrentProduct} to={{pathname:'/details/'}}>
        <li class="icon">
            <span class="fas fa-expand-arrows-alt"></span>
        </li>
        </Link>


        <Link style={{textDecoration:"none"}} onClick={handleCurrentProduct} to={{pathname:'/wishlist/'}}>
        <li class="icon mx-3">
            <span class="far fa-heart"></span>
        </li>
        </Link>

        <Link style={{textDecoration:"none"}} onClick={handleCurrentProduct} to={{pathname:'/cart/'}}>
        <li class="icon">
            <span class="fas fa-shopping-bag"></span>
        </li>
        </Link>
    </ul>
    )
}

export default IconList