const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/icecream/icecreamSlice').iceCreamActions
const cookieActions = require('./features/cookies/cookies').cookieActions
const giftActions = require('./features/gifts/gifts').giftActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState())
})

store.dispatch(fetchUsers())

//Dispatch Items
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(3))

// store.dispatch(cookieActions.ordered())
// store.dispatch(cookieActions.ordered())
// store.dispatch(cookieActions.ordered())
// store.dispatch(cookieActions.restocked(3))

//unsubscribe()