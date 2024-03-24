import React from 'react';
import {MDBContainer,MDBBtn, MDBInput, MDBCardBody,MDBCard} from 'mdb-react-ui-kit';
import Background from "../Assets/blob.svg";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passwordRulesVisible, setPasswordRulesVisible] = useState(false);
  const [emailWarningVisible, setEmailWarningVisible] = useState(false);
  const [nameWarningVisible, setNameWarningVisible] = useState(false);
  const [usernameWarningVisible, setUsernameWarningVisible] = useState(false);

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
  
  const handleEmailInputChange = (value) => {
    setEmail(value);
  };

  const handleNameInputChange = (value) => {
    setName(value);
  };

  const handleUsernameInputChange = (value) => {
    setUsername(value);
  };

  const handlePasswordInputFocus = () => {
    setPasswordRulesVisible(true);
  };

  const handlePasswordInputBlur = () => {
    setPasswordRulesVisible(false);
  };

  return (
    <>
     <MDBContainer className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', paddingTop: '50px' }}>
     <MDBCard style={{ maxWidth: '400px', boxShadow: '0px 0px 8px rgba(0.5, 0.5, 0.5, 0.5)'}}>
      <MDBCardBody>
        <h1 className="text-center mb-4" style={{ fontFamily: 'cursive', fontStyle: 'italic', fontWeight: 'bold', fontSize: '3rem', color: 'black' }}>SignUp</h1>
        <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' value={email} onChange={(e) => handleEmailInputChange(e.target.value)} size="lg" />
          {email && !/^([^0-9@].*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email) && <p className="text-danger">Please enter a valid email address.</p>}
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' value={password} onFocus={handlePasswordInputFocus} onBlur={handlePasswordInputBlur} onChange={(e) => setPassword(e.target.value)} size="lg" />
          {passwordRulesVisible && (
            <div className="password-rules" style={{color:'black'}}>
              <h6>Password must contain:</h6>
              <ul>
                <li>At least 8 characters</li>
                <li>At least one uppercase letter</li>
                <li>At least one lowercase letter</li>
                <li>At least one digit</li>
                <li>At least one special character</li>
              </ul>
            </div>
          )}
          <MDBInput wrapperClass='mb-4' label='Name' id='formControlLg' type='text' value={name} onChange={(e) => handleNameInputChange(e.target.value)} size="lg" />
          {name && !/^[^0-9].*$/.test(name) && <p className="text-danger">Name should not start with a number.</p>}
          <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' value={username} onChange={(e) => handleUsernameInputChange(e.target.value)} size="lg" />
          {username && !/^[^0-9].*$/.test(username) && <p className="text-danger">Username should not start with a number.</p>}
          <div className='text-center mt-4'>
            <MDBBtn className="px-5 me-2" size='sm' style={{ backgroundColor: '#FFA726', color: 'black', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' }} onClick={handleSignup}>
            SignUp</MDBBtn>
            <p className="small fw-bold mt-2 mb-2" style={{color:'black'}}>Do you have an account? <a style={{color:'red'}} href="Login" >Login</a></p>
          </div>
          </MDBCardBody>
    </MDBCard>
    </MDBContainer>
   </>
  );
}

export default Signup;