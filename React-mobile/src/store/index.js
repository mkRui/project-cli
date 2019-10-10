import { applyMiddleware, createStore } from 'redux';
import { create } from 'redux-react-hook';

import thunk from 'redux-thunk';

import reducers from './reducers/index';

export const store = createStore(reducers, applyMiddleware(thunk));

export const { StoreContext, useDispatch, useMappedState } = create();
