<a href="https://zenhub.com"><img src="https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png"></a>
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/syl20bnr/spacemacs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Build Status](https://travis-ci.org/syl20bnr/spacemacs.svg)](https://travis-ci.org/syl20bnr/spacemacs)   [![Made with Spacemacs](https://cdn.rawgit.com/syl20bnr/spacemacs/442d025779da2f62fc86c2082703697714db6514/assets/spacemacs-badge.svg)](http://github.com/syl20bnr/spacemacs)  [![Buy A Drink](https://img.shields.io/badge/Paypal-Buy%20a%20Drink-blue.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ESFVNPKP4Y742) [![Recommend Spacemacs](https://img.shields.io/badge/Slant-Recommend-ff69b4.svg)](http://www.slant.co/topics/12/~what-are-the-best-programming-text-editors)[![Twitter][]](http://www.twitter.com/spacemacs)
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/syl20bnr/spacemacs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Build Status](https://travis-ci.org/syl20bnr/spacemacs.svg)](https://travis-ci.org/syl20bnr/spacemacs)   [![Made with Spacemacs](https://cdn.rawgit.com/syl20bnr/spacemacs/442d025779da2f62fc86c2082703697714db6514/assets/spacemacs-badge.svg)](http://github.com/syl20bnr/spacemacs)  [![Buy A Drink](https://img.shields.io/badge/Paypal-Buy%20a%20Drink-blue.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ESFVNPKP4Y742) [![Recommend Spacemacs](https://img.shields.io/badge/Slant-Recommend-ff69b4.svg)](http://www.slant.co/topics/12/~what-are-the-best-programming-text-editors) [![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.io) [![Twitter][]](http://www.twitter.com/spacemacs)


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
