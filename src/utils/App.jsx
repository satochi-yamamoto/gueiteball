/**
 * @fileoverview Componente principal da aplicação Gueitebal
 * @description Este arquivo contém o componente App que gerencia o roteamento
 * da aplicação e renderiza a estrutura básica do site
 */

import React, { useEffect } from 'react';
// HashRouter é usado para evitar erros 404 em hospedagens estáticas como a Vercel
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Componentes
import Navbar from '../components/Navbar';
import CookieBanner from '../components/CookieBanner';

// Páginas
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Clubes from '../pages/Clubes';
import Torneios from '../pages/Torneios';
import Regras from '../pages/Regras';
import Blog from '../pages/Blog';
import Contato from '../pages/Contato';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfUse from '../pages/TermsOfUse';

/**
 * Componente para rastreamento do Google Analytics
 */
function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Rastrear mudanças de página no Google Analytics
    if (window.gtag) {
      window.gtag('config', 'G-6GQ0P9SHEW', {
        page_path: location.pathname + location.search + location.hash,
      });
    }
  }, [location]);

  return null;
}

/**
 * Componente principal da aplicação
 * @description Gerencia o roteamento da aplicação e renderiza a estrutura básica
 * @returns {JSX.Element} Estrutura principal da aplicação com roteamento
 */
function App() {
  useEffect(() => {
    // Inicializar AdSense
    if (window.adsbygoogle && window.adsbygoogle.loaded !== true) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('Erro ao carregar AdSense:', e);
      }
    }
  }, []);

  return (
    <Router>
      <GoogleAnalytics />
      
      {/* Navegação principal - sempre visível */}
      <Navbar />
      
      {/* Definição das rotas da aplicação */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/clubes" element={<Clubes />} />
        <Route path="/torneios" element={<Torneios />} />
        <Route path="/regras" element={<Regras />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-uso" element={<TermsOfUse />} />
      </Routes>
      
      {/* Banner de cookies */}
      <CookieBanner />
    </Router>
  );
}

export default App;
