import { CURRENT_COMP_PREFIX } from '../_common';
const componentCalendarName = `${CURRENT_COMP_PREFIX}Calendar`;

export default [
  {
    screenshot:
      'https://img.alicdn.com/imgextra/i3/O1CN01IAguy71sM0UGdpChd_!!6000000005751-55-tps-56-56.svg',
    title: '卡片型',
    schema: {
      componentName: componentCalendarName,
      props: {
        shape: 'card',
      },
    },
  },
  {
    screenshot:
      'https://img.alicdn.com/imgextra/i3/O1CN01IAguy71sM0UGdpChd_!!6000000005751-55-tps-56-56.svg',
    title: '面板型',
    schema: {
      componentName: componentCalendarName,
      props: {
        shape: 'panel',
      },
    },
  },
  {
    screenshot:
      'https://img.alicdn.com/imgextra/i3/O1CN01IAguy71sM0UGdpChd_!!6000000005751-55-tps-56-56.svg',
    title: '全屏型',
    schema: {
      componentName: componentCalendarName,
      props: {
        shape: 'fullscreen',
      },
    },
  },
];
