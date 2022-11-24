const configureStore = require('@reduxjs/toolkit').configureStore
//const reduxLogger = require('redux-logger')
//const logger = reduxLogger.createLogger()

const cakeReducer = require('../features/cake/cakeSlice')
const iceCreamReducer = require('../features/icecream/icecreamSlice')
const cookieReducer = require('../features/cookies/cookies')
const giftsReducer = require('../features/gifts/gifts')
const userReducer = require('../features/user/userSlice')

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        cookie: cookieReducer,
        gift: giftsReducer,
        user: userReducer
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store