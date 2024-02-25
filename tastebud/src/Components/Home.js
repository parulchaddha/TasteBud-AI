import React, { useState, useEffect } from 'react';
import background from '../images/tastebudbg.jpeg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from 'react-router-dom';
import LogoutModal from './logoutModal';
import { useUser } from '../contexts/userContext';

function Home() {
  const {updateUser} = useUser();
  const [isHovered, setIsHovered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [userConfirmedLogout, setUserConfirmedLogout] = useState(false);
  const navigate = useNavigate();

 // Check login status on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername && userConfirmedLogout) {
      setIsLoggedIn(false);
      setUsername('');
      localStorage.removeItem('username');
      setUserConfirmedLogout(false); // Reset the confirmation state
    }
  }, [userConfirmedLogout]);
  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const closeLogoutModal = () => {
    setShowLogoutModal(false);
  };

  const confirmLogout = async () => {
    try {
      // Call your logout API
      const logoutResponse = await fetch('http://localhost:5000/logout', {
        method: 'POST',
        credentials: 'include',
      });
  
      // Assuming a successful response means the user is logged out
      if (logoutResponse.ok) {
        // Clear user data on the client-side
        updateUser(null); // Assuming updateUser is your context function to update userData
        setIsLoggedIn(false);
        console.log('User logged out successfully');
      } else {
        console.error('Logout API request failed');
      }
  
      // Close the logout modal or perform other actions
      setShowLogoutModal(false);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  
  return (
    
    <div style={{
      backgroundImage: `url(${background})`,
      height: '110.6vh',
      marginTop: '-65px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <hr style={{height:'2pt',visibility:'hidden'}}/>
      
      {userConfirmedLogout ? (
  <>
    {navigate('/')} {/* Redirect to the login page */}
  </>
):
        isLoggedIn ? (
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '1300px', marginTop: '70px' }}>
          {/* <p style={{ color: 'white', fontSize: '20px', marginRight: '30px' }}>Welcome, {username}!</p> */}
          <Button style={{ backgroundColor: '#e0bd5d', color: 'black', fontSize: '18px', padding: '10px 20px', borderRadius: '10px',boxShadow:'8px 8px 16px rgba(0, 0, 0, 0.8)' ,marginLeft: '60px' }} onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '1300px', marginTop: '70px' }}>
          <Button style={{ marginRight: '10px', backgroundColor:'#e0bd5d', color: 'black', fontSize: '18px', padding: '10px 20px', borderRadius: '10px',boxShadow:'8px 8px 16px rgba(0, 0, 0, 1.0)' }}>
            <Link className='text-lg' to='/Login' style={{ color: 'black' }}>Login</Link>
          </Button>
          <Button style={{ backgroundColor: '#e0bd5d', color: 'black', fontSize: '18px', padding: '10px 20px' , borderRadius: '10px',boxShadow:'8px 8px 16px rgba(0, 0, 0, 0.8)'}}>
            <Link className='text-lg' style={{ color: 'black' }} to='/Signup'>SignUp</Link>
          </Button>
        </div>
      )}
        {showLogoutModal && <LogoutModal isOpen={showLogoutModal} closeModal={closeLogoutModal} onConfirm={confirmLogout} />}
      <h1 style={{
        fontSize: isHovered ? '95px' : '80px',
        marginLeft: '900px',
        marginTop: '10px',
        fontStyle: 'italic',
        fontFamily: 'cursive',
        color: 'white',
        textShadow: isHovered ? '4px 4px 8px rgba(0, 0, 0, 1.0)' : '2px 2px 4px rgba(0, 0, 0, 0.8)',
        transition: 'font-size 0.3s, text-shadow 0.3s',
      }}
        // onMouseOver={() => setIsHovered(true)}
        // onMouseOut={() => setIsHovered(false)}
      >
        TasteBud
      </h1>
      <br/>

      <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '850px' }}>
        <Card
          border="dark"
          style={{
            backgroundColor: '#e0bd5d',
            borderWidth: '4px',
            width: '200px',
            height: '200px',
            borderRadius: '10px',
            borderColor: 'black',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: isHovered ? '8px 8px 16px rgba(0, 0, 0, 1.0)' : '4px 4px 8px rgba(0, 0, 0, 0.8)',
          }}
          // onMouseOver={() => setIsHovered(true)}
          // onMouseOut={() => setIsHovered(false)}
          onClick={() => {
            navigate('/Dietplans'); 
        }}
        >
          <Card.Body
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft:'30px'
            }}
          >
            <Card.Title
              style={{
                fontSize: '28px',
                fontStyle: 'bold,italic',
                // fontStyle: 'italic',
                fontFamily: 'cursive',
                color:'black'
              }}
            >
              Diet Plans
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          border="dark"
          style={{
            backgroundColor: '#e0bd5d',
            borderWidth: '4px',
            width: '200px',
            height: '200px',
            borderRadius: '10px',
            borderColor: 'black',
            marginLeft: '90px',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: isHovered ? '8px 8px 16px rgba(0, 0, 0, 1.0)' : '4px 4px 8px rgba(0, 0, 0, 0.8)',
          }}
          // onMouseOver={() => setIsHovered(true)}
          // onMouseOut={() => setIsHovered(false)}
        >
          <Card.Body
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Card.Title
              style={{
                fontSize: '28px',
                fontStyle: 'bold,italic',
                // fontStyle: 'italic',
                fontFamily: 'cursive',
                color:'black'
              }}
            >
              Explore Recipe
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
      <br />
      <br />
      <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '990px', }}>
        <Card
          border="dark"
          style={{
            backgroundColor: '#e0bd5d',
            borderWidth: '4px',
            width: '200px',
            height: '200px',
            borderRadius: '10px',
            borderColor: 'black',

            transition: 'transform 0.2s, box-shadow 0.2s',
            // boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            boxShadow: isHovered ? '8px 8px 16px rgba(0, 0, 0, 1.0)' : '4px 4px 8px rgba(0, 0, 0, 0.8)',
          }}
          // onMouseOver={() => setIsHovered(true)}
          // onMouseOut={() => setIsHovered(false)}
          onClick={() => {
          if (isLoggedIn) {
            navigate('/Pantry'); // Redirect to Pantry page if logged in
          } else {
            navigate('/Login'); // Redirect to Login page if not logged in
          }
        }}
        >
          <Card.Body
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Card.Title
              style={{
                fontSize: '28px',
                fontStyle: 'bold,italic',
                // fontStyle: 'italic',
                fontFamily: 'cursive',
                color:'black'
              }}
            >
              Pantry Recipe
            </Card.Title>
          </Card.Body>
        </Card>
      </div>


      <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '50px',marginTop:'-40px'}}>
        <Button style={{ marginRight: '50px', backgroundColor:'#e0bd5d', color: 'black', fontSize: '18px', padding: '10px 20px', borderRadius: '10px',boxShadow:'8px 8px 16px rgba(0, 0, 0, 1.0)' }}>
          Help??
        </Button>
        <Button style={{ backgroundColor: '#e0bd5d', color: 'black', fontSize: '18px', padding: '10px 20px' , borderRadius: '10px',boxShadow:'8px 8px 16px rgba(0, 0, 0, 1.0)'}}>
          About us 👩‍💻
        </Button>
      </div>

    </div>
  );
}

export default Home;
