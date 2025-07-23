/**
 * @fileoverview Página inicial do site Gueitebal
 * @description Página principal com seção hero, cards informativos e rodapé
 */

import React from 'react';

// Componentes
import HeroSection from '../components/HeroSection';
import InfoCard from '../components/InfoCard';
import Footer from '../components/Footer';

/**
 * Página inicial
 * @description Renderiza a página principal do site com informações sobre Gueitebol
 * @returns {JSX.Element} Estrutura completa da página inicial
 */
function Home() {
  return (
    <>
      {/* Seção principal de destaque */}
      <HeroSection />
      
      {/* Seção de cards informativos */}
      <section className="info-section" aria-label="Informações sobre Gueitebol">
        <InfoCard
          title="O que é Gueitebol?"
          description="Esporte japonês estratégico, acessível e colaborativo."
        />
        <InfoCard
          title="Pratique em sua cidade"
          description="Veja os clubes cadastrados e encontre um perto de você."
        />
        <InfoCard
          title="Participe de Torneios"
          description="Acompanhe as datas e inscrições dos eventos nacionais."
        />
      </section>
      
      {/* Rodapé */}
      <Footer />
    </>
  );
}

export default Home;
