app.controller('MainController', function($scope, $http, users){
	
	$scope.users;
	
	users.success(function(data){
		$scope.users = data;
	})
	.error(function(error){
		console.log(error);
	});


});