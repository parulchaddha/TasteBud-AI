import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/dashboard';
import { 
  BrowserRouter as Router, 
  Route, 
  Link,
  Routes
} from "react-router-dom"; 
import Pantry from './Components/Pantry';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/"
          element={<Home />}/>

        <Route path="/Login"
          element={<Login />}/>
        
        <Route path="/Signup"
          element={<Signup />}/>

        <Route path="/Pantry"
          element={<Pantry />}/>

        <Route path="/Dashboard"
          element={<Dashboard />}/>
      </Routes>
    </Router>
    </> 
  );
}

export default App;
