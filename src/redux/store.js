import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice";
import productsSlice from "./productSlice";

const store = configureStore({
    reducer:{
        cart: cartReducer,
        products: productsSlice
    }
})

export default store;