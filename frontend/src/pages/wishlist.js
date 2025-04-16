import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

function Wishlist() {
    const { items } = useSelector(state => state.wishlist);

    return (
        <div>
            <Navbar/>
            <div className="container mt-5">
                <h2>Your Wishlist</h2>
                {items.length === 0 ? (
                    <p>Your wishlist is empty</p>
                ) : (
                    <div className="row">
                        {items.map(item => (
                            <div key={item.id} className="col-md-3 mb-4">
                                <div className="card">
                                    <img 
                                        src={item.image} 
                                        className="card-img-top" 
                                        alt={item.title}
                                        style={{ height: '200px', objectFit: 'contain' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">${item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Wishlist;