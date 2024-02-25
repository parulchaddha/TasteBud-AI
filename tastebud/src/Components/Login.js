import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import background from '../images/tastebudbg.jpeg';
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useUser } from '../contexts/userContext';

const Login=()=> {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [username, setUsername] = useState('');
const { updateUser } = useUser();

const navigate = useNavigate();

const handleLogin = async () => {
  try {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include', // Include credentials for session management
    });

    const data = await response.json();
    if (data.status === 'success') {
      setIsLoggedIn(true);

      // After successful login, make a subsequent request to '/user'
      const userResponse = await fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include credentials for session management
      });

      const userData = await userResponse.json();

      // Set the user data in the context
      updateUser(userData);
      console.log();

      navigate('/'); // Redirect to home page
    }
    // ... (rest of your login logic)
  } catch (error) {
    console.error('Error during login:', error);
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
          {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" /> */}
        </MDBCol>

        <MDBCol col='4' md='3' style={{marginLeft:'200px'}}>
          <br/>
          <br/>
          <h1 style={{fontFamily:'cursive',fontStyle:'italic,bold',marginLeft:'115px',fontSize:'65px',color:'black'}}>Login</h1>
          <br/>
          <br/>
          <MDBInput  style={{ outline: '2px solid black' }} wrapperClass='mb-4' label='Email address' onChange={(e) => setEmail(e.target.value)} id='formControlLg' type='email' size="lg"/>
          <MDBInput  style={{ outline: '2px solid black' }} wrapperClass='mb-4' label='Password' onChange={(e) => setPassword(e.target.value)} id='formControlLg' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <a href="!#" style={{color:'black',fontStyle:'oblique'}}>Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg' 
            style={{backgroundColor: '#e0bd5d', color: 'black',boxShadow:'8px 8px 16px rgba(0, 0, 0, 1.0)'}} onClick={handleLogin}>
            Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2" style={{color:'black'}}>Don't have an account? <a style={{color:'red'}} href="Signup" >Register</a></p>
          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  );
}

export default Login;