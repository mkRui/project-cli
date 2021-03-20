import React from 'react';

import { Switch, Redirect, Route, HashRouter } from 'react-router-dom'

import * as components from '@/router/page-all'

import zhCN from 'antd/es/locale/zh_CN';

// 多语言国际化
// import {  RawIntlProvider } from 'react-intl';

// 全局配置
import { ConfigProvider } from 'antd';

function App() {
  return (
    // <RawIntlProvider value={''}>
    <ConfigProvider locale={zhCN} componentSize={'small'} >
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/Login" />} />
            <Route path='/Home' component={components.Home} />          
          </Switch>
        </HashRouter>
      </div>
    </ConfigProvider>
  // </RawIntlProvider>
  );
}

export default App;
