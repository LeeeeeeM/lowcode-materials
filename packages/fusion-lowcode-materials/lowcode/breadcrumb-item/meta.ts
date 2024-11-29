import {CURRENT_COMP_PREFIX}  from '../_common';
const componentBreadcrumbName = `${CURRENT_COMP_PREFIX}Breadcrumb`;

export default {
  group: 'FUSION组件',
  componentName: `${componentBreadcrumbName}.Item`,
  title: '面包屑 Item',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentBreadcrumbName,
    main: '',
    destructuring: true,
    subName: 'Item',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'children',
      description: '内容',
      propType: 'string',
    },
    {
      name: 'link',
      propType: 'string',
      description: '面包屑节点链接，如果设置这个属性，则该节点为`<a />` ，否则是`<span />`',
    },
    {
      name: 'activated',
      propType: 'bool',
    },
    {
      name: 'separator',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
    },
    {
      name: 'className',
      propType: 'any',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    props: [
      {
        name: 'children',
        title: '文本内容',
        setter: 'StringSetter',
        supportVariable: true,
      },
    ],
  },
  icon: '',
  category: '引导',
};
