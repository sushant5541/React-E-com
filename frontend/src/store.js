import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer'
store = configureStore({reducer:rootReducer})
export default store
