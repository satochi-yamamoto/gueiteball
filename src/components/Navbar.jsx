import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Gueitebal.com.br</div>
      <ul className="nav-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/clubes">Clubes</Link></li>
        <li><Link to="/torneios">Torneios</Link></li>
        <li><Link to="/regras">Regras</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
