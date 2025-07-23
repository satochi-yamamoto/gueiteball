/**
 * @fileoverview Componente principal da aplicação Gueitebal
 * @description Este arquivo contém o componente App que gerencia o roteamento
 * da aplicação e renderiza a estrutura básica do site
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes
import Navbar from '../components/Navbar';

// Páginas
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Clubes from '../pages/Clubes';
import Torneios from '../pages/Torneios';
import Regras from '../pages/Regras';
import Blog from '../pages/Blog';
import Contato from '../pages/Contato';

/**
 * Componente principal da aplicação
 * @description Gerencia o roteamento da aplicação e renderiza a estrutura básica
 * @returns {JSX.Element} Estrutura principal da aplicação com roteamento
 */
function App() {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;
