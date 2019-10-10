import ax from 'axios';
import apiUrl from './../config';
import queryString from 'querystring';

const axios = ax.create({
  baseURL: apiUrl,
  timeout: 15000
});

axios.interceptors.request.use(
  function(config) {
    if (
      config.method === 'post' ||
      config.method === 'put' ||
      config.method === 'delete' ||
      config.method === 'patch'
    ) {
      if (config.data.request) {
        delete config.data.request;
      } else {
        config.data = queryString.stringify(config.data);
      }
    }
    if (window.localStorage.getItem('LoginMsg')) {
      config.headers['Authorization'] = window.localStorage.getItem('LoginMsg');
    }
    config.headers['x-api-lang'] =
      window.localStorage.getItem('langFont') || 'zh_cn';
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(res) {
    if (res.headers['authorization']) {
      window.localStorage.setItem('LoginMsg', res.headers['authorization']);
    }
    //对响应数据做些事
    return res.data;
  },
  function(...error) {
    if (error[0].response && error[0].response.data.code === 100025) {
      // window.location.href = `${window.location.origin}/#/Login/LoginForm`;
      window.localStorage.setItem('LoginMsg', '');
      window.sessionStorage.setItem('account', '');
    }
    return Promise.reject(error[0].response && error[0].response.data);
  }
);

export default axios;
