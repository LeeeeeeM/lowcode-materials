import {CURRENT_COMP_PREFIX}  from '../_common';
const componentListName = `${CURRENT_COMP_PREFIX}List`;

export default {
  group: 'FUSION基础组件',
  componentName: `${componentListName}.Item`,
  title: '列表项',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentListName,
    main: '',
    destructuring: true,
    subName: 'Item',
  },
  props: [
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'title',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
    },
    {
      name: 'description',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
    },
    {
      name: 'media',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
    },
    {
      name: 'extra',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
    },
  ],
  icon: '',
  category: '信息输入',
};
