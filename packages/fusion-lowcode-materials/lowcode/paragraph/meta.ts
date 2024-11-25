import {CURRENT_COMP_PREFIX}  from '../_common';
const componentTypographyName = `${CURRENT_COMP_PREFIX}Typography`;
const componentParagraphName = `${CURRENT_COMP_PREFIX}Paragraph`;

export default {
  group: 'FUSION基础组件',
  componentName: componentParagraphName,
  title: 'Paragraph',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentTypographyName,
    main: '',
    destructuring: true,
    subName: 'Paragraph',
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
      defaultValue: 'p',
    },
    {
      name: 'type',
      defaultValue: 'long',
    },
    {
      name: 'size',
      defaultValue: 'medium',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  category: '基础',
};
