import {CURRENT_COMP_PREFIX}  from '../_common';
const componentTimePickerName = `${CURRENT_COMP_PREFIX}TimePicker`;

export default [
  {
    title: '时间选择框',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_time-picker.png',
    schema: {
      componentName: componentTimePickerName,
      props: {
        prefix: 'next-',
        size: 'medium',
        hasClear: true,
        format: 'HH:mm:ss',
        popupAlign: 'tl tl',
        popupTriggerType: 'click',
      },
    },
  },
];
