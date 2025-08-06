/**
 * @fileoverview Página de clubes cadastrados
 * @description Lista os clubes de Gueitebol cadastrados no sistema
 */

import React, { useState } from 'react';
import { CLUBES_CADASTRADOS } from '../constants/clubes';
import { useSEO, seoPages } from '../utils/seo';
import Footer from '../components/Footer';

/**
 * Página de clubes
 * @description Renderiza a lista de clubes cadastrados no sistema
 * @returns {JSX.Element} Página com lista de clubes
 */
function Clubes() {
  // Aplicar SEO específico da página
  useSEO(seoPages.clubes);
  
  const [filtroEstado, setFiltroEstado] = useState('todos');
  
  // Obter lista única de estados
  const estados = [...new Set(CLUBES_CADASTRADOS.map(clube => clube.estado))].sort();
  
  // Filtrar clubes por estado
  const clubesFiltrados = filtroEstado === 'todos' 
    ? CLUBES_CADASTRADOS 
    : CLUBES_CADASTRADOS.filter(clube => clube.estado === filtroEstado);

  return (
    <>
      <main className="clubes-container" role="main">
        <header className="page-header">
          <h1>🏢 Clubes Cadastrados</h1>
          <p className="page-subtitle">
            Encontre um clube de Gueitebol perto de você e faça parte da nossa comunidade
          </p>
        </header>
        
        {/* Filtros */}
        <section className="clubes-filters">
          <h2>Filtrar por estado</h2>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filtroEstado === 'todos' ? 'active' : ''}`}
              onClick={() => setFiltroEstado('todos')}
            >
              Todos os Estados
            </button>
            {estados.map(estado => (
              <button 
                key={estado}
                className={`filter-btn ${filtroEstado === estado ? 'active' : ''}`}
                onClick={() => setFiltroEstado(estado)}
              >
                {estado}
              </button>
            ))}
          </div>
        </section>
        
        {/* Lista de clubes */}
        <section aria-label="Lista de clubes cadastrados" className="clubes-content">
          {clubesFiltrados.length > 0 ? (
            <div className="clubes-grid">
              {clubesFiltrados.map((clube, index) => (
                <article key={index} className="clube-card">
                  <div className="clube-header">
                    <h3 className="clube-nome">{clube.nome}</h3>
                    <span className="clube-badge">{clube.estado}</span>
                  </div>
                  
                  <div className="clube-details">
                    <div className="clube-info-item">
                      <span className="info-icon">📍</span>
                      <div>
                        <strong>Localização:</strong>
                        <span>{clube.cidade}/{clube.estado}</span>
                      </div>
                    </div>
                    
                    {clube.endereco && (
                      <div className="clube-info-item">
                        <span className="info-icon">🏠</span>
                        <div>
                          <strong>Endereço:</strong>
                          <span>{clube.endereco}</span>
                        </div>
                      </div>
                    )}
                    
                    {clube.telefone && (
                      <div className="clube-info-item">
                        <span className="info-icon">📞</span>
                        <div>
                          <strong>Telefone:</strong>
                          <a href={`tel:${clube.telefone}`}>{clube.telefone}</a>
                        </div>
                      </div>
                    )}
                    
                    {clube.email && (
                      <div className="clube-info-item">
                        <span className="info-icon">📧</span>
                        <div>
                          <strong>E-mail:</strong>
                          <a href={`mailto:${clube.email}`}>{clube.email}</a>
                        </div>
                      </div>
                    )}
                    
                    {clube.fundacao && (
                      <div className="clube-info-item">
                        <span className="info-icon">📅</span>
                        <div>
                          <strong>Fundação:</strong>
                          <span>{clube.fundacao}</span>
                        </div>
                      </div>
                    )}
                    
                    {clube.membros && (
                      <div className="clube-info-item">
                        <span className="info-icon">👥</span>
                        <div>
                          <strong>Membros:</strong>
                          <span>{clube.membros} praticantes</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="clube-footer">
                    <button className="clube-btn-primary">
                      📞 Entrar em Contato
                    </button>
                    <button className="clube-btn-secondary">
                      📍 Ver Localização
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>🏢 Nenhum clube encontrado</h3>
              <p>
                {filtroEstado === 'todos' 
                  ? 'Ainda não há clubes cadastrados.'
                  : `Nenhum clube encontrado no estado de ${filtroEstado}.`
                }
              </p>
              <p>
                <a href="/#/contato">Entre em contato conosco</a> para cadastrar seu clube
                ou sugerir novos clubes em sua região.
              </p>
            </div>
          )}
        </section>
        
        {/* Container de anúncio */}
        <div className="ad-container">
          <div className="ad-label">Publicidade</div>
          <ins className="adsbygoogle"
               style={{display: 'block'}}
               data-ad-client="ca-pub-4789090074866563"
               data-ad-slot="6789012345"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
        
        {/* Informação adicional */}
        <aside className="clubes-info">
          <div className="info-cards">
            <div className="info-card">
              <h3>🎯 Como se Filiar</h3>
              <p>
                Para se filiar a um clube, entre em contato direto com a organização.
                A filiação permite participar de treinos, torneios e eventos oficiais.
              </p>
            </div>
            
            <div className="info-card">
              <h3>🏆 Benefícios</h3>
              <p>
                Filiados têm acesso a treinos regulares, equipamentos, participação em
                campeonatos e contato com outros praticantes da modalidade.
              </p>
            </div>
            
            <div className="info-card">
              <h3>📋 Cadastrar Clube</h3>
              <p>
                Quer cadastrar seu clube na UCGB? Entre em contato conosco para 
                informações sobre requisitos e documentação necessária.
              </p>
              <a href="/#/contato" className="info-link">Cadastrar Clube →</a>
            </div>
            
            <div className="info-card">
              <h3>🌍 Expandir Rede</h3>
              <p>
                Ajude a expandir o Gueitebol no Brasil! Compartilhe informações sobre
                a modalidade e ajude a formar novos grupos em sua região.
              </p>
              <a href="/#/sobre" className="info-link">Saiba Mais →</a>
            </div>
          </div>
        </aside>
        
        {/* Seção de estatísticas */}
        <section className="clubes-stats">
          <h2>📊 Estatísticas da Rede</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">{CLUBES_CADASTRADOS.length}</span>
              <span className="stat-label">Clubes Cadastrados</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{estados.length}</span>
              <span className="stat-label">Estados Representados</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {CLUBES_CADASTRADOS.reduce((total, clube) => total + (clube.membros || 0), 0)}
              </span>
              <span className="stat-label">Praticantes Ativos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {new Date().getFullYear() - Math.min(...CLUBES_CADASTRADOS.map(c => 
                  c.fundacao ? new Date(c.fundacao).getFullYear() : new Date().getFullYear()
                ))}
              </span>
              <span className="stat-label">Anos de História</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

export default Clubes;
