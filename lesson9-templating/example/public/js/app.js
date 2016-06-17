var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'MainController',
		templateUrl: 'views/main.html'
	})
	.when('/add', {
		controller: 'UserController',
		templateUrl: 'views/addUser.html'
	})
	.when('/:userId', {
		controller: 'UserController',
		templateUrl: 'views/editUser.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});