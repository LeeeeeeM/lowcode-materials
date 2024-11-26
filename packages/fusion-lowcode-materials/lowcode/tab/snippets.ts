import {CURRENT_COMP_PREFIX}  from '../_common';
const componentTabName = `${CURRENT_COMP_PREFIX}Tab`;

export default [
  {
    title: '普通型',
    screenshot: 'https://img.alicdn.com/tfs/TB1D0p2u.z1gK0jSZLeXXb9kVXa-112-64.png',
    schema: {
      componentName: componentTabName,
      props: {
        shape: 'pure',
        size: 'medium',
        excessMode: 'slide',
      },
      children: [
        {
          componentName: `${componentTabName}.Item`,
          props: {
            title: 'Tab1',
          },
        },
        {
          componentName: `${componentTabName}.Item`,
          props: {
            title: 'Tab2',
          },
        },
        {
          componentName: `${componentTabName}.Item`,
          props: {
            title: 'Tab3',
          },
        },
      ],
    },
  },
];
