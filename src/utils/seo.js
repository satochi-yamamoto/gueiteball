/**
 * @fileoverview Componente para gerenciamento dinâmico de SEO
 * @description Hook e componente para atualizar meta tags dinamicamente
 */

import { useEffect } from 'react';

/**
 * Hook para atualizar dinamicamente as meta tags da página
 * @param {Object} seoData - Dados de SEO da página
 * @param {string} seoData.title - Título da página
 * @param {string} seoData.description - Descrição da página
 * @param {string} seoData.keywords - Palavras-chave da página
 * @param {string} seoData.canonical - URL canônica da página
 */
export const useSEO = (seoData) => {
  useEffect(() => {
    // Atualizar título
    if (seoData.title) {
      document.title = `${seoData.title} | Gueitebol Brasil - UCGB`;
    }

    // Atualizar descrição
    if (seoData.description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', seoData.description);
      }
    }

    // Atualizar keywords
    if (seoData.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', seoData.keywords);
      }
    }

    // Atualizar URL canônica
    if (seoData.canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (linkCanonical) {
        linkCanonical.setAttribute('href', seoData.canonical);
      }
    }

    // Atualizar Open Graph
    if (seoData.title) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', `${seoData.title} | Gueitebol Brasil - UCGB`);
      }
    }

    if (seoData.description) {
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', seoData.description);
      }
    }

    if (seoData.canonical) {
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', seoData.canonical);
      }
    }

    // Trackear página no Google Analytics
    if (window.gtag && seoData.canonical) {
      window.gtag('config', 'G-6GQ0P9SHEW', {
        page_title: seoData.title,
        page_location: seoData.canonical
      });
    }
  }, [seoData]);
};

/**
 * Dados de SEO para cada página
 */
export const seoPages = {
  home: {
    title: 'Início',
    description: 'Site oficial da União dos Clubes de Gueitebol do Brasil (UCGB). Descubra tudo sobre gateball, encontre clubes, torneios e aprenda as regras deste esporte japonês estratégico.',
    keywords: 'gueitebal, gateball, UCGB, união de clubes gateball do brasil, esporte japonês, terceira idade, esporte estratégico, torneios, clubes brasil',
    canonical: 'https://gueitebal.com.br/'
  },
  sobre: {
    title: 'Sobre o Gueitebol',
    description: 'Conheça a história do Gueitebol (Gateball), esporte japonês estratégico que promove saúde, socialização e inclusão. Descubra como surgiu e chegou ao Brasil.',
    keywords: 'gueitebal história, gateball origem, esporte japonês história, UCGB sobre, gateball brasil história',
    canonical: 'https://gueitebal.com.br/#/sobre'
  },
  clubes: {
    title: 'Clubes de Gueitebol',
    description: 'Encontre clubes de Gueitebol próximos a você. Lista completa de clubes filiados à UCGB em todo o Brasil. Comece a praticar hoje mesmo!',
    keywords: 'clubes gueitebal, clubes gateball brasil, onde praticar gueitebal, UCGB clubes, gateball perto de mim',
    canonical: 'https://gueitebal.com.br/#/clubes'
  },
  torneios: {
    title: 'Torneios e Competições',
    description: 'Agenda completa de torneios e competições de Gueitebol no Brasil. Campeonatos regionais, nacionais e eventos da UCGB.',
    keywords: 'torneios gueitebal, competições gateball, campeonato gueitebal brasil, eventos UCGB, torneios gateball 2025',
    canonical: 'https://gueitebal.com.br/#/torneios'
  },
  regras: {
    title: 'Regras do Gueitebol',
    description: 'Aprenda as regras oficiais do Gueitebol (Gateball). Guia completo com regulamentação, como jogar e estratégias básicas.',
    keywords: 'regras gueitebal, como jogar gateball, regulamento gueitebal, regras oficiais gateball, UCGB regras',
    canonical: 'https://gueitebal.com.br/#/regras'
  },
  blog: {
    title: 'Blog e Notícias',
    description: 'Últimas notícias, artigos e novidades sobre o Gueitebol no Brasil. Dicas, estratégias e informações da comunidade UCGB.',
    keywords: 'notícias gueitebal, blog gateball, novidades UCGB, artigos gueitebal, dicas gateball',
    canonical: 'https://gueitebal.com.br/#/blog'
  },
  contato: {
    title: 'Contato',
    description: 'Entre em contato com a UCGB - União dos Clubes de Gueitebol do Brasil. Tire suas dúvidas sobre o esporte e nossa organização.',
    keywords: 'contato UCGB, falar com gueitebal brasil, contato gateball, UCGB telefone email',
    canonical: 'https://gueitebal.com.br/#/contato'
  },
  politicaPrivacidade: {
    title: 'Política de Privacidade',
    description: 'Política de Privacidade do site Gueitebal.com.br. Como coletamos, usamos e protegemos suas informações pessoais.',
    keywords: 'política privacidade UCGB, LGPD gueitebal, privacidade dados gateball',
    canonical: 'https://gueitebal.com.br/#/politica-privacidade'
  },
  termosUso: {
    title: 'Termos de Uso',
    description: 'Termos de Uso do site Gueitebal.com.br. Condições de uso do site oficial da UCGB.',
    keywords: 'termos uso UCGB, condições uso gueitebal, termos site gateball',
    canonical: 'https://gueitebal.com.br/#/termos-uso'
  }
};

export default useSEO;
