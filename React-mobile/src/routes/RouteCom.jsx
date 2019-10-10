import React from 'react';
import config from './config';
import page from './pageAll';

import { Route, Redirect, Switch } from 'react-router-dom';

const RouteCom = () => {
  const user = window.localStorage.getItem('LoginMsg');
  const recursive = group => {
    return [
      ...group.map(item => {
        if (item.meta.setRouter === false) {
          return false;
        }
        if (item.component && !item.children) {
          return item.meta.permissions ? (
            !!user && (
              <Route
                path={item.path}
                key={item.path}
                component={page[item.component]}
              />
            )
          ) : (
            <Route
              path={item.path}
              key={item.path}
              component={page[item.component]}
            />
          );
        } else if (item.children) {
          return item.meta.permissions
            ? !!user && recursive(item.children)
            : recursive(item.children);
        } else {
          return false;
        }
      })
    ];
  };

  return (
    <Switch>
      <Route exact path="/Home" render={() => <Redirect to="/Home/OverviewData" />} />
      {recursive(config)}
      <Route render={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default RouteCom;
