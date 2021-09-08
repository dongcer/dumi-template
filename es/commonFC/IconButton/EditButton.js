import 'antd/es/tooltip/style';
import _Tooltip from 'antd/es/tooltip';
import React from 'react';

var edit = require('../../assets/img/edit-btn.svg');

var EditButton = function EditButton(props) {
  var onClick = props.onClick;
  return /*#__PURE__*/ React.createElement(
    _Tooltip,
    {
      placement: 'top',
      title: '编辑',
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
        src: edit,
        alt: '',
      }),
    ),
  );
};

export default EditButton;
