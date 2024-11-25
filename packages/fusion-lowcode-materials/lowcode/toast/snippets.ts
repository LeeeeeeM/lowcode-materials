import { CURRENT_COMP_PREFIX } from '../_common'

const componentToastName = `${CURRENT_COMP_PREFIX}Message`;

export default [
  {
    title: '面包片',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_message.png',
    schema: {
      componentName: componentToastName,
      props: {
        title: 'Toast',
        type: 'success',
        shape: 'toast',
        size: 'medium',
        visible: true,
        animation: true,
        children: 'This item already has the label "travel", you can add a new label.',
      },
    },
  },
];
