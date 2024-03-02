import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './sidebar';
import RecipeCard from './RecipeCard';
import { Layout, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Search } = Input;

const Pantry = () => {
  const [query, setQuery] = useState('');
  const [recipesFromSearch, setRecipesFromSearch] = useState([]);
  const [recipesFromSidebar, setRecipesFromSidebar] = useState([]);

  const handleSearch = async (value) => {
    setQuery(value);

    // Fetch recipes based on the search query
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${value}&apiKey=40e34375ddaa4e3abdc1e21fa4aabd61&addRecipeInformation=true&number=10`);
      const data = await response.json();
      setRecipesFromSearch(data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSidebarRecipes = (data) => {
    setRecipesFromSidebar(data);
  };

  return (
    <>
      <Navbar />
      <Layout>
        <Sidebar setRecipes={handleSidebarRecipes} />
        <Layout style={{ minHeight: '100vh' }}>
          <div style={{ padding: '16px' }}>
            <Search
              placeholder="Search..."
              prefix={<SearchOutlined style={{ height: '2rem' }} />}
              style={{ marginBottom: '16px', height: '2rem' }}
              onSearch={handleSearch}
            />
          </div>
          <Content style={{ margin: '16px', display: 'flex', flexDirection: 'column' }}>
            {recipesFromSearch.length > 0 || recipesFromSidebar.length > 0 ? (
              [...recipesFromSearch, ...recipesFromSidebar].map(recipe => (
                <RecipeCard
                  key={recipe.id}
                  image={recipe.image}
                  heading={recipe.title}
                  servings={recipe.servings}
                  cuisines={recipe.cuisines}
                  recipeURL={recipe.sourceUrl}
                />
              ))
            ) : (
              <div style={{ textAlign: 'center' }}>No recipes found</div>
            )}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Pantry;
