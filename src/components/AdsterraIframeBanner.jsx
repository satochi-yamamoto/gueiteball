/**
 * @fileoverview Componente para banner iframe do Adsterra (300x250)
 * @description Renderiza banner iframe 300x250 do Adsterra
 */

import React, { useEffect, useRef } from 'react';

/**
 * Componente de banner iframe Adsterra
 * @param {Object} props - Propriedades do componente
 * @param {string} props.className - Classes CSS adicionais
 * @returns {JSX.Element} Banner iframe do Adsterra
 */
function AdsterraIframeBanner({ className = "" }) {
  const bannerRef = useRef(null);

  useEffect(() => {
    const loadBanner = () => {
      if (bannerRef.current && window.location.hostname !== 'localhost') {
        // Em produção, o script do Adsterra será executado automaticamente
        console.log('Adsterra iframe banner carregado');
      } else if (bannerRef.current && window.location.hostname === 'localhost') {
        // Em desenvolvimento, mostrar placeholder
        bannerRef.current.innerHTML = `
          <div style="
            width: 300px;
            height: 250px;
            background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
            border: 2px dashed #ccc;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #666;
            border-radius: 8px;
            margin: 0 auto;
          ">
            <p><strong>📱 Adsterra Iframe Banner</strong></p>
            <p>300x250px</p>
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
    <div className={`adsterra-iframe-container ${className}`}>
      <div className="ad-label">Publicidade</div>
      <div 
        ref={bannerRef}
        className="adsterra-iframe-banner"
        style={{
          width: '300px',
          height: '250px',
          margin: '1rem auto',
          textAlign: 'center'
        }}
      />
    </div>
  );
}

export default AdsterraIframeBanner;
