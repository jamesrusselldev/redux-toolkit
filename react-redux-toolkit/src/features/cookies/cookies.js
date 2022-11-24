import { createSlice } from '@reduxjs/toolkit'

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

export default cookieSlice.reducer
export const { ordered, restocked } = cookieSlice.actions