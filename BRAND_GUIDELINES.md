# 🎨 Brand Guidelines - Logo Gueitebol Brasil

## Sobre o Logo

O logo do Gueitebol Brasil foi criado para representar a identidade visual da União dos Clubes de Gueitebol do Brasil (UCGB). Ele combina elementos visuais do esporte com uma tipografia moderna e profissional.

## Elementos do Design

### 🏟️ Campo de Gatebol
- Representa o espaço onde o esporte é praticado
- Proporções baseadas nas medidas oficiais (20m x 15m)
- Cor verde em gradiente remetendo à grama

### 🚪 Três Portões
- Elementos característicos únicos do gatebol
- Dispostos em sequência como no jogo real
- Cor branca para contraste e visibilidade

### ⚽ Bola e Taco
- Equipamentos essenciais do esporte
- Bola representada por círculo branco
- Taco em cor madeira (marrom)

### 🔤 Tipografia
- **Fonte**: Inter (com fallback Arial)
- **Peso**: Bold (700) para "GUEITEBOL"
- **Peso**: Medium (500) para "BRASIL"
- **Espaçamento**: Letter-spacing otimizado

## Paleta de Cores

### Cores Principais
```css
--primary-color: #2c5530    /* Verde escuro */
--secondary-color: #4a7c59  /* Verde médio */
--accent-color: #6db33f     /* Verde vibrante */
```

### Cores de Apoio
```css
--white: #ffffff           /* Branco puro */
--text-primary: #2c3e50    /* Azul escuro */
--light-green: #f0f8f0     /* Verde claro */
```

## Versões do Logo

### 1. Logo Completo (200x60px)
- **Uso**: Navbar desktop, cabeçalhos, materiais impressos
- **Contexto**: Quando há espaço suficiente
- **Arquivo**: `Logo.jsx`

### 2. Logo Simplificado (40x40px)
- **Uso**: Mobile, favicon, ícones pequenos
- **Contexto**: Espaços reduzidos
- **Arquivo**: `LogoSimple.jsx`

### 3. Favicon SVG (32x32px)
- **Uso**: Abas do navegador, favoritos
- **Contexto**: Identificação rápida
- **Arquivo**: `favicon.svg`

## Regras de Uso

### ✅ Permitido
- Usar sobre fundos escuros (navbar)
- Escalar proporcionalmente
- Aplicar hover effects sutis
- Usar em materiais oficiais da UCGB

### ❌ Não Permitido
- Distorcer as proporções
- Alterar as cores principais
- Usar sobre fundos que prejudiquem a legibilidade
- Rotacionar ou inclinar
- Adicionar efeitos excessivos

## Implementação Técnica

### Componente React
```jsx
import Logo from './components/Logo';
import LogoSimple from './components/LogoSimple';

// Logo completo
<Logo width={180} height={50} />

// Logo simplificado
<LogoSimple size={35} />
```

### Responsividade
```css
/* Desktop */
.logo-desktop { display: block; }
.logo-mobile { display: none; }

/* Mobile */
@media (max-width: 768px) {
  .logo-desktop { display: none; }
  .logo-mobile { display: flex; }
}
```

## Arquivos e Formatos

### Desenvolvimento
- **React Components**: `Logo.jsx`, `LogoSimple.jsx`
- **Formato**: SVG (escalável)
- **Cores**: CSS Variables

### Produção
- **Favicon**: `favicon.svg`
- **Manifest**: `site.webmanifest`
- **Apple Touch**: `apple-touch-icon.png` (planejado)

## Aplicações

### Digital
- Site oficial (gueitebal.com.br)
- Redes sociais
- E-mail marketing
- Aplicativos móveis (futuro)

### Impressos
- Materiais promocionais
- Uniformes
- Equipamentos esportivos
- Documentos oficiais

## Manutenção

### Atualizações
- Sempre manter proporções originais
- Testar em diferentes dispositivos
- Validar acessibilidade (contraste)
- Verificar performance de carregamento

### Versionamento
- Versão atual: 1.0
- Data de criação: Agosto 2025
- Próxima revisão: Anual

---

**Criado para**: União dos Clubes de Gueitebol do Brasil (UCGB)  
**Designer**: YD Software  
**Data**: Agosto 2025
