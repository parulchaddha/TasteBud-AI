import React , { useState } from 'react';
import { Layout, Menu,Input} from 'antd';
import {
  SearchOutlined,
} from '@ant-design/icons';
import {Button} from 'react-bootstrap'
import ingredientData from './ingredientData';

const { Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

const Sidebar =()=> {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const [selectedIngredient, setSelectedIngredient] = useState(null);

    const handleClick = (id) => {
        setSelectedIngredient(selectedIngredient === id ? null : id);
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
      <h3 style={{marginLeft:'5rem'}}> List of Ingredients</h3>
      <Menu theme="light" mode="inline">
            {ingredientData.map((ingredient, index) => (
                <Button 
                    key={index}
                    type="link" 
                    style={{
                        padding: '10px',
                        margin: '6px',
                        backgroundColor: selectedIngredient === ingredient.id ? 'green' : 'transparent',
                        color: selectedIngredient === ingredient.id ? 'white' : 'black'
                    }} 
                    block
                    onClick={() => handleClick(ingredient.id)}
                >
                    {ingredient.name}
                </Button>
            ))}
        </Menu>
    </Sider>
    </>
  );
}


export default Sidebar;