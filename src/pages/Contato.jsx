/**
 * @fileoverview Página de contato
 * @description Formulário e informações de contato com a organização
 */

import React from 'react';
import ContactForm from '../components/ContactForm';
import { useSEO, seoPages } from '../utils/seo';
import Footer from '../components/Footer';

/**
 * Página de contato
 * @description Renderiza formulário de contato e informações para comunicação
 * @returns {JSX.Element} Página de contato completa
 */
function Contato() {
  // Aplicar SEO específico da página
  useSEO(seoPages.contato);

  /**
   * Manipula o envio do formulário de contato
   * @param {Object} formData - Dados do formulário
   * @param {string} formData.nome - Nome do remetente
   * @param {string} formData.email - Email do remetente
   * @param {string} formData.mensagem - Mensagem enviada
   */
  const handleFormSubmit = async (formData) => {
    // Log dos dados para desenvolvimento - substituir por integração real
    console.log('Dados do formulário:', formData);
    
    // TODO: Integrar com EmailJS, Firebase, ou API de backend
    // Exemplo de implementação futura:
    // await emailService.send(formData);
    
    // Simula envio com delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Feedback para o usuário (implementar notificação real)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  return (
    <>
      <main className="contato-container" role="main">
        <header className="page-header">
          <h1>💬 Fale Conosco</h1>
          <p className="page-subtitle">
            Entre em contato com a UCGB para dúvidas, sugestões ou mais informações sobre o Gueitebol
          </p>
        </header>
        
        <div className="contato-content">
          {/* Seção do formulário */}
          <section className="contato-form-section" aria-label="Formulário de contato">
            <div className="form-card">
              <h2>📝 Envie sua mensagem</h2>
              <p>Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.</p>
              <ContactForm onSubmit={handleFormSubmit} />
            </div>
          </section>
          
          {/* Informações de contato alternativas */}
          <aside className="contato-info">
            <h2>📞 Outras formas de contato</h2>
            <div className="contato-cards">
              <div className="contato-card">
                <div className="contato-icon">📧</div>
                <h3>Email Direto</h3>
                <a href="mailto:contato@ydsoftware.com.br" className="contato-link">
                  contato@ydsoftware.com.br
                </a>
                <p>Resposta em até 24 horas</p>
              </div>
              
              <div className="contato-card">
                <div className="contato-icon">🕒</div>
                <h3>Horário de Atendimento</h3>
                <p><strong>Segunda a Sexta</strong><br />9h às 18h</p>
                <p><strong>Sábados</strong><br />9h às 12h</p>
              </div>
              
              <div className="contato-card">
                <div className="contato-icon">📍</div>
                <h3>Localização</h3>
                <p><strong>UCGB - Sede Nacional</strong><br />São Paulo - SP<br />Brasil</p>
              </div>
              
              <div className="contato-card">
                <div className="contato-icon">🏓</div>
                <h3>Informações Gerais</h3>
                <ul className="info-list">
                  <li>Cadastro de novos clubes</li>
                  <li>Inscrições em torneios</li>
                  <li>Dúvidas sobre regras</li>
                  <li>Parcerias e patrocínios</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
        
        {/* Container de anúncio */}
        <div className="ad-container">
          <div className="ad-label">Publicidade</div>
          <ins className="adsbygoogle"
               style={{display: 'block'}}
               data-ad-client="ca-pub-4789090074866563"
               data-ad-slot="4567890123"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
        
        {/* Seção de FAQ rápido */}
        <section className="contato-faq">
          <h2>❓ Perguntas Frequentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Como encontrar um clube próximo?</h3>
              <p>Acesse nossa <a href="/#/clubes">página de clubes</a> e use o filtro por região para encontrar clubes em sua cidade.</p>
            </div>
            
            <div className="faq-item">
              <h3>Como se inscrever em torneios?</h3>
              <p>Consulte nossa <a href="/#/torneios">agenda de torneios</a> e entre em contato conosco para informações sobre inscrições.</p>
            </div>
            
            <div className="faq-item">
              <h3>Posso fundar um novo clube?</h3>
              <p>Sim! Entre em contato conosco através do formulário acima e te ajudaremos com o processo de filiação à UCGB.</p>
            </div>
            
            <div className="faq-item">
              <h3>O Gueitebol é adequado para iniciantes?</h3>
              <p>Absolutamente! O Gueitebol é um esporte inclusivo, ideal para pessoas de todas as idades e níveis de experiência.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

export default Contato;
