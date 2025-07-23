/**
 * @fileoverview Componente de cartão informativo
 * @description Componente reutilizável para exibir informações em formato de cartão
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente de cartão informativo
 * @description Renderiza um cartão com título e descrição
 * @param {Object} props - Propriedades do componente
 * @param {string} props.title - Título do cartão
 * @param {string} props.description - Descrição/conteúdo do cartão
 * @returns {JSX.Element} Cartão informativo estilizado
 */
function InfoCard({ title, description }) {
  return (
    <div className="info-card" role="article">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Definição dos tipos das propriedades
InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default InfoCard;
