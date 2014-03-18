var app = require('../app'),
	request = require('supertest');

describe('github tracker heartbeat api', function(){

	describe('when requesting resource /heartbeat', function(){
		it('should respond with 200', function(done){
			request(app)
			.get('/heartbeat')
			.expect('Content-Type', /json/)
			.expect(200, done);
		});

	});
});


describe("github tracker heartbeat api", function(){
	describe("when request resource /missing", function(){
		it('should respond with a 404', function(done){
			request(app)
			.get('/missing')
			.expect('Content-Type', /json/)
			.expect(404, done);
		});
	});
});