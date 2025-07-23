import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Clubes from './pages/Clubes';
import Torneios from './pages/Torneios';
import Regras from './pages/Regras';
import Blog from './pages/Blog';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <Navbar />
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
