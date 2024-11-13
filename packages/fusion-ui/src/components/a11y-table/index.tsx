import React, {useState, useEffect, useRef, cloneElement} from 'react';
import { Button, Checkbox, Overlay, Form } from '@alifd/next';
import cn from 'classnames';
import { Space, Grid, GridProps } from '@/components/container';

export interface A11yTableProps extends GridProps {
  enableA11yMode?: boolean;
  sourceData?: Promise<any>;
}
const A11yTable: React.FC<A11yTableProps> = (props) => {
  const {
    enableA11yMode,
    sourceData,
    children,
    style = {},
    ...others
  } = props;

  console.log(props, children, others, 'xxxxxxxx');
  return <div className={cn('fusion-ui-a11y-table')} style={style}>{children}</div>;
};

A11yTable.defaultProps = {
  enableA11yMode: true,
};

export { A11yTable };
