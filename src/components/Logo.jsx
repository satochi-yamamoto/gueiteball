/**
 * @fileoverview Componente de logo do site Gueitebol
 * @description Logo SVG customizado para o site da UCGB
 */

import React from 'react';

/**
 * Componente de logo do Gueitebol
 * @param {Object} props - Propriedades do componente
 * @param {number} props.width - Largura do logo (padrão: 200)
 * @param {number} props.height - Altura do logo (padrão: 60)
 * @param {string} props.className - Classes CSS adicionais
 * @returns {JSX.Element} Logo SVG do Gueitebol
 */
function Logo({ width = 200, height = 60, className = '' }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 60"
      className={`gueitebol-logo ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo Gueitebol Brasil - UCGB"
    >
      {/* Definições de gradientes */}
      <defs>
        <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2c5530" />
          <stop offset="100%" stopColor="#4a7c59" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6db33f" />
          <stop offset="100%" stopColor="#4a7c59" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <dropShadow dx="1" dy="1" stdDeviation="1" floodColor="rgba(0,0,0,0.2)" />
        </filter>
      </defs>

      {/* Campo de jogo estilizado */}
      <rect
        x="8"
        y="15"
        width="30"
        height="20"
        rx="2"
        fill="url(#primaryGradient)"
        stroke="#2c5530"
        strokeWidth="1"
        opacity="0.8"
      />
      
      {/* Portões do gatebol (3 arcos) */}
      <path
        d="M 12 25 Q 12 22 15 22 Q 18 22 18 25"
        fill="none"
        stroke="#6db33f"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 20 25 Q 20 22 23 22 Q 26 22 26 25"
        fill="none"
        stroke="#6db33f"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 28 25 Q 28 22 31 22 Q 34 22 34 25"
        fill="none"
        stroke="#6db33f"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Bola de gatebol */}
      <circle
        cx="15"
        cy="28"
        r="2"
        fill="#ffffff"
        stroke="#2c5530"
        strokeWidth="1"
      />

      {/* Taco de gatebol */}
      <line
        x1="22"
        y1="32"
        x2="28"
        y2="26"
        stroke="#8B4513"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="28"
        cy="26"
        r="1.5"
        fill="#8B4513"
      />

      {/* Texto principal "GUEITEBOL" */}
      <text
        x="45"
        y="25"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="16"
        fontWeight="700"
        fill="url(#primaryGradient)"
        letterSpacing="-0.5px"
      >
        GUEITEBOL
      </text>

      {/* Texto secundário "BRASIL" */}
      <text
        x="45"
        y="40"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="12"
        fontWeight="500"
        fill="url(#accentGradient)"
        letterSpacing="1px"
      >
        BRASIL
      </text>

      {/* Sublinhado decorativo */}
      <line
        x1="45"
        y1="42"
        x2="100"
        y2="42"
        stroke="url(#accentGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Texto "UCGB" */}
      <text
        x="145"
        y="20"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="10"
        fontWeight="600"
        fill="#2c5530"
        opacity="0.8"
      >
        UCGB
      </text>

      {/* Elementos decorativos japoneses (inspiração cultural) */}
      <circle
        cx="155"
        cy="30"
        r="8"
        fill="none"
        stroke="#6db33f"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <circle
        cx="155"
        cy="30"
        r="4"
        fill="#6db33f"
        opacity="0.3"
      />

      {/* Elementos de movimento/dinamismo */}
      <path
        d="M 165 25 Q 170 20 175 25 Q 180 30 175 35 Q 170 40 165 35"
        fill="none"
        stroke="url(#accentGradient)"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
}

export default Logo;
