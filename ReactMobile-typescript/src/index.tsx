import React from 'react';
import ReactDOM from 'react-dom';
import App from './layout/App';
import * as serviceWorker from './serviceWorker';
import 'lib-flexible';
import '@/styles/common.less'

// store
import { ReduxStore, StoreContext } from './store'

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={ReduxStore()}>
        <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
