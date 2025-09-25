![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-random

This is an n8n community node. It lets you use Random.org API to generate a random integer between two values in your n8n workflows.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Usage](#usage)
[Resources](#resources)
[License](#license)

## Prerequisites

You need the following installed on your development machine:

* [Git](https://git-scm.com/downloads)
* Node.js and npm. Minimum version Node 20.
  - Linux/Mac: [nvm - Node Version Manager](https://github.com/nvm-sh/nvm).
  - Windows: [NodeJS - Microsoft Guide](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
* [Docker](https://www.docker.com/) and Docker Compose
* Install n8n with:
  ```
  npm install n8n -g
  ```

## Installation

1. Clone the repo:
    ```bash
    git clone https://github.com/marcosware/n8n-nodes-random.git
    cd n8n-nodes-random
    ```
2. Run `npm i` to install dependencies.
3. Run `npm run build` to build the TypeScript code.
4. Run `docker-compose up -d` to start Docker Services with default configuration.
5. Access `http://localhost:5678` to use n8n.

## Usage

* Minimal and maximum value: Range to the random number generator.
* Can't be the same value.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)

## License

[MIT](https://github.com/n8n-io/n8n-nodes-starter/blob/master/LICENSE.md)
