const environment = process.env.NODE_ENV || 'developement'
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

  describe('', () => {
  	it('', () => {})
  })
})
