# Reestruturação do site — The Beauty of Brazil Spa

## Contexto

Este projeto foi criado duplicando a estrutura do site da Dra. Gabriele Leão
(Vite + React + TypeScript + shadcn/Tailwind), para reaproveitar a stack em
vez de recomeçar do zero. Conteúdo, textos, imagens e nomes de componentes
ainda pertencem ao projeto original e precisam ser substituídos pelo
conteúdo real da The Beauty of Brazil Spa.

O site atual da cliente está em WordPress (SiteGround), sendo migrado para
esta stack. Backup do WordPress (banco + uploads) feito via UpdraftPlus.

Identidade visual, conteúdo e serviços levantados do site ao vivo estão
documentados separadamente em [IDENTIDADE-VISUAL.md](IDENTIDADE-VISUAL.md).

## Idioma: site bilíngue (PT/EN)

O site final terá toggle de idioma. **Atenção à inversão entre fases:**

- **Em desenvolvimento/teste:** idioma primário (carregado por padrão) =
  **português**
- **Em produção (após aprovação do cliente):** idioma primário = **inglês**,
  com português como secundário (toggle) — negócio é nos EUA, mas atende
  público brasileiro
- Implementar i18n desde já (não hardcode de texto), com uma flag central
  simples pra trocar o idioma padrão na virada dev → produção

## Estado atual (herdado da Dra. Gabriele)

### `src/pages/`
- `Index.tsx` — página única, todas as seções
- `NotFound.tsx` — reaproveitável sem alteração

### `src/components/site/` — precisa revisão item a item
| Componente | Status | Observação |
|---|---|---|
| `Navbar.tsx` | revisar | menu/links específicos da Dra. Gabriele |
| `Hero.tsx` | revisar | texto e imagem de abertura |
| `About.tsx` | revisar | bio da Dra. Gabriele → trocar por spa |
| `Services.tsx` | revisar | lista de serviços odontológicos |
| `Clareamento.tsx` | **específico da Dra. Gabriele** — provavelmente remover ou substituir por serviço do spa |
| `RecontornoEstetico.tsx` | **específico da Dra. Gabriele** — idem |
| `BeforeAfter.tsx` | revisar | antes/depois — trocar imagens |
| `HowItWorks.tsx` | revisar | fluxo de atendimento |
| `Testimonials.tsx` | revisar | depoimentos reais do spa |
| `TrustBar.tsx` | revisar | selos/credenciais |
| `InstagramFeed.tsx` | revisar | trocar handle do Instagram |
| `BookingCTA.tsx` | revisar | CTA de agendamento (já é WhatsApp, conferir número/mensagem) |
| `WhatsAppFab.tsx` | revisar | conferir número de WhatsApp |
| `Footer.tsx` | revisar | dados de contato, endereço, redes |

### `src/assets/` ✅ limpo em 2026-09-21
As 28 imagens da Dra. Gabriele (`dra-*`, `case-*`, `clareamento-*`,
`recontorno-*`, ~19MB) foram removidas — nenhuma tinha referência no código
atual. Assets reais da The Beauty of Brazil Spa vivem em `src/assets/tbobs/`.

