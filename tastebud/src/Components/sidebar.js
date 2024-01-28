import React , { useState } from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;
const Sidebar =()=> {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
    <Sider theme="light"  // Set the theme to light for a creme color
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      width={400}
      style={{
          borderRight: '4px solid #e8e8e8',  // Add a vertical line on the right
        }}>
      <div className="logo" />
      <Menu theme="light" mode="inline">
        <SubMenu key="sub1"  title="Options 1">
          <Menu.Item key="1">Sub-Option 1.1</Menu.Item>
          <Menu.Item key="2">Sub-Option 1.2</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title="Options 2">
          <Menu.Item key="3">Sub-Option 2.1</Menu.Item>
          <Menu.Item key="4">Sub-Option 2.2</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
    </>
  );
}

export default Sidebar;