/**
 * @fileoverview Página de Termos de Uso
 * @description Termos de uso do site necessários para compliance
 */

import React from 'react';
import Footer from '../components/Footer';

/**
 * Página de Termos de Uso
 * @description Renderiza os termos de uso do site
 * @returns {JSX.Element} Página de termos de uso
 */
function TermsOfUse() {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1>Termos de Uso</h1>
        <p><strong>Última atualização:</strong> Agosto de 2025</p>
        
        <section>
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e usar o site Gueitebal.com.br, você concorda em cumprir e estar vinculado 
            aos seguintes termos e condições de uso.
          </p>
        </section>

        <section>
          <h2>2. Descrição do Serviço</h2>
          <p>
            O Gueitebal.com.br é o site oficial da União dos Clubes de Gueitebol do Brasil (UCGB), 
            fornecendo informações sobre:
          </p>
          <ul>
            <li>O esporte Gueitebol (Gateball)</li>
            <li>Clubes associados à UCGB</li>
            <li>Torneios e competições</li>
            <li>Regras e regulamentos do esporte</li>
            <li>Notícias e atualizações da comunidade</li>
          </ul>
        </section>

        <section>
          <h2>3. Uso Aceitável</h2>
          <p>Você concorda em usar este site apenas para fins legais e de acordo com estes termos. É proibido:</p>
          <ul>
            <li>Usar o site para qualquer propósito ilegal ou não autorizado</li>
            <li>Transmitir qualquer material que seja ofensivo, difamatório ou inadequado</li>
            <li>Tentar interferir no funcionamento adequado do site</li>
            <li>Usar sistemas automatizados para acessar o site sem permissão</li>
          </ul>
        </section>

        <section>
          <h2>4. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, 
            é propriedade da UCGB ou de seus licenciadores e está protegido por leis de direitos autorais.
          </p>
        </section>

        <section>
          <h2>5. Publicidade</h2>
          <p>
            Este site utiliza Google AdSense para exibir anúncios. A UCGB não é responsável 
            pelo conteúdo dos anúncios exibidos ou pelos sites para os quais eles direcionam.
          </p>
        </section>

        <section>
          <h2>6. Isenção de Responsabilidade</h2>
          <p>
            As informações neste site são fornecidas "como estão". A UCGB não garante a precisão, 
            completude ou atualidade das informações e não se responsabiliza por quaisquer danos 
            decorrentes do uso do site.
          </p>
        </section>

        <section>
          <h2>7. Links Externos</h2>
          <p>
            Este site pode conter links para sites externos. A UCGB não é responsável pelo 
            conteúdo ou práticas de privacidade desses sites.
          </p>
        </section>

        <section>
          <h2>8. Modificações</h2>
          <p>
            A UCGB reserva o direito de modificar estes termos a qualquer momento. 
            As alterações serão efetivas imediatamente após a publicação no site.
          </p>
        </section>

        <section>
          <h2>9. Lei Aplicável</h2>
          <p>
            Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida 
            nos tribunais competentes do Brasil.
          </p>
        </section>

        <section>
          <h2>10. Contato</h2>
          <p>
            Para questões sobre estes termos de uso, entre em contato:
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

export default TermsOfUse;
