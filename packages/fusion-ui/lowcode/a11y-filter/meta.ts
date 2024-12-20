import { ComponentMetadata, Snippet } from '@ali/lowcode-types';
import { formItemsProps } from '../pro-form/common/form-base-props';
import { showWithLabelAlign } from '../utils';
import { operations } from '../common';

const operationConfig = {
  name: 'operationConfig',
  display: 'accordion',
  title: '底部操作',
  setter: {
    componentName: 'ObjectSetter',
    props: {
      config: {
        items: [
          {
            name: 'visibleButtonCount',
            title: {
              label: '可见数量',
              tip: '超过会收起到”更多“菜单中',
            },
            extraProps: {
              defaultValue: 3,
            },
            setter: {
              componentName: 'NumberSetter',
              props: {
                max: 6,
                min: 1,
              },
            },
          },
        ],
      },
    },
  },
};

const A11yFilterMeta: ComponentMetadata = {
  componentName: 'A11yFilter',
  title: '无障碍查询筛选',
  group: '精选组件',
  category: '表格类',
  tags: ['业务组件'],
  hidden: true,
  docUrl: '',
  icon: 'https://img.alicdn.com/imgextra/i1/O1CN01O4Oshp1RA6Z0sFZ6h_!!6000000002070-55-tps-56-56.svg',
  devMode: 'proCode',
  npm: {
    package: '@alifd/fusion-ui',
    version: '0.1.6-beta.8',
    exportName: 'A11yFilter',
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
            name: 'enableFilterConfiguration',
            title: '开启筛选项',
            setter: 'BoolSetter',
          },
          {
            name: 'status',
            title: '状态',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '只读态',
                    value: 'readonly',
                  },
                  {
                    title: '编辑态',
                    value: 'editable',
                  },
                ],
              },
            },
            getValue: (target) => {
              const isPreview = target.getProps().getPropValue('isPreview');
              return isPreview ? 'readonly' : 'editable';
            },
            setValue: (target, value) => {
              target.getProps().setPropValue('isPreview', value === 'readonly');
            },
            defaultValue: 'editable',
          },
          {
            name: 'isPreview',
            condition: (target) => {
              // const enableA11yMode = target.parent.node.parent.getPropValue('enableA11yMode');
              // console.log(enableA11yMode);
              return false;
            },
            title: {
              label: {
                type: 'i18n',
                zh_CN: '预览态',
                en_US: 'Preview Mode',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: isPreview | 说明: 是否开启预览态',
                en_US: 'prop: isPreview | description: preview mode',
              },
            },
            setter: 'BoolSetter',
          },
          {
            name: 'cols',
            title: '布局',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '一列',
                    value: 1,
                  },
                  {
                    title: '二列',
                    value: 2,
                  },
                  {
                    title: '三列',
                    value: 3,
                  },
                  {
                    title: '四列',
                    value: 4,
                  },
                ],
              },
            },
            defaultValue: 4,
          },
          {
            name: 'labelAlign',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '标签位置',
                en_US: 'Label Align',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: labelAlign | 说明: 标签的位置\n@enum desc 上, 左, 内',
                en_US: 'prop: labelAlign | description: label align',
              },
            },
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '上',
                    value: 'top',
                  },
                  {
                    title: '左',
                    value: 'left',
                  },
                  {
                    title: '内',
                    value: 'inset',
                  },
                ],
              },
            },
            setValue: (target, value) => {
              if (value === 'inset') {
                target.getProps().setPropValue('labelCol', null);
                target.getProps().setPropValue('wrapperCol', null);
              } else if (value === 'left') {
                target.getProps().setPropValue('labelCol', { fixedSpan: 4 });
                target.getProps().setPropValue('wrapperCol', null);
              }
              return target.getProps().setPropValue('labelAlign', value);
            },
            defaultValue: 'top',
          },
          {
            name: 'labelCol.fixedSpan',
            title: '标题宽度',
            condition: showWithLabelAlign,
            setter: {
              componentName: 'NumberSetter',
              props: {
                min: 0,
                max: 24,
              },
            },
          },
          {
            name: 'labelCol.offset',
            title: '标题偏移',
            condition: showWithLabelAlign,
            setter: {
              componentName: 'NumberSetter',
              props: {
                min: 0,
                max: 24,
              },
            },
          },
          {
            name: 'wrapperCol.span',
            title: '内容宽度',
            condition: showWithLabelAlign,
            setter: {
              componentName: 'NumberSetter',
              props: {
                min: 0,
                max: 24,
              },
            },
          },
          {
            name: 'wrapperCol.offset',
            title: '内容偏移',
            condition: showWithLabelAlign,
            setter: {
              componentName: 'NumberSetter',
              props: {
                min: 0,
                max: 24,
              },
            },
          },
          {
            name: 'labelTextAlign',
            condition: showWithLabelAlign,
            title: {
              label: {
                type: 'i18n',
                zh_CN: '标签对齐',
                en_US: 'Text Align',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: labelTextAlign | 说明: 标签的左右对齐方式\n@enumdesc 左, 右',
                en_US: 'prop: labelTextAlign | description: label text align',
              },
            },
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: ['left', 'right'],
              },
            },
            defaultValue: 'right',
          },
          {
            name: 'value',
            condition: true,
            title: {
              label: {
                type: 'i18n',
                zh_CN: '表单值',
                en_US: 'value',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: value | 说明: 表单值',
                en_US: 'prop: value | description: value instance',
              },
            },
            setter: {
              componentName: 'MixedSetter',
              props: {
                setters: ['JsonSetter', 'ExpressionSetter'],
              },
            },
          },
        ],
      },
      formItemsProps,
      operationConfig,
      operations,
    ],
    supports: {
      style: true,
      className: true,
      events: [{
        name: 'onExpand',
        description: '查询表头展开触发',
        template: `\n\n  onExpand(expanded /* 是否展开 */) {\n    // 点击展开图标时触发\n    console.log('onExpand', expanded);\n  }\n`
      }, 
      
      {
        name: 'onSearch',
        description: '点击查询触发',
        template: `\n\n  onSearch(data /* 当前绑定的表单对象 */) {\n    // 点击查询按钮触发\n    console.log('onSearch', data);\n  }\n`
      },
      
      {
        name: 'onReset',
        description: '重置所有表单',
        template: `\n\n  onReset() {\n    // 点击重置时触发，执行后当前表单内所有值置为 undefined \n    console.log('reset');\n  }\n`
      }],
    },
    component: {
      isMinimalRenderUnit: true,
      disableBehaviors: "*",
    },
  },
};
const snippets: Snippet[] = [
  {
    title: '无障碍查询筛选',
    screenshot:
      'https://img.alicdn.com/imgextra/i1/O1CN01O4Oshp1RA6Z0sFZ6h_!!6000000002070-55-tps-56-56.svg',
    schema: {
      componentName: 'A11yFilter',
      id: 'node_ockt5mo4jj1',
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
    },
  },
];

export default {
  ...A11yFilterMeta,
  snippets,
};
