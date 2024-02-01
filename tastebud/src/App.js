import './App.css';
import React, {useState,useEffect} from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/dashboard';
import Modal from 'react-modal';
import Chatbot from './Components/Chatbot'
import styles from './css/Chatbot.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Pantry from './Components/Pantry';
import Preloader from './Components/preloader';
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

          <Route path="/Chatbot"
            element={<Chatbot />} />
        </Routes>
      </Router>
    </>
    )
    }
    </>
  );
}
const ModalProvider = ({ children }) => {
  Modal.setAppElement('#root');
  return <Modal>{children}</Modal>;
};
export default App;
