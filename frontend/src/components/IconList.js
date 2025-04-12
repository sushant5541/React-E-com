import React from "react";
import {Link} from "react-router-dom"


function IconList(){

    return(
    <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
        <Link style={{textDecoration:"none"}} onClick={()=>alert('I am detail page')}>
        <li class="icon">
            <span class="fas fa-expand-arrows-alt"></span>
        </li>
        </Link>


        <Link style={{textDecoration:"none"}} onClick={()=>alert('I am Wishlist page')}>
        <li class="icon mx-3">
            <span class="far fa-heart"></span>
        </li>
        </Link>

        <Link style={{textDecoration:"none"}} onClick={()=>alert('I am cart page')}>
        <li class="icon">
            <span class="fas fa-shopping-bag"></span>
        </li>
        </Link>
    </ul>
    )
}

export default IconList