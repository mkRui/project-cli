import React from 'react';

import { Switch, Redirect, Route, HashRouter } from 'react-router-dom'

import * as components from '@/router/page-all'

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/Home" />} />
          <Route path='/Home' component={components.Home} />          
          <Route path='/Login' component={components.Login} />          
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
