'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/tooltip/style');

var _tooltip = _interopRequireDefault(require('antd/es/tooltip'));

var _react = _interopRequireDefault(require('react'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var del = require('../../assets/img/delete-btn.svg');

var DeleteButton = function DeleteButton(props) {
  var onClick = props.onClick;
  return /*#__PURE__*/ _react.default.createElement(
    _tooltip.default,
    {
      placement: 'top',
      title: '删除',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        style: {
          width: '24px',
          height: '24px',
          cursor: 'pointer',
        },
        onClick: onClick,
      },
      /*#__PURE__*/ _react.default.createElement('img', {
        style: {
          width: '100%',
          height: '100%',
        },
        src: del,
        alt: '',
      }),
    ),
  );
};

var _default = DeleteButton;
exports.default = _default;
