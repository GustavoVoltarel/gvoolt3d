# Loja de Impressão 3D

Este repositório contém um site estático simples para exibir produtos de impressão 3D. O objetivo é permitir que você liste produtos, mostre detalhes e direcione os clientes para uma conversa no WhatsApp para concluir a compra. O site é composto apenas por arquivos HTML, CSS e JSON e pode ser hospedado facilmente no GitHub Pages.

## Estrutura de Arquivos

- **index.html** — Página inicial que lista todos os produtos a partir de um arquivo `products.json`. Cada produto aparece em um cartão com imagem, nome, preço e um link para mais detalhes.
- **product.html** — Página de detalhes do produto. Usa o parâmetro `id` da URL para carregar as informações completas do produto. Exibe a imagem, nome, descrição, preço e um botão “Comprar via WhatsApp” que abre uma conversa com mensagem pré-preenchida.
- **products.json** — Lista de produtos em formato JSON. Para adicionar um novo produto, adicione um novo objeto com os campos `id`, `name`, `description`, `price` e `image`. O campo `id` deve ser único e é usado para linkar a partir da página inicial.
- **style.css** — Arquivo de estilos responsável pela aparência da página.

## Como usar

1. **Obtenha o conteúdo** deste diretório (`index.html`, `product.html`, `products.json`, `style.css`) e faça o upload para um novo repositório GitHub.
2. **Adicione seus produtos** editando o arquivo `products.json`. Use um identificador único em `id`, o nome do produto em `name`, a descrição em `description`, o preço em `price` (apenas números com ponto como separador decimal) e o endereço da imagem em `image`. As imagens podem ser hospedadas no próprio repositório (por exemplo, na pasta `images`) ou em outro serviço de hospedagem.
3. **Atualize o número de WhatsApp**: no arquivo `product.html`, procure pela variável `whatsappNumber` e substitua pelo seu número no formato internacional (DDI + DDD + número, sem espaços ou símbolos). Este número será utilizado para gerar o link de compra.
4. **Ative o GitHub Pages**: no seu repositório no GitHub, vá em *Settings* → *Pages* → selecione a branch principal (`main` ou `master`) e a pasta raíz (`root`) e clique em *Save*. O GitHub Pages irá construir e hospedar o site automaticamente.
5. **Acesse o site** pelo endereço fornecido pelo GitHub Pages (algo como `https://seu-usuario.github.io/nome-do-repositorio/`).

## Personalizações

- Para alterar o título ou texto do cabeçalho, edite as tags dentro de `<header>` em `index.html` e `product.html`.
- Para ajustar as cores ou estilos, modifique o arquivo `style.css`.
- Caso deseje adicionar novas páginas ou funcionalidades, fique à vontade para criar arquivos adicionais.

## Licença

Este projeto é fornecido sem garantia. Sinta-se livre para copiar e modificar conforme necessário para suas necessidades comerciais ou pessoais.