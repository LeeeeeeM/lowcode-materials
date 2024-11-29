import {CURRENT_COMP_PREFIX}  from '../_common';
const componentTypographyName = `${CURRENT_COMP_PREFIX}Typography`;

export default {
  group: 'FUSION组件',
  componentName: componentTypographyName,
  title: 'Text',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentTypographyName,
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'component',
      propType: {
        type: 'instanceOf',
        value: 'elementType',
      },
      description: '设置标签类型',
      defaultValue: 'article',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'children',
      title: '内容',
      propType: 'string',
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
  },
  icon: '',
  category: '常用',
};
