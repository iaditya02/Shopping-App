import { configureStore } from "@reduxjs/toolkit";
import { CartSlices } from "./slices/cartSlices";
import {CounterSlice} from "./slices/CounterSlice";

export const store=configureStore({
    reducer:{
        cart: CartSlices.reducer,
        counter:CounterSlice.reducer
    }
});