# API de Endereços

API RESTful para gerenciamento de endereços desenvolvida com Node.js e Express.

## Tecnologias

- Node.js
- Express.js
- SQLite3

## Estrutura do Projeto

```
src/
├── config/         # Configuração do banco de dados
├── controllers/    # Controladores das rotas
├── services/       # Lógica de negócio
├── repositories/   # Acesso ao banco de dados
└── routes/         # Definição das rotas
```

## Como executar

```bash
npm install
npm start
```

## Endpoints

- `POST /api/enderecos` - Criar endereço
- `GET /api/enderecos` - Listar todos os endereços
- `GET /api/enderecos/:id` - Buscar endereço por ID
- `PUT /api/enderecos/:id` - Atualizar endereço
- `DELETE /api/enderecos/:id` - Deletar endereço
