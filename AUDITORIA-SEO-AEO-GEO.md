# Auditoria SEO, AEO e GEO — thebeautyofbrazilspa.com

Data: 12 de outubro de 2026.

## Achado crítico: o site é só client-side

O projeto é uma SPA em Vite/React, sem SSR nem prerender. O `index.html` enviado ao navegador tem só um título, uma descrição e um JSON-LD genéricos, iguais para qualquer rota. Todo o conteúdo real, título e descrição corretos, os 12 tratamentos, o endereço, o horário, tudo é escrito na página depois, via JavaScript (`usePageMeta`).

Isso importa porque:

- O **Googlebot** executa JavaScript, então a página home e a de serviços são indexadas corretamente por ele hoje.
- Mas **a maioria dos crawlers de IA generativa** (GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot e outros) **não executa JavaScript** na maior parte das vezes. Para eles, o site inteiro aparece como uma página quase vazia: só o script do GTM, um título genérico e um `BeautySalon` sem os tratamentos.

Esse é o item que mais afeta AEO e GEO. Os outros itens abaixo são reais, mas o impacto deles fica limitado enquanto este não for resolvido.

**Como resolver:** pré-renderizar as páginas principais (`/` e `/services`) em HTML estático no build, por exemplo com `vite-plugin-prerender` ou uma etapa de snapshot com Puppeteer. Isso não muda a experiência do usuário, que continua vendo o React normalmente. É uma mudança de infraestrutura do build, não de conteúdo, por isso não apliquei sozinho. Se você aprovar, eu implemento.

---

## SEO

| Item | Situação | Prioridade |
|---|---|---|
| Título e descrição por página | Só funcionam depois do JavaScript rodar. Sem pré-renderização, o crawler sem JS vê sempre o título da home. | Alta (depende do item crítico) |
| `<link rel="canonical">` | Só existe um, fixo para `/`, no `index.html`. A página `/services` nunca recebe o canonical correto, então um buscador pode achar que `/services` é uma cópia da home. | Alta |
| Sitemap (`public/sitemap.xml`) | Tem só duas URLs, sem `<lastmod>`. Funcional, mas incompleto. | Média |
| `robots.txt` | Já libera Googlebot, Bingbot, redes sociais e os principais crawlers de IA. Está bem feito. | Resolvido |
| H1 por página | Um H1 único na home (Hero) e um H1 único em `/services`. Correto. | Resolvido |
| Imagem do Open Graph (`og-image.jpg`) | Existe, mas é quadrada (1440×1440). O formato ideal para preview em WhatsApp, Facebook e LinkedIn é 1200×630. | Baixa |
| `lang` do HTML | Corrigido via JavaScript (`pt-BR`, `en`, `es`), mas o `index.html` estático sempre diz `en`. Mesma causa raiz do item crítico. | Média |

---

## AEO (ser citado em respostas de IA como ChatGPT e Perplexity)

| Item | Situação | Prioridade |
|---|---|---|
| Acesso dos crawlers de IA | `robots.txt` já libera todos. Vocês estão à frente da maioria dos concorrentes nesse ponto. | Resolvido |
| Conteúdo visível para esses crawlers | Praticamente vazio, pelo motivo do item crítico acima. | Alta |
| `FAQPage` schema | Não existe ainda. Só faz sentido depois de ter perguntas e respostas reais no site, não um FAQ genérico. | Média, depende de conteúdo |
| `Service` schema por tratamento | Não existe. O JSON-LD atual só descreve a clínica (`BeautySalon`), sem listar os 12 tratamentos como entidades próprias. | Média |
| Conteúdo em formato pergunta e resposta | Hoje o texto é todo descritivo. Nenhum trecho responde diretamente a perguntas como "quanto tempo dura o Diamond Radiance Facial?" ou "o Nano Infusion Facial serve para pele sensível?". IA generativa prefere citar texto que já responde a uma pergunta direta. | Média |

---

## GEO (aparecer como referência em respostas geradas por IA, de forma mais ampla que AEO)

| Item | Situação | Prioridade |
|---|---|---|
| Depoimentos e avaliações | Não existem no site. Avaliações reais pesam bastante para IA generativa decidir citar um negócio local. Já está marcado como pendente no `REESTRUTURACAO.md`, aguardando a Christiane. | Alta, depende da Christiane |
| `aggregateRating` no schema | Corretamente ausente, já que não há avaliações reais ainda. Não inventar isso. | Não aplicável agora |
| Dados de entidade (endereço, telefone, horário) | Presentes no JSON-LD e no texto, mas invisíveis para crawlers sem JS, pelo mesmo motivo do item crítico. | Alta (depende do item crítico) |
| Conteúdo estruturado e factual | O texto do site é bem escrito, mas, como citado acima, não está em formato de respostas diretas, o que ajuda menos a IA generativa a extrair fatos específicos. | Média |

---

## O que eu recomendo fazer, em ordem

1. **Pré-renderizar `/` e `/services`.** É o item que destrava todo o resto. Preciso da sua aprovação, porque muda a configuração de build.
2. **Corrigir o canonical por rota**, junto com a pré-renderização.
3. **Adicionar `Service` schema para os 12 tratamentos**, sem valores, usando as descrições que já existem no site. Posso fazer isso agora, sem depender da pré-renderização.
4. **Atualizar o sitemap** com `<lastmod>`. Posso fazer agora.
5. **Trocar o `og-image.jpg`** por uma versão 1200×630. Preciso de uma imagem nova, ou posso recortar a atual.
6. **Pedir à Christiane depoimentos reais** para avaliações. Isso já está pendente desde antes.
7. **Criar uma seção de perguntas frequentes reais**, depois que eu tiver as perguntas mais comuns dos leads. Isso também vira `FAQPage` schema.

Os itens 3 e 4 eu posso implementar agora, sem decisão sua. Os itens 1 e 2 dependem da sua aprovação, porque mudam a infraestrutura do projeto. Os itens 5, 6 e 7 dependem de material que só você ou a Christiane têm.

Quer que eu comece pelos itens 3 e 4?
