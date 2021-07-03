const chai = require('chai');
let server = require('../src/index');
let chaiHttp = require('chai-http');

should = chai.should();
chai.use(chaiHttp);

describe('/id', () => {
    it('it should GET uuid', (done) => {
        chai.request(server)
            .get("/id").end((err, res) => {
            should.not.exist(err);
            res.should.have.status(200);
            done();
        });
    });
});

describe('/user', () => {
    it('it should GET a user', (done) => {
        chai.request(server)
            .get("/user").end((err, res) => {
            should.not.exist(err);
            res.body.should.be.a('object');
            res.should.have.status(201);
            done();
        });
    });

    it('it should Create a user or fail', (done) => {
        chai.request(server)
            .post("/user").end(async (err, res) => {
            res.should.have.status(200 || 500 );
            done();
        });
    });
});
