import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap'; // Import Container component

function App() {
  return (
    <div className="mx-5 my-3 d-flex flex-column" style={{ minHeight: '98vh' }}>
      <AppNavbar />
      <Container className="flex-grow-1"> {/* Use flex-grow-1 to fill remaining space */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
      <Footer className="footer" />
    </div>
  );
}

export default App;
