import { applyMiddleware, createStore } from 'redux'
import { create } from 'redux-react-hook'

import reducers from './reducers/index'

export const store = createStore(
    reducers,
    applyMiddleware()
)


export const { StoreContext, useDispatch, useMappedState } = create()