var todoApp = angular.module('todoApp', []);
todoApp.controller('MainController', ['$scope','todoWebService', function ($scope, todoWebService) {
	var todo = {};
	//model
	todo.list = [];

	//start the initial load of lists
	todoWebService.getItems().then(function (response) {
		todo.list = response.data.items;
	});

	todo.add = function () {
		var item = {details: todo.newItem};
		//clear from the ui
		todo.newItem = '';
		//send the request to the server and add the item once done
		todoWebService.addItem(item).then(function (response) {
			todo.list.push({
				_id: response.data.itemId,
				details: item.details
			});
		});
	};

	todo.remove = function (itemToRemove) {
		//remove from list
		todo.list = todo.list.filter(function (item) {
			return item._id !== itemToRemove._id;
		});
		//send the server request
		todoWebService.removeItem(itemToRemove);
	};

	todo.newItem = '';

	//expose the todo view model
	$scope.todo = todo;

}]);

todoApp.service('todoWebService', ['$http', function ($http) {
	var root = '/todo';
	return {
		getItems: function () {
			return $http.get(root);
		},
		addItem: function (item) {
			return $http.post(root, item);
		},
		removeItem: function (item) {
			return $http.delete(root + '/' + item._id);
		}
	};
}]);