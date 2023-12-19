import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Homenew from './Components/Homenew';
import { 
  BrowserRouter as Router, 
  Route, 
  Link,
  Routes
} from "react-router-dom"; 
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

        <Route path="/Homenew"
          element={<Homenew />}/>
      </Routes>
    </Router>
    </> 
  );
}

export default App;
