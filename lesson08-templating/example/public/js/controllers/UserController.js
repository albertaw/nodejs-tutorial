app.controller('UserController', function($scope, $http, $routeParams, users){
	
	$scope.user;

	users.success(function(data){
		$scope.user = data[$routeParams.userId];
  });

	$scope.addUser = function() {
		$http.post('/api/users', $scope.user)
			.then(function(response){
				
				$scope.users = response.data;
				console.log($scope.user);
				//clear the form data so that it does not get resubmitted
				$scope.user = {};
				//clear the form
				$('.form-control').val("");
			
			}, function(response) {
			console.error('Error: ' + response.statusText);
		});
	};
		
	$scope.editUser = function(id) {
		$http.put('/api/users/' + id, $scope.user)
		.then(function(response){
			$scope.users = response.data;
			console.log($scope.users);
		})
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
