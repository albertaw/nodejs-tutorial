app.controller('MainController', function($scope, Users){
	
	$scope.users;
	
	Users.get().then(function(response){
		$scope.users = response.data;
	}, function(response){
		console.log(response.statusText);
	});



});