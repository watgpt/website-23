import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="mx-5 my-4 d-flex flex-column" style={{ minHeight: '98vh' }}>
      <AppNavbar />
      <div className="flex-grow-1 d-flex align-items-center justify-content-center watgpt-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/website-23" element={<Home />} />
        </Routes>
      </div>

      <div className="custom-background">
        {/* Content of the new div */}
      </div>
      
      <Footer />
     
      
    </div>
  );
}

export default App;
