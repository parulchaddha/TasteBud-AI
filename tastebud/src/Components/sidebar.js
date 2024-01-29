import React , { useState } from 'react';
import { Layout, Menu,Input} from 'antd';
import {
  SearchOutlined,
} from '@ant-design/icons';
import {Button} from 'react-bootstrap'
const { Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

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
        <div style={{ padding: '16px' }}>
          <Search
            placeholder="Search..."
            prefix={<SearchOutlined />}
            style={{ marginBottom: '16px' }}
          />
        </div>
      <div className="logo" />
      <Menu theme="light" mode="inline">
        <SubMenu key="sub1"  title="Options 1">
           <Button type="link" style={{padding:'10px',margin:'6px'}} block>
              1.1
            </Button>
            <Button type="link" style={{padding:'10px',margin:'6px'}} block>
              Sub-Option 1.2
            </Button>
            <Button type="link" style={{padding:'10px',margin:'6px'}} block>
              1033782873
            </Button>
            <Button type="link" style={{padding:'10px',margin:'6px'}} block>
              4566
            </Button>
            <Button type="link" style={{padding:'10px',margin:'6px'}} block>
              283827
            </Button>
            <Button type="link" style={{padding:'10px',margin:'6px'}} block>
              3467
            </Button>
            <Button type="link" style={{padding:'10px',margin:'6px'}} block>
              346785329085
            </Button>
            <Button type="link" style={{padding:'10px',margin:'6px'}} block>
              3467211u9048
            </Button>
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