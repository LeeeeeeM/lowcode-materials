import {CURRENT_COMP_PREFIX}  from '../_common';
const componentSelectName = `${CURRENT_COMP_PREFIX}Select`;

export default [
  {
    title: '选择器',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_select.png',
    schema: {
      componentName: componentSelectName,
      props: {
        mode: 'single',
        hasArrow: true,
        cacheValue: true,
        dataSource: [
          {
            value: '1',
            label: '选项1',
          },
          {
            value: '2',
            label: '选项2',
          },
          {
            value: '3',
            label: '选项3',
          },
        ],
      },
    },
  },
];
