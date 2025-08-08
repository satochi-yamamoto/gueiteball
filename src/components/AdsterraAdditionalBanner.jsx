/**
 * @fileoverview Componente para banner adicional do Adsterra
 * @description Renderiza banner adicional do Adsterra com script personalizado
 */

import React, { useEffect, useRef } from 'react';

/**
 * Componente de banner adicional Adsterra
 * @param {Object} props - Propriedades do componente
 * @param {string} props.className - Classes CSS adicionais
 * @returns {JSX.Element} Banner adicional do Adsterra
 */
function AdsterraAdditionalBanner({ className = "" }) {
  const bannerRef = useRef(null);

  useEffect(() => {
    const loadBanner = () => {
      if (bannerRef.current && window.location.hostname !== 'localhost') {
        // Em produção, o script do Adsterra será executado automaticamente
        console.log('Adsterra additional banner carregado');
      } else if (bannerRef.current && window.location.hostname === 'localhost') {
        // Em desenvolvimento, mostrar placeholder
        bannerRef.current.innerHTML = `
          <div style="
            min-height: 100px;
            background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
            border: 2px dashed #ccc;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #666;
            border-radius: 8px;
            padding: 1rem;
          ">
            <p><strong>🚀 Adsterra Additional Banner</strong></p>
            <p>Script: 7393bfd1963c09d3a05dfc5c043e2b13</p>
            <p><em>Banner aparecerá em produção</em></p>
          </div>
        `;
      }
    };

    // Aguardar um pouco antes de carregar
    const timer = setTimeout(loadBanner, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`adsterra-additional-container ${className}`}>
      <div className="ad-label">Publicidade</div>
      <div 
        ref={bannerRef}
        className="adsterra-additional-banner"
        style={{
          minHeight: '100px',
          margin: '1rem auto',
          textAlign: 'center'
        }}
      />
    </div>
  );
}

export default AdsterraAdditionalBanner;
