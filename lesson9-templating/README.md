## Angular

On the server we define our routes and in the request 
handler we will either create, read, update or delete
an object in our data store.  In this example, the 
data store is an array.  Therefore, any changes made to
the array will only exist during the session you are
running your app. You're data can come from a json file,
your database, or an external api.  For angular to use 
this data, we need to make use of their $http service. 
To use the $http service, you will call the request method
with the url and a callback function. POST and PUT requests
need request data passed into them. 

```js
//retrieve an object
$http.get('/url')
//success callback
.then(function(response){
  $scope.users = response.data;
  //error callback
}, function(response) {
  console.log(response.statusText);
});

//create an object with the supplied data
$http.post('/url', data).then(successCallback, errorCallback);

//update an object with the supplied data
$http.put('/url', data).then(successCallback, errorCallback);

//delete an object
$http.delete('/url').then(successCallback, errorCallback);
```

### Steps to making an Angular app:   
I. Create a module and use ng-app in the view to define
the application scope.  
```js
var app = angular.module("myApp", []);
```
in your view:

```html
<html ng-app="myApp">
```
II. Create a controller and use ng-controller in the 
view to define the controller scope. 

```js
app.controller('MainController', ['$scope',function($scope){
	$scope.title = "My App";
}]);
```
in your view:

```html
<body ng-controller="MainController">
```

III. Add data to $scope in the controller so it can be
displayed with expressions in the view.
```html
<h1>{{ title }}</h1>
```

If the data is in an array:

```html
<div ng-repeat="item in array">
   <div>{{ item.value }}</div>
</div>
```

## Directives

Allow you to make resusable HTML components
```js
var app = angular.module('myapp', []);

app.directive('helloWorld', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'js/directives/helloWorld.html'
  };
});
```
restrict specifies how the directive is used in HTML
A is for attribute

```html
<div hello-world></div>
```

E is for element

```html
<hello-world></hello-world>
```

**template** - specifies the HTML markup  
**templateUrl** - the file path to the template code  
**replace** - if the generated template will replace the HTML element that the directive is attached to.  
**link** - a function that uses the parent scope to attach behavior to the DOM. Takes 3 arguments: scope, elem, attrs. Common uses are attaching event listeners, watching model properties for changes, and updating the DOM.  
**compile** - a function that performs DOM transformations before the link function.  
**scope** - change a directive's scope to a child scope or isolated scope. Specifies the attributes we will pass through the directive and how it will be passed  

## Services

Services let you share code across your app. For example, angular has an $http service that lets you fetch data from a server. To use a service you inject the service as a dependency in your controller. If you would like to create your own service,
you use the factory method.

Create a file named js/services/service.js and include:

```js
app.factory('service', function($http){
	return $http.get('/path')
	.success(function(data){
		return data;
	})
	.error(function(err){
	return err;
	})
})
```
in the controller:

```js
app.controller('MainController', ['$scope', 'service', function($scope, service) {
	service.success(function(data){
    $scope.data = data;
  });
}]);
```
in view:

```html
{{ data.key1 }}
```
## Routing
Lets you map routes to request handlers.

```js
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    controller: 'MainController',
    templateUrl: 'views/main.html'
  })
  .when('/:id',{
    controller: 'UserController',
    templateUrl: 'views/user.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
```
In controller inject $routeParams as a dependency

```js
app.controller("UserController", function($scope, $routeParams, users){
  users.success(function(data){
    $scope.user = data[$routeParams.id];
  });
})
```

When you implement routing, you do not need to attach
the controller to the view because the controller is already
specified in the routes. In your main html page, include the ng-view directive where you want to inject your views.  When you request a route, for example the '\' route, main.html will be injected into ng-view and the code in the MainController will
be executed.

```html
<body ng-app="myApp">
  ...
  <div class="main">
    <ng-view></ng-view>
  </div>
  ...
</body>
```
## TODO 
Implement edit functionality and create routes and views for users, user, and edit.  