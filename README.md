# Adopets API

- Instruções para usar a API.
- A aplicação Frontend pode ser visualizada [neste link](https://stackblitz.com/edit/react-ad28nx).
- O usuário inicial pra teste é fulano@email.com, senha 123.

## Registro

```bash
POST /api/auth/register

- name
- email
- password
```

## Login

```bash
POST /api/auth/login

- email
- password
```

## Logout

```bash
POST /api/auth/logout

- refreshToken
```

## Produtos (Listar, pesquisar)

```bash
GET /api/products

? page (paginação)
? search (pesquisa)
```

## Produtos (Criar, atualizar, excluir)

```bash
POST /api/products
PUT /api/products
DELETE /api/products
```

## Produtos (Por categoria)
```bash
POST /api/products/category/:name
```

## Considerações
O log da aplicação é armazenado em /tmp/adopets.log;
A aplicação está armazenada no Heroku, que limpa o diretório tmp diariamente.

## License
[MIT](https://choosealicense.com/licenses/mit/)
