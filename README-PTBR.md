![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-random

Esse é um conector n8n comunitário. Ele permite você utilizar a Random.org API para gerar um número inteiro em uma faixa entre dois valores em seus workflows n8n.

[n8n](https://n8n.io/) é uma plataforma de automação de workflow [licenciado com fair-code](https://docs.n8n.io/reference/license/).

[Instalação](#instalação)  
[Uso](#uso)  
[Recursos](#recursos)  
[Licença](#licença)  

## Pré-requisitos

Você precisa do seguinte instalado em sua máquina de desenvolvimento:

* [Git](https://git-scm.com/downloads)
* Node.js and npm. Versão mínima Node 20.
  - Linux/Mac: [nvm - Node Version Manager](https://github.com/nvm-sh/nvm).
  - Windows: [NodeJS - Guia Microsoft](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
* [Docker](https://www.docker.com/) and Docker Compose
* Instale n8n com:
  ```
  npm install n8n -g
  ```

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/marcosware/n8n-nodes-random.git
    cd n8n-nodes-random
    ```
2. Execute `npm i` para instalar dependências.
3. Execute `npm run build` para construir o código TypeScript.
4. Execute `docker-compose up -d` para iniciar os Serviços Docker com a configuração padrão.
5. Acesse `http://localhost:5678` para usar n8n.

## Uso

* Valor mínimo e máximo: Define a faixa do gerador de número aleatório.
* Eles não podem ser o mesmo valor.

## Recursos

* [Documentação dos conectores n8n comunitários](https://docs.n8n.io/integrations/#community-nodes)

## Licença

[MIT](https://github.com/n8n-io/n8n-nodes-starter/blob/master/LICENSE.md)
