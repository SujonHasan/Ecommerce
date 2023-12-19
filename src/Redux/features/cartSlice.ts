'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface cartState{
    value: Cart[]
}
interface Cart {
    id: number,
    image: string,
    title: string,
    price: number,
}

const initialState: cartState = {
    value: []
}

const cartSlice = createSlice({

    name: "Cart",
    initialState,
    reducers:{
        addCart: (state, action:PayloadAction<Cart>) => {
            state.value.push(action.payload)
        },
        removeCart: (state, action: PayloadAction<number>) =>{
            state.value = state.value.filter(item => item.id !== action.payload)
        }
    }
})

export const {addCart, removeCart} = cartSlice.actions;

export default cartSlice.reducer;