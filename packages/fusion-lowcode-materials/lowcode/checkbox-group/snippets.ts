import {CURRENT_COMP_PREFIX}  from '../_common';
const componentCheckboxName = `${CURRENT_COMP_PREFIX}Checkbox`;
const componentCheckboxGroupName = `${CURRENT_COMP_PREFIX}CheckboxGroup`;


export default [
  {
    title: '复选按钮组',
    screenshot: 'https://img.alicdn.com/tfs/TB1EJN7uYY1gK0jSZTEXXXDQVXa-112-64.png',
    schema: {
      componentName: componentCheckboxGroupName,
      props: {
        prefix: 'next-',
        dataSource: [
          {
            label: '选项一',
            value: '1',
          },
          {
            label: '选项二',
            value: '2',
          },
          {
            label: '选项三',
            value: '3',
          },
        ],
      },
    },
  },
];