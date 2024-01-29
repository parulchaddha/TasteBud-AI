import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Or any icon library you prefer

function Navbar() {
  
  return (
    <nav className="navbar" style={{
      backgroundColor: '#e0bd5d',
      padding: '15px',
      display: 'flex',
      justifyContent:'flex-end'
    }}>
      <div className="navbar-container" style={{
        maxwidth: '1200px',
        width: '100%',
        marginLeft:'210vh',
        margin: '0 auto',
      }}>
        <Link to="/dashboard" className="user-icon" style={{
          color: 'black',
        }}>
          <FaUserCircle className="user-icon" style={{
          width:'30px',
          height:'25px'
        }}/>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;