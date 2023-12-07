import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Login from "../src/Components/Login"
import Signup from "../src/Components/Signup"
import Welcome from './Components/Welcome';

function App() {
  return (
    <>
  
    <Router>
    <Routes>
    <Route exact path="/" Component={Login}/>
    <Route exact path="/signup" Component={Signup}/>
    <Route exact path="/welcome" Component={Welcome}/>
    
    </Routes>
    
    </Router>
    
    
    </>
  );
}

export default App;
