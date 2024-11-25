import { getDataFromPlainText } from '../split-button/adaptor';
import { CURRENT_COMP_PREFIX } from '../_common';
const componentMenuButtonName = `${CURRENT_COMP_PREFIX}MenuButton`;
const componentSplitButtonName = `${CURRENT_COMP_PREFIX}SplitButton`;
const componentButtonName = `${CURRENT_COMP_PREFIX}Button`;


const plainData = 'Edit Document\n\tUndo\n\tRedo\n\tCut\n\tCopy\n\tPaste';
const { label, children, selectedKeys } = getDataFromPlainText(plainData);

const splitButtonProps = {
  prefix: 'next-',
  type: 'normal',
  size: 'medium',
  label: label,
  defaultSelectedKeys: [],
  autoWidth: true,
  popupTriggerType: 'click',
  plainData,
};

if (selectedKeys && selectedKeys.length) {
  splitButtonProps.selectedKeys = selectedKeys;
}
const menuButtonProps = splitButtonProps;

const snippets = [
  {
    title: '按钮',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_button.png',
    schema: {
      componentName: componentButtonName,
      props: {
        prefix: 'next-',
        type: 'primary',
        size: 'medium',
        htmlType: 'button',
        component: 'button',
        children: '取消',
      },
    },
  },
  {
    title: '分隔按钮',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_split-button.png',
    schema: {
      componentName: componentSplitButtonName,
      props: splitButtonProps,
      children,
    },
  },
  {
    title: '菜单按钮',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_split-button.png',
    schema: {
      componentName: componentMenuButtonName,
      props: menuButtonProps,
      children,
    },
  },
  {
    title: '按钮组',
    screenshot: 'https://img.alicdn.com/tfs/TB1t6dhvV67gK0jSZPfXXahhFXa-310-122.png',
    schema: {
      componentName: `${componentButtonName}.Group`,
      props: {},
      children: [
        {
          componentName: componentButtonName,
          props: {
            type: 'primary',
            style: {
              margin: '0 5px 0 5px',
            },
            htmlType: 'submit',
            children: '提交',
          },
          children: [
            {
              componentName: 'Icon',
              props: {
                type: 'success',
              },
            },
          ],
        },
        {
          componentName: componentButtonName,
          props: {
            type: 'normal',
            style: {
              margin: '0 5px 0 5px',
            },
            htmlType: 'reset',
            children: '重置',
          },
        },
      ],
    },
  },
];

export default snippets;
