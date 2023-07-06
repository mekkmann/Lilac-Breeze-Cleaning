import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <p className='logo-title'>Lilac Breeze</p>
      </div>
      <nav>
        <Link to={"/"} className="header-button">Home</Link>
        <Link to={"/prices"} className="header-button">Prices</Link>
        <Link to={"/legal"} className="header-button">About</Link>
        <Link to={"/bookservice"} id='header-book'>Book</Link>
      </nav>
    </header>
  );
};

export default Header;
