import React ,{ useState }from 'react';
import background from '../images/tastebudbg.jpeg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function Home() {

  const [isHovered, setIsHovered] = useState(false);

  return (

    <div style={{
        backgroundImage: `url(${background})`,
        height:'120vh',
        marginTop:'-70px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
      
        <h1 style={{
        fontSize: isHovered ? '110px' : '100px',
        marginLeft:'850px',
        marginTop: '70px', // Adjusted to move below the center vertically
        fontStyle: 'italic',
        fontFamily: 'cursive', // Adjusted to a stylish font
        color: 'white', // Text color
        // textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        textShadow: isHovered ? '4px 4px 8px rgba(0, 0, 0, 1.0)' : '2px 2px 4px rgba(0, 0, 0, 0.8)', // Hover effect for text shadow
        transition: 'font-size 0.3s, text-shadow 0.3s', }}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        >
        TasteBud</h1>
<div style={{ display: 'flex', flexDirection: 'row', marginLeft: '850px' }}>
  <Card
    border="dark"
    style={{
      backgroundColor: '#e0bd5d',
      borderWidth: '4px',
      width: '210px',
      height: '210px',
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
      }}
    >
      <Card.Title
        style={{
          fontSize: '28px',
          fontStyle: 'bold',
          fontStyle: 'italic',
          fontFamily: 'cursive',
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
      width: '210px',
      height: '210px',
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
          fontStyle: 'bold',
          fontStyle: 'italic',
          fontFamily: 'cursive',
        }}
      >
        Explore Recipe
      </Card.Title>
    </Card.Body>
  </Card>
</div>
<br />
<br />
<div style={{display: 'flex', flexDirection: 'row',marginLeft: '990px',}}>
  <Card
    border="dark"
    style={{
      backgroundColor: '#e0bd5d',
      borderWidth: '4px',
      width: '210px',
      height: '210px',
      borderRadius: '10px',
      borderColor: 'black',
      
      transition: 'transform 0.2s, box-shadow 0.2s',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
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
          fontStyle: 'bold',
          fontStyle: 'italic',
          fontFamily: 'cursive',
        }}
      >
        Pantry Recipe
      </Card.Title>
    </Card.Body>
  </Card>
</div>

    </div>
  );
}

export default Home;
