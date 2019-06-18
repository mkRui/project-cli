import React, { useEffect, useCallback } from 'react';

// redux
import { useMappedState } from '@/store/index'

// 多语言国际化
import { addLocaleData, IntlProvider } from 'react-intl'
import { LocaleProvider } from 'antd'

// 引入路由
import {Switch, Redirect, Route, HashRouter} from 'react-router-dom'

// 引入全局页面
import Home from './../page/Home'
import Login from './../page/Login'
import noFund from './../page/Other/404'

function App() {
  let { lang } = useMappedState(
    useCallback(
        (state) => ({
            lang: state.Common.lang
        }),
        [],
    )
  )

  addLocaleData(lang.data)

  useEffect((...item) => {
    addLocaleData(lang.data)
  })

  return (
    <div className="App">
      <IntlProvider locale={lang.locale} messages={lang.message}>
            <LocaleProvider locale={lang.antd}>
                <HashRouter>
                  <div>
                      <Switch>
                        <Route exact path="/" render={() => <Redirect to='/Home' />} />
                        <Route path='/Home' component={Home}></Route>
                        <Route path='/Login' component={Login}></Route>
                        <Route path='/404' component={noFund}></Route>
                        <Route render={() => <Redirect to="/404" />} />
                      </Switch>
                  </div>
                </HashRouter>
                {/* <Home change={this.change.bind(this)} /> */}
            </LocaleProvider>
        </IntlProvider>
    </div>
  );
}

export default App;
