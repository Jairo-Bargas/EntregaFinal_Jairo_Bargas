import React from 'react'
import '../styles/navbar.css' 
import CartWidget from './CartWidget';
import logo from '../assets/images.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img src={logo} alt="Icono Navbar" className="logo" />
          Blue Boutique
        </Link>
        <ul className="navbar-nav"> 
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/category/verano"}>Verano</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/category/invierno"}>Invierno</Link>
          </li> 
          <CartWidget/>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar