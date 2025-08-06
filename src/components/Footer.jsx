/**
 * @fileoverview Componente de rodapé do site
 * @description Rodapé com informações de copyright e contato
 */

import React from 'react';

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
      {/* Copyright */}
      <p>&copy; {currentYear} Gueitebal.com.br</p>
      
      {/* Informações de desenvolvimento e contato */}
      <p>
        Desenvolvido por  |{' '}
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
    </footer>
  );
}

export default Footer;
