/**
 * @fileoverview Página de agenda de torneios
 * @description Lista os torneios e eventos de Gueitebol programados
 */

import React, { useState } from 'react';
import { TORNEIOS_AGENDA } from '../constants/torneios';
import { useSEO, seoPages } from '../utils/seo';
import Footer from '../components/Footer';

/**
 * Página de torneios
 * @description Renderiza a agenda de torneios e eventos de Gueitebol
 * @returns {JSX.Element} Página com agenda de torneios
 */
function Torneios() {
  // Aplicar SEO específico da página
  useSEO(seoPages.torneios);
  
  const [filtroCategoria, setFiltroCategoria] = useState('todos');
  
  // Filtrar torneios por categoria
  const torneiosFiltrados = filtroCategoria === 'todos' 
    ? TORNEIOS_AGENDA 
    : TORNEIOS_AGENDA.filter(evento => evento.categoria?.toLowerCase() === filtroCategoria);

  return (
    <>
      <main className="torneios-container" role="main">
        <header className="page-header">
          <h1>🏆 Agenda de Torneios</h1>
          <p className="page-subtitle">
            Confira os próximos eventos e campeonatos de Gueitebol no Brasil
          </p>
        </header>
        
        {/* Filtros */}
        <section className="torneios-filters">
          <h2>Filtrar por categoria</h2>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filtroCategoria === 'todos' ? 'active' : ''}`}
              onClick={() => setFiltroCategoria('todos')}
            >
              Todos
            </button>
            <button 
              className={`filter-btn ${filtroCategoria === 'nacional' ? 'active' : ''}`}
              onClick={() => setFiltroCategoria('nacional')}
            >
              Nacionais
            </button>
            <button 
              className={`filter-btn ${filtroCategoria === 'regional' ? 'active' : ''}`}
              onClick={() => setFiltroCategoria('regional')}
            >
              Regionais
            </button>
            <button 
              className={`filter-btn ${filtroCategoria === 'estadual' ? 'active' : ''}`}
              onClick={() => setFiltroCategoria('estadual')}
            >
              Estaduais
            </button>
          </div>
        </section>
        
        {/* Lista de torneios */}
        <section aria-label="Lista de torneios programados" className="torneios-content">
          {torneiosFiltrados.length > 0 ? (
            <div className="torneios-grid">
              {torneiosFiltrados.map((evento, index) => (
                <article key={index} className="torneio-card">
                  <div className="torneio-header">
                    <h3 className="torneio-nome">{evento.nome}</h3>
                    <span className={`torneio-badge ${evento.categoria?.toLowerCase()}`}>
                      {evento.categoria}
                    </span>
                  </div>
                  
                  <div className="torneio-details">
                    <div className="torneio-info-item">
                      <span className="info-icon">📅</span>
                      <div>
                        <strong>Data:</strong>
                        <time className="torneio-data" dateTime={evento.data}>
                          {new Date(evento.data).toLocaleDateString('pt-BR', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                    </div>
                    
                    <div className="torneio-info-item">
                      <span className="info-icon">📍</span>
                      <div>
                        <strong>Local:</strong>
                        <span>{evento.local || 'A definir'}</span>
                      </div>
                    </div>
                    
                    <div className="torneio-info-item">
                      <span className="info-icon">👥</span>
                      <div>
                        <strong>Vagas:</strong>
                        <span>{evento.vagas || 'Limitadas'}</span>
                      </div>
                    </div>
                    
                    <div className="torneio-info-item">
                      <span className="info-icon">💰</span>
                      <div>
                        <strong>Taxa:</strong>
                        <span>{evento.taxa || 'Consultar organização'}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="torneio-footer">
                    <button className="torneio-btn-primary">
                      📋 Mais Informações
                    </button>
                    <button className="torneio-btn-secondary">
                      📞 Contato
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>🗓️ Nenhum torneio programado</h3>
              <p>
                {filtroCategoria === 'todos' 
                  ? 'Não há torneios programados no momento.'
                  : `Nenhum torneio da categoria "${filtroCategoria}" encontrado.`
                }
              </p>
              <p>
                Entre em contato conosco para sugerir novos eventos ou 
                <a href="/#/contato"> cadastrar seu torneio</a>.
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
               data-ad-slot="5678901234"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
        
        {/* Informação adicional */}
        <aside className="torneios-info">
          <div className="info-cards">
            <div className="info-card">
              <h3>🏃‍♂️ Como Participar</h3>
              <p>
                Para participar dos torneios, você deve estar filiado a um clube cadastrado na UCGB.
                Entre em contato com o clube mais próximo para informações sobre inscrições.
              </p>
              <a href="/#/clubes" className="info-link">Ver Clubes →</a>
            </div>
            
            <div className="info-card">
              <h3>📋 Regulamentos</h3>
              <p>
                Todos os torneios seguem as regras oficiais da UCGB baseadas no regulamento 
                internacional da World Gateball Union (WGU).
              </p>
              <a href="/#/regras" className="info-link">Ver Regras →</a>
            </div>
            
            <div className="info-card">
              <h3>🏆 Premiação</h3>
              <p>
                Os torneios oferecem premiação para os primeiros colocados, além de certificados
                de participação e pontuação no ranking nacional.
              </p>
            </div>
            
            <div className="info-card">
              <h3>📞 Organizar Evento</h3>
              <p>
                Quer organizar um torneio em sua região? Entre em contato conosco para
                orientações sobre regulamentação e apoio da UCGB.
              </p>
              <a href="/#/contato" className="info-link">Fale Conosco →</a>
            </div>
          </div>
        </aside>
      </main>
      
      <Footer />
    </>
  );
}

export default Torneios;
