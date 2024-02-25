import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Dashcards() {

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetchUserInfo();
  }, []);


  const fetchUserInfo = async () => {
    try {
      // Make a request to the Flask endpoint to fetch user information
      const response = await fetch('http://localhost:5000/user', {
        method: 'GET',  
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.status === 'success') {
        setUserInfo(data.user_info);
      } else {
        console.error('Error fetching user information:', data.message);
      }
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  };
    return(
        <>
            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '130vh' }}>
    <Card
          border="dark"
          style={{
            backgroundColor: '#e0bd5d',
            borderWidth: '4px',
            width: '230px',
            height: '230px',
            borderRadius: '10px',
            borderColor: 'black',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '8px 8px 16px rgba(0, 0, 0, 1.0)',
            marginTop:'20vh'
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
                fontFamily: 'cursive',
                color:'black',
                marginRight:'30px'
              }}
            >
              Name: {userInfo!==null?userInfo.username:null}
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          border="dark"
          style={{
            backgroundColor: '#e0bd5d',
            borderWidth: '4px',
            width: '230px',
            height: '230px',
            borderRadius: '10px',
            borderColor: 'black',
            marginLeft: '90px',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '8px 8px 16px rgba(0, 0, 0, 1.0)',
            marginTop:'20vh'
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
                fontSize: '26px',
                fontStyle: 'bold,italic',
                fontFamily: 'cursive',
                color:'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Recipe History
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '130vh' }}>
    <Card
          border="dark"
          style={{
            backgroundColor: '#e0bd5d',
            borderWidth: '4px',
            width: '230px',
            height: '230px',
            borderRadius: '10px',
            borderColor: 'black',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '8px 8px 16px rgba(0, 0, 0, 1.0)',
            marginTop:'10vh'
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
                fontFamily: 'cursive',
                color:'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Email address:{userInfo?.email}
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          border="dark"
          style={{
            backgroundColor: '#e0bd5d',
            borderWidth: '4px',
            width: '230px',
            height: '230px',
            borderRadius: '10px',
            borderColor: 'black',
            marginLeft: '90px',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '8px 8px 16px rgba(0, 0, 0, 1.0)',
            marginTop:'10vh'
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
                fontFamily: 'cursive',
                color:'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft:'25px'
              }}
            >
              Favourite Recipes
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    
        </>
    );
}
export default Dashcards;
