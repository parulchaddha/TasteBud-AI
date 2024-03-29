//  import './App.css';
// import React, {useState,useEffect} from 'react';
// import Home from './Components/Home';
// import Login from './Components/Login';
// import Signup from './Components/Signup';
// import Dashboard from './Components/dashboard';
// import Modal from 'react-modal';
// import Diet from './Components/Diet';
// import Detailsboard from './Components/Detailsboard';
// import HomeGroup from "./Components/homegroup";

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";
// import Pantry from './Components/Pantry';
// import Preloader from './Components/preloader';
// import Imagecarousel from './Components/Imagecarousel';
// import ExplorePage from './Components/ExplorePage';

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);
//   return (

//     <>
//     {loading ? (<Preloader/>):
//     (
//     <>
//       <Router>
//         <Routes>
            
//         <Route path="/"
//             element={<HomeGroup />} />

//           <Route path="/home"
//             element={
//               <Home />} />

//           <Route path="/Login"
//             element={<Login />} />

//           <Route path="/Signup"
//             element={<Signup />} />

//           <Route path="/Pantry"
//             element={<Pantry />} />

//           <Route path="/Dashboard"
//             element={<Dashboard />} />

//           <Route path="/explore"
//             element={<ExplorePage />} /> 

//           <Route path="/diet/:dietType"
//             element={<Diet />} />

//           <Route path="/diet"
//             element={<Imagecarousel />} /> 

//           <Route path="/detailsboard"
//             element={<Detailsboard />} /> 
//         </Routes>
        
//       </Router>
//     </>
//     )
//     }
//     </>
//   );
// }
// const ModalProvider = ({ children }) => {
//   Modal.setAppElement('#root');
//   return <Modal>{children}</Modal>;
// };
// export default App;



// import HomeGroup from "./Components/homegroup";
// function App() {
//   return (
//     <div className="App">
//       <HomeGroup />
      
//     </div>
//   );
// } ;
// export default App; 









import './App.css';
import React, {useState,useEffect} from 'react';
import Preloader from './Components/preloader';
import HomeGroup from "./Components/homegroup";
import Detailsboard from './Components/Detailsboard';

import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from './Components/Signup';
import Dashboard from './Components/dashboard';
import Pantry from './Components/Pantry';
import ExplorePage from './Components/ExplorePage';
import Diet from './Components/Diet';
import Imagecarousel from './Components/Imagecarousel';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (

    <>
    {loading ? (<Preloader/>):
    (
    <>
      <Router>
        <Routes>
            
        <Route path="/"
            element={<HomeGroup />} />

          <Route path="/home"
            element={
              <Home />} />

           <Route path="/home"
            element={
              <Home />} />

          



          <Route path="/Login"
            element={<Login />} />

          <Route path="/Signup"
            element={<Signup />} />

          <Route path="/Pantry"
            element={<Pantry />} />

          <Route path="/Dashboard"
            element={<Dashboard />} />

          <Route path="/explore"
            element={<ExplorePage />} /> 

          <Route path="/diet/:dietType"
            element={<Diet />} />

          <Route path="/diet"
            element={<Imagecarousel />} /> 

          { <Route path="/detailsboard"
            element={<Detailsboard />} />  }

        
        </Routes>
        
      </Router>
    </>
    )
    }
    </>
  );
}

export default App;
