# GVolt 3D

Site oficial da **GVolt 3D**, criado para divulgar produtos de impressão 3D, receber pedidos pelo WhatsApp e gerenciar o catálogo, custos e materiais por uma área administrativa integrada ao Supabase.

O projeto é um site estático em **HTML, CSS e JavaScript**, hospedável no **GitHub Pages**, com banco de dados e autenticação usando **Supabase**.

## Funcionalidades principais

### Área pública

- Página inicial com apresentação da GVolt 3D.
- Catálogo de produtos carregado do Supabase.
- Campo de busca para filtrar produtos.
- Página individual de produto com descrição, imagens, preço e disponibilidade.
- Botão de pedido/orçamento via WhatsApp.
- Layout responsivo para desktop, tablet e celular.
- Tema visual neon/roxo com logo e favicon personalizados.

### Área administrativa

A área administrativa é protegida por login via Supabase Auth e validação de e-mail autorizado em `config.js`.

Principais telas administrativas:

- `admin.html` — tela inicial de administração, lista produtos cadastrados e histórico de cálculos salvos.
- `admin-create.html` — cadastro de novos produtos.
- `admin-edit.html` — edição de produtos existentes.
- `admin-delete.html` — exclusão de produtos.
- `admin-list.html` — listagem administrativa auxiliar de produtos.
- `admin-calculator.html` — calculadora de custos de impressão 3D.
- `admin-filaments.html` — cadastro e consulta de filamentos.
- `admin-printers.html` — cadastro e consulta de impressoras.
- `admin-packaging.html` — cadastro e consulta de embalagens.
- `admin-extras.html` — cadastro e consulta de custos extras/insumos.
- `admin-settings.html` — configuração de parâmetros globais de custo.

### Calculadora de custos

A calculadora permite estimar o preço de uma impressão 3D considerando:

- impressora utilizada;
- um ou mais filamentos;
- quantidade usada de cada filamento em gramas;
- tempo de impressão;
- horas de trabalho/manual;
- uma ou mais embalagens;
- extras/insumos adicionais;
- custo de energia;
- depreciação da impressora;
- custo de manutenção;
- taxa de falha;
- taxa fixa;
- markup;
- taxa de marketplace e impostos.

Os cálculos podem ser salvos na tabela `calculations` do Supabase para consulta posterior na área administrativa.


## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Supabase Database
- Supabase Auth
- GitHub Pages
- Font Awesome
- Google Fonts


## Estrutura dos arquivos

├── assets/
│   ├── favicon.png
│   ├── gvolt-logo(2).jpeg
│   └── products/
├── admin.html
├── admin-create.html
├── admin-edit.html
├── admin-delete.html
├── admin-list.html
├── admin-calculator.html
├── admin-filaments.html
├── admin-printers.html
├── admin-packaging.html
├── admin-extras.html
├── admin-settings.html
├── config.js
├── index.html
├── product.html
├── products.json
├── style.css
├── LICENSE
└── README.md
