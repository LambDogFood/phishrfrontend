/**
 * Author: Alex Edgar
 * Written: 01/12/24
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
//import Auth from './components/Auth';
import { AuthProvider } from './hooks/useAuth';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/*<Route path="/auth" element={<Auth />} />*/}
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
