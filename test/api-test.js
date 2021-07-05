const chai = require('chai');
let server = require('../src/index');
let chaiHttp = require('chai-http');

should = chai.should();
const expect = chai.expect;
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

    it('it should Create a user or fail', async () => {
        const response = await chai.request(server).post('/user');
        response.body.should.be.a('object');
        expect(response.status).to.satisfy(function(status) { return status === 200 || status === 500; });
    });
});
