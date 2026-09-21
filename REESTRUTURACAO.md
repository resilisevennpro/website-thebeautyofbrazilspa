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

### `src/assets/`
Todas as imagens (`dra-*`, `case-*`, `clareamento-*`, `recontorno-*`) são da
Dra. Gabriele — **nenhuma reaproveitável**. Serão substituídas pelas imagens
extraídas da Media Library do WordPress da The Beauty of Brazil Spa.

### `public/`
- `favicon.png`, `robots.txt`, `sitemap.xml` — trocar pelo domínio/branding
  da The Beauty of Brazil Spa
- `placeholder.svg` — reaproveitável

### Metadados
- `index.html` — title, meta tags, SEO/AEO/GEO, dados estruturados e domínio
  do Facebook ainda apontam para a Dra. Gabriele
- `package.json` → `name: "vite_react_shadcn_ts"` — genérico, sem problema

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

## Pendências / decisões em aberto
- [x] Instagram: @thebeautyofbrazilspa
- [x] Telefone/contato: (954) 405-5414 — [PENDENTE DE VALIDAÇÃO] se é o
      mesmo número usado no WhatsApp Business
- [ ] Confirmar quais serviços do spa substituem Clareamento/Recontorno —
      candidatos: Firming Radiofrequency, Body Contour Sculpt, Signature
      Glow Facial, Anti-Aging Facial (ver [IDENTIDADE-VISUAL.md](IDENTIDADE-VISUAL.md))
- [ ] Domínio final (a hospedagem WordPress mostra domínio externo:
      thebeautyofbrazilspa.com)
- [ ] Cores exatas (hex) e fontes do tema WordPress
- [x] Lista completa de serviços/preços → ver [SERVICOS-PRECOS.md](SERVICOS-PRECOS.md)

> Convenção: itens marcados `[PENDENTE DE VALIDAÇÃO]` nos componentes devem
> ser confirmados com a cliente antes de publicar.
