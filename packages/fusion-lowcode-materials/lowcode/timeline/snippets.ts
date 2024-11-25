import {CURRENT_COMP_PREFIX}  from '../_common';
const componentTimelineName = `${CURRENT_COMP_PREFIX}Timeline`;

export default [
  {
    title: '时间轴',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_timeline.png',
    schema: {
      componentName: componentTimelineName,
      props: {
        prefix: 'next-',
        fold: [],
        animation: true,
      },
      children: [
        {
          componentName: `${componentTimelineName}.Item`,
          props: {
            state: 'process',
            title: 'Buy',
            time: '2022-02-01',
          },
        },
        {
          componentName: `${componentTimelineName}.Item`,
          props: {
            title: 'Ship',
            time: '2022-02-01',
          },
        },
        {
          componentName: `${componentTimelineName}.Item`,
          props: {
            title: 'Order',
            time: '2022-02-01',
          },
        },
      ],
    },
  },
];