### `public/` ✅ limpo em 2026-09-21
- `favicon.png` (era o monograma "GL" da Dra. Gabriele) **removido**.
  Substituído temporariamente por `placeholder.svg` (ícone) e
  `og-image.jpg` (foto real de tratamento, usada em og:image/twitter:image/
  apple-touch-icon) até termos o **logo oficial da marca**
  ([PENDENTE — cliente vai enviar](#pendências--decisões-em-aberto))
- `robots.txt`, `sitemap.xml` — já apontam para thebeautyofbrazilspa.com
- `placeholder.svg` — reaproveitado (genérico, nunca foi da Dra. Gabriele)

### Metadados ✅ atualizados em 2026-09-21
`index.html` — title, meta tags, JSON-LD (agora `BeautySalon` com endereço
real de Pembroke Pines) já reescritos. `robots.txt`/`sitemap.xml` com
domínio correto. Ver pendências de SEO/AEO/GEO mais completas abaixo.
- `package.json` → `name: "vite_react_shadcn_ts"` — genérico, sem problema,
  não precisa trocar

## Fases do trabalho

**Fase 1 — Réplica (checkpoint interno, não é entrega ao cliente)**
Recriar o site atual do WordPress dentro deste projeto (Vite/React), com a
mesma identidade visual e estrutura de conteúdo já documentadas em
[IDENTIDADE-VISUAL.md](IDENTIDADE-VISUAL.md). Objetivo: ter uma base 1:1
pra comparar, validar que a migração de conteúdo/imagens funcionou, e servir
de ponto de partida visual.

**Fase 2 — Reestruturação real (entrega ao cliente)**
A partir da réplica, redesenhar visual (layout, hierarquia, design sytem)
e reescrever narrativas/textos. Isso é o que foi vendido à cliente — o site
final **não pode** ser visualmente idêntico ao WordPress atual.

> Não pular a Fase 1 direto pra Fase 2: primeiro replicar fielmente, só
> depois reestruturar em cima da réplica.

## Plano de migração de conteúdo

1. ~~**Extrair do WordPress**~~ ✅ feito em 2026-09-21
   - Imagens originais (sem thumbnails duplicados, 213 arquivos) copiadas
     para `src/assets/wordpress-original/`
   - Textos das páginas extraídos do dump SQL do backup UpdraftPlus →
     [CONTEUDO-WORDPRESS.md](CONTEUDO-WORDPRESS.md). **Importante:** só a
     Homepage tem conteúdo real — ver achado em [IDENTIDADE-VISUAL.md](IDENTIDADE-VISUAL.md)
2. **Organizar assets novos** — já estão em `src/assets/wordpress-original/`;
   renomear/mover para `src/assets/` conforme forem usados nos componentes,
   substituindo os arquivos herdados da Dra. Gabriele
3. **Reescrever componentes** de `src/components/site/` um a um, na ordem
   em que aparecem na página (Navbar → Hero → About → Services → ... → Footer)
4. **Remover componentes exclusivos** da Dra. Gabriele (`Clareamento.tsx`,
   `RecontornoEstetico.tsx`) ou adaptá-los para serviços equivalentes do spa
5. **Atualizar metadados** (`index.html`, `robots.txt`, `sitemap.xml`,
   favicon) para o domínio e branding da The Beauty of Brazil Spa
6. **Renomear branding interno** (WhatsApp, Instagram, nome do negócio) em
   todos os componentes que fazem referência direta

## Diagnóstico do briefing (formulário de onboarding, 2026-09)

Comparamos as respostas da Christiane no formulário de briefing/onboarding
com o site atual. Conclusão: o site **não está desalinhado**, mas está
**incompleto** — falta preencher conteúdo que ela já forneceu, não
reestruturar visual.

**Decisões tomadas (2026-09-25):**
- [x] **Página separada de serviços implementada** — `/services`
      (`src/pages/Services.tsx`), com os 12 tratamentos organizados em duas
      categorias (Elite Skincare Treatments / Body Contour Treatments), sem
      preços. A Homepage mantém só os 4 tratamentos em destaque. `LanguageProvider`
      foi movido para `App.tsx` (antes só existia dentro de `Index.tsx`) para
      o idioma persistir entre as páginas via navegação client-side (`Link`
      do React Router em vez de `<a>`)
- [x] **Tagline única aplicada** — *"Where Brazilian Beauty Meets Luxury
      Aesthetics"* (EN) / *"Onde a Beleza Brasileira Encontra a Estética de
      Luxo"* (PT), em `Hero.tsx`, substituindo a tagline herdada do WordPress

**Respostas da Christiane (2026-09-25):**
- **Diferencial competitivo:** confirmado que ela não tem um definido — não
  é algo a resolver por conta própria, ela mesma não sabe ainda
- **Fotos/vídeos reais:** não vai conseguir enviar por enquanto (acervo
  desorganizado). Site segue com as imagens de banco atuais. Ela vai enviar
  **depoimentos escritos** em breve — sem placeholder até chegarem
- **Logo oficial:** ainda em produção pela Christiane. Mantém favicon/
  og-image placeholder atuais até ela enviar
- **Lista de serviços:** confirmada, os 12 itens estão corretos
- **Preços:** decidido **não exibir preço nenhum** na página de serviços
  (nem os que já tínhamos, ex: Body Contour Sculpt $120.56 etc. — não
  mostrar, mesmo sendo dado real, por decisão de produto)
- **WhatsApp:** confirmado, (954) 405-5414 é o mesmo número usado no
  WhatsApp Business

**Ainda pendente:**
- [ ] Depoimentos escritos da Christiane (sem placeholder)
- [ ] Logo oficial da marca (sem placeholder além do atual)

## SEO / AEO / GEO — a mexer em breve

O site da Dra. Gabriele tinha um trabalho de SEO/AEO/GEO relativamente
completo (sitemap, robots.txt para crawlers de IA, dados estruturados
JSON-LD, FAQPage schema). Neste projeto, por enquanto, só o básico foi
portado (meta tags, `BeautySalon` schema simples). Falta:

- [ ] **robots.txt** — adicionar diretivas explícitas para crawlers de IA/
      AEO (GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended,
      Applebot-Extended), como estava no site da Dra. Gabriele
- [ ] **sitemap.xml** — hoje só tem a home; expandir quando existirem mais
      páginas/rotas (ex: página de serviços, sobre, contato)
- [ ] **JSON-LD** — enriquecer o schema `BeautySalon`: horário já incluído,
      faltam `aggregateRating`/`review` (só com dados reais confirmados,
      não inventar), `sameAs` com mais perfis se houver (Facebook, Google
      Business), e possivelmente `Service` schema por tratamento
- [ ] **FAQPage schema** — só faz sentido depois que a página de FAQ real
      for escrita (hoje é Lorem Ipsum no WordPress, ver
      [IDENTIDADE-VISUAL.md](IDENTIDADE-VISUAL.md)); não copiar o
      schema antigo da Dra. Gabriele
- [ ] **GEO (Generative Engine Optimization)** — conteúdo estruturado e
      citável para IAs generativas (respostas diretas, listas claras de
      serviços/preços, bio factual) — parcialmente resolvido pelo texto
      real já migrado, mas vale revisão dedicada
- [ ] **og-image.jpg / favicon** — hoje são placeholders temporários (foto
      de tratamento genérica + ícone padrão); trocar por logo oficial e uma
      imagem de compartilhamento pensada especificamente para redes sociais
      assim que a marca enviar os assets
- [ ] **Verificação de domínio** (Facebook, Google Search Console etc.) —
      a da Dra. Gabriele foi removida do `index.html`; gerar uma nova para
      thebeautyofbrazilspa.com quando for configurar

## Pendências / decisões em aberto
- [x] Instagram: @thebeautyofbrazilspa
- [x] Telefone/contato: (954) 405-5414 — [PENDENTE DE VALIDAÇÃO] se é o
      mesmo número usado no WhatsApp Business
- [ ] Confirmar quais serviços do spa substituem Clareamento/Recontorno —
      candidatos: Firming Radiofrequency, Body Contour Sculpt, Signature
      Glow Facial, Anti-Aging Facial (ver [IDENTIDADE-VISUAL.md](IDENTIDADE-VISUAL.md))
- [ ] Domínio final (a hospedagem WordPress mostra domínio externo:
      thebeautyofbrazilspa.com)
- [x] Cores exatas (hex) e fontes do tema WordPress → ver [IDENTIDADE-VISUAL.md](IDENTIDADE-VISUAL.md)
- [x] Lista completa de serviços/preços → ver [SERVICOS-PRECOS.md](SERVICOS-PRECOS.md)
- [ ] **Logo oficial da marca** — cliente vai enviar; até lá, favicon e
      og-image estão com placeholders (ver seção `public/` acima)
- [ ] SEO/AEO/GEO completo — ver seção dedicada acima

> Convenção: itens marcados `[PENDENTE DE VALIDAÇÃO]` nos componentes devem
> ser confirmados com a cliente antes de publicar.
