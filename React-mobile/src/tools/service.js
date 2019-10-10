import axios from './../api/axios';

import message from './message';

// 历史纪录跳转
import { createHashHistory } from 'history';
let code = true;

export default function apiRequest(type, url, data) {
  return axios[type](url, type === 'get' ? { params: data } : data)
    .then(res => {
      if (res.is_succ) {
        code = true;
        return res.data;
      } else {
        if (res.code === 100025 || res.code === 202805) {
          if (code) {
            createHashHistory().push('/Login/LoginForm');
          }
          window.sessionStorage.setItem('account', '');
          code = false;
        } else {
          message('error', res.message);
        }
        return false;
      }
    })
    .catch(err => {
      if (err) {
        if (err.code === 100025 || err.code === 202805) {
          if (code) {
            createHashHistory().push('/Login/LoginForm');
          }
          window.sessionStorage.setItem('account', '');
          code = false;
        } else {
          message('error', err.message);
        }
      }
      return Promise.reject(err);
    });
}
