import {CURRENT_COMP_PREFIX}  from '../_common';
const componentDrawerName = `${CURRENT_COMP_PREFIX}Drawer`;

export default [
  {
    title: '侧抽屉',
    screenshot: 'https://img.alicdn.com/tfs/TB1o0t4u9f2gK0jSZFPXXXsopXa-112-64.png',
    schema: {
      componentName: componentDrawerName,
      props: {
        prefix: 'next-',
        triggerType: 'click',
        closeable: true,
        placement: 'right',
        hasMask: true,
        isAutoContainer: true,
        visible: true,
      },
    },
  },
  {
    title: '底部抽屉',
    screenshot: 'https://img.alicdn.com/tfs/TB1YOd2u2b2gK0jSZK9XXaEgFXa-112-64.png',
    schema: {
      componentName: componentDrawerName,
      props: {
        prefix: 'next-',
        triggerType: 'click',
        closeable: true,
        placement: 'bottom',
        hasMask: true,
        isAutoContainer: true,
        visible: true,
      },
    },
  },
];
