// 路由路径集合

import React from 'react';

import Loadable from 'react-loadable';

import { Spin } from 'antd'

const Loading: React.FC = () => {
    return (
        <div  style={{ paddingTop: 100, textAlign: 'center' }}>
            <Spin size='large' />
        </div>
    )
}

const asyncComponent = (component: any) => {
    return Loadable({
      loader: component,
      loading: Loading,
    });
};

const Home = asyncComponent(() => import('@/page/home'))

export {
    Home
}