import {CURRENT_COMP_PREFIX}  from '../_common';
const componentTransferName = `${CURRENT_COMP_PREFIX}Transfer`;

export default [
  {
    title: '穿梭框',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_transfer.png',
    schema: {
      componentName: componentTransferName,
      props: {
        prefix: 'next-',
        mode: 'normal',
        titles: ['TitleLeft', 'TitleRight'],
        notFoundContent: 'Not Found',
      },
    },
  },
];
