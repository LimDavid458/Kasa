import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Error from './pages/Error'
import About from './pages/About';
import Accommodation from './pages/Accommodation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='logement/:id' element={<Accommodation />} />
        <Route path='*' element={<Error />} />
      </Routes>

      <Footer />
    </Router>
    
  </React.StrictMode>
);

