/**
 * @fileoverview Componente de banner de cookies
 * @description Banner de consentimento de cookies necessário para LGPD e GDPR
 */

import React, { useState, useEffect } from 'react';

/**
 * Componente de banner de cookies
 * @description Renderiza um banner de consentimento de cookies
 * @returns {JSX.Element} Banner de cookies
 */
function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    
    // Inicializar Google Analytics após consentimento
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    
    // Desabilitar Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-label="Consentimento de cookies">
      <div className="cookie-content">
        <div className="cookie-text">
          <h3>🍪 Uso de Cookies</h3>
          <p>
            Este site utiliza cookies para melhorar sua experiência de navegação, 
            analisar o tráfego e exibir anúncios personalizados. Ao continuar navegando, 
            você concorda com nossa{' '}
            <a href="/#/politica-privacidade" target="_blank" rel="noopener noreferrer">
              Política de Privacidade
            </a>.
          </p>
        </div>
        <div className="cookie-actions">
          <button 
            className="cookie-btn cookie-decline" 
            onClick={declineCookies}
            aria-label="Recusar cookies"
          >
            Recusar
          </button>
          <button 
            className="cookie-btn cookie-accept" 
            onClick={acceptCookies}
            aria-label="Aceitar cookies"
          >
            Aceitar
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          color: white;
          padding: 1rem;
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
          z-index: 10000;
          animation: slideUp 0.3s ease-out;
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .cookie-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        
        .cookie-text h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.1rem;
          font-weight: 600;
        }
        
        .cookie-text p {
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.4;
        }
        
        .cookie-text a {
          color: white;
          text-decoration: underline;
          font-weight: 500;
        }
        
        .cookie-actions {
          display: flex;
          gap: 0.75rem;
          flex-shrink: 0;
        }
        
        .cookie-btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }
        
        .cookie-accept {
          background: white;
          color: var(--primary-color);
        }
        
        .cookie-accept:hover {
          background: var(--light-gray);
          transform: translateY(-1px);
        }
        
        .cookie-decline {
          background: transparent;
          color: white;
          border: 2px solid white;
        }
        
        .cookie-decline:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        @media (max-width: 768px) {
          .cookie-content {
            flex-direction: column;
            text-align: center;
          }
          
          .cookie-actions {
            justify-content: center;
            width: 100%;
          }
          
          .cookie-btn {
            flex: 1;
            max-width: 150px;
          }
        }
      `}</style>
    </div>
  );
}

export default CookieBanner;
