/**
 * @fileoverview Página sobre o Gueitebol
 * @description Informações detalhadas sobre o esporte e sua história
 */

import React from 'react';
import { useSEO, seoPages } from '../utils/seo';
import Footer from '../components/Footer';

/**
 * Página sobre o Gueitebol
 * @description Renderiza informações sobre o esporte, sua história e valores
 * @returns {JSX.Element} Página com informações sobre o Gueitebol
 */
function Sobre() {
  // Aplicar SEO específico da página
  useSEO(seoPages.sobre);

  return (
    <>
      <main className="sobre-container" role="main">
        <header>
          <h1>Sobre o Gueitebol (Gateball)</h1>
          <p className="page-subtitle">
            Descubra a história e os benefícios do esporte japonês que conquista corações no Brasil
          </p>
        </header>

        {/* Seção principal sobre o esporte */}
        <section className="sobre-content">
          {/* Descrição geral do esporte */}
          <div className="sobre-intro">
            <h2>O que é o Gueitebol?</h2>
            <p>
              O <strong>Gueitebol</strong> (também conhecido como <strong>Gateball</strong>) é um esporte coletivo japonês que combina 
              diversão, estratégia e acessibilidade, atraindo pessoas de todas as idades em um ambiente 
              inclusivo e intergeracional. Criado em 1947 no Japão por Eiji Suzuki, o esporte rapidamente 
              se espalhou pela Ásia e chegou ao Brasil através da comunidade japonesa.
            </p>
            <p>
              O objetivo principal é simples: impulsionar uma bola com um taco especial através
              de três portões dispostos estrategicamente em um campo retangular de 20m x 15m, 
              finalizando tocando um poste central. A facilidade das regras torna o jogo fácil 
              de aprender e agradável de praticar para iniciantes de qualquer idade.
            </p>
            <p>
              Mais do que uma competição, o <strong>Gueitebol</strong> estimula a colaboração e a comunicação entre
              os cinco jogadores de cada equipe, beneficiando a saúde física, mental e emocional de todos os
              participantes. É especialmente popular entre pessoas da terceira idade por ser um esporte 
              de baixo impacto que promove socialização e atividade física moderada.
            </p>
          </div>

          {/* Benefícios do esporte */}
          <div className="beneficios-section">
            <h2>Benefícios do Gueitebol</h2>
            <div className="beneficios-grid">
              <div className="beneficio-card">
                <h3>🏃‍♂️ Benefícios Físicos</h3>
                <ul>
                  <li>Melhora do equilíbrio e coordenação motora</li>
                  <li>Fortalecimento de músculos das pernas e core</li>
                  <li>Atividade de baixo impacto, ideal para todas as idades</li>
                  <li>Estímulo à mobilidade e flexibilidade</li>
                </ul>
              </div>
              
              <div className="beneficio-card">
                <h3>🧠 Benefícios Mentais</h3>
                <ul>
                  <li>Desenvolvimento de estratégia e raciocínio lógico</li>
                  <li>Melhora da concentração e foco</li>
                  <li>Estímulo à tomada de decisões rápidas</li>
                  <li>Prevenção do declínio cognitivo</li>
                </ul>
              </div>
              
              <div className="beneficio-card">
                <h3>👥 Benefícios Sociais</h3>
                <ul>
                  <li>Promoção da integração social e novas amizades</li>
                  <li>Desenvolvimento do trabalho em equipe</li>
                  <li>Redução do isolamento social</li>
                  <li>Convívio intergeracional saudável</li>
                </ul>
              </div>
            </div>
          </div>

          {/* História mundial */}
          <div className="sobre-historia-mundo">
            <h2>História do Gueitebol no Mundo</h2>
            <p>
              O <strong>Gueitebol</strong> foi criado em 1947, no Japão, por <strong>Eiji Suzuki</strong>, 
              em Asahikawa, Hokkaido. Após a Segunda Guerra Mundial, Suzuki buscava uma atividade 
              divertida e acessível para crianças em um país abalado pela derrota. Inspirado pelo 
              croquet, adaptou o esporte às limitações de espaço e equipamento do Japão da época.
            </p>
            <p>
              Inicialmente voltado ao público infantil, o <strong>Gateball</strong> ganhou popularidade entre
              idosos nos anos 1980, expandindo-se por todo o Japão e, posteriormente, para outros
              países asiáticos como China, Coreia do Sul e Taiwan. Suzuki faleceu em 1983, após 
              dedicar-se à unificação das regras que permitiu sua difusão internacional.
            </p>
            <p>
              Hoje, o esporte é praticado em mais de 20 países ao redor do mundo, com federações 
              nacionais organizando campeonatos regionais e mundiais. A <strong>World Gateball Union (WGU)</strong> 
              coordena as atividades globais e mantém as regras oficiais do esporte.
            </p>
          </div>

          {/* História no Brasil */}
          <div className="sobre-historia-brasil">
            <h2>Introdução do Gueitebol no Brasil</h2>
            <p>
              O esporte chegou ao Brasil graças a <strong>Matsumi Kuroki</strong>, que em 1978 visitou o Japão e
              conheceu o Gateball. Impressionado com os benefícios do esporte, ele decidiu introduzi-lo 
              nas atividades dos clubes nipo-brasileiros no país, trazendo consigo o regulamento 
              fornecido pela Associação de Gateball de Miyazaki.
            </p>
            <p>
              Em 1979, Kuroki encontrou uma indústria brasileira capaz de fabricar tacos e bolas,
              realizando o primeiro jogo oficial em equipe em <strong>17 de julho daquele ano</strong> - 
              data que marca o início oficial do Gueitebol no Brasil. Em 1981, com o interesse 
              crescente de Sadamu Dan e outros entusiastas, foi realizado o <strong>1º Torneio de 
              Gateball do Brasil</strong>, levando à criação da primeira Associação de Gateball do Brasil.
            </p>
            <p>
              Desde então, o esporte se expandiu por diversos estados brasileiros, com a criação 
              da <strong>UCGB (União dos Clubes de Gueitebol do Brasil)</strong> para coordenar 
              as atividades nacionais e promover o crescimento da modalidade.
            </p>
          </div>

          {/* Container de anúncio */}
          <div className="ad-container">
            <div className="ad-label">Publicidade</div>
            <ins className="adsbygoogle"
                 style={{display: 'block'}}
                 data-ad-client="ca-pub-4789090074866563"
                 data-ad-slot="2345678901"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
          </div>

          {/* Organização e valores */}
          <div className="sobre-organizacao">
            <h2>A UCGB - Nossa Organização</h2>
            <p>
              A <strong>União dos Clubes de Gueitebol do Brasil (UCGB)</strong> é a entidade nacional 
              responsável por coordenar, promover e desenvolver o Gueitebol em território brasileiro. 
              Fundada com o objetivo de unificar os clubes espalhados pelo país, a UCGB organiza 
              campeonatos nacionais, estabelece regulamentações, promove a inclusão social através 
              do esporte e trabalha para difundir os valores do Gueitebol.
            </p>
            <p>
              Nossa missão é tornar o Gueitebol acessível a todas as pessoas, independentemente da 
              idade, condição física ou localização geográfica, promovendo saúde, bem-estar e 
              integração social através desta modalidade esportiva única.
            </p>
          </div>

          <div className="sobre-valores">
            <h2>Valores e Princípios do Gueitebol</h2>
            <div className="valores-grid">
              <div className="valor-item">
                <h3>🎯 Estratégia</h3>
                <p>Desenvolvimento do pensamento tático, planejamento e análise de jogadas para 
                maximizar as chances de vitória da equipe.</p>
              </div>
              
              <div className="valor-item">
                <h3>🤝 Inclusão</h3>
                <p>Esporte verdadeiramente acessível para todas as idades, gêneros e níveis de 
                habilidade física, promovendo a diversidade.</p>
              </div>
              
              <div className="valor-item">
                <h3>👥 Colaboração</h3>
                <p>Trabalho em equipe essencial, onde comunicação, respeito mútuo e cooperação 
                são fundamentais para o sucesso.</p>
              </div>
              
              <div className="valor-item">
                <h3>💪 Saúde</h3>
                <p>Atividade física de baixo impacto que promove mobilidade, equilíbrio e 
                bem-estar físico e mental.</p>
              </div>
              
              <div className="valor-item">
                <h3>🌱 Sustentabilidade</h3>
                <p>Esporte economicamente acessível que requer equipamentos simples e espaços 
                adaptáveis, promovendo sustentabilidade.</p>
              </div>
              
              <div className="valor-item">
                <h3>🎌 Tradição</h3>
                <p>Preservação e honra à rica tradição japonesa do esporte, mantendo seus 
                valores culturais originais.</p>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="sobre-cta">
            <h2>Comece a Praticar Hoje!</h2>
            <p>
              Interessado em conhecer o Gueitebol? Encontre um clube próximo a você e 
              descubra todos os benefícios deste esporte incrível.
            </p>
            <div className="cta-buttons">
              <a href="/#/clubes" className="cta-btn">
                Encontrar Clubes
              </a>
              <a href="/#/regras" className="cta-btn cta-btn-secondary">
                Aprender Regras
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

export default Sobre;
