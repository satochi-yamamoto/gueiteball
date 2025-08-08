/**
 * @fileoverview Página inicial do site Gueitebal
 * @description Página principal com seção hero, introdução do esporte, dicas e cards informativos
 */

import React from 'react';

// Componentes
import HeroSection from '../components/HeroSection';
import InfoCard from '../components/InfoCard';
import Footer from '../components/Footer';
import SearchComponent from '../components/SearchComponent';
import AdsterraBanner from '../components/AdsterraBanner';

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
      
      {/* Componente de busca */}
      <SearchComponent />
      
      {/* Introdução ao esporte */}
      <section className="sport-introduction" aria-label="Introdução ao Gueitebol">
        <h2>O que é Gueitebol?</h2>
        <div className="intro-content">
          <div className="intro-text">
            <h3>Um Esporte para Todas as Idades</h3>
            <p>
              O Gueitebol, também conhecido como Gateball, é um esporte japonês estratégico que conquistou 
              milhões de praticantes em todo o mundo. Criado no Japão em 1947, este esporte combina 
              elementos de estratégia, precisão e trabalho em equipe.
            </p>
            <p>
              Ideal para pessoas de todas as idades, especialmente para a terceira idade, o Gueitebol 
              promove a socialização, melhora a coordenação motora e estimula o raciocínio estratégico. 
              É praticado em equipes de 5 jogadores cada, em um campo de grama de 20m x 15m.
            </p>
          </div>
          
          <div className="intro-text">
            <h3>Benefícios do Gueitebol</h3>
            <p><strong>Físicos:</strong> Melhora o equilíbrio, coordenação motora e fortalece músculos das pernas e core.</p>
            <p><strong>Mentais:</strong> Desenvolve estratégia, concentração e tomada de decisões rápidas.</p>
            <p><strong>Sociais:</strong> Promove integração social, trabalho em equipe e novas amizades.</p>
            <p><strong>Acessibilidade:</strong> Baixo impacto, adequado para pessoas com limitações físicas.</p>
          </div>
        </div>
        
        {/* Dicas de como praticar */}
        <div className="practice-tips">
          <h3>Como Começar a Praticar</h3>
          <div className="tips-grid">
            <div className="tip-item">
              <h4>1. Encontre um Clube</h4>
              <p>Procure clubes de Gueitebol em sua cidade. A maioria oferece aulas gratuitas para iniciantes e equipamentos para experimentar.</p>
            </div>
            
            <div className="tip-item">
              <h4>2. Equipamentos Básicos</h4>
              <p>Você precisará de um taco (stick), bola própria e roupas confortáveis. Muitos clubes emprestam equipamentos para novatos.</p>
            </div>
            
            <div className="tip-item">
              <h4>3. Aprenda as Regras</h4>
              <p>Comece com as regras básicas: cada time tem 5 jogadores, o objetivo é passar pelas 3 portas na sequência correta e tocar o poste final.</p>
            </div>
            
            <div className="tip-item">
              <h4>4. Pratique Regularmente</h4>
              <p>A prática constante é fundamental. Participe de treinos semanais e torneios amistosos para melhorar suas habilidades.</p>
            </div>
            
            <div className="tip-item">
              <h4>5. Desenvolva Estratégia</h4>
              <p>Observe jogadores experientes, estude diferentes táticas e aprenda a trabalhar em equipe para maximizar as chances de vitória.</p>
            </div>
            
            <div className="tip-item">
              <h4>6. Participe de Torneios</h4>
              <p>Quando se sentir confiante, participe de competições locais. É uma ótima forma de conhecer outros praticantes e evoluir no esporte.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Container de anúncio AdSense */}
      <div className="ad-container">
        <div className="ad-label">Publicidade</div>
        <ins className="adsbygoogle"
             style={{display: 'block'}}
             data-ad-client="ca-pub-4789090074866563"
             data-ad-slot="1234567890"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
      
      {/* Banner nativo Adsterra */}
      <AdsterraBanner 
        containerId="container-c94f18fb54ae25a924347ac35a5ef3b0"
        className="adsterra-banner-2x1"
        style="native-banner"
      />
      
      {/* Seção de cards informativos */}
      <section className="info-section" aria-label="Informações sobre Gueitebol">
        <InfoCard
          title="História e Tradição"
          description="Conheça a rica história do Gueitebol, desde sua criação no Japão até sua chegada ao Brasil."
        />
        <InfoCard
          title="Encontre Clubes"
          description="Descubra clubes próximos a você e comece a praticar este esporte incrível hoje mesmo."
        />
        <InfoCard
          title="Torneios e Competições"
          description="Acompanhe calendário de torneios nacionais e regionais organizados pela UCGB."
        />
      </section>
      
      {/* Rodapé */}
      <Footer />
    </>
  );
}

export default Home;
