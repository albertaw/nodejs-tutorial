app.controller('UserController', function($scope, $routeParams, Users){
	$scope.users;
	$scope.user;
	$scope.form = {};

	//get user by id
	Users.get().then(function(response){
		$scope.users = response.data;
		$scope.user = $scope.users[$routeParams.userId];
		console.log($scope.user);
  });

	$scope.create = function() {
		if (!jQuery.isEmptyObject($scope.form)) {
			//create an id, needs to be something better
			//$scope.form.id = $scope.users.length;
			//console.log($scope.form);
			//add new user
			Users.create($scope.form);
			console.log($scope.users);
			//update this list of users
			//$scope.users = response.data;
			//clear the form
			$scope.form = {};
			$('.form-control').val(null);	
		
			
		} else {
			console.error("No user information given.");
		}
	};
		
	$scope.update = function(user) {
		Users.update(user);
		console.log(user);
	};

	$scope.del = function(user) {
		Users.del(user).then(function(response){
			$scope.users = response.data;
			console.log($scope.users);
		}, function(response) {
			console.log('Error: ' + response.statusText);
		});
	};

});
