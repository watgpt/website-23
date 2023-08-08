import logo from './logo.svg';
import './App.css';
import {Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import AppNavbar from './components/AppNavbar';


function App() {
  return (
    //use navbar component
    <>
    <AppNavbar/>
    
    <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  
    </>
    
  );
}

export default App;
