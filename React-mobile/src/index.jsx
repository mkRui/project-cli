import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/scss/index.css';
import App from './layout/App';
import './styles/scss/theme.less';
import 'reset.less';
import * as serviceWorker from './serviceWorker';
import 'lib-flexible';

// hook redux
import { StoreContext, store } from './store/index';

const Provider = StoreContext.Provider;

ReactDOM.render(
  <Provider value={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
