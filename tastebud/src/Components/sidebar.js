import React, { useState } from 'react';
import { Layout, Menu, Input, Button, Popover } from 'antd';
import {
  SearchOutlined,
  ShoppingCartOutlined,
  CloseOutlined
} from '@ant-design/icons';
import ingredientData from './ingredientData';

const { Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleSearch = async (value) => {
    setSearchValue(value);
    //Fetch data from Spoonacular API
    try {
      const response = await fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?query=${value}&apiKey=40e34375ddaa4e3abdc1e21fa4aabd61`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
  };

  const handleClick = (id) => {
    // Check if the selected ingredient is already in the list of selected ingredients
    if (selectedIngredient.includes(id)) {
      // If it's already selected, remove it from the list
      setSelectedIngredient(selectedIngredient.filter(item => item !== id));
    } else {
      // If it's not selected, add it to the list
      setSelectedIngredient([...selectedIngredient, id]);
    }
  };

  const handleDelete = (id) => {
    setSelectedIngredient(selectedIngredient.filter(item => item !== id));
  };

  const content = (
    <div>
      {selectedIngredient.map(id => (
        <div key={id} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <span>{ingredientData.find(item => item.id === id).name}</span>
          <Button type="text" size="small" icon={<CloseOutlined />} onClick={() => handleDelete(id)} />
        </div>
      ))}
    </div>
  );

  return (
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      width={400}
      style={{
        borderRight: '4px solid #e8e8e8',
      }}
    >
      <div style={{ padding: '16px' }}>
        <Search
          placeholder="Search..."
          prefix={<SearchOutlined />}
          style={{ marginBottom: '16px' }}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          onSearch={handleSearch}
        />
        <Popover placement="bottomRight" content={content} trigger="click">
          <Button type="link" icon={<ShoppingCartOutlined />} />
        </Popover>
        {searchResults.length > 0 && (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
  {searchResults.map((ingredient, index) => (
  <Button
    key={index}
    type="link"
    style={{
      padding: '10px',
      margin: '6px',
      backgroundColor: selectedIngredient.includes(ingredient.id) ? 'green' : 'transparent', 
      color: selectedIngredient.includes(ingredient.id) ? 'white' : 'black',
      display: 'inline-block',
      minWidth: '100px',
      width: `${ingredient.name.length * 8}px`,
      textAlign: 'center',
      lineHeight: '1.5',
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    }}
    onClick={() => handleClick(ingredient.id)} 
  >
    {ingredient.name}
  </Button>
))}
  </div>
)}
      </div>
      <div className="logo" />
      <h3 style={{ marginLeft: '5rem', marginBottom: '1rem' }}>List of Ingredients</h3>
      <div style={{ marginBottom: '1rem', paddingLeft: '1rem' }}>
        {ingredientData.map((ingredient, index) => (
          <Button
            key={index}
            type="link"
            style={{
              padding: '10px',
              margin: '6px',
              backgroundColor: selectedIngredient.includes(ingredient.id) ? 'green' : 'transparent',
              color: selectedIngredient.includes(ingredient.id) ? 'white' : 'black',
              display: 'inline-block', // Set display to inline-block
              minWidth: '100px', // Set minimum width to ensure consistent button sizes
              width: `${ingredient.name.length * 8}px`, // Dynamic width based on name length
              textAlign: 'center', // Center align text
              lineHeight: '1.5', // Adjust line height to vertically center text
              boxShadow:'2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
            onClick={() => handleClick(ingredient.id)}
          >
            {ingredient.name}
          </Button>
        ))}
      </div>
    </Sider>
  );
}

export default Sidebar;
