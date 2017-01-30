//https://scotch.io/tutorials/node-and-angular-to-do-app-controllers-and-services
app.factory('Users', function($http){
	var store = {
		get: function () {
			return $http.get('/api/users');
		},
		create: function(user) {
			return $http.post('/api/users', user);
		},
		update: function(user) {
			return $http.put('/api/users/' + user.username, user);
		},
		del: function(user) {
			return $http.delete('/api/users/' + user.username);
		}
	}
	return store;
});
	