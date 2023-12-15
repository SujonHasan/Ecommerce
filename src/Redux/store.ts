'use client';

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;