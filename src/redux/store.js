import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice";

const store = configureStore({
    reducer:{
        cart: reducer
    }
})

export default store;