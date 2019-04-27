const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

import request from 'supertest'
import app from './app'
import students from './students'


describe('Server', () => {
  describe('init', () => {
    it('should return a 200 status', async () => {
      const res = await request(app).get('/')
      expect(res.status).toBe(200)
    })
  })

  describe('GET /students', () => {
  	it('should return all the students in the DB', async () => {
  		const expectedStudents = students.length
  		const res = await request(app).get('/students')
  		const result = res.body
  		expect(result.length).toEqual(expectedStudents)
  	})
  })

  describe('', () => {
  	it('', () => {})
  })

  describe('', () => {
  	it('', () => {})
  })

  describe('', () => {
  	it('', () => {})
  })

  describe('', () => {
  	it('', () => {})
  })

  describe('', () => {
  	it('', () => {})
  })
})
