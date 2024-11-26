import {CURRENT_COMP_PREFIX}  from '../_common';
const componentTreeSelectName = `${CURRENT_COMP_PREFIX}TreeSelect`;

export default [
  {
    title: '树型选择控件',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_tree-select.png',
    schema: {
      componentName: componentTreeSelectName,
      props: {
        prefix: 'next-',
        size: 'medium',
        hasArrow: true,
        hasBorder: true,
        autoWidth: true,
        notFoundContent: 'Not Found',
        treeCheckedStrategy: 'parent',
      },
    },
  },
];
