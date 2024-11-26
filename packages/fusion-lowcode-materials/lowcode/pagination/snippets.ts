import {CURRENT_COMP_PREFIX}  from '../_common';
const componentPaginationName = `${CURRENT_COMP_PREFIX}Pagination`;

export default [
  {
    title: '翻页器',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_pagination.png',
    schema: {
      componentName: componentPaginationName,
      props: {
        prefix: 'next-',
        type: 'normal',
        shape: 'normal',
        size: 'medium',
        defaultCurrent: 1,
        total: 100,
        pageShowCount: 5,
        pageSize: 10,
        pageSizePosition: 'start',
        showJump: true,
      },
    },
  },
];
