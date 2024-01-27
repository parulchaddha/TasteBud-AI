import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import background from '../images/tastebudbg.jpeg';
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
const Forgot=()=> {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
  
    const navigate = useNavigate();
  
    const handleLogin = async () => {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (data.status === 'success') {
        localStorage.setItem('username', data.username);
        setIsLoggedIn(true);
        setUsername(data.username);
        navigate('/');
      }
      else if (data.status === 'error' && data.message === 'Invalid email or password') {
        alert('Incorrect password or email. Please try again.');
      } 
    };
  
    return (
      
      <div style={{
        backgroundImage: `url(${background})`,
        height: '103vh',
        marginTop: '-70px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
      }}>
      <MDBContainer fluid className="p-3 my-5 h-custom" style={{marginTop:'100px'}}>
  
        <MDBRow>
  
          <MDBCol col='10' md='6'>
           
          </MDBCol>
  
          <MDBCol col='4' md='3' style={{marginLeft:'140vh',marginTop:'15vh'}}>
            <br/>
            <br/>
            <h1 style={{fontFamily:'cursive',fontStyle:'italic,bold',marginLeft:'8vh',fontSize:'35px',color:'black',textAlign:'left'}}>Reset Password</h1>
            <br/>
            <br/>
            <MDBInput  style={{ outline: '2px solid black' }} wrapperClass='mb-4' label='Email address' onChange={(e) => setEmail(e.target.value)} id='formControlLg' type='email' size="lg"/>
            
            <div className='text-center text-md-start mt-4 pt-2'>
              <MDBBtn className="mb-0 px-5" size='lg' 
              style={{backgroundColor: '#e0bd5d', color: 'black',boxShadow:'8px 8px 16px rgba(0, 0, 0, 1.0)',marginLeft:'15vh'}}>
              Submit</MDBBtn>
            </div>
  
          </MDBCol>
  
        </MDBRow>
  
      </MDBContainer>
      </div>
    );
  }
  
  export default Forgot;