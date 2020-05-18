// 路由路径集合

import React from 'react';

import Loadable from 'react-loadable';

const Loading: React.FC = () => {
    return (
        <div  style={{ paddingTop: 100, textAlign: 'center' }}>
            
        </div>
    )
}

const asyncComponent = (component: any) => {
    return Loadable({
      loader: component,
      loading: Loading,
    });
};

export const Home = asyncComponent(() => require('@/page/Home'))
