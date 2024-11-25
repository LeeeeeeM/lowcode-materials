import {CURRENT_COMP_PREFIX}  from '../_common';
const componentCardName = `${CURRENT_COMP_PREFIX}Card`;

export default {
  group: 'FUSION基础组件',
  componentName: 'CardMedia',
  title: 'CardMedia',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentCardName,
    main: '',
    destructuring: true,
    subName: 'Media',
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
      defaultValue: 'div',
    },
    {
      name: 'image',
      propType: 'string',
      description: '背景图片地址',
    },
    {
      name: 'src',
      propType: 'string',
      description: '媒体源文件地址',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'className',
      propType: 'string',
    },
  ],
  category: '基础',
};
