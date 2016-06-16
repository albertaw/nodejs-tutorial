app.controller('MainController', function($scope, $http){
	$scope.users;
	
	$http.get('/api/users')
		.then(function(response){
			$scope.users = response.data;
		}, function(response){
			console.error('Error: ' + response.statusText);
	});

	$scope.addUser = function() {
		$http.post('/api/users', $scope.user)
			.then(function(response){
			console.log($scope.user);
			$scope.users = response.data;
		}, function(response) {
			console.error('Error: ' + response.statusText);
		});
	};
	
	$scope.deleteUser = function(id) {
		$http.delete('/api/users/' + id)
			.then(function(response){
			$scope.users = response.data;
			console.log(response.data);
		}, function(data) {
			console.log('Error: ' + response.data);
		});
	};

});