const supertest = require('supertest')
const app = require('../app.js')

test("GET /", (done) =>{
    supertest(app).get('/todo/')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
        expect(response.body.message).toBe("Success")
        done()
    }).catch(
        done
    )
})

test("GET By Id /", (done) =>{
    const id = 1
    supertest(app).get(`/todo/${id}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
        expect(response.body.message).toBe("Success")
        done()
    }).catch(
        done
    )
})

test("POST /", (done) =>{
    supertest(app).post('/todo/')
    .send({ title: 'testing supertest' })
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
        expect(response.body.message).toBe("Success")
        done()
    }).catch(
        done
    )
})

test("PUT /:id", (done) =>{
    const id = 3
    supertest(app).put(`/todo/${id}`)
    .send({ title: 'testing supertest' })
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
        expect(response.body.message).toBe("Success")
        done()
    }).catch(
        done
    )
})


test("soft delete", (done) =>{
    const id = 3
    supertest(app).delete(`/todo/${id}`)
    .send({ is_deleted: 'true' })
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
        expect(response.body.message).toBe("Success")
        done()
    }).catch(
        done
    )
})