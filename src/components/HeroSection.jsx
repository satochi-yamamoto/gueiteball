/**
 * @fileoverview Seção hero da página inicial
 * @description Componente principal de destaque da página inicial
 */

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Seção hero da página inicial
 * @description Renderiza a seção de destaque principal com título, descrição e call-to-action
 * @returns {JSX.Element} Seção hero com conteúdo promocional
 */
function HeroSection() {
  return (
    <header className="hero" role="banner">
      <div className="hero-text">
        <h1>Gueitebol: Estratégia, Saúde e Inclusão</h1>
        <p>Descubra tudo sobre esse esporte inspirador que une gerações.</p>
        
        {/* Call-to-action button */}
        <Link 
          to="/clubes" 
          className="cta-btn"
          role="button"
          aria-label="Encontrar clubes para praticar Gueitebol"
        >
          Quero praticar!
        </Link>
      </div>
    </header>
  );
}

export default HeroSection;
