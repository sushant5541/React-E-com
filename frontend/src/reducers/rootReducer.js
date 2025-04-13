import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './userReducer';          // Should be default export
import wishlistReducer from './wishlistReducer'; // Should be default export
import cartReducer from './cartReducer';         // Should be default export
import currentProductReducer from './currentProductReducer'; // Default import

const rootReducer = combineReducers({
    user: userReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    currentProduct: currentProductReducer
});

export default rootReducer;