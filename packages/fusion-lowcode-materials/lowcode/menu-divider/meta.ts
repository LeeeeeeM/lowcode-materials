import {CURRENT_COMP_PREFIX}  from '../_common';
const componentSubMenuName = `${CURRENT_COMP_PREFIX}SubMenu`;
const componentMenuName = `${CURRENT_COMP_PREFIX}Menu`;
const componentMenuButtonName = `${CURRENT_COMP_PREFIX}MenuButton`;

export default {
  group: 'FUSION基础组件',
  componentName: `${componentMenuName}.Divider`,
  title: '菜单分隔线',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentMenuName,
    main: '',
    destructuring: true,
    subName: 'Divider',
  },
  props: [
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    component: {
      isContainer: false,
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
