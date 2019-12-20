// 分模块 reduce
import { createStore, applyMiddleware, compose } from 'redux'

import { routerMiddleware } from 'connected-react-router'

import thunk from 'redux-thunk'

import { createBrowserHistory } from 'history'

import Reducer from './reducers'

const history = createBrowserHistory()

const composeEnhancer = ((window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose; // eslint-disable-line

const Store = createStore(
    Reducer(history),
    composeEnhancer(applyMiddleware(routerMiddleware(history), thunk))
)

export default Store