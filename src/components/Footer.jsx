/**
 * @fileoverview Componente de rodapé do site
 * @description Rodapé com informações de copyright, contato e links para políticas
 */

import React from 'react';
import { Link } from 'react-router-dom';
import LogoSimple from './LogoSimple';

/**
 * Componente de rodapé
 * @description Renderiza o rodapé com informações de copyright e links de contato
 * @returns {JSX.Element} Rodapé do site
 */
function Footer() {
  // Ano atual para o copyright
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" role="contentinfo">
      {/* Logo no footer */}
      <div className="footer-logo">
        <LogoSimple size={35} />
      </div>
      
      {/* Copyright */}
      <p>&copy; {currentYear} Gueitebal.com.br</p>
      
      {/* Informações de desenvolvimento e contato */}
      <p>
        Desenvolvido por{' '}
        <a 
          href="https://ydsoftware.com.br" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Link para o desenvolvedor"
        >
          YD Software
        </a>{' '}
        |{' '}
        <a 
          href="mailto:contato@ydsoftware.com.br"
          aria-label="Enviar email para contato"
        >
          contato@ydsoftware.com.br
        </a>
      </p>
      
      {/* Links para políticas */}
      <div className="footer-policies">
        <Link to="/politica-privacidade" aria-label="Política de Privacidade">
          Política de Privacidade
        </Link>
        {' | '}
        <Link to="/termos-uso" aria-label="Termos de Uso">
          Termos de Uso
        </Link>
        {' | '}
        <a 
          href="https://policies.google.com/privacy" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Política de Privacidade do Google"
        >
          Privacidade Google
        </a>
      </div>
      
      {/* SEO keywords ocultos */}
      <div style={{display: 'none'}} aria-hidden="true">
        gueitebal, gateball, UCGB, união de clubes gateball do brasil, esporte japonês, 
        terceira idade, esporte estratégico, torneios gateball, clubes brasil gateball
      </div>
    </footer>
  );
}

export default Footer;
