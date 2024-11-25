import {CURRENT_COMP_PREFIX}  from '../_common';
const componentNavName = `${CURRENT_COMP_PREFIX}Nav`;

export default {
  group: 'FUSION基础组件',
  componentName: 'Group',
  title: 'Group',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentNavName,
    main: '',
    destructuring: true,
    subName: 'Group',
  },
  props: [
    {
      name: 'className',
      propType: 'string',
      description: '自定义类名',
    },
    {
      name: 'label',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '标签内容',
    },
    {
      name: 'children',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '导航项和子导航',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  category: '基础',
};
