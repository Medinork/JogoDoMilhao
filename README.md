# JogoDoMilhao
Criação de um jogo de perguntas e respostas que concede uma pontuação final, desenvolvido em React e node

1 criar banco

CREATE DATABASE jogo_milhao;

use jogo_milhao;

CREATE TABLE categories (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(255) NOT NULL

);

CREATE TABLE questions (

    id INT AUTO_INCREMENT PRIMARY KEY,

    category_id INT NOT NULL,

    question TEXT NOT NULL,

    options JSON NOT NULL,

    answer VARCHAR(255) NOT NULL,

    tip TEXT,

    FOREIGN KEY (category_id) REFERENCES categories(id)
);


2 adicionar os dados ao banco de dados

rode o comando

cd backend/config

node populateDatabase.js



3 roda back:

cd backend

npm i

npx nodemon server.js


4 rodar front:

cd quiz

npm i

npm run dev


!!!VERSÃO ZIPADA!!!

funcional mas não possui DBmySQL


para rodar use:

npm i

npm run dev

