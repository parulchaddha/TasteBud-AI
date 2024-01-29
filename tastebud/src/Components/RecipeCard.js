import React from 'react';

const Recipecard = () => {
  return (
    <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #e8e8e8', borderRadius: '8px', backgroundColor: '#fff', display: 'flex' }}>
      {/* Image */}
      <div style={{ flexShrink: 0, marginRight: '20px' }}>
        <img src="https://placekitten.com/100/100" alt="Square Image" style={{ width: '100px', height: '100px', borderRadius: '8px' }} />
      </div>

      {/* Text Content */}
      <div style={{ flexGrow: 1 }}>
        <h2 style={{ marginBottom: '8px', fontSize: '1.5em', fontWeight: 'bold' }}>Card Heading</h2>
        <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', maxHeight: '80px', marginBottom: '0' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Recipecard;
