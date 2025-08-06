/**
 * @fileoverview Componente de busca para o site
 * @description Componente de busca com funcionalidade de filtro para clubes, torneios e conteúdo
 */

import React, { useState } from 'react';

/**
 * Componente de busca
 * @description Renderiza uma barra de busca com funcionalidade de filtro
 * @returns {JSX.Element} Componente de busca
 */
function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Dados mockados para demonstração (em produção viria de uma API)
  const searchData = [
    { 
      type: 'clube', 
      title: 'Clube de Gueitebol São Paulo', 
      content: 'Clube localizado em São Paulo, SP. Treinos todas as terças e quintas.',
      url: '/clubes'
    },
    { 
      type: 'torneio', 
      title: 'Campeonato Brasileiro de Gueitebol 2025', 
      content: 'Maior torneio nacional de gueitebol do país.',
      url: '/torneios'
    },
    { 
      type: 'regra', 
      title: 'Regras Básicas do Gueitebol', 
      content: 'Aprenda as regras fundamentais do gueitebol.',
      url: '/regras'
    },
    { 
      type: 'conteudo', 
      title: 'História do Gueitebol no Brasil', 
      content: 'Como o gueitebol chegou ao Brasil e se desenvolveu.',
      url: '/sobre'
    }
  ];

  const handleSearch = (value) => {
    setSearchTerm(value);
    
    if (value.length > 2) {
      setIsSearching(true);
      
      // Simular delay de busca
      setTimeout(() => {
        const results = searchData.filter(item =>
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.content.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(results);
        setIsSearching(false);
      }, 300);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  };

  const handleResultClick = (url) => {
    // Em uma aplicação real, usaria react-router para navegação
    window.location.href = url;
  };

  return (
    <section className="search-container" aria-label="Busca no site">
      <div className="search-box">
        <div className="search-icon">🔍</div>
        <input
          type="text"
          className="search-input"
          placeholder="Busque por clubes, torneios, regras..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          aria-label="Campo de busca"
        />
      </div>
      
      {/* Resultados da busca */}
      {searchTerm.length > 2 && (
        <div className="search-results">
          {isSearching ? (
            <div className="search-loading">Buscando...</div>
          ) : searchResults.length > 0 ? (
            <div className="results-list">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="result-item"
                  onClick={() => handleResultClick(result.url)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="result-type">{result.type}</div>
                  <h4 className="result-title">{result.title}</h4>
                  <p className="result-content">{result.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              Nenhum resultado encontrado para "{searchTerm}"
            </div>
          )}
        </div>
      )}
      
      <style jsx>{`
        .search-results {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          box-shadow: var(--shadow);
          z-index: 1000;
          max-height: 400px;
          overflow-y: auto;
        }
        
        .search-loading,
        .no-results {
          padding: 1rem;
          text-align: center;
          color: var(--text-secondary);
        }
        
        .results-list {
          padding: 0.5rem 0;
        }
        
        .result-item {
          padding: 1rem;
          border-bottom: 1px solid var(--border-color);
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        
        .result-item:hover {
          background-color: var(--light-green);
        }
        
        .result-item:last-child {
          border-bottom: none;
        }
        
        .result-type {
          display: inline-block;
          background: var(--accent-color);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        
        .result-title {
          color: var(--primary-color);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        
        .result-content {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
}

export default SearchComponent;
