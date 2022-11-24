const createSlice = require('@reduxjs/toolkit').createSlice
const cakeActions = require('../cake/cakeSlice').cakeActions
const iceCreamActions = require('../icecream/icecreamSlice').iceCreamActions
const cookieActions = require('../cookies/cookies').cookieActions

const initialState = {
    numOfGifts: 100
}

const giftSlice = createSlice({
    name: 'gift',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfGifts--
        })
        builder.addCase(iceCreamActions.ordered, (state) => {
            state.numOfGifts--
        })
        builder.addCase(cookieActions.ordered, (state) => {
            state.numOfGifts--
        })
    }
})

module.exports = giftSlice.reducer
module.exports.giftActions = giftSlice.actions