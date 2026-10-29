# GVolt 3D — Pausar e reativar anúncios

## O que mudou
- `admin.html` e `admin-list.html`: coluna **Anúncio**, filtro Todos / Publicados / Pausados e botão **Pausar anúncio** / **Reativar anúncio**.
- `index.html` e `sazonais.html`: mostram apenas produtos publicados.
- `product.html`: links diretos de produtos pausados mostram aviso de indisponibilidade em vez de oferecer a compra. O antigo fallback para `products.json` foi retirado para não exibir anúncios pausados quando o banco estiver indisponível.
- `admin-cyberpunk.css`: estilos novos de status, mantendo a identidade Cyberpunk.
- Nenhum produto foi apagado ou alterado automaticamente.

## Supabase
Foi acrescentada a coluna `public.products.is_active boolean not null default true` no projeto conectado. Todos os produtos antigos continuam publicados por padrão. As regras RLS agora permitem:
- visitantes anônimos: ler somente produtos publicados;
- usuários autenticados: ler produtos publicados;
- o usuário administrador já autorizado: ler e atualizar também produtos pausados.

A migração já foi executada no banco conectado, **não execute novamente** o arquivo de referência.

## Como instalar
1. Faça backup do projeto no GitHub.
2. Copie os arquivos novos ou substitua o projeto pela versão completa.
3. Verifique que `admin-cyberpunk.css` atualizado foi enviado junto.
4. Faça Ctrl+F5 no navegador e entre em `admin.html`.
5. Escolha um produto e clique em **Pausar anúncio**; para desfazer, use **Reativar anúncio**. É possível filtrar somente os pausados.

O arquivo `products.json` é um catálogo estático legado. Como não reflete a coluna de anúncios publicados, é recomendável removê-lo da publicação do GitHub Pages se não houver outros usos. A página pública já não consulta esse JSON para os links diretos.

A atualização não altera o estoque nem o conteúdo do produto, somente a publicação no catálogo. Os anúncios pausados podem continuar aparecendo em buscadores por algum tempo até que o índice seja atualizado.
