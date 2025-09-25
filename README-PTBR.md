# n8n-nodes-random

![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

| Idioma | Arquivo |
|---|---|
| English 🇬🇧/🇺🇸| [README](README.md) |
| Português 🇵🇹/🇧🇷| [README-PTBR](README-PTBR.md) |

Esse é um conector comunitário da n8n. Ele permite você utilizar a [API do Random.org](https://www.random.org/integers/) para gerar verdadeiros números aleatórios entre dois valores em seus fluxos n8n.

[n8n](https://n8n.io/) é uma plataforma de automação de fluxo de trabalho [licenciada com código justo](https://docs.n8n.io/reference/license/).

## Índice

- [Pré-requisitos](#prerequisitos)
- [Instalação](#instalação)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Uso](#uso)
- [Desenvolvendo](#desenvolvendo)
- [Recursos](#recursos)
- [Licença](#licença)

---

## Pré-requisitos

Você precisa do seguinte instalado na sua máquina de desenvolvimento:

* [Git](https://git-scm.com/downloads)
* Node.js and npm. Versão mínima Node 20.
  - Linux/Mac: [nvm - Node Version Manager](https://github.com/nvm-sh/nvm).
  - Windows: [NodeJS - Guia Microsoft](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
* [Docker](https://www.docker.com/) and Docker Compose
* Instale n8n globalmente:
    ```
    npm install n8n -g
    ```

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/marcosware/n8n-nodes-random.git
    cd n8n-nodes-random
    ```
2. Execute `npm install` para instalar dependências.
3. Execute `npm run build` para construir o código Typescript.
4. Execute `docker-compose up -d` para iniciar os Serviços Docker com a configuração padrão.
5. Acesse n8n em `http://localhost:5678`.

## Variáveis de Ambiente

Se rodando n8n via Docker, você pode configurar as variáveis de mabiente em um arquivo .env ou diretamente no docker-compose.yml:
```bash
    GENERIC_TIMEZONE=America/Sao_Paulo
    TZ=America/Sao_Paulo
    N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
    N8N_RUNNERS_ENABLED=true
    DB_TYPE=postgresdb
    DB_POSTGRESDB_HOST=postgres
    DB_POSTGRESDB_PORT=5432
    DB_POSTGRESDB_DATABASE=n8n_db
    DB_POSTGRESDB_USER=n8n_user
    DB_POSTGRESDB_PASSWORD=n8n_password
    N8N_CUSTOM_EXTENSIONS=/home/node/.n8n/custom
```
Isso garante que o n8n conecte corretamente ao banco de dados e carregue seus conectores personalizados.

## Uso

1. Adicione o node `Random` ao seu workflow.
2. Configure os campos:
   - Min: menor valor possível para o número aleatório.
   - Max: maior valor possível para o número aleatório.
   - Os valores não podem ser iguais.
3. Conecte ao próximo node para usar o número gerado.
4. Execute o workflow.

## Desenvolvendo

* Adicione novos conectores na pasta /nodes e credenciais na pasta /credentials.
* Atualize a seção "n8n" em package.json para incluí-los.
* Construa utilizando:
    ```
    npm run build
    ```
* Reinice o container do Docker para testar suas mudanças.
* Use `npm run lint` para verificar se há erros, ou `npm run lintfix` para automaticamente corrigir erros.
* Verifique o guia de criação de conectores da n8n

## Recursos

* [Documentação de conectores comunitários da n8n](https://docs.n8n.io/integrations/#community-nodes)
* [Documentação da API da Random.org](https://www.random.org/clients/http/)

## Licença

[MIT](https://github.com/n8n-io/n8n-nodes-starter/blob/master/LICENSE.md)
