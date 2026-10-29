# GVolt 3D — experiência, conversão e métricas

## Atualização

Substitua os arquivos correspondentes no GitHub Pages; inclua os novos `gvolt-growth.css`, `gvolt-analytics.js` e `admin-analytics.html`. Mantenha todos os arquivos `assets` e `config.js` existentes.

Não execute as migrações novamente no projeto Supabase atual: a tabela `store_events` e o campo `store_orders.source_channel` já foram criados. Um SQL de referência está em `SQL-ANALYTICS-REFERENCIA.sql`.

## O que foi feito

- Hero e rodapé: mensagem "Suas ideias ganham forma", focada em miniaturas, presentes e personalizações.
- Bloco "Por que comprar na GVolt 3D?" com diferenciais verificáveis e a origem da marca Gustavo VOLTarel.
- Botão fixo de WhatsApp no celular, sem bloquear a navegação.
- Página de produto: quantidade e mensagem pronta com nome, preço publicado, quantidade e link.
- Formulário personalizado: eventos de início e continuação pelo WhatsApp, preservando o anexo apenas localmente.
- SEO inicial: títulos, descrições, metadados OG/Twitter, Store JSON-LD na home e Product JSON-LD dinâmico em `product.html` quando o produto é carregado. Sem URL fictícia nem avaliações inventadas.
- Métricas de páginas, visualizações de produtos, cliques no WhatsApp e formulários, apenas se o visitante consentir. Somente categoria de origem (Instagram, Google etc.), página e ID do produto. Não coleta PII.
- Administração: `admin-analytics.html` e campo "Origem do pedido" (site, Instagram, indicação, outros, não informado) em `admin-orders.html`, com gráficos de vendas reais registrados manualmente no dashboard.

## Limitações importantes

- O visitante precisa autorizar as métricas. Portanto, totais são de **eventos opt-in**, não de visitantes únicos. Cliques não são compras.
- A origem do evento deriva de `utm_source` ou domínio referenciador. Muitos aplicativos abrem o site sem informar o referenciador, então podem aparecer como acesso direto.
- Recomendo acrescentar UTM aos links na bio do Instagram (ex.: `?utm_source=instagram`) para melhores classificações.
- Novas métricas dependem da publicação deste HTML. Não há dados históricos anteriores.
- O Supabase recebe apenas `event_type`, `source`, `page`, `product_id` e data/hora gerada no banco; não enviamos nomes, contatos ou URLs visitadas. Como a API recebe chamadas anônimas, eventos podem ser inflados por bots. Se o volume aumentar, prefira Edge Function com rate limiting.
- SEO: metadados do produto são atualizados em JavaScript, podendo não ser vistos em previews do WhatsApp e robôs que não executam JS. Para prévias específicas por produto, usar geração estática/SSR e URLs próprias por produto na futura hospedagem. Não publique `sitemap.xml` sem confirmar URL final do site.
- A proteção do banco depende das policies RLS (novos eventos só têm INSERT público e SELECT apenas para administrador). Não inclua `service_role` no frontend.
- Alterações de preço, estoque, publicidade e dados de pedidos continuam a ser feitas pelos fluxos já existentes.

## Testes recomendados

1. Abra `index.html` no celular e veja o botão inferior sem cobrir a navegação; verifique a nova seção de diferenciais.
2. Permita as métricas num navegador de testes e depois abra um produto; recuse em outro navegador e compare.
3. Na página do produto, mude a quantidade e confira o texto aberto no WhatsApp.
4. Teste o formulário de peças personalizadas com imagem (a imagem só é anexada manualmente no WhatsApp).
5. Em `admin-orders.html`, salve um pedido de teste com origem "Indicação" e depois exclua o teste.
6. Abra `admin-dashboard.html` e `admin-analytics.html`, confira as métricas e o canal da venda.
7. Confirme que produtos pausados continuam inacessíveis no catálogo e via link direto.

### Privacidade

O aviso de consentimento usa apenas `localStorage` para lembrar a escolha e `sessionStorage` para a categoria da fonte. Não utiliza cookie de publicidade nem IDs de visitantes. Para um documento formal de privacidade, procure revisão jurídica conforme a LGPD e as práticas reais da loja.
