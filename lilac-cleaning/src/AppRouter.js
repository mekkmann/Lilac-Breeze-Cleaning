import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Legal from './views/Legal';
import BookService from './views/BookService';

import Header from './components/header';
import Footer from './components/footer';

const AppRouter = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/bookservice" element={<BookService/>} />
        <Route path="/legal" element={<Legal/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default AppRouter;
