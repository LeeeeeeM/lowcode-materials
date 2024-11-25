import {CURRENT_COMP_PREFIX}  from '../_common';
const componentBadgeName = `${CURRENT_COMP_PREFIX}Badge`;

export default [
  {
    title: '徽标数',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_badge.png',
    schema: {
      componentName: componentBadgeName,
      props: {
        prefix: 'next-',
        showZero: true,
      },
    },
  },
];
