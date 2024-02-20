// import React from 'react';

// const Recipecard = () => {
//   return (
//     <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #e8e8e8', borderRadius: '8px', backgroundColor: '#fff', display: 'flex' }}>
//       {/* Image */}
//       <div style={{ flexShrink: 0, marginRight: '20px' }}>
//         <img src="https://placekitten.com/100/100" alt="Square Image" style={{ width: '100px', height: '100px', borderRadius: '8px' }} />
//       </div>

//       {/* Text Content */}
//       <div style={{ flexGrow: 1 }}>
//         <h2 style={{ marginBottom: '8px', fontSize: '1.5em', fontWeight: 'bold' }}>Card Heading</h2>
//         <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', maxHeight: '80px', marginBottom: '0' }}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//         </p>
//       </div>
//     </div>
//   );
// };


// export default Recipecard;

import React from 'react';

const RecipeCard = ({ image, heading, servings, cuisines, recipeURL }) => {
  return (
    <div style={{
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
    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.transform = 'scale(1)'; }}
    onClick={() => window.open(recipeURL)}
    >
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
        <button className="view-button" style={{ fontWeight: 'bold', fontSize: '1.2em', backgroundColor: '#e0bd5d', alignSelf: 'flex-end', color:'black' }}>View Recipe</button>
      </div>
    </div>
  );
};

export default RecipeCard;

