import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="mx-5 my-3">
    <AppNavbar/>
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
    <Footer />
    </div>
  );
}

export default App;
