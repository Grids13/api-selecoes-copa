API CRUD de Seleções da Copa ⚽

Esta API foi construída com Node.js, Express e MySQL, com o objetivo de permitir o gerenciamento de seleções de futebol que participarão da Copa, juntamente com o grupo ao qual cada seleção pertence.

🚀 Tecnologias Utilizadas
 - Node.js: Ambiente de execução para JavaScript no backend.

 - Express: Framework para criar APIs REST de forma simples e rápida.

 - MySQL: Banco de dados relacional para armazenar informações sobre as seleções.

 - Nodemon: Ferramenta de desenvolvimento que reinicia automaticamente o servidor quando há alterações no código.

 🔧 Instalação

1️⃣ Passo: Clone o repositório

 Clone este repositório para o seu computador com o comando abaixo:
  
   -git clone https://github.com/usuario/repositorio.git

2️⃣ Passo: Instale as dependências

Entre no diretório do projeto e instale as dependências utilizando o npm:

-cd nome-do-repositorio

-npm install

3️⃣ Passo: Configuração do Banco de Dados

Certifique-se de que o MySQL esteja instalado e rodando localmente.

- Crie o banco de dados bdcopa:

  -CREATE DATABASE bdcopa;

- Crie a tabela selecoes:

   -CREATE TABLE selecoes (

   id INT AUTO_INCREMENT PRIMARY KEY,

   selecao VARCHAR(255) NOT NULL,

   grupo VARCHAR(10) NOT NULL
);

4️⃣ Passo: Conectar ao Banco de Dados

No arquivo database/conexao.js, configure a conexão com o banco de dados. O código já está pronto, então basta garantir que o MySQL esteja rodando na sua máquina e com as credenciais corretas.

<pre> ```javascript import mysql from 'mysql'; const conexao = mysql.createConnection({ host: 'localhost', port: 3306, user: 'root', password: 'sua_senha_aqui', // Altere para a sua senha do MySQL database: 'bdcopa' }); conexao.connect(err => { if (err) { console.error('Erro ao conectar ao MySQL:', err.message); return; } console.log('Conectado ao MySQL!'); }); export const consult = (sql, values = "") => { return new Promise((resolve, reject) => { conexao.query(sql, values, (error, result) => { if (error) return reject(error); const rows = JSON.parse(JSON.stringify(result)); return resolve(rows); }); }); }; export default conexao; ``` </pre>

5️⃣ Passo: Executando a API

Para rodar a aplicação, utilize o comando:

-npm run dev

