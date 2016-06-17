app.factory('users', function($http){
	return $http.get('/api/users')
		.success(function(data){
		return data;
	})
		.error(function(err){
		return err;
	});
});
	