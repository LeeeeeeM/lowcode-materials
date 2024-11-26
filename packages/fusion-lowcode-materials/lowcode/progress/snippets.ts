import {CURRENT_COMP_PREFIX}  from '../_common';
const componentProgressName = `${CURRENT_COMP_PREFIX}Progress`;

export default [
  {
    title: '进度指示器',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_progress.png',
    schema: {
      componentName: componentProgressName,
      props: {
        prefix: 'next-',
        shape: 'line',
        size: 'medium',
        state: 'normal',
        percent: 30,
      },
    },
  },
];
