import {CURRENT_COMP_PREFIX}  from '../_common';
const componentCardName = `${CURRENT_COMP_PREFIX}Card`;

export default {
  group: 'FU弃用组件',
  componentName: 'CardActions',
  title: 'CardActions',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentCardName,
    main: '',
    destructuring: true,
    subName: 'Actions',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'component',
      propType: {
        type: 'instanceOf',
        value: 'elementType',
      },
      description: '设置标签类型',
      defaultValue: 'div',
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  category: '基础',
};
