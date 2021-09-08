/*
 * @Author: your name
 * @Date: 2021-07-31 11:00:56
 * @LastEditTime: 2021-09-06 21:51:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \link_antd\src\commonData\api.ts
 */
import { fetch } from '../commonFn/Axios';
var baseUrl =
  window.location.hostname === 'dmio.360che.com'
    ? 'http://dmio-api.360che.com'
    : 'http://dmio-api-test.360che.com'; // : 'http://192.168.21.3:7000'

export default {
  testApi1: function testApi1(url, data) {
    return fetch({
      url: ''.concat(url),
      data: data,
      type: 'POST',
    });
  },
  testApi2: function testApi2(url, data) {
    return fetch({
      url: ''.concat(url),
      data: data,
      type: 'GET',
    });
  },
};
