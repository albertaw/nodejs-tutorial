var Q = require('q');

describe('test suite', function () {
	it('should pass', function () {
		return Q.when('pass');
	});

	it('should fail', function () {
		return Q.reject(new Error('fail'));
	});
});