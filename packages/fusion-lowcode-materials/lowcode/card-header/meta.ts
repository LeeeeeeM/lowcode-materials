import {CURRENT_COMP_PREFIX}  from '../_common';
const componentCardName = `${CURRENT_COMP_PREFIX}Card`;

export default {
  group: 'FUSION基础组件',
  componentName: 'CardHeader',
  title: 'CardHeader',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentCardName,
    main: '',
    destructuring: true,
    subName: 'Header',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'title',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '卡片的标题',
    },
    {
      name: 'subTitle',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '卡片的副标题',
    },
    {
      name: 'extra',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '标题区域的用户自定义内容',
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
