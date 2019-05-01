## Setup
<a href="https://app.zenhub.com/workspaces/crrt-teaching-tool-5cc5c6b429d79f4855fe3ba7/board?repos=178065941"><img src="./assets/zenhub-black.png"></a>

# Server-Side Testing with Express, Jest, Supertest, and Knex

Starter repo for Express API server interacting with a DB, using Jest and
Supertest

## Setup

To install dependencies, run:

```bash
npm install
```

To create your db's (you will need to have postgres installed):

```bash
psql

# then

CREATE DATABASE school;
CREATE DATABASE school_test;
\q
```

Then seed your db's:  
knex seed:run  
knex seed:run --env=test

## Run the Server

To start the server, run:

```bash
node server.js
```

Or use `nodemon` to run the server if you have nodemon installed globally.
