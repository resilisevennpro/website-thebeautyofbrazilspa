# Identidade visual e conteúdo — The Beauty of Brazil Spa

> Levantado a partir do site ao vivo (https://thebeautyofbrazilspa.com) em
> 2026-09-21, e confirmado com o backup WordPress (banco de dados via
> UpdraftPlus). Texto completo das páginas em [CONTEUDO-WORDPRESS.md](CONTEUDO-WORDPRESS.md);
> imagens originais (sem thumbnails duplicados) em `src/assets/wordpress-original/`.

## Achado importante: só a Homepage tem conteúdo real

O site é baseado no template Elementor **"Salsa"** (nome do demo aparece
literalmente em textos não editados: "Why Choose Salsa?", endereço fake
"Salsa Office, 478 Vienna, AU"). Das 6 páginas publicadas no WordPress,
**apenas a Homepage foi de fato preenchida** pela cliente/agência anterior.
As demais ainda têm Lorem Ipsum e dados fictícios do template:

| Página | Status |
|---|---|
| Homepage | conteúdo real, completo |
| About Us | placeholder do template ("Salsa"), nunca editado |
| Contact | placeholder do template (endereço/telefone fake) |
| FAQs | Lorem Ipsum, perguntas nunca escritas |
| Our Team | não verificado — provável placeholder também |
| Blog | vazio ("No Content Available") |

**Implicação para a Fase 2 (reestruturação):** não é só sobre melhorar
visual — as páginas internas (Sobre, Contato, FAQ) precisam de narrativa e
conteúdo **criados do zero**, não apenas migrados. Isso deve ser
comunicado à cliente como parte do escopo.

## Marca

- **Nome completo:** The Beauty of Brazil Aesthetics Spa
- **Tagline:** "Indulge in the Ultimate Brazilian Glow Experience"
- **Proprietária:** Christiane Roberts
- **Localização do negócio:** Pembroke Pines, FL — EUA (site primário em
  inglês, atende também público brasileiro/falante de português)

## Paleta e estilo visual

- Base branca/clean, com verde e elementos florais/folhas como acento
- Estilo: tropical e luxuoso, clean, enfatiza resultados visíveis

### Cores exatas (extraídas do Kit Elementor ativo, post ID 421, no dump SQL do backup)

| Papel no kit | Hex | Uso aplicado no projeto |
|---|---|---|
| Primary (kit) | `#08110D` | verde quase-preto — referência, não usado diretamente |
| Secondary (kit) | `#0D1F18` | **verde floresta escuro** — usado como `--foreground` (texto/títulos) e `--secondary` |
| Text (kit) | `#999999` | cinza — base de `--muted-foreground` |
| Accent (kit) | `#FFFFFF` | branco — `--card`, `--input` |
| Custom "New" (kit) | `#C8A15A` | dourado — usado como `--primary` (CTAs, `gold-text`, `gradient-gold`) |

Aplicado em `src/index.css` e `tailwind.config.ts` em 2026-09-21. Os nomes de
classe do projeto (`gold-text`, `gradient-gold`, `shadow-gold`) foram
mantidos por não exigirem refatoração ampla, mas os valores HSL por trás
deles agora são as cores reais do WordPress (dourado `#C8A15A`), com o verde
escuro (`#0D1F18`) aplicado ao texto/foreground e a variantes secundárias.

## Tipografia

- Elegante e moderna, boa hierarquia entre títulos e corpo de texto
- **Fontes exatas (extraídas do Kit Elementor):**
  - Títulos (primary/secondary/accent): **Baskervville** (serifada)
  - Corpo de texto: **Montserrat**
- Aplicado via Google Fonts em `src/index.css`, substituindo Playfair
  Display / Inter / Cormorant Garamond (que eram da Dra. Gabrielle)

## Tom de voz

Sofisticado e acolhedor — mistura expertise técnica com calor pessoal.
Exemplo do site: *"Step into your sanctuary for advanced skincare."*

## Serviços (destaque na home)

- Firming Radiofrequency Treatment
- Body Contour Sculpt
- Signature Glow Facial
- Anti-Aging Facial

Categorias: **Elite Skincare**, **Body Contour**, **Pacotes**

> Lista completa de serviços/preços com descrições: ver [SERVICOS-PRECOS.md](SERVICOS-PRECOS.md)
> (extraída de site externo de agendamento, mais completa que a Homepage)

## Estrutura da página (site atual)

1. Hero — imagem + tagline
2. Sobre — apresentação de Christiane Roberts
3. Serviços em destaque (4 tratamentos com descrição)
4. Categorias (Elite Skincare / Body Contour / Pacotes)
5. CTA — "Click here to Book Your Appointment"

## Contato

- **Telefone:** (954) 405-5414
- **Endereço:** 11070 Pines Blvd Ste C-5, Pembroke Pines, FL 33025
- **Instagram:** @thebeautyofbrazilspa
- **Horário:** Seg–Sex 9h–18h | Sáb 9h–16h

## Idioma — decisão do projeto

O site será **bilíngue** (PT/EN) com toggle de idioma.

- **Idioma primário final (produção, após aprovação):** inglês (EN)
- **Idioma secundário final:** português (PT) — ativado ao clicar no toggle,
  atende clientela brasileira da proprietária
- **Durante o desenvolvimento/testes:** idioma primário exibido é
  **português**, para facilitar revisão pela equipe/cliente; o toggle
  alterna para inglês
- **Antes do lançamento:** inverter o padrão — inglês volta a ser o idioma
  primário exibido no carregamento da página

> Implicação técnica: implementar i18n desde o início (não hardcode de
> texto em um único idioma), com uma flag/config simples para definir qual
> idioma carrega por padrão — troca de PT→EN deve ser trivial na virada
> para produção.
