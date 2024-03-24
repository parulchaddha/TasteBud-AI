// // Sidebar.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
//  import '../css/detailsboard.css';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//       <h2>
//         <span className="toggle-btn" onClick={toggleSidebar}>
//           &#9776;
//         </span>
//         Dashboard
//       </h2>
//       <Link to="#" className="sidebar-link">
//         <span className="icon">&#127968;</span> {/* Home Icon */}
//         Personal Information
//       </Link>
//       <Link to="#" className="sidebar-link">
//         <span className="icon">&#10084;</span> {/* Heart Icon */}
//         Favorite Recipe
//       </Link>
//       <Link to="#" className="sidebar-link">
//         <span className="icon">&#128218;</span> {/* Book Icon */}
//         Recipe History
//       </Link>
//     </div>
//   );
// };

// export default Sidebar;

// Dashboard.js

// DetailsBoard.js

// import React from 'react';
// //import './DetailsBoard.css';
// import '../css/detailsboard.css';

// const DetailsBoard = () => {
//   return (
//     <div className="details-board-container">
//       <div className="sidebar">
//         <h2>Details Board</h2>
//         <a href="#">Personal Information</a>
//         <a href="#">Favorite Recipes</a>
//         <a href="#">Recipe History</a>
//       </div>
//       <div className="content">
//         <h1>Welcome to Your Details Board</h1>
//         {/* Your main content here */}
//       </div>
//     </div>
//   );
// };

// export default DetailsBoard;






// DetailsBoard.js

import React, { useState } from 'react';
import '../css/detailsboard.css';
import { Input, Button, DatePicker } from 'antd';
import { UserOutlined, MailOutlined, CalendarOutlined } from '@ant-design/icons';

const DetailsBoard = () => {
  const [showPersonalInfoForm, setShowPersonalInfoForm] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    birthdate: null // Using null instead of empty string for DatePicker initial value
  });

  const handlePersonalInfoClick = () => {
    setShowPersonalInfoForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleDateChange = (date) => {
    setPersonalInfo({ ...personalInfo, birthdate: date });
  };

  const handleSubmit = () => {
    // You can handle form submission logic here
    console.log('Submitted personal information:', personalInfo);
  };

  return (
    <div className="details-board-container">
      <div className="sidebar">
        <h2>Details Board</h2>
        <a href="#" onClick={handlePersonalInfoClick}>Personal Information</a>
        <a href="#">Favorite Recipes</a>
        <a href="#">Recipe History</a>
      </div>
      <div className="content">
        {/* <h1>Welcome to Your Details Board</h1> */}
        {showPersonalInfoForm && (
          <div className="personal-info-form">
            <h2>Personal Information</h2>
            <Input
              prefix={<UserOutlined />}
              placeholder="First Name"
              name="firstName"
              value={personalInfo.firstName}
              onChange={handleInputChange}
            />
            <Input
              prefix={<UserOutlined />}
              placeholder="Last Name"
              name="lastName"
              value={personalInfo.lastName}
              onChange={handleInputChange}
            />
            <Input
              prefix={<MailOutlined />}
              placeholder="Email"
              name="email"
              value={personalInfo.email}
              onChange={handleInputChange}
            />
            <DatePicker
              placeholder="Birthdate"
              onChange={handleDateChange}
              style={{ width: '100%' }}
              suffixIcon={<CalendarOutlined />}
            />
            <Button type="primary" onClick={handleSubmit}>Submit</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsBoard;
