# ACSRAIZES: tecnologias e execução

## Tecnologias

- **React 19:** componentes e renderização da interface.
- **Vite 7:** servidor de desenvolvimento e build de produção.
- **CSS nativo:** responsividade, Grid, Flexbox e acessibilidade.
- **Motion:** animações e transições suaves.
- **Phosphor Icons:** ícones da interface.
- **Google Drive:** origem das fotografias, armazenadas localmente em `public/images/`.
- **WhatsApp e Instagram:** canais externos de contato.

## Skills utilizadas

- `senior-fullstack-mentor`: implementação, diagnóstico e validação técnica.
- `design-taste-frontend`: composição, hierarquia e consistência visual.
- `apple-design`: movimentos, feedback tátil e acessibilidade.
- `google-drive`: acesso e seleção das fotografias.
- `control-in-app-browser`: apoio à validação da interface.

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm run dev
```

Abra o endereço apresentado pelo Vite, normalmente:

```text
http://127.0.0.1:5173/
```

> Não abra o `index.html` diretamente e não utilize o Live Server. O projeto precisa ser executado pelo Vite.

## Build de produção

```bash
npm run build
npm run preview
```

O build é gerado no diretório `dist/`.

## Estrutura principal

```text
public/images/    Fotografias da marca
src/App.jsx       Componentes e conteúdo
src/main.jsx      Inicialização do React
src/styles.css    Estilos e responsividade
index.html        HTML principal e metadados
package.json      Dependências e scripts
```
