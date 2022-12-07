import { configureStore } from '@reduxjs/toolkit'
//const reduxLogger = require('redux-logger')
//const logger = reduxLogger.createLogger()

import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/icecream/icecreamSlice'
import cookieReducer from '../features/cookies/cookies'
import giftsReducer from '../features/gifts/gifts'
import userReducer from '../features/user/userSlice'
import stockReducer from '../features/stock/stockSlice'

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        cookie: cookieReducer,
        gift: giftsReducer,
        user: userReducer,
        stock: stockReducer
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store