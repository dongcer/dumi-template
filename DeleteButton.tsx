// import del from '../../assets/img/delete-btn.svg';
import { Tooltip } from 'antd';
import React from 'react';
interface SonProps {
  onClick?: Function;
}
const del = require('../../assets/img/delete-btn.svg')
const DeleteButton: React.FC<SonProps> = (props: any) => {
  const { onClick } = props;
  return (
    <Tooltip placement="top" title={'删除'}>
      <div
        style={{ width: '24px', height: '24px', cursor: 'pointer' }}
        onClick={onClick}
      >
        <img style={{ width: '100%', height: '100%' }} src={del} alt="" />
      </div>
    </Tooltip>
  );
};

export default DeleteButton;
