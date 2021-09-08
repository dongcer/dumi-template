"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Axios = require("../commonFn/Axios");

/*
 * @Author: your name
 * @Date: 2021-07-31 11:00:56
 * @LastEditTime: 2021-09-06 21:51:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \link_antd\src\commonData\api.ts
 */
var baseUrl = window.location.hostname === 'dmio.360che.com' ? 'http://dmio-api.360che.com' : 'http://dmio-api-test.360che.com'; // : 'http://192.168.21.3:7000'

var _default = {
  testApi1: function testApi1(url, data) {
    return (0, _Axios.fetch)({
      url: "".concat(url),
      data: data,
      type: 'POST'
    });
  },
  testApi2: function testApi2(url, data) {
    return (0, _Axios.fetch)({
      url: "".concat(url),
      data: data,
      type: 'GET'
    });
  }
};
exports.default = _default;