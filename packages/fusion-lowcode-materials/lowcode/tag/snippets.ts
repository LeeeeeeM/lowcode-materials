import {CURRENT_COMP_PREFIX}  from '../_common';
const componentTagName = `${CURRENT_COMP_PREFIX}Tag`;

export default [
  {
    title: '标签',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_tag.png',
    schema: {
      componentName: componentTagName,
      props: {
        prefix: 'next-',
        type: 'normal',
        size: 'medium',
        animation: false,
        children: ['Tag'],
      },
    },
  },
  {
    title: '可关闭标签',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_tag.png',
    schema: {
      componentName: `${componentTagName}.Closeable`,
      props: {
        prefix: 'next-',
        closeArea: 'tail',
        size: 'medium',
        children: ['Tag'],
      },
    },
  },
  {
    title: '可选中标签',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_tag.png',
    schema: {
      componentName: `${componentTagName}.Selectable`,
      props: {
        prefix: 'next-',
        children: ['Tag'],
      },
    },
  },
];
