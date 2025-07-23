# Gueitebal.com.br

Site oficial da União dos Clubes de Gueitebol do Brasil.

## Sobre o Projeto

Este é um site desenvolvido em React que apresenta informações sobre o Gueitebol no Brasil, incluindo clubes cadastrados, agenda de torneios, regras do esporte e conteúdo informativo.

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ContactForm.jsx  # Formulário de contato
│   ├── Footer.jsx       # Rodapé do site
│   ├── HeroSection.jsx  # Seção principal da home
│   ├── InfoCard.jsx     # Cartão informativo
│   └── Navbar.jsx       # Navegação principal
├── constants/           # Dados estáticos
│   ├── blog.js         # Posts do blog
│   ├── clubes.js       # Clubes cadastrados
│   └── torneios.js     # Agenda de torneios
├── pages/              # Páginas da aplicação
│   ├── Blog.jsx        # Página do blog
│   ├── Clubes.jsx      # Lista de clubes
│   ├── Contato.jsx     # Página de contato
│   ├── Home.jsx        # Página inicial
│   ├── Regras.jsx      # Regras do esporte
│   ├── Sobre.jsx       # Sobre o Gueitebol
│   └── Torneios.jsx    # Agenda de torneios
└── utils/
    └── App.jsx         # Componente principal
```

## Tecnologias Utilizadas

- **React** - Biblioteca para construção da interface
- **React Router** - Roteamento da aplicação
- **PropTypes** - Tipagem das propriedades dos componentes
- **JavaScript ES6+** - Linguagem de programação

## Características do Código

### Documentação
- Todos os componentes possuem documentação JSDoc
- Comentários explicativos em português
- Arquivos organizados por responsabilidade

### Acessibilidade
- Uso de elementos semânticos (nav, main, section, article)
- Labels e descrições ARIA apropriadas
- Navegação por teclado considerada
- Estrutura hierárquica de headings

### Boas Práticas
- Componentes funcionais com hooks
- Separação de dados em arquivos de constantes
- PropTypes para validação de tipos
- Nomenclatura consistente em português
- Estrutura de pastas organizada

## Funcionalidades

1. **Página Inicial** - Apresentação do esporte com call-to-action
2. **Sobre** - Informações detalhadas sobre o Gueitebol
3. **Clubes** - Lista de clubes cadastrados no Brasil
4. **Torneios** - Agenda de eventos e campeonatos
5. **Regras** - Regulamentação básica do esporte
6. **Blog** - Artigos e notícias
7. **Contato** - Formulário para comunicação

## Desenvolvimento

O projeto está estruturado para fácil manutenção e expansão:

- **Modularidade**: Componentes independentes e reutilizáveis
- **Escalabilidade**: Estrutura preparada para crescimento
- **Manutenibilidade**: Código bem documentado e organizado
- **Acessibilidade**: Seguindo padrões web modernos

## Próximos Passos

Para implementação em produção, considere:

1. Configurar build system (Vite, Create React App, etc.)
2. Implementar integração real para o formulário de contato
3. Adicionar sistema de gerenciamento de conteúdo
4. Configurar hospedagem e domínio
5. Implementar analytics e SEO
6. Adicionar testes automatizados

## Contribuição

Este projeto segue padrões de código limpo e bem documentado. Ao contribuir:

- Mantenha a documentação JSDoc atualizada
- Use nomenclatura em português para consistência
- Siga os padrões de acessibilidade estabelecidos
- Adicione PropTypes para novos componentes