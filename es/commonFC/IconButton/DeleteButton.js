import 'antd/es/tooltip/style';
import _Tooltip from 'antd/es/tooltip';
import React from 'react';

var del = require('../../assets/img/delete-btn.svg');

var DeleteButton = function DeleteButton(props) {
  var onClick = props.onClick;
  return /*#__PURE__*/ React.createElement(
    _Tooltip,
    {
      placement: 'top',
      title: '删除',
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: {
          width: '24px',
          height: '24px',
          cursor: 'pointer',
        },
        onClick: onClick,
      },
      /*#__PURE__*/ React.createElement('img', {
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

export default DeleteButton;
