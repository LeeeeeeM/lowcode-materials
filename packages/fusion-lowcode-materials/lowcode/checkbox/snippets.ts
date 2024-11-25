import {CURRENT_COMP_PREFIX}  from '../_common';
const componentCheckboxName = `${CURRENT_COMP_PREFIX}Checkbox`;
const componentCheckboxGroupName = `${CURRENT_COMP_PREFIX}CheckboxGroup`;


export default [
  {
    title: '复选按钮',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_menu.png',
    schema: {
      componentName: componentCheckboxName,
      props: {
        label: 'Check Option',
      },
    },
  },
];
