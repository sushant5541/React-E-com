import React from "react";
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ margin: 10 }}>
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
                    <Link className="navbar-brand" to="/">ITDefined</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbar-supportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/men">Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/kids">Kids</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/women">Women</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/beauty">Beauty</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/living">Living</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick="" to="/cart">
                                    <li class="icon">
                                        <span class="fas fa-shopping-bag"></span>
                                    </li>
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar;