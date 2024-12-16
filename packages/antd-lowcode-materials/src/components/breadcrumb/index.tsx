import React from 'react';
import { Breadcrumb as OriginBreadcrumb } from 'antd';

const Breadcrumb: any = (props: any) => {
  const { itemRender, enableCustomItemRender,  ...rest } = props;
  if (enableCustomItemRender) {
    return <OriginBreadcrumb {...rest} itemRender={itemRender} />;
  }
  return <OriginBreadcrumb {...rest} itemRender={undefined} />;
};
export default Breadcrumb;
