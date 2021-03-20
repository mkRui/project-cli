// 路由配置页面
import React from 'react'

import { Route, Redirect, Switch } from 'react-router-dom';

import config from './config'

const RouterComponent = () => {
    return (
        <Switch>
            <Route exact path="/Home" render={() => <Redirect to="/Login" />} />
            {
                config.filter(item => item.components && !item.meta.hidden).map(item => (
                    <Route
                        path={item.path}
                        key={item.path}
                        component={item.components}
                    />
                ))
            }
            <Route render={() => <Redirect to="/404" />} />
        </Switch>
    )
}

export default RouterComponent
