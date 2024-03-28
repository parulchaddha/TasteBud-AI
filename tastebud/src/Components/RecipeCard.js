import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const RecipeCard = ({ id, image, heading, servings, cuisines, recipeURL }) => {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  // const handleLikeClick = () => {
  //   setLiked(!liked);
  //   const user_id = localStorage.getItem('user_id'); // Fetch user ID from local storage
  //   const data = { user_id, recipe_id: id };
  //   const url = 'http://localhost:5000/like_recipe'; // Flask route for liking recipe
  //   // Send POST request to Flask route
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error('Error:', error));
  // };

  // const handleDislikeClick = () => {
  //   const user_id = localStorage.getItem('user_id'); // Fetch user ID from local storage
  //   const data = { user_id, recipe_id: id };
  //   const url = 'http://localhost:5000/dislike_recipe'; // Flask route for disliking recipe
  //   // Send POST request to Flask route
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error('Error:', error));
  // };
  const handleLikeClick = () => {
    if (!loading) {
      setLoading(true);
      const user_id = localStorage.getItem('user_id');
      const data = { user_id, recipe_id: id };
      const url = liked ? 'http://localhost:5000/dislike_recipe' : 'http://localhost:5000/like_recipe';
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setLiked(!liked); // Toggle liked state
          setLoading(false);
        })
        .catch(error => {
          console.error('Error:', error);
          setLoading(false);
        });
    }
  };
  
  const handleDislikeClick = () => {
    if (!loading) {
      setLoading(true);
      const user_id = localStorage.getItem('user_id');
      const data = { user_id, recipe_id: id };
      const url = liked ? 'http://localhost:5000/dislike_recipe' : 'http://localhost:5000/like_recipe';
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setLiked(!liked); // Toggle liked state
          setLoading(false);
        })
        .catch(error => {
          console.error('Error:', error);
          setLoading(false);
        });
    }
  };
  return (
    <div
      style={{
        position: 'relative',
        marginBottom: '20px',
        padding: '20px',
        border: '1px solid #e8e8e8',
        borderRadius: '8px',
        backgroundColor: '#fff',
        display: 'flex',
        width: '90%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s, transform 0.3s',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {/* Like Button */}
      
      <div style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', zIndex: 1 }}>
        <div style={{ width: '30px', height: '30px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'background-color 0.3s' }} onClick={liked ? handleDislikeClick : handleLikeClick}>
          <FontAwesomeIcon icon={faHeart} style={{ fontSize: liked ? '1.5em' : '1em', color: liked ? 'red' : 'black' }} />
        </div>
      </div>

      {/* Image */}
      <div style={{ flexShrink: 0, marginRight: '20px' }}>
        <img src={image} alt="Recipe Image" style={{ width: '100px', height: '100px', borderRadius: '8px' }} />
      </div>

      {/* Text Content */}
      <div style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ marginBottom: '8px', fontSize: '1.5em', fontWeight: 'bold', textAlign: 'left' }}>{heading}</h2>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', maxHeight: '80px', marginRight: '10px', marginBottom: '0' }}>
            {`Servings: ${servings || 'N/A'}`}
          </p>
          <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', maxHeight: '80px', marginBottom: '0' }}>
            {`Cuisines: ${cuisines ? cuisines.join(', ') : 'N/A'}`}
          </p>
        </div>
        <button className="view-button" style={{ fontWeight: 'bold', fontSize: '1.2em', backgroundColor: '#e0bd5d', alignSelf: 'flex-end', color: 'black' }} onClick={() => window.open(recipeURL)}>View Recipe</button>
      </div>
    </div>
  );
};

export default RecipeCard;
