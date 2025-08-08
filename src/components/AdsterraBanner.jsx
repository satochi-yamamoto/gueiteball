/**
 * @fileoverview Componente para banners nativos do Adsterra
 * @description Renderiza banners nativos do Adsterra de forma responsiva
 */

import React, { useEffect, useRef } from 'react';

/**
 * Componente de banner nativo Adsterra
 * @param {Object} props - Propriedades do componente
 * @param {string} props.containerId - ID único do container para o banner
 * @param {string} props.className - Classes CSS adicionais
 * @param {string} props.style - Estilo inline personalizado
 * @returns {JSX.Element} Banner nativo do Adsterra
 */
function AdsterraBanner({ 
  containerId = import.meta.env.VITE_ADSTERRA_CONTAINER_ID || "container-c94f18fb54ae25a924347ac35a5ef3b0",
  className = "",
  style = "native-banner"
}) {
  const bannerRef = useRef(null);

  useEffect(() => {
    // Verificar se o script do Adsterra já foi carregado
    const checkAdsterraLoaded = () => {
      // O Adsterra geralmente cria elementos automaticamente quando o div está presente
      if (bannerRef.current && window.location.hostname !== 'localhost') {
        // Em produção, o script do Adsterra será executado automaticamente
        console.log('Adsterra banner container criado:', containerId);
      } else if (bannerRef.current && window.location.hostname === 'localhost') {
        // Em desenvolvimento, mostrar placeholder
        bannerRef.current.innerHTML = `
          <div style="
            background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
            border: 2px dashed #ccc;
            padding: 2rem;
            text-align: center;
            color: #666;
            border-radius: 8px;
          ">
            <p><strong>🔗 Adsterra Native Banner</strong></p>
            <p>Container ID: ${containerId}</p>
            <p><em>Banner aparecerá em produção</em></p>
          </div>
        `;
      }
    };

    // Aguardar um pouco antes de verificar
    const timer = setTimeout(checkAdsterraLoaded, 1000);

    return () => clearTimeout(timer);
  }, [containerId]);

  return (
    <div className={`adsterra-container ${className}`}>
      <div className="ad-label">Publicidade</div>
      <div 
        id={containerId}
        ref={bannerRef}
        className={`adsterra-banner ${style}`}
        style={{
          minHeight: '120px',
          display: 'block',
          margin: '1rem auto',
          textAlign: 'center'
        }}
      />
    </div>
  );
}

export default AdsterraBanner;
