// 分模块 reduce
import { createStore, applyMiddleware } from 'redux'

import { routerMiddleware } from 'connected-react-router'

import { createBrowserHistory } from 'history'

import Reducer from './reducers'

const history = createBrowserHistory()

const Store = createStore(
    Reducer(history),
)

export default Store