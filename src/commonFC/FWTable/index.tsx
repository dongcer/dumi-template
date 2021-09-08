import { Table, Spin, Pagination } from 'antd';
import React, { useRef, useState, useEffect } from 'react';
import './index.less';
import { getTableScroll } from '../../commonFn/Operation';
import HelpButton from '../IconButton/HelpButton';
import RefreshButton from '../IconButton/RefreshButton';
interface SonProps {
  columns: object[];
  loading: boolean;
  dataSource: any[];
  pagination: {
    pageNo: number;
    pageSize: number;
    total: number;
  };
  refresh: Function;
  changePage: Function;
  SearchFC?: React.FC;
  OptionFC?: React.FC;
}
const FWTable: React.FC<SonProps> = (props: any) => {
  const {
    columns,
    loading,
    dataSource,
    pagination,
    refresh,
    changePage,
    SearchFC,
    OptionFC,
  } = props;
  // 表单ref
  const formRef: any = useRef();
  //设置新表头
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
  const [scrollY, setScrollY] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setScrollY(getTableScroll(formRef, 73));
    }, 0);
  }, []);

  return (
    <section className='l-fwtable-container'>
      <section className='l-options'>
        {SearchFC ? <SearchFC></SearchFC> : ''}

        <div className='l-rightoption'>
          <RefreshButton
            onClick={() => {
              refresh();
            }}
          ></RefreshButton>
          <HelpButton></HelpButton>
        </div>
      </section>

      <div className='l-formwrap'>
        <div className='l-addbtn'>
          {OptionFC ? <OptionFC></OptionFC> : ''}
        </div>
        <Spin spinning={loading} tip={'正在加载中...'}>
          <div ref={formRef}>
            <Table
              rowKey="id"
              columns={columns}
              scroll={{ y: scrollY, x: '900px' }}
              pagination={false}
              dataSource={dataSource}
            />
          </div>
        </Spin>
      </div>
      <div className='l-pagination'>
        <Pagination
          showTotal={(total, range) =>
            `每页${pagination.pageSize}条数据 共${total}条`
          }
          showQuickJumper
          showSizeChanger
          pageSize={pagination.pageSize}
          current={pagination.pageNo}
          total={pagination.total}
          onChange={changePage}
        />
      </div>
    </section>
  );
};
export default FWTable;
