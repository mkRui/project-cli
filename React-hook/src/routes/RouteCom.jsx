import  React, { Component } from 'react';
import config from './config';
import page from './pageAll'
import { Route, Redirect, Switch } from 'react-router-dom';

export default class RouteCom extends Component {
    
    recursive (group) {
        return [...group.map(item => {
            if (item.component && !item.children) {
                return (
                    <Route path={item.path} component={page[item.component]} exact />
                )
            } else if (item.children) {
                return this.recursive(item.children)
            } else {
                return false
            }
        })]
    }

    render () {
        return (
            <Switch>
                <Route exact path="/" render={() => <Redirect to='/' />} />
                {
                    this.recursive(config)
                }
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        )
    }
}