import React ,{useState,useEffect} from 'react';
import background from '../images/tastebudbg.jpeg';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Dashcards from './Dashcards';
function dashboard() {

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      height: '105vh',
      marginTop: '-5vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'relative', 
    }}>
      <h1 style={{
        position: 'absolute', 
        left: '30vh', 
        top: '45vh',
        fontStyle: 'italic,bold',
        fontFamily: 'cursive',
        color: 'white',
        fontSize:'11vh',
        textShadow: '3px 3px 5px rgba(0, 0, 0, 0.7)'
      }}>Welcome</h1>

    <Dashcards/>
    </div>
);  
}

export default dashboard;