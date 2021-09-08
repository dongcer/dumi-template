## FWTable

Demo:

```tsx
import React from 'react';
import { FWTable } from 'link_antd';
const columns: Array<object> = [
  { title: '原料编码', key: 'code' },
  { title: '原料名称', key: 'name' },
  { title: '数量/t', key: 'num' },
  { title: '单价（含税）', key: 'price' },
  { title: '单价（不含税）', key: 'priced' },
  { title: '总金额（含税）', key: 'total' },
  { title: '总金额（不含税）', key: 'totaln' },
  { title: '化验指标', key: '' },
];
export default () => (
  <FWTable
    columns={columns}
    loading={false}
    dataSource={[]}
    pagination={{
      pageNo: 1,
      pageSize: 20,
      total: 100,
    }}
    //搜索表单区域
    SearchFC={() => <div>搜索</div>}
    // 表单上部操作
    OptionFC={() => (
      <div>
        <button>操作</button>
      </div>
    )}
    refresh={() => {
      console.log('刷新');
    }}
    changePage={(page: any, pageSize: any) => {
      console.log(page, pageSize);
    }}
  />
);
```
