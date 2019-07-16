import axios from 'axios';
import env from '../config/env';

let util = {};
util.title = function (title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://127.0.0.1:8888' :
    env === 'production' ?
        'https://www.url.com' :
        'https://debug.url.com';



 util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000,
});

// http request 拦截器
util.ajax.interceptors.request.use(function(config) {
        return config
    },function(error) {
        return Promise.reject(error)
});
// 响应时拦截
util.ajax.interceptors.response.use(function (response) {
    // 返回响应时做一些处理
    return response;
    }, function (error) {
        // 当响应异常时做一些处理
        return Promise.reject(error);
});
export default util;