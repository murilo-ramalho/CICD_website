# Implementação de um CRUD com Login e Integração CI/CD

## Objetivo
Nesta atividade, os alunos deverão implementar um CRUD para gerenciar usuários, com funcionalidade de login, utilizando **HTML**, **JavaScript**, e testes unitários. Além disso, a solução deverá ser integrada com uma pipeline de **CI/CD** no **GitHub Actions**.

### Grupo
- Murilo Ramalho da Mata
- Camila Gomes da Silva Casa

## Requisitos

### Frontend
- Desenvolver as interfaces em **HTML** com o uso de **CSS** e **JavaScript**.
- Criar interfaces de **login**, **cadastro**, **edição**, e **exclusão** de usuários.
- Utilizar o **LocalStorage** do navegador para simular a persistência de dados.

### Funcionalidades CRUD
- **Login de usuário:** Permitir que o usuário faça login com um e-mail e senha previamente cadastrados.
- **Cadastro de usuários:** Permitir o registro de novos usuários, validando dados como e-mail único e senha segura.
- **Edição de usuário:** Implementar a funcionalidade para que o usuário edite seus dados.
- **Exclusão de usuário:** Possibilitar a exclusão de um usuário.

### Testes Unitários
- Utilizar **Jest** para criar testes unitários que validem as principais funções do CRUD:
  - **Login**
  - **Cadastro**
  - **Edição**
  - **Exclusão**
- Verificar a persistência dos dados no **LocalStorage**.

### CI/CD com GitHub Actions
- Configurar uma pipeline no **GitHub Actions** que execute os testes unitários automaticamente a cada **push** ou **pull request** no repositório.

O pipeline deve:
- Instalar as dependências.
- Executar os testes.
- Fornecer relatórios sobre a execução dos testes.

## Passo a Passo

### 1. Criação do Repositório no GitHub
- Criar um repositório no **GitHub** onde o projeto será desenvolvido.
- O repositório deve conter um **README** explicativo com instruções sobre a execução do projeto e os testes.

### 2. Estruturação do Projeto
- Organizar o projeto em pastas como:
  - **src/** para os arquivos HTML e JavaScript.
  - **tests/** para os testes unitários.
- Criar as páginas HTML:
  - **login.html**
  - **cadastro.html**
  - **usuarios.html**

### 3. Funcionalidades com JavaScript
- **Login:** Implementar o sistema de login verificando os dados no LocalStorage.
- **Cadastro:** Salvar novos usuários no LocalStorage e fazer validações básicas.
- **Edição e Exclusão:** Permitir que os usuários façam alterações e removam seus registros.

### 4. Escrita dos Testes com Jest
Criar testes para verificar:
- O correto funcionamento do **login**.
- O processo de **criação**, **edição** e **exclusão** de usuários.
- A persistência dos dados no **LocalStorage**.

### 5. Integração com CI/CD no GitHub Actions
Criar o arquivo `.github/workflows/ci.yml` no repositório para configurar o pipeline do **GitHub Actions**.

- O pipeline deve:
    - Rodar automaticamente a cada **push** ou **pull request**.
    - Instalar dependências e executar os testes com **Jest**.

### 6. Exemplo de configuração do pipeline:

- Entregáveis:
    - Código fonte do projeto hospedado no GitHub.
    - Pipeline CI/CD funcionando no GitHub Actions, rodando os testes automaticamente.
    - Relatório final explicando a implementação e os testes unitários.

## Avaliação:
- Funcionalidade do CRUD e do sistema de login.
- Qualidade e abrangência dos testes unitários.
- Corretude e completude do pipeline CI/CD.
