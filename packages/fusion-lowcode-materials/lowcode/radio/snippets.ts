import {CURRENT_COMP_PREFIX}  from '../_common';
const componentRadioName = `${CURRENT_COMP_PREFIX}Radio`;

export default [
  {
    title: '单选按钮',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_radio.png',
    schema: {
      componentName: componentRadioName,
      props: {
        label: '选项一',
        value: '1',
      },
    },
  },
  {
    title: '单选按钮组',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_radio.png',
    schema: {
      componentName: `${componentRadioName}.Group`,
      props: {
        dataSource: [
          {
            label: '选项一',
            value: '1',
          },
          {
            label: '选项二',
            value: '2',
          },
          {
            label: '选项三',
            value: '3',
          },
        ],
      },
    },
  },
];
