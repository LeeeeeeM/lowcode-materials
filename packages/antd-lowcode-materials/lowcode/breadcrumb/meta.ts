import snippets from './snippets';

export default {
  snippets,
  group: 'ANTD组件',
  componentName: 'Breadcrumb',
  title: '面包屑',
  category: '导航',
  props: [
    {
      title: '基础',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'routes',
          title: { label: '路由栈信息', tip: 'router 的路由栈信息，传参为有 path 和 breadcrumbName 的对象' },
          propType: {
            type: 'arrayOf',
            value: {
              type: 'shape',
              value: [
                { name: 'path', propType: 'string' },
                { name: 'breadcrumbName', propType: 'string' },
              ],
            },
          },
          setter: {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        name: 'path',
                        title: { label: '路由路径', tip: 'path | 路由路径' },
                        propType: 'string',
                        setter: 'StringSetter',
                        isRequired: true
                      },
                      {
                        name: 'breadcrumbName',
                        title: {
                          label: '路由名称',
                          tip: 'breadcrumbName | 路由名称',
                        },
                        propType: 'string',
                        setter: 'StringSetter',
                        isRequired: true
                      },
                    ],
                  },
                },
                initialValue: {
                  path: 'path',
                  breadcrumbName: 'breadcrumbName',
                },
              },
            },
          },
        },
        {
          name: 'params',
          title: { label: '路由的参数', tip: '路由的参数' },
          propType: 'object',
          setter: 'JsonSetter',
        },
        {
          name: 'separator',
          title: { label: '分隔符自定义', tip: '分隔符自定义' },
          propType: { type: 'oneOfType', value: ['string', 'node'] },
          setter: [
            'StringSetter',
            {
              componentName: 'SlotSetter',
              initialValue: {
                type: 'JSSlot',
                value: [],
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
    {
      title: '扩展',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'enableCustomItemRender',
          setter: 'BoolSetter',
          title: {
            label: '开启自定义渲染',
            tip: 'disabled | 是否为禁用状态',
          },
          defaultValue: false
        },
        {
          name: 'itemRender',
          condition: (target: any) => {
            const enableCustomRender = target.getProps().getPropValue('enableCustomItemRender');
            return !!enableCustomRender;
          },
          title: {
            label: '自定义渲染配置',
            tip: '传参(route, params, routes, paths,${extParams})',
          },
          setter: {
            componentName: 'FunctionSetter'
          }
        }
      ],
    },
  ],
  configure: { supports: { style: true } },
};
