export default [
  {
    title: '下拉菜单',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/dropdown-1.png',
    schema: {
      componentName: 'Dropdown',
      props: {
        overlay: {
          type: 'JSSlot',
          value: [
            {
              componentName: 'Menu',
              props: {
                items:  [
                  {
                    key: '1',
                    label: '菜单项1',
                    children: [
                      {
                        key: '1-1',
                        label: '子菜单项1',
                      },
                      {
                        key: '1-2',
                        label: '子菜单项2',
                      },
                    ],
                  },
                  {
                    key: '2',
                    label: '菜单项2',
                    children: [
                      {
                        key: '2-1',
                        label: '子菜单项11',
                      },
                      {
                        key: '2-2',
                        label: '子菜单项12',
                      },
                    ],
                  },
                ],
              }
            },
          ],
        },
      },
      children: [
        {
          componentName: 'Button',
          props: {
            type: 'link',
            children: {
              type: 'JSSlot',
              value: [
                {
                  componentName: 'Typography.Text',
                  props: {
                    children: 'Hover me',
                    style: {
                      color: 'inherit',
                    },
                  },
                },
                {
                  componentName: 'Icon',
                  props: {
                    type: 'DownOutlined',
                    size: 15,
                    style: {
                      marginLeft: 4,
                      verticalAlign: 'middle',
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    },
  },
];
