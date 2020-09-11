# Cadastro de Funcionários 👨🏽‍💼 🧑🏻‍🏫 👩🏻‍⚖️ 👩🏿‍⚖️

>Cadastre, edite, exclua e liste seus funcionários

[![Author](https://img.shields.io/badge/author-EdersonDav-000000?style=flat-square)](https://github.com/EdersonDav)

## Visualização do sistema
</br>
<!-- <p align="center"><img src=".github/Sistema_Compras.gif?raw=true" width="500"/></p> -->

---

# 📌 Índice

- [Recursos](#-recursos)
- [Instalação](#-instalação)
- [Começando](#-começando)
- [Tecnologias Usadas](#-tecnologias-usadas)
- [Créditos](#-créditos)

# 🚀 Recursos

- ➕ Adicionar funcionários e cargos.
- ❌ Deletar funcionários e cargos.
- ⚙️ Editar funcionários e cargos.
- 📄 Listar funcionários e cargos.

# 👷🏿 Instalação

**Você precisa instalar o [Node.js](https://nodejs.org/en/download/) e o [yarn](https://yarnpkg.com/) em sua máquina, para clonar o projeto via HTTPS, execute este comando:**

`git clone https://github.com/EdersonDav/cadastro_de_funcionaros.git`

### 🐘 Banco de dados - Postgress

**Para esse projeto foi utilizaso o banco de dados [Postgres](https://www.postgresql.org/), recomendo utilizado para melhor funcionalidade do projeto**

###### [Tutorial de como baixar e instalar o Postgres](https://www.devmedia.com.br/instalando-postgresql/23364)

**Depois de ter instalado o Postgres crie um banco com o nome que desejar, e copie o nome do banco e a senha do seu Postgres, para utilizarmos no projeto**

### Instalação de dependências

**No terminal dentro do projeto clonado, entre na pasta server e execute o comando**

`yarn`

**No terminal retorne para a pasta raiz do projeto e depois entre na pasta cliente e execute o comando**

`yarn`

# 🏃🏿 Começando

### Iniciar servidor

**Dentro do projeto na pasta server edite o arquivo `ormconfig.json` adicionando a senha do seu banco postgres e o nome do seu banco que foi criado.**

**No terminal dentro da pasta server execute o seguinte comando para ser criada as tabelas e relacionamento no seu banco**

`yarn typeorm migration:run`

**No terminal dentro da mesma pasta execute o seguinte comando para iniciar o servidor**

`yarn dev:server`

### Iniciar cliente

**No terminal dentro da pasta client execute o seguinte comando para iniciar a aplicação no browser**

`yarn start`

### Adicione os cargos e depois adicione os funcionarios 🎉

# 👨🏿‍💻 Tecnologias Principais
* [ReactJS](https://pt-br.reactjs.org/)
* [NodeJs](https://nodejs.org/en/)
* [Postgres](https://www.postgresql.org/)

# ☕ Créditos

## <i>Ederson Davi</i>

[Github](https://github.com/EdersonDav) 👨🏿‍🎓🚀

[LinkedIn](https://www.linkedin.com/in/silvaedersonqueiroz) 👨🏿‍👔