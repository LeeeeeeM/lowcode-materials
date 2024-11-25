import {CURRENT_COMP_PREFIX}  from '../_common';
const componentUploadName = `${CURRENT_COMP_PREFIX}Upload`;

export default [
  {
    title: '上传组件',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_upload.png',
    schema: {
      componentName: componentUploadName,
      props: {
        prefix: 'next-',
        closable: true,
        autoUpload: true,
        shape: 'card',
        defaultValue: [],
      },
    },
  },
];
