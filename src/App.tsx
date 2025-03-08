import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  Element } from 'react-scroll';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Purpose from './pages/Purpose';
import Service from './pages/Service';
import Contact from './pages/Contact';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router basename="/nuvolink">
      <Header />
    
      <Routes>
        <Route path="/nuvolink" element={
          <>
            <Element name="home" className="full-height"><Home /></Element>
            <Element name="products" className="full-height"><Products /></Element>
            <Element name="purpose" className="full-height"><Purpose /></Element>
            <Element name="service" className="full-height"><Service /></Element>
            <Element name="contact" className="full-height"><Contact /></Element>
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;