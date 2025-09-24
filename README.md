# Iniciando com Create React App

Este projeto foi criado com [Create React App](https://github.com/facebook/create-react-app) e utiliza **React 18**, **React Router DOM** para navegação e **Redux Toolkit** para gerenciamento de estado.

## Estrutura do Projeto

- `src/`
  - `components/` → Componentes reutilizáveis (ex.: `LoadingSpinner`).
  - `pages/` → Páginas do aplicativo (ex.: `Home`, `About`, `Eligibility`).
  - `routes/` → Configuração das rotas da aplicação (`AppRoutes.jsx`, `ProtectedRoute.jsx`).
  - `store/` → Redux store e slices (`eligibilitySlice.js`).
  - `App.jsx` → Componente principal que integra as rotas.

## Funcionalidades principais

### Gerenciamento de estado com Redux

- Usamos **Redux Toolkit** para criar slices e gerenciar estados de forma moderna e simples.
- `eligibilitySlice` controla a verificação de elegibilidade do usuário.
- O estado inclui:
  - `checked`: se a verificação já foi realizada.
  - `eligible`: se o usuário está elegível para acessar a aplicação.
  - `loading`: indica se a requisição de elegibilidade está em andamento.
- As páginas e rotas protegidas utilizam **hooks do Redux** (`useSelector`, `useDispatch`) para acessar e disparar ações.
- A checagem de elegibilidade é feita com um **mock de requisição AJAX** usando `createAsyncThunk`.

### Rotas protegidas

- A navegação é controlada pelo componente `ProtectedRoute`, que bloqueia o acesso às rotas principais (`Home`, `About`) até que o usuário seja elegível.
- Se o usuário não for elegível, é exibida a página `Eligibility` antes de acessar qualquer outra rota.
- A rota `/` serve como rota padrão e redireciona automaticamente dependendo da elegibilidade.

### Componentes de UI

- `LoadingSpinner` → Spinner circular animado exibido enquanto a verificação de elegibilidade está em andamento.
- `Eligibility` → Página que exibe título, descrição e botão para disparar manualmente a verificação.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`
Inicia o aplicativo em modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `npm test`
Inicia o executador de testes em modo interativo (watch mode).

### `npm run build`
Cria uma versão otimizada para produção na pasta `build`.

### `npm run eject`
**Atenção:** operação irreversível; permite controle total sobre configurações do projeto.

## Aprenda Mais

- [Documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- [Documentação do React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

### Divisão de Código (Code Splitting)
Mais informações: [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Análise do Tamanho do Pacote
Mais informações: [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Transformando em PWA (Progressive Web App)
Mais informações: [PWA](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Configuração Avançada
Mais informações: [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Publicação / Deploy
Mais informações: [Deployment](https://facebook.github.io/create-react-app/docs/deployment)

### Problemas ao executar `npm run build`
Se ocorrer erro de minificação, veja [troubleshooting](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)