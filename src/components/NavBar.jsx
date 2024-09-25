import React from 'react'
import '../styles/navbar.css' 
import CartWidget from './CartWidget';
import logo from '../assets/images.png'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Icono Navbar" className="logo" />
          Blue Boutique
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
          <CartWidget/>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar