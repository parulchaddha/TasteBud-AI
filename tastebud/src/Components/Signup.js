import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import background from '../images/tastebudbg.jpeg';
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const navigate = useNavigate();


  const handleSignup = async () => {
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name, username }),
    });

    const data = await response.json();
    if (data.status === 'success') {
      localStorage.setItem('username', data.username);
      setIsLoggedIn(true);
      setUsername(data.username);
      navigate('/home'); // Redirect to home page
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
          <h1 style={{fontFamily:'cursive',fontStyle:'italic,bold',marginLeft:'115px',fontSize:'65px',color:'black'}}>SignUp</h1>
          <br/>
          <br/>
          <MDBInput  style={{ outline: '2px solid black' }} wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' onChange={(e) => setEmail(e.target.value)} size="lg"/>
          <MDBInput  style={{ outline: '2px solid black' }} wrapperClass='mb-4' label='Password' id='formControlLg' type='password' onChange={(e) => setPassword(e.target.value)} size="lg"/>
          <MDBInput  style={{ outline: '2px solid black' }} wrapperClass='mb-4' label='Name' id='formControlLg' type='text' onChange={(e) => setName(e.target.value)} size="lg"/>
          <MDBInput  style={{ outline: '2px solid black' }} wrapperClass='mb-4' label='Username' id='formControlLg' type='text' onChange={(e) => setUsername(e.target.value)} size="lg"/>
          {/* <div className="d-flex justify-content-between mb-4">
            <a href="!#" style={{color:'black',fontStyle:'oblique'}}>Forgot password?</a>
          </div> */}

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'  onClick={handleSignup}
            style={{backgroundColor: '#e0bd5d', color: 'black',boxShadow:'8px 8px 16px rgba(0, 0, 0, 1.0)'}}>
            SignUp</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2" style={{color:'black'}}>Do you have an account? <a style={{color:'red'}} href="Login" >Login</a></p>
          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  );
}

export default Signup;