import {CURRENT_COMP_PREFIX}  from '../_common';
const componentBreadcrumbName = `${CURRENT_COMP_PREFIX}Breadcrumb`;

export default [
  {
    title: '面包屑',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_breadcrumb.png',
    schema: {
      componentName: componentBreadcrumbName,
      props: {
        maxNode: 100,
        component: 'nav',
      },
      children: [
        {
          componentName: `${componentBreadcrumbName}.Item`,
          props: {
            children: '一级',
            primaryKey: 'breadcrumb-item-1',
            target: '_self',
          },
        },
        {
          componentName: `${componentBreadcrumbName}.Item`,
          props: {
            children: '二级',
            primaryKey: 'breadcrumb-item-2',
            target: '_self',
          },
        },
        {
          componentName: `${componentBreadcrumbName}.Item`,
          props: {
            children: '三级',
            primaryKey: 'breadcrumb-item-3',
            target: '_self',
          },
        },
      ],
    },
  },
];
