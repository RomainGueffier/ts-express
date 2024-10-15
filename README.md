# ts-express

## Table of Contents

-   [About](#about)
-   [Getting Started](#getting_started)
-   [Usage](#usage)
-   [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

Reproduction branch for issue [TSOA#1651](https://github.com/lukeautry/tsoa/issues/1651)

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

Install node js

```
nvm use 22
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Start postgre db

```
docker run --name postgres -e POSTGRES_PASSWORD=localdev -p 5432:5432 -d postgres
```

Add .env file

```
PORT=3000
NODE_ENV=development
DATABASE_URL=postgresql://postgres:localdev@localhost:5432/postgres
```

Run app

```
pnpm i
pnpm dev
```
