import React from 'react';
import '@/styles/scss/App.less';

// 引入路由
import { Switch, Redirect, Route, HashRouter } from 'react-router-dom';

// 引入全局页面
import Home from '@/page/Home';
import noFund from '@/other/404';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <div>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/Home" />} />
              <Route path="/Home" component={Home}></Route>
              <Route path="/404" component={noFund}></Route>
              <Route render={() => <Redirect to="/404" />} />
            </Switch>
          </div>
      </HashRouter>
    </div>
  );
}

export default App;
