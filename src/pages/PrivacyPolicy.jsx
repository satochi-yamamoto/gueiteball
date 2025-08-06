/**
 * @fileoverview Página de Política de Privacidade
 * @description Política de privacidade necessária para compliance com AdSense e LGPD
 */

import React from 'react';
import Footer from '../components/Footer';

/**
 * Página de Política de Privacidade
 * @description Renderiza a política de privacidade do site
 * @returns {JSX.Element} Página de política de privacidade
 */
function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <div className="policy-content">
        <h1>Política de Privacidade</h1>
        <p><strong>Última atualização:</strong> Agosto de 2025</p>
        
        <section>
          <h2>1. Informações Coletadas</h2>
          <p>
            O site Gueitebal.com.br, operado pela União dos Clubes de Gueitebol do Brasil (UCGB), 
            coleta informações de diferentes formas:
          </p>
          <ul>
            <li><strong>Informações fornecidas voluntariamente:</strong> Nome, e-mail, telefone ao entrar em contato conosco</li>
            <li><strong>Informações coletadas automaticamente:</strong> Dados de navegação, cookies, endereço IP</li>
            <li><strong>Google Analytics:</strong> Dados de uso do site para análise de tráfego</li>
            <li><strong>Google AdSense:</strong> Cookies para personalização de anúncios</li>
          </ul>
        </section>

        <section>
          <h2>2. Como Utilizamos as Informações</h2>
          <p>As informações coletadas são utilizadas para:</p>
          <ul>
            <li>Melhorar a experiência do usuário no site</li>
            <li>Responder a dúvidas e solicitações</li>
            <li>Enviar informações sobre eventos e torneios de gueitebol</li>
            <li>Análise estatística do uso do site</li>
            <li>Exibição de anúncios relevantes através do Google AdSense</li>
          </ul>
        </section>

        <section>
          <h2>3. Cookies e Tecnologias Similares</h2>
          <p>
            Este site utiliza cookies para melhorar sua experiência de navegação. Os tipos de cookies utilizados incluem:
          </p>
          <ul>
            <li><strong>Cookies essenciais:</strong> Necessários para o funcionamento básico do site</li>
            <li><strong>Cookies de análise:</strong> Google Analytics para entender como os usuários interagem com o site</li>
            <li><strong>Cookies de publicidade:</strong> Google AdSense para exibir anúncios personalizados</li>
          </ul>
          <p>
            Você pode controlar e/ou deletar cookies conforme desejar através das configurações do seu navegador.
          </p>
        </section>

        <section>
          <h2>4. Google AdSense</h2>
          <p>
            Este site utiliza Google AdSense para exibir anúncios. O Google pode usar cookies para exibir 
            anúncios baseados nas suas visitas anteriores a este site e outros sites. Você pode desativar 
            os cookies de publicidade visitando as configurações de anúncios do Google.
          </p>
        </section>

        <section>
          <h2>5. Compartilhamento de Informações</h2>
          <p>
            Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros, exceto:
          </p>
          <ul>
            <li>Para prestadores de serviços confiáveis (Google Analytics, Google AdSense)</li>
            <li>Quando exigido por lei</li>
            <li>Para proteger nossos direitos, propriedade ou segurança</li>
          </ul>
        </section>

        <section>
          <h2>6. Seus Direitos (LGPD)</h2>
          <p>Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
          <ul>
            <li>Confirmar a existência de tratamento de dados</li>
            <li>Acessar seus dados pessoais</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
            <li>Anonimizar, bloquear ou eliminar dados desnecessários</li>
            <li>Revogar o consentimento</li>
          </ul>
        </section>

        <section>
          <h2>7. Segurança</h2>
          <p>
            Implementamos medidas de segurança apropriadas para proteger suas informações contra 
            acesso não autorizado, alteração, divulgação ou destruição.
          </p>
        </section>

        <section>
          <h2>8. Alterações na Política</h2>
          <p>
            Esta política pode ser atualizada periodicamente. Recomendamos revisar esta página 
            regularmente para estar ciente de quaisquer alterações.
          </p>
        </section>

        <section>
          <h2>9. Contato</h2>
          <p>
            Para questões sobre esta política de privacidade, entre em contato:
          </p>
          <ul>
            <li><strong>E-mail:</strong> contato@ydsoftware.com.br</li>
            <li><strong>Site:</strong> gueitebal.com.br</li>
          </ul>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
