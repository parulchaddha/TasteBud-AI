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
        <SubMenu key="sub1"  title="Pantry Essentials">
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
        <SubMenu key="sub2" title="Vegetables & Greens">
          
        </SubMenu>
        <SubMenu key="sub3" title="Mushrooms">
          
        </SubMenu>
        <SubMenu key="sub4" title="Fruits">
          
        </SubMenu>
        <SubMenu key="sub5" title="Berries">
          
        </SubMenu>
        <SubMenu key="sub6" title="Nuts and Seeds">
          
        </SubMenu>
        <SubMenu key="sub7" title="Cheeses">
          
        </SubMenu>
        <SubMenu key="sub8" title="Dairy and Eggs">
          
        </SubMenu>
        <SubMenu key="sub9" title="Dairy Free and Meat substitutes">

        </SubMenu>
        <SubMenu key="sub10" title="Poultry">
          
        </SubMenu>
        <SubMenu key="sub11" title="Fish">
          
        </SubMenu>
        <SubMenu key="sub12" title="Seafood and Seaweed">
          
        </SubMenu>
        <SubMenu key="sub12" title="Herbs and Spices">
          
        </SubMenu>
        <SubMenu key="sub13" title="Sugar and Sweetners">
          
        </SubMenu>
        <SubMenu key="sub14" title="Seasonings and Spice Blends">
          
        </SubMenu>
        <SubMenu key="sub15" title="Baking">
          
        </SubMenu>
        <SubMenu key="sub16" title="Pre-Made Doughs & Wrappers">
          
        </SubMenu>
        <SubMenu key="sub17" title="Grains and Cereals">
          
        </SubMenu>
        <SubMenu key="sub18" title="Legumes">
          
        </SubMenu>
        <SubMenu key="sub19" title="Pasta">
          
        </SubMenu>
        <SubMenu key="sub20" title="Bread and salty snacks">
          
        </SubMenu>
        <SubMenu key="sub21" title="Oils and fats">
          
        </SubMenu>
        <SubMenu key="sub22" title="Dressings and Vinegars">
          
        </SubMenu>
        <SubMenu key="sub23" title="Condiments">
          
        </SubMenu>
        <SubMenu key="sub24" title="Canned Foods">
          
        </SubMenu>
        <SubMenu key="sub25" title="Fruits">
          
        </SubMenu>
        <SubMenu key="sub26" title="Sauces, Spreads and dips">
          
        </SubMenu>
        <SubMenu key="sub27" title="Fruits">
          
        </SubMenu>
        <SubMenu key="sub28" title="Soups,Stews & Stocks">
          
        </SubMenu>
        <SubMenu key="sub29" title="Desserts & Sweet Snacks">
          
        </SubMenu>
        <SubMenu key="sub30" title="Wine,Beer & Spirits">
          
        </SubMenu>
        <SubMenu key="sub31" title="Beverages">
          
        </SubMenu>
        <SubMenu key="sub32" title="Supplements & Extracts">
          
        </SubMenu>
      </Menu>
    </Sider>
    </>
  );
}

export default Sidebar;