import {CURRENT_COMP_PREFIX}  from '../_common';
const componentDrawerName = `${CURRENT_COMP_PREFIX}Drawer`;

export default {
  group: 'FUSION基础组件',
  componentName: `${componentDrawerName}.Inner`,
  title: 'Drawer.Inner',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentDrawerName,
    main: '',
    destructuring: true,
    subName: 'Inner',
  },
  props: [
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'closeable',
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'role',
      propType: 'string',
      defaultValue: 'dialog',
    },
    {
      name: 'title',
      propType: 'string',
    },
    {
      name: 'placement',
      propType: {
        type: 'oneOf',
        value: ['top', 'right', 'bottom', 'left'],
      },
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'onClose',
      propType: 'func',
    },
    {
      name: 'locale',
      propType: 'object',
    },
    {
      name: 'headerStyle',
      propType: 'object',
    },
    {
      name: 'bodyStyle',
      propType: 'object',
    },
    {
      name: 'afterClose',
      propType: 'func',
    },
    {
      name: 'beforeOpen',
      propType: 'func',
    },
    {
      name: 'beforeClose',
      propType: 'func',
    },
    {
      name: 'cache',
      propType: 'bool',
    },
    {
      name: 'shouldUpdatePosition',
      propType: 'bool',
    },
  ],
  category: '基础',
};
