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

var edit = require('../../assets/img/edit-btn.svg');

var EditButton = function EditButton(props) {
  var onClick = props.onClick;
  return /*#__PURE__*/ _react.default.createElement(
    _tooltip.default,
    {
      placement: 'top',
      title: '编辑',
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
        src: edit,
        alt: '',
      }),
    ),
  );
};

var _default = EditButton;
exports.default = _default;
