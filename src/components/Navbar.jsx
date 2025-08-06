/**
 * @fileoverview Componente de navegação principal do site
 * @description Barra de navegação com logo e links para todas as páginas
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import LogoSimple from './LogoSimple';

/**
 * Componente de navegação principal
 * @description Renderiza a barra de navegação com logo e menu de links
 * @returns {JSX.Element} Barra de navegação responsiva
 */
function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Navegação principal">
      {/* Logo do site */}
      <div className="logo">
        <Link to="/" aria-label="Ir para página inicial">
          {/* Logo completo para desktop */}
          <div className="logo-desktop">
            <Logo width={180} height={50} />
          </div>
          {/* Logo simplificado para mobile */}
          <div className="logo-mobile">
            <LogoSimple size={35} />
            <span className="logo-text-mobile">Gueitebol</span>
          </div>
        </Link>
      </div>
      
      {/* Menu de navegação */}
      <ul className="nav-links" role="menubar">
        <li role="none">
          <Link to="/" role="menuitem" aria-label="Página inicial">
            Início
          </Link>
        </li>
        <li role="none">
          <Link to="/sobre" role="menuitem" aria-label="Sobre o Gueitebol">
            Sobre
          </Link>
        </li>
        <li role="none">
          <Link to="/clubes" role="menuitem" aria-label="Clubes cadastrados">
            Clubes
          </Link>
        </li>
        <li role="none">
          <Link to="/torneios" role="menuitem" aria-label="Agenda de torneios">
            Torneios
          </Link>
        </li>
        <li role="none">
          <Link to="/regras" role="menuitem" aria-label="Regras do esporte">
            Regras
          </Link>
        </li>
        <li role="none">
          <Link to="/blog" role="menuitem" aria-label="Blog e notícias">
            Blog
          </Link>
        </li>
        <li role="none">
          <Link to="/contato" role="menuitem" aria-label="Página de contato">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
