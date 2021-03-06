const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

import request from 'supertest'
import app from './app'
import students from './students'


describe('Server', () => {

	beforeEach(async () => {
		await database.seed.run()
	})

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

  describe('GET /students/1', () => {
  	it('should return a single student', async () => {
  		const expectedStudent = await database('students').first()
  		const id = expectedStudent.id
  		const res = await request(app).get(`/students/${id}`)
  		const result = res.body[0]
  		expect(result).toEqual(expectedStudent)
  	})
  })

  describe('POST /students', () => {
  	it('should post a new student to the db', async () => {
  		const newStudent = { lastname: 'Mitchell', program: 'BE', enrolled: false }
  		const res = await request(app)
  												.post('/students')
  												.send(newStudent)

  		const students = await database('students').where('id', res.body.id).select()
  		const student = students[0]

  		expect(res.status).toBe(200)
  		expect(student.lastname).toEqual(newStudent.lastname)
  	})
  })

  describe('POST /students/1', () => {
  	it.skip('', () => {})
  })

  describe('DELETE /students/1', () => {
  	it.skip('', () => {})
  })
})
