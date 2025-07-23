/**
 * @fileoverview Página de agenda de torneios
 * @description Lista os torneios e eventos de Gueitebol programados
 */

import React from 'react';
import { TORNEIOS_AGENDA } from '../constants/torneios';

/**
 * Página de torneios
 * @description Renderiza a agenda de torneios e eventos de Gueitebol
 * @returns {JSX.Element} Página com agenda de torneios
 */
function Torneios() {
  return (
    <main className="torneios-container" role="main">
      <header>
        <h1>Agenda de Torneios</h1>
        <p>Confira os próximos eventos e campeonatos de Gueitebol</p>
      </header>
      
      {/* Lista de torneios */}
      <section aria-label="Lista de torneios programados">
        {TORNEIOS_AGENDA.length > 0 ? (
          <ul className="torneios-list">
            {TORNEIOS_AGENDA.map((evento, index) => (
              <li key={index} className="torneio-item">
                <div className="torneio-info">
                  <h3 className="torneio-nome">{evento.nome}</h3>
                  <time className="torneio-data" dateTime={evento.data}>
                    {evento.data}
                  </time>
                  <span className="torneio-categoria">
                    Categoria: {evento.categoria}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum torneio programado no momento.</p>
        )}
      </section>
      
      {/* Informação adicional */}
      <aside className="info-adicional">
        <h2>Como participar</h2>
        <p>
          Para participar dos torneios, você deve estar filiado a um clube cadastrado.
          Entre em contato com o clube mais próximo para mais informações sobre inscrições.
        </p>
      </aside>
    </main>
  );
}

export default Torneios;
