import {CURRENT_COMP_PREFIX}  from '../_common';
const componentUploadName = `${CURRENT_COMP_PREFIX}Upload`;

export default {
  group: 'FUSION组件',
  componentName: `${componentUploadName}.Dragger`,
  title: 'Upload.Dragger',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentUploadName,
    main: '',
    destructuring: true,
    subName: 'DragUpload',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      description: '样式前缀',
      defaultValue: 'next-',
    },
    {
      name: 'locale',
      propType: 'object',
    },
    {
      name: 'shape',
      propType: 'string',
    },
    {
      name: 'onDragOver',
      propType: 'func',
    },
    {
      name: 'onDragLeave',
      propType: 'func',
    },
    {
      name: 'onDrop',
      propType: 'func',
    },
    {
      name: 'limit',
      propType: 'number',
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'defaultValue',
      propType: {
        type: 'instanceOf',
        value: 'array',
      },
    },
    {
      name: 'children',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
    },
    {
      name: 'listType',
      propType: 'string',
    },
    {
      name: 'timeout',
      propType: 'number',
    },
  ],
  category: '基础',
};
