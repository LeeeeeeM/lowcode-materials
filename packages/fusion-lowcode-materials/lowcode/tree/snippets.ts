import parseData from '../utils/parse-data';
import { createDataSource } from './adaptor';
import {CURRENT_COMP_PREFIX}  from '../_common';
const componentTreeName = `${CURRENT_COMP_PREFIX}Tree`;

const plainData = 'children\n\t123\n\t*[ashbin]333\n\t-222';
const keys = { selected: [], expanded: [] };
const dataSource = createDataSource(parseData(plainData, { parseContent: true }), keys);

export default [
  {
    title: '树形控件',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_tree.png',
    schema: {
      componentName: componentTreeName,
      props: {
        prefix: 'next-',
        selectable: true,
        defaultExpandAll: true,
        checkedStrategy: 'all',
        autoExpandParent: true,
        animation: true,
        focusable: true,
        plainData,
        dataSource,
      },
    },
  },
];
