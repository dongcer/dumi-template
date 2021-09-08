import { Tooltip } from 'antd';
import React from 'react';

interface SonProps {
  onClick?: Function;
}
const edit = require('../../assets/img/edit-btn.svg');

const EditButton: React.FC<SonProps> = (props: any) => {
  const { onClick } = props;
  return (
    <Tooltip placement="top" title={'编辑'}>
      <div
        style={{ width: '24px', height: '24px', cursor: 'pointer' }}
        onClick={onClick}
      >
        <img style={{ width: '100%', height: '100%' }} src={edit} alt="" />
      </div>
    </Tooltip>
  );
};

export default EditButton;
