import {CURRENT_COMP_PREFIX}  from '../_common';
const componentCascaderName = `${CURRENT_COMP_PREFIX}Cascader`;

export default [
  {
    title: '级联',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_cascader.png',
    schema: {
      componentName: componentCascaderName,
      props: {
        prefix: 'next-',
        expandTriggerType: 'click',
        dataSource: [
          {
            value: '2974',
            label: '西安',
            children: [
              {
                value: '2975',
                label: '西安市',
              },
              {
                value: '2976',
                label: '高陵县',
              },
              {
                value: '2977',
                label: '蓝田县',
              },
            ],
          },
        ],
      },
    },
  },
];
