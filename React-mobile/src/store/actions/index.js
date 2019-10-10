import apiRequest from '@/tools/service';

// 获取用户基础信息
export function getUser(dispatch) {
  return apiRequest('get', '/user').then(res => res && dispatch(user(res)));
}

// 退出登录
export function logOut(dispatch) {
  return apiRequest('get', '/passport/logout').then(
    res => res && dispatch(user(''))
  );
}

export function user(text) {
  if (!text) {
    window.localStorage.setItem('LoginMsg', '');
  }
  return { type: 'setUser', text };
}
