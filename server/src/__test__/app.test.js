const request = require('supertest');
const app = require('../app');

describe('GET /v1/', () => { 
    it("", () => {
        request(app)
            .get('/v1/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                return (err) ? done(err) : done();
            });
    });
});



describe("GET /*", function () {
    it("return html page", function (done) {
        request(app)
            .get('/v1/abc')
            .expect('Content-Type', 'text/html; charset=UTF-8')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                return done();
            })
    })
});