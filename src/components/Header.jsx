import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import LogoMid from "../img/LogoMid.png";

export default function Header() {
  return (
    <header id="main-header">
      <div className="logo-container">
        <img id="main-logo" src={LogoMid} alt="Logo" />
        <p>FERROCARRIL MIDLAND</p>
      </div>
      <nav id="main-navbar">
        <ul className="navbar-lista">
          <li className="navbar-item">
            <Link to="/institucional">Institucional</Link>
          </li>
          <li className="navbar-item">
            <Link to="/el-club">El Club</Link>
          </li>
          <li className="navbar-item">
            <Link to="/tienda">Tienda</Link>
          </li>
          <li className="navbar-item">
            <Link to="/hacete-socio">Hacete Socio</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
