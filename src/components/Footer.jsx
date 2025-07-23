import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Gueitebal.com.br</p>
      <p>
        Desenvolvido por <a href="https://seulink.dev">SeuNome</a> | 
        <a href="mailto:contato@gueitebal.com.br">contato@gueitebal.com.br</a>
      </p>
    </footer>
  );
}

export default Footer;
