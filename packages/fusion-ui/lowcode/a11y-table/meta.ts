import { ComponentMetadata, Snippet } from '@ali/lowcode-types';

const A11yTableMeta: ComponentMetadata = {
  componentName: 'A11yTable',
  title: '自定义查询筛选',
  group: '精选组件',
  category: '表格类',
  tags: ['业务组件'],
  docUrl: '',
  icon: 'https://img.alicdn.com/imgextra/i1/O1CN01O4Oshp1RA6Z0sFZ6h_!!6000000002070-55-tps-56-56.svg',
  devMode: 'proCode',
  npm: {
    package: '@alifd/fusion-ui',
    version: '0.1.6-beta.8',
    exportName: 'A11yTable',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'globalConfig',
        title: '全局配置',
        type: 'group',
        display: 'accordion',
        items: [
          {
            name: 'enableA11yMode',
            setter: 'BoolSetter',
            title: {
              label: '开启无障碍',
              tip: 'disabled | 是否为禁用状态',
            },
            defaultValue: true
          },
          {
            name: 'sourceData',
            condition: (target) => {
              const enableA11yMode = target.getProps().getPropValue('enableA11yMode');
              return !!enableA11yMode;
            },
            title: {
              label: '数据源配置',
              tip: '使用无障碍模式必须设置数据源',
            },
          },
        ],
      },
    ],
    supports: {
      style: true,
      // className: true,
      // events: [{
      //   name: 'onExpand',
      //   description: '查询表头展开触发',
      //   template: `\n\n  onExpand(expanded /* 是否展开 */) {\n    // 点击展开图标时触发\n    console.log('onExpand', expanded);\n  }\n`
      // }, 
      
      // {
      //   name: 'onSearch',
      //   description: '点击查询触发',
      //   template: `\n\n  onSearch(data /* 当前绑定的表单对象 */) {\n    // 点击查询按钮触发\n    console.log('onSearch', data);\n  }\n`
      // },
      
      // {
      //   name: 'onReset',
      //   description: '重置所有表单',
      //   template: `\n\n  onReset() {\n    // 点击重置时触发，执行后当前表单内所有值置为 undefined \n    console.log('reset');\n  }\n`
      // }],
    },
    component: {
      isMinimalRenderUnit: true,
      // disableBehaviors: ['copy'],
      nestingRule: {
        // 仅允许放入 filter 和 protable
        childWhitelist: ['Filter', 'ProTable'],
      },
    },
  },
};


const snippets: Snippet[] = [
  {
    title: '自定义查询筛选',
    screenshot:
      'https://img.alicdn.com/imgextra/i1/O1CN01O4Oshp1RA6Z0sFZ6h_!!6000000002070-55-tps-56-56.svg',
    schema: {
      componentName: 'A11yTable',
      id: 'node_ockt5mo4jj1',
      props: {
        enableA11yMode: true
      },
      children: [{
        componentName: 'Filter',
        props: {
          labelAlign: 'top',
        },
        children: [...new Array(4).keys()].map((item) => ({
          componentName: 'FormInput',
          props: {
            formItemProps: {
              primaryKey: String(Math.floor(Math.random() * 10000) + item),
              label: '表单项',
              size: 'medium',
              device: 'desktop',
              fullWidth: true,
            },
            placeholder: '请输入',
          },
        })),
      }, {
        componentName: 'ProTable',
        props: {
          dataSource: [
            {
              id: 'id-2f5DdE2b-0',
              date: '2013-06-12',
              percent: 1.862,
              documentAmount: 2022,
              currency: 'CNY',
              company: '支付宝科技有限公司',
            },
            {
              id: 'id-2f5DdE2b-1',
              date: '2013-06-12',
              percent: 1.862,
              documentAmount: 2022,
              currency: 'CNY',
              company: '支付宝科技有限公司',
            },
          ],
          actionColumnButtons: {
            dataSource: [
              {
                children: '查看',
                type: 'primary',
              },
              {
                children: '编辑',
                type: 'primary',
                disabled: true,
              },
              {
                children: '删除',
                type: 'primary',
              },
            ],
            text: true,
            visibleButtonCount: 3,
          },
          actionBarButtons: {
            dataSource: [
              {
                type: 'primary',
                children: '操作一',
              },
              {
                type: 'normal',
                children: '操作二',
              },
            ],
            visibleButtonCount: 3,
          },
          paginationProps: {
            pageSize: 20,
            current: 1,
          },
          settingButtons: true,
          columns: [
            {
              title: '公司',
              dataIndex: 'company',
              width: 160,
              formatType: 'link',
              searchable: true,
            },
            {
              title: '单据金额',
              dataIndex: 'documentAmount',
              formatType: 'money',
            },
            {
              title: '币种',
              dataIndex: 'currency',
              formatType: 'currency',
              filters: [
                {
                  label: 'CNY',
                  value: 'CNY',
                },
                {
                  label: 'USD',
                  value: 'USD',
                },
                {
                  label: 'JPY',
                  value: 'JPY',
                },
                {
                  label: 'HKD',
                  value: 'HKD',
                },
              ],
              filterMode: 'multiple',
              explanation: '提示信息',
              width: 110,
            },
            {
              title: '完成进度',
              dataIndex: 'percent',
              formatType: 'progress',
            },
            {
              title: '到账日期',
              dataIndex: 'date',
              formatType: 'date',
            },
          ],
        },
      }],
    },
  },
];

export default {
  ...A11yTableMeta,
  snippets,
};
