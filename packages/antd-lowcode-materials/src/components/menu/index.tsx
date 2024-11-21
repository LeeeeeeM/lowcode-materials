import React from 'react';
import { Menu as OriginalMenu } from 'antd';

const Menu: any = (props: any) => {
  const {curMode = 'inline', ...rest} = props;
  return <OriginalMenu {...rest} mode={curMode} />;
};
export default Menu;
