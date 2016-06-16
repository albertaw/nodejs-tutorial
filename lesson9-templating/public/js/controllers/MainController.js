app.controller('MainController', function($scope, $http){
	$scope.users;
	$http.get('/api/users').success(function(data){
			$scope.users = data;
		})
		.error(function(err){
			console.log(err);
		});

	$scope.addUser = function() {
		$http.post('/api/users', $scope.user).success(function(data){
			console.log($scope.user);
			$scope.users = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};
	
	$scope.deleteUser = function(id) {
		$http.delete('/api/users/' + id).success(function(data){
			$scope.users = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

});