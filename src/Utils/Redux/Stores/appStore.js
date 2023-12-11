import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slices/CardSlice"

const appStore = configureStore({
    reducer:{
        cart: cartReducer,
    },
});

export default appStore;