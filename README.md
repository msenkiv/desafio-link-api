# Teste Link API
#### Desafio proposto

- Criar uma integração entre as plataformas Pipedrive e Bling( A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).
- Criar banco de dados mongo, existem serviços como MongoDB Atlas para criar de graça
- Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.
- Criar endpoint para trazer os dados consolidados da collection do MongoDB.

## Endpoints

| Descrição | Rota | Metodo |
| ------ | ------ | ------ |
| Transfere os dados da pipedrive para a bling | /api/integration/deal | POST
| Busca os dados das oportunidades inseridas no Bling | /integration/list/deal | GET



## Instalação

Requer [Node.js](https://nodejs.org/) v12+

Acessar a pasta onde foi clonado o projeto e executar

```sh
npm i
```

Para startar o projeto. (Nenhuma configuração de ambiente é necessária, as chaves estão fixadas "Hard code" no código)

```sh
npm  start
```

O servidor iniciará em http://localhost:8080

## Racional utilizado no desenvolvimento

Foquei em realizar o teste de uma maneira mais objetiva. Opetei em focar em uma arquitetura mais simples, para focar na clareza e objetividade do código. Procurei separar os contextos de forma que fique fácil a leitura. As libs utilizadas foram
 - Express 
 - Mongoose 
 - Axios
 - jsontoxml

