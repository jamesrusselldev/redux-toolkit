const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCookies: 10
}

const cookieSlice = createSlice({
    name: 'cookie',
    initialState: initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfCookies--
        },
        restocked: (state, action) => {
            state.numOfCookies += action.payload
        }
    }
})

module.exports = cookieSlice.reducer
module.exports.cookieActions = cookieSlice.actions