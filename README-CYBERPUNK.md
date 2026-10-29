# GVolt 3D — Identidade Cyberpunk (GV)

Versão visual baseada nos arquivos enviados e na **última logo GV aprovada**.

## O que foi alterado
- Identidade **amarelo elétrico (`#FCEE0A`), ciano (`#00DDEE`), carvão (`#080E15`)**.
- Fontes **Oxanium** para títulos e **Rajdhani** para conteúdo, menus e formulários.
- Estilo de botões, navegação, cards, página de produtos, sazonais e **todas as páginas do admin**.
- Logo GV aplicada localmente ao topo, rodapé e hero; favicon atualizado.
- Responsividade e comportamento mobile preservados.

## O que foi preservado
- Código JavaScript e regras de negócio de cada página.
- Integração Supabase (config.js original, banco e autenticação intactos).
- Catálogo, filtros, botões WhatsApp, cadastro/edição/exclusão e calculadora.
- Arquivos de dados já fornecidos (products.json), sem alterar seu conteúdo.

## Implantação no GitHub Pages
1. Faça backup do repositório/site atual antes de publicar.
2. Extraia o ZIP e copie **o conteúdo da pasta** para a raiz do repositório onde estão `index.html`, `style.css` e `config.js`.
3. **Não exclua imagens existentes** da pasta `assets/` nem arquivos do projeto não incluídos neste ZIP; os produtos ainda podem usá-los.
4. Confirme que `cyberpunk.css` e os novos arquivos em `assets/` foram enviados ao GitHub.
5. Publique e atualize o navegador com `Ctrl + F5` para ignorar o CSS antigo em cache.

### Observações
- As imagens de produtos do banco Supabase não foram exportadas; **seus links e dados permanecem como estavam**.
- `products.json` pode apontar para arquivos `assets/products/...` que não estavam anexados; preserve-os no repositório existente.
- Foi mantido o arquivo de configuração público Supabase fornecido. **Não inclua uma chave service_role/secret em arquivos do GitHub Pages**.
- Fontes e Font Awesome dependem de CDN; sua exibição offline pode usar fonte fallback.
- Arquivo de identidade visual full HD: `assets/logo-gvolt-gv.png` e versão web otimizada `.webp`.
- **O ZIP não altera automaticamente seu GitHub ou Supabase.** Faça publicação no seu repositório quando estiver satisfeito.

## Atualização 29/10/2026 — correções do painel administrativo
- Corrigido painel desalinhado em `admin.html`, `admin-list.html`, `admin-delete.html` e `admin-calculation-details.html`.
- Padronizados painel, cartão de login, campos e mensagens em **12 páginas administrativas**.
- Corrigido menu responsivo das páginas administrativas (incluindo `admin-list.html`).
- Layouts testados visualmente em 390px, 760px, 1024px e 1440px, incluindo estados com conteúdo administrativo visível.
- Adicionado **`admin-cyberpunk.css`**, importado depois de `cyberpunk.css` apenas nas páginas administrativas.
- Sem alteração nas operações de banco, cálculos de preço ou autenticação Supabase; testes reais de login e escrita no banco não foram executados.

**Para atualizar somente o admin**, substitua os 12 arquivos `admin*.html` e adicione `admin-cyberpunk.css` na raiz do site. Mantenha o `cyberpunk.css`, `style.css` e os arquivos de logo da versão Cyberpunk anterior.
