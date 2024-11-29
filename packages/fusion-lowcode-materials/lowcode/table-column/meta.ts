import {CURRENT_COMP_PREFIX}  from '../_common';
const componentTableName = `${CURRENT_COMP_PREFIX}Table`;

export default {
  group: 'FUSION组件',
  componentName: `${componentTableName}.Column`,
  title: 'Table.Column',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentTableName,
    main: '',
    destructuring: true,
    subName: 'Column',
  },
  props: [
    {
      name: 'title',
      propType: 'string',
    },
    {
      name: 'dataIndex',
      propType: 'string',
    },
    {
      name: 'cell',
      propType: 'func',
    },
  ],
  configure: {
    props: {
      isExtends: true,
      override: [
        {
          name: 'cell',
          setter: {
            componentName: 'SlotSetter',
            initialValue: {
              type: 'JSSlot',
              value: [],
            },
            props: {
              supportParams: true,
            },
          },
          extraProps: {
            display: 'block',
          },
        },
      ],
    },
  },
  category: '基础',
};
