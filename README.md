# n8n-nodes-random

[Leia este README em português](README-PTBR.md)

![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

This is an n8n community node. It lets you use [Random.org API](https://www.random.org/integers/) to generate a true random number between two values in your n8n workflows.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Developing](#developing)
- [Resources](#resources)
- [License](#license)

---

## Prerequisites

You need the following installed on your development machine:

* [Git](https://git-scm.com/downloads)
* Node.js and npm. Minimum version Node 20.
  - Linux/Mac: [nvm - Node Version Manager](https://github.com/nvm-sh/nvm).
  - Windows: [NodeJS - Microsoft Guide](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
* [Docker](https://www.docker.com/) and Docker Compose
* Install n8n globally:
  ```
  npm install n8n -g
  ```

## Installation

1. Clone the repo:
    ```bash
    git clone https://github.com/marcosware/n8n-nodes-random.git
    cd n8n-nodes-random
    ```
2. Run `npm install` to install dependencies.
3. Run `npm run build` to build the TypeScript code.
4. Run `docker-compose up -d` to start Docker Services with default configuration.
5. Access n8n at `http://localhost:5678`.

## Environment Variables

If running n8n via Docker, you can configure environment variables in a .env file or directly in docker-compose.yml:
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
This ensures n8n connects correctly to the database and loads your custom nodes.

## Usage

* Min: Minimal value for the random number.
* Max: Maximum value for the random number.
* Values cannot be the same.

## Developing

* Add new nodes under /nodes and credentials under /credentials.
* Update the "n8n" section in package.json to include them.
* Build using:
```
npm run build
```
* Restart the Docker container to test your changes.
* Use npm run lint to check for errors, or npm run lintfix to automatically fix issues.
* See n8n node creation guide

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [Random.org API documentation](https://www.random.org/clients/http/)

## License

[MIT](https://github.com/n8n-io/n8n-nodes-starter/blob/master/LICENSE.md)
