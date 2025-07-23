/**
 * @fileoverview Página de clubes cadastrados
 * @description Lista os clubes de Gueitebol cadastrados no sistema
 */

import React from 'react';
import { CLUBES_CADASTRADOS } from '../constants/clubes';

/**
 * Página de clubes
 * @description Renderiza a lista de clubes cadastrados no sistema
 * @returns {JSX.Element} Página com lista de clubes
 */
function Clubes() {
  return (
    <main className="clubes-container" role="main">
      <header>
        <h1>Clubes Cadastrados</h1>
        <p>Encontre um clube de Gueitebol perto de você</p>
      </header>
      
      {/* Lista de clubes */}
      <section aria-label="Lista de clubes cadastrados">
        {CLUBES_CADASTRADOS.length > 0 ? (
          <ul className="clubes-list">
            {CLUBES_CADASTRADOS.map((clube, index) => (
              <li key={index} className="clube-item">
                <strong>{clube.nome}</strong>
                <span className="clube-location">
                  {clube.cidade}/{clube.estado}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum clube cadastrado no momento.</p>
        )}
      </section>
      
      {/* Informação adicional */}
      <aside className="info-adicional">
        <p>
          <strong>Quer cadastrar seu clube?</strong>{' '}
          Entre em contato conosco através da página de contato.
        </p>
      </aside>
    </main>
  );
}

export default Clubes;
