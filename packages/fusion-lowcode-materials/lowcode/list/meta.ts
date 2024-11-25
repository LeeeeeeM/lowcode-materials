import {CURRENT_COMP_PREFIX}  from '../_common';
const componentListName = `${CURRENT_COMP_PREFIX}List`;

export default {
  group: 'FUSION基础组件',
  componentName: componentListName,
  title: '列表',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentListName,
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'header',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
    },
    {
      name: 'size',
      propType: {
        type: 'oneOf',
        value: ['small', 'medium'],
      },
    },
    {
      name: 'footer',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
    },
    {
      name: 'divider',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
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
