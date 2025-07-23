/**
 * @fileoverview Página de regras do Gueitebol
 * @description Explica as regras básicas e regulamentação do esporte
 */

import React from 'react';

/**
 * Página de regras
 * @description Renderiza as regras básicas do Gueitebol e link para regulamento completo
 * @returns {JSX.Element} Página com regras do esporte
 */
function Regras() {
  return (
    <main className="regras-container" role="main">
      <header>
        <h1>Regras do Gueitebol</h1>
        <p>Conheça as regras básicas e a regulamentação oficial do esporte</p>
      </header>
      
      {/* Regras básicas */}
      <section className="regras-basicas" aria-label="Regras básicas do Gueitebol">
        <h2>Regras Básicas</h2>
        <ol className="regras-lista">
          <li>
            <strong>Duração:</strong> O jogo tem duração de 30 minutos.
          </li>
          <li>
            <strong>Equipes:</strong> São 10 jogadores em campo, divididos em duas equipes de cinco.
          </li>
          <li>
            <strong>Objetivo:</strong> Passar pelas gates e atingir o goal pole com estratégia.
          </li>
        </ol>
      </section>
      
      {/* Seção de equipamentos */}
      <section className="regras-equipamentos">
        <h2>Equipamentos Necessários</h2>
        <ul>
          <li>Campo demarcado com gates e goal poles</li>
          <li>Bastões específicos para o esporte</li>
          <li>Uniforme adequado e calçado esportivo</li>
        </ul>
      </section>
      
      {/* Seção de fair play */}
      <section className="regras-fair-play">
        <h2>Espírito Esportivo</h2>
        <p>
          O Gueitebol prioriza o fair play, o respeito entre os participantes e 
          a inclusão de jogadores de diferentes habilidades e idades.
        </p>
      </section>
      
      {/* Link para regulamento completo */}
      <aside className="regulamento-completo">
        <h2>Regulamento Oficial</h2>
        <p>
          Para conhecer todas as regras detalhadas, pontuação e procedimentos oficiais:
        </p>
        <a 
          href="/regulamento.pdf" 
          className="download-link"
          download
          aria-label="Baixar regulamento completo em PDF"
        >
          Baixe o regulamento completo (PDF)
        </a>
      </aside>
    </main>
  );
}

export default Regras;
