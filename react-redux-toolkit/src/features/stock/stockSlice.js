import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered, restocked as cakeRestocked } from "../cake/cakeSlice";
import { ordered as iceCreamOrdered, restocked as iceCreamRestocked} from "../icecream/icecreamSlice";
import { ordered as cookiesOrdered, restocked as cookieRestocked } from "../cookies/cookies";


const initialState = {
    stock: 100
}

const stockSlice = createSlice({
    name: 'stock',
    initialState: initialState,
    reducers: {
        minusStock: (state, action) => {
            state.stock--
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state, action) => {
            state.stock--
        })
        builder.addCase(iceCreamOrdered, (state, action) => {
            state.stock--
        })
        builder.addCase(cookiesOrdered, (state, action) => {
            state.stock--
        })
        builder.addCase(cakeRestocked, (state, action) => {
            state.stock += action.payload
        })
        builder.addCase(iceCreamRestocked, (state, action) => {
            state.stock += action.payload
        })
        builder.addCase(cookieRestocked, (state, action) => {
            state.stock += action.payload
        })
    }
})

export default stockSlice.reducer
export const { minusStock } = stockSlice.actions