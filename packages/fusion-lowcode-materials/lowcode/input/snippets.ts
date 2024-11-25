import {CURRENT_COMP_PREFIX}  from '../_common';
const componentInputName = `${CURRENT_COMP_PREFIX}Input`;

export default [
  {
    title: '输入框',
    screenshot: 'https://img.alicdn.com/tfs/TB1ysp3u8v0gK0jSZKbXXbK2FXa-112-64.png',
    schema: {
      componentName: componentInputName,
      props: {
        hasBorder: true,
        size: 'medium',
        autoComplete: 'off',
        placeholder: '请输入',
      },
    },
  },
  {
    title: '密码框',
    screenshot: 'https://img.alicdn.com/tfs/TB1ikF3u7P2gK0jSZPxXXacQpXa-112-64.png',
    schema: {
      componentName: `${componentInputName}.Password`,
      props: {
        hasBorder: true,
        size: 'medium',
        autoComplete: 'off',
      },
    },
  },
  {
    title: 'TextArea',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_input.png',
    schema: {
      componentName: `${componentInputName}.TextArea`,
      props: {
        hasBorder: true,
        size: 'medium',
        autoComplete: 'off',
      },
    },
  },
];
