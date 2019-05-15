import { applyMiddleware, createStore } from 'redux'

import thunk from 'redux-thunk'

import reducers from './reducers/index'

let store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store