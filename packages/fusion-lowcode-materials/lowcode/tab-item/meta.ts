import {CURRENT_COMP_PREFIX}  from '../_common';
const componentTabName = `${CURRENT_COMP_PREFIX}Tab`;

export default {
  group: 'FUSION基础组件',
  componentName: `${componentTabName}.Item`,
  title: '选项卡Item',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentTabName,
    main: '',
    destructuring: true,
    subName: 'Item',
  },
  props: [
    {
      name: 'isAutoContainer',
      initialValue: true,
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true,
      condition: () => false,
    },
    {
      name: 'title',
      propType: 'string',
      description: '选项卡标题',
    },
    {
      name: 'closeable',
      propType: 'bool',
      description: '单个选项卡是否可关闭',
      defaultValue: false,
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '选项卡是否被禁用',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      isMinimalRenderUnit: true,
      nestingRule: {
        parentWhitelist: [componentTabName],
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
  category: 'null',
};
