/* Conectando o Node ao Banco de Dados */
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

/* Conecta o Node ao Banco de fato */
client.connect();

/* Função responsável para executar queries no banco de dados, a query
executada abaixo pega todas as informações da tabela contacts */
exports.query = async (query) => {
  const { rows } = await client.query(query);
  return rows;
};
