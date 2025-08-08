/**
 * @fileoverview Página do blog com notícias e artigos
 * @description Lista artigos e notícias sobre Gueitebol
 */

import React from 'react';
import { BLOG_POSTS } from '../constants/blog';
import { useSEO, seoPages } from '../utils/seo';
import Footer from '../components/Footer';
import AdsterraBanner from '../components/AdsterraBanner';

/**
 * Página do blog
 * @description Renderiza a lista de artigos e notícias sobre Gueitebol
 * @returns {JSX.Element} Página do blog com lista de posts
 */
function Blog() {
  // Aplicar SEO específico da página
  useSEO(seoPages.blog);

  return (
    <>
      <main className="blog-container" role="main">
        <header className="page-header">
          <h1>Notícias e Artigos</h1>
          <p className="page-subtitle">
            Fique por dentro das novidades do mundo do Gueitebol no Brasil e no mundo
          </p>
        </header>
        
        {/* Container de anúncio */}
        <div className="ad-container">
          <div className="ad-label">Publicidade</div>
          <ins className="adsbygoogle"
               style={{display: 'block'}}
               data-ad-client="ca-pub-4789090074866563"
               data-ad-slot="3456789012"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
        
        {/* Lista de posts do blog */}
        <section aria-label="Lista de artigos do blog" className="blog-content">
          {BLOG_POSTS.length > 0 ? (
            <div className="blog-posts">
              {BLOG_POSTS.map((post) => (
                <article key={post.id} className="blog-post">
                  <header className="post-header">
                    <h2 className="post-title">{post.title}</h2>
                    <div className="post-meta">
                      <time className="post-date" dateTime={post.date}>
                        📅 {new Date(post.date).toLocaleDateString('pt-BR')}
                      </time>
                      <span className="post-category">
                        🏓 Gueitebol
                      </span>
                    </div>
                  </header>
                  
                  <div className="post-content">
                    <p className="post-summary">{post.summary}</p>
                  </div>
                  
                  <footer className="post-footer">
                    <a 
                      href={post.url} 
                      className="read-more-link"
                      aria-label={`Leia mais sobre: ${post.title}`}
                    >
                      Leia mais →
                    </a>
                  </footer>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>📰 Em breve, novos artigos!</h3>
              <p>
                Estamos preparando conteúdo exclusivo sobre técnicas, campeonatos,
                perfis de jogadores e tudo sobre o universo do Gueitebol no Brasil.
              </p>
              <p>
                Enquanto isso, conheça mais sobre o esporte na nossa seção 
                <a href="/#/sobre"> Sobre o Gueitebol</a>.
              </p>
            </div>
          )}
        </section>
        
        {/* Sidebar com informações adicionais */}
        <aside className="blog-sidebar">
          <div className="sidebar-card">
            <h3>📖 Sobre o Blog</h3>
            <p>
              Aqui você encontra artigos sobre técnicas, resultados de campeonatos,
              perfis de jogadores e tudo sobre o universo do Gueitebol no Brasil.
            </p>
          </div>
          
          <div className="sidebar-card">
            <h3>🔥 Tópicos Populares</h3>
            <ul className="topic-list">
              <li><a href="#estrategias">Estratégias de Jogo</a></li>
              <li><a href="#tecnicas">Técnicas Avançadas</a></li>
              <li><a href="#campeonatos">Campeonatos</a></li>
              <li><a href="#historia">História do Esporte</a></li>
              <li><a href="#equipamentos">Equipamentos</a></li>
            </ul>
          </div>
          
          <div className="sidebar-card">
            <h3>📬 Newsletter</h3>
            <p>Receba as últimas notícias do Gueitebol no seu e-mail.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="newsletter-input"
                aria-label="Digite seu e-mail para newsletter"
              />
              <button type="submit" className="newsletter-btn">
                Inscrever-se
              </button>
            </form>
          </div>
        </aside>
      </main>
      
      {/* Banner nativo Adsterra - posicionado após o conteúdo principal */}
      <AdsterraBanner 
        containerId="container-c94f18fb54ae25a924347ac35a5ef3b0-blog"
        className="adsterra-banner-2x1"
        style="native-banner"
      />
      
      <Footer />
    </>
  );
}

export default Blog;
