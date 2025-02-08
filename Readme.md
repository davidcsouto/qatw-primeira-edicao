# QA Tech Week - Primeira Edição

Bem-vindo ao repositório do **QA Tech Week - Primeira Edição**! Aqui você encontrará as instruções para configurar o ambiente, subir os serviços necessários e rodar os testes automatizados com Playwright.

## 📌 Pré-requisitos
Antes de começar, certifique-se de ter os seguintes softwares instalados em seu sistema:

- [Git for Windows](https://gitforwindows.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js (versão LTS)](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Guia de Instalação do Docker Dekstop](https://dev.to/papitofernando/instalando-o-docker-no-windows-10-home-ou-professional-com-wsl-2-26m3)

## 🚀 Configuração do Ambiente
1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/qa-tech-week.git
   cd qa-tech-week
   ```

2. Instale as dependências do projeto:
   ```sh
   npm install
   ```

## 🐳 Subindo o Ambiente com Docker Compose
O projeto utiliza Docker Compose para gerenciar os serviços necessários para os testes.

1. Certifique-se de que o Docker Desktop está em execução.
2. No terminal, execute o comando abaixo para subir os serviços:
   ```sh
   docker-compose up -d
   ```
3. Para verificar se os contêineres estão rodando:
   ```sh
   docker ps
   ```
4. Para parar os serviços:
   ```sh
   docker-compose down
   ```

## 🧪 Executando os Testes com Playwright

1. Instale as dependências do Playwright:
   ```sh
   npx playwright install
   ```
2. Para rodar os testes localmente:
   ```sh
   npx playwright test
   ```
3. Para visualizar o relatório dos testes após a execução:
   ```sh
   npx playwright show-report
   ```
4. Para rodar os testes em modo UI (visualizando a execução):
   ```sh
   npx playwright test --ui
   ```

## 🤝 Contribuição
Sinta-se à vontade para abrir issues e pull requests para melhorias no projeto!

## 📄 Licença
Este projeto está sob a licença MIT.
