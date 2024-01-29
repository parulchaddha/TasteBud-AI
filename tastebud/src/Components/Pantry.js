import React , { useState } from 'react';
import Navbar from './Navbar'
import Sidebar from './sidebar'
import Recipecard from './RecipeCard'
import {Layout,Menu,Input} from 'antd';
import {
  SearchOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;
const { Search } = Input;
const { Content } = Layout;

const Pantry =()=> {
  return (
    <>
    <Navbar/>
    <Layout>
    <Sidebar/>
    <Layout style={{ minHeight: '100vh' }}>
      <div style={{ padding: '16px' }}>
            <Search
              placeholder="Search..."
              prefix={<SearchOutlined style={{height:'2rem'}}/>}
              style={{ marginBottom: '16px',height:'2rem'}}
            />
      </div>
      <Content style={{ margin: '16px', display: 'flex', flexDirection: 'column' }}>
        <Recipecard/>
        <Recipecard/>
        <Recipecard/>
        <Recipecard/>
      </Content>
    </Layout>
    
    </Layout>
    </>
  );
}

export default Pantry;