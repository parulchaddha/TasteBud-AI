import React, { useState } from 'react';
import background from '../images/tastebudbg.jpeg';
// import { Routes, Route,useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Login from './Login';
// import Signup from './Signup';
function Home() {

  const [isHovered, setIsHovered] = useState(false);
  // const navigate = useNavigate();
  
  //   const HandleLogin = () => { 
  //       navigate('/Login');
  //   } 
  //   const HandleSignup = () => { 
  //     navigate('/Signup');
  //   } 
  return (

    <div style={{
      backgroundImage: `url(${background})`,
      height: '107.6vh',
      marginTop: '-70px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', 
    }}>
    <hr style={{height:'2pt',visibility:'hidden'}}/>
      <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '1300px', marginTop: '70px' }}>
        <Button style={{ marginRight: '10px', backgroundColor:'#e0bd5d', color: 'black', fontSize: '18px', padding: '10px 20px', borderRadius: '10px',boxShadow:'8px 8px 16px rgba(0, 0, 0, 1.0)' }}>
          Login
        </Button>
        <Button style={{ backgroundColor: '#e0bd5d', color: 'black', fontSize: '18px', padding: '10px 20px' , borderRadius: '10px',boxShadow:'8px 8px 16px rgba(0, 0, 0, 0.8)'}}>
          Signup
        </Button>
        {/* <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes> */}
      </div>
      <h1 style={{
        fontSize: isHovered ? '95px' : '90px',
        marginLeft: '900px',
        marginTop: '10px', // Adjusted to move below the center vertically
        fontStyle: 'italic',
        fontFamily: 'cursive', // Adjusted to a stylish font
        color: 'white', // Text color
        textShadow: isHovered ? '4px 4px 8px rgba(0, 0, 0, 1.0)' : '2px 2px 4px rgba(0, 0, 0, 0.8)', // Hover effect for text shadow
        transition: 'font-size 0.3s, text-shadow 0.3s',
      }}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        TasteBud</h1>
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
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
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
              Daily Diet Plans
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
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
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
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
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
