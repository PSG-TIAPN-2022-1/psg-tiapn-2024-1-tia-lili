COMO EXECUTAR O PROJETO BAIXADO
Instalar todas as dependencias indicada pelo package.json
### npm install

Criar a base de dados "tia_lili" no banco de dados MySQL, necessário ter o MySQL instalado na máquina e rodando.
### CREATE DATABASE tia_lili CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Alterar no projeto as credenciais do banco de dados no arquivo ".env" 

Executar as migrations
### npx sequelize-cli db:migrate

Executar o projeto
### node app.js

SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Criar a base de dados
### CREATE DATABASE tia_lili CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Sequelize é uma biblioteca Javascript que facilita o gerenciamento do banco de dados SQL
### npm install --save sequelize

Instalar o drive do banco de dados
### npm install --save mysql2

Sequelize-cli interface de linha de comando usada para criar modelos, configurações e arquivos de migração para bancos de dados
### npm install --save-dev sequelize-cli

Iniciar o Sequelize-cli e criar o arquivo config
### npx sequelize-cli init

Executar o projeto
### node app.js

Manipular variáveis de ambiente
### npm install --save dotenv

Criar a migration
### npx sequelize-cli migration:generate --name name

Executar as migrations
### npx sequelize-cli db:migrate

Executar down - rollback - Permite que seja desfeita a migration, permitindo a gestão das alterações do banco de dados, versionamento.
### npx sequelize-cli db:migrate:undo --name nome-da-migration






Criar a Models tipo_carnes
### npx sequelize-cli model:generate --name TIPO_CARNES --attributes nome:string,valor_p:double,valor_g:double,image:string

Criar a Models acompanhamentos
### npx sequelize-cli model:generate --name ACOMPANHAMENTOS --attributes nome:string,descricao:string

Criar a Models bebidas
### npx sequelize-cli model:generate --name BEBIDAS --attributes nome:string,descricao:string,valor:double

Criar a Models clientes
### npx sequelize-cli model:generate --name CLIENTES --attributes nome:string,endereco:string,telefonde:string

Criar a Models usuarios
### npx sequelize-cli model:generate --name USUARIOS --attributes nome:string,endereco:string,telefonde:string,senha:password_hash,char,email:string

Criar a Models itens
### npx sequelize-cli model:generate --name USUARIOS --attributes nome:string,endereco:string,telefonde:string,senha:password_hash,char,email:string

Criar a Models pedidos
### npx sequelize-cli model:generate --name PEDIDOS --attributes pagamento:int,tipo_carne:int,bebida:



### npm install cors
