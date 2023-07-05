import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Legal from './views/Legal';
import BookService from './views/BookService';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/legal" element={<Legal/>} />
        <Route path="/bookservice" element={<BookService/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
