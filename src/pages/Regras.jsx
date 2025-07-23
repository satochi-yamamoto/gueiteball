import React from 'react';

function Regras() {
  return (
    <main className="regras-container">
      <h1>Regras do Gueitebol</h1>
      <ol>
        <li>O jogo tem duração de 30 minutos.</li>
        <li>São 10 jogadores em campo, divididos em duas equipes de cinco.</li>
        <li>Objetivo é passar pelas gates e atingir o goal pole com estratégia.</li>
      </ol>
      <p>Baixe o regulamento completo <a href="/regulamento.pdf">aqui</a>.</p>
    </main>
  );
}

export default Regras;
