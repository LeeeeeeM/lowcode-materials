import {CURRENT_COMP_PREFIX}  from '../_common';
const componentFormName = `${CURRENT_COMP_PREFIX}Form`;
const componentInputName = `${CURRENT_COMP_PREFIX}Input`;

export default [
  {
    title: '表单容器',
    screenshot: 'https://img.alicdn.com/tfs/TB1oH02u2b2gK0jSZK9XXaEgFXa-112-64.png',
    schema: {
      componentName: componentFormName,
      props: {
        labelCol: {
          span: 2,
        },
        wrapperCol: {
          span: 14,
        },
        labelAlign: 'left',
      },
      children: [
        {
          componentName: `${componentFormName}.Item`,
          props: {
            label: 'Email: ',
            required: true,
          },
          children: [
            {
              componentName: componentInputName,
              props: {
                name: 'email',
                size: 'medium',
                placeholder: '用户名',
              },
            },
          ],
        },
        {
          componentName: `${componentFormName}.Item`,
          props: {
            label: 'Password: ',
            required: true,
          },
          children: [
            {
              componentName: `${componentInputName}.Password`,
              props: {
                name: 'password',
                placeholder: '请输入密码',
                size: 'medium',
              },
            },
          ],
        },
        {
          componentName: `${componentFormName}.Item`,
          props: {
            label: '\b',
          },
          children: [
            {
              componentName: `${componentFormName}.Submit`,
              props: {
                type: 'primary',
                validate: true,
                children: 'Submit',
              },
            },
            {
              componentName: `${componentFormName}.Reset`,
              props: {
                style: {
                  marginLeft: 10,
                },
                children: 'Reset',
              },
            },
          ],
        },
      ],
    },
  },
];
