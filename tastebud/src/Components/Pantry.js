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
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!query) {
      // If query is empty, clear recipes
      setRecipes([]);
      return;
    }    
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=40e34375ddaa4e3abdc1e21fa4aabd61&addRecipeInformation=true`);
        const data = await response.json();
        setRecipes(data.results);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    fetchRecipes();
  }, [query]);

  const handleSearch = (value) => {
    setQuery(value);
  };

  return (
    <>
      <Navbar />
      <Layout>
        <Sidebar />
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
            {recipes.length > 0 ? (
              recipes.map(recipe => (
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


