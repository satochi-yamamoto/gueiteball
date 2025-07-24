/**
 * @fileoverview Componente de formulário de contato
 * @description Formulário reutilizável para envio de mensagens de contato
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente de formulário de contato
 * @description Renderiza um formulário com campos para nome, email e mensagem
 * @param {Object} props - Propriedades do componente
 * @param {Function} props.onSubmit - Função chamada ao submeter o formulário
 * @returns {JSX.Element} Formulário de contato
 */
function ContactForm({ onSubmit = null }) {
  // Estado do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  // Estado de carregamento
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Manipula a submissão do formulário
   * @param {Event} event - Evento de submissão
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Chama a função de submissão passada como prop
      if (onSubmit) {
        await onSubmit(formData);
      }
      
      // Limpa o formulário após sucesso
      setFormData({ nome: '', email: '', mensagem: '' });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Atualiza o estado do formulário
   * @param {string} field - Campo a ser atualizado
   * @param {string} value - Novo valor do campo
   */
  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {/* Campo Nome */}
      <div className="form-group">
        <label htmlFor="nome">Nome completo</label>
        <input
          id="nome"
          type="text"
          placeholder="Seu nome completo"
          value={formData.nome}
          onChange={(e) => updateField('nome', e.target.value)}
          required
          aria-describedby="nome-help"
        />
        <small id="nome-help">Digite seu nome completo</small>
      </div>

      {/* Campo Email */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          required
          aria-describedby="email-help"
        />
        <small id="email-help">Digite um email válido para resposta</small>
      </div>

      {/* Campo Mensagem */}
      <div className="form-group">
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          placeholder="Digite sua mensagem..."
          value={formData.mensagem}
          onChange={(e) => updateField('mensagem', e.target.value)}
          required
          rows="5"
          aria-describedby="mensagem-help"
        />
        <small id="mensagem-help">Descreva sua dúvida ou comentário</small>
      </div>

      {/* Botão de envio */}
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="submit-button"
        aria-label="Enviar formulário de contato"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
    </form>
  );
}

// Definição dos tipos das propriedades
ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;