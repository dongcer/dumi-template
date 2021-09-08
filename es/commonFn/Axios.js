import axios from 'axios'; // import {
//   Message,
// } from 'antd'
//请求的响应防抖函数
// const debounce = (func, wait, ...args) => {
//   let timeout
//   return function () {
//     const context = this
//     if (timeout) clearTimeout(timeout)
//     let callNow = !timeout;
//     timeout = setTimeout(() => {
//       timeout = null;
//     }, wait)
//     if (callNow) func.apply(context, args)
//   }
// }
// const goLogin = () => {
//   setTimeout(() => {
//     window.location.href = window.location.origin + '/login'
//   }, 1000);
// }
// const message = () => {
//   setTimeout(() => {
//     Message({
//       showClose: true,
//       message: '获取钉钉信息失败,请重新扫描',
//       type: 'error'
//     });
//   }, 500);
// }
// axios.defaults.timeout = 8000
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

axios.defaults.withCredentials = true; // 请求拦截

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (err) {
    console.log('请求超时');
    return Promise.reject(err);
  },
); // 响应拦截

axios.interceptors.response.use(
  function (data) {
    if (data.data.status === 40002) {
      // Message({
      //   type: 'error',
      //   message: data.data.msg,
      // })
      // debounce(goLogin, 5000)()
    } // if (data.data.status === 50000) {
    //   Message({
    //     type: 'error',
    //     message: data.data.msg,
    //   })
    //   debounce(message, 5000)()
    // }

    return data;
  },
  function (err) {
    console.log('请求错误：' + err);
    return Promise.reject(err);
  },
);

var fetch = function fetch(_ref) {
  var url = _ref.url,
    data = _ref.data,
    type = _ref.type;

  if (type === 'POST') {
    return axios.post(url, data.data, {
      params: data.params,
    });
  } else if (type === 'GET') {
    return axios.get(url, {
      params: data,
    });
  } else if (type === 'PUT') {
    return axios.put(url, data.data, {
      params: data.params,
    });
  } else if (type === 'DELETE') {
    return axios.delete(url, {
      params: data,
    });
  }
};

export { axios, fetch };
