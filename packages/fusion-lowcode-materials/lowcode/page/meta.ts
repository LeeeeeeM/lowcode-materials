import {CURRENT_COMP_PREFIX}  from '../_common';
const componentTypographyName = `${CURRENT_COMP_PREFIX}Typography`;

export default [
  {
    group: 'FUSION基础组件',
    componentName: 'Page',
    title: '页面',
    props: [
      {
        name: 'style',
        propType: 'object',
        defaultValue: {
          padding: 12,
        },
      },
    ],
    configure: {
      events: {
        supportedLifecycles: [
          {
            description: '初始化时',
            name: 'constructor',
          },
          {
            description: '装载后',
            name: 'componentDidMount',
          },
          {
            description: '更新时',
            name: 'componentDidMount',
          },
          {
            description: '卸载时',
            name: 'componentWillUnmount',
          },
        ],
      },
      supports: {
        style: true,
      },
      component: {
        isContainer: true,
        disableBehaviors: '*',
      },
    },
    category: '基础',
  },
  {
    componentName: 'Leaf',
    npm: {
      package: '@alilc/lowcode-materials',
      version: '{{version}}',
      exportName: componentTypographyName,
      main: '',
      destructuring: true,
      subName: 'Text',
    },
    configure: {
      component: {
        disableBehaviors: '*',
      },
      advanced: {
        callbacks: {
          onHoverHook: () => false,
          onMouseDownHook: () => false,
          onClickHook: () => false,
        },
      },
    },
  },
];
