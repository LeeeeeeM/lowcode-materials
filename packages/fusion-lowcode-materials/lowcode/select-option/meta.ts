import {CURRENT_COMP_PREFIX}  from '../_common';
const componentSelectName = `${CURRENT_COMP_PREFIX}Select`;

export default {
  group: 'FUSION基础组件',
  componentName: `${componentSelectName}.Option`,
  title: 'Select.Option',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentSelectName,
    main: '',
    destructuring: true,
    subName: 'Option',
  },
  props: [
    {
      name: 'value',
      propType: 'string',
      description: '选项值',
      defaultValue: 'test',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否禁用',
      defaultValue: false,
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
  },
  icon: '',
  category: '信息输入',
};
