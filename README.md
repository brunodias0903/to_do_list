# Todo List Application

A full-stack Todo List application with internationalization support for English (en-US) and Portuguese (pt-BR).

## 🇺🇸 English (en-US)

### Overview

This Todo List application is a full-stack project built with modern web technologies. It features a React frontend and a Node.js backend, with complete internationalization support for English and Portuguese languages.

### Features

- ✅ Create, read, update, and delete todos
- ✅ Mark todos as completed
- ✅ Language switching between English and Portuguese
- ✅ Dark/Light mode with custom color themes
- ✅ Responsive design for all devices
- ✅ RESTful API with proper error handling
- ✅ Data persistence with SQLite database
- ✅ Comprehensive test coverage

### Project Structure

```
/to_do_list
├── backend/           # Node.js Express backend
│   ├── src/           # Source code
│   │   ├── controllers/  # Request handlers
│   │   ├── database/     # Database configuration
│   │   ├── models/       # Data models
│   │   ├── routes/       # API routes
│   │   ├── app.ts        # Express app setup
│   │   └── server.ts     # Server entry point
│   └── ...
└── frontend/          # React frontend
    ├── public/        # Static assets
    ├── src/           # Source code
    │   ├── api/       # API integration
    │   ├── components/# React components
    │   ├── hooks/     # Custom React hooks
    │   ├── i18n/      # Internationalization
    │   ├── store/     # State management
    │   └── types/     # TypeScript types
    └── ...
```

### Tech Stack

#### Frontend
- React with TypeScript
- Zustand for state management
- React Query for data fetching
- Internationalization (i18n) support
- Vitest and Testing Library for testing

#### Backend
- Node.js with Express
- TypeScript
- SQLite database
- MVC architecture

### Getting Started

#### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

#### Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/brunodias0903/to_do_list.git
   cd to_do_list
   ```

2. Set up the backend:
   ```
   cd backend
   npm install
   # or
   yarn
   ```

3. Set up the frontend:
   ```
   cd ../frontend
   npm install
   # or
   yarn
   ```

4. Start the backend server:
   ```
   cd ../backend
   npm run dev
   # or
   yarn dev
   ```

5. Start the frontend development server:
   ```
   cd ../frontend
   npm run dev
   # or
   yarn dev
   ```

6. Open your browser and navigate to `http://localhost:5173`

### API Endpoints

- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get a specific todo
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

---

## 🇧🇷 Português (pt-BR)

### Visão Geral

Esta aplicação de Lista de Tarefas é um projeto full-stack construído com tecnologias web modernas. Apresenta um frontend React e um backend Node.js, com suporte completo de internacionalização para os idiomas inglês e português.

### Funcionalidades

- ✅ Criar, ler, atualizar e excluir tarefas
- ✅ Marcar tarefas como concluídas
- ✅ Alternar entre os idiomas inglês e português
- ✅ Modo claro/escuro com temas de cores personalizados
- ✅ Design responsivo para todos os dispositivos
- ✅ API RESTful com tratamento adequado de erros
- ✅ Persistência de dados com banco de dados SQLite
- ✅ Cobertura abrangente de testes

### Estrutura do Projeto

```
/to_do_list
├── backend/           # Backend Node.js Express
│   ├── src/           # Código fonte
│   │   ├── controllers/  # Manipuladores de requisições
│   │   ├── database/     # Configuração do banco de dados
│   │   ├── models/       # Modelos de dados
│   │   ├── routes/       # Rotas da API
│   │   ├── app.ts        # Configuração do app Express
│   │   └── server.ts     # Ponto de entrada do servidor
│   └── ...
└── frontend/          # Frontend React
    ├── public/        # Arquivos estáticos
    ├── src/           # Código fonte
    │   ├── api/       # Integração com API
    │   ├── components/# Componentes React
    │   ├── hooks/     # Hooks React personalizados
    │   ├── i18n/      # Internacionalização
    │   ├── store/     # Gerenciamento de estado
    │   └── types/     # Tipos TypeScript
    └── ...
```

### Stack Tecnológica

#### Frontend
- React com TypeScript
- Zustand para gerenciamento de estado
- React Query para busca de dados
- Suporte à internacionalização (i18n)
- Vitest e Testing Library para testes

#### Backend
- Node.js com Express
- TypeScript
- Banco de dados SQLite
- Arquitetura MVC

### Começando

#### Pré-requisitos
- Node.js (v14 ou superior)
- npm ou yarn

#### Configuração e Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/brunodias0903/to_do_list.git
   cd to_do_list
   ```

2. Configure o backend:
   ```
   cd backend
   npm install
   # ou
   yarn
   ```

3. Configure o frontend:
   ```
   cd ../frontend
   npm install
   # ou
   yarn
   ```

4. Inicie o servidor backend:
   ```
   cd ../backend
   npm run dev
   # ou
   yarn dev
   ```

5. Inicie o servidor de desenvolvimento do frontend:
   ```
   cd ../frontend
   npm run dev
   # ou
   yarn dev
   ```

6. Abra seu navegador e acesse `http://localhost:5173`

### Endpoints da API

- `GET /api/todos` - Obter todas as tarefas
- `GET /api/todos/:id` - Obter uma tarefa específica
- `POST /api/todos` - Criar uma nova tarefa
- `PUT /api/todos/:id` - Atualizar uma tarefa
- `DELETE /api/todos/:id` - Excluir uma tarefa