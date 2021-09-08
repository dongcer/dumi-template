'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var refresh = require('../../assets/img/refresh.svg');

var RefreshButton = function RefreshButton(props) {
  var onClick = props.onClick;
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      style: {
        width: '32px',
        height: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#FFFFFF',
        borderRadius: '4px',
        border: '1px solid #DDDDDD',
        marginLeft: '10px',
      },
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
        src: refresh,
        alt: '',
      }),
    ),
  );
};

var _default = RefreshButton;
exports.default = _default;
