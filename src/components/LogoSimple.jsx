/**
 * @fileoverview Logo simplificado do Gueitebol para uso em favicon e ícones pequenos
 * @description Versão minimalista do logo para uso em tamanhos reduzidos
 */

import React from 'react';

/**
 * Logo simplificado do Gueitebol
 * @param {Object} props - Propriedades do componente
 * @param {number} props.size - Tamanho do logo (padrão: 40)
 * @param {string} props.className - Classes CSS adicionais
 * @returns {JSX.Element} Logo SVG simplificado
 */
function LogoSimple({ size = 40, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={`gueitebol-logo-simple ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo Gueitebol"
    >
      {/* Definições */}
      <defs>
        <linearGradient id="simpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2c5530" />
          <stop offset="50%" stopColor="#4a7c59" />
          <stop offset="100%" stopColor="#6db33f" />
        </linearGradient>
      </defs>

      {/* Círculo de fundo */}
      <circle
        cx="20"
        cy="20"
        r="18"
        fill="url(#simpleGradient)"
        stroke="#ffffff"
        strokeWidth="2"
      />

      {/* Campo simplificado */}
      <rect
        x="8"
        y="12"
        width="24"
        height="16"
        rx="2"
        fill="rgba(255,255,255,0.2)"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1"
      />

      {/* Três portões simplificados */}
      <path
        d="M 12 20 Q 12 18 14 18 Q 16 18 16 20"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M 18 20 Q 18 18 20 18 Q 22 18 22 20"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M 24 20 Q 24 18 26 18 Q 28 18 28 20"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Bola */}
      <circle
        cx="14"
        cy="24"
        r="1.5"
        fill="#ffffff"
      />

      {/* Texto "G" estilizado */}
      <text
        x="20"
        y="32"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="14"
        fontWeight="800"
        fill="#ffffff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        G
      </text>
    </svg>
  );
}

export default LogoSimple;
