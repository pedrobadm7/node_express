/*Cria o banco de dados*/
CREATE DATABASE mycontacts;

/*Crie a extensão apenas se ela não existir*/
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

/*Criando a tabela categoria apenas se ela não existis*/
CREATE TABLE IF NOT EXISTS categories (
  /**Coluna id vai receber informação do tipo UUID, não vazia e unica, passamos um valor default e quando não inserirmos um ID, o própŕio postgres passará um id default uuid_generate_v4();*/
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  /*Coluna name vai receber o tipo VARCHAR (string), não vazia*/
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS contacts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE,
  phone VARCHAR,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES categories(id)
);
