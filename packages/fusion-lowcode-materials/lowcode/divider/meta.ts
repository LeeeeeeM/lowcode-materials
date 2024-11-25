import snippets from './snippets';
import {CURRENT_COMP_PREFIX}  from '../_common';
const componentDividerName = `${CURRENT_COMP_PREFIX}Divider`;

export default {
  group: 'FUSION基础组件',
  componentName: componentDividerName,
  title: '分隔符',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentDividerName,
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'style',
      propType: 'object',
      description: '自定义内敛样式',
    },
    {
      name: 'children',
      propType: 'string',
      description: '文案',
      defaultValue: '分隔符',
    },
    {
      name: 'dashed',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '是否虚线',
          en_US: 'Dashed',
        },
      },
      propType: {
        type: 'bool',
      },
      description: '是否为虚线',
      defaultValue: false,
    },
    {
      name: 'direction',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '朝向',
          en_US: 'Direction',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['hoz', 'ver'],
      },
      description: '线是水平还是垂直类型',
      defaultValue: 'hoz',
    },
    {
      name: 'orientation',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '标题位置',
          en_US: 'Orientation',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['left', 'right', 'center'],
      },
      description: '分割线标题的位置',
      defaultValue: 'center',
    },
  ],
  icon: '',
  category: '通用',
  snippets,
};
