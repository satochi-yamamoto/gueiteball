import React from 'react';

const torneios = [
  { nome: '9º Memuro-Brasil', data: '15/09/2025', categoria: 'Diamante (75+)' },
  { nome: 'Campeonato Brasileiro 2025', data: '10/08/2025', categoria: 'Prata (Livre)' },
];

function Torneios() {
  return (
    <main className="torneios-container">
      <h1>Agenda de Torneios</h1>
      <ul>
        {torneios.map((evento, i) => (
          <li key={i}>
            <strong>{evento.nome}</strong> - {evento.data} | {evento.categoria}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Torneios;
