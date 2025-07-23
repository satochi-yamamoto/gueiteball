/**
 * @fileoverview Página sobre o Gueitebol
 * @description Informações detalhadas sobre o esporte e sua história
 */

import React from 'react';

/**
 * Página sobre o Gueitebol
 * @description Renderiza informações sobre o esporte, sua história e valores
 * @returns {JSX.Element} Página com informações sobre o Gueitebol
 */
function Sobre() {
  return (
    <main className="sobre-container" role="main">
      <header>
        <h1>Sobre o Gueitebol</h1>
      </header>
      
      {/* Seção principal sobre o esporte */}
      <section className="sobre-content">
        <div className="sobre-intro">
          <h2>O que é o Gueitebol?</h2>
          <p>
            O gueitebol é um esporte originado no Japão, voltado para estratégia e integração. 
            No Brasil, cresce em popularidade entre todas as idades, especialmente em 
            comunidades nipo-brasileiras.
          </p>
        </div>
        
        <div className="sobre-organizacao">
          <h2>Nossa Organização</h2>
          <p>
            A União dos Clubes de Gueitebol do Brasil coordena campeonatos, promove inclusão 
            e difunde os valores do esporte em todo o território nacional.
          </p>
        </div>
        
        {/* Seção com valores do esporte */}
        <div className="sobre-valores">
          <h2>Valores do Gueitebol</h2>
          <ul>
            <li>
              <strong>Estratégia:</strong> Desenvolvimento do pensamento tático e planejamento
            </li>
            <li>
              <strong>Inclusão:</strong> Esporte acessível para todas as idades e habilidades
            </li>
            <li>
              <strong>Colaboração:</strong> Trabalho em equipe e respeito mútuo
            </li>
            <li>
              <strong>Saúde:</strong> Atividade física adaptada e benéfica
            </li>
          </ul>
        </div>
        
        {/* Seção histórica */}
        <div className="sobre-historia">
          <h2>História no Brasil</h2>
          <p>
            Trazido pela comunidade japonesa, o Gueitebol encontrou no Brasil um terreno 
            fértil para crescer e se adaptar à nossa cultura, mantendo seus valores 
            originais enquanto abraça a diversidade brasileira.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Sobre;
