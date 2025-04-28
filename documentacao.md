# Documentação do Site Seguranca Chilengue

## Visão Geral
Este documento fornece informações sobre a estrutura e funcionamento do site SeguraTech, um site de empresa de segurança desenvolvido com HTML, CSS e JavaScript.

## Estrutura de Ficheiros
```
site_seguranca/
├── index.html           # Página inicial
├── servicos.html        # Página de serviços
├── sobre.html           # Página sobre nós
├── contacto.html        # Página de contacto
├── blog.html            # Página de blog
├── css/
│   └── style.css        # Ficheiro de estilos principal
├── js/
│   └── script.js        # Ficheiro JavaScript principal
└── images/              # Pasta para imagens do site
```

## Páginas do Site
1. **Página Inicial (index.html)**: Apresentação da empresa, serviços em destaque, depoimentos e chamada para ação.
2. **Serviços (servicos.html)**: Detalhes sobre os serviços oferecidos, incluindo videovigilância, controlo de acesso, alarmes e segurança privada.
3. **Sobre Nós (sobre.html)**: História da empresa, missão, visão, valores, equipe e certificações.
4. **Contacto (contacto.html)**: Informações de contacto, formulário para envio de mensagens, mapa e perguntas frequentes.
5. **Blog (blog.html)**: Artigos e notícias relacionados à segurança.

## Funcionalidades Principais
1. **Menu Responsivo**: Adapta-se a diferentes tamanhos de ecrã, com menu hamburger para dispositivos móveis.
2. **Slider de Depoimentos**: Apresenta depoimentos de clientes com navegação manual e automática.
3. **Formulário de Contacto**: Com validação de campos e feedback visual.
4. **FAQ Accordion**: Perguntas e respostas expansíveis na página de contacto.
5. **Animações de Scroll**: Elementos que aparecem com animação ao rolar a página.
6. **Botão de Voltar ao Topo**: Aparece quando o utilizador rola a página para baixo.

## Personalização

### Alteração de Informações de Contacto
Para alterar as informações de contacto, procure pelas seguintes secções em cada página HTML:

```html
<div class="footer-contacto">
    <h4>Contacto</h4>
    <ul>
        <li><i class="fas fa-phone"></i> 844090810</li>
        <li><i class="fas fa-map-marker-alt"></i> Matola-Gara</li>
        <li><i class="fas fa-envelope"></i> edvichilengue@gmail.co.mz</li>
    </ul>
    <!-- ... -->
</div>
```

### Alteração de Cores
As cores principais do site são definidas no ficheiro CSS através de variáveis:

```css
:root {
    --primary-color: #2c3e50;    /* Cor principal (azul escuro) */
    --secondary-color: #e74c3c;   /* Cor secundária (vermelho) */
    --accent-color: #3498db;      /* Cor de destaque (azul claro) */
    --light-color: #ecf0f1;       /* Cor clara para fundos */
    --dark-color: #2c3e50;        /* Cor escura para textos */
    /* ... */
}
```

Para alterar as cores do site, modifique estes valores no início do ficheiro `css/style.css`.

### Adição de Novas Páginas
Para adicionar uma nova página:
1. Copie a estrutura básica de uma página existente
2. Atualize o título e o conteúdo
3. Adicione um link para a nova página no menu de navegação em todas as páginas

## Imagens
Para adicionar ou substituir imagens:
1. Coloque as novas imagens na pasta `images/`
2. Atualize os caminhos das imagens nos ficheiros HTML

## Requisitos Técnicos
- O site funciona em todos os navegadores modernos (Chrome, Firefox, Safari, Edge)
- Design responsivo para dispositivos móveis, tablets e desktops
- Utiliza Font Awesome para ícones
- Compatível com HTML5 e CSS3

## Suporte
Para qualquer dúvida ou suporte adicional, entre em contacto através do email edvichilengue@gmail.co.mz ou pelo telefone 844090810.
