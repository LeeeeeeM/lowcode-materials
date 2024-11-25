import {CURRENT_COMP_PREFIX}  from '../_common';
const componentDividerName = `${CURRENT_COMP_PREFIX}Divider`;

export default [
  {
    title: '分隔线',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_divider.png',
    schema: {
      componentName: componentDividerName,
      props: {
        prefix: 'next-',
        direction: 'hoz',
        orientation: 'center',
        children: '分隔符',
      },
    },
  },
];
