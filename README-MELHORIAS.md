# GVolt 3D — experiência completa (Cyberpunk)

## O que mudou
- Catálogo: categoria, filtros por disponibilidade, ordenação por preço, busca e contagem.
- Cards: selo de destaque, categoria, disponibilidade e prazo.
- Desempenho: imagens carregadas progressivamente em vez de testar todas antes de mostrar o catálogo.
- Campanhas: banner controlado por tabela Supabase e datas; sem campanhas ativas, banner oculto (remove destaque vencido do Dia dos Namorados).
- Portfólio: galeria de fotos com descrições e depoimentos autorizados, publicada via admin.
- Personalizados: formulário de orçamento via WhatsApp, pré-visualização local da referência e aviso explícito para anexar o arquivo na conversa.
- Gestão: dashboard, pedidos e valores registrados manualmente, campanhas e fotos.
- Tema cyberpunk e fonte anterior do título (Chakra Petch) mantidos.

## Arquivos novos
`store-experience.css`, `personalizados.html`, `admin-dashboard.html`, `admin-orders.html`, `admin-campaigns.html`, `admin-gallery.html`, `SUPABASE-SETUP.sql`.

## Dados e publicação
As novas tabelas e políticas já foram criadas no projeto Supabase conectado. O script SUPABASE-SETUP.sql é uma cópia de instalação/reinstalação para referência; não é necessário executá-lo agora. Não há alteração de preços ou exclusão de produtos existentes. A conta administradora usa a mesma UID que as políticas RLS preexistentes. Admin permite publicação e CRUD somente após autenticação. Não use chave service_role em arquivos da loja.

O cadastro de produtos passa a oferecer categoria; os produtos antigos sem categoria aparecem como 'Outros' até serem classificados no editor.

**Pedidos:** são gerenciados manualmente a partir do WhatsApp, sem pagamentos automáticos. Faturamento e lucro exibidos usam pedidos com status 'Entregue'; o lucro é estimado como preço de venda menos custo informado, não é contabilidade fiscal.

**Imagens de referência de clientes:** não são enviadas ao Supabase. O cliente precisa anexá-las manualmente no WhatsApp. O portfólio usa bucket público para fotos da loja, enviado apenas por usuário admin.

**Galeria:** fica oculta enquanto não houver itens publicados. **Campanha:** oculta sem campanha ativa dentro do intervalo.

## Deploy GitHub Pages
Faça backup; envie os arquivos da pasta para a raiz do repositório, mantendo a pasta `assets/products` com suas fotos antigas. Não envie SQL para o navegador como segredo: o arquivo SQL é apenas uma migração (pode ficar no repositório como documentação). Atualize o navegador com Ctrl+F5. Antes de anunciar a nova versão, teste login, edição e carregamento de produtos reais.

## Segurança
Novas tabelas possuem RLS ativo; pedidos são exclusivos do administrador. Produtoss continuam com as políticas antigas do Supabase. Sua configuração `config.js` contém apenas chave publicável. A segurança é da RLS, não da checagem de e-mail JS. Para a verificação de segurança do Auth, consulte o aviso de senha vazada no dashboard do Supabase.
