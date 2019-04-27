const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.locals.title = 'Test Express';

app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.send('We\'re going to test all the routes!');
});

app.get('/students', (request, response) => {
	database('students').select()
		.then((students) => {
			response.status(200).json(students);
		})
		.catch((error) => {
			response.status(500).json({ error });
		});
});

module.exports = app
