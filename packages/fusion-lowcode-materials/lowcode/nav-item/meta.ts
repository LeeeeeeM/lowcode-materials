import {CURRENT_COMP_PREFIX}  from '../_common';
const componentNavName = `${CURRENT_COMP_PREFIX}Nav`;

export default {
  group: 'FUSION组件',
  componentName: `${componentNavName}.Item`,
  title: '导航项',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentNavName,
    main: '',
    destructuring: true,
    subName: 'Item',
  },
  props: [
    {
      name: 'icon',
      propType: {
        type: 'icon',
      },
      description: '自定义图标',
    },
    {
      name: 'children',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
      description: '导航内容',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  icon: '',
  category: '引导',
};
