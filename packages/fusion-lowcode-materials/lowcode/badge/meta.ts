import snippets from './snippets';
import {CURRENT_COMP_PREFIX}  from '../_common';
const componentBadgeName = `${CURRENT_COMP_PREFIX}Badge`;

export default {
  group: 'FUSION基础组件',
  componentName: componentBadgeName,
  title: '徽标数',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: componentBadgeName,
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'count',
      title: 'count',
      propType: 'string',
      description: '展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时默认隐藏',
      defaultValue: 0,
    },
    {
      name: 'content',
      title: '内容',
      propType: 'node',
      description: '自定义节点内容',
    },
    {
      name: 'overflowCount',
      title: '封顶数字',
      propType: {
        type: 'oneOfType',
        value: ['number', 'string'],
      },
      description: '展示的封顶的数字',
      defaultValue: 99,
    },
    {
      name: 'showZero',
      title: {
        label: '展示零',
        tip: 'showZero|当count为 0 时，是否显示 count',
      },
      propType: 'bool',
      description: '当count为 0 时，是否显示 count',
      defaultValue: true,
    },
    {
      name: 'dot',
      title: {
        label: '红点',
        tip: 'dot|不展示数字，只展示一个小红点',
      },
      propType: 'bool',
      description: '不展示数字，只展示一个小红点',
      defaultValue: false,
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    props: {
      isExtends: true,
      override: [
        {
          name: 'count',
          title: {
            label: '展示的数字',
            tip: 'count|大于 overflowCount 时显示为 ${overflowCount}+，为 0 时默认隐藏',
            docUrl: 'https://fusion.alibaba-inc.com/pc/component/basic/badge',
          },
          setter: {
            componentName: 'MixedSetter',
            props: {
              setters: ['StringSetter', 'ExpressionSetter'],
            },
          },
        },
      ],
    },
  },
  icon: '',
  category: '信息展示',
  snippets,
};
