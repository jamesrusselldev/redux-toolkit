import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'
import { ordered as iceCreamOrdered } from '../icecream/icecreamSlice'
import { ordered as cookieOrdered } from '../cookies/cookies'

const initialState = {
    numOfGifts: 100
}

const giftSlice = createSlice({
    name: 'gift',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfGifts--
        })
        builder.addCase(iceCreamOrdered, (state) => {
            state.numOfGifts--
        })
        builder.addCase(cookieOrdered, (state) => {
            state.numOfGifts--
        })
    }
})

export default giftSlice.reducer