/**
 * @fileoverview Página sobre o Gueitebol
 * @description Informações detalhadas sobre o esporte e sua história
 */

import React from 'react';

/**
 * Página sobre o Gueitebol
 * @description Renderiza informações sobre o esporte, sua história e valores
 * @returns {JSX.Element} Página com informações sobre o Gueitebol
 */
function Sobre() {
  return (
    <main className="sobre-container" role="main">
      <header>
        <h1>Sobre o Gueitebol</h1>
      </header>

      {/* Seção principal sobre o esporte */}
      <section className="sobre-content">
        {/* Descrição geral do esporte */}
        <div className="sobre-intro">
          <h2>O que é o Gateball?</h2>
          <p>
            O Gateball é um esporte coletivo que combina diversão, estratégia e acessibilidade,
            atraindo pessoas de todas as idades em um ambiente inclusivo e intergeracional.
          </p>
          <p>
            O objetivo principal é simples: impulsionar uma bola com um taco especial através
            de portões dispostos estrategicamente em um campo retangular. A facilidade das
            regras torna o jogo fácil de aprender e agradável de praticar.
          </p>
          <p>
            Mais do que uma competição, o Gateball estimula a colaboração e a comunicação entre
            os jogadores, beneficiando a saúde física, mental e emocional de todos os
            participantes.
          </p>
          <p>
            Com sua expansão global, comunidades de todo o mundo oferecem aulas e competições,
            consolidando o esporte como ferramenta de inclusão social e convívio saudável.
          </p>
          <p>
            Portanto, o Gateball vai além da disputa esportiva; ele celebra a convivência e a
            integração social.
          </p>
        </div>

        {/* História mundial */}
        <div className="sobre-historia-mundo">
          <h2>História do Gueitebol</h2>
          <p>
            O Gateball foi criado em 1947, no Japão, por Eiji Suzuki, em Asahikawa, Hokkaido.
            Após a Segunda Guerra Mundial, Suzuki buscava uma atividade divertida e acessível
            para crianças em um país abalado pela derrota. Inspirado pelo croquet, adaptou o
            esporte às limitações de espaço e equipamento do Japão da época.
          </p>
          <p>
            Inicialmente voltado ao público infantil, o Gateball ganhou popularidade entre
            idosos nos anos 1980, expandindo-se por todo o Japão e, posteriormente, para outros
            países como China e Brasil. Suzuki faleceu em 1983, após dedicar-se à unificação das
            regras que permitiu sua difusão internacional.
          </p>
        </div>

        {/* História no Brasil */}
        <div className="sobre-historia-brasil">
          <h2>Introdução do Gueitebol no Brasil</h2>
          <p>
            O esporte chegou ao Brasil graças a Matsumi Kuroki, que em 1978 visitou o Japão e
            conheceu o Gateball. Ele decidiu introduzi-lo nas atividades do Clube dos Anciões no
            país, trazendo consigo apenas o regulamento fornecido pela Associação de Gateball de
            Miyazaki.
          </p>
          <p>
            Em 1979, Kuroki encontrou uma indústria brasileira capaz de fabricar tacos e bolas,
            realizando o primeiro jogo em equipe em 17 de julho daquele ano. Em 1981, o
            interesse de Sadamu Dan impulsionou a realização do 1º Torneio de Gateball do
            Brasil, o que levou à criação da Associação de Gateball do Brasil.
          </p>
        </div>

        {/* Organização e valores */}
        <div className="sobre-organizacao">
          <h2>Nossa Organização</h2>
          <p>
            A União dos Clubes de Gueitebol do Brasil coordena campeonatos, promove inclusão e
            difunde os valores do esporte em todo o território nacional.
          </p>
        </div>

        <div className="sobre-valores">
          <h2>Valores do Gueitebol</h2>
          <ul>
            <li>
              <strong>Estratégia:</strong> Desenvolvimento do pensamento tático e planejamento
            </li>
            <li>
              <strong>Inclusão:</strong> Esporte acessível para todas as idades e habilidades
            </li>
            <li>
              <strong>Colaboração:</strong> Trabalho em equipe e respeito mútuo
            </li>
            <li>
              <strong>Saúde:</strong> Atividade física adaptada e benéfica
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Sobre;
