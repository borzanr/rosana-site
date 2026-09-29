# Site — Rosana Borzan, Psicóloga e Neuropsicóloga

Proposta de novo site para **rosanaborzan.com.br**, otimizado para busca local (Granja Viana / Cotia) e conversão via WhatsApp.

Prévia: **https://rosana.borzanti.com**

HTML + CSS estáticos, sem etapa de build. Hospedado no GitHub Pages.

## Estrutura

| Caminho | Página |
|---|---|
| `/` | Início (hero, atendimentos, sobre, livros, consultório, FAQ, contato) |
| `/sobre/` | Trajetória, formação e livros |
| `/psicoterapia/` | Psicoterapia individual (Terapia do Esquema, TCC, DBT) |
| `/avaliacao-neuropsicologica/` | Avaliação neuropsicológica |
| `/grupo-dbt/` | Grupo de Treinamento de Habilidades DBT |
| `/palestras/` | Palestras e workshops |
| `/grupodbt/` | Redireciona a URL antiga do Wix para `/grupo-dbt/` |
| `404.html` | Página de erro (caminhos absolutos, servida em qualquer URL) |

Estilos em `assets/css/style.css`; menu mobile e formulário→WhatsApp em `assets/js/main.js`; imagens em `assets/img/` (copiadas do site Wix).

## Publicar a prévia (GitHub Pages)

1. Criar o repositório no GitHub e enviar estes arquivos para a branch `main`.
2. **Settings → Pages → Build and deployment**: *Deploy from a branch*, `main` / `(root)`.
3. **Custom domain**: `rosana.borzanti.com` (o arquivo `CNAME` já está no repositório). Marcar **Enforce HTTPS** quando liberar.
4. No DNS de `borzanti.com`, criar o registro:

   | Tipo | Nome | Valor |
   |---|---|---|
   | CNAME | `rosana` | `<usuario-github>.github.io` |

## Modo prévia

A prévia **não deve ser indexada** para não competir com o domínio oficial:

- todas as páginas têm `<meta name="robots" content="noindex, nofollow">` (marcado com o comentário `PRÉVIA`);
- `robots.txt` bloqueia tudo;
- `canonical`, `og:url` e dados estruturados já apontam para `https://www.rosanaborzan.com.br`.

## Checklist para ir ao ar no domínio oficial

- [ ] Remover as linhas `noindex` marcadas com `PRÉVIA` (todas as páginas, exceto `grupodbt/` e `404.html`).
- [ ] Trocar o `robots.txt` pelo conteúdo indicado no próprio arquivo.
- [ ] Trocar o `CNAME` para `www.rosanaborzan.com.br` e apontar o DNS.
- [ ] Trocar `https://rosana.borzanti.com/assets/img/` por `https://www.rosanaborzan.com.br/assets/img/` (usado em `og:image` e nos dados estruturados).
- [ ] Cadastrar o site e o `sitemap.xml` no Google Search Console.
- [ ] Criar/atualizar o Perfil da Empresa no Google apontando para o site.

## A confirmar com a Dra. Rosana

- Textos novos escritos para a prévia (psicoterapia, avaliação, palestras, FAQ) — revisar tom e precisão.
- Avaliação neuropsicológica: faixas etárias atendidas, nº médio de sessões, se emite laudo.
- Emissão de recibo para reembolso de convênio (pode virar item do FAQ).
- Grupo DBT: valor e datas da próxima turma.
- Depoimento de paciente foi **retirado** por cautela com o Código de Ética do CFP.
- Capas dos livros (fotos) para substituir os cartões tipográficos.
