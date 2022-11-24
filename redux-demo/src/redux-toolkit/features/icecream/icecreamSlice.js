const cakeActions = require('../cake/cakeSlice').cakeActions
const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIceCream: 20
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState: initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIceCream--
        },
        restocked: (state, action) => {
            state.numOfIceCream += action.payload
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIceCream--
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIceCream--
        })
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions