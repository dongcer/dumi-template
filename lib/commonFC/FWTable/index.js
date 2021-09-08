'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/pagination/style');

var _pagination = _interopRequireDefault(require('antd/es/pagination'));

require('antd/es/table/style');

var _table = _interopRequireDefault(require('antd/es/table'));

require('antd/es/spin/style');

var _spin = _interopRequireDefault(require('antd/es/spin'));

var _react = _interopRequireWildcard(require('react'));

require('./index.less');

var _Operation = require('../../commonFn/Operation');

var _HelpButton = _interopRequireDefault(require('../IconButton/HelpButton'));

var _RefreshButton = _interopRequireDefault(
  require('../IconButton/RefreshButton'),
);

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop,
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
        arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var FWTable = function FWTable(props) {
  var columns = props.columns,
    loading = props.loading,
    dataSource = props.dataSource,
    pagination = props.pagination,
    refresh = props.refresh,
    changePage = props.changePage,
    SearchFC = props.SearchFC,
    OptionFC = props.OptionFC; // 表单ref

  var formRef = (0, _react.useRef)(); //设置新表头
  // const setFwColumns = useCallback(
  //   (cols) => {
  //     const fwColumns = cols.map((ele: any) => {
  //       if (ele.editCol) {
  //         let content
  //         switch (ele.editCol.type) {
  //           case 'input':
  //             content = (text: string | number | readonly string[] | undefined, record: any, i: any) => {
  //               return <Input defaultValue={text} />
  //             }
  //             break;
  //           case 'select':
  //             content = (text: any, record: any, i: any) => {
  //               return <Select>
  //                 {ele.editCol.list && ele.editCol.list.map((li: any, index: number) => {
  //                   return <Option key={index} value={li.name}>{li.name}</Option>
  //                 })}
  //               </Select>
  //             }
  //             break;
  //           case 'button':
  //             break;
  //           default:
  //             break;
  //         }
  //         return {
  //           ...ele,
  //           render: content
  //         }
  //       }
  //       return {
  //         ...ele,
  //       }
  //     })
  //     return fwColumns
  //   },
  //   [columns],
  // )
  // 表单Y轴长度

  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    scrollY = _useState2[0],
    setScrollY = _useState2[1];

  (0, _react.useEffect)(function () {
    setTimeout(function () {
      setScrollY((0, _Operation.getTableScroll)(formRef, 73));
    }, 0);
  }, []);
  return /*#__PURE__*/ _react.default.createElement(
    'section',
    {
      className: 'l-fwtable-container',
    },
    /*#__PURE__*/ _react.default.createElement(
      'section',
      {
        className: 'l-options',
      },
      SearchFC
        ? /*#__PURE__*/ _react.default.createElement(SearchFC, null)
        : '',
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'l-rightoption',
        },
        /*#__PURE__*/ _react.default.createElement(_RefreshButton.default, {
          onClick: function onClick() {
            refresh();
          },
        }),
        /*#__PURE__*/ _react.default.createElement(_HelpButton.default, null),
      ),
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'l-formwrap',
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'l-addbtn',
        },
        OptionFC
          ? /*#__PURE__*/ _react.default.createElement(OptionFC, null)
          : '',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _spin.default,
        {
          spinning: loading,
          tip: '正在加载中...',
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            ref: formRef,
          },
          /*#__PURE__*/ _react.default.createElement(_table.default, {
            rowKey: 'id',
            columns: columns,
            scroll: {
              y: scrollY,
              x: '900px',
            },
            pagination: false,
            dataSource: dataSource,
          }),
        ),
      ),
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'l-pagination',
      },
      /*#__PURE__*/ _react.default.createElement(_pagination.default, {
        showTotal: function showTotal(total, range) {
          return '\u6BCF\u9875'
            .concat(pagination.pageSize, '\u6761\u6570\u636E \u5171')
            .concat(total, '\u6761');
        },
        showQuickJumper: true,
        showSizeChanger: true,
        pageSize: pagination.pageSize,
        current: pagination.pageNo,
        total: pagination.total,
        onChange: changePage,
      }),
    ),
  );
};

var _default = FWTable;
exports.default = _default;
