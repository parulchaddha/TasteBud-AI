// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../css/detailsboard.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>
        <span className="toggle-btn" onClick={toggleSidebar}>
          &#9776;
        </span>
        Dashboard
      </h2>
      <Link to="#" className="sidebar-link">
        <span className="icon">&#127968;</span> {/* Home Icon */}
        Personal Information
      </Link>
      <Link to="#" className="sidebar-link">
        <span className="icon">&#10084;</span> {/* Heart Icon */}
        Favorite Recipe
      </Link>
      <Link to="#" className="sidebar-link">
        <span className="icon">&#128218;</span> {/* Book Icon */}
        Recipe History
      </Link>
    </div>
  );
};

export default Sidebar;

