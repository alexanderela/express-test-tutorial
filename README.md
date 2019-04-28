<a href="https://app.zenhub.com/workspaces/express-testing-tutorial-5cc4f9f107a4ab52d27abce1/board?repos=183817666"><img src="https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png"></a>

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
