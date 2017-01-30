describe('test suite', function () {
	it('should pass', function (done) {
		setTimeout(function () {
			done();
		}, 500);
	});

	it('should fail', function (done) {
		setTimeout(function () {
			done(new Error('fail'));
		});
	});
})