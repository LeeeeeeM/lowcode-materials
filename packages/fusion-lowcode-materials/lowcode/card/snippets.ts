import {CURRENT_COMP_PREFIX}  from '../_common';
const componentCardName = `${CURRENT_COMP_PREFIX}Card`;

export default [
  {
    screenshot: 'https://img.alicdn.com/tfs/TB1CHN3u4z1gK0jSZSgXXavwpXa-112-64.png',
    title: '普通型',
    schema: {
      componentName: componentCardName,
      props: {
        title: '普通型卡片',
      },
      children: [],
    },
  },
  {
    screenshot: 'https://img.alicdn.com/tfs/TB1.Ut6u4D1gK0jSZFKXXcJrVXa-112-64.png',
    title: '自定义',
    schema: {
      componentName: componentCardName,
      props: {
        title: '自定义卡片',
        extra: {
          type: 'JSSlot',
        },
      },
      children: [],
    },
  },
];
