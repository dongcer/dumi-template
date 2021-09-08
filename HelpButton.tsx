import React from 'react';

interface SonProps {
  onClick?: Function;
}
const refresh = require('../../assets/img/help.svg');

const HelpButton: React.FC<SonProps> = (props: any) => {
  const { onClick } = props;
  return (
    <div
      style={{
        width: '32px',
        height: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#FFFFFF',
        borderRadius: '4px',
        border: '1px solid #DDDDDD',
        marginLeft: '10px',
      }}
    >
      <div
        style={{ width: '24px', height: '24px', cursor: 'pointer' }}
        onClick={onClick}
      >
        <img style={{ width: '100%', height: '100%' }} src={refresh} alt="" />
      </div>
    </div>
  );
};

export default HelpButton;
