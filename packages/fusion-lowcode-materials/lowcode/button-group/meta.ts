import { CURRENT_COMP_PREFIX } from '../_common';
const componentButtonName = `${CURRENT_COMP_PREFIX}Button`;

export default {
  group: 'FUSION基础组件',
  componentName: `${componentButtonName}.Group`,
  title: '按钮组',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentButtonName,
    main: '',
    destructuring: true,
    subName: 'Group',
  },
  props: [
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'size',
      propType: 'string',
      description: '统一设置 Button 组件的按钮大小',
      defaultValue: 'medium',
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'children',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
    },
    {
      name: 'style',
      propType: 'object',
      description: '自定义内联样式',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        childWhitelist: [componentButtonName],
      },
    },
    props: [
      {
        name: 'size',
        display: 'block',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '统一设置子按钮的尺寸',
            en_US: 'Button Size',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: size | 说明: 统一设置子按钮的尺寸',
            en_US: 'prop: size | description: button size',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: { options: ['small', 'medium', 'large'] },
        },
        defaultValue: 'medium',
      },
    ],
  },
  icon: '',
  category: '常用',
};
