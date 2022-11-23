const redux = require('redux')
const reduxLogger = require('redux-logger')
const axios = require('axios')
const thunkMiddleware = require('redux-thunk').default

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()



const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'


function fetchUserRequest() {
    return {
        type: FETCH_USERS_REQUESTED
    }
}

function fetchUsersSucceeded(users) {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    }
}

function fetchUsersFailed(err) {
    return {
        type: FETCH_USERS_FAILED,
        payload: err
    }
}


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map((user) => user.id)
                dispatch(fetchUsersSucceeded(users))
            })
            .catch((error) => {
                dispatch(fetchUsersFailed(error.message))
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => console.log(store.getState()))
store.dispatch(fetchUsers())
