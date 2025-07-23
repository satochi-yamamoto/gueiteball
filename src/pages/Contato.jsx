/**
 * @fileoverview Página de contato
 * @description Formulário e informações de contato com a organização
 */

import React from 'react';
import ContactForm from '../components/ContactForm';

/**
 * Página de contato
 * @description Renderiza formulário de contato e informações para comunicação
 * @returns {JSX.Element} Página de contato completa
 */
function Contato() {
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
    <main className="contato-container" role="main">
      <header>
        <h1>Fale com a gente</h1>
        <p>Entre em contato conosco para dúvidas, sugestões ou mais informações</p>
      </header>
      
      {/* Seção do formulário */}
      <section className="contato-form-section" aria-label="Formulário de contato">
        <h2>Envie sua mensagem</h2>
        <ContactForm onSubmit={handleFormSubmit} />
      </section>
      
      {/* Informações de contato alternativas */}
      <aside className="contato-info">
        <h2>Outras formas de contato</h2>
        <div className="contato-detalhes">
          <div className="contato-item">
            <h3>Email direto</h3>
            <a href="mailto:contato@gueitebal.com.br">
              contato@gueitebal.com.br
            </a>
          </div>
          
          <div className="contato-item">
            <h3>Horário de atendimento</h3>
            <p>Segunda a sexta, das 9h às 18h</p>
          </div>
          
          <div className="contato-item">
            <h3>Localização</h3>
            <p>São Paulo - SP, Brasil</p>
          </div>
        </div>
      </aside>
    </main>
  );
}

export default Contato;
