/**
 * @fileoverview Página do blog com notícias e artigos
 * @description Lista artigos e notícias sobre Gueitebol
 */

import React from 'react';
import { BLOG_POSTS } from '../constants/blog';

/**
 * Página do blog
 * @description Renderiza a lista de artigos e notícias sobre Gueitebol
 * @returns {JSX.Element} Página do blog com lista de posts
 */
function Blog() {
  return (
    <main className="blog-container" role="main">
      <header>
        <h1>Notícias e Artigos</h1>
        <p>Fique por dentro das novidades do mundo do Gueitebol</p>
      </header>
      
      {/* Lista de posts do blog */}
      <section aria-label="Lista de artigos do blog">
        {BLOG_POSTS.length > 0 ? (
          <div className="blog-posts">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="blog-post">
                <header>
                  <h2 className="post-title">{post.title}</h2>
                  <time className="post-date" dateTime={post.date}>
                    {post.date}
                  </time>
                </header>
                
                <div className="post-content">
                  <p className="post-summary">{post.summary}</p>
                </div>
                
                <footer>
                  <a 
                    href={post.url} 
                    className="read-more-link"
                    aria-label={`Leia mais sobre: ${post.title}`}
                  >
                    Leia mais
                  </a>
                </footer>
              </article>
            ))}
          </div>
        ) : (
          <p>Nenhum artigo disponível no momento.</p>
        )}
      </section>
      
      {/* Sidebar com informações adicionais */}
      <aside className="blog-sidebar">
        <h2>Sobre o Blog</h2>
        <p>
          Aqui você encontra artigos sobre técnicas, resultados de campeonatos,
          perfis de jogadores e tudo sobre o universo do Gueitebol no Brasil.
        </p>
      </aside>
    </main>
  );
}

export default Blog;
