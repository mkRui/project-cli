import ax from 'axios'
import apiUrl from './../config'
import queryString from 'querystring'
import message from './../utils/message'

const axios = ax.create({
    baseURL: apiUrl,
    timeout: 5000
})

axios.interceptors.request.use(function (config) {
    if (config.method === 'post' ||
        config.method === 'put' ||
        config.method === 'delete' ||
        config.method === 'patch'
    ) {
        // console.log(config)
        if (config.data.request) {
            delete config.data.request
        } else {
            config.data = queryString.stringify(config.data)
        }
        // debugger
    }
    if (window.localStorage.getItem('LoginMsg')) {
        config.headers['Authorization'] = window.localStorage.getItem('LoginMsg');
    }
    return config
}, function (error) {
    return Promise.reject(error)
})


axios.interceptors.response.use(function (res) {
    if (!res.data.is_succ) {
        message('error', res.data.message)
    }
    if (res.headers['Authorization']) {
        window.localStorage.setItem('LoginMsg', JSON.stringify(res.headers['Authorization']))
    }
    //对响应数据做些事
    return res.data;
  }, function (...error) {
    if (error[0].response && error[0].response.data.code === 100025) {
        window.localStorage.setItem('LoginMsg', '')
        window.location.href = `${window.location.origin}/#/Login`
    }
    return Promise.reject(error[0].response && error[0].response.data)
})

export default axios