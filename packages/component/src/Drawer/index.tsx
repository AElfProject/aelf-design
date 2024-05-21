import React from 'react';
import { Drawer as AntdDrawer, DrawerProps } from 'antd';

export interface IDrawerProps extends DrawerProps {}

const Drawer = ({ children, ...props }: IDrawerProps) => {
  return <AntdDrawer {...props}>{children}</AntdDrawer>;
};

export default Drawer;
