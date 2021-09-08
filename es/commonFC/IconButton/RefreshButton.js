import React from 'react';

var refresh = require('../../assets/img/refresh.svg');

var RefreshButton = function RefreshButton(props) {
  var onClick = props.onClick;
  return /*#__PURE__*/ React.createElement(
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
        src: refresh,
        alt: '',
      }),
    ),
  );
};

export default RefreshButton;
