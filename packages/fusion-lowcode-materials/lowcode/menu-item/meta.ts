import {CURRENT_COMP_PREFIX}  from '../_common';
const componentSubMenuName = `${CURRENT_COMP_PREFIX}SubMenu`;
const componentMenuName = `${CURRENT_COMP_PREFIX}Menu`;
const componentMenuButtonName = `${CURRENT_COMP_PREFIX}MenuButton`;

export default {
  group: 'FU弃用组件',
  componentName: `${componentMenuName}.Item`,
  title: '菜单项',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentMenuName,
    main: '',
    destructuring: true,
    subName: 'Item',
  },
  props: [
    {
      name: 'key',
      propType: 'string',
      description: '菜单项标识符',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否禁用',
      defaultValue: false,
    },
    {
      name: 'helper',
      propType: 'node',
      description: '帮助文本',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: [componentMenuName, componentSubMenuName, `${componentMenuName}.Group`, componentMenuButtonName],
      },
    },
    advanced: {
      callbacks: {
        onHoverHook: () => false,
        onMouseDownHook: () => false,
        onClickHook: () => false,
        onMove: () => false,
      },
    },
  },
  icon: '',
  category: '信息输入',
};
