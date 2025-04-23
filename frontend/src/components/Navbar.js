import React from "react";
import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';

function Navbar() {

    const { isAuthenticated, user } = useSelector(state => state.user);
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(logout());
    };


    return (
        <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 px-0 mx-0">
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/016/471/452/non_2x/abstract-modern-ecommerce-logo-ecommerce-logo-design-shop-logo-design-template-creative-ecommerce-logo-vector.jpg"
                                alt=".."
                                width="50"
                                height="50"
                            />
                        </Link>
                    </div>
                </nav>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbar-supportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                            <li className="nav-item">
                            <Link className="nav-link" to="/">
                                    <span className="me-1">Home</span>
                                    <i className="fas fa-home"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/men">
                                    <span className="me-1">Men</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/women">
                                <span className="me-1">Women</span>
                                
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/jewelery">
                                <span className="me-1">Jewelery</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/electronics">
                                    <span className="me-1">Electronics</span>
                                    
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/living">
                                    <span className="me-1">Living</span>
                                 
                                </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">
                                    <span className="me-1">MyCart</span>
                                    <i className="fas fa-shopping-bag"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/wishlist">
                                    <span className="me-1">Wishlist</span>
                                    <i className="fas fa-heart"></i>
                                </Link>
                            </li>
                            {isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link">
                                        Welcome, {user?.name}
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <button 
                                        className="nav-link btn btn-link"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar;