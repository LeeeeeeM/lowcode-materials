import {CURRENT_COMP_PREFIX}  from '../_common';
const componentAvatarName = `${CURRENT_COMP_PREFIX}Avatar`;

export default [
  {
    title: '头像',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_avatar.png',
    schema: {
      componentName: componentAvatarName,
      props: {
        prefix: 'next-',
        size: 'medium',
        shape: 'circle',
        icon: 'smile',
      },
    },
  },
];
