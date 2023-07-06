import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Lilac Breeze</div>
      <nav>
        <Link to={"/"} className="header-button">Home</Link>
        <Link to={"/bookservice"} className="header-button">Book</Link>
        <Link to={"/legal"} className="header-button">Legal & FAQ</Link>
      </nav>
    </header>
  );
};

export default Header;
