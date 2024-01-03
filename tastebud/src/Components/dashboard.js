import React ,{useState,useEffect} from 'react';
import background from '../images/tastebudbg.jpeg';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function dashboard() {

  return (
    <div style={{
        backgroundImage: `url(${background})`,
        height: '107.6vh',
        marginTop: '-54px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
       <h1>Welcome ,{username}</h1>
      </div>
  );
}

export default dashboard;